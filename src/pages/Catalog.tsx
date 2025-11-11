import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";

const Catalog = () => {
  const categories = ["All", "Appetizers", "Main Course", "Desserts", "Beverages"];
  const [activeCategory, setActiveCategory] = useState("All");

  const menuItems = [
    {
      id: 1,
      name: "Mediterranean Platter",
      category: "Appetizers",
      description: "Assorted hummus, falafel, olives, and fresh pita bread",
      price: "$45",
      image: dish1,
    },
    {
      id: 2,
      name: "Gourmet Bruschetta",
      category: "Appetizers",
      description: "Tomato basil, mushroom truffle, and prosciutto variations",
      price: "$38",
      image: dish1,
    },
    {
      id: 3,
      name: "Herb-Crusted Salmon",
      category: "Main Course",
      description: "Fresh Atlantic salmon with seasonal vegetables and lemon butter sauce",
      price: "$65",
      image: dish2,
    },
    {
      id: 4,
      name: "Beef Tenderloin",
      category: "Main Course",
      description: "Prime beef with roasted garlic mashed potatoes and red wine reduction",
      price: "$75",
      image: dish2,
    },
    {
      id: 5,
      name: "Vegetarian Risotto",
      category: "Main Course",
      description: "Creamy mushroom risotto with parmesan and fresh herbs",
      price: "$48",
      image: dish2,
    },
    {
      id: 6,
      name: "Chocolate Fondant",
      category: "Desserts",
      description: "Warm chocolate cake with vanilla ice cream and berry compote",
      price: "$28",
      image: dish3,
    },
    {
      id: 7,
      name: "Tiramisu Tower",
      category: "Desserts",
      description: "Classic Italian dessert with espresso-soaked ladyfingers",
      price: "$25",
      image: dish3,
    },
    {
      id: 8,
      name: "Artisan Lemonade Bar",
      category: "Beverages",
      description: "Fresh-squeezed lemonade with flavor infusions",
      price: "$15/person",
      image: dish1,
    },
  ];

  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Our Menu</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our curated selection of gourmet dishes, crafted with passion and premium ingredients
            </p>
          </div>

          {/* Category Tabs */}
          <Tabs defaultValue="All" className="mb-12">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 w-full bg-muted/50 p-2 rounded-xl">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-primary-foreground rounded-lg"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="overflow-hidden hover-lift animate-scale-in border-border bg-card"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold">
                    {item.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="inline-block px-3 py-1 bg-muted rounded-full text-xs font-medium mb-3">
                    {item.category}
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-3">{item.name}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <Button className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">
                    Add to Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 animate-fade-in">
            <Card className="max-w-2xl mx-auto border-border bg-card">
              <CardContent className="p-8">
                <h2 className="text-3xl font-display font-bold mb-4">Custom Menu Planning</h2>
                <p className="text-muted-foreground mb-6">
                  Don't see exactly what you're looking for? Our culinary team can create a completely custom menu tailored to your preferences and event theme.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">
                  Request Custom Menu
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catalog;
