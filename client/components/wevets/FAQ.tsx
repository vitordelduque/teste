import { ChevronRight } from "lucide-react";

export function FAQ() {
  const questions = [
    "Como funciona o Plano?",
    "Acabei de contratar o Plano, quando começam a contar as carências?",
    "Comprando para dois ou mais pets, tenho mais descontos?",
    "O que é coparticipação dos planos e como funciona ?",
    "O site é seguro?",
    "Quais as formas de pagamento da Wevets?",
    "Outra pessoa pode levar o meu pet para o atendimento ?",
  ];

  return (
    <section className="py-12 px-4 sm:px-6 md:px-12 lg:px-32 bg-white">
      <h2 className="font-ubuntu text-4xl font-bold text-center mb-8">
        Dúvidas frequentes
      </h2>

      <div className="max-w-4xl mx-auto space-y-4">
        {questions.map((question, index) => (
          <div key={index} className="border-b-2 border-wevets-blue py-4">
            <button className="flex items-center justify-between w-full text-left group">
              <div className="flex items-center gap-3">
                <ChevronRight className="w-6 h-6 text-wevets-gray" />
                <span className="font-montserrat text-base font-bold">
                  {question}
                </span>
              </div>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
