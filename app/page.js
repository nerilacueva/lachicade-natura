"use client";

export default function LaChicadeNatura() {
  const whatsappLink = "https://wa.me/5491100000000";
  const instagramLink = "https://instagram.com/lachicade.natura";
  const mercadoPagoLink = "https://www.mercadopago.com.ar";

  const handleCheckout = () => {
    window.open(mercadoPagoLink, "_blank");
  };
  const products = [
    {
      id: 1,
      name: "Kit Facial Natura",
      price: "$24.900",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Perfume Natura Homem",
      price: "$39.500",
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Crema Hidratante Ekos",
      price: "$18.700",
      image:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <header className="bg-gradient-to-r from-emerald-700 to-green-500 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              lachicade.Natura
            </h1>
            <p className="text-sm md:text-base opacity-90 mt-1">
              Cosmética, bienestar y belleza Natura para toda Argentina
            </p>
          </div>

          <button className="bg-white text-emerald-700 font-semibold px-5 py-3 rounded-2xl shadow hover:scale-105 transition">
            🛒 Mi carrito
          </button>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
            Envíos a todo Argentina
          </span>

          <h2 className="text-5xl font-bold leading-tight mt-6">
            Descubrí el mundo Natura desde tu casa
          </h2>

          <p className="text-lg text-stone-600 mt-6 leading-relaxed">
            Comprá productos originales Natura con atención personalizada,
            promociones especiales y envíos rápidos a cualquier provincia del
            país.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-2xl font-semibold shadow-lg transition">
              Ver catálogo
            </button>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-stone-300 bg-white px-6 py-4 rounded-2xl font-semibold hover:bg-stone-100 transition"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=1400&auto=format&fit=crop"
            alt="Productos Natura"
            className="rounded-3xl shadow-2xl object-cover h-[500px] w-full"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-3xl font-bold">Productos destacados</h3>
            <p className="text-stone-500 mt-2">
              Elegí tus favoritos y agregalos al carrito.
            </p>
          </div>

          <input
            type="text"
            placeholder="Buscar productos..."
            className="border border-stone-300 px-4 py-3 rounded-2xl w-64 bg-white shadow-sm"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <h4 className="text-xl font-semibold">{product.name}</h4>
                <p className="text-2xl font-bold text-emerald-700 mt-3">
                  {product.price}
                </p>

                <button
                  onClick={handleCheckout}
                  className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-2xl font-semibold transition"
                >
                  Comprar ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white mt-20 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-3xl shadow-sm border border-stone-100">
            <div className="text-5xl mb-4">🚚</div>
            <h4 className="text-xl font-bold">Envíos Nacionales</h4>
            <p className="text-stone-500 mt-3">
              Llegamos a cualquier punto de Argentina.
            </p>
          </div>

          <div className="p-6 rounded-3xl shadow-sm border border-stone-100">
            <div className="text-5xl mb-4">💳</div>
            <h4 className="text-xl font-bold">Pagos Seguros</h4>
            <p className="text-stone-500 mt-3">
              Transferencia, Mercado Pago y tarjetas.
            </p>
          </div>

          <div className="p-6 rounded-3xl shadow-sm border border-stone-100">
            <div className="text-5xl mb-4">🌿</div>
            <h4 className="text-xl font-bold">Productos Originales</h4>
            <p className="text-stone-500 mt-3">
              Natura auténtico con atención personalizada.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-stone-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
          <div>
            <h5 className="text-2xl font-bold">lachicade.Natura</h5>
            <p className="text-stone-400 mt-4 leading-relaxed">
              Tienda online dedicada a productos Natura con envíos a toda
              Argentina.
            </p>
          </div>

          <div>
            <h6 className="font-semibold text-lg mb-4">Contacto</h6>
            <ul className="space-y-2 text-stone-400">
              <li>WhatsApp: +54 9 11 0000-0000</li>
              <li>Email: contacto@lachicadenatura.com</li>
              <li>
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Instagram: @lachicade.natura
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="font-semibold text-lg mb-4">Métodos de envío</h6>
            <ul className="space-y-2 text-stone-400">
              <li>Correo Argentino</li>
              <li>Andreani</li>
              <li>Mercado Envíos</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 py-5 text-center text-stone-500 text-sm">
          © 2026 lachicade.Natura — Tienda lista para publicar online en Vercel o Netlify.
        </div>
      </footer>
    </div>
  );
}

