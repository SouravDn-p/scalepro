"use client";

const logos = [
  { name: "Stripe", symbol: "⚡" },
  { name: "HubSpot", symbol: "🔶" },
  { name: "Salesforce", symbol: "☁️" },
  { name: "Slack", symbol: "💬" },
  { name: "Notion", symbol: "⬛" },
  { name: "Intercom", symbol: "💬" },
  { name: "Zapier", symbol: "⚙️" },
  { name: "Mailchimp", symbol: "🐒" },
];

export default function TrustedBy() {
  const doubled = [...logos, ...logos];

  return (
    <section className="py-16 border-y border-white/5 overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
      <div className="text-center mb-8">
        <p className="section-label">Trusted by fast-growing companies worldwide</p>
      </div>

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--bg-secondary), transparent)" }}
        />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--bg-secondary), transparent)" }}
        />

        <div className="marquee-track">
          {doubled.map((logo, i) => (
            <div
              key={i}
              className="flex items-center gap-3 mx-10 shrink-0 group"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span>{logo.symbol}</span>
              </div>
              <span className="text-slate-400 font-semibold text-sm group-hover:text-white transition-colors">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
