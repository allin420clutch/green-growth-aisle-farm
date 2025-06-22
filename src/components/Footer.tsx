
import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-farm-green-800 text-farm-green-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-farm-green-400" />
              <span className="font-playfair text-2xl font-bold text-white">
                The Hearth & Harvest Co.
              </span>
            </div>
            <p className="text-farm-green-200 mb-4 max-w-md">
              From our farm to your table and garden. Bringing you the freshest produce 
              and finest seeds with three generations of farming expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-farm-green-300 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-farm-green-300 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-farm-green-300 hover:text-white transition-colors">
                Twitter
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-farm-green-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#produce" className="text-farm-green-300 hover:text-white transition-colors">Fresh Produce</a></li>
              <li><a href="#seeds" className="text-farm-green-300 hover:text-white transition-colors">Seeds & Plants</a></li>
              <li><a href="#about" className="text-farm-green-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-farm-green-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-lg font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-2 text-farm-green-300">
              <p>123 Farm Road</p>
              <p>Harvest Valley, CA</p>
              <p>(555) 123-FARM</p>
              <p>hello@hearthharvestco.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-farm-green-700 mt-8 pt-8 text-center">
          <p className="text-farm-green-300">
            © 2024 The Hearth & Harvest Co. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
