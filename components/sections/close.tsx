export function Close() {
  return (
    <footer
      id="close"
      style={{
        borderTop: "1px solid var(--border)",
        padding: "28px 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "24px",
      }}
    >
      <span
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "13px",
          fontWeight: 700,
          color: "var(--text)",
          letterSpacing: "-0.01em",
        }}
      >
        Summer Friday &amp; Partners{" "}
        <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>×</span>{" "}
        The New York Times
      </span>
      <span
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "12px",
          fontStyle: "italic",
          color: "var(--text-muted)",
        }}
      >
        Jon Sukarangsan, Summer Friday &amp; Partners  -  Prepared May 2026
      </span>
    </footer>
  );
}
