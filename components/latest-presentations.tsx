'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Calendar, Clock, LayoutGrid, List } from 'lucide-react';

const presentations = [
  {
    date: "March 2025",
    fullDate: "29.03.25",
    artist: "Ferry Corsten",
    city: "Antioquia",
    time: "10:00 PM",
    image: "/images/events/david-servel-ferry-corsten.jpg",
  },
  {
    date: "September 2023",
    fullDate: "01.09.23",
    artist: "Cassian",
    city: "Antioquia",
    time: "11:00 PM",
    image: "/images/events/david-servel-cassian.jpg",
  },
  {
    date: "December 2023",
    fullDate: "16.12.23",
    artist: "Agents of Time",
    city: "Antioquia",
    time: "10:00 PM",
    image: "/images/events/david-servel-agents-of-time.jpg",
  },
  {
    date: "April 2023",
    fullDate: "14.04.23",
    artist: "Argy",
    city: "Antioquia",
    time: "09:00 PM",
    image: "/images/events/david-servel-argy.jpg",
  },
  {
    date: "September 2025",
    fullDate: "20.09.25",
    artist: "Markus Schulz",
    city: "Antioquia",
    time: "10:00 PM",
    image: "/images/events/david-servel-markuz-schulz.jpg",
  },
  {
    date: "December 2025",
    fullDate: "21.12.25",
    artist: "Thomas Schumacher",
    city: "Antioquia",
    time: "11:00 PM",
    image: "/images/events/david-servel-thomas-schumacher.jpg",
  },
  {
    date: "August 2025",
    fullDate: "30.08.25",
    artist: "Alex Stein",
    city: "Antioquia",
    time: "10:00 PM",
    image: "/images/events/david-servel-alexstein.jpg",
  },
  {
    date: "July 2025",
    fullDate: "26.07.25",
    artist: "19:26",
    city: "Antioquia",
    time: "10:00 PM",
    image: "/images/events/david-servel-19-56.jpg",
  },
  {
    date: "April 2025",
    fullDate: "30.04.25",
    artist: "Silver Panda",
    city: "Antioquia",
    time: "10:00 PM",
    image: "/images/events/david-servel-silver-panda.jpg",
  },
  {
    date: "July 2024",
    fullDate: "05.07.24",
    artist: "Kas:st",
    city: "Antioquia",
    time: "11:00 PM",
    image: "/images/events/david-servel-kasst.jpg",
  },
];

export function LatestPresentations() {
  const [viewMode, setViewMode] = useState<'scroll' | 'list'>('scroll');

  return (
    <section className="border-t border-border px-0 py-12">
      <div className="mb-8 px-4 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            LATEST PRESENTATIONS
          </h2>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
            ROOTS & PERFORMANCE ARCHIVE
          </p>
        </div>
        <div className="flex gap-1.5">
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded transition-all duration-300 ${viewMode === 'list' ? 'bg-[#7D8FA9]/30 text-white' : 'text-muted-foreground/40 hover:text-white'}`}
          >
            <List className="h-[18px] w-[18px]" strokeWidth={1.5} />
          </button>
          <button
            onClick={() => setViewMode('scroll')}
            className={`p-2 rounded transition-all duration-300 ${viewMode === 'scroll' ? 'bg-[#7D8FA9]/30 text-white' : 'text-muted-foreground/40 hover:text-white'}`}
          >
            <LayoutGrid className="h-[18px] w-[18px]" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div className={
        viewMode === 'scroll' 
          ? "flex overflow-x-auto gap-4 px-4 pb-8 scrollbar-hide snap-x snap-mandatory" 
          : "grid grid-cols-1 gap-4 px-4 pb-8"
      }>
        {presentations.map((event, idx) => (
          <div key={idx} className={`group flex flex-col gap-3 rounded-lg border border-white/5 bg-[#0F0F0F] p-3 shadow-2xl transition-all duration-500 hover:border-white/10 hover:bg-[#141414] ${viewMode === 'scroll' ? 'min-w-[260px] snap-start' : 'w-full'}`}>
            {/* Flyer Image Container - 1080x1440 (3:4 Ratio) */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md bg-black shadow-inner">
              <Image
                src={event.image}
                alt={event.artist}
                fill
                className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
              />
              
              {/* Subtle Gradient for legibility - very light */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-20" />
            </div>

            {/* Event Info below flyer */}
            <div className="flex flex-col gap-1 py-1">
              <h3 className="text-[14px] font-bold text-white tracking-tight leading-tight uppercase font-mono">
                {event.artist}
              </h3>
              
              <div className="flex flex-col gap-1.5 opacity-70">
                <div className="flex items-center gap-2 text-[#7D8FA9]">
                  <Calendar className="h-3.5 w-3.5" />
                  <span className="text-[11px] font-bold tracking-widest">{event.fullDate}</span>
                </div>
                <div className="text-[9px] text-muted-foreground uppercase tracking-widest font-medium">
                  {event.date}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
