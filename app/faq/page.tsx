import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Mail, MessageCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CONTACT_EMAIL, CONTACT_WHATSAPP_URL } from "@/lib/site-info"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | GIFTORA",
  description: "Get in touch with GIFTORA for help with silver jewellery, custom orders, shipping and care.",
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="bg-muted px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">A little help</p>
          <h1 className="text-4xl font-medium tracking-tight text-foreground md:text-5xl">Frequently asked questions</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
            We’re putting together clear answers about our jewellery and services. Until then, please contact us and
            we’ll help with your specific question.
          </p>
        </div>
      </section>

      <section className="px-4 py-14 md:py-20">
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary"
          >
            <Mail aria-hidden="true" className="mb-5 h-5 w-5 text-primary" />
            <h2 className="font-semibold text-card-foreground">Email us</h2>
            <p className="mt-2 break-all text-sm text-muted-foreground">{CONTACT_EMAIL}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
              Send an email <ArrowRight aria-hidden="true" size={15} className="transition-transform group-hover:translate-x-1" />
            </span>
          </a>
          <a
            href={CONTACT_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary"
          >
            <MessageCircle aria-hidden="true" className="mb-5 h-5 w-5 text-primary" />
            <h2 className="font-semibold text-card-foreground">Message us on WhatsApp</h2>
            <p className="mt-2 text-sm text-muted-foreground">Ask us about a piece or a custom design.</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
              Start a conversation <ArrowRight aria-hidden="true" size={15} className="transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-sm text-muted-foreground">
          Looking for jewellery? <Link href="/shop" className="text-primary underline underline-offset-4">Browse the collection</Link>.
        </p>
      </section>
      <Footer />
    </main>
  )
}
