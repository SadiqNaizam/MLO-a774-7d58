import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import SectionHeader from '../components/PipelineOverview/SectionHeader';
import PipelineCard from '../components/PipelineOverview/PipelineCard';
import { FlowNodeData } from '../components/PipelineOverview/FlowDiagram';

// Data for Image-to-Code Pipeline
const imageToCodePipelineData: FlowNodeData[] = [
  {
    id: 'itc_upload',
    title: 'Image & Details Upload',
    description: 'User uploads design image and specifies tech stack (e.g., React, Vue). API: [POST] /api/v1/upload_design',
    type: 'input' as const,
  },
  {
    id: 'itc_analysis',
    title: 'AI Image Analysis',
    description: 'Computer vision model analyzes image to identify UI elements, layout, and styles.',
    type: 'default' as const,
  },
  {
    id: 'itc_component_mapping',
    title: 'Component Mapping',
    description: 'Identified UI elements are mapped to corresponding code components.',
    type: 'default' as const,
  },
  {
    id: 'itc_code_generation',
    title: 'Code Generation Engine',
    description: 'Generates HTML, CSS, and JS/TS code. API: [POST] /api/v1/img_to_code',
    type: 'highlighted' as const,
  },
  {
    id: 'itc_refinement',
    title: 'Code Refinement & AST',
    description: 'Structures code, creates Abstract Syntax Tree, applies best practices.',
    type: 'default' as const,
  },
  {
    id: 'itc_preview',
    title: 'Frontend Preview',
    description: 'Renders generated code for user review and download.',
    type: 'output' as const,
  },
];

// Data for Regeneration Pipeline
const regenerationPipelineData: FlowNodeData[] = [
  {
    id: 'rg_source_analysis',
    title: 'Source Code & Report Intake',
    description: 'Fetch existing code and analyze user report for required changes/fixes.',
    type: 'input' as const,
  },
  {
    id: 'rg_regeneration_engine',
    title: 'Regeneration Engine',
    description: 'AI model processes changes. API: [POST] /api/v1/regenerate',
    type: 'highlighted' as const,
  },
  {
    id: 'rg_code_update',
    title: 'Code Update & AST Mod',
    description: 'Generates updated AST and new code segments reflecting changes.',
    type: 'default' as const,
  },
  {
    id: 'rg_deployment',
    title: 'Deployment Server',
    description: 'Push updated code artifacts to staging/production server.',
    type: 'default' as const,
  },
  {
    id: 'rg_frontend_preview',
    title: 'Updated Frontend Preview',
    description: 'Render updated application preview for user validation.',
    type: 'output' as const,
  },
];

// Data for App Generation Pipeline
const appGenerationPipelineData: FlowNodeData[] = [
  {
    id: 'ag_requirements',
    title: 'App Specification Input',
    description: 'User defines application requirements, features, and target platform. API: [POST] /api/v1/define_app',
    type: 'input' as const,
  },
  {
    id: 'ag_planning',
    title: 'AI-Powered Planning',
    description: 'System analyzes requirements, suggests architecture, and plans generation steps.',
    type: 'default' as const,
  },
  {
    id: 'ag_data_model',
    title: 'Data Model Generation',
    description: 'Creates database schemas and data structures based on defined entities.',
    type: 'default' as const,
  },
  {
    id: 'ag_backend_gen',
    title: 'Backend API Generation',
    description: 'Generates RESTful APIs, server logic. API: [POST] /api/v1/generate_backend',
    type: 'highlighted' as const,
  },
  {
    id: 'ag_frontend_gen',
    title: 'Frontend UI Generation',
    description: 'Generates responsive UI components and views. API: [POST] /api/v1/generate_frontend',
    type: 'highlighted' as const,
  },
  {
    id: 'ag_integration',
    title: 'Integration & Testing',
    description: 'Integrates frontend/backend, runs automated tests.',
    type: 'default' as const,
  },
  {
    id: 'ag_deployment_setup',
    title: 'Deployment Configuration',
    description: 'Prepares deployment scripts and configures CI/CD pipelines.',
    type: 'default' as const,
  },
  {
    id: 'ag_preview',
    title: 'Application Preview',
    description: 'Deploys a preview version for user testing and feedback.',
    type: 'output' as const,
  },
];

const IndexPage: React.FC = () => {
  return (
    <MainAppLayout pageTitle="Pipeline Overview">
      <div className="space-y-12">
        <section aria-label="Image To Code Pipeline Section">
          <SectionHeader
            title="Image To Code Pipeline"
            description="Automated conversion of design images or mockups into functional frontend code."
          />
          <PipelineCard
            title="Image To Code Flow"
            description="Visualizes the automated process of transforming visual designs into live code."
            pipelineData={imageToCodePipelineData}
            className="mt-6"
          />
        </section>

        <section aria-label="Regeneration Pipeline Section">
          <SectionHeader
            title="Regeneration Pipeline"
            description="Handles requests to modify, fix, or update existing codebases based on user input."
          />
          <PipelineCard
            title="Regeneration Flow"
            description="Illustrates the steps for processing change requests and regenerating code segments."
            pipelineData={regenerationPipelineData}
            externalTriggerLabel="User request: attempt to fix or change XYZ"
            externalResultLabel="Updated preview for review / Further change requests"
            className="mt-6"
          />
        </section>

        <section aria-label="App Generation Pipeline Section">
          <SectionHeader
            title="App Generation Pipeline"
            description="End-to-end generation of complete applications from high-level specifications."
          />
          <PipelineCard
            title="App Generation Flow"
            description="Outlines the comprehensive process from requirement definition to a deployable application."
            pipelineData={appGenerationPipelineData}
            className="mt-6"
          />
        </section>
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
