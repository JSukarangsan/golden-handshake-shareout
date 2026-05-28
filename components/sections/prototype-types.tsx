import { Section } from "@/components/ui/section";
import { Eyebrow, Display } from "@/components/ui/typography";
import { VideoCallout } from "@/components/ui/video-callout";

export function PrototypeTypes() {
  return (
    <Section id="prototype-types" variant="dark" act="design" wrap="wide">
      <Eyebrow className="!text-accent-sf/75">Design</Eyebrow>

      {/* Header row */}
      <div className="flex items-end gap-14 flex-wrap mb-0">
        <Display className="!text-text-light flex-shrink-0">
          The design process<br />
          isn&apos;t <em>linear.</em>
        </Display>
        <p
          className="font-serif text-[15px] text-text-light/65 leading-[1.75] max-w-[600px] pb-1"
        >
          And neither should prototypes be. We proposed a framework for how ideas can be communicated via code at any stage of the design process, and serve different purposes at each one.
        </p>
      </div>

      {/* Three dd-card grid + SVG */}
      <div className="my-12 pb-7 relative">
        {/* Three prototype type cards */}
        <div className="grid grid-cols-3 gap-0 mb-0 relative z-[2]">
          <div className="dd-card">
            <div className="dd-card-label">01</div>
            <div className="dd-card-headline">Create choices</div>
            <div className="dd-card-title">Prototypes as &ldquo;bets&rdquo;</div>
            <div className="dd-card-body">Disposable UI exploration, sketching, parallel concepts</div>
          </div>
          <div className="dd-card">
            <div className="dd-card-label">02</div>
            <div className="dd-card-headline">Make choices</div>
            <div className="dd-card-title">Alignment artifacts</div>
            <div className="dd-card-body">Matches TPL, user scenario driven, clickable mental models</div>
          </div>
          <div className="dd-card">
            <div className="dd-card-label">03</div>
            <div className="dd-card-headline">Ship</div>
            <div className="dd-card-title">Handoff specs</div>
            <div className="dd-card-body">Engineering implementation docs, components as data</div>
          </div>
        </div>

        {/* Double-diamond SVG with animated pulses */}
        <svg
          viewBox="0 0 1000 280"
          style={{ width: "100%", height: "auto", display: "block", marginTop: "-4px" }}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Hidden motion paths */}
          <path id="dd-d1-rise" d="M60,140 L280,10" fill="none" />
          <path id="dd-d1-fall" d="M280,10 L500,140" fill="none" />
          <path id="dd-d1-drop" d="M60,140 L280,270" fill="none" />
          <path id="dd-d1-climb" d="M280,270 L500,140" fill="none" />
          <path id="dd-d2-rise" d="M500,140 L720,10" fill="none" />
          <path id="dd-d2-fall" d="M720,10 L940,140" fill="none" />
          <path id="dd-d2-drop" d="M500,140 L720,270" fill="none" />
          <path id="dd-d2-climb" d="M720,270 L940,140" fill="none" />
          <path id="dd-baseline" d="M0,140 L1000,140" fill="none" />

          {/* Animated dashed baseline */}
          <line
            x1="0" y1="140" x2="1000" y2="140"
            stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeDasharray="6,6"
            style={{ animation: "ddPulseFlow 1.5s linear infinite" }}
          />

          {/* Diamond 1 */}
          <polygon points="60,140 280,10 500,140 280,270" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" />
          {/* Diamond 2 */}
          <polygon points="500,140 720,10 940,140 720,270" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" />

          {/* Connector dashes from cards to diamond peaks */}
          <line x1="167" y1="0" x2="170" y2="75" stroke="rgba(212,148,58,0.35)" strokeWidth="1" strokeDasharray="4,4" style={{ animation: "ddPulseFlow 2s linear infinite" }} />
          <line x1="500" y1="0" x2="500" y2="138" stroke="rgba(212,148,58,0.35)" strokeWidth="1" strokeDasharray="4,4" style={{ animation: "ddPulseFlow 2s linear infinite" }} />
          <line x1="833" y1="0" x2="830" y2="75" stroke="rgba(212,148,58,0.35)" strokeWidth="1" strokeDasharray="4,4" style={{ animation: "ddPulseFlow 2s linear infinite" }} />

          {/* Pulse dots — upper edges */}
          <circle r="3.5" fill="#D4943A">
            <animateMotion dur="3s" repeatCount="indefinite" begin="0s"><mpath href="#dd-d1-rise" /></animateMotion>
            <animate attributeName="opacity" values="0;0.9;0.9;0" dur="3s" repeatCount="indefinite" begin="0s" />
          </circle>
          <circle r="3.5" fill="#D4943A">
            <animateMotion dur="3s" repeatCount="indefinite" begin="0.8s"><mpath href="#dd-d1-fall" /></animateMotion>
            <animate attributeName="opacity" values="0;0.9;0.9;0" dur="3s" repeatCount="indefinite" begin="0.8s" />
          </circle>
          <circle r="3.5" fill="#D4943A">
            <animateMotion dur="3s" repeatCount="indefinite" begin="1.6s"><mpath href="#dd-d2-rise" /></animateMotion>
            <animate attributeName="opacity" values="0;0.9;0.9;0" dur="3s" repeatCount="indefinite" begin="1.6s" />
          </circle>
          <circle r="3.5" fill="#D4943A">
            <animateMotion dur="3s" repeatCount="indefinite" begin="2.4s"><mpath href="#dd-d2-fall" /></animateMotion>
            <animate attributeName="opacity" values="0;0.9;0.9;0" dur="3s" repeatCount="indefinite" begin="2.4s" />
          </circle>

          {/* Pulse dots — lower edges */}
          <circle r="3" fill="#D4943A" opacity="0.5">
            <animateMotion dur="3.5s" repeatCount="indefinite" begin="0.4s"><mpath href="#dd-d1-drop" /></animateMotion>
            <animate attributeName="opacity" values="0;0.6;0.6;0" dur="3.5s" repeatCount="indefinite" begin="0.4s" />
          </circle>
          <circle r="3" fill="#D4943A" opacity="0.5">
            <animateMotion dur="3.5s" repeatCount="indefinite" begin="1.2s"><mpath href="#dd-d1-climb" /></animateMotion>
            <animate attributeName="opacity" values="0;0.6;0.6;0" dur="3.5s" repeatCount="indefinite" begin="1.2s" />
          </circle>
          <circle r="3" fill="#D4943A" opacity="0.5">
            <animateMotion dur="3.5s" repeatCount="indefinite" begin="2s"><mpath href="#dd-d2-drop" /></animateMotion>
            <animate attributeName="opacity" values="0;0.6;0.6;0" dur="3.5s" repeatCount="indefinite" begin="2s" />
          </circle>
          <circle r="3" fill="#D4943A" opacity="0.5">
            <animateMotion dur="3.5s" repeatCount="indefinite" begin="2.8s"><mpath href="#dd-d2-climb" /></animateMotion>
            <animate attributeName="opacity" values="0;0.6;0.6;0" dur="3.5s" repeatCount="indefinite" begin="2.8s" />
          </circle>

          {/* Baseline pulse */}
          <circle r="2.5" fill="#D4943A">
            <animateMotion dur="5s" repeatCount="indefinite"><mpath href="#dd-baseline" /></animateMotion>
            <animate attributeName="opacity" values="0;0.7;0.7;0" dur="5s" repeatCount="indefinite" />
          </circle>

          {/* Phase labels */}
          <text x="105" y="265" fontFamily="'Libre Franklin',sans-serif" fontSize="9" fontWeight="700" letterSpacing="3" fill="rgba(255,255,255,0.25)" textAnchor="middle">DISCOVER</text>
          <text x="390" y="265" fontFamily="'Libre Franklin',sans-serif" fontSize="9" fontWeight="700" letterSpacing="3" fill="rgba(255,255,255,0.25)" textAnchor="middle">DEFINE</text>
          <text x="610" y="265" fontFamily="'Libre Franklin',sans-serif" fontSize="9" fontWeight="700" letterSpacing="3" fill="rgba(255,255,255,0.25)" textAnchor="middle">DEVELOP</text>
          <text x="895" y="265" fontFamily="'Libre Franklin',sans-serif" fontSize="9" fontWeight="700" letterSpacing="3" fill="rgba(255,255,255,0.25)" textAnchor="middle">DELIVER</text>
        </svg>
      </div>

      {/* Three body-copy grid */}
      <div className="grid grid-cols-3 gap-[1px]" style={{ background: "rgba(255,255,255,0.07)" }}>
        <div className="bg-bg-dark p-[40px_36px_44px]">
          <p className="font-serif text-[14px] text-text-light/65 leading-[1.75]">
            Throwaway exploration. Testing ideas before committing. Built from a brief, a Figma frame, or a text prompt. Run three directions simultaneously. The cost of throwing one away should be near zero.
          </p>
        </div>
        <div className="bg-bg-dark-alt p-[40px_36px_44px]">
          <p className="font-serif text-[14px] text-text-light/65 leading-[1.75]">
            Stakeholder buy-in and research input. A shareable URL with toggleable user states, mock data, and platform primitives. Stakeholders interact with the product — not a slide deck. Decisions happen in the room.
          </p>
        </div>
        <div className="bg-bg-dark p-[40px_36px_44px]">
          <p className="font-serif text-[14px] text-text-light/65 leading-[1.75]">
            Production-ready components. Engineers receive a code branch and a compatibility report — not a Figma file to interpret. The conversation shifts to feasibility and architecture, not translation.
          </p>
        </div>
      </div>

      {/* Video callout */}
      <VideoCallout
        src="https://www.loom.com/embed/5161ea29ea7d47e1bace3e628a8ae271"
        paddingBottom="64.63195691202873%"
        eyebrow="Watch the Walkthrough"
        title="Prototyping with AI end-to-end framework"
        description="Design system alignment, one-click deploy, and how prototypes become code branches engineers can work with."
      />
    </Section>
  );
}
