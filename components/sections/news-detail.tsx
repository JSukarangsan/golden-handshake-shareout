import { Section } from "@/components/ui/section";
import { Eyebrow, Display, Lead, Rule } from "@/components/ui/typography";

export function NewsDetail() {
  return (
    <Section id="news-detail" variant="dark2" act="design" wrap="wide">
      <div className="grid gap-16" style={{ gridTemplateColumns: "1fr 340px", alignItems: "start" }}>
        {/* Main content */}
        <div>
          <Eyebrow className="!text-accent-sf/72">What is a Prototyping Playground?</Eyebrow>
          <Display className="!text-text-light">
            Democratized prototyping<br />
            gives rise to a new type<br />
            of <em>environment.</em>
          </Display>
          <Rule className="!bg-white/15" />
          <Lead className="mt-4 !text-white/72 !max-w-none">
            When prototyping was expensive  -  requiring engineering time, specialized tooling, or weeks of iteration  -  it stayed locked to the end of the process. AI has collapsed that cost. Designers, PMs, and researchers can now produce interactive, shareable prototypes without writing code or waiting for a sprint. That shift doesn&apos;t just speed things up. It changes who participates, when ideas get tested, and what a &ldquo;deliverable&rdquo; even looks like.
          </Lead>
          <Lead className="mt-6 !text-white/72 !max-w-none">
            The result is a new category of tool emerging across the industry: shared prototyping environments pre-loaded with a team&apos;s design system, data, and platform primitives. We call this a <strong className="text-text-light">Prototyping Playground</strong>. We built one for the News Multimodal Team. A designer describes what they want, and gets an interactive prototype on a shareable URL, built on real NYT components.
          </Lead>
          <div className="mt-8 rounded-[6px] border-l-[3px] border-accent-sf px-6 py-5" style={{ background: "rgba(255,255,255,0.04)" }}>
            <p className="font-serif text-[15px] leading-[1.75] text-white/80">
              What we&apos;ve delivered is a shell and an open-source repository  -  a starting point, not a finished product. It&apos;s designed to be cloned, forked, and made the team&apos;s own. A non-engineer can take it, customize the components, swap in new data, and extend it using tools like Cursor or Claude Code. The infrastructure is set up  -  what remains is creative, not technical.
            </p>
          </div>
        </div>

        {/* Industry sidebar */}
        <aside
          className="mt-20 p-[32px_28px] rounded-[6px] border"
          style={{
            background: "rgba(255,255,255,0.04)",
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          <div
            className="font-sans text-[9px] font-bold uppercase mb-6"
            style={{ letterSpacing: "0.18em", color: "rgba(255,255,255,0.3)" }}
          >
            Who else is doing this
          </div>

          {/* Notion */}
          <div className="mb-7">
            <div className="font-serif text-[15px] font-bold text-text-light mb-2">Notion</div>
            <p
              className="font-serif text-[13px] leading-[1.65] mb-2"
              style={{ color: "rgba(240,237,231,0.55)" }}
            >
              Designer Brian Lovin built a single Next.js playground the entire design team shares. Custom Claude Code slash commands extract Figma tokens, generate code, and deploy  -  he hasn&apos;t written frontend code in three months.
            </p>
            <a
              href="https://www.youtube.com/watch?v=s4HGbIhUgVo&themeRefresh=1"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[11px] font-semibold no-underline"
              style={{ color: "#D4943A", letterSpacing: "0.03em" }}
            >
              Brian Lovin on YouTube →
            </a>
          </div>

          <div className="w-full h-px mb-7" style={{ background: "rgba(255,255,255,0.06)" }} />

          {/* Stripe */}
          <div className="mb-7">
            <div className="font-serif text-[15px] font-bold text-text-light mb-2">Stripe</div>
            <p
              className="font-serif text-[13px] leading-[1.65] mb-2"
              style={{ color: "rgba(240,237,231,0.55)" }}
            >
              Protodash emulates the actual Stripe Dashboard using production components and real data. An AI sidebar lets anyone modify prototypes in real time. Teams now bring interactive prototypes to meetings instead of Figma files.
            </p>
            <a
              href="https://www.youtube.com/watch?v=hQFEAZK__q0"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[11px] font-semibold no-underline"
              style={{ color: "#D4943A", letterSpacing: "0.03em" }}
            >
              Owen Williams on Protodash →
            </a>
          </div>

          <div className="w-full h-px mb-7" style={{ background: "rgba(255,255,255,0.06)" }} />

          {/* Rippling */}
          <div>
            <div className="font-serif text-[15px] font-bold text-text-light mb-2">Rippling</div>
            <p
              className="font-serif text-[13px] leading-[1.65] mb-2 text-text-ghost"
            >
              Internal prototyping environment connected to their component library. Designers generate interactive prototypes that speak the same language as production code, eliminating the translation layer between design and engineering.
            </p>
          </div>
        </aside>
      </div>
    </Section>
  );
}
