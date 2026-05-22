import type { CatalogProduct } from "./catalog-data";

export type AudienceKey = "women" | "men" | "kids" | "life";

export type AudienceCatalog = {
  title: string;
  subtitle: string;
  sortLabel: string;
  products: CatalogProduct[];
};

export const audienceCatalogs: Record<AudienceKey, AudienceCatalog> = {
  women: {
    title: "Women",
    subtitle: "Curated essentials, statement pieces, and everyday luxury for her.",
    sortLabel: "Sort By",
    products: [
      {
        id: 1,
        brand: "Max Mara",
        name: "Camel Wool Blend Coat",
        originalPrice: 890,
        discount: 22,
        currentPrice: 694.2,
        image:
          "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 2,
        brand: "A.P.C.",
        name: "Leather Crossbody Bag",
        originalPrice: 420,
        discount: 18,
        currentPrice: 344.4,
        image:
          "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 3,
        brand: "Jimmy Choo",
        name: "Black Suede Pumps",
        originalPrice: 650,
        discount: 30,
        currentPrice: 455,
        image:
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  men: {
    title: "Men",
    subtitle: "Modern tailoring, clean sneakers, and polished everyday basics.",
    sortLabel: "Sort By",
    products: [
      {
        id: 1,
        brand: "Tom Ford",
        name: "Slim Fit Navy Shirt",
        originalPrice: 260,
        discount: 25,
        currentPrice: 195,
        image:
          "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 2,
        brand: "Common Projects",
        name: "White Leather Sneakers",
        originalPrice: 410,
        discount: 15,
        currentPrice: 348.5,
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 3,
        brand: "Gucci",
        name: "Silver Dial Wrist Watch",
        originalPrice: 1350,
        discount: 20,
        currentPrice: 1080,
        image:
          "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  kids: {
    title: "Kids",
    subtitle: "Play-ready looks and practical picks for every little adventure.",
    sortLabel: "Sort By",
    products: [
      {
        id: 1,
        brand: "Mini Rodini",
        name: "Organic Cotton Hoodie",
        originalPrice: 85,
        discount: 10,
        currentPrice: 76.5,
        image:
          "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 2,
        brand: "Nike Kids",
        name: "Velcro Run Sneakers",
        originalPrice: 68,
        discount: 15,
        currentPrice: 57.8,
        image:
          "https://images.unsplash.com/photo-1516728778615-2d590ea1856f?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 3,
        brand: "Fendi Kids",
        name: "Logo Backpack",
        originalPrice: 210,
        discount: 20,
        currentPrice: 168,
        image:
          "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  life: {
    title: "Life",
    subtitle: "Travel, home, and gifting pieces that round out the lifestyle edit.",
    sortLabel: "Sort By",
    products: [
      {
        id: 1,
        brand: "Rimowa",
        name: "Trunk Cabin Case",
        originalPrice: 1250,
        discount: 12,
        currentPrice: 1100,
        image:
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 2,
        brand: "Diptyque",
        name: "Home Fragrance Set",
        originalPrice: 140,
        discount: 8,
        currentPrice: 128.8,
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 3,
        brand: "Moleskine",
        name: "Hardcover Travel Journal",
        originalPrice: 35,
        discount: 5,
        currentPrice: 33.25,
        image:
          "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
};
