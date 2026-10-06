'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const riderSections = [
  {
    title: 'DJ Booth',
    items: [
      'Height: approx. 100 cm',
      'Width: minimum 180 cm',
      'Depth: minimum 80 cm',
      'Stable, vibration-free structure. No folding tables.',
      'Minimum 80 cm space behind DJ.',
    ],
  },
  {
    title: 'DJ Equipment (Preferred)',
    items: [
      '3–4 Pioneer CDJ-3000',
      'Pioneer DJM-V10',
      'ACCEPTED ALTERNATIVES:',
      'CDJ-2000NXS2',
      'DJM-900NXS2 or DJM-A9',
      'Monitoring: 2 DJ booth monitors at ear level.',
    ],
  },
  {
    title: 'Hospitality',
    items: [
      '4 bottles still water (500 ml)',
      '1 bottle Vodka (750 ml)',
      '4 energy drinks (Red Bull or equivalent)',
      'Ice and cups',
    ],
  },
];

export function TechnicalRider() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  return (
    <section className="border-t border-border px-4 py-12 text-left">
      <div className="mb-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
          Technical Rider
        </h2>
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
          Production Standards & Hospitality
        </p>
      </div>

      <div className="space-y-3">
        {riderSections.map((section, idx) => (
          <div key={idx} className="border border-border bg-card rounded overflow-hidden">
            <button
              onClick={() =>
                setExpandedSection(expandedSection === idx ? null : idx)
              }
              className="w-full flex items-center justify-between px-4 py-3 transition-colors duration-200 hover:bg-muted"
            >
              <h3 className="text-sm font-semibold text-foreground">
                {section.title}
              </h3>
              <ChevronDown
                className={`h-4 w-4 text-accent transition-transform duration-200 ${expandedSection === idx ? 'rotate-180' : ''
                  }`}
              />
            </button>

            {expandedSection === idx && (
              <div className="border-t border-border bg-muted/30 px-4 py-3">
                <ul className="space-y-2">
                  {section.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex gap-2 text-xs text-muted-foreground"
                    >
                      <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 rounded border border-accent/20 bg-accent/5 p-4">
        <p className="text-[10px] text-muted-foreground text-center uppercase tracking-widest font-medium italic opacity-60">
          Flexible technical rider. For custom setups or international bookings, please contact management.
        </p>
      </div>
    </section>
  );
}
