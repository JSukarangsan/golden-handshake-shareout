import { Section } from "@/components/ui/section";
import { Eyebrow, Display, Lead, Rule } from "@/components/ui/typography";

export function NappDetail() {
  return (
    <Section id="napp-detail" variant="dark" act="design" wrap="wide">
      <Eyebrow className="!text-accent-sf/75">NAPP Pilot</Eyebrow>
      <Display className="!text-text-light">
        The NAPP team was already<br />
        producing prototypes. We made them<br />
        design-system aligned and <em>shareable.</em>
      </Display>
      <Rule className="!bg-white/15" />
      <Lead className="mt-4 !max-w-[680px] !text-text-light/70">
        Lindsey&apos;s Figma-to-Claude Code pipeline was already impressing senior leadership  -  the prototypes were real. But they lived on her laptop, the output didn&apos;t match NYT&apos;s design system, and the workflow couldn&apos;t transfer to the rest of the team. We closed those three gaps: Storybook integration for design system alignment, one-click deploy so prototypes become shareable URLs, and a documented workflow any designer on the team can follow.
      </Lead>
    </Section>
  );
}
