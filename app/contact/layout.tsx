import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Paradise Yard Goats Baseball",
  },
  description:
    "Contact Paradise Yard Goats Baseball about teams, tryouts, sponsorships, field rentals, and youth baseball opportunities in Paradise, Texas.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
