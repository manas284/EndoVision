
import { Hand, Shield, Aperture } from 'lucide-react';

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
    id: string;
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
        imageUrl?: string;
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
    heroImage: "https://www.datocms-assets.com/136621/1737729829-desk_banner_histeroscopia.png",
    gallery: [
      { src: "https://kenmedsurgical.com/cdn/shop/files/7a2b603e-72d0-5ac5-9263-11d482ed072f_533x.jpg?v=1726499072", alt: "Laparoscopic instrument set", hint: "laparoscopic instruments" },
      { src: "https://kenmedsurgical.com/cdn/shop/files/7a2b603e-72d0-5ac5-9263-11d482ed072f_533x.jpg?v=1726499072", alt: "Laparoscopic grasper", hint: "laparoscopic grasper" },
      { src: "https://www.datocms-assets.com/136621/1737729829-desk_banner_histeroscopia.png", alt: "Laparoscopic scissors", hint: "laparoscopic scissors" },
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
        id: "scissors",
        title: "1. Laparoscopic Scissors",
        icon: "🔪",
        mainDescription: "Laparoscopic scissors are precision surgical instruments designed for cutting tissue during minimally invasive surgery. They are inserted through 5mm trocars and manipulated using a handle and long shaft. These scissors are electrosurgical-compatible and can be used in various surgical procedures including general surgery, gynecology, urology, and colorectal surgery.",
        subItems: [
          {
            title: "Curved Scissor",
            icon: "✂️",
            description: "The blades are curved, typically upward, allowing surgeons to cut around convex structures or anatomical curves.",
            function: "Enables better maneuverability in tight or angled spaces where straight scissors may not reach.",
            application: "Ideal for dissecting peritoneal layers, separating adhesions, or trimming curved anatomical structures.",
            advantage: "Provides superior tissue visibility and control during curved or radial dissection paths.",
            imageUrl: "/images/curved-scissor.png"
          },
          {
            title: "Straight Scissor",
            icon: "✂️",
            description: "Features straight, sharp, or blunt blades for making linear cuts in tissues and structures.",
            function: "Used for clean, controlled cuts through fascia, soft tissues, and sutures.",
            application: "Commonly used during gallbladder removal, hysterectomy, and intracorporeal suturing.",
            advantage: "Offers consistent cutting force with a simple forward motion, suitable for general use.",
            imageUrl: "https://kenmedsurgical.com/cdn/shop/files/7a2b603e-72d0-5ac5-9263-11d482ed072f_533x.jpg?v=1726499072"
          },
          {
            title: "Micro Scissor",
            icon: "✂️",
            description: "Very fine and narrow blades with a delicate tip designed for microsurgical tasks.",
            function: "Provides ultra-precise control for cutting delicate structures like nerves, vessels, or pediatric tissues.",
            application: "Used in precise dissection during laparoscopic myomectomy, pediatric surgery, or endometriosis cases.",
            advantage: "Minimizes tissue trauma, ideal for refining dissection in small anatomical areas.",
            imageUrl: "https://kenmedsurgical.com/cdn/shop/files/7a2b603e-72d0-5ac5-9263-11d482ed072f_533x.jpg?v=1726499072"
          },
          {
            title: "Hook Scissor",
            icon: "✂️",
            description: "The blade has a sharp, curved, hook-like tip designed for encasing and cutting tissue bundles.",
            function: "Allows tissue to be ‘hooked’ before cutting, ensuring accurate targeting without slipping.",
            application: "Especially useful in cutting ligaments, tough connective tissues, and in procedures involving fibrotic structures or adhesions.",
            advantage: "Reduces the risk of accidental injury to surrounding tissues; allows separation and cutting in a single action.",
            imageUrl: "https://kenmedsurgical.com/cdn/shop/files/7a2b603e-72d0-5ac5-9263-11d482ed072f_533x.jpg?v=1726499072"
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
        id: "graspers",
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
        id: "clip-applicators",
        title: "3. Clip Applicators",
        icon: "🔗",
        mainDescription: "Laparoscopic clip applicators are essential instruments used to apply ligation clips during surgery to occlude blood vessels, ducts, or tubular structures. These clips, typically made of titanium or polymer, are applied to prevent bleeding or fluid leakage. Applicators are designed to deploy specific clip sizes (LT200, LT300, LT400) and are compatible with single-use or reusable clip cartridges.",
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
        id: "needle-holders",
        title: "4. Needle Holders",
        icon: "🔩",
        mainDescription: "Laparoscopic needle holders are critical tools in endoscopic surgery, designed to hold suturing needles securely and facilitate precise placement of stitches within the body. They are long-shafted, precision-controlled instruments integrated with ergonomic handles for surgeon comfort and stability.",
        subItems: [
          {
            title: "Ethicon Type Needle Holder (Stainless Steel)",
            icon: "🧷",
            description: "Rust-resistant, high-quality stainless steel for long-term durability and repeated autoclaving. Traditional ring handle equipped with a smooth ratchet-lock system for locking the needle in place during suturing.",
            function: "Holds suturing needles securely.",
            application: "Commonly used in general, gynecological, and urological laparoscopic procedures requiring internal stitching.",
            advantage: "Excellent tactile feedback, widely accepted by laparoscopic surgeons, compatible with standard 5mm and 10mm ports."
          },
          {
            title: "Storz Type Needle Holder (Aluminum Gun/V-Type)",
            icon: "🧷",
            description: "Lightweight aluminum body (Gun Type) or straight vertical handle (V-Type) for reduced fatigue and enhanced access.",
            function: "Enables rapid adjustment and single-click control when locking the needle. V-Type is suitable for rotational movements.",
            application: "Advanced procedures, long surgeries, deep pelvic regions.",
            advantage: "Strong, stable needle grip with high torque resistance. Both are compatible with curved and straight needles."
          },
          {
            title: "Jaw Options (All Types)",
            icon: "🛠️",
            description: "Available in Straight, Right Angled, Left Angled, and Toothed variants.",
            function: "Straight for standard sutures, Angled for difficult-to-reach areas, Toothed for maximum grip on slippery needles.",
            application: "Adaptable to any surgical scenario, from posterior dissections to procedures in wet conditions.",
            advantage: "Provides versatility and ensures the right tool is available for every suturing challenge."
          }
        ],
        keyFeatures: [
          "Material: High-quality stainless steel or lightweight aluminum.",
          "Jaw Options: Straight, Right Angled, Left Angled, and Toothed for various needs.",
          "Handle Design: Ergonomic options including Ring, Pistol-grip, and Vertical.",
          "Ratchet System: Secure locking mechanism to hold needles firmly.",
        ]
      },
      {
        id: "suction-irrigation",
        title: "5. Suction &amp; Irrigation Systems",
        icon: "💧",
        mainDescription: "Laparoscopic suction irrigation systems are essential tools used to clear blood, debris, smoke, or fluids from the operative field and can also be used to deliver irrigation fluids to maintain visibility and prevent tissue adhesion.",
        subItems: [
          {
            title: "Thumb-Control Suction",
            icon: "💦",
            description: "Features a thumb lever or button for manual control of suction or irrigation flow. Available in 5mm and 10mm sizes.",
            function: "Allows direct, one-handed control over fluid management.",
            application: "Diagnostic laparoscopy, laparoscopic cholecystectomy.",
            advantage: "Compact, easy to control, and cost-effective for short to medium surgeries."
          },
          {
            title: "Trumpet-Control Suction",
            icon: "🧴",
            description: "Spring-loaded push-button style valve resembling a 'trumpet' for intuitive finger use. Available in 5mm and 10mm sizes.",
            function: "Provides reliable, high-flow efficiency with an easy switch between suction and irrigation.",
            application: "Used in fluid-rich surgeries like gynecological adhesiolysis, oophorectomies.",
            advantage: "Ergonomic and preferred in longer procedures due to consistency and flow."
          },
          {
            title: "Storz Type Trumpet Suction",
            icon: "🧪",
            description: "High-grade stainless steel body with integrated trumpet valve, fully compatible with Karl Storz systems and connectors.",
            function: "Delivers high-flow rate suction suitable for complex procedures.",
            application: "Gynecology, urology, and colorectal surgeries requiring recurrent flushing and clearing.",
            advantage: "Robust, reusable, and ensures seamless integration with existing Storz equipment."
          }
        ],
        keyFeatures: [
          "Autoclavable: All components are fully reusable and sterilizable.",
          "High Flow: Designed to prevent clogging and maintain a clear surgical field.",
          "Ergonomic Design: Reduces hand fatigue during prolonged use.",
          "Versatile Sizing: Options for both 5mm and 10mm ports."
        ]
      },
      {
        id: "monopolar-electrodes",
        title: "6. Monopolar Electrodes (5mm)",
        icon: "⚡",
        mainDescription: "Monopolar electrodes are used in laparoscopic procedures for cauterizing, cutting, and dissection. They deliver current from a single electrode to targeted tissue and complete the circuit through a grounding pad on the patient.",
        subItems: [
          {
            title: "L-Hook / J-Hook Electrode",
            icon: "🔌",
            description: "L-shaped or J-shaped sharp metallic tip.",
            function: "Used for tissue dissection, coagulation of blood vessels, and fine cutting.",
            application: "Common in cholecystectomy, appendectomy, and dissecting curved tissues.",
            advantage: "Precision cutting along straight or curved tissue areas with lower thermal spread."
          },
          {
            title: "Spatula Electrode",
            icon: "🔌",
            description: "Flat blade (paddle) shape for broad surface area.",
            function: "Used to cauterize large tissue planes, such as peritoneal surfaces or omentum.",
            application: "Effective for treating superficial lesions like endometriosis during tumor debulking.",
            advantage: "Provides wide, even coagulation."
          },
          {
            title: "Ball Electrode",
            icon: "🔌",
            description: "Spherical metal tip.",
            function: "Ideal for spot coagulation with minimal tissue penetration.",
            application: "Often used for hemostasis near blood vessels or on delicate anatomy.",
            advantage: "Controlled coagulation with minimal damage to surrounding tissue."
          }
        ],
        keyFeatures: [
          "Shaft: 5mm insulated shaft for safety.",
          "Connection: Standard monopolar connection compatible with most Electrosurgical Units (ESUs).",
          "Material: High-grade stainless steel with durable insulation.",
          "Reusable: Fully autoclavable."
        ]
      },
      {
        id: "bipolar-instruments",
        title: "7. Bipolar Instruments",
        icon: "🔥",
        mainDescription: "Bipolar instruments safely deliver coagulating current between two electrodes on the instrument tip, eliminating the need for a grounding pad and minimizing lateral thermal spread. They’re widely preferred in bowel, gynecological, urological, and oncologic laparoscopies.",
        subItems: [
          {
            title: "Bipolar Coagulation Forceps",
            icon: "🧲",
            description: "Available with U-Handle or ergonomic X-Handle. Jaws come in Tong (Plate) or Fenestrated styles.",
            function: "Dissecting or coagulating vessels. Tong jaws for even compression, fenestrated for gentle grip.",
            application: "Used for controlled coagulation with minimal thermal spread.",
            advantage: "Safe and effective vessel sealing."
          },
          {
            title: "Non-Detachable Bipolar Graspers",
            icon: "🔗",
            description: "Combines grasping and coagulation. Jaw types include Maryland, Bowel, and Ruby for different tissues.",
            function: "Simultaneous tissue handling and vessel sealing.",
            application: "Bowel resections, hysterectomy.",
            advantage: "Permanent design reduces cost and maintenance; ideal for high-usage surgical centers."
          },
          {
            title: "Detachable Bipolar Grasper Cutter",
            icon: "🔧",
            description: "Modular system with interchangeable handles (Blue/Black Bissinger, Wolf) and jaws (Maryland, Fenestrated, Ruby).",
            function: "Grasping, cutting, and coagulation in one instrument.",
            application: "Versatile tool for complex procedures.",
            advantage: "Reduces instrument exchanges, cost-effective due to replaceable parts."
          },
          {
            title: "Bipolar Sealer Cutter",
            icon: "⚙️",
            description: "All-in-one tool for vessel sealing and cutting. Available as non-detachable (Indian Handle) or detachable (Bissinger/Wolf Handles) with Silver or Gold jaws.",
            function: "Efficiently seals and cuts vessels up to 7mm.",
            application: "Advanced laparoscopic procedures requiring reliable large vessel sealing.",
            advantage: "Enhanced sealing efficiency and multifunctional design."
          }
        ],
        keyFeatures: [
          "Safety: Confined energy delivery reduces risk of unintended burns.",
          "Versatility: Multiple handle and jaw combinations for any procedure.",
          "Efficiency: Combines multiple functions to reduce instrument exchanges.",
          "Autoclavable: Both detachable and non-detachable versions are fully reusable."
        ]
      },
      {
        id: "trocars-veress",
        title: "8. Trocars &amp; Veress Needles",
        icon: "🧷",
        mainDescription: "Trocars and Veress needles serve as the initial access tools for laparoscopic surgeries.",
        subItems: [
          {
            title: "Trocars",
            icon: "💉",
            description: "Provide access ports for instruments. Available in diameters from 3mm to 20mm.",
            function: "Create and maintain a sealed port into the abdominal cavity.",
            application: "Used in all laparoscopic surgeries to introduce cameras and instruments.",
            advantage: "Options include durable Stainless Steel, cost-effective Brass, ergonomic Storz Type, and stabilized Magnetic variants."
          },
          {
            title: "Veress Needles",
            icon: "🪡",
            description: "Spring-loaded safety needle to safely insufflate the abdomen with CO₂. Sizes from 100mm to 160mm.",
            function: "Establishes pneumoperitoneum at the start of laparoscopy.",
            application: "Used for initial entry in diagnostic laparoscopy or surgeries with no prior scarring.",
            advantage: "Auto-retracting blunt stylet protects organs from injury during insertion."
          }
        ],
        keyFeatures: [
          "Durability: Made from high-quality materials for long service life.",
          "Safety: Designed to minimize patient trauma and risk of visceral injury.",
          "Variety: Comprehensive range of sizes and materials to suit any surgical need."
        ]
      },
      {
        id: "endo-retractors",
        title: "9. Endo Retractors",
        icon: "🚧",
        mainDescription: "Designed to atraumatically hold organs away from the surgical field to improve visibility and access.",
        subItems: [
          {
            title: "Fan Retractor Straight",
            icon: "⚙️",
            description: "Features 3 prongs and fits a 5mm port. Manual opening fan blades.",
            function: "Temporarily holds liver, stomach, or bowel.",
            application: "Used for basic organ retraction in general surgery.",
            advantage: "Simple, effective, and has a thin profile suitable for smaller ports."
          },
          {
            title: "Fan Retractor Articulated",
            icon: "🧲",
            description: "Features 5 articulating prongs for a larger surface area. Available for 5mm or 10mm shafts.",
            function: "Provides gradual and safe elevation of organs like the liver or uterus.",
            application: "Designed for superior organ retraction in bariatric, colorectal, and GYN cases.",
            advantage: "Articulating tip provides superior maneuverability and access to deep cavities."
          }
        ],
        keyFeatures: [
          "Atraumatic Design: Smooth, rounded prongs to prevent tissue damage.",
          "Shaft Sizes: Options for both 5mm and 10mm ports.",
          "Material: Durable, medical-grade stainless steel."
        ]
      },
      {
        id: "reducers",
        title: "10. Laparoscopy Reducers",
        icon: "🔁",
        mainDescription: "These reducers allow insertion of smaller instruments through larger trocars while maintaining pneumoperitoneum.",
        subItems: [
          {
            title: "Metal Reducers",
            icon: "🔩",
            description: "Durable, reusable reducers for various size combinations (e.g., 20→10mm, 10→5mm, 5→3mm).",
            function: "Allows use of a smaller instrument in a larger port.",
            application: "Increases instrument flexibility without adding extra ports.",
            advantage: "Wide range of sizes available and cost-effective."
          },
          {
            title: "Top Mounted &amp; Flipon Reducers",
            icon: "🔧",
            description: "Sits on top of the trocar or uses a flip-lock mechanism for rapid adaptation (10mm to 5mm).",
            function: "Quickly secure different-sized instruments.",
            application: "High-paced surgeries requiring frequent instrument changes.",
            advantage: "Ensures a secure and rapid seal to maintain insufflation."
          }
        ],
        keyFeatures: [
          "Material: Medical-grade silicone and stainless steel.",
          "Seal: Provides a reliable seal to prevent gas leakage.",
          "Ease of Use: Designed for quick and easy application during surgery."
        ]
      }
    ],
  }
];

    
