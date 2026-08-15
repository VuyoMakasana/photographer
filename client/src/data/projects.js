// ============================================================
// PROJECT / SERIES ARCHIVE
// Add a new project by adding an object to this array.
// `slug` must be unique — it becomes the URL at /work/:slug
// Order does not matter — the archive sorts by year automatically.
// ============================================================

const projects = [
  {
    slug: "wedding-cape-town",
    year: "2026",
    category: "Wedding",
    title: "A Wedding in Constantia",
    location: "Cape Town, South Africa",
    cover:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1800&auto=format&fit=crop",
    description:
      "A documentary-style wedding shot across a single golden afternoon in the Constantia winelands — unposed, unrushed, and mostly shot on available light.",
    notes:
      "This one was shot almost entirely with a 35mm and a 90mm, no flash. I wanted the light to do the emotional work instead of the direction.",
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1400&auto=format&fit=crop",
    ],
  },
  {
    slug: "portrait-series-johannesburg",
    year: "2026",
    category: "Portrait Series",
    title: "Johannesburg Portraits",
    location: "Johannesburg, South Africa",
    cover:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1800&auto=format&fit=crop",
    description:
      "A self-directed portrait series exploring makers and artists working out of converted industrial spaces in Maboneng.",
    notes:
      "Personal project, self-funded. Three weekends, eleven sitters, all shot on a single north-facing window.",
    gallery: [
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1800&auto=format&fit=crop",
    ],
  },
  {
    slug: "editorial-gqeberha",
    year: "2025",
    category: "Editorial",
    title: "Coastline",
    location: "Gqeberha, South Africa",
    cover:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1800&auto=format&fit=crop",
    description:
      "An editorial commission for a swimwear label, shot over three days along the Eastern Cape coast at first and last light.",
    notes:
      "Client brief asked for 'quiet, not glossy.' We shot everything within two hours of sunrise or sunset.",
    gallery: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1400&auto=format&fit=crop",
    ],
  },
  {
    slug: "fashion-series-cape-town",
    year: "2025",
    category: "Fashion",
    title: "Studio Line",
    location: "Cape Town, South Africa",
    cover:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1800&auto=format&fit=crop",
    description:
      "A studio-based fashion series exploring texture and silhouette against raw concrete and hard shadow.",
    notes: "Single hard light source, no diffusion — a deliberate departure from my usual soft-light instinct.",
    gallery: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1400&auto=format&fit=crop",
    ],
  },
  {
    slug: "personal-work-2024",
    year: "2024",
    category: "Personal Work",
    title: "Notes From Home",
    location: "Eastern Cape, South Africa",
    cover:
      "https://images.unsplash.com/photo-1499084732479-de2c02d45fc4?q=80&w=1800&auto=format&fit=crop",
    description:
      "An ongoing, unfinished body of work photographed at home between commissions — the project with no deadline.",
    notes: "This is the series I keep coming back to. No client, no brief, shot whenever the light is right.",
    gallery: [
      "https://images.unsplash.com/photo-1499084732479-de2c02d45fc4?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470217957101-da7150b9b681?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1495954380655-583edaeaf888?q=80&w=1400&auto=format&fit=crop",
    ],
  },
];

export default projects;
