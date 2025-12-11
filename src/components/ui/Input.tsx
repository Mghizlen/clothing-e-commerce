import React from 'react';
import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium mb-2">{label}</label>}
      <input
        className={clsx(
          'w-full px-4 py-2 border border-muted rounded-none text-fg placeholder-muted-foreground focus:outline-none focus:border-fg transition-colors',
          error && 'border-destructive',
          className
        )}
        {...props}
      />
      {error && <p className="text-sm text-destructive mt-1">{error}</p>}
    </div>
  );
}
