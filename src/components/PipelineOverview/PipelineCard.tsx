import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import FlowDiagram, { FlowNodeData } from './FlowDiagram'; // Relative import
import { ArrowRightCircle } from 'lucide-react'; // Example icon for external trigger

interface PipelineCardProps {
  title: string;
  description?: string;
  pipelineData: FlowNodeData[];
  externalTriggerLabel?: string;
  externalResultLabel?: string;
  className?: string;
}

// Dummy data for a specific pipeline, e.g., Regeneration Pipeline
const regenerationPipelineData: FlowNodeData[] = [
  {
    id: 'source_analysis',
    title: 'Source Code Analysis',
    description: 'Fetch and analyze existing code based on user report.',
    type: 'default',
  },
  {
    id: 'regeneration_engine',
    title: 'Regeneration Engine',
    description: 'AI model processes changes. API: [POST] /api/v1/regenerate',
    type: 'highlighted',
  },
  {
    id: 'code_update',
    title: 'Code Update',
    description: 'Generate updated Abstract Syntax Tree and new code segments.',
    type: 'default',
  },
  {
    id: 'deployment',
    title: 'Deployment Server',
    description: 'Push updated code artifacts to the staging/production server.',
    type: 'default',
  },
  {
    id: 'frontend_preview',
    title: 'Frontend Preview',
    description: 'Render updated application preview for user validation.',
    type: 'output',
  },
];

const PipelineCard: React.FC<PipelineCardProps> = ({
  title,
  description,
  pipelineData = regenerationPipelineData, // Default to regeneration data for example usage
  externalTriggerLabel,
  externalResultLabel,
  className,
}) => {
  return (
    <Card className={cn('w-full shadow-lg', className)}>
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-primary">
          {title}
        </CardTitle>
        {description && (
          <CardDescription className="text-base text-muted-foreground">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="space-y-6">
        {externalTriggerLabel && (
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
            <ArrowRightCircle className="h-5 w-5 text-primary" />
            <span>{externalTriggerLabel}</span>
          </div>
        )}
        <FlowDiagram nodes={pipelineData} />
        {externalResultLabel && (
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-4">
            <ArrowRightCircle className="h-5 w-5 text-success transform rotate-90 md:rotate-0" /> 
            {/* Rotated for potential vertical connection out of card if needed, else horizontal */}
            <span>{externalResultLabel}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PipelineCard;
