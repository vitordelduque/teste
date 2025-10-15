import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export function Network() {
  return (
    <section className="py-12 px-32 bg-wevets-paleLightBlue">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-ubuntu text-4xl font-bold text-center mb-8">
          Rede <span className="text-wevets-blue">WeVets</span>
        </h2>
        
        <div className="flex items-center justify-between">
          <div className="max-w-xl">
            <p className="font-ubuntu text-lg font-bold text-wevets-gray mb-6">
              Conheça nossas unidades próprias e a rede credenciada perto de você.
            </p>
            
            <Button className="bg-wevets-blue hover:bg-wevets-blue/90 text-white font-bold">
              Ver todas as unidades
            </Button>
          </div>
          
          <div className="relative">
            <MapPin className="w-48 h-48 text-wevets-skyBlue opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
