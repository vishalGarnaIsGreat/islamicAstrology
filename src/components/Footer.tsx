import { Phone, MessageCircle } from "lucide-react";
import islamicLogo from "@/assets/islamic-logo.png";

const Footer = () => {
  const aboutInfo = [
    "Love Solutions",
    "Time Saver", 
    "Expert",
    "Affordable",
    "Love Marriage"
  ];

  const whyChooseUs = [
    "GF/BF Disputes",
    "Parents Approval",
    "Business Problem", 
    "Dua For Love",
    "Divorce Problems"
  ];

  return (
    <footer className="bg-islamic-green text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-2xl font-bold text-islamic-gold mb-6">About Us</h3>
            <p className="text-white mb-6 leading-relaxed">
              Astrologer Muhammad Ali Ji is famous fortune teller that is helping people by telling them actual 
              purpose of using the astrology. His interest in astrology has made her to complete his 
              education in astrology and further took parts in the astrology seminars.
            </p>
          </div>

          {/* Why Choose Us */}
          <div>
            <h3 className="text-2xl font-bold text-islamic-gold mb-6">Why Choose Us?</h3>
            <div className="space-y-2">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-islamic-gold">👆</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Services */}
          <div>
            <h3 className="text-2xl font-bold text-islamic-gold mb-6">Top Service</h3>
            <div className="space-y-2">
              {aboutInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-islamic-gold">👆</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-2xl font-bold text-islamic-gold mb-6">Get In Touch With Us</h3>
            
            <div className="bg-white p-4 rounded-lg mb-6">
              <div className="flex items-center gap-3 mb-4">
                <img src={islamicLogo} alt="Islamic Astrologer" className="w-12 h-12" />
                <div>
                  <p className="text-islamic-green font-bold">Famous Muslim Astrologer</p>
                  <h4 className="text-islamic-green font-bold text-lg">Ahmed Ali Khan</h4>
                  <p className="text-islamic-green text-sm">YOU CAN TRUST ME ONLY ONE TIME</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-islamic-gold" />
                <span className="text-xl font-bold">+91-8290657409</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-islamic-gold" />
                <span className="text-xl font-bold">+91-8290657409</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-islamic-light-green mt-12 pt-6 text-center">
          <p className="text-white">
            © All Rights Reserved - 2024-2025 Muhammad Ali Ji. 
            <span className="text-islamic-gold hover:underline cursor-pointer ml-2">Privacy Policy & Terms</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;