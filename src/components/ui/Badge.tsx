import React from 'react';
import clsx from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'success' | 'destructive';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium',
        {
          'bg-muted text-fg': variant === 'default',
          'bg-accent text-accent-foreground': variant === 'accent',
          'bg-success text-fg': variant === 'success',
          'bg-destructive text-destructive-foreground': variant === 'destructive',
        },
        className
      )}
    >
      {children}
    </span>
  );
}
