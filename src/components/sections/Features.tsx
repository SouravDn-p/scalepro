"use client";
import { useState } from "react";
import { useInView } from "@/lib/hooks";
import { Bot, BarChart2, Mail, GitBranch, Plug, ChevronRight } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Follow-ups",
    description: "Automated, intelligent follow-ups that engage leads at the right time — no manual effort needed.",
    color: "#6c63ff",
    preview: (
      <div className="space-y-3">
        {[
          { time: "1h after signup", msg: "Welcome! Here's how to get started…", status: "Sent" },
          { time: "Day 3", msg: "Did you know you can automate your funnel?", status: "Opened" },
          { time: "Day 7", msg: "You've captured 12 new leads this week 🎉", status: "Clicked" },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-xs text-slate-500 mb-0.5">{item.time}</p>
              <p className="text-sm text-slate-300 truncate">{item.msg}</p>
            </div>
            <span className="text-xs px-2 py-0.5 rounded-full shrink-0" style={{ background: "#10b98118", color: "#10b981" }}>{item.status}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: BarChart2,
    title: "Real-Time Conversion Insights",
    description: "Track your leads, conversions, and campaign performance in one smart, visual interface.",
    color: "#22d3ee",
    preview: (
      <div className="space-y-3">
        <div className="flex gap-3">
          {[{ l: "Leads", v: "1,284", c: "+14%" }, { l: "Converted", v: "342", c: "+22%" }].map((s, i) => (
            <div key={i} className="flex-1 p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <p className="text-xs text-slate-500">{s.l}</p>
              <p className="text-xl font-bold font-display text-white">{s.v}</p>
              <p className="text-xs text-accent-cyan font-semibold">{s.c}</p>
            </div>
          ))}
        </div>
        <svg viewBox="0 0 280 70" className="w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,55 C40,50 70,35 110,30 S160,18 200,20 S250,10 280,6 V70 H0 Z" fill="url(#cg)" />
          <path d="M0,55 C40,50 70,35 110,30 S160,18 200,20 S250,10 280,6" fill="none" stroke="#22d3ee" strokeWidth="2" />
        </svg>
      </div>
    ),
  },
  {
    icon: Mail,
    title: "Email + SMS Campaigns",
    description: "Personalized campaigns across email and SMS with just a few clicks.",
    color: "#a78bfa",
    preview: (
      <div className="space-y-2">
        {[
          { type: "Email", subject: "Your free trial is ending soon", open: "68%" },
          { type: "SMS", subject: "Hey! Don't miss our webinar today", open: "91%" },
          { type: "Email", subject: "Here's your weekly growth report", open: "74%" },
        ].map((c, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <span className="text-xs px-2 py-0.5 rounded font-semibold" style={{ background: "rgba(167,139,250,0.15)", color: "#a78bfa" }}>{c.type}</span>
            <p className="text-sm text-slate-300 flex-1 truncate">{c.subject}</p>
            <span className="text-xs text-slate-500">Open: <span className="text-white font-semibold">{c.open}</span></span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: GitBranch,
    title: "Lead Nurturing Workflows",
    description: "Set up powerful automation flows to warm up leads and increase close rates.",
    color: "#10b981",
    preview: (
      <div className="relative h-36">
        {[
          { label: "Lead Captured", x: "10%", y: "10%", color: "#10b981" },
          { label: "Email Sent", x: "40%", y: "40%", color: "#6c63ff" },
          { label: "Demo Booked", x: "70%", y: "10%", color: "#22d3ee" },
          { label: "Converted ✓", x: "70%", y: "65%", color: "#f59e0b" },
        ].map((n, i) => (
          <div
            key={i}
            className="absolute text-xs px-2 py-1 rounded-lg font-medium"
            style={{ left: n.x, top: n.y, background: `${n.color}20`, border: `1px solid ${n.color}40`, color: n.color }}
          >
            {n.label}
          </div>
        ))}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
          <line x1="20%" y1="20%" x2="50%" y2="48%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 3" />
          <line x1="50%" y1="48%" x2="78%" y2="20%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 3" />
          <line x1="50%" y1="48%" x2="78%" y2="72%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 3" />
        </svg>
      </div>
    ),
  },
  {
    icon: Plug,
    title: "One-Click Integrations",
    description: "Connect seamlessly with your CRM, website, landing pages, and more.",
    color: "#f59e0b",
    preview: (
      <div className="grid grid-cols-3 gap-2">
        {["HubSpot", "Salesforce", "Slack", "Zapier", "Stripe", "Intercom"].map((app, i) => (
          <div key={i} className="flex flex-col items-center gap-1.5 p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-lg" style={{ background: `hsl(${i * 40 + 180}, 60%, 30%)` }}>
              {["🔶", "☁️", "💬", "⚙️", "⚡", "💼"][i]}
            </div>
            <p className="text-[10px] text-slate-400 font-medium text-center">{app}</p>
          </div>
        ))}
      </div>
    ),
  },
];

export default function Features() {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView(0.1);
  const f = features[active];
  const Icon = f.icon;

  return (
    <section id="features" className="py-28 relative" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-3">Features</p>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Convert Faster</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Power-packed tools built to turn visitors into loyal customers.
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Left: feature list */}
          <div className="flex flex-col gap-3">
            {features.map((feat, i) => {
              const FeatIcon = feat.icon;
              const isActive = active === i;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`text-left p-5 rounded-2xl transition-all duration-300 glow-card group ${isActive ? "border-opacity-50" : ""}`}
                  style={{
                    borderColor: isActive ? `${feat.color}50` : undefined,
                    boxShadow: isActive ? `0 0 30px ${feat.color}15` : undefined,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                      style={{
                        background: isActive ? `${feat.color}20` : "rgba(255,255,255,0.04)",
                        border: `1px solid ${isActive ? feat.color + "40" : "rgba(255,255,255,0.08)"}`,
                      }}
                    >
                      <FeatIcon size={18} style={{ color: isActive ? feat.color : "#64748b" }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-white mb-1">{feat.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{feat.description}</p>
                    </div>
                    <ChevronRight
                      size={16}
                      className={`shrink-0 mt-1 transition-all duration-300 ${isActive ? "opacity-100 text-accent-light rotate-90" : "opacity-0 group-hover:opacity-50"}`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: preview panel */}
          <div className="hidden lg:block sticky top-28 self-start">
            <div className="glow-card rounded-2xl p-6 h-full" style={{ borderColor: `${f.color}30` }}>
              {/* Panel header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${f.color}20`, border: `1px solid ${f.color}40` }}
                >
                  <Icon size={18} style={{ color: f.color }} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-sm">{f.title}</h4>
                  <p className="text-xs text-slate-500">Live preview</p>
                </div>
                <div className="ml-auto flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                  <div className="w-2 h-2 rounded-full bg-green-500/60" />
                </div>
              </div>
              {f.preview}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
