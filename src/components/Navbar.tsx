import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICE_LINKS = [
  { label: "Plot Selling", href: "/services/plot-selling" },
  { label: "Architecture & Design", href: "/services/architecture-design" },
  { label: "Construction & Build", href: "/services/construction-build" },
  { label: "Investment Consulting", href: "/services/investment-consulting" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  const isActive = (href: string) => location === href;
  const isServicesActive = location.startsWith("/services");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/97 backdrop-blur-md border-b border-white/5 shadow-2xl py-0"
          : "bg-transparent py-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 z-50">
            <img
              src="https://truston.advrtisinguru.com/wp-content/uploads/2026/04/truston-Photoroom-e1776967320911.png"
              alt="TrustOn"
              className="h-10 object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/"
              className={`text-sm tracking-wide transition-colors duration-200 ${isActive("/") ? "text-[#c9a84c]" : "text-white/70 hover:text-white"}`}
              data-testid="nav-home"
            >
              Home
            </Link>
            <Link href="/about-us"
              className={`text-sm tracking-wide transition-colors duration-200 ${isActive("/about-us") ? "text-[#c9a84c]" : "text-white/70 hover:text-white"}`}
              data-testid="nav-about"
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link href="/services"
                className={`flex items-center gap-1 text-sm tracking-wide transition-colors duration-200 ${isServicesActive ? "text-[#c9a84c]" : "text-white/70 hover:text-white"}`}
                data-testid="nav-services"
              >
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </Link>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50"
                  >
                    <div className="bg-[#0f0f0f] border border-white/10 shadow-2xl min-w-[220px] overflow-hidden">
                      <div className="h-0.5 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />
                      {SERVICE_LINKS.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-6 py-3.5 text-sm border-b border-white/5 last:border-0 transition-colors ${
                            isActive(child.href) ? "text-[#c9a84c] bg-white/5" : "text-white/60 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/project"
              className={`text-sm tracking-wide transition-colors duration-200 ${isActive("/project") ? "text-[#c9a84c]" : "text-white/70 hover:text-white"}`}
              data-testid="nav-project"
            >
              Project
            </Link>
            <Link href="/faq"
              className={`text-sm tracking-wide transition-colors duration-200 ${isActive("/faq") ? "text-[#c9a84c]" : "text-white/70 hover:text-white"}`}
              data-testid="nav-faq"
            >
              FAQ
            </Link>
            <Link href="/contact"
              className={`text-sm tracking-wide transition-colors duration-200 ${isActive("/contact") ? "text-[#c9a84c]" : "text-white/70 hover:text-white"}`}
              data-testid="nav-contact"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a href="tel:+919616061166" className="text-sm text-white/50 hover:text-white transition-colors">
              +91 96160-61166
            </a>
            <Link href="/contact"
              className="px-5 py-2.5 bg-[#c9a84c] text-[#0a0a0a] text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#d4b460] transition-colors"
              data-testid="nav-cta"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden z-50 text-white/70 hover:text-white p-2 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="nav-mobile-toggle"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-[#0a0a0a]/99 backdrop-blur-xl border-t border-white/8"
          >
            <div className="max-w-7xl mx-auto px-6 py-8 space-y-1">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about-us" },
              ].map((link) => (
                <Link key={link.href} href={link.href}
                  className={`block py-3.5 text-sm border-b border-white/5 transition-colors ${isActive(link.href) ? "text-[#c9a84c]" : "text-white/70"}`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Services group */}
              <div className="py-3.5 border-b border-white/5">
                <button
                  className="flex items-center justify-between w-full text-sm text-white/70 mb-3"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="pl-4 border-l border-[#c9a84c]/30 space-y-2">
                    {SERVICE_LINKS.map((child) => (
                      <Link key={child.href} href={child.href}
                        className="block py-2 text-sm text-white/50 hover:text-[#c9a84c] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {[
                { label: "Project", href: "/project" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href}
                  className={`block py-3.5 text-sm border-b border-white/5 transition-colors ${isActive(link.href) ? "text-[#c9a84c]" : "text-white/70"}`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-6">
                <Link href="/contact"
                  className="block w-full text-center py-3.5 bg-[#c9a84c] text-[#0a0a0a] text-xs font-bold tracking-[0.15em] uppercase"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
