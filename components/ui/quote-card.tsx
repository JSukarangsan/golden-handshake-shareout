export function QuoteCard({
  name,
  quote,
  variant = "positive",
}: {
  name: string;
  quote: string;
  variant?: "positive" | "concern";
}) {
  const isPositive = variant === "positive";
  return (
    <div
      className="p-[20px_22px] rounded-lg border"
      style={{
        background: isPositive ? "rgba(26,123,106,0.04)" : "rgba(208,2,27,0.03)",
        borderColor: isPositive ? "rgba(26,123,106,0.12)" : "rgba(208,2,27,0.08)",
      }}
    >
      <p className="font-serif text-[14px] leading-[1.65] text-text mb-3">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="font-sans text-[11px] font-semibold text-text-muted tracking-[0.03em]">
         -  {name}
      </div>
    </div>
  );
}
