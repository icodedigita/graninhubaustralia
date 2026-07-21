import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Process from "@/components/Process";
import Products from "@/components/Products";
import Nutrition from "@/components/Nutrition";
import Exports from "@/components/Exports";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Process />
      <Products />
      <Nutrition />
      <Exports />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
