export interface SolutionFeature {
  title: string;
  description: string;
  benefits: string[];
  technicalDetails: string[];
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  image: string;
  features: SolutionFeature[];
  cases: {
    title: string;
    description: string;
    results: string[];
  }[];
}