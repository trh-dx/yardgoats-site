"use client";

import { useCallback, useRef, useState } from "react";
import Script from "next/script";
import { teams } from "@/lib/data";

// Official GameChanger "team schedule" widget (widgets.gc.com). The SDK renders an iframe into
// the target container and sizes it via postMessage, so styling stays on our side of the frame.
//
// ── Adding the other teams ──────────────────────────────────────────────────────────────────
// Add one entry per team once GameChanger supplies its widget code. Only entries listed here are
// shown; with two or more, team tabs (desktop) and a dropdown (mobile) appear automatically.
//   key          unique slug, e.g. "7u-leach"
//   label        tab / dropdown text, e.g. "7U Leach"
//   coach        must match the coach in lib/data.ts — used to find the "Open in GameChanger" link
//   widgetId     the widgetId from the GameChanger embed code
//   containerId  the container id from the embed code (or any unique id)
// Still needed: 7U Leach, 8U Miller, 9U Smith, 11U White, 11U Abernathy.
type ScheduleTeam = {
  key: string;
  label: string;
  coach: string;
  widgetId: string;
  containerId: string;
};

const SCHEDULE_TEAMS: ScheduleTeam[] = [
  {
    key: "11u-wosko",
    label: "11U Wosko",
    coach: "Jesse Woskowicz",
    widgetId: "216f7a1f-e02f-4546-8426-50fdd9497864",
    containerId: "gc-schedule-widget-dect",
  },
];

const SDK_URL = "https://widgets.gc.com/static/js/sdk.v1.js";
// Vertical list on every screen size (GameChanger otherwise picks a side-scrolling strip on wide screens)
const LAYOUT = "vertical";
// GameChanger always lists games oldest-first and its frame can't be scrolled from here. So we ask it to
// render every game (no inner scrollbar), clip that tall frame in our own scroll box about 3 games high,
// and start our box scrolled to the bottom (latest games). See ScrollBox below.
const RENDER_ALL_GAMES = 200;
const LOAD_TIMEOUT_MS = 15000;

type GCScheduleApi = { init: (options: Record<string, unknown>) => void };
declare global {
  interface Window {
    GC?: { team?: { schedule?: GCScheduleApi } };
  }
}

export default function GameChangerSchedule() {
  const [activeKey, setActiveKey] = useState(SCHEDULE_TEAMS[0]?.key);
  const [sdkFailed, setSdkFailed] = useState(false);
  const [loadedKey, setLoadedKey] = useState<string | null>(null);
  const [failedKey, setFailedKey] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const active = SCHEDULE_TEAMS.find((t) => t.key === activeKey) ?? SCHEDULE_TEAMS[0];
  const teamUrl = active ? teams.find((t) => t.coach === active.coach)?.gameChangerUrl : undefined;

  // Renders the widget into a container and watches it load. init() replaces the container's
  // contents and runs only once per container, so React's dev double-mount and returning to the
  // homepage never stack two widgets; the load watcher is (re)attached on every call.
  // Returns a cleanup for the load listener and timeout.
  const initWidget = useCallback((container: HTMLDivElement, team: ScheduleTeam) => {
    const api = window.GC?.team?.schedule;
    if (!api) return;
    if (container.dataset.gcInit !== team.widgetId) {
      container.dataset.gcInit = team.widgetId;
      api.init({
        target: `#${team.containerId}`,
        widgetId: team.widgetId,
        layout: LAYOUT,
        maxVerticalGamesVisible: RENDER_ALL_GAMES,
      });
    }

    const iframe = container.querySelector("iframe");
    if (!iframe) {
      // The SDK logs bad options to the console and renders nothing
      setFailedKey(team.key);
      return;
    }
    let loaded = false;
    const onLoad = () => {
      loaded = true;
      setLoadedKey(team.key);
    };
    iframe.addEventListener("load", onLoad);
    const timeout = window.setTimeout(() => {
      if (!loaded) setFailedKey(team.key);
    }, LOAD_TIMEOUT_MS);

    // Start at the bottom and stay pinned there while GameChanger sizes the list (it resizes the
    // iframe via postMessage). Once the visitor scrolls up, leave their position alone.
    const box = container.parentElement;
    let lastHeight = box?.scrollHeight ?? 0;
    const resizeObserver = new ResizeObserver(() => {
      if (!box) return;
      const wasAtBottom = box.scrollTop + box.clientHeight >= lastHeight - 4;
      if (wasAtBottom) box.scrollTop = box.scrollHeight;
      lastHeight = box.scrollHeight;
    });
    resizeObserver.observe(iframe);

    return () => {
      iframe.removeEventListener("load", onLoad);
      window.clearTimeout(timeout);
      resizeObserver.disconnect();
    };
  }, []);

  // Container mounted (first visit, revisit, or team switch): initialise if the SDK is already loaded
  const containerCallback = useCallback(
    (el: HTMLDivElement | null) => {
      containerRef.current = el;
      if (!el || !active) return;
      return initWidget(el, active);
    },
    [active, initWidget]
  );

  // SDK finished loading (or was already loaded when this component mounted)
  const onSdkReady = () => {
    if (containerRef.current && active) initWidget(containerRef.current, active);
  };

  if (!active) return null;

  const status = failedKey === active.key ? "error" : loadedKey === active.key ? "ready" : "loading";
  const showError = sdkFailed || status === "error";
  const showTabs = SCHEDULE_TEAMS.length > 1;

  return (
    <div className="max-w-[720px] mx-auto">
      <Script
        id="gc-widget-sdk"
        src={SDK_URL}
        strategy="afterInteractive"
        onReady={onSdkReady}
        onError={() => setSdkFailed(true)}
      />

      {showTabs && (
        <>
          {/* Desktop: tabs */}
          <div role="tablist" aria-label="Choose a team" className="hidden sm:flex flex-wrap justify-center gap-2 mb-5">
            {SCHEDULE_TEAMS.map((t) => (
              <button
                key={t.key}
                type="button"
                role="tab"
                aria-selected={t.key === active.key}
                onClick={() => setActiveKey(t.key)}
                className={`font-inter font-bold text-[0.72rem] tracking-[2px] uppercase px-4 py-2 rounded border transition-colors duration-200 ${
                  t.key === active.key
                    ? "bg-[#1A5FD4] border-[#1A5FD4] text-white"
                    : "border-[#1A5FD4]/50 text-white/80 hover:border-[#1A5FD4] hover:text-white"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Mobile: dropdown */}
          <div className="sm:hidden mb-4">
            <label htmlFor="gc-team-select" className="block font-inter font-bold text-[0.68rem] tracking-[2px] uppercase text-[#4A86E8] mb-1.5">
              Team
            </label>
            <select
              id="gc-team-select"
              value={active.key}
              onChange={(e) => setActiveKey(e.target.value)}
              className="w-full bg-charcoal border border-[#1A5FD4]/60 rounded px-3 py-2.5 font-inter text-white"
            >
              {SCHEDULE_TEAMS.map((t) => (
                <option key={t.key} value={t.key}>{t.label}</option>
              ))}
            </select>
          </div>
        </>
      )}

      {/* Widget frame */}
      <div className="relative bg-charcoal border border-[#1A5FD4]/60 shadow-[0_0_18px_rgba(26,95,212,0.15)] rounded-lg p-2 sm:p-3 overflow-hidden">
        {/* Fixed heading: stays put while the game list scrolls (GameChanger's own header is inside
            its frame and scrolls with the list) */}
        <div className="flex items-end justify-between gap-3 px-2 pt-1 pb-2.5 mb-2 border-b border-[#1A5FD4]/30">
          <div className="min-w-0">
            <p className="font-inter font-bold text-[0.62rem] tracking-[2.5px] uppercase text-[#4A86E8] leading-none mb-1.5">
              Paradise Yard Goats
            </p>
            <p className="font-bebas text-white text-[1.6rem] leading-none tracking-wide truncate">
              {active.label}
            </p>
          </div>
          <p className="shrink-0 font-inter text-[0.68rem] text-muted-gray leading-none pb-0.5">
            Powered by <span className="font-bold text-light-gray">GameChanger</span>
          </p>
        </div>

        {/* ScrollBox: ~3 games tall, starts scrolled to the bottom. GameChanger injects its
            full-height iframe into the inner div; key forces a fresh container per team. */}
        <div className={`max-h-[480px] overflow-y-auto rounded-md [scrollbar-width:thin] [scrollbar-color:rgba(26,95,212,0.8)_transparent] ${showError ? "hidden" : ""}`}>
          <div
            key={active.key}
            ref={containerCallback}
            id={active.containerId}
            className={`w-full ${status === "ready" ? "" : "min-h-[260px]"}`}
          />
        </div>

        {status === "loading" && !showError && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-live="polite">
            <span className="font-inter text-[0.8rem] tracking-[1.5px] uppercase text-muted-gray">
              Loading schedule…
            </span>
          </div>
        )}

        {showError && (
          <div className="min-h-[200px] flex flex-col items-center justify-center text-center gap-2 px-4" role="status">
            <p className="font-inter text-light-gray">The schedule couldn&rsquo;t be loaded right now.</p>
            {teamUrl && (
              <p className="font-inter text-[0.88rem] text-muted-gray">
                You can still view it on GameChanger using the link below.
              </p>
            )}
          </div>
        )}
      </div>

      {teamUrl && (
        <div className="mt-3 text-right">
          <a
            href={teamUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-inter font-bold text-[0.72rem] tracking-[2px] uppercase text-[#4A86E8] hover:text-white transition-colors duration-200"
          >
            Open in GameChanger
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}
