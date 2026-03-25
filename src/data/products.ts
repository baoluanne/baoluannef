export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Tops' | 'Bottoms';
  image: string;
  description: string;
  highlights: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Essential Oversized Tee',
    price: 250000,
    category: 'Tops',
    image: 'https://picsum.photos/seed/tee1/800/1000',
    description: 'The ultimate everyday essential. Features a trendy oversized fit and breathable fabric, perfect for the Vietnamese climate.',
    highlights: [
      'Premium Fabric: 100% Cotton 2-way stretch',
      'Form: Oversized streetwear fit',
      'Durability: High-quality print'
    ]
  },
  {
    id: '2',
    name: 'Streetwear Cargo Pants',
    price: 450000,
    category: 'Bottoms',
    image: 'https://picsum.photos/seed/pants1/800/1000',
    description: 'Rugged yet comfortable cargo pants designed for the modern urban explorer.',
    highlights: [
      'Material: Durable Twill',
      'Fit: Relaxed Tapered',
      'Storage: Multi-pocket design'
    ]
  },
  {
    id: '3',
    name: 'Graphic Local Brand Tee',
    price: 280000,
    category: 'Tops',
    image: 'https://picsum.photos/seed/tee2/800/1000',
    description: 'Show your local pride with our signature graphic tee.',
    highlights: [
      'Premium Fabric: 100% Cotton',
      'Print: Screen-printed graphics',
      'Comfort: Pre-shrunk'
    ]
  },
  {
    id: '4',
    name: 'Minimalist Chino Shorts',
    price: 320000,
    category: 'Bottoms',
    image: 'https://picsum.photos/seed/shorts1/800/1000',
    description: 'Clean, simple shorts that go with everything.',
    highlights: [
      'Fabric: Lightweight Cotton Blend',
      'Length: Above the knee',
      'Style: Minimalist aesthetic'
    ]
  },
  {
    id: '5',
    name: 'Vintage Wash Hoodie',
    price: 550000,
    category: 'Tops',
    image: 'https://picsum.photos/seed/hoodie1/800/1000',
    description: 'Heavyweight hoodie with a vintage wash for that lived-in feel.',
    highlights: [
      'Weight: 400GSM French Terry',
      'Fit: Boxy oversized',
      'Detail: Distressed edges'
    ]
  },
  {
    id: '6',
    name: 'Wide-Leg Denim',
    price: 520000,
    category: 'Bottoms',
    image: 'https://picsum.photos/seed/denim1/800/1000',
    description: 'Classic wide-leg denim for a bold streetwear silhouette.',
    highlights: [
      'Denim: 13oz Raw Denim',
      'Cut: Wide-leg straight',
      'Wash: Light indigo'
    ]
  }
];
