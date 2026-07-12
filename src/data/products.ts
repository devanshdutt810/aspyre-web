function fetchProductsData(){
    const products = [
  {
    id: "Pr-001",
    category: Categories.CoOrds,
    slug: "black-co-ord-set",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et itaque cumque molestiae cupiditate nihil qui nisi non ipsa voluptas. Modi nobis hic aliquam aspernatur officiis ut facilis praesentium repellat!",
    imgSource: "/collections/col1.webp",
    name: "Coord Set",
    sizes: ['S', 'M', 'L', 'XL'],
    price: "$100",
    badge: "Sale"
  },
  {
    id: "Pr-002",
    category: Categories.Dress,
    slug: "classic-floral-dress",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et itaque cumque molestiae cupiditate nihil qui nisi non ipsa voluptas. Modi nobis hic aliquam aspernatur officiis ut facilis praesentium repellat!",
    imgSource: "/collections/col2.webp",
    name: "Dress",
    sizes: ['S', 'M', 'L', 'XL'],
    price: "$100",
    badge: "Bestseller"
  },
  {
    id: "Pr-003",
    category: Categories.Dress,
    slug: "white-lace-dress",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et itaque cumque molestiae cupiditate nihil qui nisi non ipsa voluptas. Modi nobis hic aliquam aspernatur officiis ut facilis praesentium repellat!",
    imgSource: "/collections/col3.webp",
    name: "White Dress",
    sizes: ['S', 'M', 'L', 'XL'],
    price: "$100",
    badge: "New"
  },
  {
    id: "Pr-004",
    category: Categories.Dress,
    slug: "liquid-coco-maxi",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et itaque cumque molestiae cupiditate nihil qui nisi non ipsa voluptas. Modi nobis hic aliquam aspernatur officiis ut facilis praesentium repellat!",
    imgSource: "/collections/col4.webp",
    name: "Liquid coco",
    sizes: ['S', 'M', 'L', 'XL'],
    price: "$100",
    badge: "Sale"
  },
  {
    id: "Pr-005",
    category: Categories.Winter,
    slug: "urban-puffer-jacket",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et itaque cumque molestiae cupiditate nihil qui nisi non ipsa voluptas. Modi nobis hic aliquam aspernatur officiis ut facilis praesentium repellat!",
    imgSource: "/collections/col5.webp",
    name: "Jacket",
    sizes: ['S', 'M', 'L', 'XL'],
    price: "$100",
    badge: "Bestseller"
  },
  {
    id: "Pr-006",
    category: Categories.CoOrds,
    slug: "linen-summer-coord",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et itaque cumque molestiae cupiditate nihil qui nisi non ipsa voluptas. Modi nobis hic aliquam aspernatur officiis ut facilis praesentium repellat!",
    imgSource: "/collections/col1.webp",
    name: "Linen Lounge Set",
    sizes: ['M', 'L', 'XL'],
    price: "$120",
    badge: "New"
  },
  {
    id: "Pr-007",
    category: Categories.Dress,
    slug: "emerald-satin-gown",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et itaque cumque molestiae cupiditate nihil qui nisi non ipsa voluptas. Modi nobis hic aliquam aspernatur officiis ut facilis praesentium repellat!",
    imgSource: "/collections/col2.webp",
    name: "Satin Evening Dress",
    sizes: ['S', 'M', 'L'],
    price: "$140",
    badge: "Bestseller"
  },
  {
    id: "Pr-008",
    category: Categories.Dress,
    slug: "boho-chic-midi",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et itaque cumque molestiae cupiditate nihil qui nisi non ipsa voluptas. Modi nobis hic aliquam aspernatur officiis ut facilis praesentium repellat!",
    imgSource: "/collections/col3.webp",
    name: "Boho Midi Dress",
    sizes: ['S', 'M', 'L', 'XL'],
    price: "$95",
    badge: "Sale"
  },
  {
    id: "Pr-009",
    category: Categories.Dress,
    slug: "crimson-velvet-wrap",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et itaque cumque molestiae cupiditate nihil qui nisi non ipsa voluptas. Modi nobis hic aliquam aspernatur officiis ut facilis praesentium repellat!",
    imgSource: "/collections/col4.webp",
    name: "Velvet Wrap Dress",
    sizes: ['S', 'M', 'L'],
    price: "$110",
    badge: "New"
  },
  {
    id: "Pr-010",
    category: Categories.Winter,
    slug: "classic-wool-trench",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et itaque cumque molestiae cupiditate nihil qui nisi non ipsa voluptas. Modi nobis hic aliquam aspernatur officiis ut facilis praesentium repellat!",
    imgSource: "/collections/col5.webp",
    name: "Wool Trench Coat",
    sizes: ['M', 'L', 'XL', 'XXL'],
    price: "$180",
    badge: "Bestseller"
  },
  {
    id: "Pr-011",
    category: Categories.CoOrds,
    slug: "knit-athleisure-set",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et itaque cumque molestiae cupiditate nihil qui nisi non ipsa voluptas. Modi nobis hic aliquam aspernatur officiis ut facilis praesentium repellat!",
    imgSource: "/collections/col1.webp",
    name: "Knit Athleisure Set",
    sizes: ['S', 'M', 'L'],
    price: "$85",
    badge: "Sale"
  },
  {
    id: "Pr-012",
    category: Categories.Dress,
    slug: "pastel-sundress",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et itaque cumque molestiae cupiditate nihil qui nisi non ipsa voluptas. Modi nobis hic aliquam aspernatur officiis ut facilis praesentium repellat!",
    imgSource: "/collections/col2.webp",
    name: "Pastel Sundress",
    sizes: ['S', 'M', 'L', 'XL'],
    price: "$75",
    badge: "New"
  },
  {
    id: "Pr-013",
    category: Categories.Dress,
    slug: "little-black-dress",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et itaque cumque molestiae cupiditate nihil qui nisi non ipsa voluptas. Modi nobis hic aliquam aspernatur officiis ut facilis praesentium repellat!",
    imgSource: "/collections/col3.webp",
    name: "Minimalist LBD",
    sizes: ['S', 'M', 'L'],
    price: "$105",
    badge: "Bestseller"
  },
  {
    id: "Pr-014",
    category: Categories.Dress,
    slug: "rust-orange-slip",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et itaque cumque molestiae cupiditate nihil qui nisi non ipsa voluptas. Modi nobis hic aliquam aspernatur officiis ut facilis praesentium repellat!",
    imgSource: "/collections/col4.webp",
    name: "Rust Satin Slip",
    sizes: ['S', 'M', 'L', 'XL'],
    price: "$90",
    badge: "Sale"
  },
  {
    id: "Pr-015",
    category: Categories.Winter,
    slug: "sherpa-fleece-jacket",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et itaque cumque molestiae cupiditate nihil qui nisi non ipsa voluptas. Modi nobis hic aliquam aspernatur officiis ut facilis praesentium repellat!",
    imgSource: "/collections/col5.webp",
    name: "Sherpa Fleece Jacket",
    sizes: ['S', 'M', 'L', 'XL'],
    price: "$130",
    badge: "New"
  },
  {
    id: "Pr-016",
    category: Categories.CoOrds,
    slug: "monochrome-blazer-set",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et itaque cumque molestiae cupiditate nihil qui nisi non ipsa voluptas. Modi nobis hic aliquam aspernatur officiis ut facilis praesentium repellat!",
    imgSource: "/collections/col1.webp",
    name: "Blazer & Shorts Set",
    sizes: ['M', 'L', 'XL'],
    price: "$150",
    badge: "Bestseller"
  },
  {
    id: "Pr-017",
    category: Categories.Dress,
    slug: "cotton-wrap-dress",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et itaque cumque molestiae cupiditate nihil qui nisi non ipsa voluptas. Modi nobis hic aliquam aspernatur officiis ut facilis praesentium repellat!",
    imgSource: "/collections/col2.webp",
    name: "Daily Cotton Wrap",
    sizes: ['S', 'M', 'L', 'XL'],
    price: "$80",
    badge: "Sale"
  },
  {
    id: "Pr-018",
    category: Categories.Dress,
    slug: "sequin-party-mini",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et itaque cumque molestiae cupiditate nihil qui nisi non ipsa voluptas. Modi nobis hic aliquam aspernatur officiis ut facilis praesentium repellat!",
    imgSource: "/collections/col3.webp",
    name: "Sequin Party Mini",
    sizes: ['S', 'M', 'L'],
    price: "$160",
    badge: "New"
  },
  {
    id: "Pr-019",
    category: Categories.Dress,
    slug: "bohemian-ruffle-maxi",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et itaque cumque molestiae cupiditate nihil qui nisi non ipsa voluptas. Modi nobis hic aliquam aspernatur officiis ut facilis praesentium repellat!",
    imgSource: "/collections/col4.webp",
    name: "Ruffled Gypsy Maxi",
    sizes: ['S', 'M', 'L', 'XL'],
    price: "$115",
    badge: "Bestseller"
  },
  {
    id: "Pr-020",
    category: Categories.Winter,
    slug: "oversized-cable-knit",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et itaque cumque molestiae cupiditate nihil qui nisi non ipsa voluptas. Modi nobis hic aliquam aspernatur officiis ut facilis praesentium repellat!",
    imgSource: "/collections/col5.webp",
    name: "Cable Knit Sweater",
    sizes: ['S', 'M', 'L', 'XL'],
    price: "$70",
    badge: "Sale"
  },
  {
    id: "Pr-021",
    category: Categories.CoOrds,
    slug: "velour-tracksuit-set",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et itaque cumque molestiae cupiditate nihil qui nisi non ipsa voluptas. Modi nobis hic aliquam aspernatur officiis ut facilis praesentium repellat!",
    imgSource: "/collections/col1.webp",
    name: "Velour Loungewear Set",
    sizes: ['S', 'M', 'L'],
    price: "$95",
    badge: "New"
  },
  {
    id: "Pr-022",
    category: Categories.Dress,
    slug: "vintage-polka-dot",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et itaque cumque molestiae cupiditate nihil qui nisi non ipsa voluptas. Modi nobis hic aliquam aspernatur officiis ut facilis praesentium repellat!",
    imgSource: "/collections/col2.webp",
    name: "Vintage Polka Dress",
    sizes: ['S', 'M', 'L', 'XL'],
    price: "$88",
    badge: "Sale"
  },
  {
    id: "Pr-023",
    category: Categories.Dress,
    slug: "ribbed-bodycon-midi",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et itaque cumque molestiae cupiditate nihil qui nisi non ipsa voluptas. Modi nobis hic aliquam aspernatur officiis ut facilis praesentium repellat!",
    imgSource: "/collections/col3.webp",
    name: "Ribbed Bodycon Dress",
    sizes: ['S', 'M', 'L'],
    price: "$65",
    badge: "Bestseller"
  },
  {
    id: "Pr-024",
    category: Categories.Dress,
    slug: "tiered-chiffon-skater",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et itaque cumque molestiae cupiditate nihil qui nisi non ipsa voluptas. Modi nobis hic aliquam aspernatur officiis ut facilis praesentium repellat!",
    imgSource: "/collections/col4.webp",
    name: "Tiered Chiffon Dress",
    sizes: ['S', 'M', 'L', 'XL'],
    price: "$125",
    badge: "New"
  },
  {
    id: "Pr-025",
    category: Categories.Winter,
    slug: "waterproof-ski-parka",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et itaque cumque molestiae cupiditate nihil qui nisi non ipsa voluptas. Modi nobis hic aliquam aspernatur officiis ut facilis praesentium repellat!",
    imgSource: "/collections/col5.webp",
    name: "Alpine Ski Parka",
    sizes: ['M', 'L', 'XL', 'XXL'],
    price: "$210",
    badge: "Bestseller"
  }
];

return products;
}

enum Categories {
  CoOrds="Co-Ord Sets",
  Dress="Party Dresses",
  Winter="Winter Wear"
}

export default fetchProductsData;