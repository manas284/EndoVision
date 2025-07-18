
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
  features?: ProductFeature[];
  specs?: ProductSpec[];
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
    faqs: [
        { question: "Are these instruments compatible with standard trocars?", answer: "Yes, our instruments are designed to be compatible with all standard trocars of the corresponding size." },
        { question: "What is the warranty on these laparoscopic instruments?", answer: "All our reusable laparoscopic instruments come with a one-year warranty against manufacturing defects." },
        { question: "Are the instruments reusable?", answer: "Yes, the majority of our laparoscopic instruments are designed for reusability and are autoclavable. Please refer to the specific instrument's documentation for cleaning and sterilization protocols." },
    ],
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
      },
      {
        title: "2. Laparoscopic Graspers",
        icon: "✋",
        mainDescription: "Laparoscopic graspers are specialized instruments used for holding, manipulating, and sometimes dissecting tissues during minimally invasive surgery. Their jaws can be single-action or double-action, and their tip designs suit varied surgical tasks.",
        subItems: [
          {
            title: "Maryland Grasper",
            icon: "🤏",
            description: "Features a long, curved, and partially serrated jaw similar to surgical 'rat-tooth' forceps.",
            function: "Combines blunt tissue dissection, fine grasping, and manipulation of delicate tissues.",
            application: "Widely used for separating tissue planes, grasping small structures, and blunt dissection.",
            advantage: "Versatile for both dissection and grasping."
          },
          {
            title: "Mixter (90°) Grasper",
            icon: "📐",
            description: "Has a right-angle jaw (90°) with serrations for deep or difficult-to-reach areas.",
            function: "Isolating and passing around vessels, ducts, or ligatures behind structures.",
            application: "Used for dissecting around tubular structures such as the ureter in pelvic surgery.",
            advantage: "Provides excellent access and control in confined spaces."
          },
          {
            title: "Universal/Maxi Grasper",
            icon: "💪",
            description: "Robust build with wide, serrated jaws for a firm grip on large or tough tissues.",
            function: "For securely holding and mobilizing large or tough tissues and organs.",
            application: "Retracting the uterus, mobilizing bowel, or manipulating bulky structures.",
            advantage: "Provides a strong, secure grip on large tissues without slippage."
          },
           {
            title: "Babcock Grasper",
            icon: "👶",
            description: "Has rounded, fenestrated, and atraumatic jaws that encircle tissue.",
            function: "Grips tubular or delicate structures without compressing or damaging them.",
            application: "Commonly used for bowel, appendix, fallopian tubes, and vascular structures.",
            advantage: "Atraumatic design minimizes tissue injury during manipulation."
          },
          {
            title: "Alligator Grasper",
            icon: "🐊",
            description: "Long, slender shaft with small jaws that open vertically, ideal for reaching into inaccessible spaces.",
            function: "Opens wide at the tip for localized grasping and retrieval.",
            application: "Used in pediatric laparoscopy or to retrieve objects like gallstones or tissue fragments from narrow spaces.",
            advantage: "Ideal for retrieval in confined areas where other graspers cannot reach."
          },
           {
            title: "Claw (2x4/2x3) Grasper",
            icon: "⚙️",
            description: "Features interlocking teeth (2 by 4, or 2 by 3) for an aggressive hold.",
            function: "Provides a very secure hold, especially on fibrous or slippery tissues.",
            application: "Grasping muscle, omentum, or other strong tissue structures for extraction or retraction.",
            advantage: "Prevents tissue slippage during manipulation of heavy or tough structures."
          }
        ],
        keyFeatures: [
          "Material: Surgical-grade stainless steel, often with insulation for electrosurgical compatibility.",
          "Shaft Size: 5mm and 10mm to fit standard laparoscopic trocars.",
          "Mechanism: Double action (both jaws move) or single action (one jaw moves, one fixed), tailored for either strength or precision.",
          "Ergonomics: Handles designed for comfort and minimal fatigue during prolonged procedures."
        ]
      },
      {
        title: "3. Clip Applicators",
        icon: "🔗",
        mainDescription: "Laparoscopic clip applicators are essential instruments used to apply ligation clips to occlude blood vessels, ducts, or tubular structures, preventing bleeding or fluid leakage. They are designed to deploy specific clip sizes (LT200, LT300, LT400).",
        subItems: [
          {
            title: "10mm Double Action",
            icon: "⚖️",
            description: "Features two moving jaws for balanced and uniform force distribution when applying the clip, ensuring precise alignment and secure closure.",
            function: "Applies LT200, LT300, and LT400 clips with balanced pressure. Available with standard or long inserts for deep access.",
            application: "Ideal for cholecystectomy, appendectomy, and ligation of arteries & veins in urology and gynecology.",
            advantage: "Decreases risk of clip migration or slippage and facilitates accurate placement in difficult angles."
          },
          {
            title: "10mm Single Action",
            icon: "🔩",
            description: "This type has a single moving jaw that presses the clip against a fixed lower jaw, suitable for most routine procedures.",
            function: "Reliably deploys medium (LT300) and large (LT400) clips on vessels.",
            application: "Used in general surgery, gynecological ligation, and colorectal procedures involving vascular clipping.",
            advantage: "Simple, durable mechanism with lower maintenance. Cost-effective for high-volume centers."
          },
          {
            title: "5mm Applicator",
            icon: "🎯",
            description: "Engineered with a slimmer 5mm shaft to pass through smaller trocars, reducing trauma to the abdominal wall.",
            function: "Accurately deploys small-size clips (LT200 or equivalent).",
            application: "Valuable in pediatric laparoscopy, tubal ligation, and small-vessel clipping in hernia repair.",
            advantage: "Minimally invasive, fits 5mm ports, and offers flexibility in instrument arrangement."
          }
        ],
        keyFeatures: [
            "Material: High-grade surgical stainless steel or titanium-compatible.",
            "Autoclavable / Reusable.",
            "Mechanism: Ring-handle with trigger action.",
            "Locking System: Jaws hold clip securely until release is triggered.",
            "Tip Precision: Ensures accurate and consistent clip engagement on target structures."
        ]
      },
       {
        title: "4. Needle Holders",
        icon: "🔩",
        mainDescription: "Laparoscopic needle holders are essential for intracorporeal suturing and knot-tying. They are designed to hold the surgical needle firmly while providing optimal control and precision.",
        subItems: [
          {
            title: "Ethicon Type (Stainless Steel)",
            icon: "🧷",
            description: "Classic ring handle with ratchet, offers precise control and secure locking.",
            function: "Holds and maneuvers surgical needles during suturing.",
            application: "Common in general laparoscopic surgeries.",
            advantage: "Durable, autoclavable, universal usage, compatible with most suture types."
          },
          {
            title: "Storz Type (Aluminum Gun/V-Type)",
            icon: "🧷",
            description: "Lightweight ergonomic grip to reduce hand fatigue. V-Type handle provides better reach in narrow fields.",
            function: "Precision needle handling for complex suturing.",
            application: "Advanced procedures, long surgeries.",
            advantage: "Easy maneuverability, high precision, reliable locking mechanism."
          }
        ],
        keyFeatures: [
          "Jaw Options: Straight, Right Angled, Left Angled for accessing tight spaces.",
          "Toothed Jaws: Ensure extra grip on curved or slippery suture needles.",
          "Material: High-quality stainless steel or lightweight aluminum."
        ]
      },
      {
        title: "5. Suction & Irrigation Systems",
        icon: "🧪",
        mainDescription: "Used to irrigate the surgical field and remove blood, fluid, or smoke during laparoscopic procedures, maintaining a clear view for the surgeon.",
        subItems: [
          {
            title: "Thumb-Control Suction",
            icon: "💧",
            description: "Allows surgeon full control of fluid suction or irrigation via a manual thumb lever.",
            function: "Simple, direct control over fluid management.",
            application: "General procedures where manual control is preferred. Available for 5mm and 10mm ports.",
            advantage: "Simplicity, cost-effective, and reliable."
          },
          {
            title: "Trumpet-Control Suction",
            icon: "🚿",
            description: "Button-like trumpet valve for easy, intuitive finger control of on-off suction and irrigation.",
            function: "Provides ergonomic and consistent flow control.",
            application: "Preferred in longer procedures. Available for 5mm and 10mm ports.",
            advantage: "Reduces hand fatigue and improves consistency."
          }
        ],
        keyFeatures: [
            "Storz Type Compatibility: High-flow rate systems available for complex procedures.",
            "Reducer Options: 10mm to 5mm reducers available for flexibility.",
            "Autoclavable: All components are fully reusable and sterilizable."
        ]
      },
      {
        title: "6. Monopolar Electrodes (5mm)",
        icon: "⚡",
        mainDescription: "Designed to perform cutting, coagulation, and dissection in laparoscopic electrosurgery using monopolar energy. Used with electrosurgical units (ESU).",
        subItems: [
          {
            title: "L-Hook / J-Hook",
            icon: "🔌",
            description: "L-shaped or J-shaped tip for multi-directional use.",
            function: "Precise incision, dissection, and coagulation of tissues.",
            application: "Common in cholecystectomy, appendectomy, and dissecting curved tissues.",
            advantage: "High precision and control in tight spaces."
          },
          {
            title: "Spatula / Ball Electrode",
            icon: "🔌",
            description: "Flat, wide paddle blade (Spatula) or rounded ball tip (Ball).",
            function: "Spatula for broad coagulation; Ball for precise spot coagulation.",
            application: "Spatula for superficial lesions like endometriosis; Ball for hemostasis.",
            advantage: "Versatile options for different coagulation needs with minimal tissue damage."
          }
        ],
        keyFeatures: [
          "Shaft: 5mm insulated shaft for safety.",
          "Connection: Standard monopolar connection compatible with most ESUs.",
          "Material: High-grade stainless steel with durable insulation."
        ]
      },
      {
        title: "7. Bipolar Instruments",
        icon: "⚙️",
        mainDescription: "Used for safe coagulation of tissues and controlled energy delivery without a return electrode, minimizing risk to adjacent tissues.",
        subItems: [
          {
            title: "Bipolar Coagulation Forceps",
            icon: "🔥",
            description: "U or X Handle with Tong (Plate) or Fenestrated Jaws.",
            function: "Dissecting or coagulating vessels during laparoscopic procedures.",
            application: "Provides controlled coagulation with minimal thermal spread.",
            advantage: "Atraumatic grip with fenestrated jaws, efficient coagulation with tong jaws."
          },
          {
            title: "Bipolar Grasper / Cutter",
            icon: "🔥",
            description: "Combines grasping and bipolar coagulation. Available as non-detachable or detachable (modular).",
            function: "Simultaneous grasping, cutting, and coagulation.",
            application: "Used with Maryland, Bowel, or Ruby jaws for different tissue types.",
            advantage: "Multifunctional tool reduces instrument exchanges. Detachable versions offer cost-savings."
          }
        ],
        keyFeatures: [
          "Handle Options: Blue/Black Bissinger, Wolf, Indian Handle.",
          "Jaw Options: Maryland, Fenestrated, Ruby, Silver/Gold Sealer Jaws.",
          "Safety: Confined energy delivery reduces risk of unintended burns."
        ]
      },
      {
        title: "8. Trocars & Veress Needles",
        icon: "🧷",
        mainDescription: "Trocars create access ports for instruments, while Veress needles safely establish pneumoperitoneum.",
        subItems: [
          {
            title: "Trocars",
            icon: "🔩",
            description: "Available in Stainless Steel, Brass, Storz Type, and Magnetic variants.",
            function: "Provide a sealed port for instrument insertion.",
            application: "Sizes from 3mm to 20mm to accommodate all laparoscopic instruments.",
            advantage: "Reusable, ergonomic designs. Magnetic trocars offer enhanced stability."
          },
          {
            title: "Veress Needles",
            icon: "🩺",
            description: "Spring-loaded safety needle to safely insufflate the abdomen with CO2.",
            function: "Establishes pneumoperitoneum at the start of laparoscopy.",
            application: "Initial entry for all laparoscopic procedures. Sizes from 100mm to 160mm.",
            advantage: "Auto-retracting blunt stylet protects organs from injury during insertion."
          }
        ],
        keyFeatures: [
          "Durability: Made from high-quality materials for long service life.",
          "Safety: Designed to minimize patient trauma and risk of visceral injury."
        ]
      },
       {
        title: "9. Endo Retractors",
        icon: "🚧",
        mainDescription: "Designed to atraumatically hold organs away from the surgical field to improve visibility and access.",
        subItems: [
          {
            title: "Fan Retractor Straight",
            icon: "🛠️",
            description: "Basic retraction for smaller tissues with 3 prongs.",
            function: "Temporarily holds liver, stomach, or bowel in minimally invasive surgery.",
            application: "General surgery for basic organ retraction.",
            advantage: "Simple, effective, and fits a 5mm port."
          },
          {
            title: "Fan Retractor Articulated",
            icon: "🛠️",
            description: "Offers better angulation for accessing deep cavities with 5 prongs.",
            function: "Provides gradual and safe elevation of organs like the liver or uterus.",
            application: "Complex procedures requiring dynamic retraction, e.g., deep pelvic surgery.",
            advantage: "Articulating tip provides superior maneuverability."
          }
        ],
        keyFeatures: [
          "Shaft Sizes: 5mm and 10mm options available.",
          "Atraumatic Design: Smooth, rounded prongs to prevent tissue damage."
        ]
      },
      {
        title: "10. Laparoscopy Reducers",
        icon: "🔁",
        mainDescription: "These reducers allow insertion of smaller instruments through larger trocars while maintaining pneumoperitoneum.",
        subItems: [
          {
            title: "Metal Reducers",
            icon: "🔧",
            description: "Durable, reusable reducers for various size combinations.",
            function: "Allows use of a 5mm instrument in a 10mm port, for example.",
            application: "Increases instrument flexibility without adding extra ports.",
            advantage: "Wide range of sizes available (e.g., 20→10mm, 10→5mm, 5→3mm)."
          },
          {
            title: "Top Mounted / Flipon Reducer",
            icon: "🔧",
            description: "Sits on top of the trocar, offering fast adaptation without trocar change.",
            function: "Quickly secure different-sized instruments.",
            application: "High-paced surgeries requiring frequent instrument changes.",
            advantage: "Flip-lock mechanism ensures a secure and rapid seal."
          }
        ],
        keyFeatures: [
          "Material: Medical-grade silicone and stainless steel.",
          "Seal: Provides a reliable seal to prevent gas leakage.",
        ]
      }
    ],
  }
];
