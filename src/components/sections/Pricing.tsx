"use client";
import { useState } from "react";
import { useInView } from "@/lib/hooks";
import { Check, Zap, ArrowRight, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 29,
    yearlyPrice: 24,
    description: "Perfect for solo founders and small teams just getting started.",
    color: "#6c63ff",
    features: [
      "Up to 500 contacts",
      "1 user seat",
      "Basic automation flows",
      "Email + LinkedIn sequences",
      "Dashboard analytics",
      "Standard support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    monthlyPrice: 129,
    yearlyPrice: 104,
    description: "For growing teams that need more reach and smarter insights.",
    color: "#a78bfa",
    features: [
      "Up to 5,000 contacts",
      "5 user seats",
      "Advanced automation builder",
      "Multi-channel outreach",
      "Lead scoring + AI optimization",
      "Priority support",
    ],
    cta: "Start Scaling",
    popular: true,
  },
  {
    name: "Pro",
    monthlyPrice: 229,
    yearlyPrice: 187,
    description: "Designed for sales-heavy orgs and enterprise teams.",
    color: "#22d3ee",
    features: [
      "Unlimited contacts",
      "20+ user seats",
      "AI-driven workflows + playbooks",
      "CRM + Slack integrations",
      "Webhooks & API access",
      "Dedicated account manager",
    ],
    cta: "Request Demo",
    popular: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const { ref, inView } = useInView(0.1);

  return (
    <section id="pricing" className="py-28 relative overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
      {/* Glow blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(108,99,255,0.1) 0%, transparent 70%)", filter: "blur(40px)" }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-3">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
            Simple, transparent{" "}
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-lg mb-8">
            No hidden fees. Cancel anytime. Start free for 14 days.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 p-1.5 rounded-xl" style={{ background: "var(--bg-card)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${!yearly ? "bg-accent text-white shadow-lg" : "text-slate-400 hover:text-white"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${yearly ? "bg-accent text-white shadow-lg" : "text-slate-400 hover:text-white"}`}
            >
              Yearly
              <span className="text-xs px-1.5 py-0.5 rounded-full font-bold" style={{ background: "#10b98120", color: "#10b981" }}>
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-7 transition-all duration-700 group ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${plan.popular ? "" : "glow-card"}`}
              style={{
                transitionDelay: `${i * 120}ms`,
                ...(plan.popular ? {
                  background: "linear-gradient(160deg, rgba(108,99,255,0.18) 0%, rgba(167,139,250,0.08) 100%)",
                  border: `1px solid ${plan.color}50`,
                  boxShadow: `0 0 60px rgba(108,99,255,0.2)`,
                } : {}),
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-white"
                    style={{ background: "linear-gradient(135deg, #6c63ff, #a78bfa)" }}
                  >
                    <Star size={11} fill="white" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${plan.color}20`, border: `1px solid ${plan.color}30` }}>
                    <Zap size={14} style={{ color: plan.color }} />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg">Scalepro {plan.name}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{plan.description}</p>

                {/* Price */}
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-display font-extrabold text-white">
                    ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-slate-400 text-sm mb-2">/month</span>
                </div>
                {yearly && (
                  <p className="text-xs text-slate-500 mt-1">
                    Billed annually (${plan.yearlyPrice * 12}/yr)
                  </p>
                )}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`w-full text-center justify-center mb-7 ${plan.popular ? "btn-primary" : "btn-outline"}`}
                style={{ display: "flex" }}
              >
                {plan.cta}
                <ArrowRight size={15} />
              </a>

              {/* Divider */}
              <div className="h-px mb-6" style={{ background: "rgba(255,255,255,0.06)" }} />

              {/* Features */}
              <ul className="flex flex-col gap-3">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-slate-300">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: `${plan.color}20`, border: `1px solid ${plan.color}30` }}
                    >
                      <Check size={11} style={{ color: plan.color }} />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enterprise note */}
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <p className="text-slate-500 text-sm">
            Need something custom?{" "}
            <a href="#contact" className="text-accent-light hover:underline font-medium">
              Talk to our sales team →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
