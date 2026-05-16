import { motion } from "framer-motion";
import { Link } from "wouter";
import { Target, Compass, Phone } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1 } }),
};

export default function AboutUs() {
  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <img
          src="https://truston.advrtisinguru.com/wp-content/uploads/2026/04/avi-werde-hHz4yrvxwlA-unsplash-scaled.jpg"
          alt="About TrustOn"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/85 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-5">Our Story</p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              About Us
            </h1>
            <div className="w-16 h-0.5 bg-[#c9a84c] mb-6" />
            <nav className="flex items-center gap-2 text-white/40 text-sm">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">About Us</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Skilled Team Banner */}
      <section className="py-6 bg-[#c9a84c]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-[#0a0a0a] font-bold text-sm tracking-[0.2em] uppercase text-center">Skilled Team — People Who Make It Happen</p>
        </div>
      </section>

      {/* Main About */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Who We Are</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                PRIME ESTATE — Own the Ground. Build Your Legacy.
              </h2>
              <div className="w-16 h-0.5 bg-[#c9a84c] mb-8" />
              <p className="text-white/60 leading-relaxed text-lg mb-6">
                Prime Estate is a trusted name in real estate development, built on a foundation of transparency, quality, and long-term vision. We don't just sell land — we craft opportunities. Our flagship project, Prime Estate, is a Jila Panchayat approved township that combines legal security, prime location, and future-ready infrastructure.
              </p>
              <p className="text-white/60 leading-relaxed text-lg mb-6">
                We plan every project with a long-term vision, focusing on location intelligence, infrastructure growth, and future value appreciation. Our developments are designed to offer not just spaces, but smart investments.
              </p>
              <p className="text-white/60 leading-relaxed text-lg mb-10">
                From land acquisition to final delivery, we follow a structured, transparent process. Quality construction, timely delivery, and regulatory compliance are at the core of every project we build.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+919616061166"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#c9a84c] text-[#0a0a0a] font-bold text-sm tracking-widest uppercase hover:bg-[#d4b460] transition-colors"
                  data-testid="about-call-cta"
                >
                  <Phone className="w-4 h-4" /> Call Anytime
                </a>
                <Link href="/services"
                  className="inline-block px-7 py-3.5 border border-white/20 text-white text-sm font-bold tracking-widest uppercase hover:border-[#c9a84c]/50 hover:text-[#c9a84c] transition-colors"
                >
                  Explore Our Services
                </Link>
                <Link href="/contact"
                  className="inline-block px-7 py-3.5 border border-white/20 text-white text-sm font-bold tracking-widest uppercase hover:border-[#c9a84c]/50 hover:text-[#c9a84c] transition-colors"
                >
                  Get Free Quote
                </Link>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
              className="relative"
            >
              <img
                src="https://truston.advrtisinguru.com/wp-content/uploads/2026/04/april-pethybridge-nN28PjFOOLI-unsplash-scaled.jpg"
                alt="TrustOn Development"
                className="w-full h-[600px] object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#c9a84c] p-6 text-[#0a0a0a]">
                <p className="font-serif font-bold text-3xl">10+</p>
                <p className="text-xs font-bold uppercase tracking-wider">Years Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Our Purpose</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Mission &amp; Vision</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="p-10 bg-[#0a0a0a] border border-white/8 hover:border-[#c9a84c]/30 transition-colors"
            >
              <Target className="w-12 h-12 text-[#c9a84c] mb-8" />
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white/60 leading-relaxed text-lg">
                To make premium, legally secure land ownership accessible to every aspiring homeowner and investor.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
              className="p-10 bg-[#0a0a0a] border border-white/8 hover:border-[#c9a84c]/30 transition-colors"
            >
              <Compass className="w-12 h-12 text-[#c9a84c] mb-8" />
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/60 leading-relaxed text-lg">
                To build not just properties, but thriving communities where families live, businesses grow, and life flourishes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Leadership</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">The People Leading Our Vision</h2>
          </motion.div>

          <div className="max-w-xs mx-auto">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="group text-center"
            >
              <div className="relative mb-6 overflow-hidden">
                <img
                  src="https://truston.advrtisinguru.com/wp-content/uploads/2026/04/ser3.jpg"
                  alt="Meraj Husain Rizvi"
                  className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 to-transparent" />
              </div>
              <div className="h-0.5 w-12 bg-[#c9a84c] mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-bold text-white mb-1">Meraj Husain Rizvi</h3>
              <p className="text-[#c9a84c] text-sm font-semibold tracking-wider uppercase">Architect</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Lucknow */}
      <section className="py-24 bg-[#111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Location Advantage</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Why Invest in Lucknow?</h2>
              <div className="w-16 h-0.5 bg-[#c9a84c] mb-8" />
              <p className="text-white/60 leading-relaxed text-lg mb-8">
                Lucknow is one of India's fastest-growing real estate markets driven by world-class infrastructure, government-backed smart city initiatives, and rapidly rising land values. An ideal destination for NRI buyers and long-term investors looking for high returns with low risk.
              </p>
              <div className="space-y-4">
                {[
                  "Government-backed smart city initiatives",
                  "Rapidly rising land values",
                  "World-class infrastructure",
                  "Ideal for NRI buyers",
                  "High returns with low risk",
                ].map((pt, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full shrink-0" />
                    <span className="text-white/70">{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}>
              <img
                src="https://truston.advrtisinguru.com/wp-content/uploads/2026/04/avi-waxman-f9qZuKoZYoY-unsplash-1-scaled.jpg"
                alt="Lucknow Real Estate"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
