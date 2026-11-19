export type CollectionId = "him" | "her";
export type HimJewelryType = "Rings" | "Chains" | "Bracelets" | "Studs";
export type HerJewelryType = "Rings" | "Earrings" | "Bracelets" | "Anklets" | "Pendants" | "Sets";
export type JewelryType = HimJewelryType | HerJewelryType;

type ProductDetails = {
  id: string;
  name: string;
  design?: string;
  material?: string;
  stoneType?: string;
  availability?: "in_stock" | "out_of_stock";
  sourceCategory: string;
  price: number | null;
  image: string;
};

export type StoreProduct =
  | (ProductDetails & { collection: "him"; category: HimJewelryType })
  | (ProductDetails & { collection: "her"; category: HerJewelryType });

export const collectionOptions = [
  { id: "him", label: "Gifts for Him", categories: ["Rings", "Chains", "Bracelets", "Studs"] },
  { id: "her", label: "Gifts for Her", categories: ["Rings", "Earrings", "Bracelets", "Anklets", "Pendants", "Sets"] },
] as const;

// Prices and photos are retained for existing listings; photo-only items need pricing review.
export const storeProducts: StoreProduct[] = [
  {
    "id": "cz_bali_earrings-01",
    "name": "CZ Bali Earrings 01",
    "collection": "her",
    "category": "Earrings",
    "design": "CZ Bali",
    "stoneType": "CZ",
    "sourceCategory": "CZ Bali Earrings",
    "price": 1599,
    "image": "/products/cz_bali_earrings_01_giftora.png"
  },
  {
    "id": "cz_bali_earrings-02",
    "name": "CZ Bali Earrings 02",
    "collection": "her",
    "category": "Earrings",
    "design": "CZ Bali",
    "stoneType": "CZ",
    "sourceCategory": "CZ Bali Earrings",
    "price": 1699,
    "image": "/products/cz_bali_earrings_02_giftora.png"
  },
  {
    "id": "cz_bali_earrings-03",
    "name": "CZ Bali Earrings 03",
    "collection": "her",
    "category": "Earrings",
    "design": "CZ Bali",
    "stoneType": "CZ",
    "sourceCategory": "CZ Bali Earrings",
    "price": 1799,
    "image": "/products/cz_bali_earrings_03_giftora.png"
  },
  {
    "id": "cz_bali_earrings-04",
    "name": "CZ Bali Earrings 04",
    "collection": "her",
    "category": "Earrings",
    "design": "CZ Bali",
    "stoneType": "CZ",
    "sourceCategory": "CZ Bali Earrings",
    "price": 1899,
    "image": "/products/cz_bali_earrings_04_giftora.png"
  },
  {
    "id": "cz_bali_earrings-05",
    "name": "CZ Bali Earrings 05",
    "collection": "her",
    "category": "Earrings",
    "design": "CZ Bali",
    "stoneType": "CZ",
    "sourceCategory": "CZ Bali Earrings",
    "price": 1999,
    "image": "/products/cz_bali_earrings_05_giftora.png"
  },
  {
    "id": "cz_bali_earrings-06",
    "name": "CZ Bali Earrings 06",
    "collection": "her",
    "category": "Earrings",
    "design": "CZ Bali",
    "stoneType": "CZ",
    "sourceCategory": "CZ Bali Earrings",
    "price": 1599,
    "image": "/products/cz_bali_earrings_06_giftora.png"
  },
  {
    "id": "cz_bali_earrings-07",
    "name": "CZ Bali Earrings 07",
    "collection": "her",
    "category": "Earrings",
    "design": "CZ Bali",
    "stoneType": "CZ",
    "sourceCategory": "CZ Bali Earrings",
    "price": 1699,
    "image": "/products/cz_bali_earrings_07_giftora.png"
  },
  {
    "id": "cz_bali_earrings-08",
    "name": "CZ Bali Earrings 08",
    "collection": "her",
    "category": "Earrings",
    "design": "CZ Bali",
    "stoneType": "CZ",
    "sourceCategory": "CZ Bali Earrings",
    "price": 1799,
    "image": "/products/cz_bali_earrings_08_giftora.png"
  },
  {
    "id": "cz_bali_earrings-09",
    "name": "CZ Bali Earrings 09",
    "collection": "her",
    "category": "Earrings",
    "design": "CZ Bali",
    "stoneType": "CZ",
    "sourceCategory": "CZ Bali Earrings",
    "price": 1899,
    "image": "/products/cz_bali_earrings_09_giftora.png"
  },
  {
    "id": "cz_bali_earrings-10",
    "name": "CZ Bali Earrings 10",
    "collection": "her",
    "category": "Earrings",
    "design": "CZ Bali",
    "stoneType": "CZ",
    "sourceCategory": "CZ Bali Earrings",
    "price": 1999,
    "image": "/products/cz_bali_earrings_10_giftora.png"
  },
  {
    "id": "italian_plain_anklets-01",
    "name": "Italian Plain Anklets 01",
    "collection": "her",
    "category": "Anklets",
    "design": "Italian Plain",
    "sourceCategory": "Italian Plain Anklets",
    "price": 1599,
    "image": "/products/italian_plain_anklets_01_giftora.png"
  },
  {
    "id": "italian_plain_anklets-02",
    "name": "Italian Plain Anklets 02",
    "collection": "her",
    "category": "Anklets",
    "design": "Italian Plain",
    "sourceCategory": "Italian Plain Anklets",
    "price": 1699,
    "image": "/products/italian_plain_anklets_02_giftora.png"
  },
  {
    "id": "italian_plain_anklets-03",
    "name": "Italian Plain Anklets 03",
    "collection": "her",
    "category": "Anklets",
    "design": "Italian Plain",
    "sourceCategory": "Italian Plain Anklets",
    "price": 1799,
    "image": "/products/italian_plain_anklets_03_giftora.png"
  },
  {
    "id": "italian_plain_anklets-04",
    "name": "Italian Plain Anklets 04",
    "collection": "her",
    "category": "Anklets",
    "design": "Italian Plain",
    "sourceCategory": "Italian Plain Anklets",
    "price": 1899,
    "image": "/products/italian_plain_anklets_04_giftora.png"
  },
  {
    "id": "italian_plain_anklets-05",
    "name": "Italian Plain Anklets 05",
    "collection": "her",
    "category": "Anklets",
    "design": "Italian Plain",
    "sourceCategory": "Italian Plain Anklets",
    "price": 1999,
    "image": "/products/italian_plain_anklets_05_giftora.png"
  },
  {
    "id": "mens_ex_solitaire_rings-01",
    "name": "Men’s Solitaire Rings 01",
    "collection": "him",
    "category": "Rings",
    "design": "Solitaire",
    "sourceCategory": "Men’s Solitaire Rings",
    "price": 1599,
    "image": "/products/mens_ex_solitaire_rings_01_giftora.png"
  },
  {
    "id": "mens_ex_solitaire_rings-02",
    "name": "Men’s Solitaire Rings 02",
    "collection": "him",
    "category": "Rings",
    "design": "Solitaire",
    "sourceCategory": "Men’s Solitaire Rings",
    "price": 1699,
    "image": "/products/mens_ex_solitaire_rings_02_giftora.png"
  },
  {
    "id": "mens_ex_solitaire_rings-03",
    "name": "Men’s Solitaire Rings 03",
    "collection": "him",
    "category": "Rings",
    "design": "Solitaire",
    "sourceCategory": "Men’s Solitaire Rings",
    "price": 1799,
    "image": "/products/mens_ex_solitaire_rings_03_giftora.png"
  },
  {
    "id": "mens_ex_solitaire_rings-04",
    "name": "Men’s Solitaire Rings 04",
    "collection": "him",
    "category": "Rings",
    "design": "Solitaire",
    "sourceCategory": "Men’s Solitaire Rings",
    "price": 1899,
    "image": "/products/mens_ex_solitaire_rings_04_giftora.png"
  },
  {
    "id": "mens_ex_solitaire_rings-05",
    "name": "Men’s Solitaire Rings 05",
    "collection": "him",
    "category": "Rings",
    "design": "Solitaire",
    "sourceCategory": "Men’s Solitaire Rings",
    "price": 1999,
    "image": "/products/mens_ex_solitaire_rings_05_giftora.png"
  },
  {
    "id": "mens_ex_solitaire_rings-06",
    "name": "Men’s Solitaire Rings 06",
    "collection": "him",
    "category": "Rings",
    "design": "Solitaire",
    "sourceCategory": "Men’s Solitaire Rings",
    "price": 1599,
    "image": "/products/mens_ex_solitaire_rings_06_giftora.png"
  },
  {
    "id": "mens_ex_solitaire_rings-07",
    "name": "Men’s Solitaire Rings 07",
    "collection": "him",
    "category": "Rings",
    "design": "Solitaire",
    "sourceCategory": "Men’s Solitaire Rings",
    "price": 1699,
    "image": "/products/mens_ex_solitaire_rings_07_giftora.png"
  },
  {
    "id": "mens_ex_solitaire_rings-08",
    "name": "Men’s Solitaire Rings 08",
    "collection": "him",
    "category": "Rings",
    "design": "Solitaire",
    "sourceCategory": "Men’s Solitaire Rings",
    "price": 1799,
    "image": "/products/mens_ex_solitaire_rings_08_giftora.png"
  },
  {
    "id": "mens_ex_solitaire_rings-09",
    "name": "Men’s Solitaire Rings 09",
    "collection": "him",
    "category": "Rings",
    "design": "Solitaire",
    "sourceCategory": "Men’s Solitaire Rings",
    "price": 1899,
    "image": "/products/mens_ex_solitaire_rings_09_giftora.png"
  },
  {
    "id": "mens_ex_solitaire_rings-10",
    "name": "Men’s Solitaire Rings 10",
    "collection": "him",
    "category": "Rings",
    "design": "Solitaire",
    "sourceCategory": "Men’s Solitaire Rings",
    "price": 1999,
    "image": "/products/mens_ex_solitaire_rings_10_giftora.png"
  },
  {
    "id": "mens_pressure_setting_rings-01",
    "name": "Men’s Pressure Setting Rings 01",
    "collection": "him",
    "category": "Rings",
    "design": "Pressure Setting",
    "sourceCategory": "Men’s Pressure Setting Rings",
    "price": 1599,
    "image": "/products/mens_pressure_setting_rings_01_giftora.png"
  },
  {
    "id": "mens_pressure_setting_rings-02",
    "name": "Men’s Pressure Setting Rings 02",
    "collection": "him",
    "category": "Rings",
    "design": "Pressure Setting",
    "sourceCategory": "Men’s Pressure Setting Rings",
    "price": 1699,
    "image": "/products/mens_pressure_setting_rings_02_giftora.png"
  },
  {
    "id": "mens_pressure_setting_rings-03",
    "name": "Men’s Pressure Setting Rings 03",
    "collection": "him",
    "category": "Rings",
    "design": "Pressure Setting",
    "sourceCategory": "Men’s Pressure Setting Rings",
    "price": 1799,
    "image": "/products/mens_pressure_setting_rings_03_giftora.png"
  },
  {
    "id": "mens_pressure_setting_rings-04",
    "name": "Men’s Pressure Setting Rings 04",
    "collection": "him",
    "category": "Rings",
    "design": "Pressure Setting",
    "sourceCategory": "Men’s Pressure Setting Rings",
    "price": 1899,
    "image": "/products/mens_pressure_setting_rings_04_giftora.png"
  },
  {
    "id": "mens_pressure_setting_rings-05",
    "name": "Men’s Pressure Setting Rings 05",
    "collection": "him",
    "category": "Rings",
    "design": "Pressure Setting",
    "sourceCategory": "Men’s Pressure Setting Rings",
    "price": 1999,
    "image": "/products/mens_pressure_setting_rings_05_giftora.png"
  },
  {
    "id": "mens_pressure_setting_rings-06",
    "name": "Men’s Pressure Setting Rings 06",
    "collection": "him",
    "category": "Rings",
    "design": "Pressure Setting",
    "sourceCategory": "Men’s Pressure Setting Rings",
    "price": 1599,
    "image": "/products/mens_pressure_setting_rings_06_giftora.png"
  },
  {
    "id": "mens_pressure_setting_rings-07",
    "name": "Men’s Pressure Setting Rings 07",
    "collection": "him",
    "category": "Rings",
    "design": "Pressure Setting",
    "sourceCategory": "Men’s Pressure Setting Rings",
    "price": 1699,
    "image": "/products/mens_pressure_setting_rings_07_giftora.png"
  },
  {
    "id": "mens_pressure_setting_rings-08",
    "name": "Men’s Pressure Setting Rings 08",
    "collection": "him",
    "category": "Rings",
    "design": "Pressure Setting",
    "sourceCategory": "Men’s Pressure Setting Rings",
    "price": 1799,
    "image": "/products/mens_pressure_setting_rings_08_giftora.png"
  },
  {
    "id": "mens_pressure_setting_rings-09",
    "name": "Men’s Pressure Setting Rings 09",
    "collection": "him",
    "category": "Rings",
    "design": "Pressure Setting",
    "sourceCategory": "Men’s Pressure Setting Rings",
    "price": 1899,
    "image": "/products/mens_pressure_setting_rings_09_giftora.png"
  },
  {
    "id": "womens_diamond_rings-01",
    "name": "Women’s Diamond Rings 01",
    "collection": "her",
    "category": "Rings",
    "design": "Diamond",
    "stoneType": "Diamond",
    "sourceCategory": "Women’s Diamond Rings",
    "price": 1999,
    "image": "/products/womens_diamond_rings_01_giftora.png"
  },
  {
    "id": "womens_diamond_rings-02",
    "name": "Women’s Diamond Rings 02",
    "collection": "her",
    "category": "Rings",
    "design": "Diamond",
    "stoneType": "Diamond",
    "sourceCategory": "Women’s Diamond Rings",
    "price": 1599,
    "image": "/products/womens_diamond_rings_02_giftora.png"
  },
  {
    "id": "womens_diamond_rings-03",
    "name": "Women’s Diamond Rings 03",
    "collection": "her",
    "category": "Rings",
    "design": "Diamond",
    "stoneType": "Diamond",
    "sourceCategory": "Women’s Diamond Rings",
    "price": 1699,
    "image": "/products/womens_diamond_rings_03_giftora.png"
  },
  {
    "id": "womens_diamond_rings-04",
    "name": "Women’s Diamond Rings 04",
    "collection": "her",
    "category": "Rings",
    "design": "Diamond",
    "stoneType": "Diamond",
    "sourceCategory": "Women’s Diamond Rings",
    "price": 1799,
    "image": "/products/womens_diamond_rings_04_giftora.png"
  },
  {
    "id": "womens_diamond_rings-05",
    "name": "Women’s Diamond Rings 05",
    "collection": "her",
    "category": "Rings",
    "design": "Diamond",
    "stoneType": "Diamond",
    "sourceCategory": "Women’s Diamond Rings",
    "price": 1899,
    "image": "/products/womens_diamond_rings_05_giftora.png"
  },
  {
    "id": "womens_diamond_rings-06",
    "name": "Women’s Diamond Rings 06",
    "collection": "her",
    "category": "Rings",
    "design": "Diamond",
    "stoneType": "Diamond",
    "sourceCategory": "Women’s Diamond Rings",
    "price": 1999,
    "image": "/products/womens_diamond_rings_06_giftora.png"
  },
  {
    "id": "womens_diamond_rings-07",
    "name": "Women’s Diamond Rings 07",
    "collection": "her",
    "category": "Rings",
    "design": "Diamond",
    "stoneType": "Diamond",
    "sourceCategory": "Women’s Diamond Rings",
    "price": 1599,
    "image": "/products/womens_diamond_rings_07_giftora.png"
  },
  {
    "id": "womens_diamond_rings-08",
    "name": "Women’s Diamond Rings 08",
    "collection": "her",
    "category": "Rings",
    "design": "Diamond",
    "stoneType": "Diamond",
    "sourceCategory": "Women’s Diamond Rings",
    "price": 1699,
    "image": "/products/womens_diamond_rings_08_giftora.png"
  },
  {
    "id": "womens_diamond_rings-09",
    "name": "Women’s Diamond Rings 09",
    "collection": "her",
    "category": "Rings",
    "design": "Diamond",
    "stoneType": "Diamond",
    "sourceCategory": "Women’s Diamond Rings",
    "price": 1799,
    "image": "/products/womens_diamond_rings_09_giftora.png"
  },
  {
    "id": "womens_diamond_rings-10",
    "name": "Women’s Diamond Rings 10",
    "collection": "her",
    "category": "Rings",
    "design": "Diamond",
    "stoneType": "Diamond",
    "sourceCategory": "Women’s Diamond Rings",
    "price": 1899,
    "image": "/products/womens_diamond_rings_10_giftora.png"
  }
];

export type PlaceholderListing = {
  id: string;
  name: string;
  collection: CollectionId;
  category: JewelryType;
  design?: undefined;
  material?: undefined;
  stoneType?: undefined;
  availability?: undefined;
  price: null;
  image: string;
  isPlaceholder: true;
};

const categoryTitles: Record<JewelryType, string> = {
  Rings: "Ring",
  Chains: "Chain",
  Bracelets: "Bracelet",
  Studs: "Stud",
  Earrings: "Earring",
  Anklets: "Anklet",
  Pendants: "Pendant",
  Sets: "Set",
};

export const placeholderListings: PlaceholderListing[] = collectionOptions.flatMap((collection) =>
  collection.categories.flatMap((category) => {
    const categoryProducts = storeProducts.filter(
      (product) => product.collection === collection.id && product.category === category,
    );
    const countNeeded = Math.max(0, 10 - categoryProducts.length);
    const jewelryType = category as JewelryType;
    const categorySlug = category.toLowerCase().replace(/\s+/g, "-");

    return Array.from({ length: countNeeded }, (_, index) => ({
      id: `placeholder-${collection.id}-${categorySlug}-${index + 1}`,
      name: categoryTitles[jewelryType],
      collection: collection.id,
      category: jewelryType,
      price: null,
      image: "/giftora-logo.png",
      isPlaceholder: true as const,
    }));
  }),
);

export const catalogListings = [...storeProducts, ...placeholderListings];
