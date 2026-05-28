export function Hero() {
  return (
    <section id="hero" className="section-light w-full min-h-screen flex flex-col relative overflow-hidden">
      {/* Hero body */}
      <div className="flex-1 flex flex-col justify-center px-20 py-[80px]">
        {/* Date line */}
        <span className="hero-animate block font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-text-muted mb-9" style={{ animationDelay: "0ms" }}>
          H1 2026
        </span>

        {/* Hero headline */}
        <h1 className="hero-animate hero-hed" style={{ animationDelay: "100ms" }}>
          Closing
          <br />
          the{" "}
          <span className="italic" style={{ fontStyle: "italic", color: "var(--accent)" }}>
            Context
          </span>
          <br />
          Gap
        </h1>

        {/* Deck */}
        <p className="hero-animate font-serif text-[clamp(1rem,1.4vw,1.22rem)] font-normal leading-[1.70] text-text-muted max-w-[520px] mb-12" style={{ animationDelay: "220ms" }}>
          The Golden Handshake project set out to understand how The Times
          modernizes the way it builds and ships products — focusing on the
          cross-functional handoffs where context is lost, decisions erode,
          and velocity slows.
        </p>

        {/* Scroll cue */}
        <a
          href="#overview"
          className="hero-animate inline-flex items-center gap-3 font-sans text-[13px] font-medium tracking-[0.10em] uppercase text-text-muted no-underline hover:text-text transition-colors cursor-pointer"
          style={{ animationDelay: "340ms" }}
        >
          Scroll to read
          <span className="inline-block animate-[bob_1.8s_ease-in-out_infinite] text-lg">
            ↓
          </span>
        </a>
      </div>

      {/* Footer bar — snapped to bottom */}
      <div className="hero-animate border-t border-border px-20 py-6 flex items-center justify-between" style={{ animationDelay: "460ms" }}>
        <div className="flex items-center gap-[14px]">
          <span
            className="font-serif"
            style={{
              fontSize: "20px",
              fontWeight: 900,
              letterSpacing: "-0.01em",
              color: "var(--text)",
            }}
          >
            The New York Times
          </span>
          <span className="text-[13px] text-text-muted font-light">×</span>
          <span
            className="font-sans font-bold uppercase text-accent-sf"
            style={{ fontSize: "11px", letterSpacing: "0.14em" }}
          >
            Summer Friday &amp; Partners
          </span>
        </div>
      </div>
    </section>
  );
}
