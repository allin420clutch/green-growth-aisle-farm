
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/hooks/useAuth";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  stock_quantity: number;
  featured: boolean;
}

interface ProductCardProps {
  product: Product;
  onAuthRequired: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAuthRequired }) => {
  const { addToCart } = useCart();
  const { user } = useAuth();

  const handleAddToCart = () => {
    if (!user) {
      onAuthRequired();
      return;
    }
    addToCart(product.id);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-lg">{product.name}</CardTitle>
          {product.featured && <Badge className="bg-farm-green-500">Featured</Badge>}
        </div>
        <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
        <Badge variant="outline" className="capitalize">{product.category}</Badge>
        <div className="mt-2">
          <span className="text-sm text-muted-foreground">Stock: {product.stock_quantity}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="flex items-center justify-between w-full">
          <span className="text-xl font-bold text-farm-green-600">${product.price}</span>
          <Button
            onClick={handleAddToCart}
            disabled={product.stock_quantity === 0}
            className="bg-farm-green-600 hover:bg-farm-green-700"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
