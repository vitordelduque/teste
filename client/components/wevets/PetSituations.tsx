import { Check } from "lucide-react";

export function PetSituations() {
  const situations = [
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/053cc998d28149d538e81f3784ce28ef405494c1?width=124",
      title:
        "Totó comeu seu fone de ouvido e agora precisa fazer uma cirurgia de urgência",
      withoutPlan: "R$ 0.000,00",
      withPlan: "R$ 000,00",
      description:
        "Considerando atendimento clínico geral, exames de imagem, hematológicos e cardiológicos, laparotomia e 48h de internação.",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/4ca45563b37bc0b051687be0318b4ff9ac05ecb1?width=124",
      title:
        "Lili parou de fazer xixi e agora precisa ser levada com urgência para análise",
      withoutPlan: "R$ 0.000,00",
      withPlan: "R$ 000,00",
      description:
        "Considerando atendimento clínico geral, exames de imagem, exames laboratoriais complexos, anestesia e procedimentos clínicos, 48h de internação e consulta com especialista.",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 md:px-12 lg:px-32 bg-wevets-paleLightBlue">
      <h2 className="font-ubuntu text-4xl font-bold text-center mb-8">
        Seu pet <span className="text-wevets-blue">protegido</span>!<br />
        Veja algumas situações em que os planos podem{" "}
        <span className="text-wevets-blue">salvar o seu pet</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
        {situations.map((situation, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center gap-6 mb-4">
              <img
                src={situation.image}
                alt=""
                className="w-16 h-16 rounded-full border border-wevets-skyBlue"
              />
              <h3 className="font-ubuntu text-lg font-bold text-wevets-gray flex-1">
                {situation.title}
              </h3>
            </div>

            <div className="h-px bg-wevets-skyBlue mb-4" />

            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-center">
                <span className="font-montserrat text-sm font-bold text-wevets-lightGray">
                  Emergência sem plano
                </span>
                <span className="font-montserrat text-sm font-bold text-wevets-lightGray">
                  {situation.withoutPlan}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-montserrat text-sm font-bold text-wevets-blue">
                  {index === 0
                    ? "Procedimento com WeVets Premium"
                    : "Emergência com plano"}
                </span>
                <span className="font-montserrat text-base font-bold text-wevets-blue">
                  {situation.withPlan}
                </span>
              </div>
            </div>

            <p className="font-montserrat text-xs text-wevets-lightGray">
              {situation.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
