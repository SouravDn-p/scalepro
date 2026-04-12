"use client";
import { useInView, useCountUp } from "@/lib/hooks";

const stats = [
  {
    prefix: "",
    value: 200,
    suffix: "%",
    label: "Lead Conversion Rate",
    description: "Clients experience over double in just two months.",
    color: "#6c63ff",
  },
  {
    prefix: "",
    value: 95,
    suffix: "%",
    label: "Faster Response Times",
    description: "Automations cut lead follow-up times by over 90%.",
    color: "#22d3ee",
  },
  {
    prefix: "",
    value: 3,
    suffix: "x",
    label: "More Revenue per Client",
    description: "Better nurturing means customers spend more.",
    color: "#10b981",
  },
  {
    prefix: "",
    value: 5000,
    suffix: "+",
    label: "Businesses Trust Us",
    description: "Our platform fuels growth for businesses of all sizes.",
    color: "#f59e0b",
  },
];

function StatCard({ stat, inView }: { stat: typeof stats[0]; inView: boolean }) {
  const count = useCountUp(stat.value, 2200, inView);
  const display = stat.value >= 1000 ? count.toLocaleString() : count;

  return (
    <div
      className="glow-card rounded-2xl p-8 flex flex-col items-center text-center relative overflow-hidden shine-effect group"
      style={{ borderColor: `${stat.color}20` }}
    >
      {/* Bg glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at center, ${stat.color}08 0%, transparent 70%)` }}
      />

      <div
        className="text-5xl md:text-6xl font-display font-extrabold mb-3 transition-all duration-300"
        style={{ color: stat.color }}
      >
        {stat.prefix}{display}{stat.suffix}
      </div>

      <h3 className="font-display font-bold text-white text-lg mb-2">{stat.label}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{stat.description}</p>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 opacity-50"
        style={{ background: `linear-gradient(to right, transparent, ${stat.color}, transparent)` }}
      />
    </div>
  );
}

export default function Stats() {
  const { ref, inView } = useInView(0.15);

  return (
    <section className="py-28" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-3">Our Statistics</p>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
            Proven results you{" "}
            <span className="gradient-text">can measure</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Real numbers from real businesses using Scalepro every day.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <StatCard stat={stat} inView={inView} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
