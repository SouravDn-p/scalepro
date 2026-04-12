"use client";
import { useEffect, useState } from "react";
import { ArrowRight, Play, Sparkles, ChevronRight } from "lucide-react";

const avatars = [
  "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="mesh-bg relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Decorative radial glow blobs */}
      <div
        className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(108,99,255,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-10 right-[5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Grid lines overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Badge */}
        <div
          className={`tag-badge mb-8 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "0ms" }}
        >
          <Sparkles size={12} />
          Latest Release — Introducing Scalepro ChatGPT Plugin
          <ChevronRight size={12} />
        </div>

        {/* Headline */}
        <h1
          className={`font-display font-extrabold leading-[1.05] text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <span className="block text-white">Turn visitors into</span>
          <span className="block gradient-text">loyal customers</span>
          <span className="block text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-1">
            10× faster.
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className={`text-slate-400 max-w-2xl text-lg md:text-xl leading-relaxed mb-10 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Capture, engage, and convert more leads with a platform built to drive
          real growth — no complicated setups, no wasted time.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-4 mb-14 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <a href="#pricing" className="btn-primary text-base py-3.5 px-7 shine-effect">
            Start Free Today
            <ArrowRight size={17} />
          </a>
          <button className="btn-outline text-base py-3.5 px-7">
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
              <Play size={11} fill="white" />
            </div>
            Watch Demo
          </button>
        </div>

        {/* Social proof */}
        <div
          className={`flex items-center gap-4 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-[var(--bg-primary)] overflow-hidden"
                style={{ background: `hsl(${i * 60 + 200}, 70%, 50%)` }}
              >
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="20" cy="20" r="20" fill={`hsl(${i * 60 + 200}, 70%, 50%)`} />
                  <circle cx="20" cy="15" r="7" fill="rgba(255,255,255,0.6)" />
                  <ellipse cx="20" cy="35" rx="12" ry="8" fill="rgba(255,255,255,0.4)" />
                </svg>
              </div>
            ))}
          </div>
          <div className="text-left">
            <div className="flex gap-0.5 mb-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">★</span>
              ))}
            </div>
            <p className="text-slate-400 text-sm">
              Trusted by <span className="text-white font-semibold">100k+</span> entrepreneurs
            </p>
          </div>
        </div>

        {/* Dashboard preview */}
        <div
          className={`mt-20 w-full max-w-5xl transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="gradient-border shine-effect">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "var(--bg-card)",
                border: "1px solid rgba(108,99,255,0.2)",
              }}
            >
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <div className="ml-4 flex-1 h-6 rounded-md bg-white/5 flex items-center px-3">
                  <span className="text-xs text-slate-500">app.scalepro.io/dashboard</span>
                </div>
              </div>

              {/* Dashboard UI mockup */}
              <div className="p-6 grid grid-cols-3 gap-4">
                {/* Stat cards */}
                {[
                  { label: "Total Leads", value: "12,482", change: "+24%", color: "#6c63ff" },
                  { label: "Conversions", value: "3,290", change: "+18%", color: "#22d3ee" },
                  { label: "Revenue", value: "$89,200", change: "+32%", color: "#10b981" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl p-4"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <p className="text-xs text-slate-500 mb-2">{stat.label}</p>
                    <p className="text-xl font-bold font-display text-white">{stat.value}</p>
                    <span
                      className="text-xs font-semibold mt-1 inline-block px-1.5 py-0.5 rounded"
                      style={{
                        color: stat.color,
                        background: `${stat.color}18`,
                      }}
                    >
                      {stat.change}
                    </span>
                  </div>
                ))}

                {/* Chart area */}
                <div
                  className="col-span-2 rounded-xl p-4"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <p className="text-xs text-slate-500 mb-3">Conversion Trend</p>
                  <svg viewBox="0 0 300 80" className="w-full h-16" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6c63ff" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#6c63ff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,60 C30,55 50,40 80,35 S130,20 160,25 S220,10 250,8 S280,12 300,5"
                      fill="none"
                      stroke="#6c63ff"
                      strokeWidth="2"
                    />
                    <path
                      d="M0,60 C30,55 50,40 80,35 S130,20 160,25 S220,10 250,8 S280,12 300,5 V80 H0 Z"
                      fill="url(#chartGrad)"
                    />
                  </svg>
                </div>

                {/* Recent leads */}
                <div
                  className="rounded-xl p-4"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <p className="text-xs text-slate-500 mb-3">Recent Leads</p>
                  {["Sarah K.", "Mike T.", "Anna R."].map((name, i) => (
                    <div key={i} className="flex items-center gap-2 mb-2">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white"
                        style={{ background: `hsl(${i * 80 + 200}, 70%, 55%)` }}
                      >
                        {name[0]}
                      </div>
                      <span className="text-xs text-slate-400">{name}</span>
                      <span
                        className="ml-auto text-[9px] px-1.5 py-0.5 rounded"
                        style={{ background: "#10b98118", color: "#10b981" }}
                      >
                        New
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
