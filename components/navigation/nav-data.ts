export type AudienceTab = {
  label: string;
  value: "women" | "men" | "kids" | "life";
};

export type CategoryTab = {
  label: string;
  href: string;
};

export type UtilityLink = {
  label: string;
  href: string;
};

export const utilityLinks: UtilityLink[] = [
  { label: "Invite a friend", href: "#invite-a-friend" },
  { label: "Articles", href: "#articles" },
  { label: "About Us", href: "#about-us" },
  { label: "Help", href: "#help" },
  { label: "Login", href: "/auth/login" },
];

export const localeSelectors = ["Greece", "€ Euro", "English"] as const;

export const audienceTabs: AudienceTab[] = [
  { label: "Women", value: "women" },
  { label: "Men", value: "men" },
  { label: "Kids", value: "kids" },
  { label: "Life", value: "life" },
];

export const categoryTabs: CategoryTab[] = [
  { label: "New Arrivals", href: "/tabs/latestArrival" },
  { label: "Brands", href: "/tabs/brands" },
  { label: "Clothing", href: "/tabs/clothing" },
  { label: "Shoes", href: "/tabs/shoes" },
  { label: "Bags", href: "/tabs/bags" },
  { label: "Sunglasses", href: "/tabs/sunglasses" },
  { label: "Accessories", href: "/tabs/accessories" },
  { label: "Watches", href: "/tabs/watches" },
  { label: "Pre-Loved", href: "/tabs/pre-loved" },
  { label: "Flash Sales", href: "/auth/verification" },
];
