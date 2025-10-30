import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [copied, setCopied] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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
      <header className="sticky top-0 z-50 w-full bg-white border-b border-wevets-lightBlue shadow-sm">
        <div className="px-6 lg:px-20 py-4 flex items-center gap-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fad3b24e0eebc41a888274aae2381ca13%2Fed8d6c07e9dc448daebb62806f0ad76a?format=webp&width=800"
            alt="WeVets Logo"
            className="h-9 w-auto"
          />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2 font-montserrat font-bold text-base">
            <Button
              variant="ghost"
              className="text-black hover:text-wevets-blue"
            >
              Início
            </Button>
            <Button
              variant="ghost"
              className="text-black hover:text-wevets-blue"
            >
              Benefícios
            </Button>
            <Button
              variant="ghost"
              className="text-black hover:text-wevets-blue"
            >
              Planos
            </Button>
            <Button
              variant="ghost"
              className="text-black hover:text-wevets-blue"
            >
              Como funciona
            </Button>
            <Button
              variant="ghost"
              className="text-black hover:text-wevets-blue"
            >
              FAQ
            </Button>
            <Button
              variant="ghost"
              className="text-black hover:text-wevets-blue"
            >
              Unidades
            </Button>
            <Button
              variant="ghost"
              className="text-wevets-blue hover:text-wevets-blue"
            >
              Área do tutor
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="ml-auto flex items-center gap-4 md:hidden">
            <Button
              variant="outline"
              className="border-wevets-blue text-wevets-blue font-bold"
            >
              Fale conosco
            </Button>
            <button
              aria-label="Abrir menu"
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-md border border-gray-200"
            >
              <Menu className="w-5 h-5 text-wevets-navy" />
            </button>
          </div>

          {/* Desktop CTAs */}
          <div className="ml-auto hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              className="border-wevets-blue text-wevets-blue font-bold"
            >
              Fale conosco
            </Button>
            <Button className="bg-wevets-blue hover:bg-wevets-blue/90 text-white font-bold">
              Assinar
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="px-6 py-4 flex items-center justify-between border-b">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fad3b24e0eebc41a888274aae2381ca13%2Fed8d6c07e9dc448daebb62806f0ad76a?format=webp&width=800"
              alt="WeVets"
              className="h-8"
            />
            <div className="flex items-center gap-3">
              <Button className="px-3 py-1 text-sm" onClick={copyCoupon}>
                {copied ? "Copiado" : "Copiar cupom"}
              </Button>
              <button
                aria-label="Fechar menu"
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-md"
              >
                <X className="w-5 h-5 text-wevets-navy" />
              </button>
            </div>
          </div>

          <nav className="px-6 py-6 space-y-4">
            <Button
              variant="ghost"
              className="w-full text-left text-black text-lg"
            >
              Início
            </Button>
            <Button
              variant="ghost"
              className="w-full text-left text-black text-lg"
            >
              Benefícios
            </Button>
            <Button
              variant="ghost"
              className="w-full text-left text-black text-lg"
            >
              Planos
            </Button>
            <Button
              variant="ghost"
              className="w-full text-left text-black text-lg"
            >
              Como funciona
            </Button>
            <Button
              variant="ghost"
              className="w-full text-left text-black text-lg"
            >
              FAQ
            </Button>
            <Button
              variant="ghost"
              className="w-full text-left text-black text-lg"
            >
              Unidades
            </Button>
            <Button
              variant="ghost"
              className="w-full text-left text-wevets-blue text-lg"
            >
              Área do tutor
            </Button>

            <div className="mt-6 space-y-3">
              <Button className="w-full bg-wevets-blue text-white font-bold py-3">
                Assinar
              </Button>
              <Button
                variant="outline"
                className="w-full border-wevets-blue text-wevets-navy font-bold py-3"
              >
                Fale com um especialista
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
