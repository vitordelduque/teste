import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#071a2b] to-[#092744] overflow-hidden">
      {/* Decorative SVG background */}
      <svg
        className="absolute right-0 top-0 -translate-y-1/4 opacity-20"
        width="640"
        height="640"
        viewBox="0 0 640 640"
        fill="none"
        aria-hidden
      >
        <circle cx="320" cy="320" r="320" fill="#0b3a5a" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 lg:px-32 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 text-white relative z-10">
            <h1 className="font-ubuntu text-[40px] leading-[60px] sm:text-[40px] sm:leading-[60px] font-extrabold tracking-tight">
              Proteja o seu pet com o melhor plano de saúde
            </h1>

            <p className="mt-4 max-w-xl text-wevets-lightBlue text-base">
              Planos completos com cobertura nacional, atendimento 24h e rede de
              hospitais parceiros. Escolha o plano ideal em segundos.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <Button className="bg-wevets-blue text-white font-bold py-4 px-6 text-base w-full sm:w-auto">
                Proteja seu pet
              </Button>
              <Button
                variant="outline"
                className="text-wevets-navy border-white font-bold py-4 px-6 w-full sm:w-auto"
              >
                Fale com um especialista
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-md">
              <div className="flex flex-col">
                <span className="font-ubuntu text-2xl font-bold">+500k</span>
                <span className="text-sm text-wevets-lightBlue">
                  Atendimentos
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-ubuntu text-2xl font-bold">1.5k</span>
                <span className="text-sm text-wevets-lightBlue">
                  Veterinários
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-ubuntu text-2xl font-bold">24h</span>
                <span className="text-sm text-wevets-lightBlue">
                  Hospitais 24h
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 text-sm text-gray-300">
              <span className="bg-white/10 px-2 py-1 rounded">
                Planos a partir de
              </span>
              <span className="text-3xl font-extrabold">R$ 4,90</span>
              <span className="text-wevets-lightBlue">/mês</span>
            </div>
          </div>

          {/* Right visual - replaced with layered image for depth */}
          <div className="lg:col-span-5 relative z-10 flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Background layer (blurred, slightly larger) */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden transform scale-105 filter blur-sm opacity-70">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fad3b24e0eebc41a888274aae2381ca13%2F1c712f7ab9324a22a7310ecaff521ebd?format=webp&width=800"
                  alt="Cachorro com tutor - fundo"
                  className="w-full h-96 object-cover"
                />
              </div>

              {/* Foreground image (main) */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform lg:-translate-y-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fad3b24e0eebc41a888274aae2381ca13%2F1c712f7ab9324a22a7310ecaff521ebd?format=webp&width=800"
                  alt="Cachorro feliz com tutor"
                  className="w-full h-96 object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute left-4 -bottom-6 bg-white rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
                <div className="w-12 h-12 bg-wevets-blue rounded-full flex items-center justify-center text-white font-bold">
                  ★
                </div>
                <div>
                  <div className="font-bold text-sm">Avaliação 4.9</div>
                  <div className="text-xs text-gray-500">(3.2k avaliações)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute left-0 right-0 bottom-0 -mb-1">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-12 text-white"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0,80 C360,0 1080,160 1440,80 L1440,120 L0,120 Z"
            fill="white"
          ></path>
        </svg>
      </div>
    </section>
  );
}
