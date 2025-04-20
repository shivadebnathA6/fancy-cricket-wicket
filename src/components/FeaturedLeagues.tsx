
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Trophy, Calendar, Users } from "lucide-react";

const leagues = [
  { 
    id: 1, 
    name: "IPL 2025", 
    matches: 60, 
    image: "/placeholder.svg", 
    teams: 10,
    startDate: "March 15, 2025",
    trending: true 
  },
  { 
    id: 2, 
    name: "Big Bash League", 
    matches: 45, 
    image: "/placeholder.svg",
    teams: 8,
    startDate: "December 5, 2024" 
  },
  { 
    id: 3, 
    name: "T20 World Cup", 
    matches: 45, 
    image: "/placeholder.svg",
    teams: 16,
    startDate: "October 18, 2024",
    trending: true
  },
];

const FeaturedLeagues = () => {
  return (
    <div className="py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-foreground"><span className="text-primary">Featured</span> Leagues</h2>
        <a href="/leagues" className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
          View All Leagues →
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {leagues.map((league) => (
          <Card key={league.id} className="card-gradient card-hover overflow-hidden border-0 rounded-xl">
            <CardHeader className="p-0">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={league.image} 
                  alt={league.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                {league.trending && (
                  <Badge variant="default" className="absolute top-3 right-3 bg-primary text-primary-foreground">
                    Trending
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="p-5">
              <h3 className="text-xl font-bold mb-3">{league.name}</h3>
              
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-primary" />
                  <span className="font-medium">{league.matches} matches</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="font-medium">{league.teams} teams</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="font-medium">Starts: {league.startDate}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedLeagues;
