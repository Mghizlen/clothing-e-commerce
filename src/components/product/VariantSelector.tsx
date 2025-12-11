import React, { useState } from 'react';

interface VariantSelectorProps {
  label: string;
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
}

export function VariantSelector({
  label,
  options,
  value,
  onChange,
}: VariantSelectorProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-3">{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange?.(option)}
            className={`px-4 py-2 border-2 transition-all ${
              value === option
                ? 'border-accent bg-accent/10'
                : 'border-muted hover:border-accent'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
