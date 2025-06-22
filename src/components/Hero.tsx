
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-farm-green-900/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
          From Our Farm to Your Table & Garden
        </h1>
        
        <p className="text-xl md:text-2xl text-farm-cream-100 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Discover locally sourced fresh produce and premium quality seeds, 
          cultivated with care and delivered with love.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <Button 
            size="lg" 
            className="rounded-full bg-farm-green-600 hover:bg-farm-green-700 text-white px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Shop Fresh Produce
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="rounded-full border-2 border-white text-white hover:bg-white hover:text-farm-green-700 px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Explore Seeds
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
