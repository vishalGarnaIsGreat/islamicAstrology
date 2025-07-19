import { useTranslation } from 'react-i18next';

const AllServices = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-islamic-green mb-4 font-playfair">{t('allServices.title')}</h2>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {(t('allServices.categories', { returnObjects: true }) as any[]).map((category: any, categoryIndex: number) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-islamic-green text-white p-4">
                <h3 className="text-lg font-bold text-center font-inter">{category.name}</h3>
              </div>
              <div className="p-4 space-y-3">
                {category.services.map((service: string, serviceIndex: number) => (
                  <div 
                    key={serviceIndex}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-islamic-cream transition-colors cursor-pointer"
                  >
                    <span className="text-islamic-gold text-sm">✓</span>
                    <span className="font-medium text-sm text-gray-700 font-inter">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllServices;