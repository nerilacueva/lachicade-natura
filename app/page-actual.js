"use client";
import { useState } from "react";

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
  const [activeCategory, setActiveCategory] = useState("kaiak");

const [activeFemaleCategory, setActiveFemaleCategory] =
  useState("");

  const [showFemaleCategories, setShowFemaleCategories] =
    useState(false);

  return (

     <div 
     className="bg-[#FAF7FB] min-h-screen text-[#4E4351]">
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
      <a href="#subcategorias-masculinas">
        <div className="relative rounded-[35px] overflow-hidden group h-[420px]">
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
   </div>
</a>
   {/* PERFUMES FEMENINOS */}
  <a href="#subcategorias-femeninas">
  <div className="relative rounded-[35px] overflow-hidden group h-[420px] cursor-pointer">

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

  </div>
</a>

  {/* SUBCATEGORIAS FEMENINAS */}
  <section
    id="subcategorias-femeninas"
    className="py-24 px-6 bg-[#FAF7FB]"
  >
    <div className="max-w-7xl mx-auto">

      <div className="flex flex-wrap justify-center gap-5 mb-16">
        {[
          "kaiak-femeninos",
          "humor",
          "essencial",
          "ilia",
          "ekos",
          "kriska",
          "luna",
          "una",
          "aguas",
          "bodysplash",
        ].map((category) => (
          <button
            key={category}
            onClick={() => setActiveFemaleCategory(category)}
            className={`px-8 py-4 rounded-full transition text-lg capitalize ${
              activeFemaleCategory === category
                ? "bg-[#D8B5E5] text-white"
                : "bg-white text-[#5C4B66]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* TARJETAS SUPERIORES */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* KAIAK */}
        <div
  onClick={() => {
    setActiveFemaleCategory("kaiak");

    setTimeout(() => {
      document
        .getElementById("kaiak-femenino")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 100);
  }}
  className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group cursor-pointer"
>
          <img
            src="/images/categorias/kaiak-femeninos-banner.jpg"
            alt="Kaiak"
            className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-700"
          />

          <div className="p-6 text-center">
            <h3 className="text-2xl text-[#5C4B66]">
              Kaiak
            </h3>
          </div>
        </div>

        {/* HUMOR */}
        <div
          onClick={() => setActiveFemaleCategory("humor")}
          className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group cursor-pointer"
        >
          <img
            src="/images/categorias/humor-fem-banner.jpg"
            alt="Humor"
            className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-700"
          />

          <div className="p-6 text-center">
            <h3 className="text-2xl text-[#5C4B66]">
              Humor
            </h3>
          </div>
        </div>

        {/* ESSENCIAL */}
        <div
          onClick={() => setActiveFemaleCategory("essencial")}
          className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group cursor-pointer"
        >
          <img
            src="/images/categorias/essencial-fem-banner.jpg"
            alt="Essencial"
            className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-700"
          />

          <div className="p-6 text-center">
            <h3 className="text-2xl text-[#5C4B66]">
              Essencial
            </h3>
          </div>
        </div>

        {/* ILIA */}
        <div
          onClick={() => setActiveFemaleCategory("ilia")}
          className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group cursor-pointer"
        >
          <img
            src="/images/categorias/ilia-banner.jpg"
            alt="Ilia"
            className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-700"
          />

          <div className="p-6 text-center">
            <h3 className="text-2xl text-[#5C4B66]">
              Ilia
            </h3>
          </div>
        </div>

        {/* EKOS */}
        <div
          onClick={() => setActiveFemaleCategory("ekos")}
          className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group cursor-pointer"
        >
          <img
            src="/images/categorias/ekos-banner.jpg"
            alt="Ekos"
            className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-700"
          />

          <div className="p-6 text-center">
            <h3 className="text-2xl text-[#5C4B66]">
              Ekos
            </h3>
          </div>
           </div>
  
{/* UNA */}
<div
  onClick={() => setActiveFemaleCategory("una")}
  className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group cursor-pointer"
>
  <img
    src="/images/categorias/una-banner.jpg"
    alt="UNA"
    className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-700"
  />

  <div className="p-6 text-center">
    <h3 className="text-2xl text-[#5C4B66]">
      UNA
    </h3>
  </div>
</div>

{/* KRISKA */}
<div
  onClick={() => setActiveFemaleCategory("kriska")}
  className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group cursor-pointer"
>
  <img
    src="/images/categorias/kriska-banner.jpg"
    alt="Kriska"
    className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-700"
  />

  <div className="p-6 text-center">
    <h3 className="text-2xl text-[#5C4B66]">
      Kriska
    </h3>
  </div>
</div>

{/* LUNA */}
<div
  onClick={() => setActiveFemaleCategory("luna")}
  className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group cursor-pointer"
>
  <img
    src="/images/categorias/luna-banner.jpg"
    alt="Luna"
    className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-700"
  />

  <div className="p-6 text-center">
    <h3 className="text-2xl text-[#5C4B66]">
      Luna
    </h3>
  </div>
</div>

{/* AGUAS */}
<div
  onClick={() => setActiveFemaleCategory("aguas")}
  className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group cursor-pointer"
>
  <img
    src="/images/categorias/aguas-banner.jpg"
    alt="Aguas"
    className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-700"
  />

  <div className="p-6 text-center">
    <h3 className="text-2xl text-[#5C4B66]">
      Aguas
    </h3>
  </div>
</div>

{/* BODY SPLASH */}
<div
  onClick={() => setActiveFemaleCategory("bodysplash")}
  className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group cursor-pointer"
>
  <img
    src="/images/categorias/bodysplash-banner.jpg"
    alt="Body Splash"
    className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-700"
  />

  <div className="p-6 text-center">
    <h3 className="text-2xl text-[#5C4B66]">
      Body Splash
    </h3>
  </div>
</div>
</div>
      {/* CONTENIDO DINAMICO */}
{activeFemaleCategory === "kaiak-femeninos" && (
  <section className="py-24 px-6 bg-[#FAF7FB]">
    <div className="max-w-7xl mx-auto">

      <div className="text-center mb-16">
        <h2 className="text-5xl font-light text-[#5C4B66]">
          Kaiak Femeninos
        </h2>

        <p className="mt-4 text-stone-500 text-lg">
          Frescura, energía y libertad en cada fragancia Natura.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {[
          {
            name: "Kaiak Aero Femenino",
            price: "$35.000",
            desc: "Aromático floral.",
            image: "/images/kaiak-femeninos/kaiak-aero.jpg",
          },

          {
            name: "Kaiak Aventura Femenino",
            price: "$35.000",
            desc: "Floral moderado, peonía, jazmín y notas acuosas.",
            image: "/images/kaiak-femeninos/kaiak-aventura.jpg",
          },

          {
            name: "Kaiak Clásico Femenino",
            price: "$35.000",
            desc: "Cítrico floral moderado, bergamota, mandarina y jazmín.",
            image: "/images/kaiak-femeninos/kaiak-clasico.jpg",
          },

          {
            name: "Kaiak O2 Femenino",
            price: "$45.000",
            desc: "Floral cítrico.",
            image: "/images/kaiak-femeninos/kaiak-o2.jpg",
          },

          {
            name: "Kaiak Océano",
            price: "$36.500",
            desc: "Floral moderado con algas marinas y notas acuosas.",
            image: "/images/kaiak-femeninos/kaiak-oceano.jpg",
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

            <div className="p-8">

              <h3 className="text-2xl text-[#5C4B66]">
                {product.name}
              </h3>

              <p className="mt-4 text-3xl text-[#C287D6] font-light">
                {product.price}
              </p>

              <p className="mt-4 text-stone-500 leading-relaxed">
                {product.desc}
              </p>

              <button className="mt-8 w-full bg-[#D8B5E5] hover:bg-[#C287D6] text-white py-4 rounded-full transition text-lg">
                Comprar
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  </section>
)}
    {activeFemaleCategory === "humor" && (
  <section className="py-24 px-6 bg-[#FAF7FB]">
    <div className="max-w-7xl mx-auto">

      <div className="text-center mb-16">
        <h2 className="text-5xl font-light text-[#5C4B66]">
          Humor Femeninos
        </h2>

        <p className="mt-4 text-stone-500 text-lg">
          Fragancias alegres, vibrantes y llenas de personalidad.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {[
          {
            name: "Dose de Humor",
            price: "$35.000",
            desc: "Frutal.",
            image: "/images/humor-femeninos/dose-humor.jpg",
          },

          {
            name: "Beijo de Humor",
            price: "$36.000",
            desc: "Frutal moderado con ciruela, cacao y sándalo.",
            image: "/images/humor-femeninos/beijo-humor.jpg",
          },

          {
            name: "Humor da Minha Vida",
            price: "$37.000",
            desc: "Frutal floral.",
            image: "/images/humor-femeninos/minha-vida.jpg",
          },

          {
            name: "Humor Envolve",
            price: "$36.000",
            desc: "Floral aldehídico.",
            image: "/images/humor-femeninos/humor-envolve.jpg",
          },

          {
            name: "Festival de Humor",
            price: "$38.000",
            desc: "Frutal.",
            image: "/images/humor-femeninos/festival-humor.jpg",
          },

          {
            name: "Humor Galaxia",
            price: "$30.000",
            desc: "Frutal especiado con carambola, cardamomo y cedro.",
            image: "/images/humor-femeninos/humor-galaxia.jpg",
          },

          {
            name: "Meu Primeiro Humor",
            price: "$32.000",
            desc: "Frutal moderado con pera, cítricos y cassis.",
            image: "/images/humor-femeninos/meu-primeiro.jpg",
          },

          {
            name: "Humor Online",
            price: "$36.500",
            desc: "Frutal cítrico.",
            image: "/images/humor-femeninos/humor-online-fem.jpg",
          },

          {
            name: "Humor Próprio",
            price: "$32.000",
            desc: "Dulce floral con cereza, ámbar y vainilla.",
            image: "/images/humor-femeninos/humor-proprio.jpg",
          },

          {
            name: "Química de Humor",
            price: "$40.000",
            desc: "Frutal moderado con granada y piper.",
            image: "/images/humor-femeninos/quimica-humor.jpg",
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

            <div className="p-8">

              <h3 className="text-2xl text-[#5C4B66]">
                {product.name}
              </h3>

              <p className="mt-4 text-3xl text-[#C287D6] font-light">
                {product.price}
              </p>

              <p className="mt-4 text-stone-500 leading-relaxed">
                {product.desc}
              </p>

              <button className="mt-8 w-full bg-[#D8B5E5] hover:bg-[#C287D6] text-white py-4 rounded-full transition text-lg">
                Comprar
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  </section>
)}

      {activeFemaleCategory === "essencial" && (
  <section className="py-24 px-6 bg-[#FAF7FB]">
    <div className="max-w-7xl mx-auto">

      <div className="text-center mb-16">
        <h2 className="text-5xl font-light text-[#5C4B66]">
          Essencial Femeninos
        </h2>

        <p className="mt-4 text-stone-500 text-lg">
          Fragancias intensas, elegantes y sofisticadas Natura.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {[
          {
            name: "Essencial Atrai Femenino",
            price: "$65.000",
            desc: "Floral intenso. Combina rosa, chocolate y pimienta rosa.",
            image: "/images/essencial-femeninos/essencial-atrai-fem.jpg",
          },

          {
            name: "Essencial Exclusivo Femenino",
            price: "$60.000",
            desc: "Floral dulce intenso con rosa, fresia y mandarina.",
            image: "/images/essencial-femeninos/essencial-exclusivo-fem.jpg",
          },

          {
            name: "Essencial Exclusivo Floral",
            price: "$60.000",
            desc: "Floral intenso con jazmín, osmanthus y ylang-ylang.",
            image: "/images/essencial-femeninos/essencial-exclusivo-floral-fem.jpg",
          },

          {
            name: "Essencial Exclusivo Repuesto",
            price: "$50.000",
            desc: "Repuesto femenino Essencial Exclusivo.",
            image: "/images/essencial-femeninos/essencial-exclusivo-repuesto-fem.jpg",
          },

          {
            name: "Essencial Oud Femenino",
            price: "$66.000",
            desc: "Amaderado intenso con oud, copaíba y rosa.",
            image: "/images/essencial-femeninos/essencial-oud-fem.jpg",
          },

          {
            name: "Essencial Oud Pimienta",
            price: "$55.000",
            desc: "Amaderado intenso con pimienta negra y notas especiadas.",
            image: "/images/essencial-femeninos/essencial-oud-pimienta-fem.jpg",
          },

          {
            name: "Essencial Palo Santo",
            price: "$65.000",
            desc: "Amaderado intenso y sofisticado.",
            image: "/images/essencial-femeninos/essencial-palo-santo-fem.jpg",
          },

          {
            name: "Essencial Sentir",
            price: "$60.000",
            desc: "Floral frutal femenino.",
            image: "/images/essencial-femeninos/essencial-sentir-fem.jpg",
          },

          {
            name: "Repuesto Essencial Oud",
            price: "$50.000",
            desc: "Repuesto femenino Essencial Oud.",
            image: "/images/essencial-femeninos/repuesto-essencial-oud-fem.jpg",
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

            <div className="p-8">

              <h3 className="text-2xl text-[#5C4B66]">
                {product.name}
              </h3>

              <p className="mt-4 text-3xl text-[#C287D6] font-light">
                {product.price}
              </p>

              <p className="mt-4 text-stone-500 leading-relaxed">
                {product.desc}
              </p>

              <button className="mt-8 w-full bg-[#D8B5E5] hover:bg-[#C287D6] text-white py-4 rounded-full transition text-lg">
                Comprar
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  </section>
)}
      {activeFemaleCategory === "ekos" && (
  <section className="py-24 px-6 bg-[#FAF7FB]">
    <div className="max-w-7xl mx-auto">

      <div className="text-center mb-16">
        <h2 className="text-5xl font-light text-[#5C4B66]">
          Ekos Femeninos
        </h2>

        <p className="mt-4 text-stone-500 text-lg">
          Fragancias inspiradas en la biodiversidad y riqueza natural de Brasil.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {[
          {
            name: "Ekos Açaí",
            price: "$28.000",
            desc: "Frutal leve con notas de açaí.",
            image: "/images/ekos-femeninos/ekos-acai.jpg",
          },

          {
            name: "Ekos Alma",
            price: "$85.000",
            desc: "Amaderado especiado con cumarú, copaíba y priprioca.",
            image: "/images/ekos-femeninos/ekos-alma.jpg",
          },

          {
            name: "Ekos Magia da Amazonia",
            price: "$42.000",
            desc: "Amaderado moderado con copaíba, cumarú y priprioca.",
            image: "/images/ekos-femeninos/ekos-amazonia.jpg",
          },

          {
            name: "Ekos Cacau",
            price: "$28.000",
            desc: "Fragancia dulce y envolvente.",
            image: "/images/ekos-femeninos/ekos-cacau.jpg",
          },

          {
            name: "Ekos Castaña",
            price: "$30.000",
            desc: "Dulce leve con castaña, bergamota y mandarina.",
            image: "/images/ekos-femeninos/ekos-castana.jpg",
          },

          {
            name: "Ekos Encanto das Flores",
            price: "$39.000",
            desc: "Floral moderado.",
            image: "/images/ekos-femeninos/ekos-encanto-flores.jpg",
          },

          {
            name: "Ekos Rio Festa",
            price: "$41.000",
            desc: "Amaderado acuoso.",
            image: "/images/ekos-femeninos/ekos-rio-festa.jpg",
          },

          {
            name: "Ekos Maracuyá Edición Especial",
            price: "$30.000",
            desc: "Cítrico floral refrescante.",
            image: "/images/ekos-femeninos/ekos-maracuya-sueños.jpg",
          },

          {
            name: "Ekos Pitanga",
            price: "$28.000",
            desc: "Frutal leve con hojas de pitanga, mandarina y naranja.",
            image: "/images/ekos-femeninos/ekos-pitanga.jpg",
          },

          {
            name: "Ekos Pitanga Preta",
            price: "$30.000",
            desc: "Floral leve con pitanga negra y rosa.",
            image: "/images/ekos-femeninos/ekos-pitanga-preta.jpg",
          },

          {
            name: "Ekos Rio Vivo",
            price: "$40.000",
            desc: "Floral acuoso.",
            image: "/images/ekos-femeninos/ekos-rio-vivo.jpg",
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

            <div className="p-8">

              <h3 className="text-2xl text-[#5C4B66]">
                {product.name}
              </h3>

              <p className="mt-4 text-3xl text-[#C287D6] font-light">
                {product.price}
              </p>

              <p className="mt-4 text-stone-500 leading-relaxed">
                {product.desc}
              </p>

              <button className="mt-8 w-full bg-[#D8B5E5] hover:bg-[#C287D6] text-white py-4 rounded-full transition text-lg">
                Comprar
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  </section>
)}
{/* KRISKA */}
{activeFemaleCategory === "kriska" && (
  <>
    <section className="py-20 px-6 bg-[#F8F5F9]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-5xl text-[#5C4B66] font-light">
            Kriska
          </h2>

          <p className="text-[#7A6A84] mt-4 text-lg">
            Fragancias dulces, intensas y femeninas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Kriska Drama */}
          <div className="bg-white rounded-[30px] overflow-hidden shadow-md">
            <img
              src="/images/kriska/kriska-drama.jpg"
              alt="Kriska Drama"
              className="w-full h-[320px] object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl text-[#5C4B66]">
                Kriska Drama
              </h3>

              <p className="text-[#D8B5E5] text-2xl mt-3">
                $35.000
              </p>

              <p className="text-[#7A6A84] mt-4">
                Dulce intenso, nueces caramelizadas,
                vainilla y patchouli.
              </p>
            </div>
          </div>

          {/* Kriska Jeans */}
          <div className="bg-white rounded-[30px] overflow-hidden shadow-md">
            <img
              src="/images/kriska/kriska-jeans.jpg"
              alt="Kriska Jeans"
              className="w-full h-[320px] object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl text-[#5C4B66]">
                Kriska Jeans
              </h3>

              <p className="text-[#D8B5E5] text-2xl mt-3">
                $32.000
              </p>

              <p className="text-[#7A6A84] mt-4">
                Dulce.
              </p>
            </div>
          </div>

          {/* Kriska Clasico */}
          <div className="bg-white rounded-[30px] overflow-hidden shadow-md">
            <img
              src="/images/kriska/kriska-clasico.jpg"
              alt="Kriska Clasico"
              className="w-full h-[320px] object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl text-[#5C4B66]">
                Kriska Clasico
              </h3>

              <p className="text-[#D8B5E5] text-2xl mt-3">
                $35.000
              </p>

              <p className="text-[#7A6A84] mt-4">
                Dulce moderado, vainilla,
                cedro y patchouli.
              </p>
            </div>
          </div>

          {/* Kriska Romance */}
          <div className="bg-white rounded-[30px] overflow-hidden shadow-md">
            <img
              src="/images/kriska/kriska-romance.jpg"
              alt="Kriska Romance"
              className="w-full h-[320px] object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl text-[#5C4B66]">
                Kriska Romance
              </h3>

              <p className="text-[#D8B5E5] text-2xl mt-3">
                $55.000
              </p>

              <p className="text-[#7A6A84] mt-4">
                Dulce oriental moderado,
                chocolate rosa, cacao,
                vainilla y frutas rojas.
              </p>
            </div>
          </div>

          {/* Kriska Shock */}
          <div className="bg-white rounded-[30px] overflow-hidden shadow-md">
            <img
              src="/images/kriska/kriska-shock.jpg"
              alt="Kriska Shock"
              className="w-full h-[320px] object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl text-[#5C4B66]">
                Kriska Shock
              </h3>

              <p className="text-[#D8B5E5] text-2xl mt-3">
                $32.000
              </p>

              <p className="text-[#7A6A84] mt-4">
                Dulce oriental moderado,
                algodón de azúcar,
                vainilla y pimienta rosa.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  </>
)}
{/* ================= ILIA ================= */}
{activeFemaleCategory === "ilia" && (
  <>
    <section id="ilia" className="py-24 px-6 bg-[#F8F5F9]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl text-[#5C4B66] font-light">
            Ilía
          </h2>

          <p className="text-[#7A6A84] mt-4 text-lg">
            Elegí tu fragancia Ilía favorita
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ILIA CLÁSICO */}
          <div className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500">
            <div className="h-[420px] overflow-hidden bg-[#F7F3F8]">
              <img
                src="/images/ilia/ilia-clasico.jpg"
                alt="Ilia clásico"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>

            <div className="p-7">
              <h3 className="text-2xl text-[#5C4B66]">
                Ilia clásico
              </h3>

              <p className="text-3xl mt-4 text-[#D8B5E5] font-light">
                $ 50.000
              </p>

              <p className="text-[#7A6A84] mt-4 leading-relaxed">
                Floral intenso, jazmín, vainilla, pomelo
              </p>
            </div>
          </div>

          {/* ILIA PLENA */}
          <div className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500">
            <div className="h-[420px] overflow-hidden bg-[#F7F3F8]">
              <img
                src="/images/ilia/ilia-plena.jpg"
                alt="Ilia plena"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>

            <div className="p-7">
              <h3 className="text-2xl text-[#5C4B66]">
                Ilia plena
              </h3>

              <p className="text-3xl mt-4 text-[#D8B5E5] font-light">
                $ 55.000
              </p>

              <p className="text-[#7A6A84] mt-4 leading-relaxed">
                Floral intenso, rosa upcycling, pataqueira,
                bouquet floral, musk
              </p>
            </div>
          </div>

          {/* ILIA SECRETO */}
          <div className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500">
            <div className="h-[420px] overflow-hidden bg-[#F7F3F8]">
              <img
                src="/images/ilia/ilia-secreto.jpg"
                alt="Ilia secreto"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>

            <div className="p-7">
              <h3 className="text-2xl text-[#5C4B66]">
                Ilia secreto
              </h3>

              <p className="text-3xl mt-4 text-[#D8B5E5] font-light">
                $ 50.000
              </p>

              <p className="text-[#7A6A84] mt-4 leading-relaxed">
                Floral intenso, muguet, haba tonka,
                café arábigo, uva
              </p>
            </div>
          </div>

          {/* ILIA TU */}
          <div className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500">
            <div className="h-[420px] overflow-hidden bg-[#F7F3F8]">
              <img
                src="/images/ilia/ilia-tu.jpg"
                alt="Ilia tu"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>

            <div className="p-7">
              <h3 className="text-2xl text-[#5C4B66]">
                Ilia tu
              </h3>

              <p className="text-3xl mt-4 text-[#D8B5E5] font-light">
                $ 70.000
              </p>

              <p className="text-[#7A6A84] mt-4 leading-relaxed">
                Floral
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  </>
)}
{/* ================= UNA ================= */}
{activeFemaleCategory === "una" && (
  <>
    <section id="una" className="py-24 px-6 bg-[#F8F5F9]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl text-[#5C4B66] font-light">
            UNA
          </h2>

          <p className="text-[#7A6A84] mt-4 text-lg">
            Fragancias sofisticadas, intensas y femeninas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* UNA Clasico */}
          <div className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500">

            <div className="h-[420px] overflow-hidden bg-[#F7F3F8]">
              <img
                src="/images/una/una-clasico.jpg"
                alt="Una Clasico"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>

            <div className="p-7">

              <h3 className="text-2xl text-[#5C4B66]">
                Una Clásico Femenino
              </h3>

              <p className="text-3xl mt-4 text-[#D8B5E5] font-light">
                $66.000
              </p>

              <p className="text-[#7A6A84] mt-4 leading-relaxed">
                Dulce oriental intenso con praliné,
                ganache y lirio del valle.
              </p>

              <button className="mt-8 w-full bg-[#D8B5E5] hover:bg-[#C287D6] text-white py-4 rounded-full transition text-lg">
                Comprar
              </button>

            </div>
          </div>

          {/* UNA Somos */}
          <div className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500">

            <div className="h-[420px] overflow-hidden bg-[#F7F3F8]">
              <img
                src="/images/una/una-somos.jpg"
                alt="Una Somos"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>

            <div className="p-7">

              <h3 className="text-2xl text-[#5C4B66]">
                Una Somos
              </h3>

              <p className="text-3xl mt-4 text-[#D8B5E5] font-light">
                $77.500
              </p>

              <p className="text-[#7A6A84] mt-4 leading-relaxed">
                Dulce especiado intenso con maderas cálidas,
                davana, jazmín y vainilla.
              </p>

              <button className="mt-8 w-full bg-[#D8B5E5] hover:bg-[#C287D6] text-white py-4 rounded-full transition text-lg">
                Comprar
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  </>
)}
{activeFemaleCategory === "luna" && (
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

    {/* Luna Atitude */}
    <div className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500">
      <img
        src="/images/luna/luna-atitude.jpg"
        alt="Luna Atitude"
        className="w-full h-[320px] object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl text-[#5C4B66] mb-3">
          Luna Atitude
        </h3>

        <p className="text-xl text-[#D8B5E5] mb-4">
          $ 51.200
        </p>

        <p className="text-gray-600 leading-relaxed">
          Chipre con notas amaderadas de cedro y vetiver,
          cuerpo floral superfemenino con un toque de
          pimienta rosa. Fragancia sensual y elegante.
        </p>
      </div>
    </div>

    {/* Luna Coragem */}
    <div className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500">
      <img
        src="/images/luna/luna-coragem.jpg"
        alt="Luna Coragem"
        className="w-full h-[320px] object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl text-[#5C4B66] mb-3">
          Luna Coragem
        </h3>

        <p className="text-xl text-[#D8B5E5] mb-4">
          $ 41.000
        </p>

        <p className="text-gray-600 leading-relaxed">
          Chipre floral moderado con protea,
          patchouli, copaiba y pimienta rosa.
        </p>
      </div>
    </div>

    {/* Luna Legado */}
    <div className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500">
      <img
        src="/images/luna/luna-legado.jpg"
        alt="Luna Legado"
        className="w-full h-[320px] object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl text-[#5C4B66] mb-3">
          Luna Legado
        </h3>

        <p className="text-xl text-[#D8B5E5] mb-4">
          $ 42.500
        </p>

        <p className="text-gray-600 leading-relaxed">
          Chipre floral con combinación de
          magnolia y notas de frutas moradas.
        </p>
      </div>
    </div>

    {/* Luna Radiante */}
    <div className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500">
      <img
        src="/images/luna/luna-radiante.jpg"
        alt="Luna Radiante"
        className="w-full h-[320px] object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl text-[#5C4B66] mb-3">
          Luna Radiante
        </h3>

        <p className="text-xl text-[#D8B5E5] mb-4">
          $ 41.000
        </p>

        <p className="text-gray-600 leading-relaxed">
          Chipre moderado con patchouli,
          flor de paramela y naranja amarga.
        </p>
      </div>
    </div>

  </div>
)}

{activeFemaleCategory === "aguas" && (
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

    {/* Aguas Cítricos */}
    <div className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500">
      <img
        src="/images/aguas/aguas-citricos.jpg"
        alt="Aguas Cítricos"
        className="w-full h-[320px] object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl text-[#5C4B66] mb-3">
          Aguas Cítricos
        </h3>

        <p className="text-xl text-[#D8B5E5] mb-4">
          $ 24.000
        </p>

        <p className="text-gray-600 leading-relaxed">
          Fragancia cítrica fresca con limón siciliano,
          lima y notas florales suaves.
        </p>
      </div>
    </div>

    {/* Aguas Frutas Tropicales */}
    <div className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500">
      <img
        src="/images/aguas/aguas-frutas-tropicales.jpg"
        alt="Aguas Frutas Tropicales"
        className="w-full h-[320px] object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl text-[#5C4B66] mb-3">
          Aguas Frutas Tropicales
        </h3>

        <p className="text-xl text-[#D8B5E5] mb-4">
          $ 23.500
        </p>

        <p className="text-gray-600 leading-relaxed">
          Notas vibrantes de frutas tropicales,
          coco, pitanga y jazmín.
        </p>
      </div>
    </div>

    {/* Aguas Lirio */}
    <div className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500">
      <img
        src="/images/aguas/aguas-lirio.jpg"
        alt="Aguas Lirio"
        className="w-full h-[320px] object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl text-[#5C4B66] mb-3">
          Aguas Lirio
        </h3>

        <p className="text-xl text-[#D8B5E5] mb-4">
          $ 23.500
        </p>

        <p className="text-gray-600 leading-relaxed">
          Floral leve con lirio, lima y pomelo.
        </p>
      </div>
    </div>

    {/* Aguas Violeta */}
    <div className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500">
      <img
        src="/images/aguas/aguas-violeta.jpg"
        alt="Aguas Violeta"
        className="w-full h-[320px] object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl text-[#5C4B66] mb-3">
          Aguas Violeta
        </h3>

        <p className="text-xl text-[#D8B5E5] mb-4">
          $ 24.000
        </p>

        <p className="text-gray-600 leading-relaxed">
          Combinación floral con violeta,
          rosa, musk y vetiver.
        </p>
      </div>
    </div>

  </div>
)}
{activeFemaleCategory === "bodysplash" && (
  <>
    <section id="bodysplash" className="py-24 px-6 bg-[#F8F5F9]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl text-[#5C4B66] font-light">
            Body Splash
          </h2>

          <p className="text-[#7A6A84] mt-4 text-lg">
            Fragancias frescas y deliciosas para todos los días.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Cereza y Avellana */}
          <div className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500">
            <img
              src="/images/bodysplash/cereza-avellana.jpg"
              alt="Tododia Cereza y Avellana"
              className="w-full h-[320px] object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl text-[#5C4B66] mb-3">
                Tododia Cereza y Avellana
              </h3>

              <p className="text-xl text-[#D8B5E5] mb-4">
                $20.000
              </p>

              <p className="text-gray-600 leading-relaxed">
                Atractivo y llamativo con notas dulces de cereza y avellana.
              </p>
            </div>
          </div>

          {/* Ciruela y Flor de Vainilla */}
          <div className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500">
            <img
              src="/images/bodysplash/ciruela-vainilla.jpg"
              alt="Tododia Ciruela y Flor de Vainilla"
              className="w-full h-[320px] object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl text-[#5C4B66] mb-3">
                Ciruela y Flor de Vainilla
              </h3>

              <p className="text-xl text-[#D8B5E5] mb-4">
                $25.000
              </p>

              <p className="text-gray-600 leading-relaxed">
                Notas dulces florales de ciruela y vainilla.
              </p>
            </div>
          </div>

          {/* Flor de Lis */}
          <div className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500">
            <img
              src="/images/bodysplash/flor-de-lis.jpg"
              alt="Tododia Flor de Lis"
              className="w-full h-[320px] object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl text-[#5C4B66] mb-3">
                Flor de Lis
              </h3>

              <p className="text-xl text-[#D8B5E5] mb-4">
                $20.000
              </p>

              <p className="text-gray-600 leading-relaxed">
                Fragancia suave y delicada con notas florales frescas.
              </p>
            </div>
          </div>

          {/* Frambuesa y Pimienta Roja */}
          <div className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500">
            <img
              src="/images/bodysplash/frambuesa-pimienta-roja.jpg"
              alt="Tododia Frambuesa y Pimienta Roja"
              className="w-full h-[320px] object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl text-[#5C4B66] mb-3">
                Frambuesa y Pimienta Roja
              </h3>

              <p className="text-xl text-[#D8B5E5] mb-4">
                $20.000
              </p>

              <p className="text-gray-600 leading-relaxed">
                Aroma marcante y osado con notas frutales intensas.
              </p>
            </div>
          </div>
          {/* Frambuesa y Pimienta Rosa */}
<div className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500">
  <img
    src="/images/bodysplash/frambuesa-pimienta-rosa.jpg"
    alt="Tododia Frambuesa y Pimienta Rosa"
    className="w-full h-[320px] object-cover"
  />

  <div className="p-6">
    <h3 className="text-2xl text-[#5C4B66] mb-3">
      Frambuesa y Pimienta Rosa
    </h3>

    <p className="text-xl text-[#D8B5E5] mb-4">
      $20.000
    </p>

    <p className="text-gray-600 leading-relaxed">
      Fascinante y única con notas frutales suaves.
    </p>
  </div>
</div>

{/* Hojas de Limón y Guanábana */}
<div className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500">
  <img
    src="/images/bodysplash/limon-guanabana.jpg"
    alt="Tododia Hojas de Limón y Guanábana"
    className="w-full h-[320px] object-cover"
  />

  <div className="p-6">
    <h3 className="text-2xl text-[#5C4B66] mb-3">
      Hojas de Limón y Guanábana
    </h3>

    <p className="text-xl text-[#D8B5E5] mb-4">
      $16.000
    </p>

    <p className="text-gray-600 leading-relaxed">
      Fresca y revitalizante con notas aromáticas cítricas.
    </p>
  </div>
</div>

{/* Mango Rosa y Agua de Coco */}
<div className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500">
  <img
    src="/images/bodysplash/mango-agua-coco.jpg"
    alt="Tododia Mango Rosa y Agua de Coco"
    className="w-full h-[320px] object-cover"
  />

  <div className="p-6">
    <h3 className="text-2xl text-[#5C4B66] mb-3">
      Mango Rosa y Agua de Coco
    </h3>

    <p className="text-xl text-[#D8B5E5] mb-4">
      $20.000
    </p>

    <p className="text-gray-600 leading-relaxed">
      Refrescante y femenina con notas tropicales suaves.
    </p>
  </div>
</div>

{/* Manzana Caramelizada y Vainilla */}
<div className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500">
  <img
    src="/images/bodysplash/manzana-vainilla.jpg"
    alt="Tododia Manzana Caramelizada y Vainilla"
    className="w-full h-[320px] object-cover"
  />

  <div className="p-6">
    <h3 className="text-2xl text-[#5C4B66] mb-3">
      Manzana Caramelizada y Vainilla
    </h3>

    <p className="text-xl text-[#D8B5E5] mb-4">
      $20.000
    </p>

    <p className="text-gray-600 leading-relaxed">
      Dulce y envolvente con notas acarameladas.
    </p>
  </div>
</div>
      {/* Té de Manzanilla y Lavanda */}
<div className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500">
  <img
    src="/images/bodysplash/manzanilla-lavanda.jpg"
    alt="Tododia Té de Manzanilla y Lavanda"
    className="w-full h-[320px] object-cover"
  />

  <div className="p-6">
    <h3 className="text-2xl text-[#5C4B66] mb-3">
      Té de Manzanilla y Lavanda
    </h3>

    <p className="text-xl text-[#D8B5E5] mb-4">
      $20.000
    </p>

    <p className="text-gray-600 leading-relaxed">
      Aroma suave y relajante con notas florales delicadas.
    </p>
  </div>
</div>
        </div>
      </div>
    </section>
  </>
)}

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
<div
  onClick={() => setActiveCategory("kaiak")}
  className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group cursor-pointer"
>
  <img
    src="/images/categorias/kaiak-banner.jpg"
    alt="Kaiak"
    className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-700"
  />

  <div className="p-6 text-center">
    <h3 className="text-2xl text-[#5C4B66]">
      Kaiak
    </h3>
  </div>
</div>
    

    {/* HUMOR */}
<div
  onClick={() => setActiveCategory("humor")}
  className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group cursor-pointer"
>
  <img
    src="/images/categorias/humor-banner.jpg"
    alt="Humor"
    className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-700"
  />

  <div className="p-6 text-center">
    <h3 className="text-2xl text-[#5C4B66]">
      Humor
    </h3>
  </div>
</div>

    {/* HOMEM */}
<div
  onClick={() => setActiveCategory("homem")}
  className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group cursor-pointer"
>
  <img
    src="/images/categorias/homem-banner.jpg"
    alt="Homem"
    className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-700"
  />

  <div className="p-6 text-center">
    <h3 className="text-2xl text-[#5C4B66]">
      Homem
    </h3>
  </div>
</div>

    {/* ESSENCIAL */}
<div
  onClick={() => setActiveCategory("essencial")}
  className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group cursor-pointer"
>
  <img
    src="/images/categorias/essencial-banner.jpg"
    alt="Essencial"
    className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-700"
  />

  <div className="p-6 text-center">
    <h3 className="text-2xl text-[#5C4B66]">
      Essencial
    </h3>
  </div>
</div>

    {/* BIOGRAFIA */}
    <div
  onClick={() => setActiveCategory("biografia")}
  className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group cursor-pointer"
>
  <img
    src="/images/categorias/biografia-banner.jpg"
    alt="Biografia"
    className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-700"
  />

  <div className="p-6 text-center">
    <h3 className="text-2xl text-[#5C4B66]">
      Biografia
    </h3>
  </div>
</div>

  </div>
</section>
{/* SUBCATEGORIAS PERFUMES MASCULINOS */}
<section
  id="perfumes-masculinos"
  className="max-w-7xl mx-auto px-6 py-20"
>
  <div className="text-center mb-14">
    <h2 className="text-5xl font-light text-[#5C4B66]">
      Perfumes Masculinos
    </h2>

    <p className="mt-4 text-stone-500 text-lg">
      Elegí una línea Natura
    </p>
  </div>

  <div className="flex flex-wrap justify-center gap-5">
    {[
      "kaiak",
      "humor",
      "homem",
      "essencial",
      "biografia",
    ].map((category) => (
      <button
        key={category}
        onClick={() => setActiveCategory(category)}
        className={`px-8 py-4 rounded-full transition text-lg capitalize ${
          activeCategory === category
            ? "bg-[#D8B5E5] text-white"
            : "bg-white text-[#5C4B66]"
        }`}
      >
        {category}
      </button>
    ))}
  </div>
</section>
{activeCategory === "kaiak" && (
<>
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
</section>
</>
)}
{activeCategory === "humor" && (
<>
{/* HUMOR MASCULINO */}
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
  onClick={() => setActiveCategory(product.id)}
  className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 cursor-pointer"
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
</section></>
)}

{activeCategory === "homem" && (
<>

{/* HOMEM */}
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
</section>
</>
)}
{activeCategory === "essencial" && (
<>
{/* ESSENCIAL */}
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
</section>
</>
)}
{activeCategory === "biografia" && (
<>
{/* BIOGRAFIA */}
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
</>
)}
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