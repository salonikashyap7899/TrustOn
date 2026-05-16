import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1 } }),
};

export default function Contact() {
  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <section className="relative py-28 bg-[#111] border-b border-white/5 overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#c9a84c]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-5">Reach Out</p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Let's Talk.<br /><em className="text-[#c9a84c] not-italic">We're Here for You</em>
            </h1>
            <div className="w-16 h-0.5 bg-[#c9a84c] mb-6" />
            <p className="text-white/50 text-xl max-w-2xl leading-relaxed">
              Whether you want to buy a plot, get your home designed, start construction, or become a channel partner — reach out and our team will get back to you within 2 hours during business hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left: Contact Info */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h2 className="text-3xl font-serif font-bold text-white mb-10">Contact Information</h2>

              <div className="space-y-6 mb-12">
                {[
                  {
                    icon: <MapPin className="w-5 h-5" />,
                    label: "Address",
                    value: "UGF, Apple Plaza, Next To HDFC Bank\nHardoi Road, Lucknow-226003",
                    link: null,
                  },
                  {
                    icon: <Phone className="w-5 h-5" />,
                    label: "Phone",
                    value: "+91 96160-61166",
                    link: "tel:+919616061166",
                  },
                  {
                    icon: <Mail className="w-5 h-5" />,
                    label: "Email",
                    value: "trustondevelopers01@gmail.com",
                    link: "mailto:trustondevelopers01@gmail.com",
                  },
                  {
                    icon: <Clock className="w-5 h-5" />,
                    label: "Response Time",
                    value: "Within 2 hours during business hours",
                    link: null,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-5 p-6 bg-[#111] border border-white/8">
                    <div className="w-12 h-12 bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest mb-2">{item.label}</p>
                      {item.link ? (
                        <a href={item.link} className="text-white font-serif hover:text-[#c9a84c] transition-colors whitespace-pre-line">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-serif whitespace-pre-line">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Links */}
              <div className="p-6 bg-[#111] border border-[#c9a84c]/20">
                <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Quick Links</p>
                <div className="grid grid-cols-2 gap-3">
                  {["Plot Selling", "Investment Consulting", "Our Projects", "Prime Estate"].map((link) => (
                    <div key={link} className="text-white/50 text-sm hover:text-[#c9a84c] transition-colors cursor-pointer">→ {link}</div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
              className="bg-[#111] border border-white/8 p-8 md:p-10"
            >
              <h2 className="text-2xl font-serif font-bold text-white mb-2">Send Us a Message</h2>
              <p className="text-white/40 text-sm mb-8">Fill in the form below and we'll get back to you shortly.</p>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-white/50 uppercase tracking-wider block mb-2">First Name *</label>
                    <Input
                      className="bg-[#0a0a0a] border-white/10 focus-visible:ring-[#c9a84c] rounded-none h-12 text-white"
                      placeholder="First Name"
                      required
                      data-testid="input-first-name"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/50 uppercase tracking-wider block mb-2">Last Name</label>
                    <Input
                      className="bg-[#0a0a0a] border-white/10 focus-visible:ring-[#c9a84c] rounded-none h-12 text-white"
                      placeholder="Last Name"
                      data-testid="input-last-name"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-white/50 uppercase tracking-wider block mb-2">Email Address *</label>
                  <Input
                    type="email"
                    className="bg-[#0a0a0a] border-white/10 focus-visible:ring-[#c9a84c] rounded-none h-12 text-white"
                    placeholder="your@email.com"
                    required
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <label className="text-xs text-white/50 uppercase tracking-wider block mb-2">Phone Number *</label>
                  <Input
                    className="bg-[#0a0a0a] border-white/10 focus-visible:ring-[#c9a84c] rounded-none h-12 text-white"
                    placeholder="+91 XXXXX XXXXX"
                    required
                    data-testid="input-phone"
                  />
                </div>
                <div>
                  <label className="text-xs text-white/50 uppercase tracking-wider block mb-2">What are your needs? *</label>
                  <Input
                    className="bg-[#0a0a0a] border-white/10 focus-visible:ring-[#c9a84c] rounded-none h-12 text-white"
                    placeholder="e.g., Plot purchase, Architecture, Construction..."
                    required
                    data-testid="input-needs"
                  />
                </div>
                <div>
                  <label className="text-xs text-white/50 uppercase tracking-wider block mb-2">Write Message</label>
                  <Textarea
                    className="bg-[#0a0a0a] border-white/10 focus-visible:ring-[#c9a84c] rounded-none min-h-[130px] text-white"
                    placeholder="Tell us more about your requirements..."
                    data-testid="input-message"
                  />
                </div>
                <Button
                  className="w-full bg-[#c9a84c] hover:bg-[#d4b460] text-[#0a0a0a] rounded-none h-12 font-bold text-sm tracking-widest uppercase"
                  type="submit"
                  data-testid="button-submit"
                >
                  Submit Form
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
