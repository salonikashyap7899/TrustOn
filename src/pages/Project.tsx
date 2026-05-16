import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, Home, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1 } }),
};

export default function Project() {
  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <img
          src="https://truston.advrtisinguru.com/wp-content/uploads/2026/04/avi-werde-hHz4yrvxwlA-unsplash-scaled.jpg"
          alt="Our Projects"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/85 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <nav className="flex items-center gap-2 text-white/40 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Project</span>
            </nav>
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-5">Our Portfolio</p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Our<br /><em className="text-[#c9a84c] not-italic">Projects</em>
            </h1>
            <div className="w-16 h-0.5 bg-[#c9a84c]" />
          </motion.div>
        </div>
      </section>

      {/* Prime Estate Card */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="group relative overflow-hidden border border-white/8 hover:border-[#c9a84c]/40 transition-colors duration-500"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Images Grid */}
              <div className="grid grid-cols-2 gap-0.5">
                <img
                  src="https://truston.advrtisinguru.com/wp-content/uploads/2026/04/1-scaled.png"
                  alt="Prime Estate"
                  className="w-full h-64 lg:h-96 object-cover"
                  loading="lazy"
                />
                <img
                  src="https://truston.advrtisinguru.com/wp-content/uploads/2026/04/2-scaled.png"
                  alt="Prime Estate Interior"
                  className="w-full h-64 lg:h-96 object-cover"
                  loading="lazy"
                />
                <img
                  src="https://truston.advrtisinguru.com/wp-content/uploads/2026/04/3-scaled.png"
                  alt="Prime Estate Layout"
                  className="w-full h-48 lg:h-64 object-cover col-span-2"
                  loading="lazy"
                />
              </div>

              {/* Details */}
              <div className="p-10 lg:p-14 flex flex-col justify-center bg-[#111]">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1.5 bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-bold tracking-widest uppercase">
                    Residential
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Prime Estate</h2>
                <div className="flex items-center gap-2 text-white/50 mb-6">
                  <MapPin className="w-4 h-4 text-[#c9a84c]" />
                  <span>Lucknow, Uttar Pradesh</span>
                </div>
                <div className="w-12 h-0.5 bg-[#c9a84c] mb-8" />

                <div className="grid grid-cols-2 gap-4 mb-10">
                  {[
                    { label: "Total Plots", val: "150" },
                    { label: "Plots Sold", val: "45" },
                    { label: "Plots Booked", val: "20" },
                    { label: "Available", val: "85" },
                  ].map((stat) => (
                    <div key={stat.label} className="p-4 bg-[#0a0a0a] border border-white/8">
                      <p className="text-[#c9a84c] font-serif font-bold text-2xl mb-1">{stat.val}</p>
                      <p className="text-white/40 text-xs uppercase tracking-wider">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-10">
                  {[
                    "Jila Panchayat Approved Township",
                    "Clear Title Deeds — Zero Legal Risk",
                    "Prime Location with Road Access",
                    "Future-Ready Infrastructure",
                    "Flexible Payment Plans",
                    "RERA Compliant Project",
                  ].map((pt, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full shrink-0" />
                      <span className="text-white/70 text-sm">{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link href="/services/plot-selling"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#c9a84c] text-[#0a0a0a] font-bold text-sm tracking-widest uppercase hover:bg-[#d4b460] transition-colors"
                    data-testid="project-explore-cta"
                  >
                    Explore Plots <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link href="/contact"
                    className="inline-block px-7 py-3.5 border border-white/20 text-white font-bold text-sm tracking-widest uppercase hover:border-[#c9a84c]/50 hover:text-[#c9a84c] transition-colors"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* More Images */}
      <section className="py-16 bg-[#111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Gallery</p>
            <h2 className="text-3xl font-serif font-bold text-white">Where Imagination Takes Shape in Luxury</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "https://truston.advrtisinguru.com/wp-content/uploads/2026/04/april-pethybridge-nN28PjFOOLI-unsplash-scaled.jpg", alt: "Prime Estate View 1" },
              { src: "https://truston.advrtisinguru.com/wp-content/uploads/2026/04/ahmad-ossayli-tNE4KI3URuE-unsplash-scaled.jpg", alt: "Prime Estate View 2" },
              { src: "https://truston.advrtisinguru.com/wp-content/uploads/2026/04/avi-waxman-f9qZuKoZYoY-unsplash-1-scaled.jpg", alt: "Prime Estate View 3" },
              { src: "https://truston.advrtisinguru.com/wp-content/uploads/2026/04/avi-werde-hHz4yrvxwlA-unsplash-scaled.jpg", alt: "Prime Estate View 4" },
            ].map((img, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.08}
                className="relative overflow-hidden aspect-square group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <Home className="w-10 h-10 text-[#c9a84c] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Ready to Own Your Plot?</h2>
            <p className="text-white/50 mb-10 text-lg">43% already reserved. Don't miss your opportunity to invest in Lucknow's fastest-growing township.</p>
            <Link href="/contact"
              className="inline-block px-10 py-4 bg-[#c9a84c] text-[#0a0a0a] font-bold text-sm tracking-widest uppercase hover:bg-[#d4b460] transition-colors"
            >
              Book a Site Visit Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
