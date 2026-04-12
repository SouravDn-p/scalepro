"use client";
import { useState } from "react";
import { useInView } from "@/lib/hooks";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does it take to get set up?",
    a: "Most teams are fully set up and running their first campaign within 20 minutes. Our onboarding wizard walks you through every step — no developers or technical expertise required.",
  },
  {
    q: "Can I import my existing contacts?",
    a: "Yes. Scalepro supports CSV imports and direct sync from popular CRMs like HubSpot, Salesforce, and Pipedrive. Your data stays exactly where you need it.",
  },
  {
    q: "Is there a free trial?",
    a: "Absolutely. Every plan includes a 14-day free trial with full access to all features. No credit card required to start.",
  },
  {
    q: "What channels does Scalepro support?",
    a: "We support Email, SMS, LinkedIn, and webhooks for custom channels. Multi-channel sequences let you reach leads wherever they're most responsive.",
  },
  {
    q: "How does the AI personalization work?",
    a: "Our AI analyzes lead behavior — opens, clicks, time on site — and dynamically adjusts follow-up timing and messaging to maximize engagement without any manual tuning.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes, completely. There are no long-term contracts. Cancel any time from your account settings and you won't be charged again.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { ref, inView } = useInView(0.1);

  return (
    <section className="py-28 relative" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-3xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-3">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
            Frequently asked{" "}
            <span className="gradient-text">questions</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Everything you need to know before getting started.
          </p>
        </div>

        {/* Accordion */}
        <div className={`flex flex-col gap-3 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: open === i ? "rgba(108,99,255,0.06)" : "var(--bg-card)",
                border: `1px solid ${open === i ? "rgba(108,99,255,0.3)" : "rgba(255,255,255,0.06)"}`,
              }}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className={`font-display font-semibold text-sm md:text-base pr-4 transition-colors ${open === i ? "text-white" : "text-slate-300 group-hover:text-white"}`}>
                  {faq.q}
                </span>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${open === i ? "bg-accent rotate-180" : "bg-white/5"}`}
                >
                  <ChevronDown size={14} className={open === i ? "text-white" : "text-slate-400"} />
                </div>
              </button>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? "300px" : "0px" }}
              >
                <p className="px-5 pb-5 text-slate-400 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
