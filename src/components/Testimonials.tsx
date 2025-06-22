
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Local Food Enthusiast",
      text: "The produce from Hearth & Harvest is absolutely incredible! You can truly taste the difference that care and quality makes. My family won't shop anywhere else.",
      rating: 5
    },
    {
      name: "David Chen",
      location: "Home Gardener",
      text: "Their heirloom seeds have transformed my garden. The germination rates are excellent and the varieties are unique. Plus, their growing tips are invaluable!",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      location: "Restaurant Owner",
      text: "As a chef, I depend on Hearth & Harvest for the freshest ingredients. Their produce elevates every dish and my customers notice the difference.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-farm-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-farm-green-700 mb-4">
            What Our Community Says
          </h2>
          <p className="text-lg text-farm-brown-600 max-w-2xl mx-auto">
            We're proud to serve families, gardeners, and food lovers throughout our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-farm-orange-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-farm-brown-600 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-farm-green-700">{testimonial.name}</div>
                  <div className="text-sm text-farm-brown-500">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
