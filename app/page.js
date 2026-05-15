"use client";

export default function LaChicadeNatura() {
  const whatsappLink = "https://wa.me/5491100000000";
  const instagramLink = "https://instagram.com/lachicade.natura";

  const products = [
    {
      id: 1,
      name: "Kaiak Clásico",
      price: "$39.900",
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Crema Corporal Ekos",
      price: "$24.500",
      image:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Set Facial Natura",
      price: "$49.900",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-[#F8F5F1] min-h-screen text-[#2D2A26]">
      <header className="bg-[#F8F5F1]/95 backdrop-blur border-b border-[#E8DED3] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif tracking-tight text-[#2D2A26]">
              lachicade.Natura
            </h1>

            <p className="text-sm text-[#7B746B] mt-1">
              Perfumes, cosmética y bienestar premium
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={instagramLink}
              target="_blank"
              className="hidden md:flex text-sm hover:text-[#5F7A61] transition"
            >
              Instagram
            </a>

            <button className="bg-[#5F7A61] hover:bg-[#4B6350] text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 font-medium">
              🛒 Mi carrito
            </button>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="bg-[#E7D7CF] text-[#5F7A61] px-5 py-2 rounded-full text-sm font-medium">
            Envíos a toda Argentina
          </span>

          <h2 className="text-5xl md:text-6xl leading-tight mt-8 font-serif text-[#2D2A26]">
            Elegancia natural para tu rutina diaria
          </h2>

          <p className="text-lg text-[#6F675E] mt-8 leading-relaxed max-w-xl">
            Descubrí perfumes, tratamientos faciales y productos de cuidado
            personal Natura con una experiencia de compra moderna, delicada y
            premium.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <button className="bg-[#5F7A61] hover:bg-[#4B6350] text-white px-8 py-4 rounded-full font-medium shadow-xl transition-all duration-300 hover:scale-105">
              Ver catálogo
}