export interface AICapability {
  id: string;
  title: string;
  description: string;
  image: string;
  features: {
    title: string;
    description: string;
    technologies: string[];
  }[];
  applications: {
    title: string;
    description: string;
    benefits: string[];
  }[];
}