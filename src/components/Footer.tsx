"use client";

import Link from "next/link";
import { Wheat, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { siteConfig, whatsappUrl, socialLinksList } from "@/lib/site-config";

const PHONE_DISPLAY = siteConfig.contact.phoneDisplay;

// lucide-react ships no brand icons — use lightweight inline SVGs instead.
const socialIconPaths: Record<string, string> = {
  facebook:
    "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
  instagram:
    "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 2.695.272.273 2.69.073 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.948-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  linkedin:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  twitter:
    "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  youtube:
    "M23.498 6.186a2.99 2.99 0 00-2.104-2.117C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.394.524A2.99 2.99 0 00.502 6.186 31.06 31.06 0 000 12a31.06 31.06 0 00.502 5.814 2.99 2.99 0 002.104 2.117c1.89.524 9.394.524 9.394.524s7.505 0 9.394-.524a2.99 2.99 0 002.104-2.117A31.06 31.06 0 0024 12a31.06 31.06 0 00-.502-5.814zM9.6 15.6V8.4L15.6 12z",
};

function SocialIcon({ platform }: { platform: string }) {
  const path = socialIconPaths[platform];
  if (!path) return <MessageCircle className="w-4 h-4" />;
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d={path} />
    </svg>
  );
}

const footerLinks = {
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Story", href: "#about" },
    { label: "Global Reach", href: "#exports" },
    { label: "Contact", href: "#contact" },
  ],
  Products: [
    { label: "Lentils", href: "/products/lentils" },
    { label: "Kabuli Chickpeas", href: "/products/kabuli-chickpeas" },
    { label: "Desi Chickpeas", href: "/products/desi-chickpeas" },
    { label: "Mung Beans", href: "/products/mung-beans" },
    { label: "Yellow Split Peas", href: "/products/yellow-split-peas" },
    { label: "Barley", href: "/products/barley" },
    { label: "Faba Beans", href: "/products/faba-beans" },
  ],
  Resources: [
    { label: "Nutrition", href: "#nutrition" },
    { label: "Packaging Options", href: "#products" },
    { label: "Shipping Info", href: "#exports" },
    { label: "WhatsApp Us", href: whatsappUrl() },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-20 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="#home" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-leaf-500 to-leaf-700 flex items-center justify-center">
                <Wheat className="w-5 h-5 text-white" strokeWidth={2.2} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-xl text-white">
                  Grain <span className="text-brand-400">Hub</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-stone-500 mt-0.5">
                  Australia
                </span>
              </div>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-stone-400 max-w-sm">
              Your trusted partner for premium Australian pulses, lentils and
              grains — sourced directly from farms and exported worldwide.
            </p>

            <div className="mt-6 space-y-2.5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                <span>{siteConfig.contact.address}</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                <span>{PHONE_DISPLAY}</span>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  WhatsApp {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-leaf-700 flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              {socialLinksList().map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={platform}
                  className="w-9 h-9 rounded-full bg-stone-800 hover:bg-leaf-700 flex items-center justify-center transition-colors"
                >
                  <SocialIcon platform={platform} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-display font-semibold text-white mb-4">
                  {title}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                        rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm text-stone-400 hover:text-brand-300 transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} Grain Hub Australia · grainhubaustralia.com.au · All rights
            reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-stone-500">
            <a href="#" className="hover:text-brand-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-brand-300 transition-colors">
              Shipping Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
