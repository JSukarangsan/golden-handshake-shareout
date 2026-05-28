import { Section } from "@/components/ui/section";
import { Eyebrow, Display, Lead, Rule } from "@/components/ui/typography";

export function DesignPilotIntro() {
  return (
    <Section
      id="design-pilot-intro"
      variant="custom"
      act="design"
      wrap="normal"
      style={{ background: "#B37322" }}
    >
      <Eyebrow className="!text-white/55">Pilot 01  -  Design Prototyping</Eyebrow>
      <Display className="!text-white [&_em]:!text-[#FFE0A0]">
        Prototyping as a<br />
        communication tool  - <br />
        not a <em>production step.</em>
      </Display>
      <Rule className="!bg-white/15 !my-7" />
      <Lead className="!text-white/80 !max-w-[620px]">
        Designers scored the lowest AI confidence of any function  -  4.5 out of 10. AI tools had no access to TPL, so every prototype came out as generic React. But the bigger problem was when prototypes showed up: only at the end, to spec engineering work  -  not earlier, where they could drive alignment and eliminate weeks of iteration.
      </Lead>
      <Lead className="!text-white/80 !max-w-[620px] mt-6">
        The reframe: a prototype isn't a production artifact. It's a richer form of communication. A live URL in Slack replaces a narration. An engineer asks "is this feasible?" against something real. A stakeholder reacts to a product on their phone, not a deck slide. We ran two pilots to test this  -  one with a team already at the frontier, one starting from scratch. Both arrived at the same outcome.
      </Lead>

      {/* Stories split grid */}
      <div
        className="mt-14 rounded grid overflow-hidden"
        style={{
          background: "var(--bg-dark)",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "auto",
        }}
      >
        {/* NAPP panel */}
        <div
          className="flex flex-col justify-start border-r"
          style={{ borderColor: "var(--border-dark)" }}
        >
          <div className="p-[36px_44px_44px]">
            <div className="story-tag">NAPP Pilot  -  Advanced Team</div>
            <div className="story-hed">Already producing impressive code-based prototypes.</div>
            <p className="story-body">
              Lindsey had a working Figma-to-Claude Code pipeline impressing senior leadership. The question was whether it could scale  -  to the rest of the team, to the design system, to shareable infrastructure.
            </p>
          </div>
        </div>

        {/* News panel */}
        <div className="flex flex-col justify-start">
          <div className="p-[36px_44px_44px]">
            <div className="story-tag">News Pilot  -  Emerging Team</div>
            <div className="story-hed">Starting from a different place entirely.</div>
            <p className="story-body">
              The News Multimodal Team worked mostly in Figma. Claude Code access arrived the week the pilot started. Prototyping was slow, alignment could take months, and native handoff required an extra translation layer.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
