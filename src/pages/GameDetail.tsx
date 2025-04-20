
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Trophy, ArrowRight } from "lucide-react";

const GameDetail = () => {
  const { gameId } = useParams();

  // Simulated match data
  const match = {
    id: gameId,
    team1: "Mumbai Indians",
    team2: "Chennai Super Kings",
    date: "March 15, 2025",
    time: "19:30 IST",
    venue: "Wankhede Stadium, Mumbai",
    league: "IPL 2025",
    status: "Upcoming",
    team1Logo: "/placeholder.svg",
    team2Logo: "/placeholder.svg",
  };

  const bettingOptions = [
    {
      id: 1,
      title: "Match Winner",
      options: [
        { name: match.team1, odds: 1.85 },
        { name: match.team2, odds: 2.10 },
      ]
    },
    {
      id: 2,
      title: "Top Batsman",
      options: [
        { name: "Rohit Sharma", odds: 3.50 },
        { name: "MS Dhoni", odds: 4.00 },
        { name: "Hardik Pandya", odds: 4.50 },
      ]
    },
    {
      id: 3,
      title: "Total Runs",
      options: [
        { name: "Over 165.5", odds: 1.90 },
        { name: "Under 165.5", odds: 1.90 },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-sm text-muted-foreground mb-4">
          {match.league} • {match.date} • {match.time}
        </div>
        
        <Card className="card-gradient border-0 overflow-hidden mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center md:text-left flex-1">
                <div className="h-24 w-24 mx-auto md:mx-0 bg-muted/30 rounded-full p-4 mb-4">
                  <img src={match.team1Logo} alt={match.team1} className="w-full h-full" />
                </div>
                <h2 className="text-2xl font-bold mb-2">{match.team1}</h2>
                <Badge variant="outline" className="bg-primary/20 text-primary">
                  Odds: 1.85
                </Badge>
              </div>
              
              <div className="text-center">
                <Badge variant="outline" className="mb-2 text-lg px-4 py-2">VS</Badge>
                <div className="text-muted-foreground text-sm">{match.venue}</div>
              </div>
              
              <div className="text-center md:text-right flex-1">
                <div className="h-24 w-24 mx-auto md:ml-auto bg-muted/30 rounded-full p-4 mb-4">
                  <img src={match.team2Logo} alt={match.team2} className="w-full h-full" />
                </div>
                <h2 className="text-2xl font-bold mb-2">{match.team2}</h2>
                <Badge variant="outline" className="bg-primary/20 text-primary">
                  Odds: 2.10
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bettingOptions.map((option) => (
            <Card key={option.id} className="card-gradient border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  {option.title}
                </h3>
                
                <div className="space-y-3">
                  {option.options.map((bet, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
                      <span className="font-medium">{bet.name}</span>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="bg-primary/20 text-primary">
                          {bet.odds}
                        </Badge>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default GameDetail;
