'use client';

import Link from 'next/link';
import Image from 'next/image';

const socials = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/davidservel/',
    logo: '/images/social-media-logos/servel-presskit-2026-icon-instagram.png',
  },
  {
    name: 'SoundCloud',
    url: 'https://soundcloud.com/davidservel',
    logo: '/images/social-media-logos/servel-presskit-2026-icon-soundcloud.png',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@davidservel',
    isYoutube: true,
  },
];

export function SocialLinks() {
  return (
    <section className="border-t border-border px-4 py-16 text-left">
      <div className="mb-10">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
          Social Media
        </h2>
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-2">
          Official Channels & Social Platforms
        </p>
      </div>

      <div className="flex justify-center items-center gap-10 md:gap-14 w-full h-12">
        {socials.map((social) => {
          return (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              title={social.name}
              className="transition-all duration-300 hover:scale-110 group h-full flex items-center justify-center"
            >
              <div className="relative flex items-center justify-center w-auto h-full">
                {social.isYoutube ? (
                  <div className="w-9 h-[26px] flex items-center justify-center bg-white/5 rounded-[6px] border border-white/10 group-hover:border-white/20 transition-all overflow-hidden">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 text-white fill-white opacity-40 group-hover:opacity-100 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] transition-all ml-0.5"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                ) : (
                  <div className="relative h-8 w-8">
                    <Image
                      src={social.logo!}
                      alt={social.name}
                      fill
                      className="object-contain brightness-0 invert opacity-40 group-hover:opacity-100 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] transition-all"
                    />
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
