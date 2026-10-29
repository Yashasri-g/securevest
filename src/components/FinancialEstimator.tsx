'use client';

import React, { useState } from 'react';
import { useBookingModal } from './ClientShell';
import ThemeButton from './ThemeButton';

interface FinancialEstimatorProps {
  onOpenBooking?: () => void;
}

interface ScenarioPreset {
  name: string;
  age: number;
  monthlyExpenses: number;
  retireAge: number;
  dependents: number;
}

const PRESETS: ScenarioPreset[] = [
  {
    name: 'Young Family',
    age: 32,
    monthlyExpenses: 5500,
    retireAge: 65,
    dependents: 2,
  },
  {
    name: 'Established Household',
    age: 44,
    monthlyExpenses: 8500,
    retireAge: 65,
    dependents: 2,
  },
  {
    name: 'Pre-Retirement',
    age: 56,
    monthlyExpenses: 10500,
    retireAge: 64,
    dependents: 0,
  },
];

/** Tick labels placed on the range thumb's travel path (19px thumb), so each sits under its real value. */
function SliderTicks({ min, max, ticks }: { min: number; max: number; ticks: { value: number; label: string }[] }) {
  return (
    <div className="slider-scale slider-scale-ticks" aria-hidden="true">
      {ticks.map((t) => (
        <span key={t.value} style={{ left: `calc(9.5px + (100% - 19px) * ${(t.value - min) / (max - min)})` }}>
          {t.label}
        </span>
      ))}
    </div>
  );
}

export default function FinancialEstimator({ onOpenBooking }: FinancialEstimatorProps) {
  const bookingModal = useBookingModal();
  const handleBooking = onOpenBooking || bookingModal?.openBooking;

  const [age, setAge] = useState(38);
  const [monthlyExpenses, setMonthlyExpenses] = useState(6500);
  const [retireAge, setRetireAge] = useState(65);
  const [dependents, setDependents] = useState(2);
  const [activePreset, setActivePreset] = useState<string | null>(null);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const applyPreset = (preset: ScenarioPreset) => {
    setAge(preset.age);
    setMonthlyExpenses(preset.monthlyExpenses);
    setRetireAge(preset.retireAge);
    setDependents(preset.dependents);
    setActivePreset(preset.name);
  };

  // Dynamic Fiduciary Calculations
  const annualExpenses = monthlyExpenses * 12;
  const yearsToRetirement = Math.max(1, retireAge - age);
  
  // Term Life Coverage: 10x Annual Expenses + $125k per dependent child (DIME method)
  const recommendedInsurance = Math.max(250000, annualExpenses * 10 + dependents * 125000);
  
  // Retirement targets: 85% replacement ratio, 25x safe withdrawal rate (4% rule)
  const targetMonthlyRetire = Math.round(monthlyExpenses * 0.85);
  const targetNestEgg = targetMonthlyRetire * 12 * 25;

  // Allocation percentages for visual allocation bar
  const debtShare = 25;
  const educationShare = dependents > 0 ? 15 : 0;
  const adjustedIncomeShare = dependents > 0 ? 60 : 75;

  return (
    <div className="cockpit-container" aria-label="Interactive Wealth and Protection Scenario Simulator">
      {/* Delicate Gold Top Hairline Accent */}
      <span className="cockpit-top-line" aria-hidden="true" />

      {/* Sleek Top Control Bar */}
      <div className="cockpit-header-bar">
        <div className="cockpit-status-tag">
          <span className="cockpit-pulse-dot" aria-hidden="true" />
          <span className="cockpit-status-text">Interactive Fiduciary Simulator</span>
        </div>

        <div className="cockpit-presets-group" role="group" aria-label="Quick Scenario Presets">
          <span className="presets-label">Scenario Presets:</span>
          <div className="presets-pills-row">
            {PRESETS.map((p) => (
              <button
                key={p.name}
                type="button"
                className={`preset-pill ${activePreset === p.name ? 'active' : ''}`}
                onClick={() => applyPreset(p)}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="cockpit-grid">
        {/* Left Inputs Pane: Spacious, Clean Vertical Stack */}
        <div className="cockpit-inputs-pane">
          <div className="pane-section-header">
            <span className="pane-title">Household Baseline</span>
            <span className="pane-hint">Drag sliders to recalculate targets in real time</span>
          </div>

          <div className="sliders-stack">
            {/* Slider 1: Current Age */}
            <div className="slider-row">
              <div className="slider-row-top">
                <label htmlFor="cockpitAgeInput" className="slider-label">Current Age</label>
                <span className="slider-badge">{age} <small>years</small></span>
              </div>
              <input
                type="range"
                id="cockpitAgeInput"
                className="cockpit-range"
                min="20"
                max="65"
                value={age}
                onChange={(e) => {
                  const val = parseInt(e.target.value, 10);
                  setAge(val);
                  if (val >= retireAge) setRetireAge(Math.min(75, val + 1));
                  setActivePreset(null);
                }}
                aria-label="Current Age"
              />
              <SliderTicks min={20} max={65} ticks={[{ value: 20, label: '20' }, { value: 35, label: '35' }, { value: 50, label: '50' }, { value: 65, label: '65' }]} />
            </div>

            {/* Slider 2: Desired Retirement Age */}
            <div className="slider-row">
              <div className="slider-row-top">
                <label htmlFor="cockpitRetireAgeInput" className="slider-label">Desired Retirement Target</label>
                <span className="slider-badge">
                  {retireAge} <small>yrs ({yearsToRetirement}y away)</small>
                </span>
              </div>
              <input
                type="range"
                id="cockpitRetireAgeInput"
                className="cockpit-range"
                min="50"
                max="75"
                value={retireAge}
                onChange={(e) => {
                  const val = parseInt(e.target.value, 10);
                  setRetireAge(val);
                  if (val <= age) setAge(Math.max(20, val - 1));
                  setActivePreset(null);
                }}
                aria-label="Desired Retirement Age"
              />
              <SliderTicks min={50} max={75} ticks={[{ value: 50, label: '50' }, { value: 60, label: '60' }, { value: 65, label: '65' }, { value: 75, label: '75' }]} />
            </div>

            {/* Slider 3: Monthly Expenses */}
            <div className="slider-row">
              <div className="slider-row-top">
                <label htmlFor="cockpitExpensesInput" className="slider-label">Monthly Household Expenses</label>
                <span className="slider-badge highlight-gold">
                  {formatCurrency(monthlyExpenses)}<small>/mo</small>
                </span>
              </div>
              <input
                type="range"
                id="cockpitExpensesInput"
                className="cockpit-range"
                min="2500"
                max="20000"
                step="500"
                value={monthlyExpenses}
                onChange={(e) => {
                  setMonthlyExpenses(parseInt(e.target.value, 10));
                  setActivePreset(null);
                }}
                aria-label="Monthly Household Living Expenses"
              />
              <SliderTicks min={2500} max={20000} ticks={[{ value: 2500, label: '$2.5k' }, { value: 8000, label: '$8k' }, { value: 14000, label: '$14k' }, { value: 20000, label: '$20k' }]} />
            </div>

            {/* Slider 4: Dependents */}
            <div className="slider-row">
              <div className="slider-row-top">
                <label htmlFor="cockpitDependentsInput" className="slider-label">Dependent Children</label>
                <span className="slider-badge">
                  {dependents === 0 ? 'None' : `${dependents} ${dependents === 1 ? 'Child' : 'Children'}`}
                </span>
              </div>
              <input
                type="range"
                id="cockpitDependentsInput"
                className="cockpit-range"
                min="0"
                max="5"
                value={dependents}
                onChange={(e) => {
                  setDependents(parseInt(e.target.value, 10));
                  setActivePreset(null);
                }}
                aria-label="Number of Dependents"
              />
              <SliderTicks min={0} max={5} ticks={[0, 1, 2, 3, 4, 5].map((n) => ({ value: n, label: n === 5 ? '5+' : String(n) }))} />
            </div>
          </div>
        </div>

        {/* Right Output & Strategy Pane */}
        <div className="cockpit-results-pane">
          <div className="results-header">
            <span className="results-badge">Recommended Fiduciary Targets</span>
            <span className="results-projection-tag">{yearsToRetirement}-Year Horizon</span>
          </div>

          <div className="results-cards-stack">
            {/* Target 1: Life Protection Shield */}
            <div className="target-card target-primary">
              <div className="target-card-top">
                <div className="target-info">
                  <div className="target-label-row">
                    <div className="target-icon-box" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <span className="target-label">Life Protection Shield</span>
                  </div>
                  <div className="target-value">{formatCurrency(recommendedInsurance)}</div>
                </div>
              </div>
              <p className="target-subtext">
                10× income continuity + debt liquidation + {dependents > 0 ? `${dependents} child college buffer` : 'reserve buffer'}.
              </p>
            </div>

            {/* Target 2: Retirement Nest Egg */}
            <div className="target-card target-secondary">
              <div className="target-card-top">
                <div className="target-info">
                  <div className="target-label-row">
                    <div className="target-icon-box" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                        <path d="M12 18V6" />
                      </svg>
                    </div>
                    <span className="target-label">Target Retirement Nest Egg</span>
                  </div>
                  <div className="target-value gold">{formatCurrency(targetNestEgg)}</div>
                </div>
              </div>
              <p className="target-subtext">
                Generates <strong className="text-white">{formatCurrency(targetMonthlyRetire)}/mo</strong> in sustainable lifelong retirement cash flow (4% rule).
              </p>
            </div>
          </div>

          {/* Allocation Breakdown Bar */}
          <div className="cockpit-breakdown-box">
            <div className="breakdown-label-row">
              <span className="breakdown-title">Protection Allocation Composition:</span>
              <span className="breakdown-summary">{formatCurrency(annualExpenses)} Base/Yr</span>
            </div>
            <div className="breakdown-bar" role="meter" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} aria-label="Coverage Breakdown">
              <div className="bar-segment bar-income" style={{ width: `${adjustedIncomeShare}%` }} title="Income Replacement" />
              <div className="bar-segment bar-debt" style={{ width: `${debtShare}%` }} title="Mortgage & Debt Clearance" />
              {educationShare > 0 && (
                <div className="bar-segment bar-edu" style={{ width: `${educationShare}%` }} title="College 529 Reserve" />
              )}
            </div>
            <div className="breakdown-legend">
              <span className="legend-item"><span className="legend-dot gold" /> Income ({adjustedIncomeShare}%)</span>
              <span className="legend-item"><span className="legend-dot navy" /> Debt ({debtShare}%)</span>
              {educationShare > 0 && (
                <span className="legend-item"><span className="legend-dot amber" /> College ({educationShare}%)</span>
              )}
            </div>
          </div>

          {/* Action CTA */}
          <div className="cockpit-action-box">
            <ThemeButton
              variant="gold"
              size="md"
              fullWidth
              className="justify-center text-center font-bold"
              onClick={() => {
                if (handleBooking) {
                  handleBooking();
                } else if (typeof window !== 'undefined') {
                  window.open('https://calendly.com/securevestsolutions/appointment', '_blank', 'noopener,noreferrer');
                }
              }}
              showArrow={true}
            >
              Schedule Strategy Review For These Numbers
            </ThemeButton>
            <p className="cockpit-disclaimer">
              Educational benchmarks based on the DIME method &amp; 4% safe withdrawal guidelines. Not individual financial advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
