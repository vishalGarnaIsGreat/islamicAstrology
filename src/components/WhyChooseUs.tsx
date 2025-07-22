const WhyChooseUs = () => {
  const features = [
    {
      number: "1",
      icon: "👨‍💼",
      title: "Prediction Expert",
      description: "He is more experienced than another astrologer in Muslim astrology and solves various problems."
    },
    {
      number: "2", 
      icon: "🌍",
      title: "Worldwide Access",
      description: "He gives his Muslim astrology remedies all around the world for the betterment of society."
    },
    {
      number: "3",
      icon: "📅", 
      title: "365 Days Availability",
      description: "He is available to his clients for 365 days and gives remedies of their problems."
    },
    {
      number: "4",
      icon: "😊",
      title: "Happy Customer", 
      description: "There are many people around the world who are happy with his Muslim astrology remedies."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-islamic-green mb-6">Why Choose Us</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Astrologer Ahmed Ali Khan Ji is helping people to meet with the peace by solving all kind of real-life based problems with the help of Muslim 
            astrological remedies for a better life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 bg-islamic-green rounded-full flex items-center justify-center text-4xl text-islamic-gold font-bold relative z-10">
                  {feature.number}
                </div>
                <div className="absolute inset-0 w-24 h-24 bg-islamic-green rounded-full opacity-20 scale-125 group-hover:scale-150 transition-transform duration-300"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl z-20">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-islamic-green mb-4">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;