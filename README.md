# Paradise Yard Goats Baseball — Website

Official website for the Paradise Yard Goats youth travel baseball organization based in Paradise, Texas.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS v4**
- **TypeScript**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero ("Home of The / Paradise Yard Goats / Youth Baseball"), teams by age group, sponsors strip |
| `/teams` | Hero: "5 Teams. / One Goat Nation." — age group cards (Team Overview header, 5 cards), player spotlights (hidden), CTA band |
| `/tryouts` | Tryout dates with age-group cards (clock icon, time, register CTA), what to expect, what to bring — **page still exists but is no longer linked from anywhere on the site** (see [Hidden Tryouts Info](#hidden-tryouts-info)) |
| `/schedule` | Game and tournament schedule |
| `/field-rentals` | Field rental page — "Baseball Field Rentals" hero, availability strip, facility features, rental option cards, rules checklist, booking CTA |
| `/about` | Organization story and coaches |
| `/sponsors` | Full sponsors page — hero, logo wall, community impact (benefits + stats), packages, why partner, CTA |
| `/contact` | "Contact Paradise Yard Goats Baseball" — contact form and info |

## Project Structure

```
app/                  # Next.js App Router pages
  sponsors/
    page.tsx          # Dedicated sponsors page
components/           # Shared UI components
  Nav.tsx             # Fixed top navigation (links: Home, Teams, Field Rentals, About, Sponsors, Contact — Tryouts link removed, see Hidden Tryouts Info)
  Footer.tsx          # Site footer (5-col grid; Quick Links includes Field Rentals; Age Groups shows "7U - 11U"; Sponsors links "Our Sponsors" and "Become a Sponsor" both go to /sponsors)
  Scoreboard.tsx      # Homepage score/stats bar
  Sponsors.tsx        # Homepage sponsors strip — headline, logo wall, starting price, CTA to /sponsors
  SponsorPackages.tsx # Interactive pricing cards used on /sponsors (client component)
  TeamsGrid.tsx       # Teams page age-group cards (7U, 8U, 9U, 11U) — imports from lib/data.ts
  Schedule.tsx        # Schedule table/list
lib/
  data.ts             # Teams, schedule, and sponsor package data
  config.ts           # Site-wide config (social links, email, external URLs)
public/
  images/             # Photos and sponsor logos
    sponsors/         # Individual sponsor logo files
  yardgoatsimage.png  # Primary team logo
```

## Design System

Fonts loaded via `next/font/google`:
- **Bebas Neue** (`font-bebas`) — headings and display text
- **Inter** (`font-inter`) — body, buttons, labels
- **Permanent Marker** (`font-marker`) — accent script lines

Key colors:
- Deep navy `#07111F` — page background (used consistently throughout `/sponsors`)
- Green `#7AC143` — primary accent
- Royal blue `#003DA5` — structural/info elements
- Red `#B3261E` — section heading dividers

See `.claude/skills/yardgoats-design-system/` for the full design system reference.

## Homepage Sponsors Section

`components/Sponsors.tsx` is a lightweight strip on the homepage designed to drive traffic to `/sponsors`:

- Headline: "Support Local Players. Grow Your Local Brand."
- Supporting copy about what sponsorships fund
- **Diamond Sponsors** — AmeriDream, GTG, Elite Metal Fabricators, Edward Jones, TLR at `aspect-[3/2]`; 2 per row mobile / 3 on sm / 5 on xl
- **Supporting Sponsors** — Wise Powder Coating, ECS, KMB, Consolidated Wellsite Services; 2×2 on mobile/tablet, one row of 4 on `lg`. Card aspect `5/2` mobile → `4/1` sm → `3/1` lg (KMB `scale: 1.8`; Consolidated Wellsite Services `scale: 1.1`)
- Both tiers use `flex flex-wrap justify-center` so a partial last row is centered — card layout matches `/sponsors` exactly; keep the two in sync
- "Packages starting at $250" callout
- Single CTA button → `/sponsors`

The full tier breakdown lives on the dedicated sponsors page (see below).

## Sponsors Page

`/sponsors` is a full dedicated page with these sections (top to bottom):

1. **Hero** — "Invest in Players / Impact the Community" with YG logo (280px, `lg+` only) and a green **"View Sponsorship Packages ↓"** button (navy text on green) that jumps to `#packages`
2. **Logo Wall** — "Our Proud Sponsors" heading with star divider, then tiered display. Both tiers use `flex flex-wrap justify-center` (not grid) so a partial last row is centered instead of left-aligned:
   - **Diamond Sponsors** — AmeriDream, GTG, Elite Metal Fabricators, Edward Jones, TLR at `aspect-[3/2]`; 2 per row mobile / 3 on sm / 5 on xl
   - **Supporting Sponsors** — Wise Powder Coating, ECS, KMB, Consolidated Wellsite Services; 2×2 on mobile/tablet, one row of 4 on `lg`. Card aspect `5/2` mobile → `4/1` sm → `3/1` lg (KMB `scale: 1.8`; Consolidated Wellsite Services `scale: 1.1` — higher clips the top of its icon)
3. **Community Impact** — one section holding the 4-icon benefits grid (Tournament Fees, Equipment, Practice Facilities, Player Development) and, 32px below it, the stats bar (250+ players, 10+ tournaments, 1 mission, COUNTLESS memories)
4. **Sponsorship Packages** — Single ($250), Double ($500), Triple ($1,000), Grand Slam ($2,000+). `id="packages"` sits on the heading with an inline `scrollMarginTop: 96px` (inline because the global `[id] { scroll-margin-top: 72px }` rule in `globals.css` is unlayered and overrides Tailwind `scroll-mt-*` utilities). Card buttons are bottom-aligned via flex column + `mt-auto`
5. **Why Partner** — 4-reason grid inside a bordered card
6. **CTA Banner** — "Want to become a sponsor?" with email link

### Sponsors page spacing

Spacing was tightened on 2026-09-24. Adjacent sections split the gap between them (one side carries it, the other is ~0) so paddings don't stack. Measured visible gaps:

| Gap | Desktop | Mobile |
|---|---|---|
| Hero top padding (below nav) | 64px | 40px |
| Hero button → "Our Proud Sponsors" | 48px | 40px |
| Heading / tier labels / logo grids | 24–32px | 24–32px |
| Supporting logos → benefits | 48px | 32px |
| Benefits → stats | 32px | 32px |
| Stats → packages heading | 60px | 40px |
| Packages heading → cards | 32px | 24px |
| Cards → Why Partner panel | 48px | 40px |
| Why Partner inner padding | 32px | 24px |
| Why Partner → CTA banner | 40px | 40px |
| CTA banner → footer | 64px | 48px |

The footer's "Our Sponsors" and "Become a Sponsor" links (`SPONSOR_LINKS` in `components/Footer.tsx`) both point to `/sponsors`.

### Adding a Sponsor Logo

To add a **Diamond** sponsor, drop the logo in `public/images/sponsors/` and add an entry to `PREMIER_LOGOS` in `app/sponsors/page.tsx` and the diamond grid in `components/Sponsors.tsx`:

```ts
{ src: "/images/sponsors/your-logo.png", alt: "Business Name", bg: "#ffffff", href: "https://their-website.com" }
```

To add a **Supporting** sponsor, add to `SUPPORTING_LOGOS` in `app/sponsors/page.tsx` and the supporting grid in `components/Sponsors.tsx`.

Each sponsor card shows a **"Visit Sponsor"** hover overlay with an external link icon and opens the `href` in a new tab. Use `"#"` as a placeholder until the real URL is known. Links must be updated in both `app/sponsors/page.tsx` and `components/Sponsors.tsx`.

### Current sponsor links

| Sponsor | Tier | Link |
|---|---|---|
| AmeriDream | Diamond | `https://ameridreammtg.com/` |
| GTG | Diamond | `https://gtgsi.com/` |
| Elite Metal Fabricators | Diamond | `https://www.elitemetalfabinc.com/` |
| Edward Jones | Diamond | `#` — **still needed** |
| TLR | Diamond | `https://tlrwelding.com/` |
| Wise Powder Coating | Supporting | `https://wisepowdercoating.com/` |
| ECS | Supporting | `https://engineandcompressor.com/` |
| KMB | Supporting | `#` — **still needed** |
| Consolidated Wellsite Services | Supporting | `https://www.linkedin.com/company/consolidated-wellsite-services` (LinkedIn page) |

Set `bg` to match the logo's intended background color (white for most, or a brand color).

### Updating Sponsor Packages

Package names, prices, and perks are defined in `lib/data.ts` under `export const sponsors`. Tier-specific card styling (colors, shadows, badges) lives in the `cfg` object in `components/SponsorPackages.tsx`.

## SEO & Metadata

Metadata is managed via the Next.js App Router `metadata` export.

- **`app/layout.tsx`** — sets `metadataBase` (`https://paradiseyardgoats.club`), a title template (`%s | Paradise Yard Goats Baseball`), a default description, and `openGraph` / `twitter` card defaults for every page

Pages that include the brand name in their title use `title: { absolute: "..." }` to bypass the layout template and avoid duplication.

### Current page metadata

| Page | Title | Uses absolute? |
|---|---|---|
| `/` | Paradise Yard Goats Baseball \| Youth Baseball in Paradise, TX | Yes |
| `/teams` | Youth Baseball Teams \| Paradise Yard Goats Baseball | No (template) |
| `/field-rentals` | Baseball Field Rentals in Paradise, TX \| The Goat Yard | Yes |
| `/sponsors` | Youth Baseball Sponsorships \| Paradise Yard Goats | Yes |
| `/about` | About Paradise Yard Goats Baseball | Yes |
| `/tryouts` | Tryouts \| Paradise Yard Goats Baseball | No (template) |
| `/schedule` | Schedule \| Paradise Yard Goats Baseball | No (template) |
| `/contact` | Contact Paradise Yard Goats Baseball | Yes (via contact/layout.tsx) |

To add metadata to a new page, export a `Metadata` object. If the title already contains the brand name, use `absolute` to skip the template:

```ts
// Simple (template appends site name)
export const metadata: Metadata = {
  title: "Page Name",
  description: "Page-specific description.",
};

// Absolute (full title, no template)
export const metadata: Metadata = {
  title: { absolute: "Full Title | Paradise Yard Goats" },
  description: "Page-specific description.",
};
```

Update `metadataBase` in `app/layout.tsx` if the domain changes.

## Mobile Considerations

### Homepage Hero
- **Section height** — `min-h-[78vh]` on mobile, `lg:min-h-[85vh]` on desktop; `items-start` so content sits near the top and the scoreboard strip is visible at the bottom of the initial viewport without scrolling
- **Overlay** — two separate overlays: desktop uses a left-heavy 105deg gradient (`lg:block`); mobile uses a softer vertical gradient (`block lg:hidden`) so the baseball field image remains visible on small screens
- **"Home of The"** — Permanent Marker font in green, `clamp(1.23rem, 2.8vw, 1.78rem)`
- **"Paradise Yard Goats"** — Bebas Neue in white, `clamp(3rem, 9vw, 9rem)`, `whitespace-nowrap`; blue outline (`WebkitTextStroke: 2.5px #1A5FD4`) and subtle dark drop shadow (`textShadow: 2px 3px 6px rgba(0,0,0,0.55)`) for athletic wordmark treatment
- **"Youth Baseball"** — Bebas Neue in white with a thin royal-blue text stroke (`0.5px`) and subtle blue drop shadow accent; green `3px` bar sits underneath via a `w-fit` wrapper div
- **Tagline** — `clamp(0.85rem, 1.4vw, 1rem)`, `tracking-[0.8px]`, `leading-relaxed` — tightened from earlier wider spacing for better readability on mobile

### Teams Page (`/teams`)
- **Bottom CTA tagline** — "Find your team. Build your confidence. Have Fun." stacks vertically on mobile (`flex-col`) with pipes hidden; restores to inline pipe-separated row on `sm+`

### Sponsors Page (`/sponsors`)
- **Supporting sponsors** — 2×2 on mobile and tablet, single row of 4 on `lg`
- **Benefits grid** — 2-col on mobile, 4-col on `md`
- **Stats bar** — 2-col on mobile with row/column separators, 4-col on `md`
- **Sponsorship packages** — 1-col on mobile, 2-col on `sm`, 4-col on `xl`
- **Why Partner card** — padding `p-6` mobile → `p-8` md
- **Logo wall label** — wraps naturally on small screens (no `whitespace-nowrap`)
- **CTA banner** — stacks vertically on mobile (`flex-col`), logo placeholder stretches full width; switches to horizontal row on `md`
- **YG logo image in hero** — hidden below `lg` breakpoint to keep hero clean on mobile

## Tryouts Page

The tryout schedule is defined in the `tryouts` array at the top of `app/tryouts/page.tsx`. Each entry has an `age` label and a `time` string:

```ts
{ age: "7U & 8U", time: "12:00P - 12:45P" },
{ age: "9U",      time: "1:00P - 1:45P"   },
{ age: "11U",     time: "2:00P - 2:45P"   },
```

Each card displays a green clock icon, the age group in large Bebas Neue, and the time with the `P` suffix rendered slightly smaller. The register button links to `siteConfig.register`.

To add or remove a time slot, add or remove an entry from the `tryouts` array — the card grid adjusts automatically.

### Hidden Tryouts Info

The `/tryouts` route and its page content are still fully live in `app/tryouts/page.tsx` — nothing was deleted. What changed is that **every link pointing to it was removed** across the site, so the page is now only reachable by typing the URL directly. This was a deliberate site-wide "hide" (not a takedown) — reintroducing a link anywhere below (`href="/tryouts"`) is enough to make it discoverable again.

Removed links and CTAs, by file:

| File | What was removed |
|---|---|
| `components/Nav.tsx` | "Tryouts" nav item (desktop + mobile menu); desktop "Join The Goats" CTA button; mobile "Join The Goats" CTA button |
| `components/Footer.tsx` | "Tryouts" entry from the Quick Links column |
| `app/page.tsx` (Home) | Hero "Join The Goats" button; "Tryouts: July 12" date callout under the hero; the entire Section 5 "Join The Goats CTA" band ("Think You Have What It Takes?" / "Join The Goats" headline, tryout date copy, "Register For Tryouts" button, background image) |
| `app/teams/page.tsx` | "Register for Tryouts" button in the bottom CTA band |
| `app/schedule/page.tsx` | "Register for Tryouts" button in the bottom CTA section (the "Contact Our Coaches" button next to it was kept) |
| `app/about/page.tsx` | "Join The Goats" button in the mission section; the entire "BOTTOM CTA BANNER" section ("Think You Have What It Takes?" headline, "Tryouts are open — come show us what you've got." copy, "Register Now" button linking to `siteConfig.register`) |

Untouched (left as-is, since they don't link to `/tryouts`):
- Plain-text mentions of "tryouts" that aren't links (e.g. homepage hero copy, schedule page supporting copy, contact form dropdown option "Register a Player / Ask About Tryouts")
- `app/contact/layout.tsx` metadata description mentioning tryouts

---

## Field Rentals Page

`/field-rentals` uses the Swift / RunSwiftApp booking system — no custom booking logic is built into the site. All booking buttons point to `siteConfig.fieldRentals` and open in a new tab.

Page sections (top to bottom):

1. **Hero** — "Baseball Field Rentals" (white + green) with "THE GOAT YARD" eyebrow, subtitle, green primary button (booking URL), white outline "Rental Rules" button (anchor-scrolls to rules section)
2. **Availability strip** — Royal blue band with calendar icon, description, and "Open Booking Calendar" button
3. **Facility Features** — 5-column grid (Lighted Field, Turf & Infield, Dugouts, Parking, Restrooms) with icon, title, and description
4. **Rental Options** — 4 cards in a 1→2→4 column responsive grid (Team Practice, Private Lesson, Weekend Block, Event/Tournament), each with a "Book Now" button
5. **Rental Rules** — Checklist section with green checkmark circles (anchor target `#rental-rules`)
6. **Bottom CTA** — Green banner with logo and "Book Field Time" button

### Updating the Booking URL

The Swift booking URL is stored in `lib/config.ts` under `siteConfig.fieldRentals`. Update it there and all buttons on the page update automatically.

```ts
fieldRentals: "https://book.runswiftapp.com/facilities/the-goat-yard"
```

### Adding or Editing Rental Rules

Rules are defined in the `rentalRules` array at the top of `app/field-rentals/page.tsx`. Add, remove, or reorder items there.

### Adding or Editing Rental Option Cards

Cards are defined in the `rentalOptions` array at the top of `app/field-rentals/page.tsx`. Each card has a `title` and `desc`.

---

## Contact Form

`/contact` is a server-side wired contact form. Submissions POST to `app/api/contact/route.ts`, which sends email via [Resend](https://resend.com).

### Email configuration

| Field | Value |
|---|---|
| To | `paradiseyardgoats@gmail.com` |
| From | `Paradise Yard Goats <forms@paradiseyardgoats.club>` |
| Reply-To | Visitor's submitted email address |
| Subject | `New Contact Form: {interest}` |

### Environment variable

`RESEND_API_KEY` must be set as a Vercel Secret scoped to **Production**. It is read only via `process.env.RESEND_API_KEY` in the server-side route — never exposed to the client. The variable is not needed locally unless testing email sending; the form will return a safe error message if it is missing.

### Form fields

| Field | Required |
|---|---|
| Parent / Guardian / Sponsor Name | Yes |
| Email Address | Yes |
| Phone Number | No |
| Player Age | No |
| I'm Interested In | Yes |
| Message | Yes |

### Form states

- **Sending** — button shows "Sending…" and is disabled to prevent duplicate submissions
- **Success** — form clears and a "Message Received!" confirmation screen replaces the form
- **Error** — a red error message appears above the submit button; form remains editable

### API route error handling (`app/api/contact/route.ts`)

Every failure path returns JSON — there is no blank 500 response:

| Condition | Response |
|---|---|
| `RESEND_API_KEY` missing | 500 `{ error: "Server email configuration is missing." }` |
| Malformed request body | 400 `{ error: "Invalid request body." }` |
| Missing required fields | 400 `{ error: "Missing required fields." }` |
| Resend API error | 500 `{ error: "Failed to send message. Please try again." }` (name/message/statusCode logged server-side only) |
| Unexpected exception | 500 `{ error: "An unexpected error occurred. Please try again." }` |

---

## Data

All editable content (teams, schedule, sponsor packages) lives in `lib/data.ts`. Site-wide links and contact info are in `lib/config.ts`.

### Teams data shape

```ts
{
  age: "9U",
  name: "9U Yard Goats",
  title: "Challenge",         // card headline
  description: "...",         // card body copy
  tag: "Kid Pitch",           // pill badge shown below coach name (Coach Pitch / Kid Pitch / Tournament)
  coach: "Jake Smith",        // rendered as "Coach: Name" in the card header
  teamLabel: "SMITH",         // optional — adds a dark navy strip below the green age badge (used for 11U only)
  wins: 8,                    // used to display record and calculate win pct
  losses: 4,
  gameChangerUrl: "https://web.gc.com/teams/...",     // renders the "Team Schedule and Roster →" button at the bottom of the card
}
```

`coach`, `wins`, and `losses` are optional; omitting them hides those elements from the card. Win pct is calculated automatically; displays `—` when both wins and losses are 0. `teamLabel` is optional — only add it when multiple teams share the same age group (currently the two 11U teams). `gameChangerUrl` is set for every team; if a new team is added without it, that card simply shows no button.

### Current teams

| Age | Coach | teamLabel | Tag | Record | GameChanger link |
|---|---|---|---|---|---|
| 7U | Shawn Leach | — | Coach Pitch | 0-0 | `web.gc.com/teams/InZdFM6CqmpU` |
| 8U | Trey Miller | — | Coach Pitch | 0-0 | `web.gc.com/teams/BW734FfgNW4Y` |
| 9U | Jake Smith | — | Kid Pitch | 0-0 | `web.gc.com/teams/41nZoo07ilol` |
| 11U | Jesse Woskowicz | WOSKO | Tournament | 0-0 | `web.gc.com/teams/DqLSuG5ean8F` |
| 11U | Collin White | WHITE | Tournament | 0-0 | `web.gc.com/teams/KGndr0H8M79A` |

### TeamsGrid card design

Cards use a 6-column CSS grid so the layout can be controlled precisely. The first three cards (7U, 8U, 9U) each span 2 of 6 columns, filling the row. The two 11U cards each span 2 columns with explicit `col-start` values (2 and 4) so they are centered below the top row with one empty column on each side.

The card header shows "Paradise / Yard Goats" with the age badge top-right, coach name, and tag pill. The age badge is a split two-tone design: green top section with the age, and — when `teamLabel` is set — a dark navy bottom strip with the label. A green border wraps the entire badge.

The card body shows the title, description, a record / win pct row, and a "Team Schedule and Roster →" button pinned to the bottom. Cards have a royal blue border at rest that brightens on hover with a blue glow shadow.

The "Team Schedule and Roster →" button is royal blue (`#003DA5`, darkening to `#002B7F` on hover) and opens the team's `gameChangerUrl` in a new tab. A small "Powered by GameChanger" caption renders below it. The button text and caption are the same on every card and are set in `TeamsGrid.tsx`.

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # Run ESLint
```
