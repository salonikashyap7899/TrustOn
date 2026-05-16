import { motion } from "framer-motion";
import { Link } from "wouter";
import { Compass, PenTool, Layers, Eye, Phone } from "lucide-react";
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
    title: "Discovery & Brief — Understanding You First",
    body: "We start by getting to know you — your lifestyle, your aspirations, your functional needs, and the story you want your space to tell. This phase forms the unshakeable foundation of everything that follows. Through detailed consultations and meaningful conversations, our team dives deep into your goals, preferences, and priorities. We ask the right questions, listen carefully, and document a comprehensive design brief that captures both the practical requirements and the emotional essence of what you're trying to create. Whether you're building your forever home, a commercial space, or a hospitality project, this stage ensures that every subsequent design decision is rooted in a clear, shared understanding of what success looks like for you.",
  },
  {
    num: "02",
    title: "Site Analysis — Designing With Intelligence",
    body: "Before a single line is drawn, we study your plot thoroughly — its orientation, topography, access points, neighbouring structures, natural light patterns, prevailing winds, and wider environmental factors. A design that works with its site rather than against it is always stronger, more efficient, and more sustainable. Our architects and site analysts assess how sunlight moves across your land throughout the day, how natural ventilation can be maximised, and how the surrounding context can be embraced or appropriately screened. This rigorous, data-informed site analysis allows us to make design decisions that are grounded in reality.",
  },
  {
    num: "03",
    title: "Concept Design — Shaping Your Vision",
    body: "With a thorough understanding of your brief and your site, our architects develop initial concept sketches and multiple distinct design directions for you to review and choose from. This stage is all about creative exploration and open dialogue — giving you the freedom and the creative input to shape the outcome you want right from the very beginning. You are never handed a single \"take it or leave it\" solution. Instead, we present a range of thoughtfully considered directions, each responding to your brief in a different way, so you can explore, compare, and make an informed choice that truly resonates with your vision.",
  },
  {
    num: "04",
    title: "Design Development & 3D Visualisation — Bringing It to Life Before It's Built",
    body: "Once a concept direction is chosen, it is developed in full detail — refined, enriched, and brought to life through photorealistic 3D renders and immersive walkthroughs so you can genuinely experience your future space long before construction ever begins. You'll see how light falls through windows at different times of day, how materials and finishes interact, how rooms flow into one another, and how the overall spatial composition feels from multiple perspectives. Materials, textures, colour palettes, and spatial relationships are all carefully refined at this stage, ensuring that every detail aligns with both your aesthetic vision and your practical requirements.",
  },
];

const faqs = [
  {
    q: "Can changes be made after the design is finalised?",
    a: "Minor modifications — such as adjustments to room sizes, door or window positions, and material selections — can usually be accommodated without significant delays or cost implications, provided work has not yet commenced on site. Major structural changes may require a revised set of drawings and extended timelines. We always recommend discussing potential changes with our design team as early as possible to minimise disruption and keep your project on schedule.",
  },
  {
    q: "How long does the architectural design process typically take?",
    a: "The timeline varies depending on the scale and complexity of the project. For standard residential projects, the design process from initial brief to approval-ready drawings typically takes 4 to 8 weeks, including concept design, client review rounds, and revisions. For larger residential properties, commercial buildings, or multi-unit developments, the process may take 10 to 16 weeks or more. We provide a clear project schedule at the outset so you always know what to expect and when.",
  },
  {
    q: "Do you provide interior design services as well?",
    a: "Yes. We offer fully integrated interior design services alongside our architectural work, ensuring a seamless and cohesive aesthetic from the building's exterior facade through to every interior space — including living areas, kitchens, bathrooms, and commercial interiors. Our interior design team works in close collaboration with the architecture team so that structure, spatial planning, lighting design, material choices, and furnishing all work together as one unified vision.",
  },
  {
    q: "What should I prepare before our first consultation?",
    a: "Having a few key pieces of information ready will help us make your first meeting as productive as possible. Ideally, bring or share your plot dimensions and survey documents, a rough budget range, any inspiration images or reference projects that reflect your preferred style, your timeline expectations, and a list of specific requirements such as the number of rooms, special-use spaces, accessibility needs, or any particular features you have in mind. The more context you can give us upfront, the faster we can develop a design direction that truly fits your vision.",
  },
];

export default function ArchitectureDesign() {
  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <img
          src="https://truston.advrtisinguru.com/wp-content/uploads/2026/04/2-scaled.png"
          alt="Architecture & Design"
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
              <span className="text-white">Architecture &amp; Design</span>
            </nav>
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Our Services</p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 leading-tight">Architecture<br />&amp; Design</h1>
            <p className="text-2xl text-[#c9a84c] font-serif italic mb-6">Your Vision, Brought to Life on Paper First</p>
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
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Spaces Designed with Vision, Built with Precision</h2>
              <div className="w-12 h-0.5 bg-[#c9a84c] mb-8" />
              <div className="space-y-5 text-white/60 leading-relaxed">
                <p>Great architecture is more than drawing walls on paper. It is about fundamentally shaping the way people live, work, and experience the spaces around them. Our architecture and design services bring together bold creative thinking, rigorous technical expertise, and a deep, empathetic understanding of human needs to deliver structures that are not only beautiful and functional, but built to stand the test of time and leave a lasting impression on all who inhabit them.</p>
                <p>We design with intention. Every material chosen, every space proportioned, and every detail considered as part of a larger, cohesive vision. From the earliest concept sketch to the final constructed detail, every decision is made with purpose, precision, and genuine craftsmanship in mind, because we believe that excellence is never accidental.</p>
                <p>We believe firmly that no two projects are alike, and no two clients should ever receive the same solution. Whether you are planning a private residence, a landmark commercial complex, a boutique hospitality property, or a sophisticated mixed-use development, our approach begins with something deceptively simple — <strong className="text-white">Listening.</strong> Truly, attentively, and without assumption.</p>
                <p>We take the time to genuinely understand your goals, your lifestyle, your budget, and the unique character of your site before a single line is drawn. When we understand you deeply, we design for you completely.</p>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact"
                  className="inline-block px-8 py-4 bg-[#c9a84c] text-[#0a0a0a] font-bold text-sm tracking-widest uppercase hover:bg-[#d4b460] transition-colors"
                >
                  Consult an Architect
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
              <img
                src="https://truston.advrtisinguru.com/wp-content/uploads/2026/04/2-scaled.png"
                alt="Design 1"
                className="w-full aspect-[3/4] object-cover"
                loading="lazy"
              />
              <img
                src="https://truston.advrtisinguru.com/wp-content/uploads/2026/04/3-scaled.png"
                alt="Design 2"
                className="w-full aspect-[3/4] object-cover mt-8"
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
            <p className="text-white/50">Sustainable Design Thinking at every stage</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {[
              { icon: <Compass className="w-7 h-7" />, title: "Space Optimization", desc: "Maximizing utility without compromising on aesthetics or natural light." },
              { icon: <PenTool className="w-7 h-7" />, title: "Custom Detailing", desc: "Every element is tailored to your lifestyle and preferences." },
              { icon: <Layers className="w-7 h-7" />, title: "3D Visualization", desc: "See your future home in high-fidelity 3D before a single brick is laid." },
              { icon: <Eye className="w-7 h-7" />, title: "Sustainable Design", desc: "Thoughtful energy-efficient designs that work with their environment." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.1}
                className="p-7 bg-[#0a0a0a] border border-white/8 hover:border-[#c9a84c]/30 transition-colors text-center"
              >
                <div className="w-14 h-14 bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] mx-auto mb-5">
                  {item.icon}
                </div>
                <h3 className="text-white font-serif font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Why Trust */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="p-10 bg-[#0a0a0a] border border-white/8"
          >
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Why Clients Trust</p>
            <h2 className="text-3xl font-serif font-bold text-white mb-6">TrustOn with Their Design?</h2>
            <div className="space-y-5 text-white/60 leading-relaxed">
              <p>Choosing the right architecture and design partner is one of the most important decisions you will make for your project. At TrustOn, we earn that trust through consistent delivery, honest communication, and an unwavering commitment to design quality.</p>
              <p>Our architects bring years of hands-on experience across residential, commercial, and mixed-use projects — combining technical skill with creative passion. We understand the local regulatory landscape deeply, which means fewer delays and smoother approvals. We also understand that building or renovating is a significant investment — financially and emotionally — so we treat every project with the care and attention it deserves, regardless of scale.</p>
              <p>We believe that no two projects are alike. Whether you are planning a private residence, a commercial complex, a hospitality property, or a mixed-use development, our approach begins with listening — truly understanding your goals, your lifestyle, your budget, and the unique character of your site — before a single line is drawn.</p>
              <p className="text-white font-semibold italic">We are not just designers. We are your partners in creating a space that works hard, lasts long, and feels exactly right.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Design Process</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Where Your Vision Meets Expert Architecture</h2>
            <p className="text-white/50 max-w-2xl mx-auto">Every great building begins with a great process. At TrustOn, we follow a structured yet flexible design methodology.</p>
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
