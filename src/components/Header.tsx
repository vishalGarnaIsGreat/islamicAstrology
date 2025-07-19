import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import { useLocation, Link } from "react-router-dom";
import islamicLogo from "@/assets/islamic-logo.png";
import LanguageToggle from "./LanguageToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      setIsScrollingUp(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    { label: t('header.menu.home'), path: '/' },
    { label: t('header.menu.about'), path: '/about' },
    { label: t('header.menu.services'), path: '/services' },
    { label: t('header.menu.blog'), path: '/blog' },
    { label: t('header.menu.contact'), path: '/contact' }
  ];

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/917340479570?text=${encodeURIComponent('Hello, I need help with my problem')}`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+917340479570';
  };

  return (
    <>
      {/* Top banner */}
      <div className="bg-gradient-to-r from-islamic-gold to-yellow-500 text-islamic-green py-3 px-4 text-center text-sm font-medium">
        <div className="flex items-center justify-center gap-4">
          <span className="font-inter">{t('header.banner')}</span>
          <LanguageToggle />
        </div>
      </div>

      {/* Main header */}
      <header className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? (isScrollingUp ? 'py-1' : 'py-0.5') : 'py-0'
      }`}>
        <div className="container mx-auto px-4">
          {/* Top section with logo and contact */}
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? (isScrollingUp ? 'py-2' : 'py-1') : 'py-4'
          }`}>
            {/* Logo section */}
            <div className="flex items-center gap-4">
              <img 
                src={islamicLogo} 
                alt="Islamic Astrologer" 
                className={`transition-all duration-300 ${
                  isScrolled ? (isScrollingUp ? 'w-10 h-10' : 'w-8 h-8') : 'w-16 h-16'
                }`} 
              />
              <div>
                <h1 className={`font-inter font-bold text-islamic-green transition-all duration-300 ${
                  isScrolled ? (isScrollingUp ? 'text-base' : 'text-sm') : 'text-xl'
                }`}>
                  {t('header.title')}
                </h1>
                <h2 className={`font-playfair font-bold text-islamic-green transition-all duration-300 ${
                  isScrolled ? (isScrollingUp ? 'text-lg' : 'text-base') : 'text-2xl'
                }`}>
                  {t('header.name')}
                </h2>
                {(!isScrolled || isScrollingUp) && (
                  <p className={`text-muted-foreground font-inter transition-all duration-300 ${
                    isScrolled ? 'text-xs' : 'text-sm'
                  }`}>
                    {t('header.tagline')}
                  </p>
                )}
              </div>
            </div>

            {/* Contact section */}
            {(!isScrolled || isScrollingUp) && (
              <div className={`hidden lg:flex items-center gap-8 transition-all duration-300 ${
                isScrolled ? 'scale-75' : 'scale-100'
              }`}>
                <div className="text-center">
                  <p className={`font-inter font-bold text-islamic-green transition-all duration-300 ${
                    isScrolled ? 'text-sm' : 'text-lg'
                  }`}>
                    {t('header.callChange')}
                  </p>
                  <div className={`flex items-center gap-2 font-bold text-islamic-green transition-all duration-300 ${
                    isScrolled ? 'text-lg' : 'text-2xl'
                  }`}>
                    <Phone className={`transition-all duration-300 ${isScrolled ? 'w-4 h-4' : 'w-6 h-6'}`} />
                    {t('header.phone')}
                  </div>
                  <div className="flex gap-2 mt-2">
                    {[1,2,3,4,5].map((star) => (
                      <span key={star} className={`text-islamic-gold transition-all duration-300 ${
                        isScrolled ? 'text-sm' : 'text-lg'
                      }`}>★</span>
                    ))}
                    <span className={`bg-islamic-green text-white px-2 py-1 rounded font-inter ml-2 transition-all duration-300 ${
                      isScrolled ? 'text-xs' : 'text-sm'
                    }`}>
                      {t('header.satisfied')}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Navigation */}
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:block transition-all duration-300 ${
            isScrolled ? (isScrollingUp ? 'pb-1' : 'pb-0.5') : 'pb-4'
          }`}>
            <div className="flex flex-col lg:flex-row lg:justify-center gap-2 lg:gap-0">
              {menuItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`${
                      isActive 
                        ? "bg-red-600 hover:bg-red-700 text-white" 
                        : "bg-islamic-green hover:bg-islamic-light-green text-white"
                    } rounded-none font-inter font-medium transition-all duration-300 ${
                      isScrolled ? (isScrollingUp ? 'px-3 py-1 text-sm' : 'px-2 py-1 text-xs') : 'px-6 py-3 text-base'
                    } inline-flex items-center justify-center`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </header>

      {/* Fixed contact buttons */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4">
        <Button 
          size="icon" 
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          onClick={handleWhatsAppClick}
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
      
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40">
        <Button 
          size="icon" 
          className="bg-red-500 hover:bg-red-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          onClick={handleCallClick}
          title="Call +91-7340479570"
        >
          <Phone className="w-6 h-6" />
        </Button>
      </div>
    </>
  );
};

export default Header;