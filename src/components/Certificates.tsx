import { Button } from "@/components/ui/button";

const Certificates = () => {
  const certificates = [
    "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop", 
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-islamic-green mb-6">
            Thousand Of People Get Benefits
          </h2>
          <div className="bg-islamic-green text-white px-8 py-3 rounded-lg inline-block mb-8">
            <h3 className="text-2xl font-bold">WITH THE HELP OF ASTROLOGER</h3>
          </div>
          <h4 className="text-3xl font-bold text-islamic-green mb-8">Muslim Astrologer Ahmed Ali Khan</h4>
          
          <div className="flex gap-4 justify-center mb-8">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
              Call Us
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
              Online Chat
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <img 
                src={cert} 
                alt={`Certificate ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-islamic-green mb-8">Our Other Services</h3>
        </div>
      </div>
    </section>
  );
};

export default Certificates;