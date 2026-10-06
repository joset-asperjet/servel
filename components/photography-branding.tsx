'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Camera, X, Download, ChevronDown } from 'lucide-react';

const mainPressGallery = [
    { src: "/images/presskit-downloads/artist-photos/artist-photos-main-press-servel-2026-01.avif", label: "SERVEL Press 01" },
    { src: "/images/presskit-downloads/artist-photos/artist-photos-main-press-servel-2026-02.avif", label: "SERVEL Press 02" },
    { src: "/images/presskit-downloads/artist-photos/artist-photos-main-press-servel-2026-03.avif", label: "SERVEL Press 03" },
];

const livePerformanceGallery = [
    { src: "/images/presskit-downloads/performance-photos/artist-photos-live-performance-servel01.avif", label: "Live Performance 01" },
    { src: "/images/presskit-downloads/performance-photos/artist-photos-live-performance-servel02.avif", label: "Live Performance 02" },
    { src: "/images/presskit-downloads/performance-photos/artist-photos-live-performance-servel03.avif", label: "Live Performance 03" },
    { src: "/images/presskit-downloads/performance-photos/artist-photos-live-performance-servel04.avif", label: "Live Performance 04" },
    { src: "/images/presskit-downloads/performance-photos/artist-photos-live-performance-servel05.avif", label: "Live Performance 05" },
    { src: "/images/presskit-downloads/performance-photos/artist-photos-live-performance-servel06.avif", label: "Live Performance 06" },
    { src: "/images/presskit-downloads/performance-photos/artist-photos-live-performance-servel07.avif", label: "Live Performance 07" },
    { src: "/images/presskit-downloads/performance-photos/artist-photos-live-performance-servel08.avif", label: "Live Performance 08" },
    { src: "/images/presskit-downloads/performance-photos/artist-photos-live-performance-servel09.avif", label: "Live Performance 09" },
    { src: "/images/presskit-downloads/performance-photos/artist-photos-live-performance-servel10.avif", label: "Live Performance 10" },
    { src: "/images/presskit-downloads/performance-photos/artist-photos-live-performance-servel11.avif", label: "Live Performance 11" },
    { src: "/images/presskit-downloads/performance-photos/artist-photos-live-performance-servel12.avif", label: "Live Performance 12" },
];

const assets = [
    {
        src: mainPressGallery[0].src,
        alt: "SERVEL Main Press",
        label: "Main Press Photos",
        isGallery: true,
        galleryType: 'main' as const,
    },
    {
        src: livePerformanceGallery[0].src,
        alt: "SERVEL Performance",
        label: "Performance Photos",
        isGallery: true,
        galleryType: 'live' as const,
    },
];

export function PhotographyBranding() {
    const [activeGallery, setActiveGallery] = useState<'main' | 'live' | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const galleries = {
        main: mainPressGallery,
        live: livePerformanceGallery,
    };

    const currentGallery = activeGallery ? (galleries as Record<string, any[]>)[activeGallery] : [];

    const nextImage = () => {
        if (!activeGallery) return;
        setCurrentIndex((prev) => (prev + 1) % currentGallery.length);
    };

    const prevImage = () => {
        if (!activeGallery) return;
        setCurrentIndex((prev) => (prev - 1 + currentGallery.length) % currentGallery.length);
    };

    return (
        <section className="border-t border-border px-4 py-12">
            <div className="mb-8">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    Photography & Gallery
                </h2>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
                    Visual Identity & Live Moments
                </p>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-8">
                {assets.map((asset, idx) => (
                    <div key={idx} className="group relative flex flex-col gap-2">
                        <div
                            onClick={() => {
                                setActiveGallery(asset.galleryType);
                                setCurrentIndex(0);
                            }}
                            className="relative aspect-[4/5] cursor-pointer"
                        >
                            {/* Real Photo Stack effect - Top Right Direction */}
                            <div className="absolute inset-0 translate-x-3 -translate-y-3 overflow-hidden rounded border border-border bg-card transition-transform duration-300 group-hover:translate-x-4 group-hover:-translate-y-4">
                                <Image
                                    src={galleries[asset.galleryType as keyof typeof galleries][2]?.src || galleries[asset.galleryType as keyof typeof galleries][0].src}
                                    alt="Stack Background"
                                    fill
                                    className="opacity-40 object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 translate-x-1.5 -translate-y-1.5 overflow-hidden rounded border border-border bg-card transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">
                                <Image
                                    src={galleries[asset.galleryType as keyof typeof galleries][1]?.src || galleries[asset.galleryType as keyof typeof galleries][0].src}
                                    alt="Stack Background"
                                    fill
                                    className="opacity-60 object-cover"
                                />
                            </div>

                            <div className="relative h-full w-full overflow-hidden rounded border border-border bg-card transition-all duration-300 group-hover:border-accent shadow-xl">
                                <Image
                                    src={asset.src}
                                    alt={asset.alt}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <div className="flex flex-col items-center gap-2">
                                        <Camera className="h-6 w-6 text-white" />
                                        <span className="text-[8px] font-bold uppercase tracking-tighter text-white">View Gallery</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-accent">
                            {asset.label}
                        </p>
                    </div>
                ))}
            </div>

            {/* Gallery Lightbox Slider */}
            {activeGallery && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 backdrop-blur-md animate-in fade-in duration-300">
                    <div className="relative flex h-full w-full max-w-6xl flex-col items-center justify-between p-4 md:p-8">
                        {/* Close Button */}
                        <button
                            onClick={() => setActiveGallery(null)}
                            className="absolute right-4 top-4 z-20 rounded-full bg-white/5 p-3 backdrop-blur-md transition-all hover:bg-white/10 hover:rotate-90"
                        >
                            <X className="h-6 w-6 text-foreground" />
                        </button>

                        {/* Title & Download for active image */}
                        <div className="z-10 flex w-full items-center justify-between md:mb-4">
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-widest text-foreground">
                                    {activeGallery === 'live' ? 'PERFORMANCE ' : ''}{currentGallery[currentIndex].label}
                                </h3>
                                <p className="text-[10px] text-muted-foreground uppercase mt-1 tracking-tighter">Photography Collection 2026</p>
                            </div>
                            <a
                                href={currentGallery[currentIndex].src}
                                download
                                className="flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest text-background transition-all hover:scale-105 active:scale-95 shadow-lg shadow-accent/20"
                            >
                                <Download className="h-3 w-3" />
                                Download HI-RES
                            </a>
                        </div>

                        {/* Main Viewer Area */}
                        <div className="group/viewer relative flex h-full w-full flex-1 items-center justify-center overflow-hidden py-4 md:py-8">
                            {/* Navigation Arrows */}
                            <button
                                onClick={prevImage}
                                className="absolute left-0 z-20 -translate-x-full rounded-full bg-white/5 p-4 backdrop-blur-sm transition-all group-hover/viewer:translate-x-4 hover:bg-white/10"
                            >
                                <ChevronDown className="h-6 w-6 rotate-90 text-foreground" />
                            </button>

                            <button
                                onClick={nextImage}
                                className="absolute right-0 z-20 translate-x-full rounded-full bg-white/5 p-4 backdrop-blur-sm transition-all group-hover/viewer:-translate-x-4 hover:bg-white/10"
                            >
                                <ChevronDown className="h-6 w-6 -rotate-90 text-foreground" />
                            </button>

                            {/* Main Image */}
                            <div className="relative h-full w-full max-w-3xl animate-in zoom-in-95 duration-500">
                                <Image
                                    src={currentGallery[currentIndex].src}
                                    alt={currentGallery[currentIndex].label}
                                    fill
                                    className="object-contain select-none"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="mt-4 flex w-full justify-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
                            {currentGallery.map((img: { src: string; label: string }, idx: number) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded border-2 transition-all duration-300 ${currentIndex === idx ? 'border-accent scale-110 shadow-lg shadow-accent/20' : 'border-white/10 opacity-50 hover:opacity-100'}`}
                                >
                                    <Image
                                        src={img.src}
                                        alt={img.label}
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Specialized Download CTAs */}
            <div className="mt-12 flex flex-col gap-4">
                <a
                    href="/images/presskit-downloads/artist-photos/artist-photos-main-press-servel.zip"
                    download
                    className="flex w-full items-center gap-6 border border-white/10 bg-white/3 p-4 rounded transition-all duration-300 hover:border-accent/60 hover:bg-white/10 group/download shadow-2xl backdrop-blur-md hover:shadow-[0_0_25px_rgba(var(--accent),0.2)]"
                >
                    <div className="bg-accent p-2.5 rounded-full text-background shadow-xl shadow-accent/20 transition-all duration-300 group-hover/download:brightness-125 group-hover/download:shadow-[0_0_20px_rgba(var(--accent),0.5)]">
                        <Download className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col text-left">
                        <span className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-foreground block leading-tight">
                            Main Press Photos
                        </span>
                        <p className="text-[9px] font-bold text-muted-foreground/60 uppercase tracking-widest mt-0.5 group-hover/download:text-accent transition-colors">
                            HD Studio Selection (ZIP)
                        </p>
                    </div>
                </a>

                <a
                    href="/images/presskit-downloads/artist-photos/artist-photos-live-performance-servel.zip"
                    download
                    className="flex w-full items-center gap-6 border border-white/10 bg-white/3 p-4 rounded transition-all duration-300 hover:border-accent/60 hover:bg-white/10 group/download shadow-2xl backdrop-blur-md hover:shadow-[0_0_25px_rgba(var(--accent),0.2)]"
                >
                    <div className="bg-accent p-2.5 rounded-full text-background shadow-xl shadow-accent/20 transition-all duration-300 group-hover/download:brightness-125 group-hover/download:shadow-[0_0_20px_rgba(var(--accent),0.5)]">
                        <Download className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col text-left">
                        <span className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-foreground block leading-tight">
                            Live Performances Photos
                        </span>
                        <p className="text-[9px] font-bold text-muted-foreground/60 uppercase tracking-widest mt-0.5 group-hover/download:text-accent transition-colors">
                            Concert & Stage Gallery (ZIP)
                        </p>
                    </div>
                </a>
            </div>
        </section>
    );
}
