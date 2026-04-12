"use client";
import { useInView } from "@/lib/hooks";

const testimonials = [
  {
    name: "Sarah Kowalski",
    role: "Head of Growth @ NovaTech",
    avatar: "SK",
    color: "#6c63ff",
    quote:
      "Scalepro completely transformed how we handle lead follow-ups. Our conversion rate jumped 180% in the first month alone. The AI sequences feel genuinely personal.",
    stars: 5,
  },
  {
    name: "Marcus Chen",
    role: "Founder @ BuildFlow",
    avatar: "MC",
    color: "#22d3ee",
    quote:
      "We replaced three separate tools with Scalepro. The setup took less than 20 minutes and we were seeing results by end of week. Incredible ROI.",
    stars: 5,
  },
  {
    name: "Priya Nair",
    role: "VP Sales @ Nexus Capital",
    avatar: "PN",
    color: "#10b981",
    quote:
      "The real-time dashboard alone is worth the price. Finally, I can see exactly where leads drop off and fix it before the quarter ends.",
    stars: 5,
  },
  {
    name: "James Okonkwo",
    role: "CEO @ LeapScale",
    avatar: "JO",
    color: "#a78bfa",
    quote:
      "Our SDR team used to spend hours on manual follow-ups. Scalepro handles all of that automatically, and honestly does it better than we did.",
    stars: 5,
  },
  {
    name: "Elena Russo",
    role: "Marketing Director @ Vantage",
    avatar: "ER",
    color: "#f59e0b",
    quote:
      "Every feature feels thought through. The email + SMS combo especially — our open rates are through the roof compared to anything we used before.",
    stars: 5,
  },
  {
    name: "Tom Bradley",
    role: "Co-founder @ PulseHQ",
    avatar: "TB",
    color: "#fb7185",
    quote:
      "I've tried every lead tool on the market. Scalepro is the first one that actually delivers on the promise of 'set it and forget it' automation.",
    stars: 5,
  },
];

export default function Testimonials() {
  const { ref, inView } = useInView(0.1);

  const half = Math.ceil(testimonials.length / 2);
  const col1 = testimonials.slice(0, half);
  const col2 = testimonials.slice(half);

  return (
    <section className="py-28 relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 50%, rgba(108,99,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-3">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
            Loved by <span className="gradient-text">growth teams</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-lg">
            Don't take our word for it — here's what our customers say.
          </p>
        </div>

        {/* Masonry grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glow-card rounded-2xl p-6 flex flex-col gap-4 group relative overflow-hidden"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at top left, ${t.color}06 0%, transparent 70%)` }}
              />

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(t.stars)].map((_, j) => (
                  <span key={j} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 text-sm leading-relaxed flex-1">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}80)` }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
