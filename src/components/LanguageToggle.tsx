import { useTranslation } from 'react-i18next';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Languages } from 'lucide-react';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ur' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
      <Languages className="w-4 h-4 text-white" />
      <Label htmlFor="language-toggle" className="text-sm text-white font-medium">
        EN
      </Label>
      <Switch
        id="language-toggle"
        checked={i18n.language === 'ur'}
        onCheckedChange={toggleLanguage}
        className="data-[state=checked]:bg-islamic-gold data-[state=unchecked]:bg-white/20"
      />
      <Label htmlFor="language-toggle" className="text-sm text-white font-medium">
        اردو
      </Label>
    </div>
  );
};

export default LanguageToggle;