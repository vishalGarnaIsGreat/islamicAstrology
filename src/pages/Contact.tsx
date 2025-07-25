import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-islamic-green to-islamic-light-green text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl font-inter opacity-90 max-w-3xl mx-auto mb-8">
            Get Immediate Help & Expert Guidance for All Your Life Problems
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-islamic-gold hover:bg-yellow-600 text-islamic-green font-bold"
              onClick={() => window.location.href = 'tel:+918290657409'}
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now: +91-8290657409
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-islamic-green hover:bg-white hover:text-islamic-green"
              onClick={() => window.open(`https://wa.me/918290657409?text=${encodeURIComponent('Hello, I need help with my problem')}`, '_blank')}
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp: +91-8290657409
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
                {
                  icon: Phone,
                  title: "Phone Numbers",
                  details: ["+91-8290657409", "+91-8290657409"],
                  description: "Available 24/7 for emergency consultations"
                },
                {
                  icon: MessageCircle,
                  title: "WhatsApp",
                  details: ["+91-8290657409"],
                  description: "Quick responses and instant solutions"
                },
              {
                icon: Mail,
                title: "Email",
                details: ["info@islamicastrologer.com", "support@islamicastrologer.com"],
                description: "Send detailed queries and get written solutions"
              },
              {
                icon: MapPin,
                title: "Office Address",
                details: ["Mumbai, Maharashtra", "Delhi, India"],
                description: "Visit for personal consultation by appointment"
              }
            ].map((contact, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-elegant">
                <contact.icon className="w-12 h-12 text-islamic-green mx-auto mb-4" />
                <h3 className="text-xl font-playfair font-bold text-islamic-green mb-3">
                  {contact.title}
                </h3>
                <div className="space-y-1 mb-3">
                  {contact.details.map((detail, i) => (
                    <div key={i} className="font-inter font-semibold text-islamic-green">
                      {detail}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{contact.description}</p>
              </div>
            ))}
          </div>

          {/* Office Hours */}
          <div className="bg-islamic-cream/30 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-playfair font-bold text-islamic-green mb-8 text-center">
              Consultation Hours
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { day: "Monday - Friday", time: "9:00 AM - 9:00 PM", type: "Regular Hours" },
                { day: "Saturday", time: "9:00 AM - 6:00 PM", type: "Weekend Hours" },
                { day: "Sunday", time: "10:00 AM - 4:00 PM", type: "Limited Hours" },
                { day: "Emergency", time: "24/7 Available", type: "Urgent Cases" }
              ].map((schedule, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg">
                  <Clock className="w-8 h-8 text-islamic-green mx-auto mb-2" />
                  <h3 className="font-playfair font-bold text-islamic-green mb-1">{schedule.day}</h3>
                  <p className="font-inter font-semibold text-islamic-green">{schedule.time}</p>
                  <p className="text-sm text-muted-foreground">{schedule.type}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-playfair font-bold text-islamic-green mb-6 text-center">
                Send Your Query
              </h2>
              <p className="text-lg font-inter text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
                Share your problem details and get expert Islamic astrology solutions within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-islamic-green mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-islamic-green mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91-XXXXX-XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-islamic-green mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-islamic-green mb-2">
                    Problem Category *
                  </label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-islamic-green"
                  >
                    <option value="">Select your problem type</option>
                    <option value="love-marriage">Love Marriage Problems</option>
                    <option value="black-magic">Black Magic Removal</option>
                    <option value="vashikaran">Vashikaran Services</option>
                    <option value="husband-wife">Husband Wife Problems</option>
                    <option value="career">Career & Business Issues</option>
                    <option value="health">Health Problems</option>
                    <option value="other">Other Issues</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-islamic-green mb-2">
                    Describe Your Problem *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Please describe your problem in detail. Include your birth date, time, and place if asking for horoscope reading."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-islamic-green hover:bg-islamic-light-green">
                  <Send className="mr-2 w-5 h-5" />
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  ✓ We respond within 2-4 hours ✓ All information kept confidential ✓ Expert guidance guaranteed
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-islamic-cream/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-islamic-green mb-12 text-center">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                location: "Mumbai",
                text: "Molana ji solved my marriage problems within a week. His guidance and remedies brought my wife back to me. Highly recommended!",
                rating: 5
              },
              {
                name: "Priya Sharma",
                location: "Delhi",
                text: "I was suffering from black magic effects for months. After contacting Molana ji, all my problems disappeared in just 3 days.",
                rating: 5
              },
              {
                name: "Ahmed Hassan", 
                location: "Bangalore",
                text: "Got my love marriage approved by both families through his powerful remedies. Amazing results and very supportive throughout.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-elegant">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-islamic-gold text-islamic-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground font-inter mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="font-playfair font-bold text-islamic-green">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-islamic-green to-islamic-light-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Don't Wait - Get Help Today
          </h2>
          <p className="text-xl font-inter opacity-90 mb-8 max-w-2xl mx-auto">
            Every problem has a solution in Islamic astrology. Contact us now and take the first step towards a happier life.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-islamic-gold hover:bg-yellow-600 text-islamic-green font-bold text-lg px-8"
              onClick={() => window.location.href = 'tel:+918290657409'}
            >
              <Phone className="mr-2 w-6 h-6" />
              Call Now: +91-8290657409
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-islamic-green text-lg px-8"
              onClick={() => window.open(`https://wa.me/918290657409?text=${encodeURIComponent('Hello, I need help with my problem')}`, '_blank')}
            >
              <MessageCircle className="mr-2 w-6 h-6" />
              WhatsApp Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;