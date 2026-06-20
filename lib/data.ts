export const teams = [
  {
    age: "7U",
    name: "7U Yard Goats",
    title: "Foundations",
    description: "Fundamentals, teamwork, base running, and learning the game.",
    tag: "Coach Pitch",
    image: "/images/7u-card.png",
  },
  {
    age: "8U",
    name: "8U Yard Goats",
    title: "Development",
    description: "Confidence, field awareness, hitting mechanics, and game experience.",
    tag: "Coach Pitch",
    image: "/images/8u-card.png",
  },
  {
    age: "9U",
    name: "9U Yard Goats",
    title: "Compete",
    description: "Competitive reps, stronger fundamentals, pitching development, and tournament play.",
    tag: "Kid Pitch",
    image: "/images/baseball-tryout-image.png",
  },
  {
    age: "11U",
    name: "11U Yard Goats",
    title: "Elevate",
    description: "Advanced development, leadership, competition, and preparing for higher levels of baseball.",
    tag: "Tournament",
    image: "/images/baseball-tryout-image.png",
  },
];

export const schedule = [
  {
    date: "June 14–15",
    event: "NCS Summer Classic",
    isTournament: true,
    location: "Bridgeport, TX",
    team: "11U",
    time: "TBD",
  },
  {
    date: "June 21",
    event: "Paradise Rec League",
    isTournament: false,
    location: "Paradise Community Park",
    team: "7U / 8U",
    time: "10:00 AM",
  },
  {
    date: "June 28–29",
    event: "DFW Youth Invitational",
    isTournament: true,
    location: "Fort Worth, TX",
    team: "9U / 11U",
    time: "TBD",
  },
  {
    date: "July 12",
    event: "Home Game — Paradise Park",
    isTournament: false,
    location: "Paradise, TX",
    team: "8U",
    time: "9:00 AM",
  },
  {
    date: "July 19–20",
    event: "Summer Showdown",
    isTournament: true,
    location: "Weatherford, TX",
    team: "8U / 11U",
    time: "TBD",
  },
];

export const sponsors = [
  {
    tier: "Base Hit",
    name: "Single",
    price: "$250",
    priceSuffix: "",
    perks: [
      "Website listing",
      "Social media thank-you",
      "Recognition at events",
    ],
    featured: false,
    cta: "Sponsor at $250",
  },
  {
    tier: "Extra Base",
    name: "Double",
    price: "$500",
    priceSuffix: "",
    perks: [
      "Website logo placement",
      "Social media recognition",
      "Team banner mention",
      "All Single perks",
    ],
    featured: false,
    cta: "Sponsor at $500",
  },
  {
    tier: "Triple Play",
    name: "Triple",
    price: "$1,000",
    priceSuffix: "",
    perks: [
      "Jersey sleeve logo",
      "Featured website placement",
      "Social media spotlight",
      "All Double perks",
    ],
    featured: false,
    cta: "Sponsor at $1,000",
  },
  {
    tier: "Premier Partner",
    name: "Home Run",
    price: "$2,000",
    priceSuffix: "+",
    perks: [
      "Premium jersey logo",
      "Field & dugout signage",
      "Season-long recognition",
      "All Triple perks",
    ],
    featured: true,
    cta: "Become a Premier Sponsor",
  },
];

export const gallery = [
  { label: "Game Action",      icon: "📸", tall: true },
  { label: "Tournament Win",   icon: "🏆", tall: false },
  { label: "Practice Day",     icon: "⚾", tall: false },
  { label: "Team Huddle",      icon: "🤝", tall: false },
  { label: "Opening Day",      icon: "🏟️", tall: false },
  { label: "Player Spotlight", icon: "🌟", tall: false },
];
