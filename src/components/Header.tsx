import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import { useLocation, Link } from "react-router-dom";
import islamicLogo from "@/assets/islamic-logo.png";
import LanguageToggle from "./LanguageToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsShrunk(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: t("header.menu.home"), path: "/" },
    { label: t("header.menu.about"), path: "/about" },
    { label: t("header.menu.services"), path: "/services" },
    { label: t("header.menu.blog"), path: "/blog" },
    { label: t("header.menu.contact"), path: "/contact" },
  ];

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/917340479570?text=${encodeURIComponent('Hello, I need help with my problem')}`, "_blank");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+917340479570";
  };

  return (
    <>
      {/* Top banner */}
      <div className="bg-gradient-to-r from-islamic-gold to-yellow-500 text-islamic-green py-3 px-4 text-center text-sm font-medium">
        <div className="flex items-center justify-center gap-4">
          <span className="font-inter">{t("header.banner")}</span>
          <LanguageToggle />
        </div>
      </div>

      {/* Header */}
      <header className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-500 ${
        isShrunk ? "py-1" : "py-6"
      }`}>
        <div className="container mx-auto px-4 transition-all duration-500">
          <div className="flex items-center justify-between transition-all duration-500">
            {/* Logo & Title */}
            <div className="flex items-center gap-4">
              <img
                src={islamicLogo}
                alt="Islamic Astrologer"
                className={`transition-all duration-500 ${
                  isShrunk ? "w-10 h-10" : "w-20 h-20"
                }`}
              />
              <div>
                <h1 className={`font-inter font-bold text-islamic-green transition-all duration-500 ${
                  isShrunk ? "text-sm" : "text-xl"
                }`}>
                  {t("header.title")}
                </h1>
                <h2 className={`font-playfair font-bold text-islamic-green transition-all duration-500 ${
                  isShrunk ? "text-lg" : "text-2xl"
                }`}>
                  {t("header.name")}
                </h2>
                {!isShrunk && (
                  <p className="text-muted-foreground font-inter text-sm transition-all duration-500">
                    {t("header.tagline")}
                  </p>
                )}
              </div>
            </div>

            {/* Contact Info (desktop only) */}
            {!isShrunk && (
              <div className="hidden lg:flex items-center gap-8">
                <div className="text-center">
                  <p className="font-inter font-bold text-islamic-green text-lg">
                    {t("header.callChange")}
                  </p>
                  <div className="flex items-center gap-2 font-bold text-islamic-green text-2xl">
                    <Phone className="w-6 h-6" />
                    {t("header.phone")}
                  </div>
                  <div className="flex gap-2 mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-islamic-gold text-lg">★</span>
                    ))}
                    <span className="bg-islamic-green text-white px-2 py-1 rounded font-inter text-sm ml-2">
                      {t("header.satisfied")}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className={`${isMenuOpen ? "block" : "hidden"} lg:block transition-all duration-500 pt-4`}>
            <div className="flex flex-col lg:flex-row lg:justify-center gap-2 lg:gap-0">
              {menuItems.map((item) => {
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
                      isShrunk ? "px-4 py-2 text-sm" : "px-6 py-3 text-base"
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

      {/* 📞 Grouped Floating Contact Buttons (Fixed Bottom Right) */}
{/* 📞 Grouped Floating Contact Buttons (Fixed Top Right inside Header) */}
<div className="fixed top-28 right-6 z-50 flex flex-col gap-4 items-end">
  <Button
    size="icon"
    className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
    onClick={handleWhatsAppClick}
    title="Chat on WhatsApp"
  >
    <MessageCircle className="w-6 h-6" />
  </Button>
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
