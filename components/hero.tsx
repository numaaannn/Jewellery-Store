"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    headline: "Make every moment worth gifting.",
    subtext: "Thoughtful silver keepsakes for the moments that matter — and all the beautifully ordinary ones in between.",
  },
  {
    headline: "A little silver. A lot of meaning.",
    subtext: "Discover personal, everyday jewellery designed to be worn, loved and remembered.",
  },
  {
    headline: "Give them something to keep.",
    subtext: "Find a considered gift for their next big moment, or a small reason to celebrate today.",
  },
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, 6500)

    return () => window.clearInterval(timer)
  }, [])

  const goToSlide = (direction: -1 | 1) => {
    setIndex((current) => (current + direction + slides.length) % slides.length)
  }

  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className="hero-eyebrow">
          <Sparkles aria-hidden="true" size={15} />
          GIFTORA <span aria-hidden="true">·</span> SILVER GIFTS
        </p>

        <div key={index} className="animate-fade-in" aria-live="polite">
          <h1 className="hero-title">{slides[index].headline}</h1>
          <p className="hero-description">{slides[index].subtext}</p>
        </div>

        <div className="hero-actions">
          <Button asChild size="lg" className="rounded-full px-6">
            <Link href="/shop">
              Explore Collection <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-6">
            <Link href="/custom-jewelry">Make it personal</Link>
          </Button>
        </div>

        <div className="hero-controls" aria-label="Hero slides">
          <button
            type="button"
            className="hero-arrow"
            onClick={() => goToSlide(-1)}
            aria-label="Previous slide"
          >
            <ChevronLeft size={16} />
          </button>
          {slides.map((slide, slideIndex) => (
            <button
              key={slide.headline}
              type="button"
              className="hero-dot"
              onClick={() => setIndex(slideIndex)}
              aria-label={`Show slide ${slideIndex + 1}`}
              aria-current={index === slideIndex}
            />
          ))}
          <button
            type="button"
            className="hero-arrow"
            onClick={() => goToSlide(1)}
            aria-label="Next slide"
          >
            <ChevronRight size={16} />
          </button>
          <span className="hero-slide-count">
            {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  )
}
