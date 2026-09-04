/**
 * Core types for Johnson Bediako Ametsitsi's Portfolio
 */

export type ProjectStatus = 
  | 'In Development' 
  | 'Prototype' 
  | 'Research' 
  | 'Experimental' 
  | 'Live' 
  | 'Archived';

export type ProjectCategory = 
  | 'Software' 
  | 'AI' 
  | 'Research' 
  | 'Robotics' 
  | 'Business' 
  | 'Experimental';

export interface CaseStudy {
  overview: string;
  problem: string;
  motivation: string;
  architecture: string;
  technicalDecisions: string[];
  development: string;
  challenges: string;
  solutions: string;
  results: string;
  lessons: string;
  futureWork: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  status: ProjectStatus;
  category: ProjectCategory;
  problem: string;
  approach: string;
  technologies: string[];
  architectureDiagram?: string;
  challenges: string;
  lessons: string;
  futureWork: string;
  githubUrl?: string;
  demoUrl?: string;
  caseStudy: CaseStudy;
}

export type ResearchTag = 
  | 'AI' 
  | 'Software' 
  | 'Robotics' 
  | 'Web' 
  | 'Systems' 
  | 'Automation' 
  | 'Product' 
  | 'Experiments';

export interface ResearchExperiment {
  id: string;
  title: string;
  status: 'Active Investigation' | 'Concept Phase' | 'Benchmarking' | 'Documented';
  tags: ResearchTag[];
  question: string;
  hypothesis: string;
  motivation: string;
  method: string;
  tools: string[];
  observations: string;
  results: string;
  lessons: string;
  futureQuestions: string[];
}

export type TechFamiliarity = 'Exploring' | 'Familiar' | 'Building with' | 'Strong';

export interface TechnologyItem {
  name: string;
  category: 'Languages' | 'AI' | 'Backend / Data' | 'Tools';
  level: TechFamiliarity;
  note: string;
}

export interface BuildLogEntry {
  id: string;
  date: string;
  project: string;
  whatChanged: string;
  whyItChanged: string;
  whatWasLearned: string;
}

export interface EvidenceItem {
  id: string;
  title: string;
  type: 'Repository' | 'Architecture Diagram' | 'Technical Writeup' | 'Research Note';
  status: 'Documented' | 'In Preparation' | 'Prototype Stub';
  description: string;
  artifactRef?: string;
}
