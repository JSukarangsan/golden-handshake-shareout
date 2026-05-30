import { Section } from "@/components/ui/section";
import { Eyebrow, DisplayMd } from "@/components/ui/typography";

type ResourceItem = {
  label: string;
  href: string;
  meta?: string;
};

type ResourceGroup = {
  title: string;
  icon: React.ReactNode;
  items: ResourceItem[];
};

const IconVideo = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  </svg>
);

const IconCode = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);

const IconBook = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
);

const IconDoc = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
  </svg>
);

const IconChart = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);

const groups: ResourceGroup[] = [
  {
    title: "Demo Videos & Recordings",
    icon: <IconVideo />,
    items: [
      { label: "Prototyping with AI: End-to-End Framework", href: "https://www.loom.com/share/5161ea29ea7d47e1bace3e628a8ae271", meta: "How designers use AI across five milestones" },
      { label: "Prototyping with Storybook-Based Workflow", href: "https://www.loom.com/share/814b8ea99e364be78ead93c0021c8eff", meta: "Storybook / Figma MCP workflow demo" },
      { label: "Context as Infrastructure", href: "https://www.loom.com/share/ef4ace33046044b6ba01810896674f01", meta: "Context Kits" },
      { label: "News Playground Demo", href: "https://www.loom.com/share/b0762bde396d436c817ff3acffce06b3", meta: "News Pilot" },
      { label: "NAPP Native Code Bridge", href: "https://www.loom.com/share/a74cd8bed0334e80873537b43f123043", meta: "NAPP Pilot" },
      { label: "Context Kit Setup  -  Full Walkthrough", href: "https://www.loom.com/share/656927c5fd6c41bcbd4f3a29988eb5f8", meta: "Context Kits" },
    ],
  },
  {
    title: "Playbooks & Dashboards",
    icon: <IconBook />,
    items: [
      { label: "Context Kit Playbook", href: "https://summerfriday.co/nyt-context-playbook", meta: "Password: NYT-context" },
      { label: "Design Prototyping Playbook", href: "https://summerfriday.co/nyt-design-playbook", meta: "Password: NYT-context" },
      { label: "Survey Results Dashboard", href: "/survey/app.html", meta: "Pilot participant survey responses and trend data" },
    ],
  },
  {
    title: "Repos & Code",
    icon: <IconCode />,
    items: [
      { label: "Prototyping Playground  -  Live Site", href: "https://summerfriday.co/nyt-mobile-playground", meta: "Password: NYT-playground" },
      { label: "Prototyping Playground  -  GitHub", href: "https://github.com/JSukarangsan/nyt-mobile-playground", meta: "React + TPL prototype environment (News Pilot)" },
      { label: "Context Kit Repo", href: "https://github.com/JSukarangsan/nyt-product-context-system", meta: "Starter kit, skills, and documentation" },
    ],
  },
  {
    title: "Documents & Decks",
    icon: <IconDoc />,
    items: [
      { label: "Discovery Findings Report", href: "https://docs.google.com/presentation/d/1fTr8Zh5X6mMWUKYWifuNV9ywWIS0O_V-kU_12aT0DOQ/edit?usp=sharing", meta: "Research synthesis from stakeholder interviews and survey" },
      { label: "Context as Infrastructure", href: "https://docs.google.com/presentation/d/1EY-gYMcV2FiWt-w7-23Ea-gLe3Ade4nr/edit?usp=drive_link&ouid=105950527540806627158&rtpof=true&sd=true", meta: "Deck  -  the case for context kits as org infrastructure" },
    ],
  },
];

function ResourceRow({ item }: { item: ResourceItem }) {
  return (
    <a
      href={item.href}
      target={item.href.startsWith("/") || item.href === "#" ? undefined : "_blank"}
      rel={item.href.startsWith("/") || item.href === "#" ? undefined : "noopener noreferrer"}
      className="flex items-start justify-between gap-6 py-4 border-b border-border no-underline group last:border-0"
    >
      <div className="flex-1 min-w-0">
        <span className="font-sans text-[13px] font-semibold text-text group-hover:text-accent-sf transition-colors leading-snug block">
          {item.label}
        </span>
        {item.meta && (
          <span className="font-sans text-[11px] text-text-muted mt-0.5 block leading-snug">
            {item.meta}
          </span>
        )}
      </div>
      <svg
        className="shrink-0 mt-0.5 text-text-muted/30 group-hover:text-accent-sf transition-colors"
        width="14" height="14" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      >
        <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
      </svg>
    </a>
  );
}

export function Resources() {
  return (
    <Section id="resources" variant="light" act="synth" wrap="wide">
      <Eyebrow>Resources</Eyebrow>
      <DisplayMd>
        Everything from<br />
        the <em>engagement.</em>
      </DisplayMd>

      <div className="mt-14 grid grid-cols-2 gap-x-16 gap-y-14">
        {groups.map((group) => (
          <div key={group.title}>
            <div className="flex items-center gap-2.5 mb-1 pb-4 border-b-2 border-text/10">
              <span className="text-text-muted/50">{group.icon}</span>
              <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.20em] text-text-muted">
                {group.title}
              </h3>
            </div>
            <div>
              {group.items.map((item) => (
                <ResourceRow key={item.label} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>

    </Section>
  );
}
