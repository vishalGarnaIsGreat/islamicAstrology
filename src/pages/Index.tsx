import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyConsult from "@/components/WhyConsult";
import Services from "@/components/Services";
import AllServices from "@/components/AllServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhyConsult />
      <Services />
      <AllServices />
      <WhyChooseUs />
      <Testimonials />
      <Certificates />
      <Footer />
    </div>
  );
};

export default Index;
