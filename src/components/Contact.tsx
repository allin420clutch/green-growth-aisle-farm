
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-farm-cream-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-farm-green-700 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-farm-brown-600">
              Have questions about our produce or seeds? We'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-semibold text-farm-green-700 mb-6">
                  Send us a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-farm-brown-700 font-medium mb-2">
                        First Name
                      </label>
                      <Input 
                        id="firstName" 
                        placeholder="Your first name"
                        className="rounded-lg border-farm-brown-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-farm-brown-700 font-medium mb-2">
                        Last Name
                      </label>
                      <Input 
                        id="lastName" 
                        placeholder="Your last name"
                        className="rounded-lg border-farm-brown-200"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-farm-brown-700 font-medium mb-2">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="your.email@example.com"
                      className="rounded-lg border-farm-brown-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-farm-brown-700 font-medium mb-2">
                      Message
                    </label>
                    <Textarea 
                      id="message"
                      placeholder="Tell us how we can help you..."
                      rows={4}
                      className="rounded-lg border-farm-brown-200"
                    />
                  </div>
                  <Button className="w-full rounded-full bg-farm-green-600 hover:bg-farm-green-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white rounded-2xl shadow-lg">
                <CardContent className="p-8">
                  <h3 className="font-playfair text-2xl font-semibold text-farm-green-700 mb-4">
                    Visit Our Farm Stand
                  </h3>
                  <div className="space-y-3 text-farm-brown-600">
                    <p><strong>Address:</strong> 123 Farm Road, Harvest Valley, CA</p>
                    <p><strong>Phone:</strong> (555) 123-FARM</p>
                    <p><strong>Email:</strong> hello@hearthharvestco.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white rounded-2xl shadow-lg">
                <CardContent className="p-8">
                  <h3 className="font-playfair text-2xl font-semibold text-farm-green-700 mb-4">
                    Farm Stand Hours
                  </h3>
                  <div className="space-y-2 text-farm-brown-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>7:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-farm-green-600 rounded-2xl shadow-lg">
                <CardContent className="p-8 text-center">
                  <h3 className="font-playfair text-2xl font-semibold text-white mb-4">
                    Join Our Newsletter
                  </h3>
                  <p className="text-farm-green-100 mb-6">
                    Get weekly updates on fresh harvests, seasonal tips, and special offers!
                  </p>
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Enter your email"
                      className="rounded-lg bg-white border-0"
                    />
                    <Button variant="secondary" className="rounded-lg bg-white text-farm-green-600 hover:bg-farm-cream-100">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
