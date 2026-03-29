
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Carrot } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import AuthModal from "@/components/auth/AuthModal";

const FeaturedProducts = () => {
  // Simulated data removed
  const featuredProduce: any[] = [];

  // Simulated data removed
  const featuredSeeds: any[] = [];

  const navigate = useNavigate();
  const { user } = useAuth();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [authOpen, setAuthOpen] = useState(false);

  const handleAddToCart = async (productName: string) => {
    if (!user) {
      setAuthOpen(true);
      return;
    }
    try {
      const { data, error } = await supabase
        .from('products')
        .select('id')
        .ilike('name', `%${productName}%`)
        .limit(1)
        .maybeSingle();

      if (error) throw error;

      if (data?.id) {
        await addToCart(Number(data.id));
        toast({ title: 'Added to cart', description: `${productName} added to your cart.` });
      } else {
        toast({ title: 'Browse catalog', description: 'Find this item in the full catalog.' });
        navigate('/products');
      }
    } catch (e: any) {
      toast({ title: 'Error', description: 'Unable to add item. Please try from the catalog.', variant: 'destructive' });
    }
  };

  return (
    <section className="py-16 bg-farm-cream-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fresh Produce Section */}
        <div id="produce" className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Carrot className="h-8 w-8 text-farm-orange-500 mr-3" />
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-farm-green-700">
                Fresh from the Farm
              </h2>
            </div>
            <p className="text-lg text-farm-brown-600 max-w-2xl mx-auto">
              Hand-picked daily and delivered at peak freshness to bring nature's bounty to your table
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredProduce.map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white rounded-2xl overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-farm-green-700 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-farm-brown-600 mb-3">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-farm-green-600">{product.price}</span>
                    <Button onClick={() => handleAddToCart(product.name)} className="rounded-full bg-farm-green-600 hover:bg-farm-green-700">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="rounded-full border-farm-green-600 text-farm-green-600 hover:bg-farm-green-50" onClick={() => navigate('/products?category=produce')}>
              View All Produce
            </Button>
          </div>
        </div>

        {/* Seeds Section */}
        <div id="seeds">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Leaf className="h-8 w-8 text-farm-green-500 mr-3" />
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-farm-green-700">
                Premium Seeds & Plants
              </h2>
            </div>
            <p className="text-lg text-farm-brown-600 max-w-2xl mx-auto">
              Carefully selected heirloom and hybrid varieties to help you grow your own garden paradise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredSeeds.map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white rounded-2xl overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-farm-green-700 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-farm-brown-600 mb-3">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-farm-green-600">{product.price}</span>
                    <Button onClick={() => handleAddToCart(product.name)} className="rounded-full bg-farm-green-600 hover:bg-farm-green-700">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="rounded-full border-farm-green-600 text-farm-green-600 hover:bg-farm-green-50" onClick={() => navigate('/products?category=seeds')}>
              Browse Seed Catalog
            </Button>
          </div>
        </div>
      </div>
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </section>
  );
};

export default FeaturedProducts;
