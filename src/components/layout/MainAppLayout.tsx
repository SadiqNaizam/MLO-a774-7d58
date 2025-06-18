import React from 'react';
import { cn } from '@/lib/utils';
import Header from './Header';
import Sidebar from './Sidebar';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
  pageTitle?: string; // To be passed to the Header component
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className, pageTitle }) => {
  return (
    <div className={cn("flex flex-col h-screen bg-background overflow-hidden", className)}>
      <Header title={pageTitle} />
      {/* The main content area below the header, using the specified grid layout */}
      {/* 'overall.definition': 'grid-cols-[1fr_auto] grid-rows-[auto]' */}
      {/* 'grid-rows-[auto]' for a single row grid means it takes the available height */}
      <div className="grid grid-cols-[1fr_auto] flex-1 overflow-hidden">
        {/* Main Content Area (1fr) - this is the first column */}
        <main role="main" className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 bg-background">
          {/* 'mainContent.container.definition': 'flex flex-col space-y-6' */}
          <div className="flex flex-col space-y-6 h-full">
            {children}
          </div>
        </main>
        
        {/* Sidebar (auto) - this is the second column, takes its intrinsic width (w-64 from Sidebar.tsx) */}
        <Sidebar />
      </div>
    </div>
  );
};

export default MainAppLayout;
