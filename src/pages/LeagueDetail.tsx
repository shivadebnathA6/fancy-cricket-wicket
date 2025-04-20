
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Trophy, Users, ArrowRight } from "lucide-react";

const LeagueDetail = () => {
  const { leagueId } = useParams();

  // Simulated league data
  const league = {
    id: leagueId,
    name: "IPL 2025",
    description: "The most exciting T20 cricket league returns for its 18th season.",
    matches: 60,
    teams: 10,
    startDate: "March 15, 2025",
    prize: "$6.8M",
    image: "/placeholder.svg",
    status: "Upcoming",
  };

  const upcomingMatches = [
    {
      id: 1,
      team1: "Mumbai Indians",
      team2: "Chennai Super Kings",
      date: "March 15, 2025",
      time: "19:30 IST",
      venue: "Wankhede Stadium",
      odds1: 1.85,
      odds2: 2.10,
    },
    {
      id: 2,
      team1: "Royal Challengers",
      team2: "Delhi Capitals",
      date: "March 16, 2025",
      time: "19:30 IST",
      venue: "M. Chinnaswamy Stadium",
      odds1: 1.95,
      odds2: 1.95,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="relative h-[300px] overflow-hidden">
        <img 
          src={league.image} 
          alt={league.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-4xl font-bold mb-2">{league.name}</h1>
                <p className="text-muted-foreground max-w-xl">{league.description}</p>
              </div>
              <Badge variant="outline" className="text-lg px-4 py-2 bg-muted/20">
                Prize Pool: {league.prize}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="card-gradient border-0">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Matches</p>
                <p className="text-2xl font-bold">{league.matches}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-gradient border-0">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Teams</p>
                <p className="text-2xl font-bold">{league.teams}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-gradient border-0">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Start Date</p>
                <p className="text-2xl font-bold">{league.startDate}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Upcoming Matches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingMatches.map((match) => (
              <Link key={match.id} to={`/game/${match.id}`}>
                <Card className="card-gradient card-hover border-0">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {match.date} • {match.time}
                        </span>
                      </div>
                      <Badge variant="outline" className="bg-muted/20">
                        {match.venue}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex-1">
                        <p className="font-medium">{match.team1}</p>
                        <p className="text-sm text-primary">Odds: {match.odds1}</p>
                      </div>
                      
                      <div className="px-4">
                        <span className="text-muted-foreground">VS</span>
                      </div>
                      
                      <div className="flex-1 text-right">
                        <p className="font-medium">{match.team2}</p>
                        <p className="text-sm text-primary">Odds: {match.odds2}</p>
                      </div>
                    </div>
                    
                    <Button variant="ghost" className="w-full mt-4 gap-2">
                      View Match Details
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LeagueDetail;
