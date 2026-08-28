export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-canvas" aria-hidden="true">
      <div className="noise-overlay absolute inset-0" />
      <div className="grid-bg absolute inset-0 opacity-80" />

      {/* Subtle teal atmosphere — structural, not neon */}
      <div
        className="absolute -left-48 top-0 h-[600px] w-[600px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(48, 184, 191, 0.3), transparent 70%)" }}
      />
      {/* Copper grounding blur — decorative */}
      <div
        className="absolute -right-48 bottom-0 h-[400px] w-[400px] rounded-full opacity-15 blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(170, 102, 57, 0.2), transparent 70%)" }}
      />
    </div>
  );
}
