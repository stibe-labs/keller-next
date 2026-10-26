export type CatalogItem = {
  name: string;
  subtitle: string;
  description: string;
  materials: string;
  types: string[];
  image: string;
  images?: string[];
};

export type CatalogGroup = {
  title?: string;
  items: CatalogItem[];
};

export type CategoryPageData = {
  slug: string;
  title: string;
  lead: string;
  groups: CatalogGroup[];
};

export const CATEGORY_PAGES: CategoryPageData[] = [
  {
    slug: 'sensory-technology',
    title: 'Sensory Technology',
    lead: 'Switch-adapted panels, a glow ball-pit swing, and acoustic wall tiles. Each piece is a product on its own.',
    groups: [
      {
        items: [
          {
            name: 'LightLoops',
            subtitle: 'Interactive sensory panel',
            description:
              'A wall panel for cause-and-effect play. Touch changes the light and plays acoustic sounds of metal, wood, and water. It accepts a standard adaptive switch.',
            materials: 'Hardwood panel, acrylic lenses, low-voltage LED core',
            types: ['Metal sound', 'Wood sound', 'Water sound', 'Ambient sound', '3.5 mm switch jack'],
            image: '/assets/create/sensory-tech-lightloops-frame.jpg',
          },
          {
            name: 'LumaSwing',
            subtitle: 'Sensory interactive glow ball-pit swing',
            description:
              'A platform swing filled with a glowing ball pit. A wireless switch-adapted controller cycles five therapy modes, including sound-reactive light and group play.',
            materials: 'High-density foam, medical-grade vinyl, multi-zone LED lighting',
            types: ['Colour change', 'Colour mixer', 'Light show', 'Sound reactive', 'Group play'],
            image: '/assets/create/lumaswing.jpg',
          },
          {
            name: 'SymphonySense II',
            subtitle: 'Music explorer tactile wall panels',
            description:
              'Non-electronic musical wall tiles. Metallophone, xylophone, and percussion sit on wood so a child can play with hands or a beater, including from a wheelchair.',
            materials: 'Teakwood panels, tuned aluminium and brass tone bars',
            types: ['Metallophone tile', 'Xylophone tile', 'Percussion tile'],
            image: '/assets/create/symphony.jpg',
          },
        ],
      },
    ],
  },
  {
    slug: 'movement-balance',
    title: 'Movement & Balance',
    lead: 'Three kinds of movement piece: balance boards, a therapy swing set, and a resistance tunnel.',
    groups: [
      {
        title: 'Balance boards',
        items: [
          {
            name: 'Balance Bench',
            subtitle: 'Height-adjustable adaptive balance board',
            description:
              'A wooden rocker bench for sitting, balancing, and therapy. The top height changes, and the standing surface has a non-slip tread.',
            materials: 'FSC-certified hardwood, non-slip tread',
            types: ['Multiple seat heights', 'Non-slip top'],
            image: '/assets/create/movement-balance-bench.jpg',
          },
          {
            name: 'Balance Seat',
            subtitle: 'Sensory rocker seat',
            description:
              'A low wooden rocker for seated balance and a calm rocking motion. A grip handle gives a place to hold while the curved base moves.',
            materials: 'Hardwood shell, charcoal finish',
            types: ['Curved rocker', 'Grip handle'],
            image: '/assets/products/balance seat no logo.png',
          },
        ],
      },
      {
        title: 'Swings',
        items: [
          {
            name: 'FlowSwing',
            subtitle: 'Vestibular swing set for therapy centres',
            description:
              'A set of three cocoon swings for clinics and schools. Children sit or lie inside for linear and rotational movement.',
            materials: 'Stretch therapy fabric, reinforced hanging hardware',
            types: ['Set of 3', 'Pink', 'Olive', 'Lilac'],
            image: '/assets/create/flowswing.jpg',
            images: [
              '/assets/create/flowswing.jpg',
              '/assets/create/gallery/flowswing-2.jpg',
              '/assets/create/gallery/flowswing-3.jpg',
            ],
          },
        ],
      },
      {
        title: 'Tunnels',
        items: [
          {
            name: 'SensePath',
            subtitle: 'Proprioceptive crawling tunnel',
            description:
              'A stretch tunnel for resistance crawling. The fabric hugs the body while a child moves through, for body awareness and motor planning.',
            materials: 'High-stretch lycra, padded entry rings',
            types: ['Expandable tunnel', 'Colour-block fabric'],
            image: '/assets/create/sensepath.jpg',
            images: ['/assets/create/sensepath.jpg', '/assets/create/gallery/sensepath-2.jpg'],
          },
        ],
      },
    ],
  },
  {
    slug: 'therapy-textiles',
    title: 'Therapy Textiles',
    lead: 'Hammocks, hideaways, a compression shirt, and a floor sheet. Fabric does the therapy: deep pressure, a darker pause, or a held-in feeling.',
    groups: [
      {
        title: 'Compression hammocks',
        items: [
          {
            name: 'LayerNest',
            subtitle: '5-layer compression hammock',
            description:
              'A suspended hammock with five layers of stretch fabric. It can be used as a cocoon, a hammock, or a swing for deep-pressure calming.',
            materials: '4-way stretch lycra, reinforced stitching',
            types: ['5 layers', 'Cocoon', 'Hammock', 'Swing'],
            image: '/assets/create/layernest.jpg',
            images: [
              '/assets/create/layernest.jpg',
              '/assets/create/gallery/layernest-2.jpg',
              '/assets/create/gallery/layernest-3.jpg',
            ],
          },
        ],
      },
      {
        title: 'Hideaways',
        items: [
          {
            name: 'SoloNest',
            subtitle: 'Hammock-style sensory pod',
            description:
              'A single nest to sit inside. The mesh wraps around the child and leaves an opening for a face, a quieter pause with gentle movement.',
            materials: 'Breathable mesh and stretch lining',
            types: ['Single pod', 'Coral mesh'],
            image: '/assets/create/therapy-textiles-solonest.jpg',
            images: [
              '/assets/create/therapy-textiles-solonest.jpg',
              '/assets/create/gallery/solonest-2.jpg',
              '/assets/create/gallery/solonest-3.jpg',
            ],
          },
          {
            name: 'CalmCave',
            subtitle: 'Sensory retreat cocoon',
            description:
              'A hanging cocoon with a small opening. It gives one child a contained place to settle, with the fabric closing around the body.',
            materials: 'Stretch cocoon fabric, hanging cord',
            types: ['Purple', 'Blue', 'Green'],
            image: '/assets/create/calmcave.jpg',
            images: [
              '/assets/create/calmcave.jpg',
              '/assets/create/gallery/calmcave-blue.jpg',
              '/assets/create/gallery/calmcave-green.jpg',
            ],
          },
          {
            name: 'SafeSpace',
            subtitle: 'Hide and retreat set',
            description:
              'CalmCave and SoloNest hung as a pair. One is a closed cocoon, the other a mesh pod to sit in.',
            materials: 'Stretch cocoon fabric, breathable mesh',
            types: ['CalmCave', 'SoloNest'],
            image: '/assets/create/gallery/safespace-1.jpg',
          },
        ],
      },
      {
        title: 'Wraps',
        items: [
          {
            name: 'Hugmate',
            subtitle: 'Deep-pressure therapy wrap',
            description:
              'A compression wrap worn on the body. Pads and straps give a steady hug for calming and body awareness, on the floor rather than hanging.',
            materials: 'Bamboo-lycra blend, padded sections',
            types: ['Toddler', 'Child', 'Teen and adult'],
            image: '/assets/create/hugmate.jpg',
          },
        ],
      },
      {
        title: 'Compression wear',
        items: [
          {
            name: 'SnugFlow',
            subtitle: 'Compression shirt',
            description:
              'A stretch shirt that holds the arms in against the body. It is worn, not hung, and comes in cream, grey, and mustard.',
            materials: 'Stretch fabric',
            types: ['Cream', 'Grey', 'Mustard'],
            image: '/assets/create/gallery/snugflow.jpg',
          },
        ],
      },
      {
        title: 'On the floor',
        items: [
          {
            name: 'GroupHug',
            subtitle: 'Stretch floor sheet',
            description:
              'A wide sheet of stretch fabric used on the floor. An adult holds the edge while a child lies or sits inside it.',
            materials: 'Stretch lycra',
            types: ['Turquoise', 'Magenta'],
            image: '/assets/create/gallery/grouphug-1.jpg',
            images: ['/assets/create/gallery/grouphug-1.jpg', '/assets/create/gallery/grouphug-3.jpg'],
          },
        ],
      },
    ],
  },
  {
    slug: 'sensory-rooms',
    title: 'Sensory Rooms',
    lead: 'Rooms are built for a place, not shipped as one box. Inside: bubble columns, a light panel, fibre-optic strands, and projected floors.',
    groups: [
      {
        title: 'In the room',
        items: [
          {
            name: 'Bubble columns',
            subtitle: 'Light and water in the corner',
            description:
              'Lit bubble tubes set into a soft room. Children sit with them, watch the rise of the bubbles, and use nearby switches and pads.',
            materials: 'Acrylic columns, coloured light, soft seating',
            types: ['Bubble columns', 'Switch pads beside the seat'],
            image: '/assets/create/sensory-rooms-74.jpg',
            images: ['/assets/create/sensory-rooms-74.jpg', '/assets/create/gallery/bubble-switches.jpg'],
          },
          {
            name: 'Infinity light panel',
            subtitle: 'Wall of light',
            description:
              'A wall panel of tiny lights that reads as a deep field. Coloured buttons along the bottom change the light.',
            materials: 'Light panel, coloured buttons',
            types: ['Button controls'],
            image: '/assets/create/gallery/infinity.jpg',
          },
          {
            name: 'Fibre optic curtains',
            subtitle: 'Hanging strands of light',
            description:
              'Strands of light hanging in the room, in pink and green, with a loose coil of the same strands on the step.',
            materials: 'Fibre-optic strands, coloured light',
            types: ['Hanging curtain', 'Floor coil'],
            image: '/assets/create/gallery/fiber.jpg',
          },
          {
            name: 'Interactive floor',
            subtitle: 'Projected play on the floor',
            description:
              'A picture projected onto the floor of a padded room. Children step into a lily pond, a piano, or a football pitch.',
            materials: 'Floor projection, padded walls, soft steps',
            types: ['Lily pond', 'Floor piano', 'Floor football'],
            image: '/assets/sensory_rooms/14.jpg',
            images: [
              '/assets/sensory_rooms/14.jpg',
              '/assets/create/gallery/floor-piano.jpg',
              '/assets/create/gallery/floor-football.jpg',
            ],
          },
        ],
      },
      {
        title: 'How it is built',
        items: [
          {
            name: 'Custom room fit-out',
            subtitle: 'Turnkey multi-sensory architecture',
            description:
              'A full room planned with the school or clinic. Light, sound, and soft surfaces are chosen for that space and installed as one project.',
            materials: 'Acoustic surfaces, soft flooring, custom lighting',
            types: ['Schools', 'Clinics', 'Designed with the therapy team'],
            image: '/assets/sensory_rooms/10 (1).jpg',
          },
        ],
      },
    ],
  },
  {
    slug: 'custom-manufacture',
    title: 'Custom manufacture',
    lead: 'Workshop pieces from Kochi, cut and finished for the child who will use them. Chairs and a standing frame, made to order.',
    groups: [
      {
        items: [
          {
            name: 'Therapy chairs',
            subtitle: 'Wooden adaptive seating',
            description:
              'High-back wooden chairs with head support, side pads, armrests, and a foot platform. Each chair is shaped for the child, then finished in the workshop.',
            materials: 'Hardwood frame, upholstered pads',
            types: ['Head support', 'Lateral pads', 'Foot platform', 'Teal upholstery', 'Rose upholstery'],
            image: '/assets/create/custom-manufacture-group.jpg',
            images: [
              '/assets/create/custom-manufacture-group.jpg',
              '/assets/create/gallery/therapy-chair.jpg',
            ],
          },
          {
            name: 'Standing frame',
            subtitle: 'Wooden prone stander',
            description:
              'A wooden standing frame with a padded board, body straps, and a separate activity table. The board and table have rows of adjustment holes, and the base is on casters.',
            materials: 'Hardwood frame, upholstered pads, straps',
            types: ['Padded board', 'Activity table', 'Adjustment holes', 'Casters'],
            image: '/assets/create/gallery/standing-frame.jpg',
          },
        ],
      },
    ],
  },
];

export function getCategoryPage(slug: string) {
  return CATEGORY_PAGES.find((category) => category.slug === slug);
}
