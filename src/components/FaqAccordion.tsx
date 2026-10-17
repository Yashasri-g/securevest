'use client';

import React, { useState } from 'react';

export interface FaqItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FaqAccordionProps {
  items: FaqItem[];
  allowMultiple?: boolean;
}

export default function FaqAccordion({ items, allowMultiple = true }: FaqAccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      if (openIndices.includes(index)) {
        setOpenIndices(openIndices.filter((i) => i !== index));
      } else {
        setOpenIndices([...openIndices, index]);
      }
    } else {
      setOpenIndices(openIndices.includes(index) ? [] : [index]);
    }
  };

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        return (
          <div key={index} className={`accordion-item ${isOpen ? 'active' : ''}`}>
            <button
              type="button"
              className="accordion-trigger"
              aria-expanded={isOpen}
              onClick={() => toggleIndex(index)}
            >
              <span>{item.question}</span>
              <span className="accordion-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </button>
            <div className="accordion-panel" style={{ maxHeight: isOpen ? '1200px' : '0' }}>
              <div style={{ paddingTop: '0.5rem', color: 'var(--color-slate-600)', lineHeight: 1.7 }}>
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
