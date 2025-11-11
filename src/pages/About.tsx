import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Target, Users2 } from "lucide-react";
import aboutImage from "@/assets/about-us.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "Every dish is crafted with love and dedication to culinary excellence.",
    },
    {
      icon: Award,
      title: "Quality",
      description: "We source only the finest ingredients and maintain the highest standards.",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Meticulous attention to detail in every aspect of our service.",
    },
    {
      icon: Users2,
      title: "Community",
      description: "Supporting local suppliers and giving back to our community.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Crafting exceptional culinary experiences with passion, expertise, and unwavering commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                <img 
                  src={aboutImage} 
                  alt="Our team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2008, Gourmet Catering began with a simple mission: to transform events into unforgettable culinary experiences. What started as a small team of passionate chefs has grown into a full-service catering company serving hundreds of delighted clients each year.
                </p>
                <p>
                  Our journey has been driven by an unwavering commitment to quality, innovation, and customer satisfaction. We believe that great food has the power to bring people together and create lasting memories.
                </p>
                <p>
                  Today, we're proud to be one of the region's most trusted catering services, known for our creative menus, impeccable service, and ability to bring our clients' visions to life. Every event we cater is an opportunity to showcase our passion for culinary excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground text-lg">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={index} 
                  className="hover-lift animate-scale-in border-border bg-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Team</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-12">
              Our talented team of culinary professionals, event coordinators, and service staff work together seamlessly to ensure every event exceeds expectations. With decades of combined experience, we bring creativity, expertise, and genuine care to every occasion we cater.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-6xl font-display font-bold text-primary mb-2">15+</h3>
                <p className="text-muted-foreground">Years of Excellence</p>
              </div>
              <div>
                <h3 className="text-6xl font-display font-bold text-primary mb-2">500+</h3>
                <p className="text-muted-foreground">Events Catered</p>
              </div>
              <div>
                <h3 className="text-6xl font-display font-bold text-primary mb-2">98%</h3>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
