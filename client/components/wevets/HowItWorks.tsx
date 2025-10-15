import { Button } from "@/components/ui/button";

export function HowItWorks() {
  return (
    <section className="py-12 px-32 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-ubuntu text-4xl font-bold mb-8">
          Como funciona um plano de saúde <span className="text-wevets-blue">WeVets</span>?
        </h2>
        
        <div className="space-y-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-wevets-blue rounded-full flex items-center justify-center text-white font-bold">
              ✓
            </div>
            <div>
              <h3 className="font-ubuntu text-xl font-bold text-wevets-blue mb-2">
                Sem burocracia na hora do atendimento
              </h3>
              <p className="font-montserrat text-base text-wevets-gray">
                Todos nossos planos não têm burocracia, só chegar e ser atendido
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-wevets-blue rounded-full flex items-center justify-center text-white font-bold">
              ✓
            </div>
            <div>
              <h3 className="font-ubuntu text-xl font-bold text-wevets-blue mb-2">
                Sem necessidade de microchipagem
              </h3>
              <p className="font-montserrat text-base text-wevets-gray">
                Não exigimos que você microchipe seu pet para contratar o plano
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-wevets-blue rounded-full flex items-center justify-center text-white font-bold">
              ✓
            </div>
            <div>
              <h3 className="font-ubuntu text-xl font-bold text-wevets-blue mb-2">
                Todos online na cobertura
              </h3>
              <p className="font-montserrat text-base text-wevets-gray">
                Consulte a cobertura completa de todos os serviços online com facilidade
              </p>
            </div>
          </div>
        </div>
        
        <Button className="bg-wevets-blue hover:bg-wevets-blue/90 text-white font-bold">
          Saiba mais
        </Button>
      </div>
    </section>
  );
}
