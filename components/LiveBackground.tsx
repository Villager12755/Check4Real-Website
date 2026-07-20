/**
 * Lightweight live background — pure CSS transforms/opacity.
 * No canvas, no WebGL. Respects prefers-reduced-motion.
 */
export default function LiveBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Soft base wash */}
      <div className="absolute inset-0 bg-background" />

      {/* Slow drifting mesh blobs */}
      <div className="live-orb live-orb-a" />
      <div className="live-orb live-orb-b" />
      <div className="live-orb live-orb-c" />

      {/* Subtle scanning beam */}
      <div className="live-beam" />

      {/* Fine grid that drifts slowly */}
      <div className="live-grid" />

      {/* Top vignette so header text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/80" />
    </div>
  );
}
