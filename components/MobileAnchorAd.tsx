"use client";
import { useState } from "react";

export default function MobileAnchorAd() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center border-t border-gray-200 bg-white shadow-lg sm:hidden">
      <div className="relative flex h-[60px] w-full max-w-[320px] items-center justify-center">
        <p className="text-xs uppercase tracking-widest text-gray-300">
          Advertisement
        </p>
        {/* Replace the div above with your AdSense <ins> tag targeting anchor/320×50 format */}
      </div>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Close ad"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-gray-400 hover:text-gray-600"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}
