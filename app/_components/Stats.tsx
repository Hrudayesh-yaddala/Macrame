"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Happy Customers", value: "1000+" },
  { label: "Handmade Items", value: "5000+" },
  { label: "Years of Experience", value: "5+" },
];

export default function Stats() {
  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-gray-800 mb-2">
                {stat.value}
              </h3>
              <p className="text-xl text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
