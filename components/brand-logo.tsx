interface BrandLogoProps {
  alt: string
  className: string
}

export default function BrandLogo({ alt, className }: BrandLogoProps) {
  return (
    <span className={`relative inline-flex shrink-0 ${className}`}>
      <img
        src="/giftora-logo-light.png"
        alt={alt}
        className="h-full w-full object-contain dark:hidden"
      />
      <img
        src="/giftora-logo-dark.png"
        alt=""
        aria-hidden="true"
        className="hidden h-full w-full object-contain dark:block"
      />
    </span>
  )
}
