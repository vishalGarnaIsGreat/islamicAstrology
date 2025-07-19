import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, AlertTriangle, Star, CheckCircle, Phone, MessageCircle, Eye, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlackMagic = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-islamic-green to-islamic-light-green text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Black Magic Removal
          </h1>
          <p className="text-xl md:text-2xl font-inter opacity-90 max-w-3xl mx-auto mb-8">
            Complete Protection from Negative Energies, Evil Eye & Dark Forces
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold">
              <Phone className="mr-2 w-5 h-5" />
              Emergency Help: Call Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-islamic-green">
              <Shield className="mr-2 w-5 h-5" />
              Get Protection Today
            </Button>
          </div>
        </div>
      </section>

      {/* Warning Signs Section */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-red-600 mb-6">
              Warning Signs of Black Magic
            </h2>
            <p className="text-xl font-inter text-muted-foreground max-w-3xl mx-auto">
              If you're experiencing these symptoms, you might be under the influence of negative energies or black magic
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Sudden health problems without medical cause",
              "Continuous bad luck and failures",
              "Sleepless nights and disturbing dreams",
              "Loss of appetite and weakness",
              "Family conflicts and relationship problems",
              "Financial losses and business failures",
              "Feeling of being watched or followed",
              "Sudden mood swings and depression",
              "Educational or career setbacks",
              "Unexplained fear and anxiety",
              "Strange sounds or movements at home",
              "Animals avoiding your presence"
            ].map((sign, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-islamic-green font-inter font-medium">{sign}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Black Magic Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-islamic-green mb-12 text-center">
            Types of Black Magic I Can Remove
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "Evil Eye (Nazar)",
                description: "Protection from jealous looks and envious intentions that cause sudden problems and bad luck.",
                symptoms: ["Sudden illness", "Business losses", "Family disputes"]
              },
              {
                icon: Zap,
                title: "Sihr (Sorcery)",
                description: "Removal of spells cast to harm your health, relationships, or success through dark rituals.",
                symptoms: ["Chronic fatigue", "Relationship problems", "Mental confusion"]
              },
              {
                icon: Shield,
                title: "Jinn Possession",
                description: "Spiritual cleansing and protection from negative jinn influence affecting behavior and health.",
                symptoms: ["Personality changes", "Speaking unknown languages", "Physical strength changes"]
              }
            ].map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-elegant border border-border">
                <type.icon className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-playfair font-bold text-islamic-green mb-4">
                  {type.title}
                </h3>
                <p className="text-muted-foreground font-inter mb-4">
                  {type.description}
                </p>
                <div>
                  <p className="font-semibold text-sm text-red-600 mb-2">Common Symptoms:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {type.symptoms.map((symptom, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                        {symptom}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-islamic-cream/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-islamic-green mb-12 text-center">
            My Black Magic Removal Process
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    title: "Spiritual Diagnosis",
                    description: "I perform detailed spiritual analysis to identify the type and source of negative energy affecting you."
                  },
                  {
                    step: "2",
                    title: "Islamic Ruqyah",
                    description: "Powerful Quranic verses and prayers are recited to break the bonds of black magic and evil influences."
                  },
                  {
                    step: "3",
                    title: "Protective Amulets",
                    description: "Special taweez and protective items are prepared according to Islamic traditions for ongoing protection."
                  },
                  {
                    step: "4",
                    title: "Follow-up Care",
                    description: "Regular monitoring and additional prayers to ensure complete removal and prevent future attacks."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
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
              <h3 className="text-2xl font-playfair font-bold mb-6">Treatment Guarantee</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-islamic-gold" />
                  <span className="font-inter">100% Islamic Methods Only</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-islamic-gold" />
                  <span className="font-inter">Results Within 3-7 Days</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-islamic-gold" />
                  <span className="font-inter">No Side Effects or Harm</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-islamic-gold" />
                  <span className="font-inter">Lifetime Protection Available</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-islamic-gold" />
                  <span className="font-inter">24/7 Emergency Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protection Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-islamic-green mb-12 text-center">
            Islamic Protection Methods
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Ayat-ul-Kursi",
                description: "Powerful Quranic verse for daily protection from all evil forces"
              },
              {
                title: "Surah Al-Falaq",
                description: "Complete protection from hidden dangers and black magic"
              },
              {
                title: "Surah An-Nas",
                description: "Shield against whispers of evil and negative influences"
              },
              {
                title: "Islamic Taweez",
                description: "Specially prepared protective amulets with Quranic verses"
              }
            ].map((method, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-elegant">
                <div className="w-16 h-16 bg-islamic-green text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-playfair font-bold text-islamic-green mb-3">
                  {method.title}
                </h3>
                <p className="text-muted-foreground font-inter text-sm">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-islamic-cream/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-islamic-green mb-12 text-center">
            Real Recovery Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah K.",
                location: "London",
                story: "I was suffering from continuous bad luck for 2 years. After Molana ji's treatment, all my problems disappeared within a week. I feel protected and peaceful now.",
                rating: 5
              },
              {
                name: "Ahmed R.",
                location: "Dubai",
                story: "My business was failing, and my family was breaking apart. Molana ji identified black magic and removed it completely. Now my life is back on track.",
                rating: 5
              },
              {
                name: "Priya S.",
                location: "Mumbai",
                story: "I was having disturbing dreams and health issues. The doctors couldn't find anything wrong. Molana ji's Islamic treatment cured me completely.",
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

      {/* Emergency Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <AlertTriangle className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Need Immediate Protection?
          </h2>
          <p className="text-xl font-inter opacity-90 mb-8 max-w-2xl mx-auto">
            Don't let negative energies destroy your life. Get immediate Islamic protection and black magic removal today.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-red-600 font-bold text-lg px-8">
              <Phone className="mr-2 w-6 h-6" />
              Emergency: +91-XXX-XXX-XXXX
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 text-lg px-8">
              <MessageCircle className="mr-2 w-6 h-6" />
              WhatsApp for Quick Help
            </Button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            ✓ Available 24/7 ✓ Immediate Response ✓ Complete Confidentiality
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlackMagic;