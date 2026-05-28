import { Section } from "@/components/ui/section";
import { Eyebrow, DisplayMd, Lead } from "@/components/ui/typography";
import Image from "next/image";

export function BeforeAfter() {
  return (
    <Section id="context-kit-compare" variant="dark" act="context" wrap="wide">
      <Eyebrow className="!text-accent-green/70">The Difference</Eyebrow>
      <DisplayMd className="text-text-light">
        Same task.<br />
        Entirely different <em className="!text-accent-green-light">approach.</em>
      </DisplayMd>
      <Lead className="mt-5 !text-text-light/70">
        Without a context kit, every AI session starts from zero  -  the tool knows
        nothing about your team, your project, or your decisions. With one, the AI
        arrives already informed.
      </Lead>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-14">
        {/* Without */}
        <div>
          <div className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-white/30 mb-4">
            Without Context Kit
          </div>
          <div className="rounded-xl overflow-hidden border border-white/[.06] bg-[#111]">
            <Image
              src="/glean-with.gif"
              alt="Empty Glean prompt  -  no project context loaded"
              width={1024}
              height={576}
              className="w-full block max-h-[400px] object-contain"
              unoptimized
            />
          </div>
          <div className="mt-5 p-[18px_22px] rounded-lg bg-accent/[.04] border border-accent/[.07]">
            <div className="font-sans text-[13px] font-bold text-accent/55 mb-1">
              Every session starts cold.
            </div>
            <div className="font-serif text-[13px] leading-[1.65] text-white/30">
              Open Glean, stare at an empty prompt. Manually upload documents,
              re-explain the project, paste Slack threads. 45–90 minutes before
              you get anything useful.
            </div>
          </div>
        </div>

        {/* With */}
        <div>
          <div className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-accent-green mb-4">
            With Context Kit
          </div>
          <div className="rounded-xl overflow-hidden border border-accent-green/20 bg-[#111]">
            <Image
              src="/claude-with.gif"
              alt="Claude Code with context kit  -  reads project files, connects sources, generates status report"
              width={1152}
              height={720}
              className="w-full block"
              unoptimized
            />
          </div>
          <div className="mt-5 p-[18px_22px] rounded-lg bg-accent-green/[.05] border border-accent-green/10">
            <div className="font-sans text-[13px] font-bold text-accent-green-light mb-1">
              One command. Full status report.
            </div>
            <div className="font-serif text-[13px] leading-[1.65] text-white/30">
              Type{" "}
              <code className="font-mono text-xs text-accent-green-light/60 bg-accent-green/10 px-1.5 rounded">
                /status update
              </code>{" "}
               -  the kit reads project files, connects to Google Drive, Figma,
              and Jira, then generates a complete weekly report in seconds.
            </div>
          </div>
        </div>
      </div>

      {/* Time comparison */}
      <div className="flex gap-10 mt-11">
        <div className="flex-1 text-center p-[22px] rounded-lg border border-white/[.04]">
          <div className="font-sans text-[32px] font-bold text-accent/50">
            45–90 min
          </div>
          <div className="font-serif text-xs text-white/25 mt-1">
            setup before each session
          </div>
        </div>
        <div className="flex-1 text-center p-[22px] rounded-lg border border-accent-green/10">
          <div className="font-sans text-[32px] font-bold text-accent-green-light">
            0 min
          </div>
          <div className="font-serif text-xs text-white/25 mt-1">
            context loads automatically
          </div>
        </div>
      </div>
    </Section>
  );
}
