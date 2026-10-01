"use client";

import { useEffect } from "react";

// Reveals every [data-reveal] element on the page as it scrolls into view (styles in globals.css).
// Elements entering together are grouped into visual rows; the stagger restarts on each row,
// so a single-column phone layout gets no stacked delay. Each element animates once per visit.

const STAGGER_MS = 75;
const DURATION_MS = 400;
const ROW_TOLERANCE_PX = 4;

export default function RevealOnScroll() {
  useEffect(() => {
    const root = document.documentElement;
    const pending = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])")
    );
    const timers: number[] = [];

    const showNow = (el: HTMLElement) => el.setAttribute("data-revealed", "");

    const reveal = (el: HTMLElement, delay: number) => {
      el.style.setProperty("--reveal-delay", `${delay}ms`);
      el.setAttribute("data-revealing", "");
      el.setAttribute("data-revealed", "");
      // Drop the reveal transition afterwards so it can't affect anything else on the element
      timers.push(
        window.setTimeout(() => {
          el.removeAttribute("data-revealing");
          el.style.removeProperty("--reveal-delay");
        }, DURATION_MS + delay + 50)
      );
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      pending.forEach(showNow);
      root.setAttribute("data-reveal-ready", "");
      return;
    }

    // Loaded partway down the page: anything already scrolled past just appears
    pending.forEach((el) => {
      if (el.getBoundingClientRect().bottom <= 0) showNow(el);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const entering = entries
          .filter((e) => e.isIntersecting)
          .map((e) => e.target as HTMLElement);

        // Group by visual row, then stagger left-to-right within each row
        const rows: { top: number; els: HTMLElement[] }[] = [];
        for (const el of entering) {
          const top = el.getBoundingClientRect().top;
          const row = rows.find((r) => Math.abs(r.top - top) <= ROW_TOLERANCE_PX);
          if (row) row.els.push(el);
          else rows.push({ top, els: [el] });
        }
        for (const row of rows) {
          row.els
            .sort((a, b) => a.getBoundingClientRect().left - b.getBoundingClientRect().left)
            .forEach((el, i) => reveal(el, i * STAGGER_MS));
        }

        entering.forEach((el) => observer.unobserve(el));
      },
      // Fire once a card is ~15% visible and clear of the very bottom edge
      { rootMargin: "0px 0px -8% 0px", threshold: 0.15 }
    );

    pending
      .filter((el) => !el.hasAttribute("data-revealed"))
      .forEach((el) => observer.observe(el));
    root.setAttribute("data-reveal-ready", "");

    return () => {
      observer.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  return null;
}
