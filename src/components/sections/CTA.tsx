"use client";
import { useInView } from "@/lib/hooks";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTA() {
  const { ref, inView } = useInView(0.15);

  return (
    <section className="py-28 relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      {/* Glow blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(108,99,255,0.2) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10" ref={ref}>
        {/* Decorative ring */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border pointer-events-none opacity-10"
          style={{ borderColor: "rgba(108,99,255,0.5)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border pointer-events-none opacity-10"
          style={{ borderColor: "rgba(108,99,255,0.4)" }}
        />

        <div
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="section-label mb-4">Get Started Today</p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white mb-6 leading-tight">
            Ready to Accelerate{" "}
            <span className="gradient-text">Your Growth?</span>
          </h2>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Launch smarter campaigns, convert more leads, and scale your business with ease — all in one place. Start your free 14-day trial today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="btn-primary text-base py-4 px-8 shine-effect">
              Get Started Now
              <ArrowRight size={18} />
            </a>
            <a href="#pricing" className="btn-outline text-base py-4 px-8">
              <Calendar size={16} />
              Book a Demo
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            {["No credit card required", "14-day free trial", "Cancel anytime", "5,000+ businesses"].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-light" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
