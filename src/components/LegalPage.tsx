import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 md:pt-24 pb-20">
        <FloatingWhatsApp />
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 mt-8">
            <ol className="flex items-center flex-wrap gap-1.5 text-sm text-stone-500">
              <li className="flex items-center gap-1.5">
                <Link href="/" className="hover:text-leaf-700 transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-stone-300" />
              </li>
              <li className="text-stone-700 font-medium">{title}</li>
            </ol>
          </nav>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900">
            {title}
          </h1>
          <p className="mt-3 text-sm text-stone-500">Last updated: {updated}</p>

          <div className="mt-10 space-y-8 legal-content">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-xl md:text-2xl font-bold text-stone-900">
        {heading}
      </h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-stone-600">
        {children}
      </div>
    </section>
  );
}
