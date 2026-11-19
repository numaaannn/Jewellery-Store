import { collectionOptions, storeProducts } from "@/data/store-products"

export const targetProductsPerCategory = 10

export const catalogCoverage = collectionOptions.flatMap((collection) =>
  collection.categories.map((category) => {
    const count = storeProducts.filter(
      (product) => product.collection === collection.id && product.category === category,
    ).length

    return {
      collection: collection.label,
      category,
      count,
      target: targetProductsPerCategory,
      additionalProductsNeeded: Math.max(0, targetProductsPerCategory - count),
      productsAboveTarget: Math.max(0, count - targetProductsPerCategory),
    }
  }),
)

export const productsAwaitingPrice = storeProducts
  .filter((product) => product.price === null)
  .map(({ id, name, image }) => ({ id, name, image }))

// These older example catalogs are not connected to the storefront. Review their
// ownership and identifiers before importing them to avoid duplicates or guesses.
export const disconnectedCatalogSources = [
  {
    source: "data/products.ts",
    recordIds: ["1", "2", "3", "4"],
    reason: "Generic names, zero prices, and no collection/gender field; assign collection manually.",
  },
  {
    source: "lib/products.ts",
    recordIds: [
      "w-earring-1", "w-necklace-1", "w-bracelet-1", "w-ring-1", "w-anklet-1", "w-bangle-1",
      "w-pendant-1", "w-set-1", "m-ring-1", "m-studs-1", "m-bracelet-1", "m-chain-1",
      "m-cufflinks-1", "m-pendant-1", "custom-1",
    ],
    reason: "Example records with zero prices and several image paths that do not exist in public/.",
  },
  {
    source: "data/jewelry-data.ts",
    recordIds: ["w001", "w002", "w003", "w004", "w005", "w006", "m001", "m002", "m003", "m004"],
    reason: "Example records use external stock-image URLs and do not match the current Giftora catalog.",
  },
]
