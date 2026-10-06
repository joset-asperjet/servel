'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Mail, Copy, Check } from 'lucide-react';

export function ContactSection() {
    const [copiedText, setCopiedText] = useState<string | null>(null);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopiedText(text);
        setTimeout(() => setCopiedText(null), 2000);
    };

    return (
        <section className="border-t border-border px-4 py-16 text-left">
            <div className="mb-10">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    Booking & Inquiries
                </h2>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-2">
                    Management & Direct Connection
                </p>
            </div>

            <div className="w-full max-w-md space-y-4">
                {/* WhatsApp Card */}
                <div className="group relative overflow-hidden rounded border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all hover:border-accent/40 hover:bg-white/[0.08] hover:shadow-[0_0_30px_rgba(var(--accent),0.1)]">
                    <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-4">
                            <div className="bg-accent/10 p-3 rounded-full text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300 flex items-center justify-center h-11 w-11">
                                <div className="relative h-5 w-5">
                                    <Image
                                        src="/images/logos/whatsapp.svg"
                                        alt="WhatsApp"
                                        fill
                                        className="object-contain brightness-0 invert group-hover:brightness-0 group-hover:invert-0 transition-all"
                                    />
                                </div>
                            </div>
                            <div className="text-left">
                                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 block mb-0.5">WhatsApp Chat</span>
                                <p className="text-[13px] font-bold text-foreground tracking-tight">+57 301 738 2335</p>
                            </div>
                        </div>

                        <button
                            onClick={() => handleCopy('+57 301 738 2335')}
                            className="p-2 rounded-lg bg-white/5 border border-white/10 text-muted-foreground hover:text-accent hover:border-accent/40 transition-all active:scale-90"
                            title="Copy Number"
                        >
                            {copiedText === '+57 301 738 2335' ? (
                                <Check className="h-4 w-4 animate-in zoom-in duration-200" />
                            ) : (
                                <Copy className="h-4 w-4" />
                            )}
                        </button>
                    </div>
                    <div className="absolute -inset-x-20 -inset-y-20 bg-accent/5 opacity-0 group-hover:opacity-100 blur-[100px] transition-opacity duration-500 pointer-events-none" />
                </div>

                {/* Email Card */}
                <div className="group relative overflow-hidden rounded border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all hover:border-accent/40 hover:bg-white/[0.08] hover:shadow-[0_0_30px_rgba(var(--accent),0.1)]">
                    <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-4">
                            <div className="bg-accent/10 p-3 rounded-full text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300">
                                <Mail className="h-5 w-5" />
                            </div>
                            <div className="text-left">
                                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 block mb-0.5">Direct Email</span>
                                <p className="text-[13px] font-bold text-foreground tracking-tight">juan7hop@hotmail.com</p>
                            </div>
                        </div>

                        <button
                            onClick={() => handleCopy('juan7hop@hotmail.com')}
                            className="p-2 rounded-lg bg-white/5 border border-white/10 text-muted-foreground hover:text-accent hover:border-accent/40 transition-all active:scale-90"
                            title="Copy Email"
                        >
                            {copiedText === 'juan7hop@hotmail.com' ? (
                                <Check className="h-4 w-4 animate-in zoom-in duration-200" />
                            ) : (
                                <Copy className="h-4 w-4" />
                            )}
                        </button>
                    </div>
                    <div className="absolute -inset-x-20 -inset-y-20 bg-accent/5 opacity-0 group-hover:opacity-100 blur-[100px] transition-opacity duration-500 pointer-events-none" />
                </div>
            </div>
        </section>
    );
}
