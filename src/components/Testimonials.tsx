import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sunil Singh Rana - USA",
      text: "Few month back my girlfriend broke up with me and decided to move forward with some other guy. This affects me from inside but I took help from Astrologer Ahmed Ali Khan and managed to bring her back into my life again thank you",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Sabina Begum - Dubai", 
      text: "My husband's business was losing money, which added to my worry. I sought the advice of astrologer Ahmed Ali Khan, and his advised treatments helped and gradually changed my situation.",
      image: "images/13.png"
    },
    {
      name: "Ankush Kaur - Canada",
      text: "Our parents were against my love marriage as we were from different castes and we tried hard to convince our parents but nothing worked. Then I seek help from Astrologer Ahmed Ali Khan and it worked. Thank you",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-2">
            <span className="text-islamic-green">OUR CLIENT'S </span>
            <span className="text-islamic-gold">TESTIMONIALS</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-islamic-green text-white overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-islamic-gold mb-4">{testimonial.name}</h3>
                <p className="text-white leading-relaxed mb-6">{testimonial.text}</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-islamic-gold"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;