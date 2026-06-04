"use client";

const categories = [
  "Perfumes",
  "Skincare",
  "Cabello",
  "Maquillaje",
  "Bienestar",
  "Gift Sets",
];

const products = [
  {
    id: 1,
    name: "Kaiak Feminino",
    price: "$42.900",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Tododia Body Cream",
    price: "$24.500",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Ekos Maracuyá",
    price: "$31.900",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Humor Eau de Parfum",
    price: "$56.900",
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <div className="bg-[#FAF7FB] min-h-screen text-[#4E4351]">
      {/* TOPBAR */}
      <div className="bg-[#DCCBE3] text-[#5D5061] text-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <p>Envíos a toda Argentina</p>
          <p>@lachicade.natura</p>
        </div>
      </div>

      {/* HEADER */}
      <header className="bg-white sticky top-0 z-50 border-b border-[#EFE7F2]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between gap-6">
          <h1 className="text-4xl font-light tracking-[0.2em] text-[#7D687F]">
            lachicade.Natura
          </h1>

          <div className="flex-1 max-w-2xl relative hidden md:block">
            <input
              type="text"
              placeholder="¿Qué estás buscando?"
              className="w-full bg-[#F7F3F8] rounded-full py-4 px-8 outline-none border border-transparent focus:border-[#C9A9D6]"
            />

            <button className="absolute right-2 top-2 bg-[#C9A9D6] text-white px-6 py-2 rounded-full">
              🔍
            </button>
          </div>

          <div className="flex items-center gap-5 text-sm">
            <span>♡ favoritos</span>
            <span>👤 ingresar</span>

            <button className="bg-[#C9A9D6] text-white px-5 py-3 rounded-full">
              🛍 carrito
            </button>
          </div>
        </div>

        {/* CATEGORIES */}
        <div className="border-t border-[#F1EBF4]">
          <div className="max-w-7xl mx-auto px-6 py-5 flex gap-10 overflow-auto whitespace-nowrap text-sm">
            {categories.map((category) => (
              <button
                key={category}
                className="hover:text-[#B38BC4] transition"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="bg-[#F2E8F5] rounded-[50px] overflow-hidden grid lg:grid-cols-2 items-center">
          <div className="p-10 md:p-20">
            <span className="bg-white text-[#B38BC4] px-5 py-2 rounded-full text-sm">
              new collection
            </span>

            <h2 className="text-6xl leading-tight mt-8 font-light text-[#7B6283]">
              Belleza natural para todos los días
            </h2>

            <p className="text-[#7A707C] text-lg mt-8 leading-relaxed">
              Descubrí perfumes, skincare y cosmética Natura con una estética
              delicada, femenina y premium.
            </p>

            <div className="flex gap-5 mt-10 flex-wrap">
              <button className="bg-[#C9A9D6] hover:opacity-90 text-white px-8 py-4 rounded-full transition">
                Comprar ahora
              </button>

              <button className="bg-white text-[#7B6283] px-8 py-4 rounded-full hover:bg-[#F8F2FA] transition">
                Ver catálogo
              </button>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=1400&auto=format&fit=crop"
            alt="Beauty"
            className="h-full object-cover min-h-[500px]"
          />
        </div>
      </section>

      {/* FEATURE BOXES */}
      {/* CATEGORÍAS VISUALES */}
<section className="max-w-7xl mx-auto px-6 py-14">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

    {/* PERFUMES MASCULINOS */}
    <a
      href="#subcategorias-masculinas"
      className="relative rounded-[35px] overflow-hidden group h-[420px]"
    >
      <img
  src="/images/perfumes-masculinos-banner.png"
  alt="Perfumes Masculinos"
  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
/>

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="absolute bottom-10 left-0 right-0 text-center text-white px-4">
        <h3 className="text-4xl leading-tight font-light">
          PERFUMES
          <br />
          MASCULINOS
        </h3>

        <button className="mt-6 bg-[#D8B5E5] text-white px-8 py-3 rounded-full">
          Ver más
        </button>
      </div>
    </a>

    {/* PERFUMES FEMENINOS */}
    <a
      href="#perfumes-femeninos"
      className="relative rounded-[35px] overflow-hidden group h-[420px]"
    >
      <img
        src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop"
        alt="Perfumes Femeninos"
        className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
      />

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="absolute bottom-10 left-0 right-0 text-center text-white px-4">
        <h3 className="text-4xl leading-tight font-light">
          PERFUMES
          <br />
          FEMENINOS
        </h3>

        <button className="mt-6 bg-[#D8B5E5] text-white px-8 py-3 rounded-full">
          Ver más
        </button>
      </div>
    </a>

    {/* CUIDADO PERSONAL */}
    <a
      href="#cuidado-personal"
      className="relative rounded-[35px] overflow-hidden group h-[420px]"
    >
      <img
        src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1200&auto=format&fit=crop"
        alt="Cuidado Personal"
        className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
      />

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="absolute bottom-10 left-0 right-0 text-center text-white px-4">
        <h3 className="text-4xl leading-tight font-light">
          CUIDADO
          <br />
          PERSONAL
        </h3>

        <button className="mt-6 bg-[#D8B5E5] text-white px-8 py-3 rounded-full">
          Ver más
        </button>
      </div>
    </a>

    {/* CABELLO */}
    <a
      href="#cabello"
      className="relative rounded-[35px] overflow-hidden group h-[420px]"
    >
      <img
        src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1200&auto=format&fit=crop"
        alt="Cabello"
        className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
      />

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="absolute bottom-10 left-0 right-0 text-center text-white px-4">
        <h3 className="text-4xl leading-tight font-light">
          CABELLO
        </h3>

        <button className="mt-6 bg-[#D8B5E5] text-white px-8 py-3 rounded-full">
          Ver más
        </button>
      </div>
    </a>

    {/* OFERTAS */}
    <a
      href="#ofertas"
      className="relative rounded-[35px] overflow-hidden group h-[420px]"
    >
      <img
        src="https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=1200&auto=format&fit=crop"
        alt="Ofertas"
        className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
      />

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="absolute bottom-10 left-0 right-0 text-center text-white px-4">
        <h3 className="text-4xl leading-tight font-light">
          OFERTAS
          <br />
          DEL DÍA
        </h3>

        <button className="mt-6 bg-[#D8B5E5] text-white px-8 py-3 rounded-full">
          Ver más
        </button>
      </div>
    </a>

  </div>
</section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.4em] text-[#B38BC4] text-sm mb-4">
            see what's new
          </p>

          <h3 className="text-5xl font-light text-[#7B6283]">
            Productos destacados
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-[35px] overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-80 w-full object-cover hover:scale-105 transition duration-700"
                />
              </div>

              <div className="p-6 text-center">
                <h4 className="text-2xl text-[#6E5A75]">
                  {product.name}
                </h4>

                <p className="text-[#B38BC4] text-3xl mt-4 font-light">
                  {product.price}
                </p>

                <button className="mt-6 bg-[#C9A9D6] hover:opacity-90 text-white px-8 py-3 rounded-full transition">
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-[#F2E8F5] rounded-[50px] p-14 text-center">
          <h3 className="text-5xl text-[#7B6283] font-light">
            Join the list
          </h3>

          <p className="text-[#7D707F] mt-6 max-w-2xl mx-auto leading-relaxed">
            Recibí novedades, promociones y lanzamientos exclusivos Natura.
          </p>

          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mt-10">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 bg-white px-6 py-4 rounded-full outline-none"
            />

            <button className="bg-[#C9A9D6] text-white px-8 py-4 rounded-full">
              Suscribirme
            </button>
          </div>
        </div>
      </section>{/* SUBCATEGORIAS PERFUMES MASCULINOS */}
<section
  id="subcategorias-masculinas"
  className="max-w-7xl mx-auto px-6 py-24"
>
  <div className="text-center mb-16">
    <h2 className="text-5xl font-light text-[#5C4B66]">
      Perfumes Masculinos
    </h2>

    <p className="mt-4 text-stone-500 text-lg">
      Elegí tu línea Natura favorita
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">

    {/* KAIAK */}
    <a
      href="#kaiak"
      className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group"
    >
      <img
        src="/images/perfumes-masculinos-banner.png"
        alt="Kaiak"
        className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-700"
      />

      <div className="p-6 text-center">
        <h3 className="text-2xl text-[#5C4B66]">
          Kaiak
        </h3>
      </div>
    </a>

    {/* HUMOR */}
    <a
      href="#humor"
      className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group"
    >
      <img
        src="/images/humor-banner.jpg"
        alt="Humor"
        className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-700"
      />

      <div className="p-6 text-center">
        <h3 className="text-2xl text-[#5C4B66]">
          Humor
        </h3>
      </div>
    </a>

    {/* HOMEM */}
    <a
      href="#homem"
      className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group"
    >
      <img
        src="/images/homem-banner.jpg"
        alt="Homem"
        className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-700"
      />

      <div className="p-6 text-center">
        <h3 className="text-2xl text-[#5C4B66]">
          Homem
        </h3>
      </div>
    </a>

    {/* ESSENCIAL */}
    <a
      href="#essencial"
      className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group"
    >
      <img
        src="/images/essencial-banner.jpg"
        alt="Essencial"
        className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-700"
      />

      <div className="p-6 text-center">
        <h3 className="text-2xl text-[#5C4B66]">
          Essencial
        </h3>
      </div>
    </a>

    {/* BIOGRAFIA */}
    <a
      href="#biografia"
      className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group"
    >
      <img
        src="/images/biografia-banner.jpg"
        alt="Biografia"
        className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-700"
      />

      <div className="p-6 text-center">
        <h3 className="text-2xl text-[#5C4B66]">
          Biografia
        </h3>
      </div>
    </a>

  </div>
</section>
{/* KAIAK MASCULINOS */}
<section
  id="kaiak"
  className="max-w-7xl mx-auto px-6 py-24"
>
  <div className="mb-14 text-center">
    <h2 className="text-5xl font-light text-[#5C4B66]">
      Kaiak Masculinos
    </h2>

    <p className="mt-4 text-stone-500 text-lg">
      Descubrí toda la línea Kaiak Natura.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

    {[
      {
        name: "Kaiak Aero",
        price: "$38.500",
        image: "/images/kaiak/kaiak-aero.jpg",
        desc: "Aromático herbal, acorde tónico, ruibarbo y enebro.",
      },
      {
        name: "Kaiak Aventura",
        price: "$35.000",
        image: "/images/kaiak/kaiak-aventura.jpg",
        desc: "Herbal leve con notas acuosas, mandarina y musk.",
      },
      {
        name: "Kaiak Clásico",
        price: "$35.000",
        image: "/images/kaiak/kaiak-clasico.jpg",
        desc: "Notas acuosas, albahaca y bergamota.",
      },
      {
        name: "Kaiak Noite",
        price: "$57.000",
        image: "/images/kaiak/kaiak-noite.jpg",
        desc: "Herbal intenso con pimienta negra y olíbano.",
      },
      {
        name: "Kaiak Océano",
        price: "$36.500",
        image: "/images/kaiak/kaiak-oceano.jpg",
        desc: "Algas marinas y complejo acuoso.",
      },
      {
        name: "Kaiak Eau de Parfum",
        price: "$60.000",
        image: "/images/kaiak/kaiak-parfum.jpg",
        desc: "Enebro, ámbar y cedro.",
      },
      {
        name: "Kaiak Pulso",
        price: "$39.000",
        image: "/images/kaiak/kaiak-pulso.jpg",
        desc: "Fragancia intensa y moderna.",
      },
      {
        name: "Kaiak Sonar",
        price: "$42.000",
        image: "/images/kaiak/kaiak-sonar.jpg",
        desc: "Notas frescas y marinas.",
      },
      {
        name: "Kaiak Ultra",
        price: "$40.000",
        image: "/images/kaiak/kaiak-ultra.jpg",
        desc: "Fragancia fresca y sofisticada.",
      },
      {
        name: "Kaiak Urbe",
        price: "$36.000",
        image: "/images/kaiak/kaiak-urbe.jpg",
        desc: "Sándalo y ámbar.",
      },
      {
        name: "Kaiak Vital",
        price: "$48.500",
        image: "/images/kaiak/kaiak-vital.jpg",
        desc: "Algas marinas, jengibre y piper.",
      },
    ].map((product, index) => (
      <div
        key={index}
        className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500">
        <div className="h-[420px] overflow-hidden bg-[#F7F3F8]">
  <img
    src={product.image}
    alt={product.name}
    className="w-full h-full object-cover hover:scale-105 transition duration-700"
  />
</div>

<div className="p-7">
  <h3 className="text-2xl text-[#5C4B66] font-medium">
    {product.name}
  </h3>
      

          <p className="mt-3 text-2xl font-semibold text-[#D8B5E5]">
            {product.price}
          </p>

          <p className="mt-4 text-stone-500 leading-relaxed">
            {product.desc}
          </p>

          <button className="mt-6 w-full bg-[#D8B5E5] hover:bg-[#c59dd6] text-white py-4 rounded-full transition">
            Comprar
          </button>
        </div>
      </div>
    ))}
  </div>
</section>{/* HUMOR MASCULINO */}
<section id="humor" className="py-24 px-6 bg-[#F8F5F9]">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-5xl text-[#5C4B66] font-light">
        Humor Masculino
      </h2>

      <p className="mt-4 text-stone-500 text-lg">
        Fragancias Natura con personalidad, humor y actitud.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          name: "Humor A Dois",
          price: "$35.000",
          desc: "Amaderado moderado, vetivér, ámbar y pimienta negra.",
          image: "/images/humor-adois.jpg",
        },

        {
          name: "Beijo de Humor",
          price: "$35.000",
          desc: "Amaderado moderado con especias cálidas, cacao y ciruela.",
          image: "/images/humor-beijo.jpg",
        },

        {
          name: "Humor Transforma",
          price: "$32.000",
          desc: "Amaderado especiado frutal moderado.",
          image: "/images/humor-transforma.jpg",
        },

        {
          name: "Conexión de Humor",
          price: "$45.000",
          desc: "Amaderado frutal.",
          image: "/images/humor-conexion.jpg",
        },

        {
          name: "Humor Liberta",
          price: "$34.000",
          desc: "Frutal moderado con pimienta rosa, copaíba y musk.",
          image: "/images/humor-liberta.jpg",
        },

        {
          name: "Humor On Line",
          price: "$38.000",
          desc: "Cítrico especiado moderado con pomelo y pitanga preta.",
          image: "/images/humor-online.jpg",
        },

        {
          name: "Paz e Humor",
          price: "$36.000",
          desc: "Aromático herbal moderado con geranio, bergamota y lavanda.",
          image: "/images/humor-paz.jpg",
        },

        {
          name: "Química de Humor",
          price: "$45.000",
          desc: "Fragancia masculina intensa y moderna.",
          image: "/images/humor-quimica.jpg",
        },
      ].map((product, index) => (
        <div
          key={index}
          className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500"
        >
          <div className="h-[420px] overflow-hidden bg-[#F7F3F8]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>

          <div className="p-7">
            <h3 className="text-2xl text-[#5C4B66] font-medium">
              {product.name}
            </h3>

            <p className="mt-3 text-2xl font-semibold text-[#D8B5E5]">
              {product.price}
            </p>

            <p className="mt-4 text-stone-500 leading-relaxed">
              {product.desc}
            </p>

            <button className="mt-6 w-full bg-[#D8B5E5] hover:bg-[#c59dd6] text-white py-4 rounded-full transition">
              Comprar
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>{/* HOMEM */}
<section
  id="homem"
  className="py-28 px-6 bg-[#F8F5F7]"
>
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <h2 className="text-6xl font-light text-[#5C4B66]">
        Homem
      </h2>

      <p className="mt-6 text-stone-500 text-lg">
        Fragancias masculinas intensas y sofisticadas.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-10">
      {[
        {
          name: "Homem Clásico",
          price: "$45.000",
          desc: "Fragancia clásica masculina elegante.",
          image: "/images/homem/homem-clasico.jpg",
        },

        {
          name: "Homem Coragio",
          price: "$65.000",
          desc: "Amaderado intenso, copaiba, cumarú y pimienta negra.",
          image: "/images/homem/homem-coragio.jpg",
        },

        {
          name: "Homem Elo",
          price: "$52.000",
          desc: "Amaderado herbal.",
          image: "/images/homem/homem-elo.jpg",
        },

        {
          name: "Homem Essence",
          price: "$50.000",
          desc: "Amaderado intenso, cedro, patchouli y ámbar.",
          image: "/images/homem/homem-essence.jpg",
        },

        {
          name: "Homem Identidad",
          price: "$50.000",
          desc: "Amaderado frutal, frambuesa, bergamota y pimienta negra.",
          image: "/images/homem/homem-identidad.jpg",
        },

        {
          name: "Homem Neo",
          price: "$50.000",
          desc: "Amaderado intenso, cashmeran, maderas nobles y pataqueira.",
          image: "/images/homem/homem-neo.jpg",
        },

        {
          name: "Homem Nos",
          price: "$50.600",
          desc: "Amaderado ambarado.",
          image: "/images/homem/homem-nos.jpg",
        },

        {
          name: "Homem Potence",
          price: "$52.500",
          desc: "Amaderado intenso, sándalo, fava tonka y pimienta negra.",
          image: "/images/homem/homem-potence.jpg",
        },

        {
          name: "Homem Tato",
          price: "$48.000",
          desc: "Amaderado, pimienta y cumarú.",
          image: "/images/homem/homem-tato.jpg",
        },
      ].map((product, index) => (
        <div
          key={index}
          className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500"
        >
          <div className="h-[420px] overflow-hidden bg-[#F7F3F8]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>

          <div className="p-7">
            <h3 className="text-2xl text-[#5C4B66] font-medium">
              {product.name}
            </h3>

            <p className="mt-3 text-2xl font-semibold text-[#D8B5E5]">
              {product.price}
            </p>

            <p className="mt-4 text-stone-500 leading-relaxed">
              {product.desc}
            </p>

            <button className="mt-6 w-full bg-[#D8B5E5] hover:bg-[#c59dd6] text-white py-4 rounded-full transition">
              Comprar
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>{/* ESSENCIAL */}
<section id="essencial" className="py-24 px-6 bg-[#F7F3F8]">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-light text-[#5C4B66]">
        Essencial Masculinos
      </h2>

      <p className="mt-4 text-stone-500 text-lg">
        Fragancias intensas y sofisticadas Natura.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          name: "Essencial Exclusivo",
          price: "$56.000",
          desc: "Amaderado intenso, copaiba, patchouli, cardamomo",
          image: "/images/essencial/essencial-exclusivo.jpg",
        },

        {
          name: "Essencial Atrai",
          price: "$65.000",
          desc: "Amaderado especiado intenso",
          image: "/images/essencial/essencial-atrai.jpg",
        },

        {
          name: "Essencial Elixir",
          price: "$66.000",
          desc: "Amaderado intenso",
          image: "/images/essencial/essencial-elixir.jpg",
        },

        {
          name: "Essencial Oud",
          price: "$60.200",
          desc: "Amaderado intenso, oud, copaiba, cardamomo",
          image: "/images/essencial/essencial-oud.jpg",
        },

        {
          name: "Essencial Sentir",
          price: "$60.200",
          desc: "Amaderado aromático intenso",
          image: "/images/essencial/essencial-sentir.jpg",
        },

        {
          name: "Essencial Oud Repuesto",
          price: "$55.000",
          desc: "Repuesto con válvula",
          image: "/images/essencial/essencial-oud-repuesto.jpg",
        },
      ].map((product, index) => (
        <div
          key={index}
          className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500"
        >
          <div className="h-[420px] overflow-hidden bg-[#F7F3F8]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>

          <div className="p-7">
            <h3 className="text-2xl text-[#5C4B66] font-medium">
              {product.name}
            </h3>

            <p className="mt-3 text-2xl font-semibold text-[#D8B5E5]">
              {product.price}
            </p>

            <p className="mt-4 text-stone-500 leading-relaxed">
              {product.desc}
            </p>

            <button className="mt-6 w-full bg-[#D8B5E5] hover:bg-[#c59dd6] text-white py-4 rounded-full transition">
              Comprar
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>{/* BIOGRAFIA */}
<section id="biografia" className="py-24 px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-light text-[#5C4B66]">
        Biografia Masculinos
      </h2>

      <p className="mt-4 text-stone-500 text-lg">
        Fragancias masculinas elegantes y sofisticadas.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          name: "Biografia Clásico",
          price: "$45.000",
          desc: "Amaderado",
          image: "/images/biografia/biografia-clasico.jpg",
        },

        {
          name: "Biografia Inspire",
          price: "$45.000",
          desc: "Amaderado moderado, pomelo, manzana, nuez moscada",
          image: "/images/biografia/biografia-inspire.jpg",
        },
      ].map((product, index) => (
        <div
          key={index}
          className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500"
        >
          <div className="h-[420px] overflow-hidden bg-[#F7F3F8]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>

          <div className="p-7">
            <h3 className="text-2xl text-[#5C4B66] font-medium">
              {product.name}
            </h3>

            <p className="mt-3 text-2xl font-semibold text-[#D8B5E5]">
              {product.price}
            </p>

            <p className="mt-4 text-stone-500 leading-relaxed">
              {product.desc}
            </p>

            <button className="mt-6 w-full bg-[#D8B5E5] hover:bg-[#c59dd6] text-white py-4 rounded-full transition">
              Comprar
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* FOOTER */}
      <footer className="bg-[#DCCBE3] py-16 text-[#6B5D70]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div>
            <h4 className="text-3xl">lachicade.Natura</h4>

            <p className="mt-6 leading-relaxed">
              Cosmética premium inspirada en la belleza natural.
            </p>
          </div>

          <div>
            <h5 className="font-semibold mb-5">Shop</h5>

            <ul className="space-y-3">
              <li>Perfumes</li>
              <li>Skincare</li>
              <li>Cabello</li>
              <li>Gift Sets</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-5">Ayuda</h5>

            <ul className="space-y-3">
              <li>Pagos</li>
              <li>Envíos</li>
              <li>Contacto</li>
            </ul>
          </div>

          <ul className="space-y-3">
  <li>
    <a
      href="https://instagram.com/lachicade.natura"
      target="_blank"
      className="hover:underline"
    >
      Instagram
    </a>
  </li>

  <li>
    <a
      href="https://wa.me/5493489311846"
      target="_blank"
      className="hover:underline"
    >
      WhatsApp
    </a>
  </li>

  <li>
    <a
      href="https://facebook.com/nerinalacueva"
      target="_blank"
      className="hover:underline"
    >
      Facebook
    </a>
  </li>
</ul>

        </div><div className="border-t border-[#CDBDD5] mt-12 pt-8 text-center text-sm">
          © 2026 lachicade.Natura — Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}