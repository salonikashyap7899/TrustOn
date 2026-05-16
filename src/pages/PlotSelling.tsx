import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, ShieldCheck, ChevronRight, Phone } from "lucide-react";
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
    title: "Discovery and Brief — Understanding You First",
    body: "We start by getting to know you — your purpose for the land, your budget, your preferred locations, your timeline, and the vision behind the purchase. This phase forms the unshakeable foundation of everything that follows. Through detailed consultations and meaningful conversations, our team dives deep into your goals, priorities, and any specific requirements tied to how you intend to use the land. We ask the right questions, listen carefully, and build a comprehensive buyer brief that captures both the practical parameters and the broader ambitions behind your investment.",
  },
  {
    num: "02",
    title: "Site and Location Analysis — Evaluating With Intelligence",
    body: "Before we recommend any plot, we study it thoroughly — its location, access roads, surrounding development, civic infrastructure, approved land use, proximity to schools, hospitals, and commercial centres, and the broader growth trajectory of the area. A plot that works with your goals rather than against them is always the stronger, smarter choice. Our team assesses connectivity, neighbourhood quality, soil and topography where relevant, utility access, and how the surrounding context is likely to evolve over the coming years.",
  },
  {
    num: "03",
    title: "Shortlisting and Site Visits — Bringing Clarity Before You Commit",
    body: "With a thorough understanding of your brief and our site analysis complete, we shortlist the most suitable plots from our verified portfolio and present each option with full documentation including title history, survey maps, encumbrance certificates, and relevant approvals. This stage is all about informed exploration and open dialogue — giving you the freedom to compare genuine options and ask every question you need to before making any decision. We then arrange accompanied site visits so you can experience each plot in person.",
  },
  {
    num: "04",
    title: "Due Diligence and Documentation — Securing Your Investment Before It Is Made",
    body: "Once you identify a preferred plot, we conduct an independent and comprehensive legal due diligence review covering title verification, ownership chain, encumbrance search, approved land use confirmation, and all relevant government clearances. You will know exactly what you are buying, what rights come with it, what restrictions if any apply, and what the complete documentation picture looks like before a single rupee changes hands. Every concern is addressed, every document is reviewed, and every question is answered in full.",
  },
];

const faqs = [
  {
    q: "Are the plots freehold or leasehold?",
    a: "The majority of plots in our portfolio are freehold, meaning full and unconditional ownership rights are transferred to you at the time of registration with no ongoing obligations to any landlord, authority, or third party. Freehold ownership gives you complete freedom to build, modify, sell, or lease your land as you choose, without seeking permission from anyone. In cases where leasehold arrangements exist, these are clearly disclosed at the very start of the conversation.",
  },
  {
    q: "Can I visit the plot before making a purchase decision?",
    a: "Absolutely. Site visits are not just encouraged — they are something we consider an essential part of every purchase decision. Our team arranges accompanied visits at a time that is convenient for you, and we come prepared with all relevant survey documents, boundary markings, and location context so your visit is as informative as possible. During the visit we walk you through the plot boundaries, explain the approved survey markings, point out road access points, discuss neighbouring structures and developments, and give you an honest assessment of the surrounding neighbourhood and its growth trajectory.",
  },
  {
    q: "Is financing available for plot purchases?",
    a: "Yes. We work with a select group of banking and lending partners who offer dedicated plot loans with competitive interest rates and flexible repayment structures suited to a range of buyer profiles. Our team can guide you through the eligibility criteria relevant to your situation, explain the documentation that lenders typically require, and help you prepare a complete and well-organised application package.",
  },
  {
    q: "How quickly is ownership transferred after payment?",
    a: "Once all documentation is in order and the agreed payment has been completed, ownership transfer through the sub-registrar office is typically processed within 15 to 30 working days, subject to local registry scheduling and any administrative requirements specific to the plot or its location. Our team tracks every stage of the transfer process, follows up proactively with the relevant authorities on your behalf, and keeps you informed at each step.",
  },
];

export default function PlotSelling() {
  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <img
          src="https://truston.advrtisinguru.com/wp-content/uploads/2026/04/april-pethybridge-nN28PjFOOLI-unsplash-scaled.jpg"
          alt="Plot Selling"
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
              <span className="text-white">Plot Selling</span>
            </nav>
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Our Services</p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 leading-tight">Plot Selling</h1>
            <p className="text-2xl text-[#c9a84c] font-serif italic mb-6">Premium Plots. Zero Compromise.</p>
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
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Find the Right Plot and Build Something Lasting</h2>
              <div className="w-12 h-0.5 bg-[#c9a84c] mb-8" />
              <div className="space-y-5 text-white/60 leading-relaxed text-base">
                <p>Land is the starting point of every meaningful project. Whether you are planning a family home, a commercial development, or a long term investment, selecting the right plot shapes everything that follows. Our plot selling service provides access to a carefully curated portfolio of verified land parcels across prime residential and commercial locations.</p>
                <p>Each property is assessed for legal clarity, ownership records, zoning compliance, and surrounding infrastructure, ensuring it is not only secure but also ready for future development. Beyond listings, we offer strategic guidance on location value, connectivity, and growth potential so you understand both the present worth and future upside of your investment.</p>
                <p>We understand that buying land involves critical decisions and detailed processes. Our team supports you at every stage, from site evaluation and documentation review to negotiations and final registration. We ensure transparency, compliance, and smooth coordination with all required authorities, reducing risk and avoiding delays.</p>
                <p>Every plot in our portfolio undergoes thorough title verification and legal clearance before it is listed. We only present opportunities we are confident in, which means you spend less time worrying about paperwork and more time planning what comes next.</p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#c9a84c] text-[#0a0a0a] font-bold text-sm tracking-widest uppercase hover:bg-[#d4b460] transition-colors"
                  data-testid="plot-cta"
                >
                  Book a Site Visit <ChevronRight className="w-4 h-4" />
                </Link>
                <Link href="/contact"
                  className="inline-block px-8 py-4 border border-white/20 text-white font-bold text-sm tracking-widest uppercase hover:border-[#c9a84c]/50 hover:text-[#c9a84c] transition-colors"
                >
                  Get Free Quote
                </Link>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
              className="relative"
            >
              <img
                src="https://truston.advrtisinguru.com/wp-content/uploads/2026/04/1-scaled.png"
                alt="Prime Estate Plot"
                className="w-full h-[560px] object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#c9a84c] p-6 text-[#0a0a0a]">
                <p className="font-serif font-bold text-3xl">85</p>
                <p className="text-xs font-bold uppercase tracking-wider">Plots Available</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Benefits */}
      <section className="py-24 bg-[#111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-16">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Benefits</h2>
            <div className="w-16 h-0.5 bg-[#c9a84c]" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              { icon: <ShieldCheck className="w-6 h-6" />, title: "Legal Security", desc: "Every plot backed by Jila Panchayat approval & clear title deeds before listing." },
              { icon: <MapPin className="w-6 h-6" />, title: "Prime Location", desc: "Strategic positioning with road access, utility connections, and growth corridors." },
              { icon: <ShieldCheck className="w-6 h-6" />, title: "Transparent Dealings", desc: "No hidden charges. What we quote is what you pay — always." },
              { icon: <MapPin className="w-6 h-6" />, title: "End-to-End Support", desc: "From site visit to final registration — we're with you at every stage." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.1}
                className="flex gap-5 p-7 bg-[#0a0a0a] border border-white/8 hover:border-[#c9a84c]/30 transition-colors"
              >
                <div className="w-12 h-12 bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-serif font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Why Clients Trust */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="p-10 bg-[#0a0a0a] border border-white/8"
          >
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Why Clients Trust</p>
            <h2 className="text-3xl font-serif font-bold text-white mb-6">TrustOn with Their Plot Purchase?</h2>
            <div className="space-y-5 text-white/60 leading-relaxed">
              <p>Choosing the right plot and the right partner to guide that purchase is one of the most important decisions you will make for your future. At TrustOn, we earn that trust through consistent delivery, honest communication, and an unwavering commitment to getting every detail right.</p>
              <p>Our real estate professionals bring years of hands-on experience across residential, commercial, and township plot transactions, combining deep market knowledge with a genuine understanding of what each client needs. We know the local land records landscape, the regulatory requirements, and the documentation processes thoroughly, which means fewer delays, fewer surprises, and a smoother path to ownership.</p>
              <p>We believe that no two buyers are alike. Whether you are purchasing land for a private home, a commercial venture, a long term investment, or a larger development project, our approach begins with listening — truly understanding your goals, your timeline, your budget, and the specific requirements of your intended use — before we present a single option.</p>
              <p className="text-white font-semibold italic">We are not just plot sellers. We are your partners in securing the right foundation for everything you plan to build upon it.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Our Methodology</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Where Your Future Begins With the Right Plot</h2>
            <p className="text-white/50 max-w-2xl mx-auto">Every great investment begins with a great process. At TrustOn, we follow a structured yet flexible plot acquisition methodology.</p>
          </motion.div>

          <div className="space-y-6">
            {processSteps.map((step, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.1}
                className="group flex gap-8 p-8 bg-[#111] border border-white/8 hover:border-[#c9a84c]/30 transition-colors"
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

      {/* FAQs */}
      <section className="py-24 bg-[#111]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Questions & Answers</p>
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
                  <AccordionContent className="text-white/60 leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
