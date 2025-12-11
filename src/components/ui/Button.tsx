import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'font-medium transition-all duration-200',
        {
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
        },
        {
          'bg-primary text-primary-foreground hover:bg-black border border-accent hover:border-accent':
            variant === 'primary',
          'bg-secondary text-secondary-foreground hover:bg-muted': variant === 'secondary',
          'bg-transparent text-fg hover:bg-muted': variant === 'ghost',
          'border border-fg text-fg hover:bg-fg hover:text-bg': variant === 'outline',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
