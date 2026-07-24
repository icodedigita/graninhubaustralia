"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  MessageCircle,
} from "lucide-react";
import InquireButton from "./InquireButton";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

const PHONE_DISPLAY = siteConfig.contact.phoneDisplay;

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setSubmitting(true);
    setError(false);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          email: data.get("email"),
          phone: data.get("phone"),
          product: data.get("product"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setSent(true);
      setTimeout(() => setSent(false), 4000);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-leaf-100 text-leaf-800 text-xs font-semibold uppercase tracking-[0.16em] mb-5">
              <Mail className="w-3.5 h-3.5" />
              Get in Touch
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-[1.1]">
              Ready to source
              <br />
              <span className="gradient-text">premium grains?</span>
            </h2>
            <p className="mt-6 text-lg text-stone-600 leading-relaxed">
              Whether you need bulk orders or custom bagged packaging, our team
              is ready to deliver. Tell us your requirement and we'll get back
              within one business day — or chat with us instantly on WhatsApp.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl bg-green-50 border border-green-200 hover:shadow-md transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0 shadow-md">
                  <MessageCircle className="w-5 h-5 text-white" fill="white" />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-wider text-green-800 font-semibold">
                    WhatsApp Direct
                  </div>
                  <div className="text-stone-900 font-medium mt-0.5">
                    {PHONE_DISPLAY} · Chat with our team now
                  </div>
                  <div className="text-sm text-green-700 mt-1 group-hover:underline">
                    Start a conversation →
                  </div>
                </div>
              </a>

              {[
                {
                  icon: Mail,
                  title: "Email Us",
                  text: siteConfig.contact.email,
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  text: PHONE_DISPLAY,
                },
                {
                  icon: Clock,
                  title: "Business Hours",
                  text: siteConfig.contact.businessHours,
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-stone-200 hover:border-leaf-300 hover:shadow-md transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-leaf-100 flex items-center justify-center flex-shrink-0">
                    <c.icon className="w-5 h-5 text-leaf-700" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
                      {c.title}
                    </div>
                    <div className="text-stone-900 font-medium mt-0.5">
                      {c.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-2xl bg-leaf-50 border border-leaf-200">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-leaf-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-leaf-700" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
                    Head Office
                  </div>
                  <div className="text-stone-900 font-medium mt-0.5">
                    Melbourne, Australia
                  </div>
                </div>
              </div>

              <div className="mt-5 text-xs uppercase tracking-wider text-stone-500 font-semibold">
                International Offices
              </div>
              <ul className="mt-3 space-y-3">
                {[
                  {
                    city: "Incheon, South Korea",
                    phone: "+82 10 9443 8241",
                  },
                  {
                    city: "Toronto, Canada",
                    phone: "+1 647 839 7376",
                  },
                  {
                    city: "Manchester, UK",
                    phone: "+44 7852 926601",
                  },
                ].map((o) => (
                  <li key={o.city} className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-leaf-700 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-stone-900 font-medium">{o.city}</div>
                      <div className="text-sm text-stone-600">{o.phone}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-leaf-200/40 to-brand-200/40 rounded-3xl blur-2xl -z-10" />
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-stone-200 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-stone-600 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="John Smith"
                    className="mt-2 w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-stone-600 uppercase tracking-wider">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your company"
                    className="mt-2 w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-200 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-stone-600 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    className="mt-2 w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-stone-600 uppercase tracking-wider">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+61 ..."
                    className="mt-2 w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-200 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-600 uppercase tracking-wider">
                  Product of Interest
                </label>
                <select
                  name="product"
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-200 outline-none transition-all bg-white"
                >
                  <option>Lentils</option>
                  <option>Kabuli Chickpeas</option>
                  <option>Desi Chickpeas</option>
                  <option>Mung Beans</option>
                  <option>Yellow Split Peas</option>
                  <option>Kaspa Peas</option>
                  <option>Wheat Grain</option>
                  <option>Barley</option>
                  <option>Red Sorghum</option>
                  <option>Faba Beans</option>
                  <option>Mixed / Other</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-600 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell us about your requirements — quantity, packaging, destination..."
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-200 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sent || submitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-leaf-700 hover:bg-leaf-800 text-white font-semibold shadow-lg shadow-leaf-700/20 hover:shadow-xl hover:shadow-leaf-700/30 transition-all group disabled:bg-leaf-600"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Thank you! We'll be in touch.
                  </>
                ) : (
                  <>
                    {submitting ? "Sending..." : "Send Inquiry"}
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {error && (
                <p className="text-sm text-center text-red-600">
                  Something went wrong sending your message. Please try again or use WhatsApp below.
                </p>
              )}

              <p className="text-xs text-center text-stone-500">
                Prefer a live conversation?{" "}
                <a
                  href={whatsappUrl(
                    "Hi Grain Hub Australia, I'd like to inquire about your products."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 font-semibold hover:underline"
                >
                  Message us on WhatsApp →
                </a>
              </p>
            </form>

            {/* Floating inquire button */}
            <div className="mt-6 flex justify-center">
              <InquireButton
                variant="floating"
                label="Quick Inquire"
                formMode="scroll"
              />
            </div>
          </motion.div>
        </div>

        {/* Final CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl bg-gradient-to-br from-brand-600 via-leaf-700 to-leaf-800 p-10 md:p-14 text-white overflow-hidden relative"
        >
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-400/30 rounded-full blur-3xl" />
          <div className="relative grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="font-display text-3xl md:text-4xl font-bold">
                Partner with Australia's trusted grain exporter.
              </h3>
              <p className="mt-3 text-stone-100 max-w-2xl">
                Bulk orders, custom packaging, reliable global logistics —
                everything your business needs under one roof.
              </p>
            </div>
            <div className="md:text-right">
              <a
                href={whatsappUrl(
                  "Hi Grain Hub Australia, I'd like to request a quote."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-leaf-800 font-semibold hover:bg-brand-100 transition-all group"
              >
                Request a Quote
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <span className="text-base text-stone-500">Affiliated with</span>
          <Image
            src="/images/gta.webp"
            alt="GTA affiliation logo"
            width={96}
            height={96}
            className="h-20 w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
