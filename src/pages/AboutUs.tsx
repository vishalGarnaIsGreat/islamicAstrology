import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Award, Users, Calendar, BookOpen, Heart } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-islamic-green to-islamic-light-green text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            About Molana Sufiyan Khan
          </h1>
          <p className="text-xl md:text-2xl font-inter opacity-90 max-w-3xl mx-auto">
            World Renowned Islamic Astrologer & Spiritual Healer with 25+ Years Experience
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="/src/assets/astrologer-portrait.jpg" 
                alt="Molana Sufiyan Khan" 
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-islamic-green mb-6">
                My Journey in Astrology
              </h2>
              <p className="text-lg font-inter text-muted-foreground mb-6">
                With over 25 years of dedicated practice in Islamic astrology and spiritual healing, 
                I have helped thousands of individuals find their path to happiness, love, and success. 
                My knowledge combines ancient Islamic traditions with modern understanding of human psychology.
              </p>
              <p className="text-lg font-inter text-muted-foreground mb-6">
                Born into a family of renowned spiritual healers, I was blessed with natural abilities 
                from a young age. I have spent decades studying under master astrologers across India, 
                learning the sacred arts of Vashikaran, love problem solutions, and spiritual guidance.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-islamic-green">25+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-islamic-green">50K+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-islamic-green">98%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-islamic-green mb-12 text-center">
              My Specialized Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Love Marriage Solutions",
                  description: "Helping couples overcome family opposition and achieve their dream of love marriage through Islamic remedies."
                },
                {
                  icon: BookOpen,
                  title: "Vashikaran Specialist",
                  description: "Expert in Vashikaran techniques to influence and attract your desired person with positive energy."
                },
                {
                  icon: Star,
                  title: "Black Magic Removal",
                  description: "Protection and removal of negative energies, black magic, and evil eye through powerful Islamic prayers."
                },
                {
                  icon: Users,
                  title: "Relationship Counseling",
                  description: "Solving husband-wife problems, family disputes, and bringing harmony in relationships."
                },
                {
                  icon: Award,
                  title: "Career & Business",
                  description: "Astrological guidance for career growth, business success, and financial prosperity."
                },
                {
                  icon: Calendar,
                  title: "Horoscope Reading",
                  description: "Detailed birth chart analysis and future predictions based on Islamic astrology principles."
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-elegant border border-border">
                  <service.icon className="w-12 h-12 text-islamic-green mb-4" />
                  <h3 className="text-xl font-playfair font-bold text-islamic-green mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-inter">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="bg-gradient-to-r from-islamic-green to-islamic-light-green text-white p-12 rounded-lg mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-center">
              My Achievements & Recognition
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <Award className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Gold Medalist</h3>
                <p className="opacity-90">In Islamic Astrology from Jamia Millia University</p>
              </div>
              <div className="text-center">
                <Star className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Featured Expert</h3>
                <p className="opacity-90">On national TV channels and radio shows</p>
              </div>
              <div className="text-center">
                <BookOpen className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Author</h3>
                <p className="opacity-90">Of 5 books on Islamic astrology and spirituality</p>
              </div>
              <div className="text-center">
                <Users className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">International Practice</h3>
                <p className="opacity-90">Clients from USA, UK, Canada, Australia</p>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-islamic-green mb-6">
              My Mission
            </h2>
            <p className="text-xl font-inter text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              My mission is to spread peace, love, and happiness through the divine power of Islamic astrology. 
              I believe every person deserves to live a life filled with joy, love, and success. Through my 
              spiritual guidance and remedies, I help people overcome their challenges and achieve their dreams 
              while staying true to Islamic principles and values.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;