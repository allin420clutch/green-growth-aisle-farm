
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sprout, Menu, X, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import CartDrawer from "./cart/CartDrawer";
import AuthModal from "./auth/AuthModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-farm-green-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <Sprout className="h-8 w-8 text-farm-green-500" />
              <span className="font-playfair text-2xl font-bold text-farm-green-700">
                Farm Fresh
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-farm-brown-600 hover:text-farm-green-600 transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-farm-brown-600 hover:text-farm-green-600 transition-colors">
                Products
              </Link>
              <Link to="/#about" className="text-farm-brown-600 hover:text-farm-green-600 transition-colors">
                About
              </Link>
              <Link to="/#contact" className="text-farm-brown-600 hover:text-farm-green-600 transition-colors">
                Contact
              </Link>
            </nav>

            {/* Auth and Cart */}
            <div className="flex items-center space-x-4">
              <CartDrawer onAuthRequired={() => setShowAuthModal(true)} />
              
              {user ? (
                <Link to="/profile">
                  <Button variant="outline" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Button>
                </Link>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowAuthModal(true)}
                >
                  Sign In
                </Button>
              )}

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t border-farm-green-100">
              <div className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className="text-farm-brown-600 hover:text-farm-green-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className="text-farm-brown-600 hover:text-farm-green-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </Link>
                <Link
                  to="/#about"
                  className="text-farm-brown-600 hover:text-farm-green-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/#contact"
                  className="text-farm-brown-600 hover:text-farm-green-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  );
};

export default Header;
