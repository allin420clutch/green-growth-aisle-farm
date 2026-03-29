import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DynamicProviders from "@/components/DynamicProviders";
import FeaturedProducts from "@/components/FeaturedProducts";
import PlantingExperts from "@/components/PlantingExperts";
import GrowingConditions from "@/components/GrowingConditions";
import SeedInformation from "@/components/SeedInformation";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <DynamicProviders />
      <FeaturedProducts />
      <PlantingExperts />
      <GrowingConditions />
      <SeedInformation />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
