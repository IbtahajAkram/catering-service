import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Users, Sparkles, Star, ArrowRight, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-catering.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";

const Home = () => {
  const services = [
    {
      icon: ChefHat,
      title: "Expert Chefs",
      description: "Award-winning culinary professionals crafting exceptional dishes with premium ingredients.",
    },
    {
      icon: Users,
      title: "Full-Service Catering",
      description: "Complete event management from menu planning to on-site service and cleanup.",
    },
    {
      icon: Sparkles,
      title: "Custom Menus",
      description: "Personalized menus tailored to your preferences, dietary needs, and event theme.",
    },
  ];

  const features = [
    "Fresh, locally-sourced ingredients",
    "Flexible menu customization",
    "Professional event staff",
    "Elegant presentation",
    "Dietary accommodations",
    "Competitive pricing",
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Wedding Client",
      content: "Absolutely phenomenal! The food was exquisite and the service impeccable. Our guests are still raving about the meal.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Corporate Event",
      content: "Professional, creative, and delicious. They made our company gala unforgettable. Highly recommend!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Birthday Party",
      content: "From start to finish, they exceeded expectations. The attention to detail and quality was outstanding.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Elevate Your Event with
            <span className="block text-accent mt-2">Exceptional Catering</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">
            Crafting unforgettable culinary experiences for weddings, corporate events, and special occasions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 text-lg px-8">
              View Our Menu
            </Button>
            <Button size="lg" variant="outline" className="text-black border-white  hover:bg-white hover:text-foreground text-lg px-8">
              Get a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Premium catering solutions tailored to make your event extraordinary
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover-lift animate-scale-in border-border bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Featured Creations</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A taste of our culinary artistry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: dish1, name: "Gourmet Appetizers", desc: "Exquisite starters to delight your guests" },
              { img: dish2, name: "Signature Entrees", desc: "Main courses that leave lasting impressions" },
              { img: dish3, name: "Decadent Desserts", desc: "Sweet endings to perfect your event" },
            ].map((dish, index) => (
              <div 
                key={index} 
                className="group cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl aspect-square mb-4">
                  <img 
                    src={dish.img} 
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-display font-semibold mb-2">{dish.name}</h3>
                <p className="text-muted-foreground">{dish.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/catalog">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">
                Explore Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Why Choose Us</h2>
              <p className="text-muted-foreground text-lg mb-8">
                With over 15 years of excellence in the catering industry, we bring passion, expertise, and attention to detail to every event we serve.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden animate-scale-in">
              <img 
                src={dish2} 
                alt="Quality food"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Client Testimonials</h2>
            <p className="text-muted-foreground text-lg">
              What our satisfied clients say about us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="hover-lift animate-slide-up border-border bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Create Something Extraordinary?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss your event and create a menu that will wow your guests
          </p>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="border-primary-foreground text-black hover:bg-primary-foreground hover:text-primary text-lg px-8">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
