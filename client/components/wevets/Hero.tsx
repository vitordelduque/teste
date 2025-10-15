import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-[586px] w-full overflow-hidden">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/740e06e73b4b3ee11914e18aec481fc12b178181?width=2884"
        alt="Hero Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 flex items-center justify-end px-32">
        <div className="max-w-2xl text-right">
          <h1 className="font-ubuntu text-[52px] leading-[100%] font-normal text-white mb-4">
            PLANO DE SAÚDE <span className="font-bold">WEVETS</span>
          </h1>
          
          <h2 className="font-ubuntu text-[32px] leading-[120%] font-bold text-wevets-lightBlue mb-8">
            Compare e escolha o melhor plano de saúde para o seu pet
          </h2>
          
          <div className="space-y-4">
            <p className="font-ubuntu text-[32px] leading-[120%] text-white">
              Planos a partir de <span className="font-bold">R$ 4,90</span>
            </p>
            
            <div className="border border-white rounded-lg p-2 space-y-2">
              <p className="font-montserrat font-bold text-white">
                +500 mil atendimentos realizados
              </p>
              <p className="font-montserrat font-bold text-white">
                1500 médicos veterinários
              </p>
              <p className="font-montserrat font-bold text-white">
                20 hospitais veterinários 24hrs
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:justify-end gap-3 mt-2">
              <Button className="w-full sm:w-auto bg-wevets-blue hover:bg-wevets-blue/90 text-white font-bold text-base py-4">
                Proteja seu pet
              </Button>

              <Button variant="outline" className="w-full sm:w-auto text-wevets-blue font-bold text-base py-4">
                Fale com um especialista
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
