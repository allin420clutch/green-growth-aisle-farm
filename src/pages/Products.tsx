
import React, { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCatalog from "@/components/products/ProductCatalog";
import AuthModal from "@/components/auth/AuthModal";

const Products = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <ProductCatalog onAuthRequired={() => setShowAuthModal(true)} />
      </main>
      <Footer />
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </div>
  );
};

export default Products;
