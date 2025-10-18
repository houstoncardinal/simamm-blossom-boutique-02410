// Real product images from saari folder
const img1 = '/saari/5-39.jpg';
const img2 = '/saari/53.jpg';
const img3 = '/saari/55.jpg';
const img4 = '/saari/66.jpg';
const img5 = '/saari/77.jpg';
const img6 = '/saari/99.jpg';

export interface Product {
  id: number;
  name: string;
  designer: string;
  category: string;
  collection: string;
  price: number;
  originalPrice: number;
  discount: number;
  images: string[];
  colors: string[];
  sizes: string[];
  description: string;
  fabric: string;
  tags: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  specialNotes?: string;
  isSale?: boolean;
  isNew?: boolean;
  popularity: number;
}

const productImages: Record<number, string[]> = {
  1: [img1, img2, img3],
  2: [img2, img3, img4],
  3: [img3, img4, img5],
  4: [img4, img5, img6],
  5: [img5, img6, img1],
  6: [img6, img1, img2],
  7: [img1, img3, img5],
  8: [img2, img4, img6],
  9: [img3, img5, img1],
  10: [img4, img6, img2],
  11: [img5, img1, img3],
  12: [img6, img2, img4],
  13: [img1, img4, img6],
  14: [img2, img5, img1],
  15: [img3, img6, img2],
  16: [img4, img1, img3],
  17: [img5, img2, img4],
  18: [img6, img3, img5],
  19: [img1, img2, img4],
  20: [img2, img3, img5],
  21: [img3, img4, img6],
  22: [img4, img5, img1],
  23: [img5, img6, img2],
  24: [img6, img1, img3],
  25: [img1, img3, img4],
  26: [img2, img4, img5],
  27: [img3, img5, img6],
  28: [img4, img6, img1],
  29: [img5, img1, img2],
  30: [img6, img2, img3],
};

export const products: Product[] = [
  // Lawn Collection
  {
    id: 1,
    name: "Gulbahar Embroidered Lawn",
    designer: "Lulusar",
    category: "Lawn",
    collection: "Summer Essentials",
    price: 89,
    originalPrice: 125,
    discount: 29,
    images: productImages[1],
    colors: ["#C8A2C8", "#E6E6FA", "#DDA0DD", "#BA55D3", "#9370DB"],
    sizes: ["S", "M", "L", "XL"],
    description: "Exquisite summer lawn set featuring delicate floral embroidery and premium breathable fabric. Perfect for warm weather elegance.",
    fabric: "Premium Lawn Cotton",
    tags: ["Summer", "Floral", "Casual", "Breathable"],
    specifications: [
      { label: "Pieces", value: "3-Piece Unstitched" },
      { label: "Shirt Length", value: "2.5 Meters" },
      { label: "Dupatta", value: "2.5 Meters Chiffon" },
      { label: "Trouser", value: "2.5 Meters" },
      { label: "Embroidery", value: "Front & Sleeves" },
      { label: "Care", value: "Machine Wash Cold" }
    ],
    specialNotes: "This piece features hand-embroidered neckline with delicate threadwork. Dry clean recommended for first wash.",
    isNew: true,
    popularity: 95
  },
  {
    id: 2,
    name: "Rang Mahal Printed Lawn",
    designer: "Ethnc",
    category: "Lawn",
    collection: "Summer Essentials",
    price: 95,
    originalPrice: 135,
    discount: 30,
    images: productImages[2],
    colors: ["#DC143C", "#B22222", "#8B0000", "#FF6B6B", "#FFB6C1"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Soft pastel linen with modern cuts and traditional embellishments. A perfect blend of comfort and style.",
    fabric: "Pure Linen Blend",
    tags: ["Linen", "Pastel", "Modern", "Comfortable"],
    specifications: [
      { label: "Pieces", value: "3-Piece Unstitched" },
      { label: "Shirt", value: "3 Meters Premium Linen" },
      { label: "Dupatta", value: "2.5 Meters Silk" },
      { label: "Trouser", value: "2.5 Meters Cotton" },
      { label: "Embroidery Type", value: "Digital Print with Thread Work" },
      { label: "Season", value: "Spring/Summer" }
    ],
    isSale: true,
    popularity: 88
  },
  {
    id: 3,
    name: "Noor-e-Chaman Floral Lawn",
    designer: "Lulusar",
    category: "Lawn",
    collection: "Summer Essentials",
    price: 85,
    originalPrice: 120,
    discount: 29,
    images: productImages[3],
    colors: ["#8B4513", "#D2691E", "#CD853F", "#DEB887", "#F4A460"],
    sizes: ["M", "L", "XL"],
    description: "Garden-inspired prints with intricate botanical motifs. Lightweight and perfect for everyday elegance.",
    fabric: "Lawn Cotton",
    tags: ["Botanical", "Print", "Casual", "Lightweight"],
    specifications: [
      { label: "Pieces", value: "2-Piece Unstitched" },
      { label: "Shirt Length", value: "2.5 Meters" },
      { label: "Trouser", value: "2.5 Meters" },
      { label: "Print Type", value: "Digital Lawn Print" },
      { label: "Embroidery", value: "Neckline Embroidered" },
      { label: "Occasion", value: "Casual & Semi-Formal" }
    ],
    popularity: 82
  },

  // Formal Wear
  {
    id: 4,
    name: "Shahana Embroidered Formal",
    designer: "Sana Safinaz",
    category: "Formal",
    collection: "Signature Collection",
    price: 285,
    originalPrice: 395,
    discount: 28,
    images: productImages[4],
    colors: ["#2F4F4F", "#4682B4", "#5F9EA0", "#708090", "#778899"],
    sizes: ["S", "M", "L", "XL"],
    description: "Opulent silk ensemble with intricate hand embroidery and pearl embellishments. A statement piece for grand occasions.",
    fabric: "Pure Silk with Organza",
    tags: ["Luxury", "Formal", "Embroidered", "Exclusive"],
    specifications: [
      { label: "Pieces", value: "3-Piece Stitched/Unstitched" },
      { label: "Shirt", value: "Pure Silk with Heavy Embroidery" },
      { label: "Dupatta", value: "Embroidered Organza" },
      { label: "Trouser", value: "Raw Silk" },
      { label: "Embellishments", value: "Pearls, Sequins, Threads" },
      { label: "Work Hours", value: "120+ Hours of Handwork" },
      { label: "Occasions", value: "Weddings, Formal Events" }
    ],
    specialNotes: "This piece is part of our exclusive collection. Each suit is carefully crafted with premium materials and can be customized for size.",
    isNew: true,
    popularity: 98
  },
  {
    id: 5,
    name: "Zara Luxury Embellished Formal",
    designer: "Elan",
    category: "Formal",
    collection: "Evening Wear",
    price: 245,
    originalPrice: 340,
    discount: 28,
    images: productImages[5],
    colors: ["#8B008B", "#9370DB", "#BA55D3", "#DA70D6", "#EE82EE"],
    sizes: ["S", "M", "L"],
    description: "Luxurious sequined kaftan with flowing silhouette. Perfect for evening events and formal gatherings.",
    fabric: "Chiffon with Sequin Work",
    tags: ["Kaftan", "Evening", "Sequined", "Elegant"],
    specifications: [
      { label: "Style", value: "Kaftan" },
      { label: "Length", value: "52 Inches" },
      { label: "Fabric", value: "Pure Chiffon" },
      { label: "Embellishments", value: "All-Over Sequins" },
      { label: "Lining", value: "Pure Silk Lining" },
      { label: "Fit", value: "Relaxed Flowing" }
    ],
    isSale: true,
    popularity: 91
  },
  {
    id: 6,
    name: "Mehreen Silk Anarkali",
    designer: "Maria B",
    category: "Formal",
    collection: "Heritage Line",
    price: 295,
    originalPrice: 420,
    discount: 30,
    images: productImages[6],
    colors: ["#228B22", "#32CD32", "#90EE90", "#98FB98", "#00FF00"],
    sizes: ["S", "M", "L", "XL"],
    description: "Regal anarkali with traditional embroidery patterns. Handcrafted with attention to every detail.",
    fabric: "Velvet with Silk Lining",
    tags: ["Anarkali", "Traditional", "Velvet", "Handcrafted"],
    specifications: [
      { label: "Pieces", value: "3-Piece" },
      { label: "Shirt", value: "Embroidered Velvet Anarkali" },
      { label: "Length", value: "48 Inches" },
      { label: "Dupatta", value: "Net Embroidered" },
      { label: "Bottom", value: "Raw Silk Cigarette Pants" },
      { label: "Embroidery", value: "Zari, Dabka, Sequins" }
    ],
    popularity: 94
  },

  // Party Wear
  {
    id: 7,
    name: "Anum Festive Sharara",
    designer: "HR",
    category: "Party Wear",
    collection: "Festive Collection",
    price: 225,
    originalPrice: 310,
    discount: 27,
    images: productImages[7],
    colors: ["#FFB6C1", "#FF69B4", "#FF1493", "#C71585", "#DB7093"],
    sizes: ["S", "M", "L", "XL"],
    description: "Dazzling sharara set with contemporary cuts and traditional embellishments. Perfect for wedding season.",
    fabric: "Georgette with Raw Silk",
    tags: ["Sharara", "Party", "Festive", "Modern"],
    specifications: [
      { label: "Pieces", value: "3-Piece" },
      { label: "Top", value: "Embroidered Short Kurti" },
      { label: "Bottom", value: "Flared Sharara" },
      { label: "Dupatta", value: "Net with Embroidery" },
      { label: "Embroidery Type", value: "Thread and Sequin Work" },
      { label: "Perfect For", value: "Mehndi, Sangeet, Parties" }
    ],
    isNew: true,
    popularity: 89
  },
  {
    id: 8,
    name: "Sitara Embroidered Party Dress",
    designer: "Sana Safinaz",
    category: "Party Wear",
    collection: "Luxury Drapes",
    price: 315,
    originalPrice: 445,
    discount: 29,
    images: productImages[8],
    colors: ["#00008B", "#0000CD", "#4169E1", "#6495ED", "#87CEEB"],
    sizes: ["One Size"],
    description: "Handcrafted saree with exquisite embellishments. A timeless piece for special occasions.",
    fabric: "Chiffon with Silk Border",
    tags: ["Saree", "Embellished", "Luxury", "Traditional"],
    specifications: [
      { label: "Length", value: "6.5 Meters" },
      { label: "Blouse", value: "Included (Unstitched)" },
      { label: "Fabric", value: "Pure Chiffon" },
      { label: "Border", value: "Heavy Embroidered Silk" },
      { label: "Work", value: "Hand-embellished Throughout" },
      { label: "Draping Style", value: "Contemporary & Traditional" }
    ],
    specialNotes: "Comes with a matching embroidered blouse piece. Professional draping service available upon request.",
    popularity: 93
  },
  {
    id: 9,
    name: "Mahnoor Festive Gharara",
    designer: "Elan",
    category: "Party Wear",
    collection: "Bridal Party",
    price: 265,
    originalPrice: 375,
    discount: 29,
    images: productImages[9],
    colors: ["#FFE4B5", "#FFDEAD", "#FFE4C4", "#FAEBD7", "#FAF0E6"],
    sizes: ["S", "M", "L"],
    description: "Stunning gharara with crystal work and traditional cuts. A show-stopping ensemble for wedding festivities.",
    fabric: "Raw Silk with Net",
    tags: ["Gharara", "Crystal", "Bridal", "Wedding"],
    specifications: [
      { label: "Pieces", value: "3-Piece" },
      { label: "Kurti", value: "Short Embroidered" },
      { label: "Gharara", value: "Wide-Legged with Embroidery" },
      { label: "Dupatta", value: "Net with Heavy Border" },
      { label: "Embellishments", value: "Crystals, Sequins, Zari" },
      { label: "Occasions", value: "Walima, Receptions" }
    ],
    isSale: true,
    popularity: 90
  },

  // Winter Collection
  {
    id: 10,
    name: "Firdaus Velvet Winter Suit",
    designer: "Maria B",
    category: "Winter",
    collection: "Winter Luxe",
    price: 195,
    originalPrice: 275,
    discount: 29,
    images: productImages[10],
    colors: ["#8B4513", "#A0522D", "#D2691E", "#CD853F", "#DEB887"],
    sizes: ["S", "M", "L", "XL"],
    description: "Luxurious velvet suit with rich embroidery. Perfect for winter weddings and formal events.",
    fabric: "Premium Velvet",
    tags: ["Velvet", "Winter", "Luxury", "Embroidered"],
    specifications: [
      { label: "Pieces", value: "3-Piece" },
      { label: "Shirt", value: "Embroidered Velvet (2.5M)" },
      { label: "Dupatta", value: "Velvet with Embroidery" },
      { label: "Trouser", value: "Raw Silk (2.5M)" },
      { label: "Embroidery", value: "Front, Back, Sleeves" },
      { label: "Best For", value: "Winter Formals" }
    ],
    popularity: 87
  },
  {
    id: 11,
    name: "Pashmina Shawl Collection",
    designer: "Ethnc",
    category: "Accessories",
    collection: "Winter Essentials",
    price: 125,
    originalPrice: 175,
    discount: 29,
    images: productImages[11],
    colors: ["#F5DEB3", "#DDA0DD", "#B0C4DE"],
    sizes: ["One Size"],
    description: "Authentic pashmina shawls with intricate borders. A must-have for the cold season.",
    fabric: "Pure Pashmina Wool",
    tags: ["Pashmina", "Shawl", "Winter", "Accessory"],
    specifications: [
      { label: "Dimensions", value: "2.5M x 1M" },
      { label: "Material", value: "100% Pashmina" },
      { label: "Border", value: "Embroidered" },
      { label: "Weight", value: "Lightweight" },
      { label: "Care", value: "Dry Clean Only" },
      { label: "Origin", value: "Kashmir" }
    ],
    specialNotes: "Each shawl comes with authenticity certificate. Hand-woven by skilled artisans.",
    popularity: 85
  },
  {
    id: 12,
    name: "Wool Blend Kurti",
    designer: "Lulusar",
    category: "Winter",
    collection: "Casual Winter",
    price: 89,
    originalPrice: 125,
    discount: 29,
    images: productImages[12],
    colors: ["#8B4513", "#556B2F", "#800020"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Comfortable wool blend kurti with modern prints. Perfect for everyday winter wear.",
    fabric: "Wool Cotton Blend",
    tags: ["Kurti", "Wool", "Casual", "Winter"],
    specifications: [
      { label: "Length", value: "38 Inches" },
      { label: "Fabric", value: "60% Wool, 40% Cotton" },
      { label: "Style", value: "Straight Cut" },
      { label: "Sleeves", value: "Full Sleeves" },
      { label: "Print", value: "Digital Print" },
      { label: "Care", value: "Hand Wash Cold" }
    ],
    popularity: 80
  },

  // Additional Products
  {
    id: 13,
    name: "Chiffon Dreams Dupatta",
    designer: "Sana Safinaz",
    category: "Accessories",
    collection: "Dupattas",
    price: 65,
    originalPrice: 95,
    discount: 32,
    images: productImages[13],
    colors: ["#FFB6C1", "#E6E6FA", "#F0E68C"],
    sizes: ["One Size"],
    description: "Delicate chiffon dupatta with embroidered borders. A perfect finishing touch to any outfit.",
    fabric: "Pure Chiffon",
    tags: ["Dupatta", "Chiffon", "Embroidered", "Accessory"],
    specifications: [
      { label: "Length", value: "2.5 Meters" },
      { label: "Width", value: "1 Meter" },
      { label: "Border", value: "Embroidered on all sides" },
      { label: "Transparency", value: "Semi-Sheer" },
      { label: "Care", value: "Dry Clean Recommended" }
    ],
    popularity: 78
  },
  {
    id: 14,
    name: "Bridal Red Lehenga",
    designer: "Elan",
    category: "Bridal",
    collection: "Bridal Couture",
    price: 485,
    originalPrice: 695,
    discount: 30,
    images: productImages[14],
    colors: ["#DC143C", "#8B0000"],
    sizes: ["S", "M", "L"],
    description: "Majestic bridal lehenga with extensive handwork. A dream piece for your special day.",
    fabric: "Silk with Net",
    tags: ["Bridal", "Lehenga", "Red", "Luxury"],
    specifications: [
      { label: "Pieces", value: "3-Piece Bridal Set" },
      { label: "Lehenga", value: "Heavy Embroidered Silk" },
      { label: "Blouse", value: "Custom Fit with Heavy Work" },
      { label: "Dupatta", value: "Net with Embellishments" },
      { label: "Work Type", value: "Zardozi, Crystals, Pearls" },
      { label: "Work Hours", value: "200+ Hours" },
      { label: "Customization", value: "Available" }
    ],
    specialNotes: "This is a made-to-order piece. Requires 4-6 weeks for customization. Includes complimentary fitting sessions.",
    isNew: true,
    popularity: 99
  },
  {
    id: 15,
    name: "Mint Breeze Lawn Set",
    designer: "HR",
    category: "Lawn",
    collection: "Summer Essentials",
    price: 92,
    originalPrice: 130,
    discount: 29,
    images: productImages[15],
    colors: ["#98FF98", "#F0FFFF", "#FFFACD"],
    sizes: ["S", "M", "L", "XL"],
    description: "Refreshing mint lawn set with floral prints. Ideal for summer elegance.",
    fabric: "Lawn Cotton",
    tags: ["Lawn", "Summer", "Floral", "Mint"],
    specifications: [
      { label: "Pieces", value: "3-Piece Unstitched" },
      { label: "Shirt", value: "2.5M Printed Lawn" },
      { label: "Dupatta", value: "2.5M Chiffon" },
      { label: "Trouser", value: "2.5M Cotton" },
      { label: "Print Type", value: "Digital Floral" },
      { label: "Season", value: "Spring/Summer" }
    ],
    popularity: 83
  },
  {
    id: 16,
    name: "Pearl White Formal",
    designer: "Maria B",
    category: "Formal",
    collection: "Ivory Collection",
    price: 275,
    originalPrice: 385,
    discount: 29,
    images: productImages[16],
    colors: ["#FFFFF0", "#FFF8DC", "#F5F5DC"],
    sizes: ["S", "M", "L", "XL"],
    description: "Elegant white formal with pearl embellishments. Timeless sophistication.",
    fabric: "Silk with Organza",
    tags: ["White", "Formal", "Pearl", "Elegant"],
    specifications: [
      { label: "Pieces", value: "3-Piece" },
      { label: "Shirt", value: "Embroidered Silk" },
      { label: "Dupatta", value: "Organza with Pearls" },
      { label: "Trouser", value: "Silk" },
      { label: "Embellishments", value: "Pearls, Threads" },
      { label: "Occasions", value: "Formal Events, Nikkah" }
    ],
    popularity: 86
  },
  {
    id: 17,
    name: "Festive Embroidered Set",
    designer: "Lulusar",
    category: "Party Wear",
    collection: "Celebration",
    price: 185,
    originalPrice: 260,
    discount: 29,
    images: productImages[17],
    colors: ["#FF69B4", "#FFD700", "#00CED1"],
    sizes: ["S", "M", "L", "XL"],
    description: "Vibrant party wear with bold embroidery. Perfect for festive celebrations.",
    fabric: "Georgette",
    tags: ["Party", "Embroidered", "Festive", "Colorful"],
    specifications: [
      { label: "Pieces", value: "3-Piece" },
      { label: "Shirt", value: "Embroidered Georgette" },
      { label: "Dupatta", value: "Net" },
      { label: "Trouser", value: "Raw Silk" },
      { label: "Embroidery", value: "Front and Sleeves" },
      { label: "Best For", value: "Eid, Parties" }
    ],
    popularity: 84
  },
  {
    id: 18,
    name: "Emerald Velvet Suit",
    designer: "Sana Safinaz",
    category: "Winter",
    collection: "Jewel Tones",
    price: 210,
    originalPrice: 295,
    discount: 29,
    images: productImages[18],
    colors: ["#50C878", "#2E8B57", "#3CB371"],
    sizes: ["S", "M", "L", "XL"],
    description: "Rich emerald velvet with gold embroidery. A regal winter choice.",
    fabric: "Velvet",
    tags: ["Velvet", "Emerald", "Winter", "Luxury"],
    specifications: [
      { label: "Pieces", value: "3-Piece" },
      { label: "Shirt", value: "Velvet with Embroidery" },
      { label: "Dupatta", value: "Velvet" },
      { label: "Trouser", value: "Silk" },
      { label: "Embroidery", value: "Gold Thread Work" },
      { label: "Season", value: "Winter" }
    ],
    popularity: 88
  },
  {
    id: 19,
    name: "Navy Elegance Lawn",
    designer: "Ethnc",
    category: "Lawn",
    collection: "Summer Essentials",
    price: 88,
    originalPrice: 122,
    discount: 28,
    images: productImages[19],
    colors: ["#000080", "#4169E1", "#6495ED"],
    sizes: ["S", "M", "L", "XL"],
    description: "Classic navy lawn with contemporary prints. Sophisticated summer wear.",
    fabric: "Lawn Cotton",
    tags: ["Navy", "Lawn", "Classic", "Summer"],
    specifications: [
      { label: "Pieces", value: "3-Piece Unstitched" },
      { label: "Shirt", value: "2.5M Lawn" },
      { label: "Dupatta", value: "2.5M Chiffon" },
      { label: "Trouser", value: "2.5M" },
      { label: "Print", value: "Digital" },
      { label: "Embroidery", value: "Neckline" }
    ],
    popularity: 81
  },
  {
    id: 20,
    name: "Rose Gold Party Gown",
    designer: "Elan",
    category: "Party Wear",
    collection: "Evening Glamour",
    price: 295,
    originalPrice: 415,
    discount: 29,
    images: productImages[20],
    colors: ["#B76E79", "#E6C5C0", "#D4AF77"],
    sizes: ["S", "M", "L"],
    description: "Stunning rose gold gown with sequin work. Red carpet ready.",
    fabric: "Silk with Sequins",
    tags: ["Gown", "Rose Gold", "Party", "Glamour"],
    specifications: [
      { label: "Style", value: "Long Gown" },
      { label: "Length", value: "56 Inches" },
      { label: "Fabric", value: "Pure Silk" },
      { label: "Work", value: "All-Over Sequins" },
      { label: "Lining", value: "Silk" },
      { label: "Perfect For", value: "Galas, Receptions" }
    ],
    popularity: 92
  },
  {
    id: 21,
    name: "Magenta Magic Formal",
    designer: "HR",
    category: "Formal",
    collection: "Bold & Beautiful",
    price: 235,
    originalPrice: 330,
    discount: 29,
    images: productImages[21],
    colors: ["#FF00FF", "#C71585", "#DA70D6"],
    sizes: ["S", "M", "L", "XL"],
    description: "Bold magenta formal with intricate threadwork. Make a statement.",
    fabric: "Silk Organza",
    tags: ["Magenta", "Formal", "Bold", "Statement"],
    specifications: [
      { label: "Pieces", value: "3-Piece" },
      { label: "Shirt", value: "Embroidered Organza" },
      { label: "Dupatta", value: "Net with Border" },
      { label: "Trouser", value: "Raw Silk" },
      { label: "Embroidery", value: "Thread and Sequin" },
      { label: "Occasions", value: "Formal Events" }
    ],
    popularity: 87
  },
  {
    id: 22,
    name: "Winter Wool Shawl",
    designer: "Maria B",
    category: "Accessories",
    collection: "Winter Essentials",
    price: 95,
    originalPrice: 135,
    discount: 30,
    images: productImages[22],
    colors: ["#8B4513", "#A0522D", "#D2691E"],
    sizes: ["One Size"],
    description: "Warm wool shawl with traditional embroidery. Winter essential.",
    fabric: "Pure Wool",
    tags: ["Shawl", "Wool", "Winter", "Traditional"],
    specifications: [
      { label: "Dimensions", value: "2.5M x 1.2M" },
      { label: "Material", value: "100% Wool" },
      { label: "Border", value: "Embroidered" },
      { label: "Care", value: "Dry Clean" },
      { label: "Weight", value: "Medium" }
    ],
    popularity: 79
  },
  {
    id: 23,
    name: "Turquoise Dream Lawn",
    designer: "Lulusar",
    category: "Lawn",
    collection: "Summer Essentials",
    price: 87,
    originalPrice: 120,
    discount: 28,
    images: productImages[23],
    colors: ["#40E0D0", "#48D1CC", "#00CED1"],
    sizes: ["S", "M", "L", "XL"],
    description: "Refreshing turquoise lawn with floral motifs. Summer perfection.",
    fabric: "Lawn Cotton",
    tags: ["Turquoise", "Lawn", "Floral", "Summer"],
    specifications: [
      { label: "Pieces", value: "3-Piece Unstitched" },
      { label: "Shirt", value: "2.5M Printed Lawn" },
      { label: "Dupatta", value: "2.5M" },
      { label: "Trouser", value: "2.5M" },
      { label: "Print", value: "Floral Digital" },
      { label: "Embroidery", value: "Front Panel" }
    ],
    popularity: 82
  },
  {
    id: 24,
    name: "Black Velvet Formal",
    designer: "Sana Safinaz",
    category: "Winter",
    collection: "Classic Formals",
    price: 215,
    originalPrice: 305,
    discount: 30,
    images: productImages[24],
    colors: ["#000000", "#2F4F4F", "#36454F"],
    sizes: ["S", "M", "L", "XL"],
    description: "Timeless black velvet with silver embroidery. Elegant and sophisticated.",
    fabric: "Velvet",
    tags: ["Black", "Velvet", "Formal", "Classic"],
    specifications: [
      { label: "Pieces", value: "3-Piece" },
      { label: "Shirt", value: "Velvet with Silver Work" },
      { label: "Dupatta", value: "Velvet" },
      { label: "Trouser", value: "Silk" },
      { label: "Embroidery", value: "Silver Thread" },
      { label: "Best For", value: "Winter Formals" }
    ],
    popularity: 89
  },
  {
    id: 25,
    name: "Coral Party Sharara",
    designer: "Elan",
    category: "Party Wear",
    collection: "Festive Collection",
    price: 215,
    originalPrice: 300,
    discount: 28,
    images: productImages[25],
    colors: ["#FF7F50", "#FFA07A", "#FF6347"],
    sizes: ["S", "M", "L", "XL"],
    description: "Vibrant coral sharara with modern embroidery. Party perfect.",
    fabric: "Georgette",
    tags: ["Coral", "Sharara", "Party", "Modern"],
    specifications: [
      { label: "Pieces", value: "3-Piece" },
      { label: "Top", value: "Short Embroidered Kurti" },
      { label: "Bottom", value: "Flared Sharara" },
      { label: "Dupatta", value: "Net" },
      { label: "Work", value: "Thread and Sequin" },
      { label: "Perfect For", value: "Mehndi, Parties" }
    ],
    popularity: 85
  },
  {
    id: 26,
    name: "Peach Linen Set",
    designer: "Ethnc",
    category: "Lawn",
    collection: "Summer Essentials",
    price: 93,
    originalPrice: 130,
    discount: 28,
    images: productImages[26],
    colors: ["#FFDAB9", "#FFE5B4", "#FFEFD5"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Soft peach linen with delicate embroidery. Comfortable elegance.",
    fabric: "Linen",
    tags: ["Peach", "Linen", "Summer", "Comfortable"],
    specifications: [
      { label: "Pieces", value: "3-Piece Unstitched" },
      { label: "Shirt", value: "3M Linen" },
      { label: "Dupatta", value: "2.5M" },
      { label: "Trouser", value: "2.5M" },
      { label: "Embroidery", value: "Neckline and Sleeves" },
      { label: "Season", value: "Summer" }
    ],
    popularity: 80
  },
  {
    id: 27,
    name: "Maroon Bridal Set",
    designer: "Maria B",
    category: "Bridal",
    collection: "Bridal Couture",
    price: 495,
    originalPrice: 710,
    discount: 30,
    images: productImages[27],
    colors: ["#800000", "#8B0000", "#A52A2A"],
    sizes: ["S", "M", "L"],
    description: "Exquisite maroon bridal ensemble with heavy embellishments. A masterpiece.",
    fabric: "Silk with Velvet",
    tags: ["Maroon", "Bridal", "Heavy", "Luxury"],
    specifications: [
      { label: "Pieces", value: "3-Piece Bridal" },
      { label: "Shirt", value: "Embroidered Silk" },
      { label: "Lehnga/Sharara", value: "Heavy Work" },
      { label: "Dupatta", value: "Net with Embellishments" },
      { label: "Work", value: "Zardozi, Crystals, Pearls" },
      { label: "Work Hours", value: "250+ Hours" },
      { label: "Customization", value: "Full Customization Available" }
    ],
    specialNotes: "Made-to-order bridal piece. Requires 6-8 weeks. Includes complimentary jewelry consultation and fitting sessions.",
    isNew: true,
    popularity: 98
  },
  {
    id: 28,
    name: "Ivory Formal Gown",
    designer: "HR",
    category: "Formal",
    collection: "Evening Collection",
    price: 255,
    originalPrice: 360,
    discount: 29,
    images: productImages[28],
    colors: ["#FFFFF0", "#FFF8DC", "#FAF0E6"],
    sizes: ["S", "M", "L"],
    description: "Graceful ivory gown with subtle embellishments. Timeless beauty.",
    fabric: "Silk Chiffon",
    tags: ["Ivory", "Gown", "Formal", "Elegant"],
    specifications: [
      { label: "Style", value: "Full Length Gown" },
      { label: "Length", value: "58 Inches" },
      { label: "Fabric", value: "Silk Chiffon" },
      { label: "Work", value: "Pearl and Thread" },
      { label: "Lining", value: "Silk" },
      { label: "Occasions", value: "Formal Events" }
    ],
    popularity: 86
  },
  {
    id: 29,
    name: "Purple Lawn Print",
    designer: "Lulusar",
    category: "Lawn",
    collection: "Summer Essentials",
    price: 85,
    originalPrice: 118,
    discount: 28,
    images: productImages[29],
    colors: ["#9370DB", "#8A2BE2", "#9932CC"],
    sizes: ["S", "M", "L", "XL"],
    description: "Vibrant purple lawn with modern prints. Fresh and stylish.",
    fabric: "Lawn Cotton",
    tags: ["Purple", "Lawn", "Print", "Stylish"],
    specifications: [
      { label: "Pieces", value: "3-Piece Unstitched" },
      { label: "Shirt", value: "2.5M Lawn" },
      { label: "Dupatta", value: "2.5M" },
      { label: "Trouser", value: "2.5M" },
      { label: "Print Type", value: "Digital Print" },
      { label: "Embroidery", value: "Minimal" }
    ],
    popularity: 79
  },
  {
    id: 30,
    name: "Gold Velvet Cape Set",
    designer: "Sana Safinaz",
    category: "Winter",
    collection: "Luxury Winter",
    price: 325,
    originalPrice: 465,
    discount: 30,
    images: productImages[30],
    colors: ["#FFD700", "#DAA520", "#B8860B"],
    sizes: ["S", "M", "L"],
    description: "Opulent gold velvet with cape style. Ultimate luxury statement.",
    fabric: "Velvet with Silk",
    tags: ["Gold", "Velvet", "Cape", "Luxury"],
    specifications: [
      { label: "Pieces", value: "3-Piece with Cape" },
      { label: "Shirt", value: "Embroidered Velvet" },
      { label: "Cape", value: "Velvet with Embellishments" },
      { label: "Trouser", value: "Silk" },
      { label: "Work", value: "Zari, Sequins, Crystals" },
      { label: "Occasions", value: "Premium Formal Events" }
    ],
    specialNotes: "This is a limited edition piece. Cape can be detached for versatile styling.",
    isNew: true,
    popularity: 96
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductsByCollection = (collection: string): Product[] => {
  return products.filter(product => product.collection === collection);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.popularity >= 90).slice(0, 8);
};
