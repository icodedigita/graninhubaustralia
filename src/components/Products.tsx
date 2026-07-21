"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Package, ArrowUpRight, Sprout, Send } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { whatsappUrl } from "@/lib/site-config";

export default function Products() {
  return (
    <section id="products" className="relative py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold uppercase tracking-[0.16em] mb-5"
          >
            <Package className="w-3.5 h-3.5" />
            Our Speciality Products
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-balance"
          >
            Quality you can taste,
            <br />
            <span className="gradient-text">nature you can trust.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-stone-600"
          >
            From lentils to chickpeas, every product is carefully sourced,
            cleaned and packed to meet the highest international standards.
            Available in bulk or bagged — as per your requirement.
          </motion.p>
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative rounded-3xl overflow-hidden bg-white border border-stone-200 hover:border-leaf-300 hover:shadow-2xl hover:shadow-leaf-900/10 transition-all duration-500"
            >
              <Link href={`/products/${p.slug}`} className="block">
                <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${p.accent}`}>
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ filter: p.filter }}
                  />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <ArrowUpRight className="w-4 h-4 text-leaf-700" />
                  </div>
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sprout className="w-4 h-4 text-leaf-600" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-leaf-700">
                    Premium Grade
                  </span>
                </div>
                <Link href={`/products/${p.slug}`}>
                  <h3 className="font-display text-2xl font-bold text-stone-900 group-hover:text-leaf-800 transition-colors">
                    {p.name}
                  </h3>
                </Link>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed line-clamp-2">
                  {p.shortDesc}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full bg-stone-100 text-stone-700 text-[11px] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <Link
                    href={`/products/${p.slug}`}
                    className="text-sm font-semibold text-leaf-700 hover:text-leaf-800 transition-colors"
                  >
                    View details →
                  </Link>
                  <span className="text-stone-300">·</span>
                  <a
                    href={whatsappUrl(
                      `Hi Grain Hub Australia, I'm interested in ${p.name}. Could you share pricing?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 hover:text-green-800 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Inquire
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
