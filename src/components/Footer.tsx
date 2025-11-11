import { Link } from "react-router-dom";
import { ChefHat, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ChefHat className="w-8 h-8 text-primary" />
              <span className="text-xl font-display font-bold">Gourmet Catering</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Exceptional catering services for unforgettable events. Crafted with passion, served with excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              <Link to="/catalog" className="block text-muted-foreground hover:text-primary transition-colors">Catalog</Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold mb-4">Services</h3>
            <div className="space-y-2 text-muted-foreground text-sm">
              <p>Wedding Catering</p>
              <p>Corporate Events</p>
              <p>Private Parties</p>
              <p>Custom Menus</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@gourmetcatering.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>123 Culinary Street, Food City</span>
              </div>
              <div className="flex gap-4 mt-4">
                <Facebook className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                <Instagram className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                <Twitter className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Gourmet Catering. All rights reserved. Made by Muhammad Zawwar Akram</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
