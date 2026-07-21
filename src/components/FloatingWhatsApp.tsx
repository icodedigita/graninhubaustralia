"use client";

import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site-config";

const PRESET_MESSAGE =
  "Hi Grain Hub Australia, I'd like to inquire about your products.";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl(PRESET_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 group"
    >
      <div className="relative">
        {/* Ping ring */}
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping" />
        {/* Button */}
        <div className="relative w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-xl hover:shadow-2xl shadow-green-500/40 flex items-center justify-center transition-all group-hover:scale-105">
          <MessageCircle className="w-6 h-6 text-white" fill="white" />
        </div>
      </div>
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 rounded-lg bg-stone-900 text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
        Chat with us on WhatsApp
        <div className="absolute -bottom-1 right-5 w-2 h-2 bg-stone-900 rotate-45" />
      </div>
    </a>
  );
}
