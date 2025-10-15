import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Header() {
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
    <>
      <div className="w-full bg-wevets-blue text-white text-center text-sm py-2">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-4 px-4">
          <span className="font-montserrat font-semibold">Primeira compra com 65% OFF</span>
          <span className="font-ubuntu font-bold tracking-wide">Use o cupom</span>
          <span className="font-montserrat font-bold bg-white text-wevets-blue px-2 py-0.5 rounded">{coupon}</span>
          <Button className="ml-2 px-3 py-1 text-sm" onClick={copyCoupon}>
            {copied ? "Copiado" : "Copiar cupom"}
          </Button>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full bg-white border-b border-wevets-lightBlue shadow-sm">
        <div className="px-20 py-4 flex items-center gap-4">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/801b7df63f8ba4aae7b226216246a9767b17a38a?width=316"
            alt="WeVets Logo"
            className="h-9 w-auto"
          />

          <nav className="flex items-center gap-2 font-montserrat font-bold text-base">
            <Button variant="ghost" className="text-black hover:text-wevets-blue">
              Início
            </Button>
            <Button variant="ghost" className="text-black hover:text-wevets-blue">
              Benefícios
            </Button>
            <Button variant="ghost" className="text-black hover:text-wevets-blue">
              Planos
            </Button>
            <Button variant="ghost" className="text-black hover:text-wevets-blue">
              Como funciona
            </Button>
            <Button variant="ghost" className="text-black hover:text-wevets-blue">
              FAQ
            </Button>
            <Button variant="ghost" className="text-black hover:text-wevets-blue">
              Unidades
            </Button>
            <Button variant="ghost" className="text-wevets-blue hover:text-wevets-blue">
              Área do tutor
            </Button>
          </nav>

          <div className="ml-auto flex items-center gap-4">
            <Button variant="outline" className="border-wevets-blue text-wevets-blue font-bold">
              Fale conosco
            </Button>
            <Button className="bg-wevets-blue hover:bg-wevets-blue/90 text-white font-bold">
              Assinar
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
