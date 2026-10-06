'use client';

import { useState } from 'react';
import Image from 'next/image';

const content = {
  es: {
    paragraphs: [
      "DJ y productor activo desde 2010, nacido en Cartago, Valle del Cauca, y actualmente radicado en Medellín, Colombia. Su proyecto artístico se define por una visión clara del club sound, construida a partir de influencias del Trance, Techno, Progressive y House, desarrollando una identidad sólida y adaptable a diferentes contextos de pista.",
      "En la actualidad, su propuesta se centra en una fusión entre Trance de los 90s y Techno Peak Time, recuperando la energía, melodía y carácter hipnótico del trance clásico, integrados con la potencia y estructura del techno contemporáneo. Sus sets están diseñados con un enfoque narrativo, priorizando tensión, evolución y momentos de alto impacto en el dancefloor.",
      "A lo largo de su carrera ha compartido escenario con artistas internacionales como Ferry Corsten, Markus Schulz, Thomas Schumacher, Alex Stein, Agents Of Time, Argy, Cassian y Ubbah, consolidando su presencia dentro de la escena electrónica y reforzando su proyección internacional."
    ],
    ctaExpanded: "Cerrar Biografía",
    ctaCollapsed: "Leer biografía completa",
    title: "Biografía",
    subtitle: "Trayectoria y Visión Artística"
  },
  en: {
    paragraphs: [
      "DJ and producer active since 2010, born in Cartago, Valle del Cauca (Colombia) and currently based in Medellín. His project is defined by a clear club-focused vision, shaped by influences from Trance, Techno, Progressive and House, resulting in a solid and adaptable sound identity.",
      "His current direction blends 90s Trance with Peak Time Techno, drawing on the melodic drive, hypnotic energy and emotional intensity of classic trance, combined with the power and structure of contemporary techno. His sets are built with a narrative approach, emphasizing tension, progression and high-impact moments on the dancefloor.",
      "Throughout his career, he has shared the stage with internationally recognized artists such as Ferry Corsten, Markus Schulz, Thomas Schumacher, Alex Stein, Agents Of Time, Argy, Cassian and Ubbah, reinforcing his position within the global electronic music circuit."
    ],
    ctaExpanded: "Close Biography",
    ctaCollapsed: "Read Full Bio",
    title: "Biography",
    subtitle: "The Journey & Artistic Vision"
  }
};

export function Biography() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [isExpanded, setIsExpanded] = useState(false);

  const t = content[lang];

  return (
    <section className="border-t border-border px-4 py-12 max-w-5xl mx-auto" id="biography">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            {t.title}
          </h2>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
            {t.subtitle}
          </p>
        </div>

        {/* Language Toggle */}
        <div className="flex gap-1 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-sm">
          <button
            onClick={() => setLang('es')}
            className={`px-3 py-1 text-[9px] font-bold uppercase tracking-tighter rounded-full cursor-pointer transition-all duration-300 ${lang === 'es'
              ? 'bg-accent text-background shadow-lg shadow-accent/20'
              : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
              }`}
          >
            ES
          </button>
          <button
            onClick={() => setLang('en')}
            className={`px-3 py-1 text-[9px] font-bold uppercase tracking-tighter rounded-full cursor-pointer transition-all duration-300 ${lang === 'en'
              ? 'bg-accent text-background shadow-lg shadow-accent/20'
              : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
              }`}
          >
            EN
          </button>
        </div>
      </div>

      <div className="relative">
        {/* First paragraph - always visible */}
        <p className="text-sm leading-relaxed text-muted-foreground text-justify">
          {t.paragraphs[0]}
        </p>

        {isExpanded ? (
          <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-500">
            {/* Editorial Image */}
            <div className="float-left mr-4 mb-2 w-[110px] sm:w-[150px] md:w-[200px]">
              <div className="relative aspect-[3/4] overflow-hidden shadow-2xl rounded border border-white/10 group">
                <Image
                  src="/images/servel-presskit-2026-biography-photo.avif"
                  alt="SERVEL"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground text-justify mb-6">
              {t.paragraphs[1]}
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground text-justify">
              {t.paragraphs[2]}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-[1px] flex-1 bg-border/30" />
              <button
                onClick={() => setIsExpanded(false)}
                className="rounded-full border border-border px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground hover:border-accent whitespace-nowrap"
              >
                {t.ctaExpanded}
              </button>
              <div className="h-[1px] flex-1 bg-border/30" />
            </div>
          </div>
        ) : (
          <div className="mt-6 flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-border/50" />
            <button
              onClick={() => setIsExpanded(true)}
              className="rounded-full border border-border px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-foreground transition-all duration-200 hover:bg-muted hover:border-accent whitespace-nowrap shadow-lg hover:shadow-accent/10"
            >
              {t.ctaCollapsed}
            </button>
            <div className="h-[1px] flex-1 bg-border/50" />
          </div>
        )}
        <div className="clear-both" />
      </div>
    </section>
  );
}
