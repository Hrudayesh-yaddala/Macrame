"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  { name: "Wall Decor", image: "/images/wallhang.jpg", price: "Rs. 549" },
  { name: "Macrame Bag", image: "/images/handbag1.jpg", price: "Rs. 699" },
  { name: "Wall Decor", image: "/images/wallhang2.jpg", price: "Rs. 849" },
  {
    name: "Macrame Jewelry",
    image: "/images/wallhang4.jpg",
    price: "Rs. 999 ",
  },
  { name: "Custom Keychain", image: "/images/keychain.jpg", price: "Rs. 449" },
  { name: "Macrame Bag", image: "/images/handbag3.webp", price: "Rs. 349" },
  { name: "Wall Decor", image: "/images/wallhang3.jpg", price: "Rs. 549" },
  { name: "Macrame Jewelry", image: "/images/band.jpg", price: "Rs. 999" },
  { name: "Wall Decor", image: "/images/wallhang5.jpg", price: "Rs. 749" },
  { name: "Wall Decor", image: "/images/wallhang.jpg", price: "Rs. 549" },
  { name: "Wall Decor", image: "/images/wallhang2.jpg", price: "Rs. 849" },
  { name: "Macrame Jewelry", image: "/images/band.jpg", price: "Rs. 999" },
  {
    name: "Macrame Jewelry",
    image: "/images/wallhang4.jpg",
    price: "Rs. 999 ",
  },
];

export default function Products() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
