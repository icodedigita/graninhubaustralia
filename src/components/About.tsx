"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Truck, Leaf as LeafIcon, ShieldCheck, Handshake } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-leaf-200/30 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-farm.webp"
                alt="Australian farm"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-leaf-700 text-white rounded-2xl p-5 md:p-6 shadow-2xl max-w-[220px]">
              <div className="font-display text-4xl md:text-5xl font-bold text-brand-300">
                2016
              </div>
              <div className="text-sm md:text-base mt-1 leading-snug">
                Proudly serving global markets from Australian farms.
              </div>
            </div>
            {/* Decorative dot */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-300/40 rounded-full blur-2xl -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-leaf-100 text-leaf-800 text-xs font-semibold uppercase tracking-[0.16em] mb-5">
              <LeafIcon className="w-3.5 h-3.5" />
              About Grain Hub Australia
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-[1.1]">
              Rooted in Australian soil,
              <br />
              <span className="gradient-text">trusted worldwide.</span>
            </h2>
            <p className="mt-6 text-lg text-stone-600 leading-relaxed">
              Founded in 2016, Grain Hub Australia is dedicated to exporting
              premium pulses and lentils worldwide. As one of the largest
              regional Australian grain traders, we partner with a strong network
              of farmers who share our commitment to quality and sustainability.
            </p>
            <p className="mt-4 text-lg text-stone-600 leading-relaxed">
              Our products are <strong className="text-stone-900">natural, non-GMO</strong>, and free from
              artificial colours, flavours and preservatives — delivering reliable
              service to kitchens and businesses across the globe.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: ShieldCheck, text: "100% Non-GMO & Natural" },
                { icon: Truck, text: "Timely Global Delivery" },
                { icon: Handshake, text: "Direct Farm Partnerships" },
                { icon: LeafIcon, text: "Sustainable Practices" },
              ].map((f) => (
                <div
                  key={f.text}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-stone-200 hover:border-leaf-300 hover:shadow-md transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-leaf-100 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-4.5 h-4.5 text-leaf-700" />
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-stone-700 pt-1.5">
                    <CheckCircle2 className="w-4 h-4 text-leaf-600 flex-shrink-0" />
                    {f.text}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
