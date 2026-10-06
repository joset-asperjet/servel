'use client';

import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { useState, useEffect } from 'react'
import { Loader } from '@/components/loader'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>SERVEL | Digital Presskit 2026</title>
        <meta name="description" content="DJ and producer active since 2010, born in Cartago, Valle del Cauca (Colombia) and currently based in Medellín." />
        <meta name="generator" content="v0.app" />

        {/* Canonical */}
        <link rel="canonical" href="https://servel-music.info" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://servel-music.info" />
        <meta property="og:title" content="SERVEL | Digital Presskit 2026" />
        <meta property="og:description" content="DJ and producer active since 2010, born in Cartago, Valle del Cauca (Colombia) and currently based in Medellín." />
        <meta property="og:image" content="https://servel-music.info/images/servel-opengraph.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://servel-music.info" />
        <meta property="twitter:title" content="SERVEL | Digital Presskit 2026" />
        <meta property="twitter:description" content="DJ and producer active since 2010, born in Cartago, Valle del Cauca (Colombia) and currently based in Medellín." />
        <meta property="twitter:image" content="https://servel-music.info/images/servel-opengraph.jpg" />

        {/* Favicon - Musical Note Emoji as SVG */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎵</text></svg>" />
      </head>
      <body className={`font-sans antialiased`}>
        {isLoading ? <Loader /> : children}
        <Analytics />
      </body>
    </html>
  )
}
