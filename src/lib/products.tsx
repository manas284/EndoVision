import { Aperture, Zap, TestTubeDiagonal, Droplets, Shield, Waves, Hand, Camera, Scan, View, Microscope, Bone, HeartPulse } from 'lucide-react';

export interface ProductFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ProductSpec {
  parameter: string;
  value: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  hint: string;
}

export interface Product {
  slug: string;
  name: string;
  usp: string;
  status: string;
  categoryIcon: React.ReactNode;
  heroImage: string;
  gallery: GalleryImage[];
  glanceFeatures: { icon: React.ReactNode; text: string }[];
  overview: {
    title: string;
    description: string;
    image: string;
    imageHint: string;
  };
  features: ProductFeature[];
  specs: ProductSpec[];
  faqs: { question: string; answer: string }[];
}

export const products: Product[] = [];
