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
      { label: "Prototyping with AI — End-to-End Framework", href: "#", meta: "Design Pilots" },
      { label: "Context as Infrastructure", href: "#", meta: "Context Kits" },
      { label: "News Playground Demo", href: "#", meta: "News Pilot" },
      { label: "NAPP Native Code Bridge", href: "#", meta: "NAPP Pilot" },
      { label: "Context Kit Setup — Full Walkthrough", href: "#", meta: "Context Kits" },
      { label: "Sync-Context Skill Demo", href: "#", meta: "Context Kits" },
    ],
  },
  {
    title: "Playbooks",
    icon: <IconBook />,
    items: [
      { label: "Context Kit Playbook", href: "#", meta: "How to set up, maintain, and scale a context kit for your mission" },
      { label: "Design Prototyping Playbook", href: "#", meta: "Create / Make / Ship — the end-to-end AI prototyping workflow" },
    ],
  },
  {
    title: "Repos & Code",
    icon: <IconCode />,
    items: [
      { label: "Prototyping Playground — GitHub", href: "#", meta: "React + TPL prototype environment (News Pilot)" },
      { label: "NAPP Prototype Repo", href: "#", meta: "Figma → React+TPL → SwiftUI pipeline" },
      { label: "Context Kit Repo", href: "#", meta: "Starter kit, skills (sync-context, exec-preflight, status-report), and documentation" },
    ],
  },
  {
    title: "Dashboards",
    icon: <IconChart />,
    items: [
      { label: "Survey Results Dashboard", href: "#", meta: "Pilot participant survey responses and trend data" },
    ],
  },
  {
    title: "Documents & Decks",
    icon: <IconDoc />,
    items: [
      { label: "Discovery Findings Report", href: "#", meta: "Research synthesis from 12 stakeholder interviews" },
      { label: "Context as Infrastructure", href: "#", meta: "Deck — the case for context kits as org infrastructure" },
      { label: "Context Kit Prep", href: "#", meta: "Deck — getting your mission ready to adopt a context kit" },
      { label: "Context Kit Pilot Overview", href: "#", meta: "Deck — Cooking team pilot setup, outcomes, and lessons" },
    ],
  },
];

function ResourceRow({ item }: { item: ResourceItem }) {
  return (
    <a
      href={item.href}
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
