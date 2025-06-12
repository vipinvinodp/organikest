import Image from "next/image";

const products = {
  fruits: [
    { id: 1, name: "Mango", image: "/images/mango.jpg", price: 10 },
    { id: 2, name: "Dragon Fruit", image: "/images/dragon-fruit.jpg", price: 15 },
    { id: 3, name: "Abiu", image: "/images/abiu.jpg", price: 12 },
    { id: 4, name: "mangosteen", image: "/images/mangosteen.jpg", price: 12 },
  ],
  eggs: [
    { id: 4, name: "Farm Fresh Eggs", image: "/images/eggs.jpg", price: 12 },
  ],
  chicken: [
    { id: 5, name: "Kadaknath Chicken", image: "/images/kadaknath.jpg", price: 60 },
  ],
  fish: [
    { id: 6, name: "Farm Fresh Fish", image: "/images/fish.jpg", price: 30 },
  ],
  seedlings: [
    { id: 7, name: "Abiu Seedling", image: "/images/abiu-seedling.jpg", price: 8 },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
     <nav className="bg-white shadow-md sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
    {/* Logo + Brand */}
    <div className="flex items-center space-x-4 justify-center sm:justify-start">
      <Image src="/organic-kerala-nest-logo.png" alt="OrganiKeSt Logo" width={60} height={60} />
      <div className="text-left">
        <h1 className="text-xl font-bold text-green-700">OrganiKeSt</h1>
        <p className="text-xs text-green-600">Organic Kerala Nest</p>
      </div>
    </div>

    {/* Links */}
    <div className="mt-4 sm:mt-0 space-x-6 text-sm sm:text-base text-gray-700 text-center">
      <a href="#" className="hover:text-green-600 transition">Home</a>
      <a href="#products" className="hover:text-green-600 transition">Products</a>
      <a href="#contact" className="hover:text-green-600 transition">Contact</a>
    </div>
  </div>
</nav>

      {/* Hero */}
      <section className="bg-green-100 text-center py-10 px-4">
        Welcome to <span className="text-green-800">Organic Kerala Nest</span> 🌿
        <p className="text-lg"> Your trusted source for fruits, eggs, chicken, fish & plants.</p>
      </section>

      {/* Section Template */}
      {Object.entries(products).map(([category, items]) => (
        <section key={category} className="px-4 py-10 max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold capitalize mb-6">{category.replace("-", " ")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((product) => (
<div
  key={product.id}
  className="rounded-lg border overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300 bg-[rgba(19,31,82,0.37)]"
>
  <Image
    src={product.image}
    alt={product.name}
    width={400}
    height={300}
    className="object-cover w-full h-48"
  />
  <div className="p-4">
    <h3 className="font-semibold text-lg text-white">{product.name}</h3>
    <p className="text-green-200 font-medium mt-1">AED {product.price}</p>
  </div>
</div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
