export const teams = [
  {
    age: "7U",
    name: "7U Yard Goats",
    description:
      "Developing young players through coach pitch baseball and team-first instruction.",
    tag: "Coach Pitch",
  },
  {
    age: "8U",
    name: "8U Yard Goats",
    description:
      "Coach pitch baseball with a focus on fundamentals, competition, and confidence.",
    tag: "Coach Pitch",
  },
  {
    age: "9U",
    name: "9U Yard Goats",
    description:
      "Kid pitch baseball bridging the gap between fundamentals and competitive play.",
    tag: "Kid Pitch",
  },
  {
    age: "11U",
    name: "11U Yard Goats",
    description:
      "Tournament baseball for players ready to compete at a higher level and develop advanced skills.",
    tag: "Tournament",
  },
];

export const schedule = [
  {
    date: "June 14–15",
    event: "NCS Summer Classic",
    isTournament: true,
    location: "Bridgeport, TX",
    team: "10U",
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
    team: "10U",
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
    team: "8U / 10U",
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
    cta: "Get Started",
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
    cta: "Get Started",
  },
  {
    tier: "Premier Partner",
    name: "Home Run",
    price: "$1,000",
    priceSuffix: "+",
    perks: [
      "Featured sponsor placement",
      "Season-long recognition",
      "Premium logo visibility",
      "All Double perks",
    ],
    featured: true,
    cta: "Hit a Home Run",
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
