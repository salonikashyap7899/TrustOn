import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "wouter";
import { Phone } from "lucide-react";

const faqs = [
  {
    q: "How do I get started with your services?",
    a: "Simply reach out to us with your requirements and our team will guide you through the next steps from the very first call.",
  },
  {
    q: "Do you handle all legal and documentation work?",
    a: "Yes, we assist with all necessary paperwork, title verification, approvals, and registration to ensure a smooth and legally secure process.",
  },
  {
    q: "What is your typical project delivery timeline?",
    a: "Timelines vary by project type and size, but we provide a clear schedule before work begins and keep you updated at every milestone.",
  },
  {
    q: "Are your properties and plots RERA registered?",
    a: "Yes, all our projects comply with RERA regulations and full registration details are made available to buyers before any transaction.",
  },
  {
    q: "Can I customise the design or layout of my property?",
    a: "Yes, we offer customisation options depending on the stage of the project. Our team will advise on what is possible within your budget and timeline.",
  },
  {
    q: "What financing or loan options are available?",
    a: "We work with leading banks and NBFCs to help buyers secure home loans or plot loans at competitive rates.",
  },
  {
    q: "How do I know the property title is clear?",
    a: "Every property undergoes a thorough title and legal verification process before it is listed or offered to any buyer.",
  },
  {
    q: "Do you offer post-handover support?",
    a: "Yes, our relationship does not end at handover. We provide after-sales support for any structural or documentation queries post-possession.",
  },
  {
    q: "What is the payment structure?",
    a: "We offer flexible, milestone-based payment plans tailored to the type of property and your financial situation.",
  },
  {
    q: "Can I visit the site before making a decision?",
    a: "Absolutely. We strongly encourage site visits and our team will arrange a guided tour at a time that suits you.",
  },
];

export default function Faq() {
  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <section className="relative py-28 bg-[#111] border-b border-white/5 overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#c9a84c]/4 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-5">Knowledge Base</p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Frequently Asked<br /><em className="text-[#c9a84c] not-italic">Questions</em>
            </h1>
            <div className="w-16 h-0.5 bg-[#c9a84c] mb-6" />
            <p className="text-white/50 text-xl max-w-2xl leading-relaxed">
              Everything you need to know about our properties, processes, and partnerships. Can't find your answer? Call us directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <AccordionItem
                  value={`item-${i}`}
                  className="border border-white/8 bg-[#111] data-[state=open]:border-[#c9a84c]/40 transition-colors px-6 rounded-none"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-serif font-semibold text-white hover:text-[#c9a84c] hover:no-underline transition-colors py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60 text-base leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-[#111] border border-[#c9a84c]/20 text-center"
          >
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Still Have Questions?</p>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">We're Just a Call Away</h3>
            <p className="text-white/50 mb-8">Our team is available to answer any questions you might have about our properties or services.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919616061166"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#c9a84c] text-[#0a0a0a] font-bold text-sm tracking-widest uppercase hover:bg-[#d4b460] transition-colors"
                data-testid="faq-call-cta"
              >
                <Phone className="w-4 h-4" /> +91 96160-61166
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/20 text-white font-bold text-sm tracking-widest uppercase hover:border-[#c9a84c]/50 hover:text-[#c9a84c] transition-colors"
              >
                Send a Message
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
