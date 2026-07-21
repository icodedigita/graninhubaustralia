"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Zap, Leaf, Wheat, Dumbbell, Apple } from "lucide-react";

const benefits = [
  {
    icon: Dumbbell,
    title: "Plant Protein",
    desc: "A complete source of plant-based protein containing essential amino acids your body needs to thrive.",
  },
  {
    icon: Heart,
    title: "Heart Healthy",
    desc: "Naturally low in fat and rich in fibre — supporting cardiovascular health with every serving.",
  },
  {
    icon: Zap,
    title: "Sustained Energy",
    desc: "Complex carbohydrates and protein deliver long-lasting energy without the crash.",
  },
  {
    icon: Leaf,
    title: "100% Natural",
    desc: "Non-GMO, free from artificial colours, flavours and preservatives — as nature intended.",
  },
  {
    icon: Wheat,
    title: "High Fibre",
    desc: "Supports healthy digestion and keeps you feeling fuller for longer throughout the day.",
  },
  {
    icon: Apple,
    title: "Gluten Free",
    desc: "Most of our pulses are naturally gluten-free — perfect for special dietary needs.",
  },
];

export default function Nutrition() {
  return (
    <section id="nutrition" className="relative py-24 md:py-32 bg-grain">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-leaf-100 text-leaf-800 text-xs font-semibold uppercase tracking-[0.16em] mb-5">
              <Heart className="w-3.5 h-3.5" />
              Nutrition & Wellness
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-[1.1]">
              The power of
              <br />
              <span className="gradient-text">plant-based protein.</span>
            </h2>
            <p className="mt-6 text-lg text-stone-600 leading-relaxed">
              One of the biggest misconceptions about plant-based diets is that
              they lack protein. In truth, plant proteins deliver incredible
              health benefits. Of the 20 amino acids your body uses, 9 are
              "essential" — and our pulses are packed with them.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 p-6 rounded-2xl bg-white border border-stone-200 shadow-sm">
              <div>
                <div className="font-display text-3xl md:text-4xl font-bold text-leaf-700">
                  0.8g
                </div>
                <div className="text-xs text-stone-500 mt-1">
                  Protein per kg body weight (daily rec.)
                </div>
              </div>
              <div className="border-x border-stone-200 px-4">
                <div className="font-display text-3xl md:text-4xl font-bold text-brand-600">
                  9
                </div>
                <div className="text-xs text-stone-500 mt-1">
                  Essential amino acids supplied
                </div>
              </div>
              <div>
                <div className="font-display text-3xl md:text-4xl font-bold text-leaf-700">
                  25g+
                </div>
                <div className="text-xs text-stone-500 mt-1">
                  Protein per 100g (avg.)
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/quality.webp"
                alt="Nutritious pulses"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-leaf-900/30 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Benefits grid */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 rounded-2xl bg-white border border-stone-200 hover:border-leaf-300 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-leaf-100 to-brand-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <b.icon className="w-6 h-6 text-leaf-700" />
              </div>
              <h3 className="font-display text-xl font-bold text-stone-900">
                {b.title}
              </h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
