import { Header } from "@/components/wevets/Header";
import { Hero } from "@/components/wevets/Hero";
import { PetSituations } from "@/components/wevets/PetSituations";
import { Plans } from "@/components/wevets/Plans";
import { HowItWorks } from "@/components/wevets/HowItWorks";
// Temporarily removed Network import to isolate runtime error. Re-add after debugging.
import { Photos } from "@/components/wevets/Photos";
import { Benefits } from "@/components/wevets/Benefits";
import { Advantages } from "@/components/wevets/Advantages";
import { FAQ } from "@/components/wevets/FAQ";
import { Footer } from "@/components/wevets/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <PetSituations />
      <Plans />
      <HowItWorks />

      {/* Network temporarily disabled for debugging. */}
      <section className="py-20 px-6 lg:px-32 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-ubuntu text-2xl font-bold">Rede WeVets (temporariamente indisponível)</h3>
          <p className="text-gray-600 mt-4">Se a página carregar agora, o componente Network está causando o erro. Vou investigar e reativar depois.</p>
        </div>
      </section>

      <Photos />
      <Benefits />
      <Advantages />
      <FAQ />
      <Footer />
    </div>
  );
}
