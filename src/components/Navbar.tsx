
import { Link } from "react-router-dom";
import { Bell, User, Search } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="bg-secondary/80 backdrop-blur-lg py-4 px-6 sticky top-0 z-50 border-b border-border/40">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/80 to-accent/50 opacity-75 blur-sm"></div>
            <div className="relative bg-secondary rounded-full p-1 w-10 h-10 flex items-center justify-center">
              <span className="text-primary font-bold text-xl">C</span>
            </div>
          </div>
          <span className="text-2xl font-bold text-primary text-glow tracking-tight">CricketBets</span>
        </Link>
        
        <div className="hidden md:flex gap-8 font-medium">
          <Link to="/" className="text-foreground hover:text-primary transition-colors relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/leagues" className="text-foreground hover:text-primary transition-colors relative group">
            Leagues
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/live" className="text-foreground hover:text-primary transition-colors relative group">
            Live
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/bets" className="text-foreground hover:text-primary transition-colors relative group">
            My Bets
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-primary">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-primary">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="secondary" size="sm" className="rounded-full bg-muted hover:bg-muted/80 gap-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Account</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
