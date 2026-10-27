export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'sensory-tech' | 'movement' | 'textiles' | 'sensory-rooms' | 'adaptive';
  categoryLabel: string;
  description: string;
  otBenefits: string[];
  dimensions?: string;
  materials?: string;
  image: string;
  status: 'marketplace' | 'coming-soon';
  marketplaceUrl?: string;
  marketplaceName?: string;
  priceNote?: string;
  specs: { [key: string]: string };
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  department: string;
}

export interface Review {
  reviewer: string;
  date: string;
  location: string;
  rating: number;
  content: string;
  source: string;
  verified: boolean;
  highlight: string;
  images?: string[];
  detail?: string;
}

export interface EarlyBuyer {
  name: string;
  credentials: string;
  organization: string;
  location: string;
  bio: string;
  image?: string;
  quoteSnippet: string;
}

export interface Metric {
  value: string;
  label: string;
  sublabel: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'lightloops',
    name: 'LIGHTLOOPS',
    subtitle: 'Interactive Sensory Panel',
    category: 'sensory-tech',
    categoryLabel: 'Sensory Technology',
    description: 'Switch-adapted, multi-sensory interactive wall panel with dynamic illumination and natural acoustic sounds (metal, wood, water). Designed for cause-and-effect learning.',
    otBenefits: [
      'Hand-Eye Coordination & Visual Tracking',
      'Cause & Effect Sensory Feedback',
      'Adaptive Switch Controlled Soundscapes',
      'Collaborative Group Interactive Play'
    ],
    materials: 'FSC-Certified Hardwood, High-Grade Acrylic, Safe LED Core',
    image: '/assets/products/Lightloops_534f24e7-2bb4-4420-ad1c-7b4886d32283.png',
    status: 'marketplace',
    marketplaceName: 'Amazon & Etsy',
    marketplaceUrl: 'https://www.etsy.com/listing/4519472296/sensory-compression-hammock-propriotex',
    specs: {
      'Mounting': 'Wall-mount with safety lock',
      'Sound Modes': 'Metal, Wood, Water, Ambient',
      'Switch Compatibility': 'Standard 3.5mm adaptive jacks',
      'Power': 'Low voltage DC 12V adapter'
    }
  },
  {
    id: 'lumaswing',
    name: 'LumaSwing',
    subtitle: 'Sensory Interactive Glow Ball Pit Swing',
    category: 'sensory-tech',
    categoryLabel: 'Sensory Technology',
    description: 'A revolutionary occupational therapy swing combining vestibular rocking with sound-reactive ambient glow and a 5-mode wireless switch controller.',
    otBenefits: [
      'Vestibular & Proprioceptive Integration',
      'Sound & Voice Reactive Light Modes',
      'Supports Non-Verbal Communication',
      'Calming Ambient Sensory Stimulation'
    ],
    materials: 'High-Density Foam, Medical Grade Vinyl, Multi-Zone RGB LED',
    image: '/assets/products/lumaswing_1.png',
    status: 'marketplace',
    marketplaceName: 'Etsy Star Seller & Amazon',
    marketplaceUrl: 'https://www.etsy.com/listing/4519472296/sensory-compression-hammock-propriotex',
    specs: {
      'Modes': '01 Colour Change, 02 Colour Mixer, 03 Light Show, 04 Sound Reactive, 05 Group Play',
      'Controller': 'Wireless Switch-Adapted Handheld Remote',
      'Capacity': 'Up to 90 kg load tested',
      'Origin': 'Made in Kerala, India'
    }
  },
  {
    id: 'symphonysense',
    name: 'SymphonySense II',
    subtitle: 'Music Explorer Sensory Tactile Wall Panels',
    category: 'sensory-tech',
    categoryLabel: 'Sensory Technology',
    description: 'Non-electronic, acoustic musical sensory wall tiles combining Metallophone, Xylophone, and Percussion elements for organic acoustic therapy.',
    otBenefits: [
      'Auditory & Tactile Exploration',
      'Fine Motor Grasp & Rhythm Development',
      'Zero Electronic Glare / Screen-Free',
      'Inclusive Multi-Sensory Classrooms'
    ],
    materials: 'Treated Teakwood, Tuned Aluminum & Brass Tone Bars',
    image: '/assets/products/symphonysense whatsapp status_1.png',
    status: 'marketplace',
    marketplaceName: 'Etsy & Direct Enquiry',
    marketplaceUrl: 'https://www.etsy.com/listing/4519472296/sensory-compression-hammock-propriotex',
    specs: {
      'Acoustic Elements': 'Metallophone, Xylophone, Tactile Percussion',
      'Modularity': 'Interlocking wall tile system',
      'Finish': 'Child-safe non-toxic natural beeswax',
      'Standards': 'ISO & Pediatric Safety Compliant'
    }
  },
  {
    id: 'balance-bench',
    name: 'Balance Bench',
    subtitle: 'Height-Adjustable Adaptive Balance Board',
    category: 'movement',
    categoryLabel: 'Movement & Balance',
    description: 'Rehabilitation and postural stability tool for physically disabled individuals. Naturally crafted with multi-position height adjustments and a tactile non-slip tread.',
    otBenefits: [
      'Core Muscle Activation & Balance Training',
      'Postural Alignment & Vestibular Calibration',
      'Adjustable Incline for Progressive Difficulty',
      'Non-Slip High Tactile Texture'
    ],
    materials: 'FSC-Certified Steam-Bent Hardwood, Non-Slip Grip Tread',
    image: '/assets/products/balance bench.png',
    status: 'marketplace',
    marketplaceName: 'Amazon Global & Etsy',
    marketplaceUrl: 'https://www.amazon.in/Keller-ADAPT-Processing-Occupational-Equipment/dp/B09TW84X2P?th=1',
    specs: {
      'Adjustment': '3-level incline heights',
      'Weight Rating': '120 kg maximum capacity',
      'Surface': 'Tactile textured grip ridges',
      'Therapy Use': 'Physical & Occupational Therapy Centers'
    }
  },
  {
    id: 'balance-seat',
    name: 'Balance Seat',
    subtitle: 'Sensory Rocker Balance Seat',
    category: 'movement',
    categoryLabel: 'Movement & Balance',
    description: 'Therapeutic rocking seat designed for sensory integration, calm sitting posture, and self-soothing rocking motion in classrooms and therapy clinics.',
    otBenefits: [
      'Continuous Low-Intensity Core Engagement',
      'Vestibular Self-Regulation During Seated Tasks',
      'Ergonomic Wave Contour for Spine Support'
    ],
    materials: 'Molded FSC Hardwood Veneer, Charcoal Finish',
    image: '/assets/products/balance seat no logo.png',
    status: 'marketplace',
    marketplaceName: 'Amazon & Etsy',
    marketplaceUrl: 'https://www.etsy.com/listing/4519472296/sensory-compression-hammock-propriotex',
    specs: {
      'Profile': 'Curved rocker base with anti-tip safety stoppers',
      'Portability': 'Lightweight with integrated grip handle',
      'Finish': 'Water-based non-toxic lacquer'
    }
  },
  {
    id: 'layernest',
    name: 'LayerNest',
    subtitle: '5-Layer Compression Sensory Hammock',
    category: 'textiles',
    categoryLabel: 'Therapy Textiles',
    description: 'Engineered 5-layer deep-pressure compression hammock designed for home and clinical therapy use, supporting sensory integration and calming nervous system regulation.',
    otBenefits: [
      'Deep Touch Pressure (DTP) Sensory Calming',
      'Vestibular Calming via Gentle Bungee Bounce',
      'Versatile 3-in-1: Cocoon, Hammock, and Swing',
      'Reduces Anxiety & Overstimulation'
    ],
    materials: 'Premium 4-Way Stretch Breathable Medical Lycra & Reinforced Stitching',
    image: '/assets/unboxing/layernest.jpg',
    status: 'marketplace',
    marketplaceName: 'Etsy Star Seller (Top Rated)',
    marketplaceUrl: 'https://www.etsy.com/listing/4519472296/sensory-compression-hammock-propriotex',
    specs: {
      'Layers': '5 independent therapeutic compression layers',
      'Hardware': '360° Heavy-Duty Ceiling Swivel & Climbing Carabiners',
      'Care': 'Machine washable gentle cycle',
      'Packaging': 'Delivered in custom Keller Adapt canvas carry bag'
    }
  },
  {
    id: 'solonest',
    name: 'SoloNest',
    subtitle: 'Hammock-Style Sensory Retreat Pod',
    category: 'textiles',
    categoryLabel: 'Therapy Textiles',
    description: 'Suspended cocoon hideaway providing 360-degree calming envelopment for children needing emotional decompression and sensory recovery.',
    otBenefits: [
      'Eliminates Distracting Visual Overload',
      'Provides Consistent Calming Proprioceptive Cocooning',
      'Safe Emotional Regulation Sanctuary'
    ],
    materials: 'High-Strength Breathable Cotton-Spandex Blend',
    image: '/assets/products/SOLONEST.png',
    status: 'marketplace',
    marketplaceName: 'Amazon & Etsy',
    marketplaceUrl: 'https://www.etsy.com/listing/4519472296/sensory-compression-hammock-propriotex',
    specs: {
      'Dimensions': '140 cm drop length x 80 cm diameter',
      'Load Capacity': '80 kg',
      'Inclusions': 'Inflatable base cushion, pump, mounting kit'
    }
  },
  {
    id: 'calmcave',
    name: 'CalmCave',
    subtitle: 'Sensory Retreat Cocoon & Dark Den',
    category: 'textiles',
    categoryLabel: 'Therapy Textiles',
    description: 'Instant popup blackout sensory retreat pod. Blocks light and ambient noise to create an immediate safe haven for neurodivergent children in busy spaces.',
    otBenefits: [
      'Rapid De-escalation from Sensory Overload',
      'Light-Tight Blackout Interior for Fiber Optic Play',
      'Instant Deployment in Classrooms, Homes, and Airports'
    ],
    materials: 'Double-Layered Light-Blocking Microfiber with Spring Steel Frame',
    image: '/assets/products/CalmCave  a+ 01.png',
    status: 'marketplace',
    marketplaceName: 'Amazon Global',
    marketplaceUrl: 'https://www.amazon.in/Keller-ADAPT-Processing-Occupational-Equipment/dp/B09TW84X2P?th=1',
    specs: {
      'Setup': 'Pops up in under 30 seconds',
      'Ventilation': 'Two breathable mesh airflow ports with light seals',
      'Portability': 'Collapses into compact circular travel bag'
    }
  },
  {
    id: 'hugmate',
    name: 'Hugmate',
    subtitle: 'Deep-Pressure Sensory Therapy Wrap',
    category: 'textiles',
    categoryLabel: 'Therapy Textiles',
    description: 'Calming proprioceptive compression wrap that provides continuous reassuring hugs, helping children achieve calmness and bodily awareness.',
    otBenefits: [
      'Grounding Proprioceptive Feedback',
      'Improves Body Awareness & Attention Span',
      'Comforting Swaddle Feel for ADHD & Autism'
    ],
    materials: 'Hypoallergenic Super-Stretch Bamboo-Lycra Blend',
    image: '/assets/products/HUGMATE a+ v2.png',
    status: 'marketplace',
    marketplaceName: 'Flipkart & Amazon',
    marketplaceUrl: 'https://www.flipkart.com/keller-adapt-deep-pressure-memory-foam-sensory-input-occupational-therapy-aid-autism-sleeping-bag/p/itme587d611de753',
    specs: {
      'Sizes': 'Toddler, Child, and Teen/Adult sizes available',
      'Fastening': 'Silent sensory-friendly hook-and-loop closure',
      'Certification': 'OEKO-TEX Certified safe fabric'
    }
  },
  {
    id: 'sensepath',
    name: 'SensePath',
    subtitle: 'Proprioceptive Sensory Crawling Tunnel',
    category: 'movement',
    categoryLabel: 'Movement & Balance',
    description: 'Dynamic resistance crawling tunnel that activates gross motor muscles, bilateral coordination, and spatial planning through deep fabric resistance.',
    otBenefits: [
      'Resistance Crawling for Deep Body Awareness',
      'Bilateral Coordination & Motor Planning',
      'Tactile & Proprioceptive Integration'
    ],
    materials: 'High-Elasticity Lycra Stretch Fabric with Padded Entry Rings',
    image: '/assets/products/SENSEPATH A+ 1.png',
    status: 'marketplace',
    marketplaceName: 'Amazon & Etsy',
    marketplaceUrl: 'https://www.etsy.com/listing/4519472296/sensory-compression-hammock-propriotex',
    specs: {
      'Length': '2.5 meters expandable',
      'Washable': 'Machine washable',
      'Use Case': 'Therapy gyms, obstacle courses, living rooms'
    }
  },
  {
    id: 'flowswing',
    name: 'FlowSwing Tri-Set',
    subtitle: 'Vestibular Sensory Swing Set for Therapy Centers',
    category: 'movement',
    categoryLabel: 'Movement & Balance',
    description: 'Complete multi-configuration swing set tailored specifically for pediatric occupational therapy centers, special schools, and rehab clinics.',
    otBenefits: [
      'Rotational, Linear, and Orbital Vestibular Input',
      'Core Strengthening and Balance Calibration',
      'Heavy-Duty Institutional Durability'
    ],
    materials: 'Reinforced Webbing, Military Grade Stitching, Sealed Bearings',
    image: '/assets/products/Flowswing A+.png',
    status: 'marketplace',
    marketplaceName: 'Amazon & Direct Procurement',
    marketplaceUrl: 'https://www.amazon.in/Keller-ADAPT-Processing-Occupational-Equipment/dp/B09TW84X2P?th=1',
    specs: {
      'Configurations': 'Platform, Hammock, and Teardrop configurations',
      'Rating': 'Tested for continuous institutional use (200 kg rating)',
      'Hardware': 'Ceiling mounts, height-adjustment chains included'
    }
  },
  {
    id: 'sensory-room-turnkey',
    name: 'Sensory Room Custom Architecture',
    subtitle: 'Turnkey Multi-Sensory Environment Fit-Outs',
    category: 'sensory-rooms',
    categoryLabel: 'Sensory Rooms',
    description: 'End-to-end bespoke sensory room design and installation for schools, hospitals, airports, and clinics. Incorporates fiber optics, interactive walls, acoustic control, and soothing lighting.',
    otBenefits: [
      'Tailored to Specific Neurodivergent Population Needs',
      'Comprehensive Sensory Integration Environment',
      'Custom Layout Designed with Certified OTs'
    ],
    materials: 'Acoustic Wall Paneling, Anti-Microbial Flooring, Custom Lighting',
    image: '/assets/sensory_rooms/10 (1).jpg',
    status: 'coming-soon',
    priceNote: 'Custom Project Consultation',
    specs: {
      'Design Consultation': 'On-site and 3D architectural layout planning',
      'Installations Completed': '100+ therapy centers across India and overseas',
      'Compliance': 'Accessible & Pediatric Fire-Safety Standards'
    }
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Abdul Jaleel',
    role: 'Founder & CEO',
    bio: 'Pioneered Keller Adapt with a vision to build a world-class Indian pediatric assistive technology brand. Leading product strategy, clinical partnerships, and domestic manufacturing.',
    image: '/assets/team/jaleel.png',
    department: 'Founder & CEO'
  },
  {
    name: 'George Fleming',
    role: 'CTO',
    bio: 'Oversees engineering innovation, switch-adapted interactive electronics, and firmware architecture for LightLoops and LumaSwing therapy systems.',
    image: '/assets/team/George Fleming.png',
    department: 'CTO'
  },
  {
    name: 'Insam Jamal',
    role: 'CFO',
    bio: 'Steers global supply chain economics, strategic expansion, and institutional procurement to ensure our products remain 60-80% more affordable than imports.',
    image: '/assets/team/Insam.png',
    department: 'CFO'
  },
  {
    name: 'Stephano Saji',
    role: 'Product Manufacturing',
    bio: 'Leads product manufacturing for the pieces Keller Adapt builds in-house.',
    image: '/assets/team/stephano-saji.jpg',
    department: 'Product Manufacturing'
  },
  {
    name: 'Abhijith',
    role: 'Creative Design & Visual Communication',
    bio: 'Crafts the tactile aesthetic, packaging experiences, and inclusive visual communication across all physical products and manuals.',
    image: '/assets/team/Abhi 1.jpg',
    department: 'Creative Design & Visual Communication'
  },
  {
    name: 'Amar Gangadhar',
    role: 'Embedded Systems Engineering',
    bio: 'Embedded systems engineering for Keller Adapt’s interactive therapy tools.',
    image: '/assets/team/amar-gangadhar.jpg',
    department: 'Embedded Systems Engineering'
  },
  {
    name: 'Suneera',
    role: 'Textile Engineering & Production',
    bio: 'Specializes in therapeutic compression textiles, medical-grade lycra tolerances, and ergonomic sensory swaddles including LayerNest and Hugmate.',
    image: '/assets/team/Suneera.png',
    department: 'Textile Engineering & Production'
  },
  {
    name: 'Sophiya',
    role: 'Textile Engineering & Production',
    bio: 'Textile engineering and production for Keller Adapt’s sensory fabrics.',
    image: '/assets/team/sophiya.jpg',
    department: 'Textile Engineering & Production'
  },
  {
    name: 'Pandian',
    role: 'Textile Engineering & Production',
    bio: 'Drives high-precision fabric cutting, multi-layer seam reinforcement, and durability testing for all swing and compression systems.',
    image: '/assets/team/Pandian.png',
    department: 'Textile Engineering & Production'
  }
];

export const EARLY_BUYERS: EarlyBuyer[] = [
  {
    name: 'Polina Starr, MS, OTR/L',
    credentials: 'MS in Occupational Therapy, LIU | Sensory Integration Specialist',
    organization: 'Founder & Executive Director, Function Junction NYC',
    location: 'New York City, USA',
    bio: 'Pediatric occupational therapist since 2008. Directed OT programs at Alexander Robertson School and Bank Street College Family Center. Certified in Wilbarger Deep Pressure Protocol and Greenspan Floortime.',
    image: '/assets/testimonials/polina-starr.jpg',
    quoteSnippet: 'Keller Adapt products deliver the exact sensory integration tolerances our clinic demands at unprecedented accessibility.'
  },
  {
    name: 'Dr. Laura Fitzpatrick, MD, FAAD',
    credentials: 'MD Weill Cornell Medicine | Board-Certified Dermatologist',
    organization: 'Manhattan Medical Practice & Former Hofstra Faculty',
    location: 'New York, USA',
    bio: 'Attuned to both physical and emotional well-being, Dr. Fitzpatrick champions sensory-safe, hypoallergenic, skin-friendly fabrics for children with sensory processing sensitivities.',
    image: '/assets/testimonials/laura-fitzpatrick.jpg',
    quoteSnippet: 'The fabric quality and tactile skin-feel of Keller Adapt textiles reflect deep care for child dermatological comfort.'
  },
  {
    name: 'Dr. Alia Breon, MD',
    credentials: 'Emergency Medicine Physician | Autism & Monotropism Specialist',
    organization: 'Neurodiversity Advocate & Health Executive',
    location: 'United States',
    bio: 'Speaking and writing on autism, monotropism, and neuroscience of attention. Evaluates therapy tools through a neuro-affirming clinical lens.',
    image: '/assets/testimonials/alia-breon.jpg',
    quoteSnippet: 'A truly considered approach to sensory inclusion that centers the dignity and autonomy of neurodivergent children.'
  },
  {
    name: 'Valéria Fernandes',
    credentials: 'Terapeuta Ocupacional',
    organization: 'Centro de Desenvolvimento e Aprendizagem',
    location: 'São Paulo, Brazil',
    bio: 'Leading pediatric occupational therapy clinician in Brazil utilizing sensory hammocks and adaptive tools for sensory processing disorders.',
    image: '/assets/testimonials/valeria-fernandes.svg',
    quoteSnippet: 'Exceptional therapeutic quality, arriving seamlessly across continents with outstanding attention to detail.'
  },
  {
    name: 'Dr. Yesol Kim, MD',
    credentials: 'MD | Physician Dealing with Minor Trauma',
    organization: 'Clinical Care & Pediatric Sensory Rehabilitation',
    location: 'South Korea',
    bio: 'Physician dealing with minor trauma in South Korea who reached out directly to bring Keller Adapt’s Sensory Therapy Wrap into pediatric clinical recovery and support international patients.',
    image: '/assets/testimonials/yesol-kim.svg',
    quoteSnippet: 'I fortunately found your amazing product, Sensory Therapy Wrap For Kids... Thank you for your beautiful idea and products.'
  }
];

export const REVIEWS: Review[] = [
  {
    reviewer: 'Dr. Yesol Kim',
    date: 'Verified Clinical Inquiry',
    location: 'South Korea',
    rating: 5,
    source: 'Direct Clinical Message',
    verified: true,
    highlight: 'Thank you for your beautiful idea and products.',
    detail: 'Physician (Minor Trauma) · Sensory Therapy Wrap for Kids',
    content: "Hello. My name is Yesol Kim. I'm a physician dealing with minor trauma in South Korea. I fortunately found your amazing product, Sensory Therapy Wrap For Kids, on internet by chance. I'm very interested in it and eager to buy it. Do you currently offer international shipping to South Korea? If I could buy the product, please let me know the price by the sizes and the shipping price. Thank you for your beautiful idea and products. With all my heart, Yesol Kim From South Korea."
  },
  {
    reviewer: 'Kate',
    date: '18 August, 2026',
    location: 'United States',
    rating: 5,
    source: 'Verified Etsy Star Seller Purchase',
    verified: true,
    highlight: 'All three boys immediately used it in the way that feels natural to them.',
    images: ['/assets/reviews/kate-1.jpg', '/assets/reviews/kate-2.jpg'],
    content: 'I bought this because I homeschool three sons with ADHD and am always looking for ways to encourage movement at home. It exceeded my expectations. The fabric is beautiful, and I love its versatility. All three boys immediately used it differently: one climbed inside to escape and find calm. Another used the bungee bounce function to release energy, and the third made it a jungle hammock! It arrived carefully and intentionally packaged with a beautiful instruction booklet.'
  },
  {
    reviewer: 'Valeria',
    date: '09 September, 2026',
    location: 'International Buyer',
    rating: 5,
    source: 'Verified Etsy Purchase',
    verified: true,
    highlight: 'The lycra is BEAUTIFUL and comes with a gorgeous bag!',
    images: ['/assets/reviews/valeria-1.jpg'],
    content: 'It took a while to arrive because it was held up in customs, but it was worth the whole process! The lycra is BEAUTIFUL, it comes super well packaged and it even includes a gorgeous bag! I really, really liked it.'
  },
  {
    reviewer: 'Mafalda',
    date: '08 September, 2026',
    location: 'Portugal',
    rating: 5,
    source: 'Verified Etsy Purchase',
    verified: true,
    highlight: 'The seller went above and beyond throughout the entire process.',
    content: 'The product is of excellent quality and exactly as described. I had some issues with customs clearance process but the seller went above and beyond to help resolve the situation and was incredibly attentive throughout the entire process. I highly recommend both the product and the seller!'
  },
  {
    reviewer: 'Alim Saeed Jaffer Siyad',
    date: '15 April, 2022',
    location: 'India',
    rating: 5,
    source: 'Verified Amazon Purchase',
    verified: true,
    highlight: 'Good Quality Soft Hugs',
    detail: 'Alice Blue · 8–10 years',
    content: 'We bought this for my 8 year old son who has been diagnosed with ASD. He is extremely high functioning. At first he hesitated to use this product. But now he loves it. It is very soft and makes him calm. We used blankets before and it was very difficult. After this purchase the OT sessions are easy and the product looks cool. The duffel bag also looks nice. The hardest part of the velcro came into contact with the fabric and it scratched the area, especially the pillow velcro. A cover for the hard velcro on the pillow would be good. Worth the buy.'
  },
  {
    reviewer: 'Centre for Holistic Development',
    date: '1 March, 2023',
    location: 'Sai Prayag Hospital, India',
    rating: 5,
    source: 'Verified Amazon Purchase',
    verified: true,
    highlight: 'Sensory wrap',
    content: 'It has been many months since we have been using this sensory wrap for our special kids and it gives amazing results in managing sensory dysfunction. Since we can modulate the pressure applied on various areas, the proprioceptive dysfunction is also being helped. It is difficult to use with a severe hyperactive child. It is highly recommended for all kids with a sensory processing disorder. A therapeutic wrap like a wet wrap is an additional bonus for the future.'
  },
  {
    reviewer: 'Arshad R.',
    date: '24 May, 2023',
    location: 'India',
    rating: 5,
    source: 'Verified Amazon Purchase',
    verified: true,
    highlight: 'Good product, I recommend it',
    detail: 'Jade Green · 8–10 years',
    content: 'Good product, easy to use. I recommend it to everyone who is in need. I love it. Best for my daughter.'
  },
  {
    reviewer: 'Amazon Customer',
    date: '25 July, 2026',
    location: 'India',
    rating: 5,
    source: 'Verified Amazon Purchase',
    verified: true,
    highlight: 'Premium Quality Super Useful Tool',
    content: 'Our therapist recommended adding more proprioceptive activities at home, and this tunnel has been perfect. Quality is good. The fabric feels premium. The stitching is neat. The tunnel stretches evenly. The see-through fabric in the middle is a cool addition. The tunnel is very lengthy. You need a big room or hall to use it at full length. It takes two people to hold both ends. Since my child wants to use it several times a day, it would have been nice to add something to attach one end of the tunnel to a sturdy object. Overall a good product.'
  }
];

export const METRICS: Metric[] = [
  {
    value: '8+ Years',
    label: 'R&D & Prototyping',
    sublabel: 'Dedicated research in assistive tech since 2018'
  },
  {
    value: '500+',
    label: 'Children Empowered',
    sublabel: 'Active participants using our solutions worldwide'
  },
  {
    value: '100+',
    label: 'Institutions & Centers',
    sublabel: 'Adopted in therapy clinics, special schools, and hospitals'
  },
  {
    value: '60–80%',
    label: 'Cost Savings vs Imports',
    sublabel: 'World-class pediatric tools at radically accessible pricing'
  },
  {
    value: '9 Days',
    label: 'Guaranteed Global Delivery',
    sublabel: 'Express fulfillment to USA, Europe, and Australia'
  }
];

export const LUMASWING_MODES = [
  {
    id: '01',
    name: 'Colour Change',
    badge: 'Visual Tracking',
    description: 'Smoothly cycles through vibrant, high-contrast spectrum sequences to support visual tracking and focus.',
    colorCode: '#10B981',
    lightEffect: 'linear-gradient(135deg, #10B981 0%, #3B82F6 100%)'
  },
  {
    id: '02',
    name: 'Colour Mixer',
    badge: 'Cognitive Cause & Effect',
    description: 'Enables child or therapist to mix and hold custom color combinations using switch toggles.',
    colorCode: '#8B5CF6',
    lightEffect: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)'
  },
  {
    id: '03',
    name: 'Light Show',
    badge: 'Sensory Stimulation',
    description: 'Automated dynamic illumination patterns creating an immersive sensory cocoon within the pit.',
    colorCode: '#F59E0B',
    lightEffect: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)'
  },
  {
    id: '04',
    name: 'Sound Reactive',
    badge: 'Speech & Vocalization',
    description: 'Voice-reactive microphone attachment causes lights to pulse and ripple in direct response to child vocalizations.',
    colorCode: '#06B6D4',
    lightEffect: 'linear-gradient(135deg, #06B6D4 0%, #10B981 100%)'
  },
  {
    id: '05',
    name: 'Group Play',
    badge: 'Social Collaboration',
    description: 'Multi-switch synchronized mode encouraging cooperative turn-taking and shared play in classrooms.',
    colorCode: '#EA5338',
    lightEffect: 'linear-gradient(135deg, #EA5338 0%, #C83E26 100%)'
  }
];
