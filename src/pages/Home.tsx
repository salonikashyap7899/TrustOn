import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ShieldCheck, TrendingUp, Compass, HardHat, Headset, ChevronRight,
  Phone, Mail, MapPin, Star, Building2, Users, Award
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.12 } }),
};

export default function Home() {
  const [investAmount, setInvestAmount] = useState([2500000]);
  const [duration, setDuration] = useState([10]);
  const [growthRate, setGrowthRate] = useState([10]);

  const P = investAmount[0];
  const r = growthRate[0] / 100;
  const t = duration[0];
  const A = P * Math.pow(1 + r, t);
  const netProfit = A - P;
  const totalReturnPercent = (netProfit / P) * 100;

  const fmt = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)}Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(1)}L`;
    return `₹${Math.round(val).toLocaleString("en-IN")}`;
  };

  const trustPoints = [
    { icon: <ShieldCheck className="w-7 h-7" />, title: "Legal Security", desc: "Every plot backed by Jila Panchayat approval & clear title deeds" },
    { icon: <Award className="w-7 h-7" />, title: "Transparent Dealings", desc: "No hidden charges. What we quote is what you pay" },
    { icon: <Compass className="w-7 h-7" />, title: "Design Expertise", desc: "In-house architects who understand your vision, not just blueprints" },
    { icon: <MapPin className="w-7 h-7" />, title: "Prime Location", desc: "Strategic positioning with road access & utility connections" },
    { icon: <HardHat className="w-7 h-7" />, title: "Quality Construction", desc: "Grade-A materials, skilled workforce, no shortcuts" },
    { icon: <Headset className="w-7 h-7" />, title: "After-Sale Support", desc: "We stay with you long after the deal is signed" },
  ];

  const services = [
    { icon: <MapPin className="w-8 h-8" />, title: "Plot Selling", sub: "Premium Plots. Zero Compromise.", href: "/services/plot-selling" },
    { icon: <Compass className="w-8 h-8" />, title: "Architecture & Design", sub: "Your Vision, Brought to Life on Paper First", href: "/services/architecture-design" },
    { icon: <HardHat className="w-8 h-8" />, title: "Construction & Build", sub: "We Don't Just Build Buildings. We Build Promises", href: "/services/construction-build" },
    { icon: <TrendingUp className="w-8 h-8" />, title: "Investment Consulting", sub: "Buy Smart. Invest Smarter.", href: "/services/investment-consulting" },
  ];

  return (
    <div className="w-full">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://truston.advrtisinguru.com/wp-content/uploads/2026/04/ahmad-ossayli-tNE4KI3URuE-unsplash-scaled.jpg"
            alt="Luxury Real Estate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0a0a0a]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-28 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#c9a84c]/40 bg-[#c9a84c]/10 text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase rounded-full mb-8">
              🏡 Welcome to TrustOn — Own the Ground. Build the Legacy.
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-6xl md:text-8xl lg:text-[96px] font-serif font-bold text-white leading-[1.05] mb-8"
          >
            Own the Ground.<br />
            <em className="text-[#c9a84c] not-italic">Build the Legacy.</em>
          </motion.h1>
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={2}>
            <Link
              href="/services/plot-selling"
              className="inline-block px-10 py-4 bg-[#c9a84c] text-[#0a0a0a] font-bold text-sm tracking-[0.2em] uppercase hover:bg-[#d4b460] transition-all duration-300 shadow-lg shadow-[#c9a84c]/20"
              data-testid="hero-cta"
            >
              Explore Prime Estate
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#c9a84c]/60" />
        </div>
      </section>

      {/* ── PLOT TRACKER ─────────────────────────────────────────────── */}
      <section className="py-24 bg-[#111] border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a84c]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-3">Live Inventory</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">Prime Estate — Plot Tracker</h2>
              <p className="text-white/50 text-sm">Real-time availability status updated for Phase 1 &amp; 2</p>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
              className="flex items-center gap-3 px-6 py-3 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-sm"
            >
              <div className="w-2.5 h-2.5 bg-[#c9a84c] rounded-full animate-pulse" />
              <span className="text-[#c9a84c] font-bold">43% Reserved — Overall Status</span>
            </motion.div>
          </div>

          {/* Progress bar */}
          <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden flex mb-10">
            <div className="h-full bg-red-500/80" style={{ width: "30%" }} title="Sold (45)" />
            <div className="h-full bg-[#c9a84c]" style={{ width: "13.3%" }} title="Booked (20)" />
            <div className="h-full bg-emerald-500/25" style={{ width: "56.7%" }} title="Available (85)" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { label: "Total Plots", val: "150", sub: "Full Inventory", color: "text-white" },
              { label: "Sold", val: "45", sub: "30% Complete", color: "text-red-400" },
              { label: "Booked", val: "20", sub: "Processing", color: "text-[#c9a84c]" },
              { label: "Available", val: "85", sub: "Ready to Book", color: "text-emerald-400" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.1}
                className="bg-[#0a0a0a] border border-white/8 p-6 rounded-sm text-center"
              >
                <p className={`text-4xl font-serif font-bold mb-1 ${item.color}`}>{item.val}</p>
                <p className="text-white font-semibold text-sm mb-1">{item.label}</p>
                <p className="text-white/40 text-xs">{item.sub}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-between p-5 bg-red-950/30 border border-red-500/20 rounded-sm">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-red-400 rounded-full animate-pulse" />
              <p className="text-red-300 font-semibold text-sm">
                Fast-selling inventory! 43% of Phase 1 is already reserved. Contact sales team now.
              </p>
            </div>
            <Link href="/contact"
              className="shrink-0 px-6 py-2.5 bg-[#c9a84c] text-[#0a0a0a] text-xs font-bold tracking-widest uppercase hover:bg-[#d4b460] transition-colors"
            >
              Contact Sales
            </Link>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-6 mt-8 justify-center">
            {[
              { color: "bg-red-500/80", label: "Sold (45)" },
              { color: "bg-[#c9a84c]", label: "Booked (20)" },
              { color: "bg-emerald-500/40", label: "Available (85)" },
            ].map((leg) => (
              <div key={leg.label} className="flex items-center gap-2 text-sm text-white/50">
                <span className={`w-3 h-3 rounded-full ${leg.color}`} />
                {leg.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WEALTH PLANNER ───────────────────────────────────────────── */}
      <section className="py-28 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-[#c9a84c]/4 rounded-full blur-3xl" />
          <div className="absolute right-0 bottom-0 w-72 h-72 bg-[#c9a84c]/4 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Interactive Tool</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Wealth Planner</h2>
            <p className="text-white/50 text-lg">Calculate Your Returns — Adjust the sliders to see your investment grow.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="bg-[#111] border border-white/8 p-8 md:p-10 rounded-sm space-y-10"
            >
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-white/60 text-sm font-medium uppercase tracking-wider">Initial Investment</label>
                  <span className="text-[#c9a84c] font-bold font-serif">{fmt(investAmount[0])}</span>
                </div>
                <Slider min={500000} max={10000000} step={100000} value={investAmount} onValueChange={setInvestAmount}
                  className="[&_[role=slider]]:bg-[#c9a84c] [&_[role=slider]]:border-[#c9a84c] [&_.range]:bg-[#c9a84c]"
                />
                <div className="flex justify-between mt-2 text-xs text-white/30">
                  <span>₹5L</span><span>₹1Cr</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-white/60 text-sm font-medium uppercase tracking-wider">Holding Period (Years)</label>
                  <span className="text-[#c9a84c] font-bold font-serif">{duration[0]} Years</span>
                </div>
                <Slider min={1} max={15} step={1} value={duration} onValueChange={setDuration}
                  className="[&_[role=slider]]:bg-[#c9a84c] [&_[role=slider]]:border-[#c9a84c] [&_.range]:bg-[#c9a84c]"
                />
                <div className="flex justify-between mt-2 text-xs text-white/30">
                  <span>1 Year</span><span>15 Years</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-white/60 text-sm font-medium uppercase tracking-wider">Expected Annual Growth</label>
                  <span className="text-[#c9a84c] font-bold font-serif">{growthRate[0]}% Per Year</span>
                </div>
                <Slider min={5} max={20} step={1} value={growthRate} onValueChange={setGrowthRate}
                  className="[&_[role=slider]]:bg-[#c9a84c] [&_[role=slider]]:border-[#c9a84c] [&_.range]:bg-[#c9a84c]"
                />
                <div className="flex justify-between mt-2 text-xs text-white/30">
                  <span>5%</span><span>20%</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
              className="flex flex-col gap-6"
            >
              <div className="bg-[#c9a84c] p-8 rounded-sm text-[#0a0a0a]">
                <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3 opacity-70">Estimated Maturity Value</p>
                <p className="text-5xl font-serif font-bold">{fmt(A)}</p>
                <p className="mt-3 text-sm opacity-70 font-semibold">
                  {fmt(investAmount[0])} invested → {fmt(A)} in {duration[0]} years.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Total Investment", val: fmt(P), color: "text-white" },
                  { label: "Net Profit", val: `+${fmt(netProfit)}`, color: "text-emerald-400" },
                  { label: "Total Return", val: `+${totalReturnPercent.toFixed(0)}%`, color: "text-[#c9a84c]" },
                ].map((item) => (
                  <div key={item.label} className="bg-[#111] border border-white/8 p-5 rounded-sm text-center">
                    <p className={`text-xl font-serif font-bold mb-1 ${item.color}`}>{item.val}</p>
                    <p className="text-white/40 text-xs">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#111] border border-white/8 p-5 rounded-sm flex items-center justify-between">
                <span className="text-white/50 text-sm">Annualized Yield</span>
                <span className="text-[#c9a84c] font-bold font-serif text-xl">+{growthRate[0]}%</span>
              </div>

              <Link href="/contact"
                className="block text-center py-4 bg-[#111] border border-[#c9a84c]/40 text-[#c9a84c] text-sm font-bold tracking-widest uppercase hover:bg-[#c9a84c]/10 transition-colors"
              >
                Book Investment Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ABOUT / PRIME ESTATE ─────────────────────────────────────── */}
      <section className="py-28 bg-[#111] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-4">About Us</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                PRIME ESTATE — Own the Ground. Build Your Legacy.
              </h2>
              <div className="w-16 h-0.5 bg-[#c9a84c] mb-8" />
              <p className="text-white/60 leading-relaxed mb-8 text-lg">
                Prime Estate is a trusted name in real estate development, built on a foundation of transparency, quality, and long-term vision. We don't just sell land — we craft opportunities. Our flagship project, Prime Estate, is a Jila Panchayat approved township that combines legal security, prime location, and future-ready infrastructure.
              </p>
              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-4 p-5 bg-[#0a0a0a] border-l-2 border-[#c9a84c] rounded-r-sm">
                  <div className="w-2 h-2 bg-[#c9a84c] rounded-full mt-1.5 shrink-0" />
                  <p className="text-white/70 leading-relaxed">To make premium, legally secure land ownership accessible to every aspiring homeowner and investor</p>
                </div>
                <div className="flex items-start gap-4 p-5 bg-[#0a0a0a] border-l-2 border-[#c9a84c] rounded-r-sm">
                  <div className="w-2 h-2 bg-[#c9a84c] rounded-full mt-1.5 shrink-0" />
                  <p className="text-white/70 leading-relaxed">To build not just properties, but thriving communities where families live, businesses grow, and life flourishes</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+919616061166"
                  className="px-7 py-3 bg-[#c9a84c] text-[#0a0a0a] font-bold text-sm tracking-widest uppercase hover:bg-[#d4b460] transition-colors"
                >
                  Call Anytime
                </a>
                <Link href="/services"
                  className="px-7 py-3 border border-white/20 text-white text-sm tracking-widest uppercase hover:border-[#c9a84c]/50 hover:text-[#c9a84c] transition-colors"
                >
                  Explore Our Services
                </Link>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
              className="relative"
            >
              <img
                src="https://truston.advrtisinguru.com/wp-content/uploads/2026/04/april-pethybridge-nN28PjFOOLI-unsplash-scaled.jpg"
                alt="Prime Estate"
                className="w-full h-[580px] object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#c9a84c] p-6 text-[#0a0a0a]">
                <p className="font-serif font-bold text-3xl">150+</p>
                <p className="text-xs font-bold uppercase tracking-wider">Premium Plots</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY LUCKNOW ──────────────────────────────────────────────── */}
      <section className="py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://truston.advrtisinguru.com/wp-content/uploads/2026/04/avi-werde-hHz4yrvxwlA-unsplash-scaled.jpg"
                alt="Lucknow"
                className="w-full h-[520px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent" />
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}>
              <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Location Advantage</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">Why Invest in Lucknow?</h2>
              <div className="w-16 h-0.5 bg-[#c9a84c] mb-8" />
              <p className="text-white/60 leading-relaxed mb-10 text-lg">
                Lucknow is one of India's fastest-growing real estate markets driven by world-class infrastructure, government-backed smart city initiatives, and rapidly rising land values. An ideal destination for NRI buyers and long-term investors looking for high returns with low risk.
              </p>
              <div className="space-y-4">
                {[
                  "Government-backed smart city initiatives",
                  "Rapidly rising land values year-over-year",
                  "World-class infrastructure development",
                  "Ideal for NRI buyers & long-term investors",
                  "High returns with relatively low risk",
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full shrink-0" />
                    <span className="text-white/70">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      <section className="py-28 bg-[#111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-4">What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Everything You Need, Under One Roof</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((svc, i) => (
              <motion.div key={svc.title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.1}>
                <Link href={svc.href}
                  className="group flex items-center gap-6 p-8 bg-[#0a0a0a] border border-white/8 hover:border-[#c9a84c]/40 transition-all duration-300 block"
                  data-testid={`service-${i}`}
                >
                  <div className="w-16 h-16 bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] shrink-0 group-hover:bg-[#c9a84c] group-hover:text-[#0a0a0a] transition-all duration-300">
                    {svc.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-bold text-white mb-1">{svc.title}</h3>
                    <p className="text-white/50 text-sm">{svc.sub}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-[#c9a84c] group-hover:translate-x-1 transition-all" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HURRY CTA ────────────────────────────────────────────────── */}
      <section className="relative py-32 overflow-hidden">
        <img
          src="https://truston.advrtisinguru.com/wp-content/uploads/2026/04/avi-waxman-f9qZuKoZYoY-unsplash-1-scaled.jpg"
          alt="Luxury Property"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.4em] uppercase mb-6">HURRY</p>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
              Don't be late, the time is running fast
            </h2>
            <p className="text-2xl text-[#c9a84c] font-serif italic mb-4">Choose the luxury</p>
            <p className="text-white/50 mb-10">Want more info?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"
                className="px-10 py-4 bg-[#c9a84c] text-[#0a0a0a] font-bold text-sm tracking-widest uppercase hover:bg-[#d4b460] transition-colors"
              >
                Get Free Quote
              </Link>
              <a href="tel:+919616061166"
                className="px-10 py-4 border border-white/30 text-white font-bold text-sm tracking-widest uppercase hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── GALLERY / PROJECT ─────────────────────────────────────────── */}
      <section className="py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-12">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Our Projects</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Where Imagination Takes Shape in Luxury</h2>
            <p className="text-white/50 mt-3 text-lg">Crafted for those who expect nothing less than exceptional living</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: "https://truston.advrtisinguru.com/wp-content/uploads/2026/04/1-scaled.png", label: "Prime Estate" },
              { src: "https://truston.advrtisinguru.com/wp-content/uploads/2026/04/2-scaled.png", label: "Residential" },
              { src: "https://truston.advrtisinguru.com/wp-content/uploads/2026/04/3-scaled.png", label: "Lucknow, UP" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.1}
                className="group relative overflow-hidden aspect-[4/5]"
              >
                <img src={item.src} alt={item.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[#c9a84c] text-xs tracking-widest uppercase mb-1">Prime Estate</p>
                  <p className="text-white font-serif font-bold text-xl">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/project"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#c9a84c]/40 text-[#c9a84c] text-sm font-bold tracking-widest uppercase hover:bg-[#c9a84c]/10 transition-colors"
            >
              View All Projects <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY TRUST US ─────────────────────────────────────────────── */}
      <section className="py-28 bg-[#111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Trust &amp; Credibility</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Why Buyers Trust Prime Estate</h2>
            <p className="text-white/50">Built for Those Who Expect From Every Square Foot</p>
            <p className="text-white/40 mt-2 max-w-2xl mx-auto">We develop thoughtfully designed residential and commercial spaces that combine location advantage, modern architecture, and long-term value.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {trustPoints.map((point, i) => (
              <motion.div key={point.title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.08}
                className="group p-8 bg-[#0a0a0a] border border-white/8 hover:border-[#c9a84c]/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] mb-6 group-hover:bg-[#c9a84c] group-hover:text-[#0a0a0a] transition-all duration-300">
                  {point.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-3">{point.title}</h3>
                <p className="text-white/50 leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section className="py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Hear What Others Say About Partnering With Us</h2>
            <p className="text-white/50">Experience new inspirations and movements</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Rajeev Sharma", role: "Plot Owner, Phase 1", text: "TrustOn made the entire process seamless. No hidden charges, crystal-clear documentation, and the plot I got is exactly what was promised. Truly transparent dealings." },
              { name: "Priya Agarwal", role: "NRI Investor, Dubai", text: "Investing from abroad was my biggest concern. TrustOn's team handled every detail remotely — legal verification, registration, everything. Extremely professional." },
              { name: "Mohd. Salim", role: "Channel Partner", text: "Joining TrustOn's Channel Partner Program was the best decision. The commissions are premium, the marketing support is outstanding, and every project is RERA-compliant." },
            ].map((t, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.1}
                className="p-8 bg-[#111] border border-white/8"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-[#c9a84c] text-[#c9a84c]" />)}
                </div>
                <p className="text-white/70 leading-relaxed mb-8 italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#c9a84c]/20 border border-[#c9a84c]/30 rounded-full flex items-center justify-center">
                    <span className="text-[#c9a84c] font-bold text-sm">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHANNEL PARTNER ──────────────────────────────────────────── */}
      <section className="py-28 bg-[#111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Partner With Us</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Earn More by Partnering With TrustOn Today</h2>
              <div className="w-16 h-0.5 bg-[#c9a84c] mb-8" />
              <p className="text-white/60 leading-relaxed text-lg mb-10">
                Are you a real estate agent or broker? Join TrustOn's Channel Partner Program and start earning premium commissions on every deal — with full marketing support, RERA-compliant projects, and a team that's always in your corner.
              </p>
              <Link href="/contact"
                className="inline-block px-10 py-4 bg-[#c9a84c] text-[#0a0a0a] font-bold text-sm tracking-widest uppercase hover:bg-[#d4b460] transition-colors"
              >
                Join Partner Program
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: <Award className="w-6 h-6" />, title: "Premium Commissions", desc: "Earn top-tier commissions on every successful deal" },
                { icon: <Building2 className="w-6 h-6" />, title: "RERA Compliant", desc: "All projects fully RERA registered and compliant" },
                { icon: <Users className="w-6 h-6" />, title: "Team Support", desc: "Full marketing and sales team backing you always" },
                { icon: <TrendingUp className="w-6 h-6" />, title: "Growth Focused", desc: "Scale your earnings with our growing inventory" },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-[#0a0a0a] border border-white/8">
                  <div className="text-[#c9a84c] mb-4">{item.icon}</div>
                  <h4 className="text-white font-serif font-bold mb-2">{item.title}</h4>
                  <p className="text-white/40 text-sm">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ─────────────────────────────────────────────── */}
      <section className="py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">For any query, get in touch with us</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-[#111] border border-white/8 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#c9a84c]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Call us</p>
                    <a href="tel:+919616061166" className="text-xl font-serif text-white hover:text-[#c9a84c] transition-colors">+91 96160-61166</a>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-[#111] border border-white/8 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#c9a84c]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Email Us</p>
                    <a href="mailto:trustondevelopers01@gmail.com" className="text-xl font-serif text-white hover:text-[#c9a84c] transition-colors">trustondevelopers01@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-[#111] border border-white/8 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#c9a84c]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Address</p>
                    <p className="text-white font-serif">UGF, Apple Plaza, Next To HDFC Bank<br/>Hardoi Road, Lucknow-226003</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
              className="bg-[#111] border border-white/8 p-8"
            >
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-6">Contact Form Demo</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-white/50 uppercase tracking-wider block mb-2">First Name</label>
                    <Input className="bg-[#0a0a0a] border-white/10 focus-visible:ring-[#c9a84c] rounded-none h-12" placeholder="First Name" />
                  </div>
                  <div>
                    <label className="text-xs text-white/50 uppercase tracking-wider block mb-2">Last Name</label>
                    <Input className="bg-[#0a0a0a] border-white/10 focus-visible:ring-[#c9a84c] rounded-none h-12" placeholder="Last Name" />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-white/50 uppercase tracking-wider block mb-2">Mobile Number</label>
                  <Input className="bg-[#0a0a0a] border-white/10 focus-visible:ring-[#c9a84c] rounded-none h-12" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <label className="text-xs text-white/50 uppercase tracking-wider block mb-2">Email</label>
                  <Input type="email" className="bg-[#0a0a0a] border-white/10 focus-visible:ring-[#c9a84c] rounded-none h-12" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="text-xs text-white/50 uppercase tracking-wider block mb-2">Your Message</label>
                  <Textarea className="bg-[#0a0a0a] border-white/10 focus-visible:ring-[#c9a84c] rounded-none min-h-[120px]" placeholder="How can we help you?" />
                </div>
                <Button className="w-full bg-[#c9a84c] hover:bg-[#d4b460] text-[#0a0a0a] rounded-none h-12 font-bold text-sm tracking-widest uppercase">
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
