"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Wheat, Package, Factory, Truck } from "lucide-react";

const steps = [
  {
    icon: Wheat,
    title: "Farm Sourcing",
    desc: "Direct partnerships with regional Australian farmers who share our commitment to quality and sustainability.",
  },
  {
    icon: Factory,
    title: "Processing",
    desc: "Cleaned, graded and packed to strict international food-safety standards at our Australian facilities.",
  },
  {
    icon: Package,
    title: "Custom Packaging",
    desc: "Available in bulk containers or bagged packaging tailored to your brand and market requirements.",
  },
  {
    icon: Truck,
    title: "Global Logistics",
    desc: "End-to-end export management with reliable, on-time shipping to ports around the world.",
  },
];

export default function Process() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold uppercase tracking-[0.16em] mb-5"
            >
              <Factory className="w-3.5 h-3.5" />
              What We Do
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-[1.1]"
            >
              From Australian paddocks
              <br />
              <span className="gradient-text">to your plate.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-stone-600 leading-relaxed lg:pl-10 lg:border-l lg:border-stone-200"
          >
            Grain Hub Australia deals in Lentils, Yellow Split Peas, Kabuli
            Chickpeas, Desi Chickpeas, Mung Beans and more. We manage every
            step — from sourcing quality grain straight off the farm to
            delivering containerised and bulk shipments to customers worldwide.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group p-7 rounded-3xl bg-gradient-to-br from-stone-50 to-white border border-stone-200 hover:border-leaf-300 hover:shadow-xl transition-all"
            >
              <div className="absolute top-5 right-5 font-display text-5xl font-bold text-stone-100 group-hover:text-brand-100 transition-colors">
                0{i + 1}
              </div>
              <div className="w-12 h-12 rounded-xl bg-leaf-700 text-white flex items-center justify-center mb-5 group-hover:bg-brand-600 transition-colors">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-stone-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Showcase image strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            "/images/lentils.jpg",
            "/images/chickpeas.jpg",
            "/images/mungbeans.jpg",
            "/images/wheat.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <Image
                src={src}
                alt="Pulse product"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
