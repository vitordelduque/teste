import { Check, ChevronRight, Diamond } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Plans() {
  const plans = [
    {
      name: "Básico",
      originalPrice: "R$19,90",
      price: "R$14,90",
      color: "bg-wevets-skyBlue",
      promoLabel: "Promoção",
      features: [
        "Vacinas obrigatórias",
        "Consultas em horário normal",
        "Consultas em horário de plantão",
        "Exames laboratoriais de check up",
      ],
    },
    {
      name: "Conforto",
      originalPrice: "R$59,90",
      price: "R$49,90",
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
      originalPrice: "R$119,90",
      price: "R$94,90",
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
      originalPrice: "R$179,90",
      price: "R$149,90",
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

  return (
    <section className="py-12 px-6 lg:px-32" style={{ background: "linear-gradient(180deg, #092744 50.48%, #FFF 50.49%)" }}>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className="flex flex-col">
              <div className="bg-white rounded-2xl shadow-lg overflow-visible flex-1 flex flex-col relative">
                <div className={`${plan.color} px-6 py-3 rounded-t-2xl relative`}>
                  <h3 className="font-ubuntu text-xl font-bold text-white text-center">
                    {plan.name}
                  </h3>
                </div>

                {/* Promo badge positioned above header; overflow-visible prevents clipping and badge wraps if needed */}
                {plan.promoLabel && (
                  <div className="absolute right-4 -top-4 bg-wevets-paleLightBlue text-wevets-blue px-3 py-1 rounded-full text-xs font-bold shadow-md z-20 max-w-[120px] break-words text-center">
                    {plan.promoLabel}
                  </div>
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

                    <button className="flex items-center justify-center gap-1 text-wevets-blue text-xs">
                      <span>Serviços inclusos e tempo para uso</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
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
