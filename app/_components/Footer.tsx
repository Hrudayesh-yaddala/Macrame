import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Heavenly Moon Macrame
            </h3>
            <p className="mb-4">
              Handcrafted macrame creations for your home and lifestyle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <Facebook />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Instagram />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Twitter />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p>123 Macrame Lane</p>
            <p>Craftsville, CR 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@heavenlymoonmacrame.com</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; 2023 Heavenly Moon Macrame. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
