import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export interface FlowNodeData {
  id: string;
  title: string;
  description?: string;
  type?: 'default' | 'highlighted' | 'input' | 'output';
}

export interface FlowDiagramProps {
  nodes: FlowNodeData[];
  className?: string;
}

const FlowDiagram: React.FC<FlowDiagramProps> = ({ nodes, className }) => {
  if (!nodes || nodes.length === 0) {
    return (
      <p className={cn('text-muted-foreground', className)}>No pipeline steps to display.</p>
    );
  }

  return (
    <div className={cn('flex flex-col md:flex-row items-stretch md:items-center space-y-4 md:space-y-0 md:space-x-4 overflow-x-auto pb-4', className)}>
      {nodes.map((node, index) => (
        <React.Fragment key={node.id}>
          <Card
            className={cn(
              'min-w-[200px] md:min-w-[240px] flex-shrink-0 h-full',
              {
                'bg-primary/10 border-primary shadow-md': node.type === 'highlighted',
                'bg-green-50 border-green-500': node.type === 'output',
                'bg-blue-50 border-blue-500': node.type === 'input',
                'bg-card border-border': !node.type || node.type === 'default',
              }
            )}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium leading-tight">
                {node.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {node.description && (
                <p className="text-xs text-muted-foreground">
                  {node.description}
                </p>
              )}
            </CardContent>
          </Card>
          {index < nodes.length - 1 && (
            <div className="flex-shrink-0 self-center mx-2 md:mx-0">
              <ArrowRight className="h-6 w-6 text-muted-foreground transform md:rotate-0 rotate-90" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default FlowDiagram;
