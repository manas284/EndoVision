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
    slug: 'uhd-arthroscopy-scope',
    name: "UHD Arthroscopy Scope",
    usp: "Ultimate clarity for minimally invasive joint procedures.",
    status: "FDA Cleared",
    categoryIcon: <Bone className="h-10 w-10 text-primary" />,
    heroImage: "https://placehold.co/1200x800.png",
    gallery: [
      { src: "https://placehold.co/1200x800.png", alt: "UHD Arthroscopy Scope primary view", hint: "arthroscope device" },
      { src: "https://placehold.co/800x600.png", alt: "Arthroscopy procedure in action", hint: "arthroscopy surgery" },
      { src: "https://placehold.co/800x600.png", alt: "Close-up of the scope's tip", hint: "arthroscope closeup" },
      { src: "https://placehold.co/800x600.png", alt: "Scope with light source attached", hint: "medical equipment" },
    ],
    glanceFeatures: [
      { icon: <Aperture className="h-6 w-6 text-primary" />, text: "UHD Optics" },
      { icon: <Hand className="h-6 w-6 text-primary" />, text: "Ergonomic Grip" },
      { icon: <Shield className="h-6 w-6 text-primary" />, text: "Auto-Sterilize" },
    ],
    overview: {
      title: "Uncompromising Clarity in Joint Surgery",
      description: "The EndoVision UHD Arthroscopy Scope provides surgeons with a crystal-clear, true-to-life view of the joint space. Its advanced optical system minimizes distortion and provides superior color accuracy, allowing for more confident identification of anatomical structures and pathologies.",
      image: "https://placehold.co/800x600.png",
      imageHint: "endoscope diagram"
    },
    features: [
      { icon: <Camera className="h-10 w-10 text-primary" />, title: "Native 4K UHD Sensor", description: "Delivers four times the resolution of HD for breathtaking image quality." },
      { icon: <View className="h-10 w-10 text-primary" />, title: "Wide Color Gamut", description: "Reproduces a broader range of colors for accurate tissue representation." },
      { icon: <Scan className="h-10 w-10 text-primary" />, title: "Edge-to-Edge Clarity", description: "Advanced lens design ensures a sharp, distortion-free image." },
      { icon: <Droplets className="h-10 w-10 text-primary" />, title: "Autoclavable Design", description: "Fully sealed and validated for steam sterilization for top-tier infection control." },
    ],
    specs: [
      { parameter: "Model Number", value: "EV-AS-4K-1800" },
      { parameter: "Diameter", value: "4mm" },
      { parameter: "Working Length", value: "180mm" },
      { parameter: "Field of View", value: "110°" },
      { parameter: "Direction of View", value: "30°" },
      { parameter: "Sterilization", value: "Autoclavable, STERRAD" },
    ],
    faqs: [
        { question: "What is the warranty on this scope?", answer: "This scope comes with a two-year manufacturer's warranty covering defects in materials and workmanship." },
        { question: "Is this scope compatible with our existing tower?", answer: "Yes, it uses a standard C-mount optical interface, making it compatible with most major brands of camera control units and light sources." },
    ]
  },
  {
    slug: 'plasma-edge-system',
    name: "Plasma EDGE™ System",
    usp: "Advanced bipolar energy for efficient tissue resection and coagulation.",
    status: "CE Marked",
    categoryIcon: <Zap className="h-10 w-10 text-primary" />,
    heroImage: "https://placehold.co/1200x800.png",
    gallery: [
      { src: "https://placehold.co/1200x800.png", alt: "Plasma EDGE System console", hint: "medical console" },
      { src: "https://placehold.co/800x600.png", alt: "Touchscreen interface close-up", hint: "touchscreen interface" },
      { src: "https://placehold.co/800x600.png", alt: "System with footswitch and probes", hint: "medical device" },
      { src: "https://placehold.co/800x600.png", alt: "Clinical application of Plasma EDGE", hint: "urology surgery" },
    ],
    glanceFeatures: [
      { icon: <Zap className="h-6 w-6 text-primary" />, text: "Bipolar Energy" },
      { icon: <Camera className="h-6 w-6 text-primary" />, text: "Touchscreen" },
      { icon: <Waves className="h-6 w-6 text-primary" />, text: "Fast Cycle" },
    ],
    overview: {
        title: "The Forefront of Surgical Energy",
        description: "The Plasma EDGE™ System is an advanced energy platform that enables precise tissue management with minimal thermal spread. Its intuitive touchscreen and multiple modes provide surgeons with unparalleled control for resection and coagulation.",
        image: "https://placehold.co/800x600.png",
        imageHint: "medical technology"
    },
    features: [
      { icon: <Zap className="h-10 w-10 text-primary" />, title: "Controlled Plasma Field", description: "Enables precise tissue effects with minimal damage to surrounding structures." },
      { icon: <TestTubeDiagonal className="h-10 w-10 text-primary" />, title: "Four Operating Modes", description: "Includes cut, coagulate, blend, and a specialized hysteroscopy mode for versatility." },
      { icon: <Camera className="h-10 w-10 text-primary" />, title: "Intuitive Interface", description: "Large, clear touchscreen for easy setup and adjustments during procedures." },
      { icon: <Shield className="h-10 w-10 text-primary" />, title: "Safety Features", description: "Integrated monitoring systems for impedance and power delivery." },
    ],
    specs: [
      { parameter: "Model Number", value: "EV-PE-SYS-3000" },
      { parameter: "Power Output", value: "150W max" },
      { parameter: "Energy Modes", value: "4 (Cut, Coag, Blend, Hystero)" },
      { parameter: "Display", value: "10-inch Touchscreen" },
      { parameter: "Compatibility", value: "Compatible with EV-PE series probes" },
      { parameter: "Input Voltage", value: "100-240V AC, 50/60Hz" },
    ],
    faqs: [
        { question: "What specialties is this system designed for?", answer: "The Plasma EDGE™ is optimized for urology and hysteroscopy, with a range of specialized probes for each." },
        { question: "Is a footswitch required?", answer: "The system can be operated via the touchscreen or an optional dual-pedal footswitch for hands-free control." },
    ]
  },
  {
    slug: 'hysteroview-2000',
    name: "HysteroView 2000",
    usp: "Enhanced visualization for outpatient hysteroscopies with an ultra-fine tip.",
    status: "FDA Cleared",
    categoryIcon: <HeartPulse className="h-10 w-10 text-primary" />,
    heroImage: "https://placehold.co/1200x800.png",
    gallery: [
      { src: "https://placehold.co/1200x800.png", alt: "HysteroView 2000 scope", hint: "hysteroscope device" },
      { src: "https://placehold.co/800x600.png", alt: "Scope tip close-up", hint: "medical instrument" },
      { src: "https://placehold.co/800x600.png", alt: "Hysteroscope in a clinical setting", hint: "gynecology procedure" },
      { src: "https://placehold.co/800x600.png", alt: "Image from the HysteroView scope", hint: "endometrial view" },
    ],
    glanceFeatures: [
      { icon: <View className="h-6 w-6 text-primary" />, text: "360° Field of View" },
      { icon: <TestTubeDiagonal className="h-6 w-6 text-primary" />, text: "Ultra-Fine Tip" },
      { icon: <Aperture className="h-6 w-6 text-primary" />, text: "HD Optics" },
    ],
    overview: {
        title: "Excellence in Gynecological Care",
        description: "The HysteroView 2000 offers exceptional image quality and a slim-profile design to minimize patient discomfort. It's ideal for diagnostic 'see-and-treat' procedures, empowering gynecologists to deliver the best possible outpatient care.",
        image: "https://placehold.co/800x600.png",
        imageHint: "medical design"
    },
    features: [
      { icon: <Camera className="h-10 w-10 text-primary" />, title: "Exceptional Clarity", description: "High-resolution optics provide sharp, detailed images of the uterine cavity." },
      { icon: <TestTubeDiagonal className="h-10 w-10 text-primary" />, title: "Atraumatic Design", description: "Slim sheaths and a smooth-tip obturator prioritize patient comfort." },
      { icon: <Hand className="h-10 w-10 text-primary" />, title: "Ergonomic Control", description: "Lightweight and balanced for comfortable handling during procedures." },
      { icon: <Waves className="h-10 w-10 text-primary" />, title: "Optimized Flow", description: "Designed for efficient fluid management, keeping the view clear." },
    ],
    specs: [
      { parameter: "Model Number", value: "EV-HV-2000" },
      { parameter: "Outer Diameter", value: "2.9mm" },
      { parameter: "Working Length", value: "200mm" },
      { parameter: "Field of View", value: "125°" },
      { parameter: "Direction of View", value: "30°" },
      { parameter: "Instrument Channel", value: "5 Fr" },
    ],
    faqs: [
        { question: "Is this suitable for operative procedures?", answer: "The HysteroView 2000 is primarily designed for diagnostic and simple 'see-and-treat' procedures due to its small size. For more complex operative cases, we recommend our operative hysteroscopy line." },
    ]
  },
  {
    slug: 'uroclear-irrigator',
    name: "UroClear Irrigator",
    usp: "High-performance irrigation pump for enhanced visualization in urology.",
    status: "Available",
    categoryIcon: <Droplets className="h-10 w-10 text-primary" />,
    heroImage: "https://placehold.co/1200x800.png",
    gallery: [
      { src: "https://placehold.co/1200x800.png", alt: "UroClear Irrigator pump", hint: "irrigation pump" },
      { src: "https://placehold.co/800x600.png", alt: "UroClear control panel", hint: "control panel" },
      { src: "https://placehold.co/800x600.png", alt: "Dual tube set for the UroClear", hint: "medical tubing" },
      { src: "https://placehold.co/800x600.png", alt: "Irrigator in use during a procedure", hint: "urology surgery" },
    ],
    glanceFeatures: [
      { icon: <Waves className="h-6 w-6 text-primary" />, text: "Adjustable Pressure" },
      { icon: <Shield className="h-6 w-6 text-primary" />, text: "Auto-Stop Safety" },
      { icon: <Droplets className="h-6 w-6 text-primary" />, text: "Dual Lines" },
    ],
    overview: {
        title: "Optimal Clarity for Urology",
        description: "The UroClear Irrigator delivers precise and powerful fluid management for urological procedures. Its adjustable pressure and high flow rate ensure a clear surgical field, enhancing safety and efficiency during stone removal and bladder inspections.",
        image: "https://placehold.co/800x600.png",
        imageHint: "medical pump"
    },
    features: [
      { icon: <Waves className="h-10 w-10 text-primary" />, title: "Precise Flow Control", description: "Variable speed pump allows surgeons to tailor irrigation to procedural needs." },
      { icon: <Shield className="h-10 w-10 text-primary" />, title: "Over-Pressure Protection", description: "Automatically stops the pump if pressure exceeds a safe threshold." },
      { icon: <Droplets className="h-10 w-10 text-primary" />, title: "Dual Line Capability", description: "Supports simultaneous inflow and outflow for continuous fluid exchange." },
      { icon: <Hand className="h-10 w-10 text-primary" />, title: "Simple Setup", description: "Quick-load tubing cassette and an intuitive interface for fast preparation." },
    ],
    specs: [
      { parameter: "Model Number", value: "EV-UI-500" },
      { parameter: "Max Flow Rate", value: "500 ml/min" },
      { parameter: "Pressure Range", value: "10-200 mmHg" },
      { parameter: "Display", value: "Digital LCD" },
      { parameter: "Tubing", value: "Sterile, single-use cassettes" },
    ],
    faqs: [
        { question: "Can this pump be used for other specialties?", answer: "The UroClear Irrigator is specifically designed and calibrated for urological procedures. Use in other fields is not recommended." },
    ]
  },
  {
    slug: 'high-flow-sheathing',
    name: "High-Flow Sheathing",
    usp: "Robust, anti-fog sheathing for prolonged procedures with clear optics.",
    status: "Available",
    categoryIcon: <Shield className="h-10 w-10 text-primary" />,
    heroImage: "https://placehold.co/1200x800.png",
    gallery: [
      { src: "https://placehold.co/1200x800.png", alt: "High-Flow Sheath set", hint: "surgical sheaths" },
      { src: "https://placehold.co/800x600.png", alt: "Close-up of the sheath tip", hint: "medical instrument" },
      { src: "https://placehold.co/800x600.png", alt: "Different sizes of sheaths", hint: "surgical tools" },
      { src: "https://placehold.co/800x600.png", alt: "Sheath attached to an endoscope", hint: "endoscope parts" },
    ],
    glanceFeatures: [
      { icon: <Hand className="h-6 w-6 text-primary" />, text: "Smooth Entry" },
      { icon: <View className="h-6 w-6 text-primary" />, text: "Anti-Fog Coating" },
      { icon: <Shield className="h-6 w-6 text-primary" />, text: "Robust Design" },
    ],
    overview: {
        title: "Maintain a Clear Field",
        description: "EndoVision's High-Flow Sheathing is designed to provide optimal irrigation and suction management. Its smooth, atraumatic tip ensures easy insertion, while the anti-fog coating on the distal end helps maintain clear visualization throughout the procedure.",
        image: "https://placehold.co/800x600.png",
        imageHint: "medical design"
    },
    features: [
      { icon: <Waves className="h-10 w-10 text-primary" />, title: "Maximized Flow Channels", description: "Large-bore design facilitates rapid fluid exchange and debris removal." },
      { icon: "-", title: "Atraumatic Tip Design", description: "Tapered and polished tip for smooth insertion and reduced tissue trauma." },
      { icon: <View className="h-10 w-10 text-primary" />, title: "Proprietary Anti-Fog", description: "A permanent, bonded coating prevents fogging even during long cases." },
      { icon: <Shield className="h-10 w-10 text-primary" />, title: "Medical-Grade Steel", description: "Constructed from corrosion-resistant steel to withstand rigorous reprocessing." },
    ],
    specs: [
      { parameter: "Material", value: "Medical Grade Stainless Steel" },
      { parameter: "Sizes Available", value: "4.5mm, 5.5mm, 8.5mm" },
      { parameter: "Compatibility", value: "Designed for EndoVision scopes" },
      { parameter: "Sterilization", value: "Autoclavable" },
    ],
    faqs: [
        { question: "Are these sheaths compatible with other brands of endoscopes?", answer: "Our sheathing is designed for a precise fit with EndoVision endoscopes to ensure optimal performance. Compatibility with other brands is not guaranteed." },
    ]
  },
];
