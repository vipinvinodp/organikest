'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar';

const products = {
  fruits: [
    { id: 1, name: "Mango", image: "/images/mango.jpg", price: 10 },
    { id: 2, name: "Dragon Fruit", image: "/images/dragon-fruit.jpg", price: 15 },
    { id: 3, name: "Abiu", image: "/images/abiu.jpg", price: 12 },
    { id: 4, name: "Mangosteen", image: "/images/mangosteen.jpg", price: 12 },
  ],
  eggs: [
    { id: 5, name: "Farm Fresh Eggs", image: "/images/eggs.jpg", price: 12 },
  ],
  chicken: [
    { id: 6, name: "Kadaknath Chicken", image: "/images/kadaknath.jpg", price: 60 },
  ],
  fish: [
    { id: 7, name: "Farm Fresh Fish", image: "/images/fish.jpg", price: 30 },
  ],
  seedlings: [
    { id: 8, name: "Abiu Seedling", image: "/images/abiu-seedling.jpg", price: 8 },
  ],
};

export default function Home() {
type Category = keyof typeof products;
const [selectedCategory, setSelectedCategory] = useState<keyof typeof products>('fruits');
  return (
    <div className="min-h-screen bg-white text-gray-800 scroll-smooth">
      {/* Navbar */}
     <Navbar />

      {/* Hero */}
      <section className="bg-green-100 text-center py-10 px-4">
        <h2 className="text-2xl font-semibold">
          Welcome to <span className="text-green-800">Organic Kerala Nest</span> 🌿
        </h2>
        <p className="text-lg mt-2">
          Your trusted source for fruits, eggs, chicken, fish &amp; plants.
        </p>
      </section>

      {/* Product Categories */}
      <section id="products" className="px-4 py-10 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-green-800 mb-8">
          Our Product Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
 {Object.keys(products).map((category) => (
  <button
    key={category}
    onClick={() => setSelectedCategory(category as keyof typeof products)}
    className={`rounded-xl shadow-md p-6 font-semibold capitalize transition transform hover:scale-105 ${
      selectedCategory === category
        ? 'bg-green-600 text-white'
        : 'bg-green-100 hover:bg-green-200 text-green-800'
    }`}
  >
    {category.replace("-", " ")}
  </button>
))}
        </div>
      </section>

      {/* Selected Product Cards */}
      {selectedCategory && (
        <section className="px-4 pt-4 pb-12 max-w-6xl mx-auto">
          <h3 className="text-xl font-semibold mb-6 capitalize text-green-700">
            {selectedCategory.replace("-", " ")} Products
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products[selectedCategory].map((product) => (
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
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-white">{product.name}</h3>
                  <p className="text-green-200 font-medium mt-1">AED {product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      
    </div>
  );
}
