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

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
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
