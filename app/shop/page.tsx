"use client"

import { Suspense, useEffect, useRef, useState } from "react"
import { useSearchParams } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import { ChevronDown } from "lucide-react"
import { catalogListings, collectionOptions, type CollectionId } from "@/data/store-products"

const allProducts = catalogListings
const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
]

export default function ShopPage() {
  return (
    <Suspense fallback={<ShopLoading />}>
      <ShopContent />
    </Suspense>
  )
}

function ShopLoading() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-20 text-muted-foreground">Loading collection…</div>
      <Footer />
    </main>
  )
}

function ShopContent() {
  const searchParams = useSearchParams()
  const collectionParam = searchParams.get("collection")
  const selectedCollection: CollectionId | "all" =
    collectionParam === "him" || collectionParam === "her" ? collectionParam : "all"
  const previousCollection = useRef(selectedCollection)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDesign, setSelectedDesign] = useState("All")
  const [selectedMaterial, setSelectedMaterial] = useState("All")
  const [selectedStone, setSelectedStone] = useState("All")
  const [onlyAvailable, setOnlyAvailable] = useState(false)
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [sortBy, setSortBy] = useState("newest")
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    const collectionChanged = previousCollection.current !== selectedCollection
    if (collectionChanged) {
      setSelectedCategory("All")
      setSelectedDesign("All")
      setSelectedMaterial("All")
      setSelectedStone("All")
      setOnlyAvailable(false)
      previousCollection.current = selectedCollection
    }

    const category = searchParams.get("category")
    if (category) {
      const matchingCategory = collectionOptions.flatMap((collection) => collection.categories)
        .find((item) => item.toLowerCase() === category.toLowerCase())
      if (matchingCategory) setSelectedCategory(matchingCategory)
    } else if (collectionChanged) {
      setSelectedCategory("All")
    }
    setSearchQuery(searchParams.get("q")?.trim().toLowerCase() ?? "")
  }, [searchParams, selectedCollection])

  const collectionProducts = allProducts.filter(
    (product) => selectedCollection === "all" || product.collection === selectedCollection,
  )
  const categories = selectedCollection === "all"
    ? Array.from(new Set(collectionOptions.flatMap((collection) => collection.categories)))
    : collectionOptions.find((collection) => collection.id === selectedCollection)?.categories ?? []
  const categoryProducts = collectionProducts.filter(
    (product) => selectedCategory === "All" || product.category === selectedCategory,
  )
  const optionsFor = (key: "design" | "material" | "stoneType") =>
    Array.from(new Set(categoryProducts.map((product) => product[key]).filter((value): value is string => Boolean(value))))
  const designOptions = optionsFor("design")
  const materialOptions = optionsFor("material")
  const stoneOptions = optionsFor("stoneType")
  const hasAvailabilityData = categoryProducts.some((product) => product.availability)

  const filteredProducts = categoryProducts.filter((product) =>
    (selectedDesign === "All" || product.design === selectedDesign) &&
    (selectedMaterial === "All" || product.material === selectedMaterial) &&
    (selectedStone === "All" || product.stoneType === selectedStone) &&
    (!onlyAvailable || product.availability === "in_stock") &&
    (minPrice === "" || (product.price !== null && product.price >= Number(minPrice))) &&
    (maxPrice === "" || (product.price !== null && product.price <= Number(maxPrice))) &&
    (!searchQuery || [product.name, product.category, product.design, product.material, product.stoneType]
      .filter(Boolean)
      .some((value) => value?.toLowerCase().includes(searchQuery))),
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        if (a.price === null) return 1
        if (b.price === null) return -1
        return a.price - b.price
      case "price-desc":
        if (a.price === null) return 1
        if (b.price === null) return -1
        return b.price - a.price
      default:
        return 0
    }
  })

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="bg-muted py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 text-balance">
            {selectedCollection === "all"
              ? "Shop Our Collection"
              : collectionOptions.find((collection) => collection.id === selectedCollection)?.label}
          </h1>
          <p className="text-muted-foreground text-lg">
            Explore {filteredProducts.length} jewellery listings in this collection
          </p>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className={`lg:col-span-1 ${showFilters ? "block" : "hidden lg:block"}`}>
              <div className="space-y-6">
                <div className="space-y-4 border-t border-border pt-6">
                  <h3 className="font-semibold text-foreground text-lg">Jewellery Type</h3>
                  <div className="space-y-2">
                    {["All", ...categories].map((category) => {
                      const count = category === "All"
                        ? collectionProducts.length
                        : collectionProducts.filter((product) => product.category === category).length
                      return (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category)
                          setSelectedDesign("All")
                          setSelectedMaterial("All")
                          setSelectedStone("All")
                          setShowFilters(false)
                        }}
                        className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          selectedCategory === category
                            ? "bg-primary text-primary-foreground font-medium"
                            : "text-foreground hover:bg-muted"
                        }`}
                      >
                        {category === "All" ? `All Types (${count})` : `${category} (${count})`}
                      </button>
                      )
                    })}
                  </div>
                </div>

                {/* Price Range */}
                <div className="space-y-4 border-t border-border pt-6">
                  <h3 className="font-semibold text-foreground text-lg">Price Range</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <label className="text-xs text-muted-foreground">
                      Min ₹
                      <input type="number" min="0" value={minPrice} onChange={(event) => setMinPrice(event.target.value)} className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground" />
                    </label>
                    <label className="text-xs text-muted-foreground">
                      Max ₹
                      <input type="number" min="0" value={maxPrice} onChange={(event) => setMaxPrice(event.target.value)} className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground" />
                    </label>
                  </div>
                </div>

                {designOptions.length > 1 && (
                  <label className="block space-y-2 border-t border-border pt-6 text-sm font-semibold text-foreground">
                    Design / Style
                    <select value={selectedDesign} onChange={(event) => setSelectedDesign(event.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 font-normal">
                      <option value="All">All Designs</option>
                      {designOptions.map((design) => <option key={design} value={design}>{design}</option>)}
                    </select>
                  </label>
                )}

                {materialOptions.length > 1 && (
                  <label className="block space-y-2 border-t border-border pt-6 text-sm font-semibold text-foreground">
                    Material
                    <select value={selectedMaterial} onChange={(event) => setSelectedMaterial(event.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 font-normal">
                      <option value="All">All Materials</option>
                      {materialOptions.map((material) => <option key={material} value={material}>{material}</option>)}
                    </select>
                  </label>
                )}

                {stoneOptions.length > 1 && (
                  <label className="block space-y-2 border-t border-border pt-6 text-sm font-semibold text-foreground">
                    Stone Type
                    <select value={selectedStone} onChange={(event) => setSelectedStone(event.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 font-normal">
                      <option value="All">All Stones</option>
                      {stoneOptions.map((stone) => <option key={stone} value={stone}>{stone}</option>)}
                    </select>
                  </label>
                )}

                {hasAvailabilityData && (
                  <label className="flex items-center gap-2 border-t border-border pt-6 text-sm text-foreground">
                    <input type="checkbox" checked={onlyAvailable} onChange={(event) => setOnlyAvailable(event.target.checked)} className="rounded" />
                    In stock only
                  </label>
                )}
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <p className="text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{sortedProducts.length}</span> products
                </p>

                <div className="flex gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden flex-1 sm:flex-none px-4 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition-colors"
                  >
                    Filters
                  </button>

                  <div className="relative flex-1 sm:flex-none">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground appearance-none cursor-pointer hover:border-primary transition-colors"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              {sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">No products found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
