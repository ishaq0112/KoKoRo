import { Link, useLocation } from "react-router-dom";
import { Heart, Home, Brain, Wrench, Timer, BookOpen, Heart as HeartIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/mindfulness", label: "Mindfulness", icon: Brain },
    { path: "/tools", label: "Tools", icon: Wrench },
    { path: "/focus", label: "Focus Timer", icon: Timer },
    { path: "/education", label: "Education", icon: BookOpen },
    { path: "/resources", label: "Resources", icon: HeartIcon },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-primary">
            <Heart className="h-8 w-8" />
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              KoKoRo
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive 
                      ? "bg-primary text-primary-foreground shadow-soft" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
          
          {/* Mobile menu button - simplified for now */}
          <div className="md:hidden">
            <button className="p-2 text-muted-foreground hover:text-foreground">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;