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
      { parameter: "Laparoscopic Scissors (5mm)", value: "Blade Types: Curved, Straight, Micro, Hook" },
      { parameter: "5mm Double Action Graspers", value: "Jaw Types: Maryland, Mixter (90°), Universal/Maxi, Allies, Bowel/Fenestrated, End Clinch, Claw (2x4/2x3), Babcock, Alligator, Plain, Oviduct" },
      { parameter: "5mm Single Action Graspers", value: "Jaw Types: Croce Olmi, Allies" },
      { parameter: "10mm Single-Action Graspers", value: "Jaw Types: Claw Forcep, Spoon Forcep, OP Scissor" },
      { parameter: "Clip Applicators (10mm)", value: "Action: Double & Single. Jaw Sizes: Small (LT200, LT300, LT400), Long Insert. Variants: Separate Jaws" },
      { parameter: "Clip Applicators (5mm)", value: "Designed for smaller vessel ligation in 5mm ports." },
      { parameter: "Needle Holders", value: "Handle Types: Ethicon (Stainless Steel), Storz (Aluminum Gun Type), Storz (V-Type). Jaw Options: Straight, Right, Left, Toothed." },
      { parameter: "Suction & Irrigation", value: "Control Types: Thumb, Trumpet, Storz. Sizes: 5mm, 10mm to 5mm." },
      { parameter: "Monopolar Electrodes (5mm)", value: "Tip Types: L Hook, J Hook, Spatula, Ball Electrode." },
      { parameter: "Bipolar Coagulation Forceps", value: "Jaw Types: Tong (Plate), Fenestrated." },
      { parameter: "Bipolar Grasper Forceps", value: "Non-Detachable, Double Action. Jaw Types: Maryland, Bowel, Ruby." },
      { parameter: "Bipolar Grasper Cutter", value: "Detachable. Handle Types: Blue Bissinger, Black Bissinger, Wolf. Jaw Types: Maryland, Fenestrated, Ruby." },
      { parameter: "Bipolar Sealer Cutter", value: "Handle Types: Non-Detachable (Indian), Detachable (Bissinger/Wolf). Jaw Options: Silver Jaw, Gold Jaw." },
      { parameter: "Trocars", value: "Sizes: 3mm, 5mm, 7mm, 10mm, 12mm, 15mm, 20mm. Types: Storz, Magnetic. Materials: Stainless Steel, Brass." },
      { parameter: "Veress Needles", value: "Sizes: 100mm, 120mm, 140mm, 160mm." },
      { parameter: "Endo Retractors", value: "Types: Fan Retractor (5mm, 3-prong), Articulating Fan (5mm/10mm, 5-prongs)." },
      { parameter: "Laparoscopy Reducers", value: "Conversions: 20mm→10mm, 15mm→10mm, 10mm→7mm, 10mm→5mm, 7mm→5mm, 5mm→3mm. Types: Metal, Top Mounted, Flipon." },
    ],
    faqs: [
        { question: "Are these instruments compatible with standard trocars?", answer: "Yes, our instruments are designed to be compatible with all standard trocars of the corresponding size." },
        { question: "What is the warranty on these laparoscopic instruments?", answer: "All our reusable laparoscopic instruments come with a one-year warranty against manufacturing defects." },
        { question: "Are the instruments reusable?", answer: "Yes, the majority of our laparoscopic instruments are designed for reusability and are autoclavable. Please refer to the specific instrument's documentation for cleaning and sterilization protocols." },
    ]
  }
];
