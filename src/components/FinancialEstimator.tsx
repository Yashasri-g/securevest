'use client';

import React, { useState } from 'react';

interface FinancialEstimatorProps {
  onOpenBooking?: () => void;
}

export default function FinancialEstimator({ onOpenBooking }: FinancialEstimatorProps) {
  const [age, setAge] = useState(38);
  const [monthlyExpenses, setMonthlyExpenses] = useState(6000);
  const [retireAge, setRetireAge] = useState(65);
  const [dependents, setDependents] = useState(2);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  // Calculations
  const annualExpenses = monthlyExpenses * 12;
  const recommendedInsurance = Math.max(250000, annualExpenses * 10 + dependents * 100000);
  const targetMonthlyRetire = Math.round(monthlyExpenses * 0.85);
  const targetNestEgg = targetMonthlyRetire * 12 * 25;

  return (
    <div className="calc-card">
      {/* Input Controls */}
      <div className="calc-inputs-pane">
        <div className="calc-slider-group">
          <div className="calc-slider-header">
            <label htmlFor="calcAgeInput" className="calc-label">Your Current Age</label>
            <span className="calc-value-display">{age} yrs</span>
          </div>
          <input
            type="range"
            id="calcAgeInput"
            className="calc-range-input"
            min="20"
            max="65"
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value, 10))}
            aria-label="Current Age"
          />
        </div>

        <div className="calc-slider-group">
          <div className="calc-slider-header">
            <label htmlFor="calcExpensesInput" className="calc-label">Monthly Household Expenses</label>
            <span className="calc-value-display">{formatCurrency(monthlyExpenses)}/mo</span>
          </div>
          <input
            type="range"
            id="calcExpensesInput"
            className="calc-range-input"
            min="2000"
            max="18000"
            step="500"
            value={monthlyExpenses}
            onChange={(e) => setMonthlyExpenses(parseInt(e.target.value, 10))}
            aria-label="Monthly Household Expenses"
          />
        </div>

        <div className="calc-slider-group">
          <div className="calc-slider-header">
            <label htmlFor="calcRetireAgeInput" className="calc-label">Target Retirement Age</label>
            <span className="calc-value-display">{retireAge} yrs</span>
          </div>
          <input
            type="range"
            id="calcRetireAgeInput"
            className="calc-range-input"
            min="50"
            max="75"
            value={retireAge}
            onChange={(e) => setRetireAge(parseInt(e.target.value, 10))}
            aria-label="Target Retirement Age"
          />
        </div>

        <div className="calc-slider-group" style={{ marginBottom: 0 }}>
          <div className="calc-slider-header">
            <label htmlFor="calcDependentsInput" className="calc-label">Dependents / Children</label>
            <span className="calc-value-display">
              {dependents === 0 ? 'None' : `${dependents} ${dependents === 1 ? 'person' : 'people'}`}
            </span>
          </div>
          <input
            type="range"
            id="calcDependentsInput"
            className="calc-range-input"
            min="0"
            max="5"
            value={dependents}
            onChange={(e) => setDependents(parseInt(e.target.value, 10))}
            aria-label="Number of Dependents"
          />
        </div>
      </div>

      {/* Dynamic Results Pane */}
      <div className="calc-results-pane">
        <div>
          <h3 style={{ color: 'var(--color-white)', fontSize: '1.3rem', marginBottom: '1.5rem' }}>
            Estimated Plan Targets
          </h3>

          <div className="calc-stat-box">
            <div className="calc-stat-label">Recommended Term Life Protection</div>
            <div className="calc-stat-value">{formatCurrency(recommendedInsurance)}</div>
            <div className="calc-stat-subtext">Protects family income + mortgage + dependents</div>
          </div>

          <div className="calc-stat-box">
            <div className="calc-stat-label">Target Monthly Retirement Income</div>
            <div className="calc-stat-value" style={{ color: 'var(--color-gold-500)' }}>
              {formatCurrency(targetMonthlyRetire)}/mo
            </div>
            <div className="calc-stat-subtext">Estimated at 85% of active living expenses</div>
          </div>
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          {onOpenBooking ? (
            <button
              type="button"
              className="btn btn-accent btn-full"
              onClick={onOpenBooking}
            >
              Review Your Numbers With An Advisor
            </button>
          ) : (
            <a
              href="https://calendly.com/securevestsolutions/appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent btn-full"
            >
              Review Your Numbers With An Advisor
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
