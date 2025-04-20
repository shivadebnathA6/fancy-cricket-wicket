
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";

const leagues = [
  { 
    id: 1, 
    name: "IPL 2025", 
    matches: 60, 
    image: "/placeholder.svg", 
    teams: 10,
    startDate: "March 15, 2025",
    status: "Upcoming",
    trending: true 
  },
  { 
    id: 2, 
    name: "Big Bash League", 
    matches: 45, 
    image: "/placeholder.svg",
    teams: 8,
    startDate: "December 5, 2024",
    status: "In Progress" 
  },
  { 
    id: 3, 
    name: "T20 World Cup", 
    matches: 45, 
    image: "/placeholder.svg",
    teams: 16,
    startDate: "October 18, 2024",
    status: "Registration Open",
    trending: true
  },
  { 
    id: 4, 
    name: "The Hundred", 
    matches: 34, 
    image: "/placeholder.svg",
    teams: 8,
    startDate: "July 23, 2024",
    status: "Upcoming"
  },
  { 
    id: 5, 
    name: "Caribbean Premier League", 
    matches: 34, 
    image: "/placeholder.svg",
    teams: 6,
    startDate: "August 28, 2024",
    status: "Registration Open"
  },
  { 
    id: 6, 
    name: "Pakistan Super League", 
    matches: 34, 
    image: "/placeholder.svg",
    teams: 6,
    startDate: "February 17, 2025",
    status: "Upcoming"
  }
];

const Leagues = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">
            Cricket <span className="text-primary">Leagues</span>
          </h1>
          <div className="flex gap-2">
            <Badge variant="outline" className="bg-muted/20">All Leagues</Badge>
            <Badge variant="outline" className="bg-muted/20">Upcoming</Badge>
            <Badge variant="outline" className="bg-muted/20">In Progress</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leagues.map((league) => (
            <Link key={league.id} to={`/leagues/${league.id}`}>
              <Card className="card-gradient card-hover overflow-hidden border-0 rounded-xl">
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={league.image} 
                      alt={league.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                    <div className="absolute top-3 right-3 flex gap-2">
                      {league.trending && (
                        <Badge variant="default" className="bg-primary text-primary-foreground">
                          Trending
                        </Badge>
                      )}
                      <Badge 
                        variant="outline" 
                        className={`
                          ${league.status === "In Progress" ? "bg-green-500/20 text-green-500" : ""}
                          ${league.status === "Upcoming" ? "bg-blue-500/20 text-blue-500" : ""}
                          ${league.status === "Registration Open" ? "bg-yellow-500/20 text-yellow-500" : ""}
                        `}
                      >
                        {league.status}
                      </Badge>
                    </div>
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
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Leagues;
