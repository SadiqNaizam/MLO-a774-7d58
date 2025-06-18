import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, Settings, Workflow } from 'lucide-react';

interface NavItem {
  label: string;
  icon: React.ElementType;
  href: string; // Placeholder, not implementing full routing logic here
  current?: boolean;
}

const Sidebar: React.FC = () => {
  const navigationItems: NavItem[] = [
    { label: "Overview", icon: LayoutDashboard, href: "/", current: true },
    { label: "Settings", icon: Settings, href: "/settings" },
  ];

  return (
    <aside className={cn(
      "w-64 bg-card border-l border-border flex flex-col", // border-l because it's on the right
    )}>
      <div className="h-16 flex items-center px-6 border-b border-border shrink-0">
        <Workflow className="h-7 w-7 mr-3 text-primary" />
        <h1 className="text-xl font-semibold text-foreground">PipelineVis</h1>
      </div>
      <nav className="flex-1 space-y-2 p-4">
        {navigationItems.map((item) => (
          <Button
            key={item.label}
            variant={item.current ? "secondary" : "ghost"}
            className="w-full justify-start text-sm h-10"
            // onClick={() => { /* TODO: Implement navigation */ }}
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.label}
          </Button>
        ))}
      </nav>
      <div className="p-4 border-t border-border mt-auto">
        <p className="text-xs text-muted-foreground text-center">
          © 2024 Pipeline Dashboard
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
