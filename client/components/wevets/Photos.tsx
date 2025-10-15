export function Photos() {
  const images = [
    "https://api.builder.io/api/v1/image/assets/TEMP/740d8e33b9fb478e7af321964bd3050ceb61534f?width=1376",
    "https://api.builder.io/api/v1/image/assets/TEMP/147a03637285ad39f32e679c96585502b97004a5?width=1482",
    "https://api.builder.io/api/v1/image/assets/TEMP/9b8857370b612990e1c89d50efbdc2806ba6b0e1?width=1482",
    "https://api.builder.io/api/v1/image/assets/TEMP/8a36d4910fb39db9d9bb125d45d3357c9263f400?width=1044",
  ];

  return (
    <section className="py-12">
      <h2 className="font-ubuntu text-4xl font-bold text-center mb-8">
        Estrutura <span className="text-wevets-blue">de ponta</span> e equipamentos de{" "}
        <span className="text-wevets-blue">última geração</span>!
      </h2>
      
      <div className="overflow-x-auto">
        <div className="flex gap-4 px-32 min-w-max">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Facility ${index + 1}`}
              className="h-80 w-auto object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
      
      <div className="flex justify-center gap-3 mt-6">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-black opacity-70' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </section>
  );
}
