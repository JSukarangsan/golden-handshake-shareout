import { Section } from "@/components/ui/section";
import { Eyebrow, Display, Lead, Rule } from "@/components/ui/typography";
import { VideoCallout } from "@/components/ui/video-callout";

export function PlaygroundDemo() {
  return (
    <Section id="playground-demo" variant="dark" act="design" wrap="wide">
      <Eyebrow className="!text-accent-sf/72">Playground Demo</Eyebrow>
      <Display className="!text-text-light">
        See it in<br />
        <em>action.</em>
      </Display>
      <Rule className="!bg-white/15" />
      <Lead className="mt-4 !text-white/72 !max-w-[620px]">
        A full walkthrough of the prototyping playground with the News design team  -  how the environment works, how prototypes are built from Figma designs, and how the team uses it to communicate ideas with stakeholders.
      </Lead>

      <VideoCallout
        src="https://www.loom.com/embed/b0762bde396d436c817ff3acffce06b3"
        paddingBottom="56.25%"
        eyebrow="Watch the Demo"
        title="The Prototyping Playground in action"
        description="Full walkthrough with the News design team  -  from Figma to interactive prototype to stakeholder-ready link."
      />
    </Section>
  );
}
