
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-farm-green-700 mb-6">
              Our Farm Story
            </h2>
            <p className="text-xl text-farm-brown-600 leading-relaxed">
              For three generations, our family has been dedicated to sustainable farming practices, 
              nurturing the soil and growing food with love and respect for the earth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Farm landscape"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="font-playfair text-2xl font-semibold text-farm-green-700 mb-4">
                Rooted in Tradition
              </h3>
              <p className="text-farm-brown-600 mb-4 leading-relaxed">
                What started as a small family garden has grown into a thriving operation that serves 
                our local community with the freshest produce and highest quality seeds.
              </p>
              <p className="text-farm-brown-600 leading-relaxed">
                We believe in the power of good food to bring people together, and we're committed 
                to sustainable practices that protect our land for future generations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 bg-farm-cream-50 rounded-2xl">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-farm-green-600 mb-2">100%</div>
                <div className="text-farm-brown-700 font-medium">Organic Practices</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-farm-cream-50 rounded-2xl">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-farm-green-600 mb-2">50+</div>
                <div className="text-farm-brown-700 font-medium">Crop Varieties</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-farm-cream-50 rounded-2xl">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-farm-green-600 mb-2">24hr</div>
                <div className="text-farm-brown-700 font-medium">Farm to Table</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
