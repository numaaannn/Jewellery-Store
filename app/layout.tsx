import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { CartProvider } from "@/components/cart-provider"
import { ThemeProvider } from "@/components/theme-provider"
import ChatbotDrawer from "@/components/chatbot-drawer"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "GIFTORA | Silver Gifts",
  description:
    "Discover GIFTORA's collection of premium silver gifts and thoughtful 925 silver jewellery for meaningful moments.",
  keywords: [
    "925 silver jewellery",
    "sterling silver rings",
    "silver chains",
    "silver pendants",
    "custom name jewellery",
    "minimalist jewellery",
    "handcrafted silver",
  ],
  generator: "v0.app",
  icons: {
    icon: "/giftora-logo-light.png",
    shortcut: "/giftora-logo-light.png",
    apple: "/giftora-logo-light.png",
  },
  openGraph: {
    title: "GIFTORA | Silver Gifts",
    description:
      "Thoughtfully curated silver gifts and fine 925 silver jewellery designed for memorable moments.",
    type: "website",
    url: "https://numaanssilvershop.com",
    images: [
      {
        url: "/giftora-logo-light.png",
        width: 768,
        height: 768,
        alt: "GIFTORA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GIFTORA | Silver Gifts",
    description: "Thoughtfully curated silver gifts and fine 925 silver jewellery designed for memorable moments.",
    images: ["/giftora-logo-light.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://numaanssilvershop.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Global providers */}
          {/* CartProvider manages cart state and persistence */}
          <CartProvider>
            {children}
            <ChatbotDrawer />
            <Analytics />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
