import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description, className }) => {
  return (
    <div className={cn('py-6 sm:py-8', className)}>
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="mt-3 text-lg text-muted-foreground sm:mt-4">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
