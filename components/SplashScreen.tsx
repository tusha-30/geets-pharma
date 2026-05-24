"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2200);
    const hideTimer = setTimeout(() => setVisible(false), 2800);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="animate-splash-logo flex flex-col items-center">
        <img
          src="/GP_logo.png"
          alt="Geet's Pharmaceutical"
          className="h-24 w-auto object-contain sm:h-32"
        />
        <div className="mt-4 text-center">
          <div className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
            Geet&apos;s
          </div>
          <div className="mt-1 text-xs uppercase tracking-[0.35em] text-brand-600 sm:text-sm">
            Pharmaceutical Pvt. Ltd.
          </div>
        </div>
      </div>
      <p className="animate-splash-tagline mt-8 text-sm font-medium tracking-wide text-brand-700 opacity-0">
        Redefining Healthcare Excellence
      </p>
    </div>
  );
}
