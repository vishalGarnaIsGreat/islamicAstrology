import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Star, Check } from "lucide-react";
import { useTranslation } from 'react-i18next';
import islamicLogo from "@/assets/islamic-logo.png";
import astrologerPortrait from "@/assets/astrologer-portrait.jpg";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section 
      className="relative bg-gradient-to-br from-islamic-green to-islamic-light-green py-20 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(20, 83, 45, 0.9), rgba(34, 139, 75, 0.9)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold font-playfair leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl lg:text-2xl text-islamic-gold font-medium font-inter">
                {t('hero.subtitle')}
              </p>
              <p className="text-lg text-white/90 leading-relaxed font-inter">
                {t('hero.description')}
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {(t('hero.features', { returnObjects: true }) as string[]).map((feature: string, index: number) => (
                <div key={index} className="flex items-center gap-3 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <Check className="w-5 h-5 text-islamic-gold flex-shrink-0" />
                  <span className="text-sm font-medium font-inter">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold font-inter rounded-full shadow-lg hover:shadow-xl transition-all">
                <Phone className="w-5 h-5 mr-2" />
                {t('hero.cta')}
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold font-inter rounded-full shadow-lg hover:shadow-xl transition-all">
                <MessageCircle className="w-5 h-5 mr-2" />
                {t('hero.whatsapp')}
              </Button>
            </div>

            {/* Phone Display */}
            <div className="bg-islamic-gold/20 rounded-lg p-4 backdrop-blur-sm border border-islamic-gold/30">
              <div className="flex items-center gap-4">
                <Phone className="w-8 h-8 text-islamic-gold" />
                <div>
                  <p className="text-islamic-gold text-sm font-medium font-inter">{t('header.callChange')}</p>
                  <p className="text-2xl lg:text-3xl font-bold font-inter">{t('header.phone')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative flex justify-center">
            <div className="relative overflow-hidden rounded-2xl w-80 h-96 shadow-2xl border-4 border-islamic-gold/30 backdrop-blur-sm">
              <img 
                src={astrologerPortrait} 
                alt="Astrologer Muhammad Ali" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-islamic-green/50 to-transparent"></div>
              
              {/* Name overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <h3 className="text-2xl font-bold text-white font-playfair">{t('header.name')}</h3>
                <p className="text-islamic-gold text-sm font-medium font-inter">{t('header.title')}</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-islamic-gold rounded-full flex items-center justify-center text-islamic-green shadow-lg">
              <Star className="w-8 h-8 fill-current" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-islamic-gold rounded-full flex items-center justify-center text-islamic-green text-xl font-bold shadow-lg">
              ☪
            </div>
            
            {/* Floating stats */}
            <div className="absolute top-8 -left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <p className="text-xs font-medium text-islamic-green font-inter">Experience</p>
              <p className="text-lg font-bold text-islamic-green font-inter">25+ Years</p>
            </div>
            
            <div className="absolute bottom-8 -right-8 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <p className="text-xs font-medium text-islamic-green font-inter">Clients</p>
              <p className="text-lg font-bold text-islamic-green font-inter">1000+</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <div className="text-islamic-gold text-[200px] font-bold">☪</div>
      </div>
    </section>
  );
};

export default Hero;