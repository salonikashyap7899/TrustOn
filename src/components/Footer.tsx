import { Link } from "wouter";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/8 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Gold rule */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <img
              src="https://truston.advrtisinguru.com/wp-content/uploads/2026/04/truston-Photoroom-e1776967320911.png"
              alt="TrustOn Logo"
              className="h-12 object-contain self-start"
            />
            <p className="text-white/40 leading-relaxed text-sm">
              We are a property developer committed to shaping a better world through thoughtfully designed, high-quality properties in prime locations.
            </p>
            <p className="text-[#c9a84c]/70 text-xs font-semibold tracking-widest uppercase">
              Get the latest inspiration &amp; insights
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif font-bold mb-6 text-sm tracking-widest uppercase">Quick Link</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Plot Selling", href: "/services/plot-selling" },
                { label: "Investment Consulting", href: "/services/investment-consulting" },
                { label: "Our Projects", href: "/project" },
                { label: "Prime Estate", href: "/project" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href}
                    className="text-white/40 hover:text-[#c9a84c] transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-[#c9a84c]/50 rounded-full" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-serif font-bold mb-6 text-sm tracking-widest uppercase">Services</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Plot Selling", href: "/services/plot-selling" },
                { label: "Architecture & Design", href: "/services/architecture-design" },
                { label: "Construction & Build", href: "/services/construction-build" },
                { label: "Investment Consulting", href: "/services/investment-consulting" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href}
                    className="text-white/40 hover:text-[#c9a84c] transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-[#c9a84c]/50 rounded-full" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif font-bold mb-6 text-sm tracking-widest uppercase">Contact Us</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" />
                <span className="text-white/40 text-sm leading-relaxed">
                  UGF, Apple Plaza, Next To HDFC Bank<br />
                  Hardoi Road, Lucknow-226003
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#c9a84c] shrink-0" />
                <a href="tel:+919616061166" className="text-white/40 hover:text-[#c9a84c] transition-colors text-sm">
                  +91 96160-61166
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#c9a84c] shrink-0" />
                <a href="mailto:trustondevelopers01@gmail.com" className="text-white/40 hover:text-[#c9a84c] transition-colors text-sm">
                  trustondevelopers01@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs tracking-wider">
            © Copyright Reserved by TrustOn Developers
          </p>
          <div className="flex items-center gap-1">
            <a href="/contact" className="text-white/25 text-xs hover:text-[#c9a84c] transition-colors">Contact us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
