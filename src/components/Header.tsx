
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-farm-brown-200">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Leaf className="h-8 w-8 text-farm-green-600" />
          <span className="font-playfair text-2xl font-bold text-farm-green-700">
            The Hearth & Harvest Co.
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-farm-brown-700 hover:text-farm-green-600 transition-colors font-medium">
            Home
          </a>
          <a href="#produce" className="text-farm-brown-700 hover:text-farm-green-600 transition-colors font-medium">
            Fresh Produce
          </a>
          <a href="#seeds" className="text-farm-brown-700 hover:text-farm-green-600 transition-colors font-medium">
            Seeds
          </a>
          <a href="#about" className="text-farm-brown-700 hover:text-farm-green-600 transition-colors font-medium">
            About
          </a>
          <a href="#contact" className="text-farm-brown-700 hover:text-farm-green-600 transition-colors font-medium">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" className="rounded-full border-farm-green-600 text-farm-green-600 hover:bg-farm-green-50">
            Sign In
          </Button>
          <Button className="rounded-full bg-farm-green-600 hover:bg-farm-green-700">
            Shop Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
