// Local data source for the API. Structured so it can be swapped for a
// database-backed repository later without changing the controller/route
// layer above it — see server/src/services/projectsService.js.

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
      "A documentary-style wedding shot across a single golden afternoon in the Constantia winelands.",
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1400&auto=format&fit=crop",
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
    gallery: [
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1400&auto=format&fit=crop",
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
      "An editorial commission for a swimwear label, shot over three days along the Eastern Cape coast.",
    gallery: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1800&auto=format&fit=crop",
    ],
  },
];

export default projects;
