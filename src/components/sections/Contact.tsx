"use client";
import { useState } from "react";
import { useInView } from "@/lib/hooks";
import { Send, Mail, Phone, MapPin, CheckCircle } from "lucide-react";

export default function Contact() {
  const { ref, inView } = useInView(0.1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left info */}
          <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <p className="section-label mb-3">Contact Us</p>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-5">
              Let's talk about{" "}
              <span className="gradient-text">your growth</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Whether you have a question, want a demo, or just want to see if Scalepro is the right fit — we're here to help.
            </p>

            <div className="flex flex-col gap-5">
              {[
                { icon: Mail, label: "Email us", value: "hello@scalepro.io", color: "#6c63ff" },
                { icon: Phone, label: "Call us", value: "(012) 345-6789", color: "#22d3ee" },
                { icon: MapPin, label: "Visit us", value: "123 Future Street, Innovation City, CA 90210", color: "#10b981" },
              ].map(({ icon: Icon, label, value, color }, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-0.5">{label}</p>
                    <p className="text-slate-300 text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div
            className={`glow-card rounded-2xl p-8 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "#10b98118", border: "1px solid #10b98140" }}>
                  <CheckCircle size={32} className="text-green-400" />
                </div>
                <h3 className="font-display font-bold text-white text-xl">Message sent!</h3>
                <p className="text-slate-400 text-sm max-w-xs">
                  Thanks for reaching out. We'll get back to you within 1 business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline text-sm py-2 px-5 mt-2"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-display font-bold text-white text-xl mb-1">Send us a message</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { key: "name", label: "Full Name", placeholder: "Jane Smith", type: "text" },
                    { key: "company", label: "Company", placeholder: "Acme Inc.", type: "text" },
                  ].map(({ key, label, placeholder, type }) => (
                    <div key={key}>
                      <label className="block text-xs text-slate-500 font-semibold uppercase tracking-widest mb-1.5">{label}</label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        value={form[key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all duration-200 focus:border-accent/50"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                        onFocus={(e) => { e.target.style.borderColor = "rgba(108,99,255,0.5)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; }}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs text-slate-500 font-semibold uppercase tracking-widest mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all duration-200"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                    onFocus={(e) => { e.target.style.borderColor = "rgba(108,99,255,0.5)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; }}
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-500 font-semibold uppercase tracking-widest mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your goals..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all duration-200 resize-none"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                    onFocus={(e) => { e.target.style.borderColor = "rgba(108,99,255,0.5)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; }}
                  />
                </div>

                <button type="submit" className="btn-primary py-3.5 justify-center shine-effect">
                  Send Message
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
