import { useTranslation } from 'react-i18next';

const WhyConsult = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-islamic-green mb-6 font-playfair">
            {t('whyConsult.title')}
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed font-inter">
            {t('whyConsult.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {(t('whyConsult.reasons', { returnObjects: true }) as any[]).map((reason: any, index: number) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-islamic-green/10">
              <div className="w-12 h-12 bg-islamic-green rounded-full flex items-center justify-center mb-4">
                <span className="text-islamic-gold text-xl font-bold">{index + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-islamic-green mb-3 font-inter">{reason.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-inter">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left side - Main content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gradient-to-br from-islamic-green to-islamic-light-green p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4 text-islamic-gold">World Famous Astrologer</h3>
              <h4 className="text-3xl font-bold mb-6">MAULANA MUHAMMAD ALI</h4>
              <p className="text-lg mb-6">
                DON'T WASTE YOUR TIME & MONEY GET PERMANENT SOLUTION
              </p>
              
              <div className="bg-islamic-gold text-islamic-green p-4 rounded-lg mb-6">
                <p className="font-bold text-lg">
                  Love Dua | Marriage Wazifa | Lost Love Back | Family Problems
                </p>
              </div>
              
              <p className="mb-4 font-medium">MILLIONS OF PEOPLE ARE SATISFIED WITH YOUR SERVICES</p>
              
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <p className="text-islamic-gold font-bold text-lg mb-2">
                  नोट:- मातायों, बहनों की समस्या गुप्त रखी जाएगी!
                </p>
                <p className="text-lg">
                  Lost Love Back, Love Marriage, Solution For Family, 
                  Love Problem Solution, Love Marriage Problem, 
                  Business Problem Solution, Etc.
                </p>
                <p className="text-2xl font-bold text-islamic-gold mt-4">
                  एक फोन कॉल आपका जीवन बदल सकता है!
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Specialist info */}
          <div className="space-y-6">
            <div className="bg-islamic-green text-white p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4 text-islamic-gold">SPECIALIST IN</h3>
              <div className="space-y-3">
                <p className="text-lg">नए मैरिज, नए रिश्तों, प्यार में समस्या और पति पत्नी में अनबन रीसते की समस्या का घर बैठे समाधान प्राप्त करे।</p>
                
                <div className="flex gap-2 justify-center mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <span key={star} className="text-islamic-gold text-lg">★</span>
                  ))}
                </div>
                
                <p className="text-islamic-gold font-bold">नोट:- मातायों, बहनों की समस्या गुप्त रखी जाएगी!</p>
                
                <div className="mt-4">
                  <p className="text-2xl font-bold">एक फोन कॉल आपका जीवन बदल सकता है!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyConsult;