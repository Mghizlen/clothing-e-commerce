import React from 'react';
import clsx from 'clsx';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={clsx('mx-auto px-4 max-w-site', className)}>
      {children}
    </div>
  );
}
