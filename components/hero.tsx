import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background">

      <Image
        src="/images/servel-presskit-2026.avif"
        alt="Artist Portrait"
        fill
        className="object-cover"
        priority
      />

      {/* Top vignette for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none" />

      {/* Bottom transition: Deep gradient to background and strong backdrop blur */}
      <div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-[40vh] backdrop-blur-xl [mask-image:linear-gradient(to_top,black,transparent)] pointer-events-none z-10" />

      <div className="absolute inset-0 flex items-end justify-center pb-12 md:pb-20 pointer-events-none z-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            SERVEL
          </h1>
          <p className="mt-2 text-[9px] md:text-[10px] font-medium uppercase tracking-[0.5em] text-white/50 drop-shadow-md">
            Digital Presskit 2026 V 1.0
          </p>
        </div>
      </div>
    </section>
  );
}
