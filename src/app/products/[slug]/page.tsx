import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ArrowUpRight,
  Leaf,
  Sparkles,
  Utensils,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { PRODUCTS, getProductBySlug } from "@/data/products";
import InquireButton from "@/components/InquireButton";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { whatsappUrl } from "@/lib/site-config";

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDesc,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | Grain Hub Australia`,
      description: product.shortDesc,
      type: "website",
      images: [{ url: product.image, alt: product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Grain Hub Australia`,
      description: product.shortDesc,
      images: [product.image],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = PRODUCTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 md:pt-24 pb-20">
        <FloatingWhatsApp />
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mx-auto max-w-7xl px-5 md:px-8 mb-6"
        >
          <ol className="flex items-center flex-wrap gap-1.5 text-sm text-stone-500">
            <li className="flex items-center gap-1.5">
              <Link href="/" className="hover:text-leaf-700 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-stone-300" />
            </li>
            <li className="flex items-center gap-1.5">
              <Link
                href="/#products"
                className="hover:text-leaf-700 transition-colors"
              >
                Products
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-stone-300" />
            </li>
            <li className="text-stone-800 font-medium" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-brand-200/40 to-leaf-200/40 rounded-[2rem] blur-2xl -z-10" />
              <div
                className={`relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br ${product.accent}`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover"
                  style={{ filter: product.filter }}
                />
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-leaf-100 text-leaf-800 text-xs font-semibold uppercase tracking-[0.16em] mb-5">
                <Leaf className="w-3.5 h-3.5" />
                Australian Grown · Premium Grade
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
                {product.name}
              </h1>
              <p className="mt-5 text-lg text-stone-600 leading-relaxed">
                {product.shortDesc}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {product.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-full bg-stone-100 text-stone-700 text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Inquire panel — 2 buttons */}
              <div className="mt-8 p-5 rounded-2xl bg-gradient-to-br from-leaf-50 to-brand-50 border border-leaf-200">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-leaf-700" />
                  <div className="text-sm font-semibold text-stone-800">
                    Interested in this product?
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <InquireButton productName={product.name} variant="primary" />
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold shadow-md transition-all"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Direct
                  </a>
                </div>
                <div className="mt-3 text-xs text-stone-500">
                  Bulk & bagged packaging available · Worldwide shipping ·
                  Response within 1 business day
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Details grid */}
        <section className="mx-auto max-w-7xl px-5 md:px-8 mt-20">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                About this product
              </h2>
              <p className="mt-5 text-lg text-stone-600 leading-relaxed whitespace-pre-line">
                {product.fullDescription}
              </p>

              <h3 className="mt-12 font-display text-2xl font-bold flex items-center gap-2">
                <Utensils className="w-6 h-6 text-leaf-700" />
                Culinary Uses
              </h3>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                {product.uses.map((u) => (
                  <li
                    key={u}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white border border-stone-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-leaf-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-stone-700">{u}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nutrition card */}
            <div className="space-y-6">
              <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
                <h3 className="font-display text-xl font-bold mb-5">
                  Nutritional Highlights
                </h3>
                <div className="space-y-3">
                  {product.nutrition.map((n) => (
                    <div
                      key={n.label}
                      className="flex items-center justify-between pb-3 border-b border-stone-100 last:border-b-0 last:pb-0"
                    >
                      <span className="text-sm text-stone-500">{n.label}</span>
                      <span className="text-sm font-semibold text-stone-900">
                        {n.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-leaf-50 border border-leaf-200">
                <div className="flex items-center gap-2 text-leaf-800 text-xs font-semibold uppercase tracking-wider mb-3">
                  <MapPin className="w-4 h-4" />
                  Sourcing
                </div>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {product.origins}
                </p>
              </div>

              {/* Secondary CTA */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-leaf-700 to-leaf-800 text-white">
                <div className="font-display text-xl font-bold mb-2">
                  Need a quote?
                </div>
                <p className="text-sm text-stone-200 mb-4">
                  We offer bulk and bagged packaging for every product.
                </p>
                <InquireButton
                  productName={product.name}
                  variant="secondary"
                  label="Get a Quote"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Related products */}
        <section className="mx-auto max-w-7xl px-5 md:px-8 mt-24">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Explore more products
              </h2>
              <p className="mt-2 text-stone-600">
                Browse our full range of premium Australian pulses and grains.
              </p>
            </div>
            <Link
              href="/#products"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-leaf-700 hover:underline"
            >
              View all
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group rounded-3xl overflow-hidden bg-white border border-stone-200 hover:border-leaf-300 hover:shadow-xl transition-all"
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${p.accent}`}
                >
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ filter: p.filter }}
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold text-stone-900 group-hover:text-leaf-800 transition-colors">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm text-stone-600 line-clamp-2">
                    {p.shortDesc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
