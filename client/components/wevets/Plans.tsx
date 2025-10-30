import { Check, ChevronRight, Diamond } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export function Plans() {
  const plans = [
    {
      name: "Básico",
      price: "R$4,90",
      color: "bg-wevets-skyBlue",
      // no promoLabel => no promotional badge and no crossed original price
      features: [
        "Vacinas obrigatórias",
        "Consultas em horário normal",
        "Consultas em horário de plantão",
        "Exames laboratoriais de check up",
      ],
    },
    {
      name: "Conforto",
      originalPrice: "R$49,90",
      price: "R$39,90",
      color: "bg-wevets-skyBlue",
      promoLabel: "Promoção",
      features: [
        "Vacinas obrigatórias",
        "Consultas em horário normal",
        "Consultas em horário de plantão",
        "Exames laboratoriais de check up",
        "Assistência telefônica",
      ],
    },
    {
      name: "Super",
      originalPrice: "R$114,90",
      price: "R$99,90",
      color: "bg-wevets-skyBlue",
      promoLabel: "Promoção",
      features: [
        "Vacinas obrigatórias",
        "Consultas em horário normal",
        "Consultas em horário de plantão",
        "Cirurgias",
        "Internação",
      ],
    },
    {
      name: "Ultra",
      originalPrice: "R$249,90",
      price: "R$199,90",
      color: "bg-wevets-skyBlue",
      promoLabel: "Promoção",
      features: [
        "Vacinas e imunizações completas",
        "Consultas ilimitadas",
        "Atendimento 24h com prioridade",
        "Cobertura cirúrgica avançada",
        "Exames e diagnósticos inclusos",
      ],
    },
  ];

  const carouselRef = useRef<HTMLDivElement | null>(null);

  const safeScroll = (direction: 'prev' | 'next') => {
    try {
      // typeof check prevents ReferenceError if variable is missing in some edge state
      if (typeof carouselRef === 'undefined') return;
      const el = carouselRef.current;
      if (!el) return;
      const amount = Math.floor(el.clientWidth * 0.8) * (direction === 'next' ? 1 : -1);
      el.scrollBy({ left: amount, behavior: 'smooth' });
    } catch (e) {
      // swallow runtime errors to prevent app crash
    }
  };

  return (
    <section
      className="py-12 px-6 lg:px-32"
      style={{
        background: "linear-gradient(180deg, #092744 50.48%, #FFF 50.49%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-ubuntu text-4xl font-bold text-center text-white mb-6">
          Planos que cabem no bolso e para todas ocasiões
        </h2>

        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="flex items-center gap-1 bg-gray-200 rounded-full p-0.5 border border-gray-300">
            <button className="px-4 py-2 rounded-full bg-white text-wevets-blue font-bold">
              Mensal
            </button>
            <button className="px-4 py-2 rounded-full text-wevets-blue font-bold">
              Anual
            </button>
          </div>

          <div className="flex items-center gap-1 text-wevets-lightBlue">
            <Diamond className="w-6 h-6 fill-wevets-lightBlue" />
            <span className="font-montserrat text-sm font-bold">
              Ganhe 2 meses grátis assinando planos anuais!
            </span>
          </div>
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden relative">
          <button aria-label="Anterior" className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-2 shadow-md" onClick={() => safeScroll('prev')}>
            <ChevronRight className="w-5 h-5 rotate-180 text-wevets-navy" />
          </button>

          <div ref={carouselRef} className="flex gap-4 overflow-x-auto px-4 py-2 snap-x snap-mandatory scrollbar-none">
            {plans.map((plan, index) => (
              <div key={index} className="snap-start flex-shrink-0 w-[80%]">
                <div className="bg-white rounded-2xl shadow-lg overflow-visible flex flex-col relative">
                  <div className={`${plan.color} px-6 py-3 rounded-t-2xl relative`}>
                    <h3 className="font-ubuntu text-lg font-bold text-white text-center">{plan.name}</h3>
                  </div>

                  {plan.promoLabel && (
                    <div className="absolute right-4 -top-4 bg-wevets-paleLightBlue text-wevets-blue px-3 py-1 rounded-full text-xs font-bold shadow-md z-20 max-w-[120px] break-words text-center">{plan.promoLabel}</div>
                  )}

                  <div className={`${plan.color} pt-0 pb-2`}>
                    <div className="bg-white rounded-t-2xl p-4 flex flex-col">
                      <div className="flex flex-col items-center justify-center mb-3">
                        {plan.originalPrice ? (
                          <div className="text-center">
                            <div className="text-sm text-gray-500 line-through">De {plan.originalPrice}</div>
                            <div className="flex items-baseline gap-2 justify-center">
                              <span className="font-ubuntu text-2xl font-bold text-wevets-skyBlue">{plan.price}</span>
                              <span className="font-ubuntu text-sm font-bold text-wevets-skyBlue">/mês</span>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center mb-3">
                            <span className="font-ubuntu text-2xl font-bold text-wevets-skyBlue">{plan.price}</span>
                            <span className="font-ubuntu text-sm font-bold text-wevets-skyBlue">/mês</span>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2 mb-4">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-wevets-blue flex-shrink-0" />
                            <span className="font-montserrat text-xs text-wevets-gray">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button className="w-full bg-wevets-blue hover:bg-wevets-blue/90 text-white font-bold mb-2">Assinar</Button>
                      <button className="flex items-center justify-center gap-1 text-wevets-blue text-xs"><span>Serviços inclusos e tempo para uso</span><ChevronRight className="w-4 h-4" /></button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button aria-label="Próximo" className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-2 shadow-md" onClick={() => {
            const el = carouselRef.current; if (el) el.scrollBy({ left: Math.floor(el.clientWidth * 0.8), behavior: 'smooth' });
          }}>
            <ChevronRight className="w-5 h-5 text-wevets-navy" />
          </button>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className="flex flex-col">
              <div className="bg-white rounded-2xl shadow-lg overflow-visible flex-1 flex flex-col relative">
                <div className={`${plan.color} px-6 py-3 rounded-t-2xl relative`}>
                  <h3 className="font-ubuntu text-xl font-bold text-white text-center">{plan.name}</h3>
                </div>

                {plan.promoLabel && (
                  <div className="absolute right-4 -top-4 bg-wevets-paleLightBlue text-wevets-blue px-3 py-1 rounded-full text-xs font-bold shadow-md z-20 max-w-[120px] break-words text-center">{plan.promoLabel}</div>
                )}

                <div className={`${plan.color} pt-0 pb-2`}>
                  <div className="bg-white rounded-t-2xl p-6 flex-1 flex flex-col">
                    <div className="flex flex-col items-center justify-center mb-4">
                      {plan.originalPrice ? (
                        <div className="text-center">
                          <div className="text-sm text-gray-500 line-through">De {plan.originalPrice}</div>
                          <div className="flex items-baseline gap-2 justify-center">
                            <span className="font-ubuntu text-4xl font-bold text-wevets-skyBlue">{plan.price}</span>
                            <span className="font-ubuntu text-lg font-bold text-wevets-skyBlue">/mês</span>
                          </div>
                          <div className="text-sm text-wevets-blue font-semibold mt-1">Oferta por tempo limitado</div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center mb-4">
                          <span className="font-ubuntu text-4xl font-bold text-wevets-skyBlue">{plan.price}</span>
                          <span className="font-ubuntu text-lg font-bold text-wevets-skyBlue">/mês</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2 mb-6 flex-1">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-wevets-blue flex-shrink-0" />
                          <span className="font-montserrat text-xs text-wevets-gray">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="h-px bg-gray-200 my-4" />

                    <Button className="w-full bg-wevets-blue hover:bg-wevets-blue/90 text-white font-bold mb-4">Assinar</Button>

                    <button className="flex items-center justify-center gap-1 text-wevets-blue text-xs"><span>Serviços inclusos e tempo para uso</span><ChevronRight className="w-4 h-4" /></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
