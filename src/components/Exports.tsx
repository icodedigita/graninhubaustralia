"use client";

import { motion } from "framer-motion";
import { Globe, MapPin, Plane, Container } from "lucide-react";

const markets = [
  { country: "Australia", flag: "🇦🇺", role: "Home" },
  { country: "China", flag: "🇨🇳", role: "Export" },
  { country: "India", flag: "🇮🇳", role: "Export" },
  { country: "Singapore", flag: "🇸🇬", role: "Export" },
  { country: "Malaysia", flag: "🇲🇾", role: "Export" },
  { country: "Dubai / UAE", flag: "🇦🇪", role: "Export" },
  { country: "Sri Lanka", flag: "🇱🇰", role: "Export" },
  { country: "Bangladesh", flag: "🇧🇩", role: "Export" },
  { country: "Pakistan", flag: "🇵🇰", role: "Export" },
  { country: "United Kingdom", flag: "🇬🇧", role: "Export" },
];

export default function Exports() {
  return (
    <section
      id="exports"
      className="relative py-24 md:py-32 bg-leaf-800 text-white overflow-hidden"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-leaf-500/20 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-brand-200 text-xs font-semibold uppercase tracking-[0.16em] mb-5"
            >
              <Globe className="w-3.5 h-3.5" />
              Global Reach
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-[1.1]"
            >
              From Australian farms
              <br />
              <span className="text-brand-300">to every continent.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-stone-200 leading-relaxed max-w-xl"
            >
              Arya Pulses exports containerised and bulk grain across key
              international markets. Our logistics network ensures on-time,
              reliable delivery — anywhere in the world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 grid grid-cols-3 gap-6"
            >
              {[
                { icon: Container, value: "Bulk & Bagged", label: "Packaging" },
                { icon: Plane, value: "Worldwide", label: "Shipping" },
                { icon: MapPin, value: "10+ Markets", label: "Destinations" },
              ].map((s) => (
                <div key={s.label}>
                  <s.icon className="w-6 h-6 text-brand-300 mb-2" />
                  <div className="font-display text-2xl md:text-3xl font-bold">
                    {s.value}
                  </div>
                  <div className="text-xs text-stone-300 uppercase tracking-wider mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — countries */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-3"
          >
            {markets.map((m, i) => (
              <motion.div
                key={m.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className="group p-4 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 hover:border-brand-300/50 transition-all"
              >
                <div className="text-3xl mb-2">{m.flag}</div>
                <div className="font-semibold text-white">{m.country}</div>
                <div className="text-xs text-brand-300 mt-0.5">{m.role}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
