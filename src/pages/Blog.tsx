import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User, Clock, Star, Heart, Shield, Brain, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState<any[]>([]);

  const featuredArticles = [
    {
      id: 1,
      title: "How to Make Someone Fall in Love with You Using Vashikaran",
      excerpt: "Discover the most powerful Islamic Vashikaran techniques to attract your desired person and make them fall deeply in love with you within 24 hours.",
      category: "Vashikaran",
      author: "Ahmed Ali Khan",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "images/13.png",
      featured: true
    },
    {
      id: 2,
      title: "Signs Your Husband is Under Black Magic - Complete Guide",
      excerpt: "Learn to identify the warning signs that indicate your husband might be affected by black magic and how to protect your family from negative energies.",
      category: "Black Magic",
      author: "Ahmed Ali Khan", 
      date: "2024-01-12",
      readTime: "10 min read",
     image: "images/13.png",
      featured: true
    }
  ];

  const blogPosts = [
    {
      id: 3,
      title: "Love Marriage Problems and Solutions in Islam",
      excerpt: "Complete guide to solving love marriage problems through Islamic remedies, family acceptance, and spiritual guidance for couples facing opposition.",
      category: "Love Marriage",
      author: "Ahmed Ali Khan",
      date: "2024-01-10",
      readTime: "6 min read",
     image: "images/13.png",
    },
    {
      id: 4,
      title: "Powerful Dua to Get Your Ex Back Permanently",
      excerpt: "Learn the most effective Islamic prayers and duas to bring back your lost love and make them commit to you permanently with strong feelings.",
      category: "Vashikaran",
      author: "Ahmed Ali Khan",
      date: "2024-01-08",
      readTime: "5 min read",
      image: "images/13.png",
    },
    {
      id: 5,
      title: "Photo Vashikaran: Control Anyone Using Their Picture",
      excerpt: "Step-by-step guide to perform photo vashikaran at home using simple Islamic methods to influence and control someone from distance.",
      category: "Vashikaran",
      author: "Ahmed Ali Khan",
      date: "2024-01-05",
      readTime: "7 min read",
       image: "images/13.png",
    },
    {
      id: 6,
      title: "How to Remove Black Magic from Your Life",
      excerpt: "Complete Islamic method to identify, remove, and protect yourself from black magic, evil eye, and negative energies affecting your life.",
      category: "Black Magic",
      author: "Ahmed Ali Khan",
      date: "2024-01-03",
      readTime: "9 min read",
   image: "images/13.png",
    },
    {
      id: 7,
      title: "Husband Wife Relationship Problems Solutions",
      excerpt: "Islamic remedies and spiritual guidance to solve marital disputes, restore love, and bring harmony in husband-wife relationships.",
      category: "Love Marriage",
      author: "Ahmed Ali Khan",
      date: "2024-01-01",
      readTime: "6 min read",
    image: "images/13.png",
    },
    {
      id: 8,
      title: "Mohabbat Ka Amal - Make Someone Love You",
      excerpt: "Powerful Islamic amal and wazifa to create deep love and attraction in someone's heart and make them devoted to you forever.",
      category: "Vashikaran",
      author: "Ahmed Ali Khan",
      date: "2023-12-28",
      readTime: "8 min read",
   image: "images/13.png",
    }
  ];

  const categories = [
    { name: "All", count: 15, icon: Star },
    { name: "Vashikaran", count: 8, icon: Brain },
    { name: "Love Marriage", count: 4, icon: Heart },
    { name: "Black Magic", count: 3, icon: Shield }
  ];

  // Filter posts based on search and category
  useEffect(() => {
    let filtered = [...featuredArticles, ...blogPosts];
    
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory !== "All") {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-islamic-green to-islamic-light-green text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            5 Min Read 
          </h1>
          <p className="text-xl md:text-2xl font-inter opacity-90 max-w-3xl mx-auto mb-8">
            Expert Articles on Vashikaran, Love Marriage, Black Magic Removal & Islamic Spirituality
          </p>
          <div className="max-w-md mx-auto relative">
            <Input 
              placeholder="Search articles..." 
              className="bg-white text-islamic-green pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          </div>
          
          {/* Quick Navigation to Blog Sections */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button 
              variant="outline" 
              className="border-white text-islamic-green hover:bg-white hover:text-islamic-green"
              onClick={() => scrollToSection('love-marriage-blogs')}
            >
              Love Marriage Blogs
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-islamic-green hover:bg-white hover:text-islamic-green"
              onClick={() => scrollToSection('vashikaran-blogs')}
            >
              Vashikaran Blogs
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-islamic-green hover:bg-white hover:text-islamic-green"
              onClick={() => scrollToSection('black-magic-blogs')}
            >
              Black Magic Blogs
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-elegant mb-8">
              <h3 className="text-xl font-playfair font-bold text-islamic-green mb-4">Categories</h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`flex items-center justify-between w-full p-3 rounded-lg transition-colors ${
                      selectedCategory === category.name 
                        ? 'bg-islamic-green text-white' 
                        : 'hover:bg-islamic-cream/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <category.icon className={`w-5 h-5 ${
                        selectedCategory === category.name ? 'text-white' : 'text-islamic-green'
                      }`} />
                      <span className={`font-inter ${
                        selectedCategory === category.name ? 'text-white' : 'text-islamic-green'
                      }`}>
                        {category.name}
                      </span>
                    </div>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      selectedCategory === category.name 
                        ? 'bg-white text-islamic-green' 
                        : 'bg-islamic-green text-white'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-islamic-green to-islamic-light-green text-white p-6 rounded-lg shadow-elegant">
              <h3 className="text-xl font-playfair font-bold mb-4">Need Personal Help?</h3>
              <p className="font-inter mb-4 opacity-90">
                Get personalized solutions for your specific problems through direct consultation.
              </p>
              <Button className="w-full bg-islamic-gold hover:bg-yellow-600 text-islamic-green font-bold">
                Book Consultation
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search Results */}
            {(searchTerm || selectedCategory !== "All") && (
              <div className="mb-8">
                <h2 className="text-2xl font-playfair font-bold text-islamic-green mb-4">
                  {searchTerm ? `Search Results for "${searchTerm}"` : `${selectedCategory} Articles`}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-lg shadow-elegant overflow-hidden hover:shadow-xl transition-shadow">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <span className={`text-white text-xs px-3 py-1 rounded-full ${
                            post.category === 'Vashikaran' ? 'bg-purple-600' :
                            post.category === 'Love Marriage' ? 'bg-pink-600' :
                            post.category === 'Black Magic' ? 'bg-red-600' :
                            'bg-islamic-green'
                          }`}>
                            {post.category}
                          </span>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </div>
                        </div>
                        <h3 className="text-lg font-playfair font-bold text-islamic-green mb-3 hover:text-islamic-light-green cursor-pointer">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground font-inter text-sm mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
                {filteredPosts.length === 0 && (
                  <p className="text-center text-muted-foreground py-8">
                    No articles found matching your criteria.
                  </p>
                )}
              </div>
            )}

            {/* Featured Articles */}
            {!searchTerm && selectedCategory === "All" && (
              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-islamic-green mb-8">Featured Articles</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {featuredArticles.map((article) => (
                  <div key={article.id} className="bg-white rounded-lg shadow-elegant overflow-hidden hover:shadow-xl transition-shadow">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="bg-islamic-green text-white text-xs px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </div>
                      </div>
                      <h3 className="text-xl font-playfair font-bold text-islamic-green mb-3 hover:text-islamic-light-green cursor-pointer">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground font-inter mb-4">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="w-4 h-4" />
                          {article.author}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {new Date(article.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            )}

            {/* Blog Sections */}
            {!searchTerm && selectedCategory === "All" && (
              <>
                {/* Love Marriage Blog Section */}
                <div id="love-marriage-blogs" className="mb-16">
                  <h2 className="text-3xl font-playfair font-bold text-islamic-green mb-8">Love Marriage Guidance</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {blogPosts.filter(post => post.category === "Love Marriage").map((post) => (
                      <article key={post.id} className="bg-white rounded-lg shadow-elegant overflow-hidden hover:shadow-xl transition-shadow">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-40 object-cover"
                        />
                        <div className="p-6">
                          <div className="flex items-center gap-4 mb-3">
                            <span className="bg-pink-600 text-white text-xs px-3 py-1 rounded-full">
                              {post.category}
                            </span>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              {post.readTime}
                            </div>
                          </div>
                          <h3 className="text-lg font-playfair font-bold text-islamic-green mb-3 hover:text-islamic-light-green cursor-pointer">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground font-inter text-sm mb-4">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              {post.author}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(post.date).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                {/* Vashikaran Blog Section */}
                <div id="vashikaran-blogs" className="mb-16">
                  <h2 className="text-3xl font-playfair font-bold text-islamic-green mb-8">Vashikaran Techniques</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {blogPosts.filter(post => post.category === "Vashikaran").map((post) => (
                      <article key={post.id} className="bg-white rounded-lg shadow-elegant overflow-hidden hover:shadow-xl transition-shadow">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-40 object-cover"
                        />
                        <div className="p-6">
                          <div className="flex items-center gap-4 mb-3">
                            <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                              {post.category}
                            </span>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              {post.readTime}
                            </div>
                          </div>
                          <h3 className="text-lg font-playfair font-bold text-islamic-green mb-3 hover:text-islamic-light-green cursor-pointer">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground font-inter text-sm mb-4">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              {post.author}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(post.date).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                {/* Black Magic Blog Section */}
                <div id="black-magic-blogs" className="mb-16">
                  <h2 className="text-3xl font-playfair font-bold text-islamic-green mb-8">Black Magic Protection</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {blogPosts.filter(post => post.category === "Black Magic").map((post) => (
                      <article key={post.id} className="bg-white rounded-lg shadow-elegant overflow-hidden hover:shadow-xl transition-shadow">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-40 object-cover"
                        />
                        <div className="p-6">
                          <div className="flex items-center gap-4 mb-3">
                            <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                              {post.category}
                            </span>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              {post.readTime}
                            </div>
                          </div>
                          <h3 className="text-lg font-playfair font-bold text-islamic-green mb-3 hover:text-islamic-light-green cursor-pointer">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground font-inter text-sm mb-4">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              {post.author}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(post.date).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                {/* All Articles */}
                <div>
                  <h2 className="text-3xl font-playfair font-bold text-islamic-green mb-8">All Latest Articles</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-elegant overflow-hidden hover:shadow-xl transition-shadow">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <span className={`text-white text-xs px-3 py-1 rounded-full ${
                          post.category === 'Vashikaran' ? 'bg-purple-600' :
                          post.category === 'Love Marriage' ? 'bg-pink-600' :
                          post.category === 'Black Magic' ? 'bg-red-600' :
                          'bg-islamic-green'
                        }`}>
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="text-lg font-playfair font-bold text-islamic-green mb-3 hover:text-islamic-light-green cursor-pointer">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground font-inter text-sm mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

                  {/* Load More Button */}
                  <div className="text-center mt-12">
                    <Button size="lg" variant="outline" className="border-islamic-green text-islamic-green hover:bg-islamic-green hover:text-white">
                      Load More Articles
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="py-16 bg-islamic-cream/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold text-islamic-green mb-6">
            Get Latest Islamic Astrology Tips
          </h2>
          <p className="text-xl font-inter text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive weekly tips, remedies, and guidance directly in your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input placeholder="Enter your email address" className="flex-1" />
            <Button className="bg-islamic-green hover:bg-islamic-light-green">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Join 10,000+ readers who trust our Islamic astrology guidance
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;