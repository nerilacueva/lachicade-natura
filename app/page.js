# Reemplazá TODO el contenido de `app/page.js` por este código

```javascript
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
            </button>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#D8C3A5] bg-white hover:bg-[#EFE7DE] px-8 py-4 rounded-full font-medium transition-all duration-300"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-8 -left-8 w-40 h-40 bg-[#E7D7CF] rounded-full blur-3xl opacity-40"></div>

          <img
            src="https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=1400&auto=format&fit=crop"
            alt="Cosmética premium"
            className="rounded-[40px] shadow-2xl object-cover h-[650px] w-full relative z-10"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-[#8C847A] mb-3">
              Colección destacada
            </p>

            <h3 className="text-4xl font-serif text-[#2D2A26]">
              Productos favoritos
            </h3>
          </div>

          <input
            type="text"
            placeholder="Buscar productos..."
            className="bg-white border border-[#E5DBD0] px-6 py-4 rounded-full shadow-sm w-full md:w-80 outline-none focus:border-[#5F7A61]"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-80 w-full object-cover hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-8">
                <h4 className="text-2xl font-serif text-[#2D2A26]">
                  {product.name}
                </h4>

                <p className="text-[#5F7A61] text-3xl font-semibold mt-4">
                  {product.price}
                </p>

                <button className="w-full mt-8 bg-[#2D2A26] hover:bg-[#5F7A61] text-white py-4 rounded-full transition-all duration-300 font-medium">
                  Comprar ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-[#EFE7DE] rounded-[40px] p-12 md:p-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-[#8C847A] mb-4">
              Experiencia premium
            </p>

            <h3 className="text-5xl font-serif leading-tight text-[#2D2A26]">
              Cuidado personal inspirado en la naturaleza
            </h3>

            <p className="text-[#6F675E] text-lg leading-relaxed mt-8">
              Productos originales Natura con atención personalizada, pagos
              seguros y envíos rápidos a todo el país.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h4 className="text-2xl font-serif mb-3">🌿 Productos originales</h4>

              <p className="text-[#6F675E] leading-relaxed">
                Cosmética Natura auténtica con garantía de calidad.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h4 className="text-2xl font-serif mb-3">🚚 Envíos nacionales</h4>

              <p className="text-[#6F675E] leading-relaxed">
                Llegamos a cualquier provincia de Argentina.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h4 className="text-2xl font-serif mb-3">💳 Pagos seguros</h4>

              <p className="text-[#6F675E] leading-relaxed">
                Mercado Pago, transferencias y tarjetas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] hover:scale-110 transition-all duration-300 text-white px-6 py-4 rounded-full shadow-2xl z-50 font-medium"
      >
        WhatsApp
      </a>

      <footer className="bg-[#2D2A26] text-white mt-20">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
          <div>
            <h5 className="text-3xl font-serif">lachicade.Natura</h5>

            <p className="text-[#C8BFB7] mt-5 leading-relaxed">
              Perfumes y cosmética premium Natura para toda Argentina.
            </p>
          </div>

          <div>
            <h6 className="text-xl font-semibold mb-5">Contacto</h6>

            <ul className="space-y-3 text-[#C8BFB7]">
              <li>WhatsApp: +54 9 11 0000-0000</li>
              <li>Email: contacto@lachicadenatura.com</li>
              <li>Instagram: @lachicade.natura</li>
            </ul>
          </div>

          <div>
            <h6 className="text-xl font-semibold mb-5">Envíos</h6>

            <ul className="space-y-3 text-[#C8BFB7]">
              <li>Correo Argentino</li>
              <li>Andreani</li>
              <li>Mercado Envíos</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#4B4742] py-6 text-center text-[#B6ADA4] text-sm">
          © 2026 lachicade.Natura — Diseñado para una experiencia premium.
        </div>
      </footer>
    </div>
  );
}
