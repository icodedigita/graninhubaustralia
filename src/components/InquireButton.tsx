"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, FileText, Send, X, CheckCircle2, Phone } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

const PHONE_DISPLAY = siteConfig.contact.phoneDisplay;

type InquireButtonProps = {
  /** Optional product name to pre-fill the message */
  productName?: string;
  /** Visual variant */
  variant?: "primary" | "secondary" | "floating";
  /** Label override */
  label?: string;
  /** If true, "Form" opens a scroll to #contact instead of modal (used in page where modal is fine) */
  formMode?: "modal" | "scroll";
};

export default function InquireButton({
  productName,
  variant = "primary",
  label,
  formMode = "modal",
}: InquireButtonProps) {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Close dropdown on escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  const waMessage = productName
    ? `Hi Grain Hub Australia, I'm interested in ${productName}. Could you share pricing and availability?`
    : `Hi Grain Hub Australia, I'd like to inquire about your products.`;
  const waUrl = whatsappUrl(waMessage);

  const variantClasses =
    variant === "primary"
      ? "bg-leaf-700 hover:bg-leaf-800 text-white shadow-lg shadow-leaf-700/20"
      : variant === "floating"
      ? "bg-white text-leaf-800 border border-stone-200 shadow-xl hover:border-leaf-300"
      : "bg-white text-stone-800 border border-stone-200 hover:border-leaf-300";

  const iconColor =
    variant === "primary" ? "text-white" : "text-leaf-700";

  return (
    <>
      <div ref={ref} className="relative inline-block">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-haspopup="true"
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${variantClasses}`}
        >
          <Send className={`w-4 h-4 ${iconColor}`} />
          {label ?? "Inquire Now"}
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              transition={{ duration: 0.15 }}
              className={`absolute z-40 mt-3 ${
                variant === "floating" ? "left-1/2 -translate-x-1/2" : "left-0"
              } w-72 p-2 rounded-2xl bg-white shadow-2xl border border-stone-200`}
            >
              <div className="px-3 pt-2 pb-1">
                <div className="text-[10px] uppercase tracking-widest font-semibold text-stone-400">
                  Choose how to reach us
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0 shadow-md">
                  <MessageCircle className="w-5 h-5 text-white" fill="white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-stone-900 text-sm">
                    Chat on WhatsApp
                  </div>
                  <div className="text-xs text-stone-500 truncate">
                    {PHONE_DISPLAY} · Direct with team
                  </div>
                </div>
              </a>

              {/* Form */}
              <button
                onClick={() => {
                  setOpen(false);
                  if (formMode === "scroll") {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  } else {
                    setModalOpen(true);
                  }
                }}
                className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-leaf-50 transition-colors text-left"
              >
                <div className="w-11 h-11 rounded-xl bg-leaf-100 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-leaf-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-stone-900 text-sm">
                    Fill Inquiry Form
                  </div>
                  <div className="text-xs text-stone-500">
                    {productName ? "Pre-filled with product" : "Quick 1-min form"}
                  </div>
                </div>
              </button>

              <div className="px-3 pt-1 pb-2 text-[11px] text-stone-400 flex items-center gap-1.5">
                <Phone className="w-3 h-3" />
                Or call {PHONE_DISPLAY}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {modalOpen && (
          <InquiryModal
            productName={productName}
            onClose={() => setModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function InquiryModal({
  productName,
  onClose,
}: {
  productName?: string;
  onClose: () => void;
}) {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

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
      setSent(true);
      setTimeout(() => {
        setSent(false);
        onClose();
      }, 2200);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.96 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-stone-200 px-6 py-5 flex items-start justify-between rounded-t-3xl">
          <div>
            <div className="text-xs uppercase tracking-widest font-semibold text-leaf-700">
              Inquiry
            </div>
            <h3 className="font-display text-2xl font-bold text-stone-900 mt-1">
              {productName ?? "Request a Quote"}
            </h3>
            <p className="text-sm text-stone-500 mt-1">
              Our team responds within 1 business day.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-stone-600 uppercase tracking-wider">
                Full Name *
              </label>
              <input
                required
                name="name"
                type="text"
                className="mt-1.5 w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-200 outline-none transition-all text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-stone-600 uppercase tracking-wider">
                Company
              </label>
              <input
                type="text"
                name="company"
                className="mt-1.5 w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-200 outline-none transition-all text-sm"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-stone-600 uppercase tracking-wider">
                Email *
              </label>
              <input
                required
                name="email"
                type="email"
                className="mt-1.5 w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-200 outline-none transition-all text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-stone-600 uppercase tracking-wider">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                className="mt-1.5 w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-200 outline-none transition-all text-sm"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-stone-600 uppercase tracking-wider">
              Product
            </label>
            <input
              type="text"
              name="product"
              defaultValue={productName ?? ""}
              readOnly={!!productName}
              placeholder="e.g. Kabuli Chickpeas"
              className="mt-1.5 w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-200 outline-none transition-all text-sm bg-stone-50"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-stone-600 uppercase tracking-wider">
              Quantity & Requirements *
            </label>
            <textarea
              required
              name="message"
              rows={4}
              placeholder="Estimated quantity, packaging preference (bulk / bagged), destination..."
              className="mt-1.5 w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-200 outline-none transition-all text-sm resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={sent || submitting}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-leaf-700 hover:bg-leaf-800 text-white font-semibold shadow-lg shadow-leaf-700/20 transition-all disabled:bg-leaf-600"
          >
            {sent ? (
              <>
                <CheckCircle2 className="w-5 h-5" />
                Sent! We'll be in touch.
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                {submitting ? "Sending..." : "Submit Inquiry"}
              </>
            )}
          </button>
          {error && (
            <p className="text-xs text-center text-red-600">
              Something went wrong sending your message. Please try again or use WhatsApp below.
            </p>
          )}
          <p className="text-xs text-center text-stone-500">
            Or prefer a live chat?{" "}
            <a
              href={whatsappUrl(
                productName
                  ? `Hi Grain Hub, I'd like to inquire about ${productName}.`
                  : "Hi Grain Hub, I'd like to inquire about your products."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="text-leaf-700 font-semibold hover:underline"
            >
              Message us on WhatsApp →
            </a>
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
}

export { PHONE_DISPLAY };
