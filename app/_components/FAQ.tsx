"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What materials do you use for your macrame products?",
    answer:
      "We use high-quality cotton cord for most of our macrame products. For some items, we may also use jute or other natural fibers depending on the design and intended use.",
  },
  {
    question: "Do you offer custom orders?",
    answer:
      "Yes, we love creating custom pieces! Please contact us with your ideas, and we'll be happy to discuss how we can bring your vision to life.",
  },
  {
    question: "How do I care for my macrame items?",
    answer:
      "Most of our macrame items can be gently hand washed in cold water with mild soap. Lay flat to dry, and avoid direct sunlight to prevent fading. For wall hangings, a light dusting or vacuuming is usually sufficient.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 14 days of delivery for unused items in their original packaging. Custom orders are non-refundable. Please contact us for more details on our return process.",
  },
];

export default function FAQ() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className=" text-5xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Accordion
            type="single"
            collapsible
            className=" text-8xl max-w-2xl mx-auto"
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className=" text-xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className=" text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
