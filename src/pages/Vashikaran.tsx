import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Target, Star, CheckCircle, Phone, MessageCircle, Brain, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Vashikaran = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-islamic-green to-islamic-light-green text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Vashikaran Specialist
          </h1>
          <p className="text-xl md:text-2xl font-inter opacity-90 max-w-3xl mx-auto mb-8">
            Attract Love, Control Minds & Influence Hearts with Ancient Islamic Vashikaran
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-islamic-gold hover:bg-yellow-600 text-islamic-green font-bold">
              <Phone className="mr-2 w-5 h-5" />
              Get Vashikaran Solution
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-islamic-green">
              <MessageCircle className="mr-2 w-5 h-5" />
              Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* What is Vashikaran */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-islamic-green mb-6">
                What is Islamic Vashikaran?
              </h2>
              <p className="text-lg font-inter text-muted-foreground mb-6">
                Vashikaran is an ancient spiritual practice that uses the power of Islamic prayers and positive energy 
                to influence and attract the desired person. It's a completely safe and ethical method when performed 
                with pure intentions and under proper guidance.
              </p>
              <p className="text-lg font-inter text-muted-foreground mb-6">
                Unlike harmful black magic, Islamic Vashikaran works with positive vibrations and divine blessings 
                to create harmony in relationships and bring people together with love and understanding.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-islamic-cream/30 rounded-lg">
                  <div className="text-2xl font-bold text-islamic-green">100%</div>
                  <div className="text-sm text-muted-foreground">Safe & Islamic</div>
                </div>
                <div className="text-center p-4 bg-islamic-cream/30 rounded-lg">
                  <div className="text-2xl font-bold text-islamic-green">25+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-islamic-green to-islamic-light-green p-8 rounded-lg text-white">
              <h3 className="text-2xl font-playfair font-bold mb-6">Vashikaran Can Help With:</h3>
              <div className="space-y-3">
                {[
                  "Attract your desired partner",
                  "Get back your lost love",
                  "Control someone's mind positively",
                  "Make someone fall in love with you",
                  "Solve marriage problems",
                  "Increase attraction in relationships",
                  "Get your ex back permanently",
                  "Make your spouse more loving"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-islamic-gold flex-shrink-0" />
                    <span className="font-inter">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Vashikaran */}
      <section className="py-16 bg-islamic-cream/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-islamic-green mb-12 text-center">
            Types of Vashikaran Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Love Vashikaran",
                description: "Make someone fall deeply in love with you using powerful Islamic mantras and prayers.",
                features: ["Instant attraction", "Deep emotional connection", "Permanent results"]
              },
              {
                icon: Target,
                title: "Photo Vashikaran", 
                description: "Control and influence someone using just their photograph with specific rituals.",
                features: ["Works from distance", "No physical contact needed", "Highly effective"]
              },
              {
                icon: Brain,
                title: "Mind Control Vashikaran",
                description: "Influence someone's thoughts and decisions to work in your favor through Islamic methods.",
                features: ["Change mindset", "Control decisions", "Peaceful influence"]
              },
              {
                icon: Sparkles,
                title: "Attraction Vashikaran",
                description: "Increase your personal magnetism and make yourself irresistibly attractive to others.",
                features: ["Enhanced personality", "Natural charm", "Universal attraction"]
              },
              {
                icon: Star,
                title: "Marriage Vashikaran",
                description: "Ensure successful marriage with your desired partner by removing all obstacles.",
                features: ["Family acceptance", "Quick marriage", "Happy relationship"]
              },
              {
                icon: CheckCircle,
                title: "Ex Back Vashikaran",
                description: "Bring back your ex-lover permanently with stronger love and commitment than before.",
                features: ["Permanent reunion", "Stronger bond", "No more breakups"]
              }
            ].map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-elegant">
                <type.icon className="w-12 h-12 text-islamic-green mb-4" />
                <h3 className="text-xl font-playfair font-bold text-islamic-green mb-4">
                  {type.title}
                </h3>
                <p className="text-muted-foreground font-inter mb-4">
                  {type.description}
                </p>
                <div className="space-y-2">
                  {type.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-islamic-green rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-islamic-green mb-12 text-center">
            My Vashikaran Process
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Consultation & Analysis",
                  description: "I analyze your situation, birth details, and the person you want to influence to determine the best approach."
                },
                {
                  step: "2",
                  title: "Customized Rituals",
                  description: "Based on your specific case, I perform Islamic Vashikaran rituals using powerful prayers and mantras."
                },
                {
                  step: "3",
                  title: "Energy Alignment",
                  description: "I align your energy with the cosmic forces to ensure maximum effectiveness of the Vashikaran process."
                },
                {
                  step: "4",
                  title: "Results & Follow-up",
                  description: "You'll start seeing results within 24-72 hours, and I provide continued support for best outcomes."
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
            <div className="bg-gradient-to-br from-islamic-green to-islamic-light-green p-8 rounded-lg text-white">
              <h3 className="text-2xl font-playfair font-bold mb-6">Vashikaran Guarantee</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-islamic-gold" />
                  <span className="font-inter">Results in 24-72 Hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-islamic-gold" />
                  <span className="font-inter">100% Safe Islamic Methods</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-islamic-gold" />
                  <span className="font-inter">No Negative Side Effects</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-islamic-gold" />
                  <span className="font-inter">Permanent & Long-lasting</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-islamic-gold" />
                  <span className="font-inter">Complete Privacy Protection</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white/10 rounded-lg">
                <p className="text-sm font-inter">
                  <strong>Success Rate:</strong> 97% of my clients achieve their desired results within the first week.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-islamic-cream/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-islamic-green mb-12 text-center">
            Vashikaran Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ankita M.",
                location: "Pune",
                story: "I wanted my colleague to notice me. After Molana ji's Love Vashikaran, he proposed to me within 3 days! We're getting married next month.",
                type: "Love Vashikaran",
                rating: 5
              },
              {
                name: "Rajesh K.",
                location: "Delhi",
                story: "My girlfriend left me for someone else. With Photo Vashikaran, she came back crying and apologizing within a week. Our love is stronger now.",
                type: "Ex Back Vashikaran",
                rating: 5
              },
              {
                name: "Sonia R.",
                location: "Mumbai",
                story: "My husband was having an affair. Mind Control Vashikaran helped me win back his love and attention. He's completely devoted to me now.",
                type: "Marriage Vashikaran",
                rating: 5
              }
            ].map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-elegant">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-islamic-gold text-islamic-gold" />
                  ))}
                </div>
                <div className="bg-islamic-green text-white text-xs px-2 py-1 rounded-full inline-block mb-3">
                  {story.type}
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

      {/* Blog Articles Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-islamic-green mb-12 text-center">
            Latest Vashikaran Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "How to Do Vashikaran at Home",
                excerpt: "Learn simple Vashikaran techniques you can perform at home with basic items and Islamic prayers.",
                readTime: "5 min read"
              },
              {
                title: "Photo Vashikaran Mantras",
                excerpt: "Powerful mantras and methods to control someone using just their photograph effectively.",
                readTime: "7 min read"
              },
              {
                title: "Signs Vashikaran is Working",
                excerpt: "How to identify if your Vashikaran is working and what changes to expect in the target person.",
                readTime: "4 min read"
              }
            ].map((article, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-elegant border border-border hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-playfair font-bold text-islamic-green mb-3">
                  {article.title}
                </h3>
                <p className="text-muted-foreground font-inter mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{article.readTime}</span>
                  <Button variant="ghost" className="text-islamic-green hover:text-islamic-light-green">
                    Read More →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-islamic-green to-islamic-light-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Ready to Attract Your Desired Person?
          </h2>
          <p className="text-xl font-inter opacity-90 mb-8 max-w-2xl mx-auto">
            Don't wait for love to find you. Take control of your destiny with powerful Islamic Vashikaran. Results guaranteed in 24-72 hours.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-islamic-gold hover:bg-yellow-600 text-islamic-green font-bold text-lg px-8">
              <Phone className="mr-2 w-6 h-6" />
              Call Now: +91-XXX-XXX-XXXX
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-islamic-green text-lg px-8">
              <MessageCircle className="mr-2 w-6 h-6" />
              WhatsApp for Vashikaran
            </Button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            ✓ Fast Results ✓ 100% Safe ✓ Confidential Service ✓ Money Back Guarantee
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vashikaran;