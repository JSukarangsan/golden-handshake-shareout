import { Rule } from "@/components/ui/typography";

export function Diagnosis() {
  return (
    <section
      id="diagnosis"
      className="section-dark w-full flex flex-col justify-center relative overflow-hidden min-h-screen"
    >
      <div style={{ maxWidth: 920, padding: "88px 80px" }}>
        {/* Pullquote mark */}
        <span className="pq-mark" aria-hidden="true">
          &ldquo;
        </span>

        {/* Pullquote text */}
        <h2 className="pq-text" style={{ color: "var(--text-light)" }}>
          NYT didn&apos;t have an
          <br />
          <em>adoption</em> problem.
          <br />
          It had a <em>value delivery</em> problem.
        </h2>

        <Rule />

        {/* Body paragraphs */}
        <p className="pq-body" style={{ color: "var(--text-ghost)", marginBottom: 24 }}>
          Every team had access to the tools. PMs had completed AI bootcamp.
          There was genuine enthusiasm. But the question nobody had answered
          was: where in the workflow does AI actually change the output? Not
          speed up a task — change what ships.
        </p>
        <p className="pq-body" style={{ color: "var(--text-ghost)" }}>
          The context gap was the answer. Between PM and designer, between
          designer and engineer, between meeting and artifact — context
          degraded at every handoff. AI tools were being used inside each
          discipline in isolation, but the compounding value lived in the
          handoffs. That&apos;s where the pilots were designed to intervene.
        </p>
      </div>
    </section>
  );
}
