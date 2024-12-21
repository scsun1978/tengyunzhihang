export interface ProductFeature {
  title: string;
  description: string;
  benefits: string[];
  technicalDetails: string[];
}

export interface Product {
  id: string;
  name: string;
  productLine: string;
  version: string;
  description: string;
  type: 'core' | 'auxiliary';
  features: ProductFeature[];
  certifications: string[];
  image: string;
}

export interface ProductLine {
  id: string;
  name: string;
  description: string;
  target: string;
}