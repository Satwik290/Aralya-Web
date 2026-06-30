import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatsAppShowcase from "@/components/WhatsAppShowcase";
import HowItWorks from "@/components/HowItWorks";
import ValueProp from "@/components/ValueProp";
import VendorSection from "@/components/VendorSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WhatsAppShowcase />
        <HowItWorks />
        <ValueProp />
        <VendorSection />
      </main>
      <Footer />
    </>
  );
}
