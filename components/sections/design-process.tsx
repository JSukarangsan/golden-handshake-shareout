import { Section } from "@/components/ui/section";
import { Eyebrow, Display } from "@/components/ui/typography";
export function DesignProcess() {
  return (
    <Section id="design-process" variant="light" act="design" wrap="wide">
      <Eyebrow>How the Workflow Changes</Eyebrow>
      <Display>
        How prototypes change<br />
        every conversation<br />
        in the <em>product cycle.</em>
      </Display>

      {/* Before/after table */}
      <table className="ba-table mt-12">
        <thead>
          <tr>
            <th></th>
            <th>Before</th>
            <th>After</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Prototype format</td>
            <td>Figma mocks, noodle-based animations</td>
            <td>Interactive, code-based prototype with shareable URL</td>
          </tr>
          <tr>
            <td>Time to prototype</td>
            <td>1–2 weeks with engineering</td>
            <td>Hours, designer-only</td>
          </tr>
          <tr>
            <td>Stakeholder review</td>
            <td>Narrate over comps; reactions to deck slides</td>
            <td>Click and interact; toggle user states; react to the product</td>
          </tr>
          <tr>
            <td>Engineering effort</td>
            <td>Reconstruct from specs or Figma frames; lots of back-and-forth</td>
            <td>Understand design intent with less meetings; better connect designs with production code</td>
          </tr>
          <tr>
            <td>Handoff</td>
            <td>Figma specs + alignment meetings</td>
            <td>Live link + code branch + compatibility report</td>
          </tr>
          <tr>
            <td>Design system transparency</td>
            <td>Hard-coded values, drift over time. Relies on Code Connect.</td>
            <td>Side-by-side comparison with token matching</td>
          </tr>
        </tbody>
      </table>

      {/* Section transition  -  Context Kits */}
      <a href="#context-kit-intro" className="section-next mt-16">
        <span className="section-next-label">Context as Infrastructure</span>
        <svg className="section-next-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
      </a>
      <div className="h-24" />
    </Section>
  );
}
