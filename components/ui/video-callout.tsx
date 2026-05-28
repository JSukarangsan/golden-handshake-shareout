"use client";

import { useEffect, useState } from "react";

interface VideoCalloutProps {
  src: string;
  paddingBottom: string;
  eyebrow: string;
  title: string;
  description: string;
}

export function VideoCallout({ src, paddingBottom, eyebrow, title, description }: VideoCalloutProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Card */}
      <div
        className="mt-14 flex items-center gap-6 p-6 rounded-lg border border-white/[.08] bg-white/[.03] cursor-pointer hover:border-white/[.15] transition-colors group"
        onClick={() => setOpen(true)}
      >
        {/* Thumbnail  -  pointer-events disabled so iframe doesn't steal clicks */}
        <div className="w-[200px] h-[112px] rounded-md shrink-0 overflow-hidden relative">
          <div style={{ position: "relative", paddingBottom, height: 0, pointerEvents: "none" }}>
            <iframe
              src={src}
              frameBorder={0}
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            />
          </div>
          {/* Play overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </div>
        <div>
          <div className="font-sans text-[9px] font-bold uppercase tracking-[0.18em] text-[#D4943A] mb-2">
            {eyebrow}
          </div>
          <div className="font-serif text-[17px] font-bold text-text-light leading-[1.3] mb-1.5 group-hover:text-white transition-colors">
            {title}
          </div>
          <div className="font-serif text-[13px] text-text-light/65 leading-[1.55]">
            {description}
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl mx-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white/60 hover:text-white transition-colors font-sans text-sm"
            >
              ✕ close
            </button>
            <div style={{ position: "relative", paddingBottom, height: 0 }}>
              <iframe
                src={`${src}?autoplay=1`}
                frameBorder={0}
                allowFullScreen
                allow="autoplay"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: 8 }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
