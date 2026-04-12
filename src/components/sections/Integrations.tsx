"use client";
import { useInView } from "@/lib/hooks";
import { ArrowRight } from "lucide-react";

const integrations = [
  { name: "HubSpot", emoji: "🔶", category: "CRM", color: "#f97316" },
  { name: "Salesforce", emoji: "☁️", category: "CRM", color: "#0ea5e9" },
  { name: "Slack", emoji: "💬", category: "Messaging", color: "#8b5cf6" },
  { name: "Zapier", emoji: "⚙️", category: "Automation", color: "#f59e0b" },
  { name: "Stripe", emoji: "⚡", category: "Payments", color: "#6c63ff" },
  { name: "Intercom", emoji: "💼", category: "Support", color: "#22d3ee" },
  { name: "QuickBooks", emoji: "📊", category: "Finance", color: "#10b981" },
  { name: "PayPal", emoji: "💳", category: "Payments", color: "#0284c7" },
  { name: "Shopify", emoji: "🛒", category: "E-commerce", color: "#16a34a" },
  { name: "Mailchimp", emoji: "🐒", category: "Email", color: "#eab308" },
  { name: "Google Analytics", emoji: "📈", category: "Analytics", color: "#ef4444" },
  { name: "Notion", emoji: "⬛", category: "Productivity", color: "#64748b" },
];

export default function Integrations() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="integrations" className="py-28 relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(108,99,255,0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <p className="section-label mb-3">Integration</p>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-5 leading-tight">
              Works Seamlessly With{" "}
              <span className="gradient-text">Your Stack</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Scalepro connects effortlessly with the tools you already use — so you can automate more, sync faster, and scale without disruption.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["CRM", "Email", "Payments", "Analytics", "Automation"].map((cat) => (
                <span
                  key={cat}
                  className="tag-badge"
                >
                  {cat}
                </span>
              ))}
            </div>

            <a href="#pricing" className="btn-primary">
              See All Integrations <ArrowRight size={16} />
            </a>
          </div>

          {/* Right: integration grid */}
          <div
            className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {integrations.map((int, i) => (
                <div
                  key={i}
                  className="glow-card rounded-xl p-3 flex flex-col items-center gap-2 group cursor-default transition-all duration-300 hover:-translate-y-1"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${int.color}15`,
                      border: `1px solid ${int.color}25`,
                    }}
                  >
                    {int.emoji}
                  </div>
                  <p className="text-[10px] text-slate-400 font-medium text-center leading-tight">{int.name}</p>
                  <span
                    className="text-[9px] px-1.5 py-0.5 rounded-full font-semibold"
                    style={{ background: `${int.color}15`, color: int.color }}
                  >
                    {int.category}
                  </span>
                </div>
              ))}
            </div>

            {/* Center Scalepro logo overlay note */}
            <p className="text-center text-slate-500 text-xs mt-5">
              + 50 more integrations available via API & webhooks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
