"use client";
import { useInView } from "@/lib/hooks";
import { Zap, LayoutDashboard, Shield, Rocket, Share2, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Intelligent Execution",
    description: "Our platform continuously enhances results with minimal user input.",
    color: "#6c63ff",
  },
  {
    icon: LayoutDashboard,
    title: "Seamless Control",
    description: "Easily manage tasks from a centralized, intuitive dashboard.",
    color: "#22d3ee",
  },
  {
    icon: Shield,
    title: "Trusted Performance",
    description: "Dependable systems guarantee security and smooth transitions.",
    color: "#10b981",
  },
  {
    icon: Rocket,
    title: "Blazing-Fast Setup",
    description: "No developers needed. Start in minutes with our plug-and-play system.",
    color: "#f59e0b",
  },
  {
    icon: Share2,
    title: "Multi-Channel Touchpoints",
    description: "Scalepro connects through email, SMS, LinkedIn, and more channels.",
    color: "#a78bfa",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description: "Scalable infrastructure that grows with your team without missing a beat.",
    color: "#fb7185",
  },
];

export default function DesignedForImpact() {
  const { ref, inView } = useInView(0.1);

  return (
    <section className="py-28 relative overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
      {/* Decorative */}
      <div
        className="absolute -top-32 right-0 w-[400px] h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #6c63ff 0%, transparent 70%)", filter: "blur(60px)" }}
      />
      <div
        className="absolute -bottom-32 left-0 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #22d3ee 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-3">Designed for Impact</p>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
            Built for results.{" "}
            <span className="gradient-text">Powered by intelligence.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Delivering growth through automation, clarity, and conversion-focused design.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className={`glow-card rounded-2xl p-6 group relative overflow-hidden transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Hover bg */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at top left, ${pillar.color}08 0%, transparent 70%)` }}
                />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${pillar.color}15`,
                    border: `1px solid ${pillar.color}30`,
                  }}
                >
                  <Icon size={20} style={{ color: pillar.color }} />
                </div>

                <h3 className="font-display font-bold text-white text-lg mb-2">
                  {pillar.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {pillar.description}
                </p>

                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ background: pillar.color }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
