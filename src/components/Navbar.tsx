
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-secondary py-4 px-6 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">CricketBets</Link>
        <div className="flex gap-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
          <Link to="/leagues" className="text-foreground hover:text-primary transition-colors">Leagues</Link>
          <Link to="/live" className="text-foreground hover:text-primary transition-colors">Live</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
