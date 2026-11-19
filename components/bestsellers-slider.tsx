"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ProductCard from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { storeProducts } from "@/data/store-products"

const featuredProducts = [
  storeProducts.find((product) => product.collection === "him" && product.category === "Rings" && product.price !== null),
  storeProducts.find((product) => product.collection === "her" && product.category === "Earrings" && product.price !== null),
  storeProducts.find((product) => product.collection === "her" && product.category === "Anklets" && product.price !== null),
  storeProducts.find((product) => product.collection === "her" && product.category === "Rings" && product.price !== null),
].filter((product) => product !== undefined)

export default function BestsellersSlider() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("bestsellers-container")
    if (container) {
      const scrollAmount = 320
      const newPosition =
        direction === "left" ? Math.max(0, scrollPosition - scrollAmount) : scrollPosition + scrollAmount

      container.scrollTo({
        left: newPosition,
        behavior: "smooth",
      })
      setScrollPosition(newPosition)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance">Featured Jewellery</h2>
            <p className="text-muted-foreground">Explore pieces from Gifts for Him and Gifts for Her</p>
          </div>

          <div className="hidden md:flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div
          id="bestsellers-container"
          className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
          style={{ scrollBehavior: "smooth" }}
        >
          {featuredProducts.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
