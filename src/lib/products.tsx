
import { Scissors, Hand, Zap, Shield, Droplets, Aperture, Check } from 'lucide-react';

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

export interface DetailedCategory {
    title: string;
    icon: string;
    mainDescription: string;
    subItems: {
        title: string;
        icon: string;
        description: string;
        function: string;
        application: string;
        advantage: string;
    }[];
    keyFeatures: string[];
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
  features: ProductFeature[]; // Kept for other products, will be empty for laparoscopic instruments
  specs: ProductSpec[]; // Kept for other products, will be empty for laparoscopic instruments
  faqs: { question: string; answer: string }[];
  detailedDescription?: DetailedCategory[];
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
    features: [], // This is now handled by detailedDescription
    specs: [], // This is now handled by detailedDescription
    detailedDescription: [
      {
        title: "1. Laparoscopic Scissors (5mm)",
        icon: "🔪",
        mainDescription: "Laparoscopic scissors are precision surgical instruments designed for cutting tissue during minimally invasive surgery. They are inserted through 5mm trocars and manipulated using a handle and long shaft. These scissors are electrosurgical-compatible and can be used in various surgical procedures including general surgery, gynecology, urology, and colorectal surgery.",
        subItems: [
          {
            title: "Curved Scissor",
            icon: "✂️",
            description: "The blades are curved, typically upward, allowing surgeons to cut around convex structures or anatomical curves.",
            function: "Enables better maneuverability in tight or angled spaces where straight scissors may not reach.",
            application: "Ideal for dissecting peritoneal layers, separating adhesions, or trimming curved anatomical structures.",
            advantage: "Provides superior tissue visibility and control during curved or radial dissection paths."
          },
          {
            title: "Straight Scissor",
            icon: "✂️",
            description: "Features straight, sharp, or blunt blades for making linear cuts in tissues and structures.",
            function: "Used for clean, controlled cuts through fascia, soft tissues, and sutures.",
            application: "Commonly used during gallbladder removal, hysterectomy, and intracorporeal suturing.",
            advantage: "Offers consistent cutting force with a simple forward motion, suitable for general use."
          },
          {
            title: "Micro Scissor",
            icon: "✂️",
            description: "Very fine and narrow blades with a delicate tip designed for microsurgical tasks.",
            function: "Provides ultra-precise control for cutting delicate structures like nerves, vessels, or pediatric tissues.",
            application: "Used in precise dissection during laparoscopic myomectomy, pediatric surgery, or endometriosis cases.",
            advantage: "Minimizes tissue trauma, ideal for refining dissection in small anatomical areas."
          },
          {
            title: "Hook Scissor",
            icon: "✂️",
            description: "The blade has a sharp, curved, hook-like tip designed for encasing and cutting tissue bundles.",
            function: "Allows tissue to be ‘hooked’ before cutting, ensuring accurate targeting without slipping.",
            application: "Especially useful in cutting ligaments, tough connective tissues, and in procedures involving fibrotic structures or adhesions.",
            advantage: "Reduces the risk of accidental injury to surrounding tissues; allows separation and cutting in a single action."
          }
        ],
        keyFeatures: [
          "Material: Medical-grade stainless steel or available with insulated shafts.",
          "Shaft Size: Standard 5mm for compatibility with universal laparoscopic ports.",
          "Handle Options: Ratcheted or ratchet-free, with ergonomic grips for fatigue-free use.",
          "Energy Compatibility: Monopolar versions are available for simultaneous cutting and coagulation."
        ]
      }
    ],
    faqs: [
        { question: "Are these instruments compatible with standard trocars?", answer: "Yes, our instruments are designed to be compatible with all standard trocars of the corresponding size." },
        { question: "What is the warranty on these laparoscopic instruments?", answer: "All our reusable laparoscopic instruments come with a one-year warranty against manufacturing defects." },
        { question: "Are the instruments reusable?", answer: "Yes, the majority of our laparoscopic instruments are designed for reusability and are autoclavable. Please refer to the specific instrument's documentation for cleaning and sterilization protocols." },
    ]
  }
];
