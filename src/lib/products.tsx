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

export const products: Product[] = [
  {
    slug: 'laparoscopic-instruments',
    name: "Laparoscopic Instruments",
    usp: "A comprehensive suite of ergonomic, durable instruments for modern laparoscopic surgery.",
    status: "New Arrival",
    categoryIcon: <Hand className="h-10 w-10 text-primary" />,
    heroImage: "https://placehold.co/1200x800.png",
    gallery: [
      { src: "https://placehold.co/1200x800.png", alt: "Laparoscopic instrument set", hint: "laparoscopic instruments" },
      { src: "https://placehold.co/800x600.png", alt: "Laparoscopic grasper", hint: "laparoscopic grasper" },
      { src: "https://placehold.co/800x600.png", alt: "Laparoscopic scissors", hint: "laparoscopic scissors" },
      { src: "https://placehold.co/800x600.png", alt: "Surgeon using laparoscopic tool", hint: "laparoscopic surgery" },
    ],
    glanceFeatures: [
      { icon: <Hand className="h-6 w-6 text-primary" />, text: "Ergonomic Design" },
      { icon: <Shield className="h-6 w-6 text-primary" />, text: "Enhanced Durability" },
      { icon: <Aperture className="h-6 w-6 text-primary" />, text: "Modular System" },
    ],
    overview: {
      title: "Precision and Control in Your Hands",
      description: "Our new line of laparoscopic instruments is engineered for superior performance and surgeon comfort. Each instrument features an ergonomic handle, robust construction, and a modular design for easy cleaning and maintenance, ensuring reliability in every procedure.",
      image: "https://placehold.co/800x600.png",
      imageHint: "surgical instruments"
    },
    features: [
      { icon: <Hand className="h-10 w-10 text-primary" />, title: "Ergonomic Handles", description: "Designed to reduce fatigue and improve control during long procedures." },
      { icon: <Shield className="h-10 w-10 text-primary" />, title: "Tungsten Carbide Jaws", description: "Provides exceptional grip and durability for reliable tissue manipulation." },
      { icon: <Aperture className="h-10 w-10 text-primary" />, title: "Modular Take-Apart Design", description: "Allows for thorough cleaning and easy component replacement, extending instrument life." },
      { icon: <Zap className="h-10 w-10 text-primary" />, title: "High-Quality Insulation", description: "Ensures safety during electrosurgery procedures." },
    ],
    specs: [
      { parameter: "Instrument Types", value: "Graspers, Dissectors, Scissors, Needle Holders" },
      { parameter: "Diameter", value: "5mm" },
      { parameter: "Working Length", value: "33cm" },
      { parameter: "Material", value: "Medical Grade Stainless Steel, Tungsten Carbide" },
      { parameter: "Rotation", value: "360°" },
      { parameter: "Sterilization", value: "Autoclavable" },
    ],
    faqs: [
        { question: "Are these instruments compatible with standard trocars?", answer: "Yes, our 5mm instruments are designed to be compatible with all standard 5mm trocars." },
        { question: "What is the warranty on these laparoscopic instruments?", answer: "All our reusable laparoscopic instruments come with a one-year warranty against manufacturing defects." },
    ]
  }
];
