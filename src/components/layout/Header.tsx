import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Bell, Search } from 'lucide-react';

interface HeaderProps {
  title?: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ title = "Pipeline Overview", className }) => {
  return (
    <header className={cn(
      "h-16 bg-card border-b border-border flex items-center justify-between px-6 shrink-0",
      className
    )}>
      <div className="flex items-center">
        <h1 className="text-xl font-medium text-foreground">{title}</h1>
      </div>

      <div className="flex items-center space-x-3 md:space-x-4">
        <Button variant="ghost" size="icon" className="h-9 w-9 md:h-10 md:w-10" aria-label="Search">
          <Search className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="h-9 w-9 md:h-10 md:w-10 relative" aria-label="Notifications">
          <Bell className="h-5 w-5" />
          {/* Optional: Notification badge */}
          <span className="absolute top-1.5 right-1.5 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
          </span>
        </Button>
        <Avatar className="h-9 w-9 md:h-10 md:w-10">
          {/* In a real app, src would be dynamic */}
          <AvatarImage src="https://ui.shadcn.com/avatars/01.png" alt="User Avatar" /> 
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
