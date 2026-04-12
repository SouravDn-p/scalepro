"use client";
import { useInView } from "@/lib/hooks";
import { Magnet, Bot, BarChart2, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Magnet,
    title: "Turn visitors into leads instantly",
    description:
      "Smart pop-ups and forms grab attention at the perfect moment. Customize triggers based on scroll depth, exit intent, or time on page.",
    color: "#6c63ff",
  },
  {
    number: "02",
    icon: Bot,
    title: "Nurture leads on autopilot",
    description:
      "AI-driven emails and reminders ensure you never miss an opportunity. Sequences adapt based on user behavior for maximum relevance.",
    color: "#22d3ee",
  },
  {
    number: "03",
    icon: BarChart2,
    title: "Know what's working, in real time",
    description:
      "See where leads come from and how they convert — no guesswork. Our smart dashboard surfaces insights before you even need to ask.",
    color: "#10b981",
  },
];

export default function HowItWorks() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="how-it-works" className="py-28 relative overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
      {/* Background decoration */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none opacity-30"
        style={{ background: "radial-gradient(circle, rgba(108,99,255,0.08) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-3">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
            What can you achieve with{" "}
            <span className="gradient-text">Scalepro?</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Our platform brings lead capture, automated follow-ups, and smart analytics together in one seamless experience.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div
            className="absolute top-[52px] left-0 right-0 h-px hidden lg:block"
            style={{ background: "linear-gradient(to right, transparent, rgba(108,99,255,0.3), rgba(34,211,238,0.3), rgba(16,185,129,0.3), transparent)" }}
          />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className={`relative group transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  {/* Number circle */}
                  <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div
                      className="w-[104px] h-[104px] rounded-2xl flex flex-col items-center justify-center mb-8 relative z-10 transition-all duration-300 group-hover:scale-105"
                      style={{
                        background: `${step.color}12`,
                        border: `2px solid ${step.color}30`,
                      }}
                    >
                      <Icon size={28} style={{ color: step.color }} />
                      <span
                        className="text-xs font-bold font-display mt-1"
                        style={{ color: step.color }}
                      >
                        STEP {step.number}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {step.description}
                    </p>

                    <a
                      href="#features"
                      className="mt-5 text-sm font-semibold flex items-center gap-1 transition-all duration-200 group-hover:gap-2"
                      style={{ color: step.color }}
                    >
                      Learn more <ArrowRight size={14} />
                    </a>
                  </div>

                  {/* Arrow between steps */}
                  {i < steps.length - 1 && (
                    <div className="hidden md:flex absolute top-12 -right-4 z-20 items-center justify-center w-8 h-8">
                      <ArrowRight size={16} className="text-slate-600" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
