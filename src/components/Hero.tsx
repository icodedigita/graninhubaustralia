"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Globe, Sprout } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.pexels.com/photos/6086066/pexels-photo-6086066.jpeg"
          alt="Australian pulses and lentils"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fbfaf6] via-[#fbfaf6]/95 to-[#fbfaf6]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fbfaf6] via-transparent to-transparent opacity-60" />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24 w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Text column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur border border-leaf-200 text-leaf-800 text-xs font-semibold uppercase tracking-[0.16em] mb-6 shadow-sm"
            >
              <Sprout className="w-3.5 h-3.5" />
              Premium Australian Grains
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-[44px] sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-balance"
            >
              Australia's trusted
              <br />
              <span className="gradient-text">grain & pulse hub</span>
              <br />
              for the world.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 text-lg md:text-xl text-stone-600 max-w-xl leading-relaxed"
            >
              Grain Hub Australia sources premium pulses, lentils and grains
              directly from our network of Australian farmers — naturally
              nutritious, non-GMO and exported to kitchens across the globe.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Link
                href="#products"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-leaf-700 hover:bg-leaf-800 text-white font-semibold shadow-lg shadow-leaf-700/20 hover:shadow-xl hover:shadow-leaf-700/30 transition-all group"
              >
                Explore Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/80 backdrop-blur border border-stone-200 hover:border-leaf-300 hover:bg-white text-stone-800 font-semibold transition-all"
              >
                Our Story
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-14 grid grid-cols-3 gap-6 max-w-lg"
            >
              {[
                { icon: Globe, label: "Countries", value: "20+" },
                { icon: Award, label: "Years Trusted", value: "9+" },
                { icon: Sprout, label: "Products", value: "12+" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl px-4 py-4 border border-stone-200/70"
                >
                  <s.icon className="w-5 h-5 text-leaf-600 mb-2" />
                  <div className="font-display text-2xl md:text-3xl font-bold text-leaf-800">
                    {s.value}
                  </div>
                  <div className="text-xs text-stone-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-brand-200/50 to-leaf-200/50 rounded-full blur-3xl" />
              <div className="relative aspect-square rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl">
                <Image
                  src="/images/quality.webp"
                  alt="Premium quality pulses"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float">
                <div className="w-12 h-12 rounded-xl bg-leaf-100 flex items-center justify-center">
                  <Award className="w-6 h-6 text-leaf-700" />
                </div>
                <div>
                  <div className="text-xs text-stone-500">Certified</div>
                  <div className="font-semibold text-stone-900 text-sm">
                    Non-GMO Quality
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee bottom strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-leaf-800 text-white overflow-hidden py-3">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 pr-12 text-sm tracking-widest uppercase font-medium">
              <span>✓ Premium Quality</span>
              <span className="text-brand-300">✦</span>
              <span>Farm Direct</span>
              <span className="text-brand-300">✦</span>
              <span>Global Exports</span>
              <span className="text-brand-300">✦</span>
              <span>Non-GMO</span>
              <span className="text-brand-300">✦</span>
              <span>Sustainable Sourcing</span>
              <span className="text-brand-300">✦</span>
              <span>Bulk & Bagged</span>
              <span className="text-brand-300">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
