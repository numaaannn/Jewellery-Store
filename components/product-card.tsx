"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"

interface ProductCardProps {
  id: string
  name: string
  price: number | null
  image: string
  category: string
  isPlaceholder?: boolean
  rating?: number
  reviews?: number
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  category,
  isPlaceholder = false,
  rating = 4.5,
  reviews = 0,
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const normalizedCategory = category.toLowerCase()
  const placeholderImage = normalizedCategory.includes("ring")
    ? "/icons/rings.svg"
    : normalizedCategory.includes("chain")
      ? "/icons/chains.svg"
      : normalizedCategory.includes("bracelet")
        ? "/icons/bracelets.svg"
        : normalizedCategory.includes("stud") || normalizedCategory.includes("earring")
          ? "/icons/earrings.svg"
          : normalizedCategory.includes("anklet")
            ? "/icons/anklets.svg"
            : normalizedCategory.includes("pendant")
              ? "/icons/pendants.svg"
              : normalizedCategory.includes("set")
                ? "/icons/sets.svg"
                : "/placeholder.svg"
  const [displayImage, setDisplayImage] = useState(image || placeholderImage)
  const { addItem } = useCart()

  return (
    <div className="group animate-fade-in">
      {/* Product Image Container */}
      <div
        className="relative bg-muted rounded-lg overflow-hidden mb-4 aspect-square hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isPlaceholder ? (
          <img
            src={displayImage}
            alt={`Giftora placeholder for ${name}`}
            onError={() => setDisplayImage(placeholderImage)}
            className="w-full h-full object-contain p-6"
          />
        ) : (
          <Link href={`/product/${id}`} className="block h-full w-full">
            <img
              src={displayImage}
              alt={name}
              onError={() => setDisplayImage(placeholderImage)}
              className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
            />
          </Link>
        )}

        {/* Overlay Actions */}
        {isHovered && !isPlaceholder && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3 transition-all duration-300 animate-fade-in">
<Button
              size="sm"
              disabled={price === null}
              onClick={() => price !== null && addItem({ id, name, price, image: displayImage })}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="p-2 bg-background rounded-full hover:bg-primary/20 transition-colors duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <Heart
                className={`w-5 h-5 transition-all duration-300 ${
                  isFavorite ? "fill-accent text-accent scale-110" : "text-foreground"
                }`}
              />
            </button>
          </div>
        )}

        {/* Favorite Button (Mobile) */}
        {!isPlaceholder && <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 p-2 bg-background rounded-full hover:bg-primary/20 transition-colors duration-300 md:hidden hover:shadow-lg hover:-translate-y-1"
        >
          <Heart
            className={`w-5 h-5 transition-all duration-300 ${
              isFavorite ? "fill-accent text-accent scale-110" : "text-foreground"
            }`}
          />
        </button>}
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{category}</p>
        {isPlaceholder ? (
          <h3 className="text-sm font-semibold text-foreground line-clamp-2">{name}</h3>
        ) : <Link href={`/product/${id}`}>
          <h3 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
        </Link>}

        {/* Rating */}
        {reviews > 0 && (
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xs transition-all duration-300 ${
                    i < Math.floor(rating) ? "text-accent scale-110" : "text-muted"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({reviews})</span>
          </div>
        )}

        {/* Price */}
        <p className="text-lg font-bold text-foreground">
          {isPlaceholder ? "Coming soon" : price === null ? "Price pending" : `₹${price.toLocaleString("en-IN")}`}
        </p>
      </div>
    </div>
  )
}
