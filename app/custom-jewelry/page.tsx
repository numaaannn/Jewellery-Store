import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Gem, ImagePlus, MessageCircle, Ruler, Tag } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CONTACT_WHATSAPP_URL } from "@/lib/site-info"

const processSteps = [
  {
    number: "01",
    title: "Share Your Idea",
    description: "Share your jewellery design idea with us along with a reference photo, sketch, or inspiration image.",
    icon: ImagePlus,
  },
  {
    number: "02",
    title: "Get Your Quotation",
    description: "We'll review your requirements, discuss the details, and provide you with a personalised quotation.",
    icon: Tag,
  },
  {
    number: "03",
    title: "Get Your Custom Jewellery",
    description: "Once approved, we'll carefully craft your jewellery and get it ready for you as soon as possible.",
    icon: Gem,
  },
]

const ideas = [
  {
    title: "Name jewellery",
    description: "Make a ring or pendant personal with a name, initial, or meaningful detail.",
    image: "/custom-name-silver-ring.jpg",
    alt: "Custom name silver ring",
  },
  {
    title: "Pendants with meaning",
    description: "Build a piece around a symbol, shape, or small detail that matters to you.",
    image: "/geometric-silver-pendant.jpg",
    alt: "Geometric silver pendant",
  },
  {
    title: "A design of your own",
    description: "Bring a reference or a rough idea and start a conversation about what’s possible.",
    image: "/custom-name-silver-jewellery.jpg",
    alt: "Custom silver jewellery design",
  },
]

export default function CustomJewelryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-br from-muted/80 via-background to-primary/5">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-8 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
              <span className="h-px w-8 bg-primary/60" />
              Made personal by GIFTORA
            </p>
            <h1 className="mb-6 max-w-xl font-serif text-5xl font-medium leading-[1.08] tracking-tight text-foreground text-balance sm:text-6xl lg:text-7xl">
              A piece that is <span className="italic text-primary">uniquely yours.</span>
            </h1>
            <p className="mb-8 max-w-lg text-base leading-8 text-muted-foreground sm:text-lg">
              Bring us your idea, a sketch, or a little inspiration. Together, we’ll shape it into custom jewellery made just for you.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={`${CONTACT_WHATSAPP_URL}?text=${encodeURIComponent("Hi GIFTORA, I would like to start a custom jewellery order.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-md shadow-primary/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Start Your Custom Order
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#process"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border/80 bg-background/80 px-6 py-3.5 font-semibold text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-card"
              >
                Explore the process
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Ruler aria-hidden="true" className="h-4 w-4" />
              </span>
              <span>Personal details · Considered design · Careful finishing</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -left-5 -top-5 h-28 w-28 rounded-full bg-primary/10 blur-2xl sm:h-40 sm:w-40" />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-muted sm:aspect-[5/4]">
                <Image
                  src="/artisan-hands-crafting-silver-jewellery.jpg"
                  alt="Artisan hands crafting silver jewellery"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 48vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                  <p className="text-sm font-medium uppercase tracking-[0.16em] text-white/75">Made around your idea</p>
                  <p className="mt-2 text-2xl font-semibold sm:text-3xl">A personal piece, from first thought to final finish.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-24 overflow-hidden bg-muted/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Your custom journey</p>
            <h2 className="text-3xl font-bold leading-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
              Create Something Unique, Just for You.
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
              A thoughtful, personal process brings your idea to life in three simple steps.
            </p>
          </div>

          <div className="relative grid gap-5 md:grid-cols-3 md:gap-6">
            <div aria-hidden="true" className="absolute left-[16.7%] right-[16.7%] top-12 hidden border-t border-dashed border-primary/30 md:block" />
            {processSteps.map(({ number, title, description, icon: Icon }) => (
              <article key={number} className="group relative rounded-2xl border border-border/80 bg-card px-6 py-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 sm:px-8 sm:py-9">
                <div className="relative z-10 mb-7 flex items-center justify-between">
                  <span className="font-serif text-4xl font-medium text-primary/35 transition-colors duration-300 group-hover:text-primary/70">{number}</span>
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/15 bg-background text-primary shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                </div>
                <h3 className="text-xl font-semibold leading-snug text-foreground sm:text-2xl">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
                <div className="mt-7 h-px w-12 bg-primary/35 transition-all duration-300 group-hover:w-20 group-hover:bg-primary" />
              </article>
            ))}
          </div>

          <div className="mt-12 text-center md:mt-14">
            <p className="font-serif text-2xl italic tracking-wide text-foreground sm:text-3xl">
              “Designed by You. Crafted by Us. Made Just for You.”
            </p>
            <Link
              href={`${CONTACT_WHATSAPP_URL}?text=${encodeURIComponent("Hi GIFTORA, I would like to start a custom jewellery order.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-md shadow-primary/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Start Your Custom Order
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">A few starting points</p>
              <h2 className="text-3xl font-bold text-foreground text-balance sm:text-4xl">Make the details your own</h2>
            </div>
            <p className="max-w-md leading-relaxed text-muted-foreground">
              These examples are inspiration. Share what you like, and we’ll talk through a design that suits your idea.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ideas.map((idea) => (
              <article key={idea.title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={idea.image}
                    alt={idea.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground">{idea.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{idea.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-primary px-6 py-10 text-center text-primary-foreground sm:px-12 sm:py-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] opacity-80">Let’s begin</p>
            <h2 className="mx-auto max-w-2xl text-3xl font-bold text-balance sm:text-4xl">Tell us what you’re imagining.</h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed opacity-85">
              Send your inspiration on WhatsApp. We’ll help you explore the next steps for your custom jewellery.
            </p>
            <Link
              href={CONTACT_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-background px-6 py-3.5 font-semibold text-foreground transition-colors hover:bg-background/90"
            >
              <MessageCircle className="h-5 w-5" />
              Message GIFTORA
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
