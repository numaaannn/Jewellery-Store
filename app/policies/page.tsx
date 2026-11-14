import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CONTACT_EMAIL, CONTACT_WHATSAPP_URL } from "@/lib/site-info"

export const metadata: Metadata = {
  title: "Customer Information | GIFTORA",
  description: "Contact GIFTORA for current shipping, returns, warranty and policy information.",
}

const policySections = [
  { id: "shipping", title: "Shipping information" },
  { id: "returns", title: "Returns and exchanges" },
  { id: "warranty", title: "Warranty and care" },
  { id: "privacy", title: "Privacy policy" },
  { id: "terms", title: "Terms of service" },
]

export default function PoliciesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="bg-muted px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Customer information</p>
          <h1 className="text-4xl font-medium tracking-tight text-foreground md:text-5xl">Policies &amp; support</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
            We’re preparing the full details for these policies. Until they’re published, contact us before placing an
            order for the current information that applies to your purchase.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-3xl divide-y divide-border rounded-xl border border-border bg-card px-6 md:px-8">
          {policySections.map((section) => (
            <article id={section.id} key={section.id} className="scroll-mt-24 py-7 first:pt-7">
              <h2 className="text-xl font-medium text-card-foreground">{section.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Details are being finalised. Please contact our team for current information about {section.title.toLowerCase()}.
              </p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap gap-4 text-sm">
          <a className="inline-flex items-center gap-2 font-medium text-primary underline underline-offset-4" href={`mailto:${CONTACT_EMAIL}`}>
            Email {CONTACT_EMAIL} <ArrowRight aria-hidden="true" size={15} />
          </a>
          <a className="inline-flex items-center gap-2 font-medium text-primary underline underline-offset-4" href={CONTACT_WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Ask on WhatsApp <ArrowRight aria-hidden="true" size={15} />
          </a>
          <Link className="inline-flex items-center gap-2 font-medium text-primary underline underline-offset-4" href="/faq">
            Visit FAQs <ArrowRight aria-hidden="true" size={15} />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
