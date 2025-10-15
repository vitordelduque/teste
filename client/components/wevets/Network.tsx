import { useMemo, useState } from "react";
import { MapPin, Search, Clock } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState, useMemo } from "react";

const UNITS = [
  {
    id: "u1",
    name: "WeVets - Unidade Centro",
    address: "Av. Paulista, 1000 - São Paulo, SP",
    city: "São Paulo",
    lat: -23.561414,
    lon: -46.655881,
    hours: "24h",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/740d8e33b9fb478e7af321964bd3050ceb61534f?width=600",
    services: ["Consultas", "Emergência 24h", "Exames laboratoriais", "Cirurgias"],
    images: [
      "https://api.builder.io/api/v1/image/assets/TEMP/740d8e33b9fb478e7af321964bd3050ceb61534f?width=900",
      "https://api.builder.io/api/v1/image/assets/TEMP/8a36d4910fb39db9d9bb125d45d3357c9263f400?width=900"
    ],
    reviews: [
      { id: 1, author: "Joana", rating: 5, text: "Ótimo atendimento, profissionais muito atenciosos." },
      { id: 2, author: "Carlos", rating: 4, text: "Atendimento rápido, recomendo." }
    ]
  },
  {
    id: "u2",
    name: "WeVets - Unidade Pinheiros",
    address: "R. dos Pinheiros, 200 - São Paulo, SP",
    city: "São Paulo",
    lat: -23.561123,
    lon: -46.689452,
    hours: "09:00 - 21:00",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/147a03637285ad39f32e679c96585502b97004a5?width=600",
    services: ["Consultas", "Vacinação", "Check-up"],
    images: [
      "https://api.builder.io/api/v1/image/assets/TEMP/147a03637285ad39f32e679c96585502b97004a5?width=900"
    ],
    reviews: [
      { id: 1, author: "Mariana", rating: 5, text: "Equipe excelente e instalações modernas." }
    ]
  },
  {
    id: "u3",
    name: "WeVets - Unidade Campinas",
    address: "Av. da Saudade, 800 - Campinas, SP",
    city: "Campinas",
    lat: -22.90556,
    lon: -47.06083,
    hours: "08:00 - 20:00",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/9b8857370b612990e1c89d50efbdc2806ba6b0e1?width=600",
    services: ["Consultas", "Internação", "Cirurgias"],
    images: [
      "https://api.builder.io/api/v1/image/assets/TEMP/9b8857370b612990e1c89d50efbdc2806ba6b0e1?width=900"
    ],
    reviews: [
      { id: 1, author: "Paulo", rating: 4, text: "Bom atendimento, porém fila um pouco longa." }
    ]
  }
];

export function Network() {
  const [selectedId, setSelectedId] = useState(UNITS[0].id);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return UNITS;
    return UNITS.filter(u => u.name.toLowerCase().includes(q) || u.city.toLowerCase().includes(q) || u.address.toLowerCase().includes(q));
  }, [query]);

  const selected = UNITS.find(u => u.id === selectedId) || UNITS[0];

  const [modalOpen, setModalOpen] = useState(false);
  const [modalUnit, setModalUnit] = useState<typeof UNITS[number] | null>(null);

  const embedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${selected.lon - 0.02}%2C${selected.lat - 0.01}%2C${selected.lon + 0.02}%2C${selected.lat + 0.01}&layer=mapnik&marker=${selected.lat}%2C${selected.lon}`;

  const directionsUrl = `https://www.openstreetmap.org/directions?from=&to=${selected.lat}%2C${selected.lon}`;

  const openUnitModal = (unit: typeof UNITS[number]) => {
    setModalUnit(unit);
    setModalOpen(true);
  };

  return (
    <section className="py-12 px-6 lg:px-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-ubuntu text-3xl lg:text-4xl font-bold">
              Rede <span className="text-wevets-blue">WeVets</span>
            </h2>
            <p className="mt-2 text-wevets-gray max-w-xl">
              Encontre a unidade mais próxima, veja horários e pegue a rota diretamente no mapa.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
              <Search className="w-5 h-5 text-wevets-gray" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Pesquisar cidade, endereço ou unidade"
                className="bg-transparent outline-none text-sm"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map */}
          <div className="lg:col-span-2 h-96 rounded-lg overflow-hidden border">
            <iframe
              title="WeVets map"
              src={embedUrl}
              className="w-full h-full"
              loading="lazy"
            />
          </div>

          {/* List */}
          <aside className="space-y-4">
            <div className="flex items-center gap-2 md:hidden">
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 w-full">
                <Search className="w-5 h-5 text-wevets-gray" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Pesquisar unidade ou cidade"
                  className="bg-transparent outline-none text-sm w-full"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3">
              <h4 className="font-montserrat font-bold text-wevets-gray mb-2">Unidades encontradas</h4>

              <div className="space-y-3 max-h-72 overflow-auto">
                {filtered.map(unit => (
                  <div
                    key={unit.id}
                    className={`w-full text-left p-3 rounded-lg flex items-start gap-3 hover:bg-gray-50 ${unit.id === selectedId ? 'ring-2 ring-wevets-blue bg-gray-50' : ''}`}
                  >
                    <img src={unit.img} alt="unit" className="w-20 h-16 object-cover rounded-md flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h5 className="font-semibold text-sm text-wevets-gray">{unit.name}</h5>
                        <span className="text-xs text-wevets-lightBlue font-bold">{unit.hours}</span>
                      </div>
                      <p className="text-xs text-gray-500">{unit.address}</p>
                      <div className="mt-2 flex items-center gap-2 text-xs">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-wevets-paleLightBlue text-wevets-blue">24h</span>
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-gray-100 text-gray-600">Veterinária Geral</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button variant="outline" size="sm" onClick={() => openUnitModal(unit)}>
                        Detalhes
                      </Button>
                      <button onClick={() => setSelectedId(unit.id)} className="text-xs text-wevets-blue">Selecionar</button>
                    </div>
                  </div>
                ))}
                {filtered.length === 0 && (
                  <div className="text-sm text-gray-500">Nenhuma unidade encontrada para a pesquisa.</div>
                )}
              </div>

              <div className="mt-4 flex gap-2">
                <a href={directionsUrl} target="_blank" rel="noreferrer" className="flex-1 text-center bg-wevets-blue text-white py-2 rounded-lg font-bold">Ver rota</a>
                <a href={`https://www.openstreetmap.org/?mlat=${selected.lat}&mlon=${selected.lon}#map=16/${selected.lat}/${selected.lon}`} target="_blank" rel="noreferrer" className="flex-1 text-center border border-gray-200 py-2 rounded-lg">Abrir mapa</a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4">
              <h4 className="font-montserrat font-bold text-wevets-gray mb-2">Ajuda</h4>
              <p className="text-sm text-gray-600">Se não achar a unidade, tente pesquisar por cidade ou endereço completos.</p>
            </div>
          </aside>
        </div>

        {/* Unit details modal */}
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          {modalUnit && (
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{modalUnit.name}</DialogTitle>
                <DialogDescription>{modalUnit.address} — Horário: {modalUnit.hours}</DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-1 gap-4">
                <div className="flex gap-2 overflow-x-auto">
                  {modalUnit.images.map((src, i) => (
                    <img key={i} src={src} alt={`${modalUnit.name} ${i}`} className="w-48 h-32 object-cover rounded-md" />
                  ))}
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Serviços disponíveis</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-700">
                    {modalUnit.services.map((s, idx) => (
                      <li key={idx}>{s}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Avaliações</h4>
                  <div className="space-y-2">
                    {modalUnit.reviews.map(r => (
                      <div key={r.id} className="border p-2 rounded">
                        <div className="flex items-center justify-between">
                          <strong>{r.author}</strong>
                          <span className="text-sm text-gray-600">{r.rating} ★</span>
                        </div>
                        <p className="text-sm text-gray-700">{r.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <DialogFooter>
                <div className="flex gap-2 w-full">
                  <a className="flex-1" href={`https://www.openstreetmap.org/directions?from=&to=${modalUnit.lat}%2C${modalUnit.lon}`} target="_blank" rel="noreferrer">
                    <Button className="w-full">Ver rota</Button>
                  </a>
                  <Button variant="outline" onClick={() => setModalOpen(false)}>Fechar</Button>
                </div>
              </DialogFooter>
            </DialogContent>
          )}
        </Dialog>

      </div>
    </section>
  );
}
