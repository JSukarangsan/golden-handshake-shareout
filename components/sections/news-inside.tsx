import { Section } from "@/components/ui/section";
import { Eyebrow, Display, Lead } from "@/components/ui/typography";
import Image from "next/image";

export function NewsInside() {
  return (
    <Section id="news-inside" variant="light" act="design" wrap="wide">
      <Eyebrow>Inside the Playground</Eyebrow>
      <Display>
        Explore, patterns,<br />
        data, and <em>design system.</em>
      </Display>
      <Lead className="mt-4 mb-10">
        The Playground isn&apos;t just a prototyping tool  -  it&apos;s a shared knowledge base. Four sections give designers everything they need without searching through repos, Slack threads, or asking engineering.
      </Lead>

      {/* 2x2 image grid */}
      <div
        className="grid grid-cols-2 gap-[1px]"
        style={{ background: "var(--border)" }}
      >
        {/* Explore */}
        <div className="bg-bg overflow-hidden">
          <div className="max-h-[280px] overflow-hidden">
            <Image
              src="/Screenshot-2026-05-12-at-2.19.13PM.png"
              alt="Explore page  -  prototype workspaces with phone mockups"
              width={1200}
              height={800}
              className="w-full block"
            />
          </div>
          <div className="p-[24px_24px_28px]">
            <div className="font-serif text-[16px] font-bold text-text mb-2">Explore</div>
            <div className="font-serif text-[13.5px] text-text-muted leading-[1.65]">
              A destination for browsing prototypes the team has built. Each workspace shows a live phone mockup  -  click to open, share, or fork into a new direction.
            </div>
          </div>
        </div>

        {/* Patterns */}
        <div className="bg-bg overflow-hidden">
          <div className="max-h-[280px] overflow-hidden">
            <Image
              src="/Screenshot-2026-05-12-at-2.19.22PM.png"
              alt="Patterns page  -  Byline, Pinned item, Story card components with cross-platform mappings"
              width={1200}
              height={800}
              className="w-full block"
            />
          </div>
          <div className="p-[24px_24px_28px]">
            <div className="font-serif text-[16px] font-bold text-text mb-2">Patterns</div>
            <div className="font-serif text-[13.5px] text-text-muted leading-[1.65]">
              Reusable prototype components  -  Byline, Pinned Item, Story Card  -  each with descriptions and cross-platform mapping (web component name, iOS equivalent, Android equivalent).
            </div>
          </div>
        </div>

        {/* Design System */}
        <div className="bg-bg overflow-hidden">
          <div className="max-h-[280px] overflow-hidden">
            <Image
              src="/Screenshot-2026-05-12-at-2.19.30PM.png"
              alt="Design System page  -  47 color tokens, 13 spacing values, web components, design notes"
              width={1200}
              height={800}
              className="w-full block"
            />
          </div>
          <div className="p-[24px_24px_28px]">
            <div className="font-serif text-[16px] font-bold text-text mb-2">Design System</div>
            <div className="font-serif text-[13.5px] text-text-muted leading-[1.65]">
              A front door to the team&apos;s tokens and component libraries. 47 color tokens, 13 spacing values, 8 radius values, web components, and ~3.4k words of design notes.
            </div>
          </div>
        </div>

        {/* Mock Data */}
        <div className="bg-bg overflow-hidden">
          <div className="max-h-[280px] overflow-hidden">
            <Image
              src="/Screenshot-2026-05-12-at-2.19.42PM.png"
              alt="Mock Data page  -  NYT Audio shows dataset with 6 branded shows"
              width={1200}
              height={800}
              className="w-full block"
            />
          </div>
          <div className="p-[24px_24px_28px]">
            <div className="font-serif text-[16px] font-bold text-text mb-2">Mock Data</div>
            <div className="font-serif text-[13.5px] text-text-muted leading-[1.65]">
              Plug-and-play datasets so prototypes feel real. The NYT Audio shows dataset: 6 branded shows with cover artwork, episode metadata, titles, deks, durations.
            </div>
          </div>
        </div>
      </div>

    </Section>
  );
}
