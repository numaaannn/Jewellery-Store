import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted">
              <img
                src="/artisan-hands-crafting-silver-jewellery.jpg"
                alt="An artisan carefully crafting silver jewellery"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                Crafted with Passion, Worn with Pride
              </h2>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                GIFTORA was born from a vision to create timeless silver gifts that celebrate meaningful moments and
                minimalist elegance. Each piece is handcrafted by skilled artisans using pure 925 silver, ensuring quality
                and durability that lasts a lifetime.
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                We believe in sustainable practices and ethical sourcing. Our commitment to excellence means every
                detail matters, from the initial design to the final polish.
              </p>
            </div>

            <Link href="/about">
              <Button className="rounded-full px-6">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
