"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Wheat } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#products", label: "Products" },
  { href: "/#nutrition", label: "Nutrition" },
  { href: "/#exports", label: "Global Reach" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-stone-200/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-leaf-600 to-leaf-800 flex items-center justify-center shadow-md group-hover:shadow-leaf-500/40 transition-shadow">
            <Wheat className="w-5 h-5 text-white" strokeWidth={2.2} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-lg md:text-xl text-leaf-800 tracking-tight">
              Grain <span className="text-brand-600">Hub</span>
            </span>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-stone-500 mt-0.5">
              Australia
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative px-4 py-2 text-sm font-medium text-stone-700 hover:text-leaf-700 transition-colors group"
            >
              {l.label}
              <span className="absolute left-4 right-4 bottom-1 h-0.5 bg-leaf-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-leaf-700 hover:bg-leaf-800 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:shadow-leaf-700/30 transition-all"
        >
          Get a Quote
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden w-10 h-10 rounded-full bg-white/80 backdrop-blur border border-stone-200 flex items-center justify-center"
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-white border-t border-stone-200"
          >
            <nav className="flex flex-col p-5 gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg text-stone-700 hover:bg-leaf-50 hover:text-leaf-700 font-medium transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 px-5 py-3 rounded-full bg-leaf-700 text-white font-semibold text-center"
              >
                Get a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
