"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
): Promise<void> => {
  e.preventDefault();

  const formData: FormData = {
    name: (document.getElementById("name") as HTMLInputElement).value,
    email: (document.getElementById("email") as HTMLInputElement).value,
    message: (document.getElementById("message") as HTMLTextAreaElement).value,
  };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to submit contact form");
    }

    const result = await response.json();
    alert(result.message);
    (e.target as HTMLFormElement).reset();
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Failed to send message.");
  }
};

export default function Contact() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-5">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="mb-6">
                We&apos;d love to hear from you! Whether you have a question
                about our products, custom orders, or anything else, our team is
                ready to answer all your questions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="mr-3 text-gray-600" />
                  <span>info@heavenlymoonmacrame.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-3 text-gray-600" />
                  <span>+91 8967564357</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-3 text-gray-600" />
                  <span>
                    G.P Road, Mangalagiri, Guntur - 522503 (Opp.New India Hotel)
                  </span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    className="min-h-[150px]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gray-300 hover:bg-gray-400"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
