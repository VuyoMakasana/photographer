// ============================================================
// PHOTOGRAPHER PROFILE — edit everything about the brand here.
// This is the single source of truth used across the whole site.
// ============================================================

const photographer = {
  name: "Amara Studio",
  photographerName: "Amara Kessler",
  tagline: "Photography that keeps the temperature of the moment it was taken in.",

  hero: {
    kicker: "Documentary & editorial photography",
    headline: "Amara Studio",
    subhead: "Photography that keeps the temperature of the moment it was taken in.",
    image: {
      desktop:
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2400&auto=format&fit=crop",
      mobile:
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop",
      alt: "Bride and groom laughing together in soft evening light",
    },
    primaryCta: { label: "View Work", href: "/work" },
    secondaryCta: { label: "Book a Session", href: "/contact" },
  },

  intro: {
    eyebrow: "Philosophy",
    statement:
      "I photograph people, places and the small unrepeatable moments between them — with an emphasis on honesty, atmosphere and restraint.",
    body:
      "My work sits somewhere between documentary and portraiture. I'm drawn to unscripted gesture, low light, and the seconds before and after the moment everyone thinks the photograph is about. Every series starts with attention, not direction.",
  },

  about: {
    portrait:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop",
    portraitAlt: "Amara Kessler holding a camera, looking off-frame",
    shortBio:
      "Amara Kessler is a documentary and editorial photographer based in Cape Town, working across South Africa and internationally.",
    longBio: [
      "Photography has always been my way of paying attention. I started out shooting on borrowed cameras at family gatherings in Gqeberha, more interested in the in-between moments than the posed ones — a hand on a shoulder, a half-finished sentence, the light through a kitchen window at six in the evening.",
      "That instinct never left. Ten years and hundreds of weddings, portrait sittings and editorial commissions later, I still work the same way: quietly, patiently, and with a documentary photographer's respect for what's actually happening in front of me rather than what I think should be happening.",
      "I studied fine art photography before moving into editorial and commercial work, and I bring the same eye to a wedding as I would to a magazine assignment — composition first, sentimentality second. My clients tend to want honesty over polish, and that's the work I'm best at.",
    ],
    philosophy:
      "A photograph should hold up on its own, years from now, without the story attached to explain it.",
    experience: "10+ years practicing, 200+ weddings and editorial commissions delivered.",
    location: "Based in Cape Town, South Africa — available worldwide.",
    areasServed: ["Cape Town", "Gqeberha", "Johannesburg", "Available for travel worldwide"],
    awards: [
      { title: "Gold Award — Documentary Wedding Photography, SA Photography Awards", year: "2025" },
      { title: "Featured Photographer — Lensculture Portrait Awards", year: "2023" },
      { title: "Finalist — International Wedding Photographer of the Year", year: "2022" },
    ],
    publications: ["Rangefinder", "Vogue Weddings SA", "It's Nice That", "Business Day Wanted"],
    clients: ["Woolworths", "Klein Constantia", "Air Mauritius", "Cape Town Fashion Week"],
  },

  contact: {
    email: "hello@amara.studio",
    phone: "+27 82 555 0134",
    instagram: "https://instagram.com/amarastudio",
    instagramHandle: "@amarastudio",
    location: "Cape Town, South Africa",
    heading: "Contact",
    statement: "Let's create something meaningful.",
  },

  footer: {
    note: "Original photographs and design. Placeholder imagery via Unsplash, for demonstration only.",
  },
};

export default photographer;
