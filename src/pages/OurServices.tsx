import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Shield, Star, Brain, Users, Calendar, Phone, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const OurServices = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-islamic-green to-islamic-light-green text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl font-inter opacity-90 max-w-3xl mx-auto mb-8">
            Complete Islamic Astrology Solutions for All Your Life Problems
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-islamic-gold hover:bg-yellow-600 text-islamic-green font-bold"
              onClick={() => window.location.href = 'tel:+917340479570'}
            >
              <Phone className="mr-2 w-5 h-5" />
              Get Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-islamic-green hover:bg-white hover:text-islamic-green"
              onClick={() => window.open(`https://wa.me/917340479570?text=${encodeURIComponent('Hello, I need help with my problem')}`, '_blank')}
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Free Analysis
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-islamic-green mb-12 text-center">
            Our Specialized Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Love Marriage Solutions",
                description: "Get your love marriage accepted by family through powerful Islamic remedies and Vashikaran techniques.",
                features: ["Family acceptance", "Remove obstacles", "Quick results", "98% success rate"]
              },
              {
                icon: Shield,
                title: "Black Magic Removal",
                description: "Complete protection and removal from negative energies, evil eye, and black magic effects.",
                features: ["Spiritual diagnosis", "Islamic treatment", "Protective amulets", "Lifetime protection"]
              },
              {
                icon: Brain,
                title: "Vashikaran Specialist",
                description: "Attract and influence your desired person through safe and effective Islamic Vashikaran methods.",
                features: ["Love attraction", "Mind control", "Photo vashikaran", "Results in 24-72 hours"]
              },
              {
                icon: Users,
                title: "Husband Wife Problem",
                description: "Solve marital disputes, restore love, and bring harmony in your married life through spiritual guidance.",
                features: ["Relationship healing", "Love restoration", "Communication improvement", "Family harmony"]
              },
              {
                icon: Star,
                title: "Horoscope Reading",
                description: "Detailed birth chart analysis and future predictions based on Islamic astrology principles.",
                features: ["Birth chart analysis", "Future predictions", "Remedial measures", "Gemstone consultation"]
              },
              {
                icon: Calendar,
                title: "Career & Business",
                description: "Astrological guidance for career growth, business success, and financial prosperity.",
                features: ["Career guidance", "Business solutions", "Financial planning", "Success mantras"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-elegant border border-border hover:shadow-xl transition-shadow">
                <service.icon className="w-12 h-12 text-islamic-green mb-4" />
                <h3 className="text-xl font-playfair font-bold text-islamic-green mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-inter mb-4">
                  {service.description}
                </p>
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-islamic-green" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <Button className="w-full bg-islamic-green hover:bg-islamic-light-green">
                    Book Consultation
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-islamic-cream/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-islamic-green mb-12 text-center">
            Additional Specialized Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Get Ex Love Back",
                description: "Bring back your lost love permanently with 100% guarantee",
                duration: "3-7 days"
              },
              {
                title: "Divorce Problem Solution",
                description: "Save your marriage from divorce and restore family happiness",
                duration: "7-15 days"
              },
              {
                title: "Child Birth Problems",
                description: "Islamic remedies for delayed pregnancy and child-related issues",
                duration: "1-3 months"
              },
              {
                title: "Job & Promotion",
                description: "Get desired job or promotion through astrological remedies",
                duration: "15-30 days"
              },
              {
                title: "Health Problems",
                description: "Spiritual healing for chronic health issues and diseases",
                duration: "1-2 months"
              },
              {
                title: "Property Disputes",
                description: "Resolve property and legal matters through spiritual guidance",
                duration: "1-3 months"
              },
              {
                title: "Lottery & Gambling",
                description: "Increase luck and fortune in games and lottery",
                duration: "Immediate"
              },
              {
                title: "Enemy Problems",
                description: "Protection from enemies and winning over opponents",
                duration: "7-21 days"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-playfair font-bold text-islamic-green mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-inter text-sm mb-3">
                  {service.description}
                </p>
                <div className="text-sm">
                  <span className="font-semibold text-islamic-green">Duration: </span>
                  <span className="text-muted-foreground">{service.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-islamic-green mb-12 text-center">
            How Our Services Work
          </h2>
          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "Share your problem details through call, WhatsApp, or in-person meeting",
                icon: Phone
              },
              {
                step: "2",
                title: "Analysis",
                description: "We analyze your birth chart, situation, and identify the root cause of problems",
                icon: Star
              },
              {
                step: "3",
                title: "Solution",
                description: "Customized Islamic remedies, prayers, and spiritual techniques are provided",
                icon: Shield
              },
              {
                step: "4",
                title: "Results",
                description: "Follow the guidance and see positive changes in your life within specified time",
                icon: CheckCircle
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-islamic-green text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <div className="bg-islamic-green text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-playfair font-bold text-islamic-green mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-inter">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-islamic-green to-islamic-light-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl font-inter opacity-90 mb-8 max-w-2xl mx-auto">
            Don't let problems control your happiness. Get expert Islamic astrology solutions today and see positive changes in your life.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-islamic-gold hover:bg-yellow-600 text-islamic-green font-bold text-lg px-8"
              onClick={() => window.location.href = 'tel:+917340479570'}
            >
              <Phone className="mr-2 w-6 h-6" />
              Call Now: +91-7340479570
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-islamic-green hover:bg-white hover:text-islamic-green text-lg px-8"
              onClick={() => window.open(`https://wa.me/917340479570?text=${encodeURIComponent('Hello, I need help with my problem')}`, '_blank')}
            >
              <MessageCircle className="mr-2 w-6 h-6" />
              Get Free Consultation
            </Button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            ✓ Available 24/7 ✓ 100% Confidential ✓ Guaranteed Results ✓ Expert Guidance
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurServices;