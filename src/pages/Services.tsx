import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, Compass, HardHat, TrendingUp, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1 } }),
};

const services = [
  {
    id: "plot-selling",
    title: "Plot Selling",
    tagline: "Premium Plots. Zero Compromise.",
    desc: "Access a carefully curated portfolio of verified land parcels across prime residential and commercial locations. Every plot undergoes thorough title verification and legal clearance before listing.",
    icon: <MapPin className="w-10 h-10" />,
    link: "/services/plot-selling",
    img: "https://truston.advrtisinguru.com/wp-content/uploads/2026/04/1-scaled.png",
  },
  {
    id: "architecture-design",
    title: "Architecture & Design",
    tagline: "Your Vision, Brought to Life on Paper First",
    desc: "Bold creative thinking, rigorous technical expertise, and a deep understanding of human needs deliver structures that are beautiful, functional, and built to stand the test of time.",
    icon: <Compass className="w-10 h-10" />,
    link: "/services/architecture-design",
    img: "https://truston.advrtisinguru.com/wp-content/uploads/2026/04/2-scaled.png",
  },
  {
    id: "construction-build",
    title: "Construction & Build",
    tagline: "We Don't Just Build Buildings. We Build Promises",
    desc: "Skilled professionals, quality materials, and proven project management practices turn architectural plans into physical structures you can be proud of — strong, safe, and built to last.",
    icon: <HardHat className="w-10 h-10" />,
    link: "/services/construction-build",
    img: "https://truston.advrtisinguru.com/wp-content/uploads/2026/04/avi-waxman-f9qZuKoZYoY-unsplash-1-scaled.jpg",
  },
  {
    id: "investment-consulting",
    title: "Investment Consulting",
    tagline: "Buy Smart. Invest Smarter.",
    desc: "Data-driven investment guidance focused on long-term value creation. We evaluate opportunities across residential, commercial, and land investments with objective market analysis.",
    icon: <TrendingUp className="w-10 h-10" />,
    link: "/services/investment-consulting",
    img: "https://truston.advrtisinguru.com/wp-content/uploads/2026/04/ahmad-ossayli-tNE4KI3URuE-unsplash-scaled.jpg",
  },
];

export default function Services() {
  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <img
          src="https://truston.advrtisinguru.com/wp-content/uploads/2026/04/april-pethybridge-nN28PjFOOLI-unsplash-scaled.jpg"
          alt="Services"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/85 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <nav className="flex items-center gap-2 text-white/40 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Services</span>
            </nav>
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-5">What We Do</p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Our<br /><em className="text-[#c9a84c] not-italic">Services</em>
            </h1>
            <div className="w-16 h-0.5 bg-[#c9a84c] mb-6" />
            <p className="text-white/50 text-xl max-w-xl">
              Everything You Need, Under One Roof
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i * 0.1}
              >
                <Link href={svc.link}
                  className="group grid grid-cols-1 lg:grid-cols-[1fr_320px] overflow-hidden border border-white/8 hover:border-[#c9a84c]/40 transition-colors duration-500 block bg-[#111]"
                  data-testid={`service-card-${svc.id}`}
                >
                  <div className="p-10 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-5 mb-6">
                      <div className="w-16 h-16 bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] group-hover:bg-[#c9a84c] group-hover:text-[#0a0a0a] transition-all duration-500">
                        {svc.icon}
                      </div>
                      <div>
                        <p className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-1">TrustOn Service</p>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">{svc.title}</h2>
                      </div>
                    </div>
                    <p className="text-xl text-[#c9a84c] font-serif italic mb-4">{svc.tagline}</p>
                    <p className="text-white/55 leading-relaxed mb-8 max-w-xl">{svc.desc}</p>
                    <div className="inline-flex items-center gap-2 text-[#c9a84c] text-sm font-bold tracking-widest uppercase group-hover:gap-4 transition-all">
                      Learn More <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img
                      src={svc.img}
                      alt={svc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#111] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-6">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Ready to Build Your Legacy?</h2>
            <p className="text-white/50 mb-10 text-lg">Contact our team today for a free consultation and take the first step towards your dream property.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"
                className="inline-block px-10 py-4 bg-[#c9a84c] text-[#0a0a0a] font-bold text-sm tracking-widest uppercase hover:bg-[#d4b460] transition-colors"
              >
                Get Free Quote
              </Link>
              <a href="tel:+919616061166"
                className="inline-block px-10 py-4 border border-white/20 text-white font-bold text-sm tracking-widest uppercase hover:border-[#c9a84c]/50 hover:text-[#c9a84c] transition-colors"
              >
                +91 96160-61166
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
