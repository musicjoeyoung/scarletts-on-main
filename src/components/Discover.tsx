function SparkleIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 10L35.8 22.2L48 26L35.8 29.8L32 42L28.2 29.8L16 26L28.2 22.2L32 10Z" fill="currentColor" opacity="0.9" />
      <path d="M18 4L19.8 9.2L25 11L19.8 12.8L18 18L16.2 12.8L11 11L16.2 9.2L18 4Z" fill="currentColor" opacity="0.85" />
      <path d="M46 4L47.4 8.6L52 10L47.4 11.4L46 16L44.6 11.4L40 10L44.6 8.6L46 4Z" fill="currentColor" opacity="0.85" />
    </svg>
  )
}

function GiftIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M12 28H52V50C52 53.3 49.3 56 46 56H18C14.7 56 12 53.3 12 50V28Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 28V56M20 28H44C41.4 21.8 37 18 32 18C27 18 22.6 21.8 20 28Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 18V56" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 18C36.5 18 40 14.5 40 10C40 5.5 36.5 2 32 2C27.5 2 24 5.5 24 10C24 14.5 27.5 18 32 18Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function TagIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M38 10H54V26L32 48L16 32L38 10Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="42" cy="22" r="4" fill="currentColor" />
      <path d="M22 38L38 54" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function HouseIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M10 31L32 12L54 31V50C54 53.3 51.3 56 48 56H16C12.7 56 10 53.3 10 50V31Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 56V36H40V56" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 24L32 14L46 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function HangerIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 10C27.6 10 24 13.6 24 18C24 22.4 27.6 26 32 26C36.4 26 40 22.4 40 18C40 13.6 36.4 10 32 10Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 26L32 34L44 26" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 34V48M24 48H40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 40L12 52H52L46 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function GemIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M20 12H44L52 24L32 52L12 24L20 12Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 12L32 52L44 12M12 24H52" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Discover() {
  const items = [
    { title: 'Vintage Finds', icon: <SparkleIcon /> },
    { title: 'Curated Treasures', icon: <GiftIcon /> },
    { title: 'Resale Pieces', icon: <TagIcon /> },
    { title: 'Unique Home Goods', icon: <HouseIcon /> },
    { title: 'Clothing & Accessories', icon: <HangerIcon /> },
    { title: 'One-of-a-Kind Discoveries', icon: <GemIcon /> },
  ]

  return (
    <section className="discover">
      <div className="container">
        <h2>Discover Something Special</h2>
        <p className="section-intro">
          Every visit to Scarlett's on Main is an opportunity to find something unique and meaningful.
        </p>
        <div className="discover-grid">
          {items.map((item, index) => (
            <div key={index} className="discover-card">
              <div className="discover-icon">{item.icon}</div>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
