import { useState } from "react";
import { Header } from "@/components/wevets/Header";
import { Hero } from "@/components/wevets/Hero";
import { PetSituations } from "@/components/wevets/PetSituations";
import { Plans } from "@/components/wevets/Plans";
import { HowItWorks } from "@/components/wevets/HowItWorks";
import { Network } from "@/components/wevets/Network";
import { Photos } from "@/components/wevets/Photos";
import { Benefits } from "@/components/wevets/Benefits";
import { Advantages } from "@/components/wevets/Advantages";
import { FAQ } from "@/components/wevets/FAQ";
import { Footer } from "@/components/wevets/Footer";
import { Button } from "@/components/ui/button";

export default function Index() {
  const [copied, setCopied] = useState(false);
  const coupon = "WV65OFF";

  const copyCoupon = async () => {
    try {
      await navigator.clipboard.writeText(coupon);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // ignore clipboard errors silently
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Promo stripe positioned between header and hero; mobile height is half */}
      <div className="w-full bg-wevets-blue text-white text-center text-sm h-5 md:h-10 flex items-center">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-4 px-4 w-full">
          <span className="font-montserrat font-semibold">Primeira compra com 65% OFF</span>
          <span className="font-ubuntu font-bold tracking-wide ml-2">Use o cupom</span>
          <span className="font-montserrat font-bold bg-white text-wevets-blue px-2 py-0.5 rounded ml-2">{coupon}</span>
          <Button className="ml-2 px-3 py-1 text-sm" onClick={copyCoupon}>
            {copied ? "Copiado" : "Copiar cupom"}
          </Button>
        </div>
      </div>

      <Hero />
      <PetSituations />
      <Plans />
      <HowItWorks />
      <Network />
      <Photos />
      <Benefits />
      <Advantages />
      <FAQ />
      <Footer />
    </div>
  );
}
