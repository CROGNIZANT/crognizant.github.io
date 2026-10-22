import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full Website Design & Development",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Dispatches silently in the background
      await fetch("https://formsubmit.co/ajax/insistigator@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          "Project Scope": formData.projectType,
          Message: formData.message,
          _subject: `New Portfolio Inquiry from ${formData.name} (${formData.projectType})`,
          _replyto: formData.email,
          _captcha: "false",
          _template: "table",
        }),
      });
    } catch {
      // Quiet failover
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-10 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column: Direct Links & Info */}
        <div>
          <span className="text-[0.72rem] text-[#8d887e] tracking-[0.2em] uppercase font-bold block mb-2">
            Get in touch
          </span>

          <h2 className="font-manrope font-semibold text-4xl sm:text-5xl lg:text-6xl text-white tracking-[-0.03em] leading-tight">
            Let&apos;s create <span className="text-[#c9b17a]">something</span> meaningful.
          </h2>

          <p className="text-[#cfc9bd] my-6 text-base sm:text-lg leading-relaxed max-w-md">
            Have a project in mind, a question, or simply want to talk about an idea? Fill out the
            form and I&apos;ll be in touch.
          </p>

          <div className="space-y-3.5 mt-8">
            {/* Inquiries & Availability */}
            <div className="border border-[#1e1e1e] bg-[#0b0b0b] rounded-2xl p-4 sm:p-5 flex items-center gap-4">
              <span className="w-11 h-11 rounded-xl bg-[#151515] flex items-center justify-center text-lg text-[#c9b17a] shrink-0">
                ✦
              </span>
              <div className="flex-1 min-w-0">
                <b className="block text-sm font-semibold text-white">Direct Inquiries</b>
                <small className="text-[#8d887e] text-xs block">
                  Open for freelance &amp; creative projects
                </small>
              </div>
            </div>

            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/crognizant?stkn=Y2x2MnJsa2N5MjBi"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-[#1e1e1e] hover:border-[#c9b17a] bg-[#0b0b0b] rounded-2xl p-4 sm:p-5 flex items-center gap-4 transition-colors"
            >
              <span className="w-11 h-11 rounded-xl bg-[#151515] flex items-center justify-center text-lg text-[#c9b17a] shrink-0">
                ◎
              </span>
              <div className="flex-1">
                <b className="block text-sm font-semibold text-white">Follow me</b>
                <small className="text-[#8d887e] text-xs">Instagram · @crognizant</small>
              </div>
              <span className="text-lg text-white group-hover:text-[#c9b17a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                ↗
              </span>
            </a>

            {/* Based in India */}
            <div className="border border-[#1e1e1e] bg-[#0b0b0b] rounded-2xl p-4 sm:p-5 flex items-center gap-4">
              <span className="w-11 h-11 rounded-xl bg-[#151515] flex items-center justify-center text-lg text-[#c9b17a] shrink-0">
                ⌖
              </span>
              <div className="flex-1">
                <b className="block text-sm font-semibold text-white">Based in</b>
                <small className="text-[#8d887e] text-xs">India · Available Worldwide (Remote)</small>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse mr-1" />
            </div>
          </div>
        </div>

        {/* Right Column: Clean Form */}
        <div className="border border-[#1e1e1e] rounded-2xl p-6 sm:p-8 bg-[#0a0a0a] shadow-xl">
          {submitted ? (
            <div className="text-center py-14 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#151515] border border-[#c9b17a] text-[#c9b17a] text-2xl flex items-center justify-center mx-auto">
                ✓
              </div>

              <h3 className="font-manrope font-bold text-2xl sm:text-3xl text-white">
                Thank You
              </h3>

              <p className="text-sm sm:text-base text-[#cfc9bd] max-w-sm mx-auto leading-relaxed">
                Your message has been received. I&apos;ll get back to you shortly.
              </p>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      projectType: "Full Website Design & Development",
                      message: "",
                    });
                  }}
                  className="px-6 py-3 bg-[#151515] hover:bg-[#222] border border-[#333] hover:border-[#c9b17a] text-xs font-bold uppercase tracking-wider text-[#cfc9bd] transition-colors rounded-sm cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-xs font-extrabold uppercase tracking-wider text-[#8d887e] block mb-2">
                  Your Name <span className="text-[#c9b17a]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maya Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#101010] border border-[#1e1e1e] focus:border-[#c9b17a] rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#555] transition-colors outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-extrabold uppercase tracking-wider text-[#8d887e] block mb-2">
                  Your Email <span className="text-[#c9b17a]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#101010] border border-[#1e1e1e] focus:border-[#c9b17a] rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#555] transition-colors outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-extrabold uppercase tracking-wider text-[#8d887e] block mb-2">
                  Project Scope
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-[#101010] border border-[#1e1e1e] focus:border-[#c9b17a] rounded-xl px-4 py-3.5 text-sm text-white transition-colors outline-none cursor-pointer"
                >
                  <option value="Full Website Design & Development">Full Website Design &amp; Development</option>
                  <option value="Creative Motion & Interaction">Creative Motion &amp; Interaction</option>
                  <option value="E-Commerce Brand Platform">E-Commerce Brand Platform</option>
                  <option value="Frontend Engineering & UI Systems">Frontend Engineering &amp; UI Systems</option>
                  <option value="Other / General Collaboration">Other / General Collaboration</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-extrabold uppercase tracking-wider text-[#8d887e] block mb-2">
                  Message <span className="text-[#c9b17a]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project, timeline, and goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#101010] border border-[#1e1e1e] focus:border-[#c9b17a] rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#555] transition-colors outline-none resize-y min-h-[140px]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#f4f4f4] hover:bg-[#c9b17a] text-[#0a0a0a] font-manrope font-extrabold text-sm uppercase tracking-wider py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span>{isSubmitting ? "Please wait..." : "Send Message ↗"}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
