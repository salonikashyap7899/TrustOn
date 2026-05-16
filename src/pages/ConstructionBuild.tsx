import { motion } from "framer-motion";
import { Link } from "wouter";
import { HardHat, Ruler, Hammer, Settings, Phone } from "lucide-react";
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
    title: "Client Understanding and Project Brief",
    body: "We begin by understanding what matters most to you. This includes your functional requirements, long term goals, budget expectations, and the purpose behind the project. Whether it is a residence, commercial setup, or large scale development, we focus on translating your ideas into a clear and actionable brief. Through focused discussions, we identify priorities, constraints, and opportunities early. This step ensures that every design and construction decision moving forward is aligned with a well defined objective, not assumptions.",
  },
  {
    num: "02",
    title: "Site Evaluation",
    body: "A project is only as strong as its response to the site. Before planning begins, we conduct a detailed evaluation of the land, including orientation, access, levels, surroundings, and environmental conditions. We study sunlight patterns, airflow, and external influences to ensure the structure works with its environment. This allows us to improve efficiency, enhance usability, and avoid costly design conflicts during execution. The result is a building that fits its location naturally and performs efficiently over time.",
  },
  {
    num: "03",
    title: "Concept Planning",
    body: "Once the groundwork is clear, we move into concept development. Instead of a single fixed proposal, we explore multiple planning directions that respond to your requirements in different ways. This stage allows you to compare layouts, spatial planning approaches, and design intent before committing. Your input plays a direct role in selecting and refining the direction, ensuring the project evolves with clarity and confidence.",
  },
  {
    num: "04",
    title: "Design Development and Visualization",
    body: "After finalizing the concept, we move into detailed development. Plans are refined, technical aspects are aligned, and the project is visualized through 3D views and walkthroughs. This phase helps you understand scale, layout flow, material application, and overall feel before execution begins. It reduces uncertainty on site and allows decisions to be made early, saving both time and cost during construction. By the end of this stage, the project is not just designed, it is fully thought through, technically aligned, and ready to move into execution without confusion.",
  },
];

const faqs = [
  {
    q: "Do you handle both residential and commercial construction?",
    a: "Yes. We manage construction projects across a wide range of categories including independent residential homes, apartment buildings, commercial offices, retail establishments, hospitality properties, and mixed use developments. Our teams are experienced across all these typologies and adapt their approach to the specific demands and quality standards each project type requires.",
  },
  {
    q: "Can you work with an architect or design firm we have already engaged?",
    a: "Absolutely. We are highly experienced at building from third party designs and documentation. We will coordinate directly with your chosen architect or design consultant from the beginning to ensure that their plans are fully understood, any constructability issues are identified early, and the final build is executed precisely in line with their intent. A strong working relationship between design and construction is something we actively cultivate on every project.",
  },
  {
    q: "How do you handle unexpected issues or cost changes during construction?",
    a: "In construction, unforeseen conditions such as unexpected soil conditions, hidden utilities, or material supply disruptions can occasionally arise. Our protocol is clear — any issue that may affect cost or timeline is communicated to the client immediately, along with a transparent explanation, a revised estimate, and our recommended course of action. No additional work is ever carried out without your prior approval. We believe that honest, timely communication is the foundation of a trusted contractor and client relationship.",
  },
  {
    q: "What quality checks take place during the build?",
    a: "We carry out structured quality inspections at every major milestone of the construction process including foundation and substructure, structural frame completion, MEP rough in, plastering, flooring, and final finishing. Our site supervisors maintain ongoing daily oversight, and formal sign off is required at each milestone before the next phase proceeds. This layered approach ensures that quality is built into the process at every stage, not inspected for only at the end.",
  },
];

export default function ConstructionBuild() {
  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <img
          src="https://truston.advrtisinguru.com/wp-content/uploads/2026/04/avi-waxman-f9qZuKoZYoY-unsplash-1-scaled.jpg"
          alt="Construction & Build"
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
              <span className="text-white">Construction &amp; Build</span>
            </nav>
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Our Services</p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 leading-tight">Construction<br />&amp; Build</h1>
            <p className="text-2xl text-[#c9a84c] font-serif italic mb-6">We Don't Just Build Buildings. We Build Promises</p>
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
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">From Blueprint to Reality, Built the Way You Imagined</h2>
              <div className="w-12 h-0.5 bg-[#c9a84c] mb-8" />
              <div className="space-y-5 text-white/60 leading-relaxed">
                <p>A great design is only as good as its execution. Our construction and build service brings together skilled professionals, quality materials, and proven project management practices to turn architectural plans into physical structures you can be proud of — structures that are strong, safe, and built to last a lifetime.</p>
                <p>We oversee every phase of the build from site preparation and foundation work to structural completion and finishing details — ensuring standards are upheld at every level of the project, with no shortcuts and no compromises.</p>
                <p>We work closely with clients throughout the entire construction journey, maintaining full transparency on timelines, costs, and progress so there are never any unwelcome surprises. Our commitment is to deliver every project on time, within the agreed budget, and to the precise quality specifications established from the very start.</p>
                <p>We understand that construction is not just a business transaction. It is the realisation of something you have invested in, planned for, and looked forward to. That responsibility is never taken lightly.</p>
                <p>Our construction teams are experienced across residential, commercial, and mixed-use developments. We source materials responsibly, apply modern construction methods, and maintain rigorous quality controls at every stage.</p>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact"
                  className="inline-block px-8 py-4 bg-[#c9a84c] text-[#0a0a0a] font-bold text-sm tracking-widest uppercase hover:bg-[#d4b460] transition-colors"
                >
                  Start Your Project
                </Link>
                <Link href="/contact"
                  className="inline-block px-8 py-4 border border-white/20 text-white font-bold text-sm tracking-widest uppercase hover:border-[#c9a84c]/50 hover:text-[#c9a84c] transition-colors"
                >
                  Get Free Quote
                </Link>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}>
              <img
                src="https://truston.advrtisinguru.com/wp-content/uploads/2026/04/avi-waxman-f9qZuKoZYoY-unsplash-1-scaled.jpg"
                alt="Construction"
                className="w-full h-[560px] object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-16">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-4">What We Offer</p>
            <h2 className="text-4xl font-serif font-bold text-white mb-2">Our Benefits</h2>
            <p className="text-white/50">End to End Site Management</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {[
              { icon: <Ruler className="w-7 h-7" />, title: "Precision Engineering", desc: "Rigorous quality checks at every stage of construction — foundation through finishing." },
              { icon: <Hammer className="w-7 h-7" />, title: "Premium Materials", desc: "Grade-A materials sourced responsibly from trusted, verified vendors only." },
              { icon: <Settings className="w-7 h-7" />, title: "Timely Delivery", desc: "Strict adherence to project timelines without ever compromising on quality." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.1}
                className="p-8 bg-[#0a0a0a] border border-white/8 hover:border-[#c9a84c]/30 transition-colors text-center"
              >
                <div className="w-14 h-14 bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] mx-auto mb-5">
                  {item.icon}
                </div>
                <h3 className="text-white font-serif font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-white/50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Why Trust */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="p-10 bg-[#0a0a0a] border border-white/8"
          >
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Why Clients Trust</p>
            <h2 className="text-3xl font-serif font-bold text-white mb-6">TrustOn with Their Construction?</h2>
            <div className="space-y-5 text-white/60 leading-relaxed">
              <p>Choosing the right construction partner is one of the most important decisions you will make for your project. At TrustOn, we earn that trust through consistent delivery, honest communication, and an unwavering commitment to build quality.</p>
              <p>Our construction teams bring years of hands on experience across residential, commercial, and mixed use projects — combining technical skill with on site discipline and a genuine pride in the work they deliver. We understand the local regulatory landscape deeply, which means fewer delays, smoother site approvals, and a build process that moves forward without unnecessary interruptions.</p>
              <p>We also understand that building or renovating is a significant investment — financially and emotionally — so we treat every project with the care and attention it deserves, regardless of scale. No job is too small to deserve our best effort, and no project is too large for us to manage with the same personal accountability.</p>
              <p>We believe that no two projects are alike. Whether you are planning a private home, a commercial building, a hospitality property, or a large scale mixed use development, our approach begins with listening.</p>
              <p className="text-white font-semibold italic">We are not just contractors. We are your partners in creating a structure that is built right, built to last, and built to serve the life or business you are putting inside it.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Our Process</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Where Ideas Take Shape Through Expert Construction</h2>
            <p className="text-white/50 max-w-2xl mx-auto">Every successful project is driven by a clear and disciplined process combining structured planning with practical flexibility.</p>
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
