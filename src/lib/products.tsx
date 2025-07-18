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
      { icon: <Hand className="h-10 w-10 text-primary" />, title: "Laparoscopic Scissors", description: "Used to cut tissues. Available in Curved, Straight, Micro, and Hook blade types for various applications." },
      { icon: <Hand className="h-10 w-10 text-primary" />, title: "Laparoscopic Graspers", description: "To grasp, hold, and manipulate tissue without trauma. Available in single/double action and various jaw types like Maryland, Babcock, and Alligator." },
      { icon: <Zap className="h-10 w-10 text-primary" />, title: "Clip Applicators", description: "Holds and applies titanium/polymer clips to blood vessels for hemostasis. Available in 5mm and 10mm sizes." },
      { icon: <Shield className="h-10 w-10 text-primary" />, title: "Laparoscopic Needle Holders", description: "Securely hold and maneuver surgical needles during suturing. Available in various types and jaw configurations." },
      { icon: <Droplets className="h-10 w-10 text-primary" />, title: "Suction & Irrigation System", description: "Used to remove blood, smoke, or fluids while irrigating the surgical site for a clear view." },
      { icon: <Zap className="h-10 w-10 text-primary" />, title: "Monopolar & Bipolar Instruments", description: "A range of electrodes, forceps, and sealers for precise cutting, coagulation, and vessel sealing." },
    ],
    specs: [
      { parameter: "Laparoscopic Scissors (5mm)", value: "Types: Curved, Straight, Micro, Hook" },
      { parameter: "Laparoscopic Graspers (5mm/10mm)", value: "Action: Single & Double. Jaws: Maryland, Mixter, Allies, Bowel, Babcock, Claw, Alligator, etc." },
      { parameter: "Clip Applicators (5mm/10mm)", value: "Action: Single & Double. Jaw Sizes: LT200, LT300, LT400." },
      { parameter: "Needle Holders", value: "Types: Ethicon, Storz Gun Type, Storz V-Type. Jaws: Straight, Right, Left, Toothed." },
      { parameter: "Suction & Irrigation", value: "Types: Thumb, Trumpet, Storz. Sizes: 5mm, 10mm." },
      { parameter: "Monopolar Electrodes (5mm)", value: "Tips: L Hook, J Hook, Spatula, Ball." },
      { parameter: "Bipolar Instruments", value: "Forceps, Graspers, Cutters, and Sealers with various jaw and handle types." },
      { parameter: "Trocars", value: "Sizes: 3mm to 20mm. Types: Storz, Magnetic." },
      { parameter: "Veress Needles", value: "Sizes: 100mm, 120mm, 140mm, 160mm." },
      { parameter: "Endo Retractors (5mm/10mm)", value: "Types: Fan Retractor (3-prong), Articulating Fan (5-prong)." },
      { parameter: "Laparoscopy Reducers", value: "Reduces from 20mm down to 3mm. Types: Metal, Top Mounted, Flipon." },
    ],
    faqs: [
        { question: "Are these instruments compatible with standard trocars?", answer: "Yes, our instruments are designed to be compatible with all standard trocars of the corresponding size." },
        { question: "What is the warranty on these laparoscopic instruments?", answer: "All our reusable laparoscopic instruments come with a one-year warranty against manufacturing defects." },
        { question: "Are the instruments reusable?", answer: "Yes, the majority of our laparoscopic instruments are designed for reusability and are autoclavable. Please refer to the specific instrument's documentation for cleaning and sterilization protocols." },
    ]
  }
];
