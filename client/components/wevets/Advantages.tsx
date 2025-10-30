import { Check } from "lucide-react";

export function Advantages() {
  const advantages1 = [
    "O melhor corpo clínico do Brasil disponível 24h por dia, todos os dias do ano",
    "Indicamos nossa unidade mais próxima de atendimento conforme sua necessidade",
    "Atendimento humanizado, sem filas e com solução imediata",
    "Seja atendido rapidamente pelo canal que preferir: Whatsapp, Telefone ou E-mail",
  ];

  const advantages2 = [
    "Opções com uso imediato e sem limite de usos",
    "Sem taxa de cancelamentos",
    "Tudo na palma da sua mão com o APP WeVets",
    "Libere o uso imediato de serviços complexos antes dos 30 dias*",
    "Sem taxa de adesão e seu limite do cartão de crédito livre",
  ];

  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        <div className="md:flex-1 bg-wevets-blue py-12 px-4 sm:px-6 md:px-12 lg:px-32">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/d8e95adb8624bc5f5930b2082ec5ac936878aad4?width=236"
            alt=""
            className="w-32 h-auto mx-auto mb-6"
          />

          <h2 className="font-ubuntu text-3xl font-bold text-white text-center mb-6">
            Atendimento personalizado
          </h2>

          <div className="space-y-4">
            {advantages1.map((advantage, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                <p className="font-montserrat text-white">{advantage}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="md:flex-1 py-12 px-4 sm:px-6 md:px-12 lg:px-32 flex flex-col justify-center items-center"
          style={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.20)), #1C7BBA",
          }}
        >
          <div className="flex justify-center items-center mb-6 w-full">
            <svg
              className="w-32 h-auto block mx-auto"
              viewBox="0 0 127 127"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M100.058 124.528C113.577 124.528 124.537 113.527 124.537 99.9561C124.537 86.3852 113.577 75.3838 100.058 75.3838C86.5383 75.3838 75.5786 86.3852 75.5786 99.9561C75.5786 113.527 86.5383 124.528 100.058 124.528Z"
                stroke="#71C7F7"
                strokeWidth="4"
              />
              <path
                d="M88.7996 100.942L97.0452 109.101L114.37 91.9609"
                stroke="#71C7F7"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h2 className="font-ubuntu text-3xl font-bold text-white text-left mb-6 w-full md:w-auto">
            Zero burocracias
          </h2>

          <div className="space-y-4 mb-6 w-full md:w-auto text-left">
            {advantages2.map((advantage, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                <p className="font-montserrat text-white">{advantage}</p>
              </div>
            ))}
          </div>

          <p className="font-montserrat text-sm text-white text-left w-full md:w-auto">
            *Antecipação de uso disponível na recepção das unidades. Confirmar
            valores com atendente.
          </p>
        </div>
      </div>
    </section>
  );
}
