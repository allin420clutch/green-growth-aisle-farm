
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/contact/ContactForm";
import NewsletterForm from "@/components/newsletter/NewsletterForm";

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
                <ContactForm />
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
                  <div className="flex justify-center">
                    <NewsletterForm />
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
