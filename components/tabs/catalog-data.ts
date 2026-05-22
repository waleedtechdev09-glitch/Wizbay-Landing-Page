export type CatalogProduct = {
  id: number;
  brand: string;
  name: string;
  originalPrice: number;
  discount: number;
  currentPrice: number;
  image: string;
  condition?: string;
};

export type CatalogTabKey =
  | "latestArrival"
  | "brands"
  | "clothing"
  | "shoes"
  | "bags"
  | "sunglasses"
  | "accessories"
  | "watches"
  | "jwelery"
  | "pre-loved";

type ProductTabConfig = {
  kind: "products";
  title: string;
  sortLabel: string;
  showSidebar: boolean;
  showSortBar: boolean;
  products: CatalogProduct[];
};

type BrandsTabConfig = {
  kind: "brands";
  title: string;
};

export type CatalogTabConfig = ProductTabConfig | BrandsTabConfig;

export const catalogTabs: Record<CatalogTabKey, CatalogTabConfig> = {
  latestArrival: {
    kind: "products",
    title: "New Arrivals",
    sortLabel: "New Arrivals",
    showSidebar: true,
    showSortBar: true,
    products: [
      {
        id: 1,
        brand: "Burberry",
        name: "Beige Silk Scarf",
        originalPrice: 548.08,
        discount: 33,
        currentPrice: 368.28,
        image:
          "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 2,
        brand: "Antony Morato",
        name: "Gray Suede Leather Chelsea Boots",
        originalPrice: 168.64,
        discount: 75,
        currentPrice: 42.28,
        image:
          "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 3,
        brand: "Gucci",
        name: "Silver Stainless Steel Dress Watch",
        originalPrice: 1264.8,
        discount: 44,
        currentPrice: 705.19,
        image:
          "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  brands: {
    kind: "brands",
    title: "Brands",
  },
  clothing: {
    kind: "products",
    title: "Clothing",
    sortLabel: "Sort By",
    showSidebar: true,
    showSortBar: true,
    products: [
      {
        id: 1,
        brand: "U.S. Grand",
        name: "Blue Polyester Men Sweatshirt",
        originalPrice: 113.83,
        discount: 82,
        currentPrice: 20.46,
        image:
          "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 2,
        brand: "U.S. Grand",
        name: "Black Polyester Men Sweatshirt",
        originalPrice: 113.83,
        discount: 82,
        currentPrice: 20.46,
        image:
          "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 3,
        brand: "U.S. Grand",
        name: "Black Cotton Men Sweatshirt",
        originalPrice: 113.83,
        discount: 82,
        currentPrice: 20.46,
        image:
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  shoes: {
    kind: "products",
    title: "Shoes",
    sortLabel: "Sort By",
    showSidebar: true,
    showSortBar: true,
    products: [
      {
        id: 1,
        brand: "Calvin Klein",
        name: "Bianco Polyurethane Men Sneaker",
        originalPrice: 160.21,
        discount: 60,
        currentPrice: 64.11,
        image:
          "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 2,
        brand: "Cerruti 1881",
        name: "Black Cowhide Men Sandal",
        originalPrice: 235.04,
        discount: 74,
        currentPrice: 61.38,
        image:
          "https://images.unsplash.com/photo-1546515479-c8e8637874fb?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 3,
        brand: "Cerruti 1881",
        name: "Black Leather Men Sandal",
        originalPrice: 235.04,
        discount: 74,
        currentPrice: 61.38,
        image:
          "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  bags: {
    kind: "products",
    title: "Bags",
    sortLabel: "Sort By",
    showSidebar: true,
    showSortBar: true,
    products: [
      {
        id: 1,
        brand: "Tommy Hilfiger",
        name: "Black Canvas Crossbody Pouch Bag",
        originalPrice: 89.9,
        discount: 35,
        currentPrice: 58.43,
        image:
          "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 2,
        brand: "Calvin Klein",
        name: "Minimalist Black Structured Shoulder Bag",
        originalPrice: 110.0,
        discount: 40,
        currentPrice: 66.0,
        image:
          "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 3,
        brand: "Tommy Hilfiger",
        name: "Corporate Statement Logo Utility Bag",
        originalPrice: 95.0,
        discount: 25,
        currentPrice: 71.25,
        image:
          "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  sunglasses: {
    kind: "products",
    title: "Sunglasses",
    sortLabel: "Sort By",
    showSidebar: true,
    showSortBar: true,
    products: [
      {
        id: 1,
        brand: "Ray-Ban",
        name: "Classic Black Aviator Sunglasses",
        originalPrice: 165.0,
        discount: 20,
        currentPrice: 132.0,
        image:
          "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 2,
        brand: "Tom Ford",
        name: "Dark Tortoise Shell Square Sunglasses",
        originalPrice: 395.0,
        discount: 45,
        currentPrice: 217.25,
        image:
          "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 3,
        brand: "Oakley",
        name: "Matte Black Holbrook Sport Sunglasses",
        originalPrice: 142.0,
        discount: 15,
        currentPrice: 120.7,
        image:
          "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  accessories: {
    kind: "products",
    title: "Accessories",
    sortLabel: "Sort By",
    showSidebar: true,
    showSortBar: true,
    products: [
      {
        id: 1,
        brand: "Montblanc",
        name: "Sartorial Leather Business Card Holder",
        originalPrice: 195.0,
        discount: 25,
        currentPrice: 146.25,
        image:
          "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 2,
        brand: "Gucci",
        name: "Signature Web Detail Canvas Belt",
        originalPrice: 360.0,
        discount: 30,
        currentPrice: 252.0,
        image:
          "https://images.unsplash.com/photo-1624222247344-550fb8ef555d?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 3,
        brand: "Bottega Veneta",
        name: "Intrecciato Nappa Leather Key Ring",
        originalPrice: 280.0,
        discount: 15,
        currentPrice: 238.0,
        image:
          "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  watches: {
    kind: "products",
    title: "Watches",
    sortLabel: "Sort By",
    showSidebar: true,
    showSortBar: true,
    products: [
      {
        id: 1,
        brand: "Gucci",
        name: "Silver Stainless Steel Dress Watch",
        originalPrice: 1264.8,
        discount: 44,
        currentPrice: 705.19,
        image:
          "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 2,
        brand: "Seiko",
        name: "Prospex Automatic Diver Matte Dial Watch",
        originalPrice: 525.0,
        discount: 20,
        currentPrice: 420.0,
        image:
          "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 3,
        brand: "Tissot",
        name: "Le Locle Powermatic 80 Rose Gold Case",
        originalPrice: 675.0,
        discount: 15,
        currentPrice: 573.75,
        image:
          "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  jwelery: {
    kind: "products",
    title: "Jewelry",
    sortLabel: "Sort By",
    showSidebar: true,
    showSortBar: true,
    products: [
      {
        id: 1,
        brand: "Cartier",
        name: "Gold Plated Love Bracelet",
        originalPrice: 2890.0,
        discount: 12,
        currentPrice: 2543.2,
        image:
          "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 2,
        brand: "Tiffany & Co.",
        name: "Sterling Silver Pendant Necklace",
        originalPrice: 460.0,
        discount: 18,
        currentPrice: 377.2,
        image:
          "https://images.unsplash.com/photo-1617038220318-2a3f9a6f1d66?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 3,
        brand: "Bvlgari",
        name: "Serpenti Statement Ring",
        originalPrice: 860.0,
        discount: 20,
        currentPrice: 688.0,
        image:
          "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  "pre-loved": {
    kind: "products",
    title: "Pre-Loved",
    sortLabel: "Sort By",
    showSidebar: true,
    showSortBar: true,
    products: [
      {
        id: 1,
        brand: "Chanel Pre-Owned",
        name: "1995 Vintage Black Quilted Double Flap Bag",
        originalPrice: 8400.0,
        discount: 25,
        currentPrice: 6300.0,
        image:
          "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80",
        condition: "Excellent Vintage",
      },
      {
        id: 2,
        brand: "Louis Vuitton Pre-Owned",
        name: "Monogram Canvas Keepall Bandoulière 50",
        originalPrice: 2200.0,
        discount: 30,
        currentPrice: 1540.0,
        image:
          "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=600&q=80",
        condition: "Gently Used",
      },
      {
        id: 3,
        brand: "Hermès Pre-Owned",
        name: "Classic H-Belts Epsom Gold Leather Strap",
        originalPrice: 875.0,
        discount: 15,
        currentPrice: 743.75,
        image:
          "https://images.unsplash.com/photo-1624222247344-550fb8ef555d?auto=format&fit=crop&w=600&q=80",
        condition: "Pristine Condition",
      },
    ],
  },
};
