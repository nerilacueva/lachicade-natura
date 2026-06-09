"use client";
import { useState, useEffect } from "react";

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
const branches = {
  "Buenos Aires": [
    {
      name: "Tigre",
      address: "Av. Daniel M. Cazón 1140"
    },
    {
      name: "Vicente López",
      address: "Av. del Libertador 1202"
    },
    {
      name: "Villa Adelina",
      address: "Av. Paraná 6001"
    },
    {
      name: "Villa Ballester",
      address: "Vicente López 3044"
    }
  ],

  "CABA": [],

  "Córdoba": []
};
export default function Home() {
  const [activeCategory, setActiveCategory] = useState("kaiak");

const [activeFemaleCategory, setActiveFemaleCategory] =
  useState("");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [shippingCost, setShippingCost] = useState(0);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  useEffect(() => {

  if (deliveryMethod !== "correo") {
  setShippingCost(0);
  return;
}

if (
  selectedProvince === "Buenos Aires" ||
  selectedProvince === "CABA"
) {
    setShippingCost(4348);
  }

  else if (
    selectedProvince === "Córdoba" ||
    selectedProvince === "Santa Fe" ||
    selectedProvince === "Entre Ríos" ||
    selectedProvince === "La Pampa"
  ) {
    setShippingCost(5270);
  }

  else if (
    selectedProvince === "Mendoza" ||
    selectedProvince === "San Juan" ||
    selectedProvince === "San Luis" ||
    selectedProvince === "La Rioja" ||
    selectedProvince === "Santiago del Estero" ||
    selectedProvince === "Tucumán" ||
    selectedProvince === "Catamarca" ||
    selectedProvince === "Salta" ||
    selectedProvince === "Jujuy" ||
    selectedProvince === "Chaco" ||
    selectedProvince === "Corrientes" ||
    selectedProvince === "Misiones" ||
    selectedProvince === "Formosa"
  ) {
    setShippingCost(5270);
  }

  else if (
    selectedProvince === "Neuquén" ||
    selectedProvince === "Río Negro"
  ) {
    setShippingCost(5789);
  }

  else if (
    selectedProvince === "Chubut" ||
    selectedProvince === "Santa Cruz" ||
    selectedProvince === "Tierra del Fuego"
  ) {
    setShippingCost(5984);
  }

  else {
    setShippingCost(0);
  }

}, [selectedProvince]);
  const [nombre, setNombre] = useState("");
const [apellido, setApellido] = useState("");
const [email, setEmail] = useState("");
const [codigoArea, setCodigoArea] = useState("");
const [telefono, setTelefono] = useState("");
const [paymentMethod, setPaymentMethod] = useState("");
const [orderNumber, setOrderNumber] = useState(1000);


  const addToCart = (product) => {
  const existingProduct = cart.find(
    (item) => item.name === product.name
  );

  if (existingProduct) {

    if (
      existingProduct.quantity >= product.stock
    ) {
      alert("No hay más stock disponible");
      return;
    }

    setCart(
      cart.map((item) =>
        item.name === product.name
          ? {
              ...item,
              quantity: (item.quantity || 1) + 1,
            }
          : item
      )
    );

  } else {

    if (product.stock <= 0) {
      alert("Producto agotado");
      return;
    }

    setCart([
      ...cart,
      {
        ...product,
        quantity: 1,
      },
    ]);
  }
};
  const removeFromCart = (indexToRemove) => {
  setCart(cart.filter((_, index) => index !== indexToRemove));
};
  const total = cart.reduce((acc, item) => {
  const price = Number(
    item.price.replace(/[^0-9]/g, "")
  );

  return acc + price * item.quantity;
}, 0);

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

            <button
  onClick={() => setIsCartOpen(true)}
  className="bg-[#C9A9D6] text-white px-5 py-3 rounded-full"
>
  🛍 Carrito ({cart.reduce((acc, item) => acc + item.quantity, 0)})
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
      {/* PANEL CARRITO */}
{isCartOpen && (
  <>
    {/* Overlay oscuro */}
    <div
      onClick={() => setIsCartOpen(false)}
      className="fixed inset-0 bg-black/40 z-[60]"
    />

    {/* Panel lateral */}
    <div className="fixed top-0 right-0 h-full w-[420px] bg-white shadow-2xl z-[70] p-6 overflow-y-auto">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl text-[#5C4B66]">
          🛍 Carrito
        </h2>

        <button
          onClick={() => setIsCartOpen(false)}
          className="text-2xl text-stone-500 hover:text-black"
        >
          ✕
        </button>
      </div>

      {/* Productos */}
      <div className="space-y-6">
        {cart.length === 0 ? (
          <p className="text-stone-500">
            Tu carrito está vacío
          </p>
        ) : (
          cart.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 border-b pb-5"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-2xl"
              />

              <div className="flex-1">
                <h3 className="text-lg text-[#5C4B66]">
                  {item.name} x{item.quantity}
                </h3>

                <p className="text-[#D8B5E5] mt-2">
                  {item.price} c/u
                </p>
                 <button
    onClick={() => removeFromCart(index)}
    className="mt-2 text-red-500 text-sm"
  >
    Eliminar
  </button>
              </div>
            </div>
          ))
        )}
      </div>
      {/* TOTAL */}
<div className="mt-10 border-t pt-6">
  <div className="flex items-center justify-between text-2xl text-[#5C4B66] font-semibold">
    <span>Total</span>

    <span>
      ${total.toLocaleString("es-AR")}
    </span>
  </div>

  <button
  onClick={() => setIsCheckoutOpen(true)}
  className="mt-6 w-full bg-[#D8B5E5] hover:bg-[#C287D6] text-white py-4 rounded-full transition text-lg"
>
  Finalizar compra
</button>
</div>
    </div>
  </>
)}
{/* CHECKOUT */}
{isCheckoutOpen && (
  <div className="fixed inset-0 bg-black/50 z-[80] flex items-center justify-center p-6">
    <div className="bg-white w-full max-w-2xl rounded-[30px] p-8 max-h-[90vh] overflow-y-auto">

      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl text-[#5C4B66]">
          Finalizar compra
        </h2>

        <button
          onClick={() => setIsCheckoutOpen(false)}
          className="text-2xl"
        >
          ✕
        </button>
      </div>

      <div className="space-y-5">

  <input
  type="text"
  placeholder="Nombre"
  value={nombre}
  onChange={(e) => setNombre(e.target.value)}
  className="w-full border rounded-xl p-4"
/>

  <input
  type="text"
  placeholder="Apellido"
  value={apellido}
  onChange={(e) => setApellido(e.target.value)}
  className="w-full border rounded-xl p-4"
/>

  <input
  type="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full border rounded-xl p-4"
/>

  <div className="flex gap-3">

  <input
  type="text"
  placeholder="Cod. área"
  value={codigoArea}
  onChange={(e) => setCodigoArea(e.target.value)}
  className="w-32 border rounded-xl p-4"
/>

 <input
  type="tel"
  placeholder="Número de celular"
  value={telefono}
  onChange={(e) => setTelefono(e.target.value)}
  className="flex-1 border rounded-xl p-4"
/>

</div>
<div className="mt-8">
  <h3 className="text-xl text-[#5C4B66] mb-4">
    Método de entrega
  </h3>

  <div className="space-y-3">

    <label className="flex items-center gap-3">
      <input
        type="radio"
        name="delivery"
        value="retiro"
        onChange={(e) => setDeliveryMethod(e.target.value)}
      />
      Retiro en Campana
    </label>

    <label className="flex items-center gap-3">
      <input
        type="radio"
        name="delivery"
        value="campana"
        onChange={(e) => setDeliveryMethod(e.target.value)}
      />
      Envío en Campana
    </label>

    <label className="flex items-center gap-3">
      <input
        type="radio"
        name="delivery"
        value="correo"
        onChange={(e) => setDeliveryMethod(e.target.value)}
      />
      Correo Argentino - Retiro en sucursal
    </label>

  </div>
</div>
{deliveryMethod === "retiro" && (
  <div className="mt-6 p-4 bg-[#F8F2FA] rounded-2xl">
    <p>
      Retiro sin cargo en:
    </p>

    <p className="mt-2 font-medium">
      Iriart 323, Campana, Buenos Aires
    </p>

    <p className="mt-2 text-sm text-stone-600">
      La entrega se coordina luego de la compra.
    </p>
  </div>
)}
{deliveryMethod === "campana" && (
  <div className="mt-6 p-4 bg-[#F8F2FA] rounded-2xl">
    <p className="font-medium">
      Envíos en Campana
    </p>

    <p className="mt-2">
      Centro de Campana: sin cargo.
    </p>

    <p className="mt-2">
      Barrios de Campana: costo según motomandado.
    </p>

    <p className="mt-3 text-sm text-stone-600">
      Luego de realizar la compra nos comunicaremos para coordinar la entrega.
    </p>

    <p className="mt-2 text-sm text-stone-600">
      Los envíos fuera del centro de Campana tienen un costo adicional según la zona.
    </p>
  </div>
)}
{deliveryMethod === "correo" && (
  <div className="mt-6 p-4 bg-[#F8F2FA] rounded-2xl">

    <p className="font-medium mb-4">
      Correo Argentino - Retiro en sucursal
    </p>

    <select
  value={selectedProvince}
  onChange={(e) => setSelectedProvince(e.target.value)}
  className="w-full border rounded-xl p-4 mb-4"
>
  <option>Seleccionar provincia</option>

  <option>Buenos Aires</option>
  <option>CABA</option>
  <option>Catamarca</option>
  <option>Chaco</option>
  <option>Chubut</option>
  <option>Córdoba</option>
  <option>Corrientes</option>
  <option>Entre Ríos</option>
  <option>Formosa</option>
  <option>Jujuy</option>
  <option>La Pampa</option>
  <option>La Rioja</option>
  <option>Mendoza</option>
  <option>Misiones</option>
  <option>Neuquén</option>
  <option>Río Negro</option>
  <option>Salta</option>
  <option>San Juan</option>
  <option>San Luis</option>
  <option>Santa Cruz</option>
  <option>Santa Fe</option>
  <option>Santiago del Estero</option>
  <option>Tierra del Fuego</option>
  <option>Tucumán</option>
</select>
<p className="text-sm text-stone-500 mb-4">
  Provincia seleccionada: {selectedProvince}
</p>
<select
  value={selectedBranch}
  onChange={(e) => setSelectedBranch(e.target.value)}
  className="w-full border rounded-xl p-4"
>
   <option value="">
  Seleccionar sucursal
</option>

{branches[selectedProvince]?.map((branch) => (
  <option
    key={branch.name}
    value={branch.name}
  >
    {branch.name}
  </option>
))}
</select>

<div className="mt-4 bg-stone-50 border rounded-2xl p-4">
  <p className="text-sm text-stone-500 mb-1">
    Dirección de retiro
  </p>

  <p className="text-lg font-medium text-[#5C4B66]">
    {
      branches[selectedProvince]
        ?.find((b) => b.name === selectedBranch)
        ?.address
    }
  </p>
</div>

    <p className="mt-4 text-sm text-stone-600">
      El costo del envío será incluido en el pago final.
    </p>

  </div>
)}
<div className="mt-6">
  <p className="font-medium mb-4">
    Método de pago
  </p>

  <select
  
    value={paymentMethod}
    onChange={(e) => setPaymentMethod(e.target.value)}
    className="w-full border rounded-xl p-4"
  >
    <option value="">
      Seleccionar método de pago
    </option>

    <option value="mercadopago">
      Mercado Pago
    </option>

    <option value="transferencia">
      Transferencia Bancaria
    </option>
  </select>
  <p className="mt-2 text-red-500">
  Valor actual: {paymentMethod}
</p>

</div>
</div>
{paymentMethod === "transferencia" && (
  <div className="mt-4 bg-stone-50 border rounded-2xl p-5">
    <h4 className="font-semibold text-lg mb-3">
      Datos para transferencia
    </h4>

    <p>
      <strong>Alias:</strong> PERA.MOSCU.AMPLIO
    </p>

    <p>
      <strong>CBU:</strong> 2850940640020354703015
    </p>

    <p>
      <strong>Titular:</strong> Nerina Lacueva
    </p>

    <p className="mt-4 text-sm text-stone-500">
      Una vez realizada la transferencia, conservá el comprobante.

    </p>
    <p className="mt-2 text-sm text-stone-500">
  Tu pedido será preparado luego de verificar la acreditación del pago.
</p>
  </div>
)}
{paymentMethod === "mercadopago" && (
  <div className="mt-4 bg-stone-50 border rounded-2xl p-5">
    <h4 className="font-semibold text-lg mb-3">
      Datos para Mercado Pago
    </h4>

    <p>
      <strong>Alias:</strong> cacao.iba.aun.mp
    </p>

    <p>
      <strong>Titular:</strong> Nerina Lacueva
    </p>

    <p className="mt-3 text-sm text-stone-500">
      Realizá el pago desde Mercado Pago utilizando el alias indicado.
    </p>

    <p className="mt-2 text-sm text-stone-500">
      Conservá el comprobante.Tu pedido será preparado luego de verificar la acreditación del pago.
    </p>
    
  </div>
)}
{/* RESUMEN DEL PEDIDO */}
<div className="mt-8 border-t pt-6">
  <h3 className="text-xl text-[#5C4B66] mb-4">
    Resumen del pedido
  </h3>

  <div className="space-y-3">

    {cart.map((item, index) => (
      <div
        key={index}
        className="flex justify-between"
      >
        <span>
          {item.name} x {item.quantity || 1}
        </span>

        <span>
          $
          {(
            Number(item.price.replace(/[^0-9]/g, "")) *
            (item.quantity || 1)
          ).toLocaleString("es-AR")}
        </span>
      </div>
    ))}

  </div>

  <div className="border-t mt-6 pt-4 flex justify-between text-xl font-semibold text-[#5C4B66]">
    <span>Subtotal</span>

    <span>
      ${total.toLocaleString("es-AR")}
    </span>
  </div>
</div>
<div className="border-t mt-6 pt-4 space-y-3">

  <div className="flex justify-between">
    <span>Envío</span>

    <span>
  ${shippingCost.toLocaleString("es-AR")}
</span>
  </div>
  <div className="flex justify-between">
  <span>Método de pago</span>

  <span>
    {paymentMethod === "mercadopago"
      ? "Mercado Pago"
      : paymentMethod === "transferencia"
      ? "Transferencia"
      : "-"}
  </span>
</div>

  <div className="flex justify-between text-2xl font-bold text-[#5C4B66]">
    <span>Total final</span>

    <span>
  ${(total + shippingCost).toLocaleString("es-AR")}
</span>
  </div>

</div>
<button
  onClick={() => {
    if (!nombre) {
      alert("Por favor ingresá tu nombre");
      return;
    }

    if (!apellido) {
      alert("Por favor ingresá tu apellido");
      return;
    }

    if (!email) {
      alert("Por favor ingresá tu email");
      return;
    }

    if (!telefono) {
      alert("Por favor ingresá tu teléfono");
      return;
    }
    if (!deliveryMethod) {
  alert("Seleccioná un método de entrega");
  return;
}
if (!telefono) {
  alert("Por favor ingresá tu teléfono");
  return;
}

if (!deliveryMethod) {
  alert("Seleccioná un método de entrega");
  return;
}

if (
      deliveryMethod === "correo" &&
      !selectedProvince
    ) {
      alert("Seleccioná una provincia");
      return;
    }

    if (
      deliveryMethod === "correo" &&
      !selectedBranch
    ) {
      alert("Seleccioná una sucursal");
      return;
    }
    if (!paymentMethod) {
  alert("Seleccioná un método de pago");
  return;
}
const productosPedido = cart
  .map(
    (item) =>
      `• ${item.name} x ${item.quantity || 1}`
  )
  .join("\n");
  const pedidoActual = `PED-${orderNumber}`;
  const selectedBranchData =
  branches[selectedProvince]?.find(
    (b) => b.name === selectedBranch
  );
  
    alert(
`Pedido realizado
Pedido Nº: ${pedidoActual}
Nombre: ${nombre} ${apellido}
Email: ${email}
Teléfono: ${codigoArea} ${telefono}
Método de pago:
${
  paymentMethod === "mercadopago"
    ? "Mercado Pago"
    : "Transferencia Bancaria"
}
Entrega: ${deliveryMethod}
Provincia: ${selectedProvince || "-"}
Sucursal: ${selectedBranch || "-"}
Dirección:
${selectedBranchData?.address || "-"}
Productos:
${productosPedido}
Subtotal: $${total.toLocaleString("es-AR")}
Envío: $${shippingCost.toLocaleString("es-AR")}
Total final: $${(total + shippingCost).toLocaleString("es-AR")}
`
);
setOrderNumber(orderNumber + 1);
  }}
  className="w-full mt-6 bg-[#D8B5E5] hover:bg-[#C287D6] text-white py-4 rounded-full transition text-lg font-medium"
>
  Confirmar pedido
</button>


</div>

    </div>
  </div>
)}

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
</div>
</section>

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
    setActiveFemaleCategory("kaiak-femeninos");

    setTimeout(() => {
      document
        .getElementById("kaiak-femeninos")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  }}
          className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group cursor-pointer"
        >
          <img
            src="/images/categorias/kaiak-femeninos-banner.jpg"
            alt="Kaiak-femeninos"
            className="w-full h-[600px] object-cover group-hover:scale-105 transition duration-700"
          />

          <div className="p-6 text-center">
            <h3 className="text-2xl text-[#5C4B66]">
              Kaiak
            </h3>
          </div>
        </div>

        {/* HUMOR */}
        <div
  onClick={() => {
    setActiveFemaleCategory("humor-fem");

    setTimeout(() => {
      document
        .getElementById("humor-fem")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 100);
  }}
          className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group cursor-pointer"
        >
          <img
            src="/images/categorias/humor-fem-banner.jpg"
            alt="Humor"
            className="w-full h-[600px] object-cover group-hover:scale-105 transition duration-700"
          /> 

          <div className="p-6 text-center">
            <h3 className="text-2xl text-[#5C4B66]">
              Humor
            </h3>
          </div>
        </div>

        {/* ESSENCIAL */}
        <div
  onClick={() => {
    setActiveFemaleCategory("essencial");

    setTimeout(() => {
      document
        .getElementById("essencial")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 100);
  }}
          className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group cursor-pointer"
        >
          <img
            src="/images/categorias/essencial-fem-banner.jpg"
            alt="Essencial"
            className="w-full h-[600px] object-cover group-hover:scale-105 transition duration-700"
          />

          <div className="p-6 text-center">
            <h3 className="text-2xl text-[#5C4B66]">
              Essencial
            </h3>
          </div>
        </div>

        {/* ILIA */}
        <div
  onClick={() => {
    setActiveFemaleCategory("ilia");

    setTimeout(() => {
      document
        .getElementById("ilia")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  }}

  className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group cursor-pointer"
  >
          <img
            src="/images/categorias/ilia-banner.jpg"
            alt="Ilia"
            className="w-full h-[600px] object-cover group-hover:scale-105 transition duration-700"
          />

          <div className="p-6 text-center">
            <h3 className="text-2xl text-[#5C4B66]">
              Ilia
            </h3>
          </div>
        </div>

        {/* EKOS */}
        <div
  onClick={() => {
    setActiveFemaleCategory("ekos");

    setTimeout(() => {
      document
        .getElementById("ekos-section")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  }}
  className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group cursor-pointer"
>
          <img
            src="/images/categorias/ekos-banner.jpg"
            alt="Ekos femeninos"
            className="w-full h-[600px] object-cover group-hover:scale-105 transition duration-700"
          />

          <div className="p-6 text-center">
            <h3 className="text-2xl text-[#5C4B66]">
              Ekos
            </h3>
          </div>
           </div>
  
{/* UNA */}
<div
  onClick={() => {
    setActiveFemaleCategory("una");

    setTimeout(() => {
      document
        .getElementById("una")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  }}
  className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group cursor-pointer"
>
  <img
    src="/images/categorias/una-banner.jpg"
    alt="UNA"
    className="w-full h-[600px] object-cover group-hover:scale-105 transition duration-700"
  />

  <div className="p-6 text-center">
    <h3 className="text-2xl text-[#5C4B66]">
      UNA
    </h3>
  </div>
</div>

{/* KRISKA */}
<div
  onClick={() => {
    setActiveFemaleCategory("kriska");

    setTimeout(() => {
      document
        .getElementById("kriska")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 100);
  }}
  className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group cursor-pointer"
>
  <img
    src="/images/categorias/kriska-banner.jpg"
    alt="Kriska"
    className="w-full h-[600px] object-cover group-hover:scale-105 transition duration-700"
  />

  <div className="p-6 text-center">
    <h3 className="text-2xl text-[#5C4B66]">
      Kriska
    </h3>
  </div>
</div>

{/* LUNA */}
<div
  onClick={() => {
    setActiveFemaleCategory("luna");

    setTimeout(() => {
      document
        .getElementById("luna")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  }}

  className="
    bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group cursor-pointer
  "
>
  <img
    src="/images/categorias/luna-banner.jpg"
    alt="Luna"
    className="w-full h-[600px] object-cover group-hover:scale-105 transition duration-700"
  />

  <div className="p-6 text-center">
    <h3 className="text-2xl text-[#5C4B66]">
      Luna
    </h3>
  </div>
</div>

{/* AGUAS */}
<div
  onClick={() => {
    setActiveFemaleCategory("aguas");

    setTimeout(() => {
      document
        .getElementById("aguas")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  }}
  className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group cursor-pointer"
>
  <img
    src="/images/categorias/aguas-banner.jpg"
    alt="Aguas"
    className="w-full h-[600px] object-cover group-hover:scale-105 transition duration-700"
  />

  <div className="p-6 text-center">
    <h3 className="text-2xl text-[#5C4B66]">
      Aguas
    </h3>
  </div>
</div>

{/* BODY SPLASH */}
<div
  onClick={() => {
    setActiveFemaleCategory("bodysplash");

    setTimeout(() => {
      document
        .getElementById("bodysplash")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  }}
  className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group cursor-pointer"
>
  <img
    src="/images/categorias/bodysplash-banner.jpg"
    alt="Body Splash"
    className="w-full h-[600px] object-cover group-hover:scale-105 transition duration-700"
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
  <section id="kaiak-femeninos" className="py-24 px-6 bg-[#FAF7FB]">
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
            image: "/images/kaiak-femeninos/kaiak-aero-fem.jpg",
            stock: 1,
          },

          {
            name: "Kaiak Aventura Femenino",
            price: "$35.000",
            desc: "Floral moderado, peonía, jazmín y notas acuosas.",
            image: "/images/kaiak-femeninos/kaiak-aventura-fem.jpg",
            stock: 2,
          },

          {
            name: "Kaiak Clásico Femenino",
            price: "$35.000",
            desc: "Cítrico floral moderado, bergamota, mandarina y jazmín.",
            image: "/images/kaiak-femeninos/kaiak-clasico-fem.jpg",
            stock: 2,
          },

          {
            name: "Kaiak O2 Femenino",
            price: "$45.000",
            desc: "Floral cítrico.",
            image: "/images/kaiak-femeninos/kaiak-o2-fem.jpg",
            stock: 1,
          },

          {
            name: "Kaiak Océano",
            price: "$36.500",
            desc: "Floral moderado con algas marinas y notas acuosas.",
            image: "/images/kaiak-femeninos/kaiak-oceano-fem.jpg",
            stock: 3,
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

              <button
  onClick={() => addToCart(product)}
  className="mt-8 w-full bg-[#D8B5E5] hover:bg-[#C287D6] text-white py-4 rounded-full transition text-lg"
>
  Comprar
</button>

            </div>

          </div>
        ))}

      </div>
    </div>
  </section>
)}
    {activeFemaleCategory === "humor-fem" && (
  <section 
   id="humor-fem"
  className="py-24 px-6 bg-[#FAF7FB]">
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
            image: "/images/humor-fem/dose-humor.jpg",
            stock: 1,
          },

          {
            name: "Beijo de Humor",
            price: "$36.000",
            desc: "Frutal moderado con ciruela, cacao y sándalo.",
            image: "/images/humor-fem/beijo-humor.jpg",
            stock: 2,
          },

          {
            name: "Humor da Minha Vida",
            price: "$37.000",
            desc: "Frutal floral.",
            image: "/images/humor-fem/minha-vida.jpg",
            stock: 1,
          },

          {
            name: "Humor Envolve",
            price: "$36.000",
            desc: "Floral aldehídico.",
            image: "/images/humor-fem/humor-envolve.jpg",
            stock: 2,
          },

          {
            name: "Festival de Humor",
            price: "$38.000",
            desc: "Frutal.",
            image: "/images/humor-fem/festival-humor.jpg",
            stock: 1,
          },

          {
            name: "Humor Galaxia",
            price: "$30.000",
            desc: "Frutal especiado con carambola, cardamomo y cedro.",
            image: "/images/humor-fem/humor-galaxia.jpg",
            stock: 3,
          },

          {
            name: "Meu Primeiro Humor",
            price: "$32.000",
            desc: "Frutal moderado con pera, cítricos y cassis.",
            image: "/images/humor-fem/meu-primeiro.jpg",
            stock: 2,
          },

          {
            name: "Humor Online",
            price: "$36.500",
            desc: "Frutal cítrico.",
            image: "/images/humor-fem/humor-online-fem.jpg",
            stock: 2,
          },

          {
            name: "Humor Próprio",
            price: "$32.000",
            desc: "Dulce floral con cereza, ámbar y vainilla.",
            image: "/images/humor-fem/humor-proprio.jpg",
            stock: 2,
          },

          {
            name: "Química de Humor",
            price: "$40.000",
            desc: "Frutal moderado con granada y piper.",
            image: "/images/humor-fem/quimica-humor.jpg",
            stock: 2,
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

              <button
  onClick={() => addToCart(product)}
  className="mt-8 w-full bg-[#D8B5E5] hover:bg-[#C287D6] text-white py-4 rounded-full transition text-lg"
>
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
  <section 
  id="essencial"
  className="py-24 px-6 bg-[#FAF7FB]">
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
            stock: 1,
          },

          {
            name: "Essencial Exclusivo Femenino",
            price: "$60.000",
            desc: "Floral dulce intenso con rosa, fresia y mandarina.",
            image: "/images/essencial-femeninos/essencial-exclusivo-fem.jpg",
            stock: 1,
          },

          {
            name: "Essencial Exclusivo Floral",
            price: "$60.000",
            desc: "Floral intenso con jazmín, osmanthus y ylang-ylang.",
            image: "/images/essencial-femeninos/essencial-exclusivo-floral-fem.jpg",
            stock: 1,
          },

          {
            name: "Essencial Exclusivo Repuesto",
            price: "$50.000",
            desc: "Repuesto femenino Essencial Exclusivo.",
            image: "/images/essencial-femeninos/essencial-exclusivo-repuesto-fem.jpg",
            stock: 1,
          },

          {
            name: "Essencial Oud Femenino",
            price: "$66.000",
            desc: "Amaderado intenso con oud, copaíba y rosa.",
            image: "/images/essencial-femeninos/essencial-oud-fem.jpg",
            stock: 1,
          },

          {
            name: "Essencial Oud Pimienta",
            price: "$55.000",
            desc: "Amaderado intenso con pimienta negra y notas especiadas.",
            image: "/images/essencial-femeninos/essencial-oud-pimienta-fem.jpg",
            stock: 1,
          },

          {
            name: "Essencial Palo Santo",
            price: "$65.000",
            desc: "Amaderado intenso y sofisticado.",
            image: "/images/essencial-femeninos/essencial-palo-santo-fem.jpg",
            stock: 1,
          },

          {
            name: "Essencial Sentir",
            price: "$60.000",
            desc: "Floral frutal femenino.",
            image: "/images/essencial-femeninos/essencial-sentir-fem.jpg",
            stock: 1,
          },

          {
            name: "Repuesto Essencial Oud",
            price: "$50.000",
            desc: "Repuesto femenino Essencial Oud.",
            image: "/images/essencial-femeninos/repuesto-essencial-oud-fem.jpg",
            stock: 1,
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

              <button
  onClick={() => addToCart(product)}
  className="mt-8 w-full bg-[#D8B5E5] hover:bg-[#C287D6] text-white py-4 rounded-full transition text-lg"
>
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
  <section  id="ekos-section"
   className="py-24 px-6 bg-[#FAF7FB]">
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
            stock: 4,
          },

          {
            name: "Ekos Alma",
            price: "$85.000",
            desc: "Amaderado especiado con cumarú, copaíba y priprioca.",
            image: "/images/ekos-femeninos/ekos-alma.jpg",
            stock: 1,
          },

          {
            name: "Ekos Magia da Amazonia",
            price: "$42.000",
            desc: "Amaderado moderado con copaíba, cumarú y priprioca.",
            image: "/images/ekos-femeninos/ekos-amazonia.jpg",
            stock: 1,
          },

          {
            name: "Ekos Cacau",
            price: "$28.000",
            desc: "Fragancia dulce y envolvente.",
            image: "/images/ekos-femeninos/ekos-cacau.jpg",
            stock: 1,
          },

          {
            name: "Ekos Castaña",
            price: "$30.000",
            desc: "Dulce leve con castaña, bergamota y mandarina.",
            image: "/images/ekos-femeninos/ekos-castana.jpg",
            stock: 1,
          },

          {
            name: "Ekos Encanto das Flores",
            price: "$39.000",
            desc: "Floral moderado.",
            image: "/images/ekos-femeninos/ekos-encanto-flores.jpg",
            stock: 1,
          },

          {
            name: "Ekos Rio Festa",
            price: "$41.000",
            desc: "Amaderado acuoso.",
            image: "/images/ekos-femeninos/ekos-rio-festa.jpg",
            stock: 1,
          },

          {
            name: "Ekos Maracuyá Edición Especial",
            price: "$30.000",
            desc: "Cítrico floral refrescante.",
            image: "/images/ekos-femeninos/ekos-maracuya-sueños.jpg",
            stock: 1,
          },

          {
            name: "Ekos Pitanga",
            price: "$28.000",
            desc: "Frutal leve con hojas de pitanga, mandarina y naranja.",
            image: "/images/ekos-femeninos/ekos-pitanga.jpg",
            stock: 3,
          },

          {
            name: "Ekos Pitanga Preta",
            price: "$30.000",
            desc: "Floral leve con pitanga negra y rosa.",
            image: "/images/ekos-femeninos/ekos-pitanga-preta.jpg",
            stock: 2,
          },

          {
            name: "Ekos Rio Vivo",
            price: "$40.000",
            desc: "Floral acuoso.",
            image: "/images/ekos-femeninos/ekos-rio-vivo.jpg",
            stock: 1,
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

             <button
  onClick={() => addToCart(product)}
  className="mt-8 w-full bg-[#D8B5E5] hover:bg-[#C287D6] text-white py-4 rounded-full transition text-lg"
>
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
    <section 
    id="kriska"
    className="py-20 px-6 bg-[#F8F5F9]">
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
              <button
    onClick={() =>
      addToCart({
        name: "kriska drama",
        price: "$35.000",
        image: "/images/kriska/kriska-drama.jpg",
        stock: 1,
      })
    }
    className="mt-6 w-full bg-[#D8B5E5] hover:bg-[#c59dd6] text-white py-4 rounded-full transition"
  >
    Comprar
  </button>
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
              <button
    onClick={() =>
      addToCart({
        name: "kriska jeans",
        price: "$32.000",
        image: "/images/kriska/kriska-jeans.jpg",
        stock: 1,
      })
    }
    className="mt-6 w-full bg-[#D8B5E5] hover:bg-[#c59dd6] text-white py-4 rounded-full transition"
  >
    Comprar
  </button>
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
              <button
    onClick={() =>
      addToCart({
        name: "kriska clasico",
        price: "$35.000",
        image: "/images/kriska/kriska-clasico.jpg",
        stock: 1,
      })
    }
    className="mt-6 w-full bg-[#D8B5E5] hover:bg-[#c59dd6] text-white py-4 rounded-full transition"
  >
    Comprar
  </button>
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
              <button
    onClick={() =>
      addToCart({
        name: "kriska romance",
        price: "$55.000",
        image: "/images/kriska/kriska-romance.jpg",
        stock: 1,
      })
    }
    className="mt-6 w-full bg-[#D8B5E5] hover:bg-[#c59dd6] text-white py-4 rounded-full transition"
  >
    Comprar
  </button>
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
              <button
    onClick={() =>
      addToCart({
        name: "kriska shock",
        price: "$32.000",
        image: "/images/kriska/kriska-shock.jpg",
        stock: 2,
      })
    }
    className="mt-6 w-full bg-[#D8B5E5] hover:bg-[#c59dd6] text-white py-4 rounded-full transition"
  >
    Comprar
  </button>
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
              <button
    onClick={() =>
      addToCart({
        name: "Ilía clasico",
        price: "$50.000",
        image: "/images/ilia/ilia-clasico.jpg",
        stock: 2,
      })
    }
    className="mt-6 w-full bg-[#D8B5E5] hover:bg-[#c59dd6] text-white py-4 rounded-full transition"
  >
    Comprar
  </button>
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
              <button
    onClick={() =>
      addToCart({
        name: "Ilía plena",
        price: "$55.000",
        image: "/images/ilia/ilia-plena.jpg",
        stock: 2,
      })
    }
    className="mt-6 w-full bg-[#D8B5E5] hover:bg-[#c59dd6] text-white py-4 rounded-full transition"
  >
    Comprar
  </button>
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
              <button
    onClick={() =>
      addToCart({
        name: "Ilía secreto",
        price: "$50.000",
        image: "/images/ilia/ilia-secreto.jpg",
        stock: 2,
      })
    }
    className="mt-6 w-full bg-[#D8B5E5] hover:bg-[#c59dd6] text-white py-4 rounded-full transition"
  >
    Comprar
  </button>
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
               <button
    onClick={() =>
      addToCart({
        name: "Ilía tu",
        price: "$70.000",
        image: "/images/ilia/ilia-tu.jpg",
        stock: 1,
      })
    }
    className="mt-6 w-full bg-[#D8B5E5] hover:bg-[#c59dd6] text-white py-4 rounded-full transition"
  >
    Comprar
  </button>
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

             <button
  onClick={() =>
    addToCart({
      name: "Una Clásico Femenino",
      price: "$66.000",
      image: "/images/una/una-clasico.jpg",
      stock: 1,
    })
  }
  className="mt-8 w-full bg-[#D8B5E5] hover:bg-[#C287D6] text-white py-4 rounded-full transition text-lg"
>
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

              <button
  onClick={() =>
    addToCart({
      name: "Una Somos",
      price: "$77.500",
      image: "/images/una/una-somos.jpg",
      stock: 1,
    })
  }
  className="mt-8 w-full bg-[#D8B5E5] hover:bg-[#C287D6] text-white py-4 rounded-full transition text-lg"
>
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
  <section
    id="luna"
    className="py-24 px-6 bg-[#F8F5F9]"
  >
    <div className="max-w-7xl mx-auto">

      <div className="text-center mb-16">
        <h2 className="text-5xl text-[#5C4B66] font-light">
          Luna
        </h2>

        <p className="text-[#7A6A84] mt-4 text-lg">
          Elegí tu fragancia Luna favorita
        </p>
      </div>
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
        <button
    onClick={() =>
      addToCart({
        name: "luna atitude",
        price: "$51.200",
        image: "/images/luna/luna-atitude.jpg",
        stock: 2,
      })
    }
    className="mt-6 w-full bg-[#D8B5E5] hover:bg-[#c59dd6] text-white py-4 rounded-full transition"
  >
    Comprar
  </button>
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
        <button
    onClick={() =>
      addToCart({
        name: "luna coragem",
        price: "$41.000",
        image: "/images/luna/luna-coragem.jpg",
        stock: 2,
      })
    }
    className="mt-6 w-full bg-[#D8B5E5] hover:bg-[#c59dd6] text-white py-4 rounded-full transition"
  >
    Comprar
  </button>
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
        <button
    onClick={() =>
      addToCart({
        name: "luna legado",
        price: "$42.500",
        image: "/images/luna/luna-legado.jpg",
        stock: 1,
      })
    }
    className="mt-6 w-full bg-[#D8B5E5] hover:bg-[#c59dd6] text-white py-4 rounded-full transition"
  >
    Comprar
  </button>
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
             <button
    onClick={() =>
      addToCart({
        name: "luna radiante",
        price: "$41.000",
        image: "/images/luna/luna-radiante.jpg",
        stock: 3,
      })
    }
    className="mt-6 w-full bg-[#D8B5E5] hover:bg-[#c59dd6] text-white py-4 rounded-full transition"
  >
    Comprar
  </button>
      </div>
    </div>

  </div>
    </div>
  </section>
)}
{activeFemaleCategory === "aguas" && (
  <section id="aguas" className="py-24 px-6 bg-[#F8F5F9]"
  >
    <div className="max-w-7xl mx-auto">

      <div className="text-center mb-16">
        <h2 className="text-5xl text-[#5C4B66] font-light">
          Aguas
        </h2>

        <p className="text-[#7A6A84] mt-4 text-lg">
          Fragancias frescas y livianas Natura
        </p>
      </div>
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
        <button
    onClick={() =>
      addToCart({
        name: "aguas citricos",
        price: "$24.000",
        image: "/images/aguas/aguas-citricos.jpg",
        stock: 1,
      })
    }
    className="mt-6 w-full bg-[#D8B5E5] hover:bg-[#c59dd6] text-white py-4 rounded-full transition"
  >
    Comprar
  </button>
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
        <button
    onClick={() =>
      addToCart({
        name: "aguas frutas tropicales",
        price: "$23.500",
        image: "/images/aguas/aguas-frutas-tropicales.jpg",
        stock: 1,
      })
    }
    className="mt-6 w-full bg-[#D8B5E5] hover:bg-[#c59dd6] text-white py-4 rounded-full transition"
  >
    Comprar
  </button>
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
        <button
    onClick={() =>
      addToCart({
        name: "aguas lirio",
        price: "$23.500",
        image: "/images/aguas/aguas-lirio.jpg",
        stock: 1,
      })
    }
    className="mt-6 w-full bg-[#D8B5E5] hover:bg-[#c59dd6] text-white py-4 rounded-full transition"
  >
    Comprar
  </button>
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
        <button
    onClick={() =>
      addToCart({
        name: "aguas violeta",
        price: "$24.000",
        image: "/images/aguas/aguas-violeta.jpg",
        stock: 1,
      })
    }
    className="mt-6 w-full bg-[#D8B5E5] hover:bg-[#c59dd6] text-white py-4 rounded-full transition"
  >
    Comprar
  </button>
      </div>
    </div>

  </div>
  </div>
  </section>
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
              <button
    onClick={() =>
      addToCart({
        name: "body cereza y avellana",
        price: "$20.000",
        image: "/images/bodysplash/cereza-avellana.jpg",
        stock: 1,
      })
    }
    className="mt-6 w-full bg-[#D8B5E5] hover:bg-[#c59dd6] text-white py-4 rounded-full transition"
  >
    Comprar
  </button>
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
              <button
    onClick={() =>
      addToCart({
        name: "body ciruela y vainilla",
        price: "$25.000",
        image: "/images/bodysplash/ciruela-vainilla.jpg",
        stock: 2,
      })
    }
    className="mt-6 w-full bg-[#D8B5E5] hover:bg-[#c59dd6] text-white py-4 rounded-full transition"
  >
    Comprar
  </button>
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
              <button
    onClick={() =>
      addToCart({
        name: "body flor de lis",
        price: "$20.000",
        image: "/images/bodysplash/flor-de-lis.jpg",
        stock: 1,
      })
    }
    className="mt-6 w-full bg-[#D8B5E5] hover:bg-[#c59dd6] text-white py-4 rounded-full transition"
  >
    Comprar
  </button>
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
              <button
    onClick={() =>
      addToCart({
        name: "body frambuesa y pimienta roja",
        price: "$20.000",
        image: "/images/bodysplash/frambuesa-pimienta-roja.jpg",
        stock: 2,
      })
    }
    className="mt-6 w-full bg-[#D8B5E5] hover:bg-[#c59dd6] text-white py-4 rounded-full transition"
  >
    Comprar
  </button>
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
    <button
    onClick={() =>
      addToCart({
        name: "body frambuesa y pimienta rosa",
        price: "$20.000",
        image: "/images/bodysplash/frambuesa-pimienta-rosa.jpg",
        stock: 1,
      })
    }
    className="mt-6 w-full bg-[#D8B5E5] hover:bg-[#c59dd6] text-white py-4 rounded-full transition"
  >
    Comprar
  </button>
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
    <button
    onClick={() =>
      addToCart({
        name: "body limon y guanabana",
        price: "$16.000",
        image: "/images/bodysplash/limon-guanabana.jpg",
        stock: 1,
      })
    }
    className="mt-6 w-full bg-[#D8B5E5] hover:bg-[#c59dd6] text-white py-4 rounded-full transition"
  >
    Comprar
  </button>
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
    <button
    onClick={() =>
      addToCart({
        name: "body mango y agua de coco",
        price: "$20.000",
        image: "/images/bodysplash/mango-agua-coco.jpg",
        stock: 2,
      })
    }
    className="mt-6 w-full bg-[#D8B5E5] hover:bg-[#c59dd6] text-white py-4 rounded-full transition"
  >
    Comprar
  </button>
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
    <button
    onClick={() =>
      addToCart({
        name: "body manzana y vainilla",
        price: "$20.000",
        image: "/images/bodysplash/manzana-vainilla.jpg",
        stock: 1,
      })
    }
    className="mt-6 w-full bg-[#D8B5E5] hover:bg-[#c59dd6] text-white py-4 rounded-full transition"
  >
    Comprar
  </button>
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
    <button
    onClick={() =>
      addToCart({
        name: "body manzanilla y lavanda",
        price: "$20.000",
        image: "/images/bodysplash/manzanilla-lavanda.jpg",
        stock: 1,
      })
    }
    className="mt-6 w-full bg-[#D8B5E5] hover:bg-[#c59dd6] text-white py-4 rounded-full transition"
  >
    Comprar
  </button>
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
      </section>
      {/* SUBCATEGORIAS PERFUMES MASCULINOS */}
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
        stock: 3,
      },
      {
        name: "Kaiak Aventura",
        price: "$35.000",
        image: "/images/kaiak/kaiak-aventura.jpg",
        desc: "Herbal leve con notas acuosas, mandarina y musk.",
        stock: 1,

      },
      {
        name: "Kaiak Clásico",
        price: "$35.000",
        image: "/images/kaiak/kaiak-clasico.jpg",
        desc: "Notas acuosas, albahaca y bergamota.",
        stock: 2,
      },
      {
        name: "Kaiak Noite",
        price: "$57.000",
        image: "/images/kaiak/kaiak-noite.jpg",
        desc: "Herbal intenso con pimienta negra y olíbano.",
        stock: 1,
      },
      {
        name: "Kaiak Océano",
        price: "$36.500",
        image: "/images/kaiak/kaiak-oceano.jpg",
        desc: "Algas marinas y complejo acuoso.",
        stock: 1,
      },
      {
        name: "Kaiak Eau de Parfum",
        price: "$60.000",
        image: "/images/kaiak/kaiak-parfum.jpg",
        desc: "Enebro, ámbar y cedro.",
        stock: 2,
      },
      {
        name: "Kaiak Pulso",
        price: "$39.000",
        image: "/images/kaiak/kaiak-pulso.jpg",
        desc: "Fragancia intensa y moderna.",
        stock: 2,
      },
      {
        name: "Kaiak Sonar",
        price: "$42.000",
        image: "/images/kaiak/kaiak-sonar.jpg",
        desc: "Notas frescas y marinas.",
        stock: 2,
      },
      {
        name: "Kaiak Ultra",
        price: "$40.000",
        image: "/images/kaiak/kaiak-ultra.jpg",
        desc: "Fragancia fresca y sofisticada.",
        stock: 1,
      },
      {
        name: "Kaiak Urbe",
        price: "$36.000",
        image: "/images/kaiak/kaiak-urbe.jpg",
        desc: "Sándalo y ámbar.",
        stock: 3,
      },
      {
        name: "Kaiak Vital",
        price: "$48.500",
        image: "/images/kaiak/kaiak-vital.jpg",
        desc: "Algas marinas, jengibre y piper.",
        stock: 1,
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

          <button
  onClick={() => addToCart(product)}
  className="mt-8 w-full bg-[#D8B5E5] hover:bg-[#C287D6] text-white py-4 rounded-full transition text-lg"
>
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
          stock: 1,
        },

        {
          name: "Beijo de Humor",
          price: "$35.000",
          desc: "Amaderado moderado con especias cálidas, cacao y ciruela.",
          image: "/images/humor-beijo.jpg",
          stock: 1,
        },

        {
          name: "Humor Transforma",
          price: "$32.000",
          desc: "Amaderado especiado frutal moderado.",
          image: "/images/humor-transforma.jpg",
          stock: 2,
        },

        {
          name: "Conexión de Humor",
          price: "$45.000",
          desc: "Amaderado frutal.",
          image: "/images/humor-conexion.jpg",
          stock: 1,
        },

        {
          name: "Humor Liberta",
          price: "$34.000",
          desc: "Frutal moderado con pimienta rosa, copaíba y musk.",
          image: "/images/humor-liberta.jpg",
          stock: 2,
        },

        {
          name: "Humor On Line",
          price: "$38.000",
          desc: "Cítrico especiado moderado con pomelo y pitanga preta.",
          image: "/images/humor-online.jpg",
          stock: 1,
        },

        {
          name: "Paz e Humor",
          price: "$36.000",
          desc: "Aromático herbal moderado con geranio, bergamota y lavanda.",
          image: "/images/humor-paz.jpg",
          stock: 2,
        },

        {
          name: "Química de Humor",
          price: "$45.000",
          desc: "Fragancia masculina intensa y moderna.",
          image: "/images/humor-quimica.jpg",
          stock: 2,
        },
      ].map((product, index) => (
        <div
  key={index}
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

            <button
  onClick={() => addToCart(product)}
  className="mt-8 w-full bg-[#D8B5E5] hover:bg-[#C287D6] text-white py-4 rounded-full transition text-lg"
>
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
          stock: 0,
        },

        {
          name: "Homem Coragio",
          price: "$65.000",
          desc: "Amaderado intenso, copaiba, cumarú y pimienta negra.",
          image: "/images/homem/homem-coragio.jpg",
          stock: 1,
        },

        {
          name: "Homem Elo",
          price: "$52.000",
          desc: "Amaderado herbal.",
          image: "/images/homem/homem-elo.jpg",
          stock: 3,
        },

        {
          name: "Homem Essence",
          price: "$50.000",
          desc: "Amaderado intenso, cedro, patchouli y ámbar.",
          image: "/images/homem/homem-essence.jpg",
          stock: 3,
        },

        {
          name: "Homem Identidad",
          price: "$50.000",
          desc: "Amaderado frutal, frambuesa, bergamota y pimienta negra.",
          image: "/images/homem/homem-identidad.jpg",
          stock: 2,
        },

        {
          name: "Homem Neo",
          price: "$50.000",
          desc: "Amaderado intenso, cashmeran, maderas nobles y pataqueira.",
          image: "/images/homem/homem-neo.jpg",
          stock: 1,
        },

        {
          name: "Homem Nos",
          price: "$50.600",
          desc: "Amaderado ambarado.",
          image: "/images/homem/homem-nos.jpg",
          stock: 2,
        },

        {
          name: "Homem Potence",
          price: "$52.500",
          desc: "Amaderado intenso, sándalo, fava tonka y pimienta negra.",
          image: "/images/homem/homem-potence.jpg",
          stock: 1,
        },

        {
          name: "Homem Tato",
          price: "$48.000",
          desc: "Amaderado, pimienta y cumarú.",
          image: "/images/homem/homem-tato.jpg",
          stock: 1,
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

            <button
  onClick={() => addToCart(product)}
  className="mt-8 w-full bg-[#D8B5E5] hover:bg-[#C287D6] text-white py-4 rounded-full transition text-lg"
>
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
          stock: 1,
        },

        {
          name: "Essencial Atrai",
          price: "$65.000",
          desc: "Amaderado especiado intenso",
          image: "/images/essencial/essencial-atrai.jpg",
          stock: 2,
        },

        {
          name: "Essencial Elixir",
          price: "$66.000",
          desc: "Amaderado intenso",
          image: "/images/essencial/essencial-elixir.jpg",
          stock: 1,
        },

        {
          name: "Essencial Oud",
          price: "$60.200",
          desc: "Amaderado intenso, oud, copaiba, cardamomo",
          image: "/images/essencial/essencial-oud.jpg",
          stock: 2,
        },

        {
          name: "Essencial Sentir",
          price: "$60.200",
          desc: "Amaderado aromático intenso",
          image: "/images/essencial/essencial-sentir.jpg",
          stock: 2,
        },

        {
          name: "Essencial Oud Repuesto",
          price: "$55.000",
          desc: "Repuesto con válvula",
          image: "/images/essencial/essencial-oud-repuesto.jpg",
          stock: 1,
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

            <button
  onClick={() => addToCart(product)}
  className="mt-8 w-full bg-[#D8B5E5] hover:bg-[#C287D6] text-white py-4 rounded-full transition text-lg"
>
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
          stock: 1,
        },

        {
          name: "Biografia Inspire",
          price: "$45.000",
          desc: "Amaderado moderado, pomelo, manzana, nuez moscada",
          image: "/images/biografia/biografia-inspire.jpg",
          stock: 1,
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

            <button
  onClick={() => addToCart(product)}
  className="mt-8 w-full bg-[#D8B5E5] hover:bg-[#C287D6] text-white py-4 rounded-full transition text-lg"
>
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

        </div>
        <div className="border-t border-[#CDBDD5] mt-12 pt-8 text-center text-sm">
          © 2026 lachicade.Natura — Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}