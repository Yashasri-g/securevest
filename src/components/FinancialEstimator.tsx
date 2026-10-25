'use client';

import React, { useState } from 'react';

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

export default function FinancialEstimator({ onOpenBooking }: FinancialEstimatorProps) {
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

  // Calculations
  const annualExpenses = monthlyExpenses * 12;
  const yearsToRetirement = Math.max(1, retireAge - age);
  
  // Term Life Coverage: 10x Annual Expenses + $125k per dependent child
  const recommendedInsurance = Math.max(250000, annualExpenses * 10 + dependents * 125000);
  
  // Retirement targets: 85% replacement ratio, 25x safe withdrawal rate
  const targetMonthlyRetire = Math.round(monthlyExpenses * 0.85);
  const targetNestEgg = targetMonthlyRetire * 12 * 25;

  // Breakdown percentages for visual allocation bar
  const incomeShare = 60;
  const debtShare = 25;
  const educationShare = dependents > 0 ? 15 : 0;
  const adjustedIncomeShare = dependents > 0 ? 60 : 75;

  return (
    <div className="cockpit-container" aria-label="Interactive Wealth and Protection Scenario Cockpit">
      {/* Cockpit Top Bar / Preset Switcher */}
      <div className="cockpit-header-bar">
        <div className="cockpit-title-group">
          <span className="cockpit-badge">Interactive Strategy Cockpit</span>
          <h3 className="cockpit-heading">Model Your Family's Financial Horizon</h3>
          <p className="cockpit-subheading">
            Adjust inputs below to dynamically calculate your essential term life coverage and retirement nest egg targets.
          </p>
        </div>
        <div className="cockpit-presets-group" role="group" aria-label="Quick Scenario Presets">
          <span className="presets-label">Quick Scenarios:</span>
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

      <div className="cockpit-grid">
        {/* Left Inputs Pane */}
        <div className="cockpit-inputs-pane">
          <div className="cockpit-slider-group">
            <div className="slider-header-row">
              <label htmlFor="cockpitAgeInput" className="slider-label">Current Age</label>
              <span className="slider-counter">{age} yrs</span>
            </div>
            <input
              type="range"
              id="cockpitAgeInput"
              className="cockpit-range"
              min="20"
              max="65"
              value={age}
              onChange={(e) => {
                setAge(parseInt(e.target.value, 10));
                setActivePreset(null);
              }}
              aria-label="Current Age"
            />
            <div className="slider-markers">
              <span>20</span>
              <span>35</span>
              <span>50</span>
              <span>65</span>
            </div>
          </div>

          <div className="cockpit-slider-group">
            <div className="slider-header-row">
              <label htmlFor="cockpitExpensesInput" className="slider-label">Monthly Living Expenses</label>
              <span className="slider-counter highlight-cyan">{formatCurrency(monthlyExpenses)}<small>/mo</small></span>
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
            <div className="slider-markers">
              <span>$2.5k</span>
              <span>$8k</span>
              <span>$14k</span>
              <span>$20k</span>
            </div>
          </div>

          <div className="cockpit-slider-group">
            <div className="slider-header-row">
              <label htmlFor="cockpitRetireAgeInput" className="slider-label">Desired Retirement Age</label>
              <span className="slider-counter">{retireAge} yrs <small>({yearsToRetirement} yrs away)</small></span>
            </div>
            <input
              type="range"
              id="cockpitRetireAgeInput"
              className="cockpit-range"
              min="50"
              max="75"
              value={retireAge}
              onChange={(e) => {
                setRetireAge(parseInt(e.target.value, 10));
                setActivePreset(null);
              }}
              aria-label="Desired Retirement Age"
            />
            <div className="slider-markers">
              <span>50</span>
              <span>60</span>
              <span>65</span>
              <span>75</span>
            </div>
          </div>

          <div className="cockpit-slider-group" style={{ marginBottom: 0 }}>
            <div className="slider-header-row">
              <label htmlFor="cockpitDependentsInput" className="slider-label">Dependents / Children</label>
              <span className="slider-counter">
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
            <div className="slider-markers">
              <span>0</span>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5+</span>
            </div>
          </div>
        </div>

        {/* Right Output & Strategy Pane */}
        <div className="cockpit-results-pane">
          <div className="results-header">
            <span className="results-badge">Recommended Fiduciary Targets</span>
            <div className="results-projection-tag">{yearsToRetirement}-Year Strategy Window</div>
          </div>

          {/* Primary Metric 1: Term Life Shield */}
          <div className="metric-card metric-primary">
            <div className="metric-icon-box cyan">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div className="metric-content">
              <span className="metric-label">Recommended Family Life Protection</span>
              <div className="metric-value cyan-glow">{formatCurrency(recommendedInsurance)}</div>
              <p className="metric-subtext">
                Covers {yearsToRetirement > 15 ? '10-20' : '10-15'} years of income replacement + mortgage liquidation + {dependents > 0 ? `${dependents} child education reserve` : 'debt buffer'}.
              </p>
            </div>
          </div>

          {/* Primary Metric 2: Retirement Nest Egg */}
          <div className="metric-card metric-secondary">
            <div className="metric-icon-box gold">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                <path d="M12 18V6"></path>
              </svg>
            </div>
            <div className="metric-content">
              <span className="metric-label">Target Retirement Nest Egg</span>
              <div className="metric-value gold-glow">{formatCurrency(targetNestEgg)}</div>
              <p className="metric-subtext">
                Generates <strong style={{ color: 'var(--color-white)' }}>{formatCurrency(targetMonthlyRetire)}/month</strong> in sustainable lifelong retirement cash flow (at 85% living standard).
              </p>
            </div>
          </div>

          {/* Allocation Breakdown Bar */}
          <div className="cockpit-breakdown-box">
            <div className="breakdown-label-row">
              <span className="breakdown-title">Protection Allocation Composition:</span>
              <span className="breakdown-summary">{formatCurrency(annualExpenses)} Annual Base</span>
            </div>
            <div className="breakdown-bar" role="meter" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} aria-label="Coverage Breakdown">
              <div className="bar-segment bar-income" style={{ width: `${adjustedIncomeShare}%` }} title="Income Replacement" />
              <div className="bar-segment bar-debt" style={{ width: `${debtShare}%` }} title="Mortgage & Debt Clearance" />
              {educationShare > 0 && (
                <div className="bar-segment bar-edu" style={{ width: `${educationShare}%` }} title="College 529 Reserve" />
              )}
            </div>
            <div className="breakdown-legend">
              <span className="legend-item"><span className="legend-dot cyan" /> Income Continuity ({adjustedIncomeShare}%)</span>
              <span className="legend-item"><span className="legend-dot navy" /> Debt / Mortgage ({debtShare}%)</span>
              {educationShare > 0 && (
                <span className="legend-item"><span className="legend-dot gold" /> College Reserve ({educationShare}%)</span>
              )}
            </div>
          </div>

          {/* Action CTA Trigger */}
          <div className="cockpit-action-box">
            {onOpenBooking ? (
              <button
                type="button"
                className="btn btn-accent btn-lg btn-full"
                onClick={onOpenBooking}
              >
                Schedule Strategy Review For These Numbers
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            ) : (
              <a
                href="https://calendly.com/securevestsolutions/appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent btn-lg btn-full"
              >
                Schedule Strategy Review For These Numbers
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            )}
            <p className="cockpit-disclaimer">
              Calculations are educational fiduciary benchmarks based on the DIME method and 4% safe withdrawal guidelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
