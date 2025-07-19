import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-islamic-green">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-islamic-gold mb-4 font-playfair">{t('services.title')}</h2>
          <p className="text-xl text-white/90 font-inter">{t('services.subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {(t('services.list', { returnObjects: true }) as any[]).map((service: any, index: number) => (
            <Card key={index} className="overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all hover:scale-105 duration-300">
              <div className="relative h-56">
                <div className={`w-full h-full bg-gradient-to-br ${
                  index === 0 ? 'from-red-400 to-red-600' : 
                  index === 1 ? 'from-green-400 to-green-600' : 
                  'from-blue-400 to-blue-600'
                } flex items-center justify-center`}>
                  <div className="text-white text-6xl">
                    {index === 0 ? '💕' : index === 1 ? '🔮' : '👫'}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-islamic-gold p-4">
                  <h3 className="font-bold text-lg text-islamic-green text-center font-inter">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed font-inter">
                  {service.description}
                </p>
                
                <div className="text-center">
                  <p className="text-2xl font-bold text-red-600 mb-4 font-inter">
                    📞 {t('header.phone')}
                  </p>
                  
                  <div className="flex gap-3 justify-center">
                    <Button className="bg-red-600 hover:bg-red-700 text-white flex-1 font-inter rounded-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Us
                    </Button>
                    <Button className="bg-green-600 hover:bg-green-700 text-white flex-1 font-inter rounded-full">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;