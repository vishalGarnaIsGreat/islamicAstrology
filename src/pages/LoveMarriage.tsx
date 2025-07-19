import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Shield, Star, CheckCircle, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const LoveMarriage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-islamic-green to-islamic-light-green text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Love Marriage Solutions
          </h1>
          <p className="text-xl md:text-2xl font-inter opacity-90 max-w-3xl mx-auto mb-8">
            Transform Family Opposition into Acceptance with Powerful Islamic Remedies
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-islamic-gold hover:bg-yellow-600 text-islamic-green font-bold">
              <Phone className="mr-2 w-5 h-5" />
              Call Now for Solution
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-islamic-green">
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-islamic-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-islamic-green mb-6">
              Are You Facing These Love Marriage Problems?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Parents not agreeing to your love marriage",
              "Family pressure to marry someone else",
              "Caste, religion, or community differences",
              "Your lover's family creating obstacles",
              "Delays and complications in marriage",
              "Lost communication with your beloved",
              "Third person interference in relationship",
              "Financial issues stopping your marriage",
              "Society pressure and social stigma"
            ].map((problem, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <p className="text-islamic-green font-inter font-medium">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-islamic-green mb-6">
              How I Help Couples Achieve Love Marriage Success
            </h2>
            <p className="text-xl font-inter text-muted-foreground max-w-3xl mx-auto">
              With 25+ years of experience, I have successfully united thousands of couples through powerful Islamic remedies and Vashikaran techniques.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-playfair font-bold text-islamic-green mb-6">
                My Proven 4-Step Process
              </h3>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Problem Analysis",
                    description: "I analyze your birth charts and identify the root cause of obstacles in your love marriage."
                  },
                  {
                    step: "2", 
                    title: "Customized Remedies",
                    description: "Based on your unique situation, I provide specific Islamic prayers, Vashikaran mantras, and remedies."
                  },
                  {
                    step: "3",
                    title: "Family Influence",
                    description: "Using positive Vashikaran techniques, I help change your family's mindset towards acceptance."
                  },
                  {
                    step: "4",
                    title: "Final Success",
                    description: "With continuous guidance and support, I ensure your love marriage happens with family blessings."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="bg-islamic-green text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-playfair font-bold text-islamic-green mb-2">{item.title}</h4>
                      <p className="text-muted-foreground font-inter">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-islamic-green to-islamic-light-green p-8 rounded-lg text-white">
              <h3 className="text-2xl font-playfair font-bold mb-6">Success Guarantee</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-islamic-gold" />
                  <span className="font-inter">98% Success Rate in Love Marriage Cases</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-islamic-gold" />
                  <span className="font-inter">Results Within 7-21 Days</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-islamic-gold" />
                  <span className="font-inter">100% Safe Islamic Methods</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-islamic-gold" />
                  <span className="font-inter">Free Follow-up for 6 Months</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-islamic-gold" />
                  <span className="font-inter">Complete Privacy & Confidentiality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-islamic-cream/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-islamic-green mb-12 text-center">
            Real Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya & Rahul",
                location: "Mumbai",
                story: "Parents were against our inter-caste marriage for 3 years. After Molana ji's remedies, both families agreed within 15 days. We are happily married now!",
                rating: 5
              },
              {
                name: "Fatima & Ahmed",
                location: "Delhi", 
                story: "My family wanted me to marry my cousin, but I loved someone else. Molana ji's Vashikaran helped change my family's mind completely.",
                rating: 5
              },
              {
                name: "Sneha & Vikram",
                location: "Bangalore",
                story: "We were facing financial issues and family pressure. Molana ji's guidance helped us overcome all obstacles and get married with everyone's blessings.",
                rating: 5
              }
            ].map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-elegant">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-islamic-gold text-islamic-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground font-inter mb-4 italic">
                  "{story.story}"
                </p>
                <div className="font-playfair font-bold text-islamic-green">
                  {story.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {story.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Techniques */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-islamic-green mb-12 text-center">
            Specialized Techniques for Love Marriage
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Mohabbat Ki Dua",
                description: "Powerful Islamic prayers to increase love and attraction between couples and soften hearts of family members."
              },
              {
                icon: Shield,
                title: "Family Vashikaran",
                description: "Gentle influence techniques to change your family's perspective and make them accept your love marriage choice."
              },
              {
                icon: Star,
                title: "Kundali Milan",
                description: "Birth chart compatibility analysis to show families the astrological harmony between the couple."
              }
            ].map((technique, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-islamic-cream/30 p-8 rounded-lg shadow-elegant text-center">
                <technique.icon className="w-16 h-16 text-islamic-green mx-auto mb-6" />
                <h3 className="text-xl font-playfair font-bold text-islamic-green mb-4">
                  {technique.title}
                </h3>
                <p className="text-muted-foreground font-inter">
                  {technique.description}
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
            Don't Let Love Remain Incomplete
          </h2>
          <p className="text-xl font-inter opacity-90 mb-8 max-w-2xl mx-auto">
            Every moment you delay is a moment of pain. Let me help you unite with your beloved with family blessings and social acceptance.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-islamic-gold hover:bg-yellow-600 text-islamic-green font-bold text-lg px-8">
              <Phone className="mr-2 w-6 h-6" />
              Call Now: +91-XXX-XXX-XXXX
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-islamic-green text-lg px-8">
              <MessageCircle className="mr-2 w-6 h-6" />
              Free WhatsApp Consultation
            </Button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            ✓ 100% Confidential ✓ Immediate Response ✓ Expert Guidance
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LoveMarriage;