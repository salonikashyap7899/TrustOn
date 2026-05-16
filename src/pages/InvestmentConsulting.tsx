import { motion } from "framer-motion";
import { Link } from "wouter";
import { TrendingUp, BarChart3, PieChart, Landmark, Shield, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1 } }),
};

const processSteps = [
  {
    num: "01",
    title: "Discovery and Brief — Understanding Your Investment Goals First",
    body: "We start by getting to know you — your financial objectives, your investment horizon, your risk tolerance, your liquidity requirements, and the broader wealth building vision behind your interest in real estate. Through detailed consultations and meaningful conversations, our team dives deep into your goals, priorities, and any specific parameters tied to how you want your capital to work. We ask the right questions, listen carefully, and build a comprehensive investor profile that captures both the practical financial requirements and the longer term ambitions behind your investment decisions.",
  },
  {
    num: "02",
    title: "Market and Location Analysis — Investing With Intelligence",
    body: "Before we recommend any property or land parcel, we analyse it thoroughly — its location, surrounding infrastructure, civic development plans, rental demand, historical price trends, upcoming projects in the vicinity, and the broader economic factors influencing that micro market. An investment that works with market momentum rather than against it is always the stronger, smarter choice. Our team assesses capital appreciation potential, rental yield prospects, liquidity at exit, and how the surrounding context is likely to evolve over your intended holding period.",
  },
  {
    num: "03",
    title: "Shortlisting and Due Diligence — Clarity Before You Commit",
    body: "With a thorough understanding of your investment profile and our market analysis complete, we shortlist the most suitable opportunities from our verified portfolio and present each option with full documentation including ownership records, legal clearances, encumbrance certificates, and relevant approvals. You are never pushed toward a single recommendation. Instead, we present a range of thoroughly vetted opportunities, each responding to your investment objectives in a different way, so you can evaluate, compare, and arrive at a decision that truly aligns with your financial goals.",
  },
  {
    num: "04",
    title: "Legal Verification and Transaction Support — Securing Your Investment Before It Is Made",
    body: "Once you identify a preferred investment opportunity, we conduct an independent and comprehensive legal due diligence review covering title verification, ownership chain, encumbrance search, approved land use confirmation, and all relevant government clearances. You will know exactly what you are buying, what rights come with it, what risks if any exist, and what the complete legal and documentation picture looks like before a single rupee changes hands. Every concern is addressed, every document is reviewed, and every question is answered in full.",
  },
];

const faqs = [
  {
    q: "Is this service only for large-scale investors?",
    a: "Not at all. We work with first-time buyers, individual investors, and institutional clients across a wide range of investment sizes and objectives. Real estate investment does not have a minimum entry point to deserve serious advisory support, and we believe every client, regardless of the size of their capital, deserves the same quality of research, due diligence, and strategic thinking. Whether you are purchasing a single residential plot as your first investment or building a multi-asset commercial portfolio, our consulting process is tailored entirely to your scale, your goals, and your financial situation.",
  },
  {
    q: "Which markets and locations do you cover?",
    a: "We focus primarily on key real estate markets across the region, with particular depth in Lucknow and the surrounding growth corridors where we have strong on-ground intelligence, established relationships, and a comprehensive understanding of pricing trends, upcoming infrastructure, and development activity. For clients with broader ambitions, we also provide selective advisory support for high-potential opportunities at the national level where market conditions and asset fundamentals meet our standards for recommendation.",
  },
  {
    q: "How is your consulting fee structured?",
    a: "We offer fixed-fee advisory packages for specific and clearly defined services such as investment profiling, market analysis, or due diligence reviews, as well as success-based models for larger engagements where our compensation is tied to the completion of your transaction. The structure we recommend depends on the scope, complexity, and timeline of your investment goals. Before any engagement begins, we discuss fee arrangements transparently so you have complete clarity on what you are paying for and what you can expect in return. There are no hidden charges, no vague retainer structures, and no pressure to commit to services beyond what your investment actually requires.",
  },
  {
    q: "Can you assist with legal and documentation requirements?",
    a: "Yes. Legal and documentation support is an integral part of our consulting service and not an optional add-on. We coordinate with qualified legal professionals and actively assist in reviewing title documents, sale agreements, encumbrance certificates, approved land use records, and all compliance paperwork relevant to your transaction. Our team ensures that every document is examined thoroughly before any commitment is made, that any irregularities or concerns are clearly flagged and resolved, and that the complete ownership transfer process is handled in a way that fully protects your interests.",
  },
];

export default function InvestmentConsulting() {
  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <img
          src="https://truston.advrtisinguru.com/wp-content/uploads/2026/04/ahmad-ossayli-tNE4KI3URuE-unsplash-scaled.jpg"
          alt="Investment Consulting"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/85 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <nav className="flex items-center gap-2 text-white/40 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white">Investment Consulting</span>
            </nav>
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Our Services</p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 leading-tight">Investment<br />Consulting</h1>
            <p className="text-2xl text-[#c9a84c] font-serif italic mb-6">Buy Smart. Invest Smarter.</p>
            <div className="w-16 h-0.5 bg-[#c9a84c] mb-8" />
            <div className="flex items-center gap-4 p-5 bg-[#0a0a0a]/70 backdrop-blur border border-white/10 inline-flex max-w-sm">
              <Phone className="w-5 h-5 text-[#c9a84c] shrink-0" />
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest">Contact with us for any advice</p>
                <a href="tel:+919616061166" className="text-white font-serif font-bold hover:text-[#c9a84c] transition-colors">+91 96160-61166</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Smarter Real Estate Investments</h2>
              <div className="w-12 h-0.5 bg-[#c9a84c] mb-8" />
              <div className="space-y-5 text-white/60 leading-relaxed">
                <p>Whether you are entering real estate for the first time or looking to strengthen an existing portfolio, our investment consulting team is ready to help you identify opportunities that deliver real and lasting returns.</p>
                <p>We begin by understanding your financial goals, risk appetite, and investment horizon in detail, because no two investors should follow the same strategy. Based on this, we evaluate opportunities across residential, commercial, and land investments, considering factors such as location growth, rental potential, capital appreciation, and liquidity.</p>
                <p>Our recommendations are not driven by sales targets, but by objective market analysis and long term value creation. We also assist with due diligence, portfolio structuring, and timing decisions, ensuring that each investment contributes meaningfully to your overall financial plan.</p>
                <p>The focus is not just on buying property, but on building a resilient and well positioned real estate portfolio that delivers consistent and sustainable returns over time.</p>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact"
                  className="inline-block px-8 py-4 bg-[#c9a84c] text-[#0a0a0a] font-bold text-sm tracking-widest uppercase hover:bg-[#d4b460] transition-colors"
                >
                  Book a Consultation
                </Link>
                <Link href="/contact"
                  className="inline-block px-8 py-4 border border-white/20 text-white font-bold text-sm tracking-widest uppercase hover:border-[#c9a84c]/50 hover:text-[#c9a84c] transition-colors"
                >
                  Get Free Quote
                </Link>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: <BarChart3 className="w-7 h-7" />, label: "Market Analysis", desc: "Deep dive into growth corridors and pricing trends." },
                { icon: <PieChart className="w-7 h-7" />, label: "Portfolio Strategy", desc: "Diversified real estate portfolio building." },
                { icon: <Shield className="w-7 h-7" />, label: "Legal Advisory", desc: "Fully RERA compliant, legally secure investments." },
                { icon: <TrendingUp className="w-7 h-7" />, label: "ROI Planning", desc: "Maximize returns through data-informed decisions." },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-[#111] border border-white/8 hover:border-[#c9a84c]/30 transition-colors text-center">
                  <div className="w-12 h-12 bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-serif font-bold mb-2">{item.label}</h4>
                  <p className="text-white/40 text-xs">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Trust */}
      <section className="py-24 bg-[#111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="p-10 bg-[#0a0a0a] border border-white/8"
          >
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Why Clients Trust</p>
            <h2 className="text-3xl font-serif font-bold text-white mb-6">TrustOn with Their Real Estate Investment?</h2>
            <div className="space-y-5 text-white/60 leading-relaxed">
              <p>Choosing the right investment advisory partner is one of the most important decisions you will make before committing capital to real estate. At TrustOn, we earn that trust through consistent delivery, honest guidance, and an unwavering commitment to protecting and growing what you invest.</p>
              <p>Our investment consultants bring years of hands-on experience across residential, commercial, and land-based real estate transactions, combining deep market knowledge with a genuine understanding of what each investor needs to achieve. We know the local property landscape thoroughly — the pricing trends, the growth corridors, the regulatory environment, and the factors that separate a sound investment from a costly mistake.</p>
              <p>We believe that no two investors are alike. Whether you are making your first real estate investment, diversifying an existing portfolio, planning for retirement, or deploying capital across multiple asset types, our approach begins with listening — truly understanding your financial goals, your risk appetite, your investment horizon, and the specific outcomes you are working towards — before we make a single recommendation.</p>
              <p className="text-white font-semibold italic">We are not just advisors. We are your partners in building a real estate portfolio that performs with purpose, grows over time, and stands on a foundation of well-informed decisions.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Our Methodology</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Where Every Smart Investment Finds Its Direction</h2>
            <p className="text-white/50 max-w-2xl mx-auto">Every great investment begins with a great process. At TrustOn, we follow a structured yet flexible investment consulting methodology.</p>
          </motion.div>

          <div className="space-y-6">
            {processSteps.map((step, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.1}
                className="flex gap-8 p-8 bg-[#111] border border-white/8 hover:border-[#c9a84c]/30 transition-colors"
              >
                <div className="shrink-0 w-16 h-16 bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center">
                  <span className="text-[#c9a84c] font-serif font-bold text-xl">{step.num}</span>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/55 leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#111]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Questions &amp; Answers</p>
            <h2 className="text-4xl font-serif font-bold text-white">Frequently Asked Questions</h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.08}>
                <AccordionItem value={`item-${i}`}
                  className="border border-white/8 bg-[#0a0a0a] data-[state=open]:border-[#c9a84c]/40 transition-colors px-6 rounded-none"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-serif font-semibold text-white hover:text-[#c9a84c] hover:no-underline transition-colors py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60 leading-relaxed pb-6">{faq.a}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
