'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Youtube } from 'lucide-react';

const djSets = [
  {
    title: "Servel Live - Sonorama Club Medellín",
    location: "Sonorama Club",
    date: "November 2025",
    image: "/images/dj-sets/servel-presskit-2026-audio-sonorama-november-2025.avif",
    url: "https://www.youtube.com/watch?v=7K7Xex9sfxw",
    platform: "youtube",
  },
  {
    title: "Servel live Open To Close @ LATRASTIENDA",
    location: "LATRASTIENDA",
    date: "August 2025",
    image: "/images/dj-sets/servel-presskit-2026-latrastienda-august-2025.avif",
    url: "https://soundcloud.com/davidservel/servel-live-open-to-close-latrasrienda",
    platform: "soundcloud",
  },
  {
    title: "Servel Live Set @ Audiowave Medellín",
    location: "Audiowave Medellín",
    date: "July 2025",
    image: "/images/dj-sets/servel-presskit-2026-audio-wave-medellin-july-2025.avif",
    url: "https://www.youtube.com/watch?v=IDL117AJuxc",
    platform: "youtube",
  },
  {
    title: "SERVEL Live @ One Carnival - ARGY (Afterlife)",
    location: "One Carnival",
    date: "March 2024",
    image: "/images/dj-sets/servel-presskit-2026-audio-one-carnival-argy-march-2024.avif",
    url: "https://www.youtube.com/watch?v=54tw-xeesIU",
    platform: "youtube",
  },
];

export function Tracks() {
  const [showAll, setShowAll] = useState(false);
  const displayedSets = showAll ? djSets : djSets.slice(0, 4);

  return (
    <section className="border-t border-border px-4 py-12 text-left">
      <div className="mb-8 text-left">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
          Latest DJ Sets
        </h2>
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
          Live Performances & Curated Sessions
        </p>
      </div>

      <div className="space-y-4">
        {displayedSets.map((set, idx) => (
          <a
            key={idx}
            href={set.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/item relative flex items-stretch gap-4 rounded border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-accent/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(var(--accent),0.05)]"
          >
            <div className="relative aspect-square h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0 overflow-hidden rounded group self-center shadow-lg border border-white/5">
              <Image
                src={set.image || "/placeholder.svg"}
                alt={set.title}
                fill
                className="object-cover transition-transform duration-500 group-hover/item:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-all duration-300 group-hover/item:opacity-100 backdrop-blur-[2px]">
                {set.platform === 'youtube' ? (
                  <Youtube className="h-8 w-8 text-white fill-white shadow-xl" />
                ) : (
                  <div className="relative h-10 w-10 brightness-0 invert opacity-90">
                    <Image src="/images/social-media-logos/servel-presskit-2026-icon-soundcloud.png" alt="SoundCloud" fill className="object-contain" />
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-center gap-2 py-0.5">
              <div>
                <h3 className="text-[12px] sm:text-[13px] font-bold leading-snug text-foreground group-hover/item:text-accent transition-colors max-w-[95%]">
                  {set.title}
                </h3>
                <div className="mt-1 flex items-center gap-2 text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-tight">
                  <span className="font-medium">{set.location}</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>{set.date}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {set.platform === 'youtube' ? (
                    <div className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 border border-white/10 backdrop-blur-md group-hover/item:border-white/30 transition-all">
                      <Youtube className="h-3 w-3 text-white" />
                      <span className="text-[8px] font-extrabold text-white uppercase tracking-widest leading-none">Watch Video</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 border border-white/10 backdrop-blur-md group-hover/item:border-white/30 transition-all">
                      <div className="relative h-3 w-3 brightness-0 invert opacity-80">
                        <Image src="/images/social-media-logos/servel-presskit-2026-icon-soundcloud.png" alt="SoundCloud" fill className="object-contain" />
                      </div>
                      <span className="text-[8px] font-extrabold text-white uppercase tracking-widest leading-none">Listen Audio</span>
                    </div>
                  )}
                </div>
                <ExternalLink className="h-3 w-3 text-muted-foreground/30 transition-all group-hover/item:text-accent group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
              </div>
            </div>
          </a>
        ))}
      </div>

      {!showAll && djSets.length > 4 && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="rounded-full border border-border px-6 py-2 text-xs font-medium uppercase tracking-widest text-foreground transition-all duration-200 hover:bg-muted hover:border-accent cursor-pointer"
          >
            Show More Performance
          </button>
        </div>
      )}
    </section>
  );
}
