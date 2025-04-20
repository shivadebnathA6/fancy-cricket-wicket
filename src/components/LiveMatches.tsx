
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Clock, TrendingUp, Play } from "lucide-react";
import { Button } from "./ui/button";

const matches = [
  {
    id: 1,
    team1: "Mumbai Indians",
    team2: "Chennai Super Kings",
    score1: "186/4",
    score2: "120/2",
    overs: "15.2",
    odds1: 1.85,
    odds2: 2.10,
    logo1: "/placeholder.svg",
    logo2: "/placeholder.svg",
    trending: true,
    prediction: "Mumbai Indians",
  },
  {
    id: 2,
    team1: "Royal Challengers",
    team2: "Delhi Capitals",
    score1: "167/6",
    score2: "89/3",
    overs: "12.4",
    odds1: 1.65,
    odds2: 2.45,
    logo1: "/placeholder.svg",
    logo2: "/placeholder.svg",
    prediction: "Delhi Capitals",
  },
];

const LiveMatches = () => {
  return (
    <div className="py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-foreground flex items-center gap-2">
          <Clock className="text-primary h-7 w-7" />
          <span>Live <span className="text-primary">Matches</span></span>
        </h2>
        <a href="/live" className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
          View All Live Matches →
        </a>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {matches.map((match) => (
          <Card key={match.id} className="card-gradient card-hover overflow-hidden border-0 rounded-xl">
            <CardHeader className="pb-0">
              <div className="flex justify-between items-center">
                <Badge variant="secondary" className="bg-muted/50 hover:bg-muted text-foreground flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse-slow"></span>
                  Live
                </Badge>
                <Badge variant="outline" className="border-primary/30 text-primary">
                  {match.overs} overs
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="p-5">
              <div className="flex justify-between items-center mb-6">
                <div className="text-center space-y-2">
                  <div className="h-16 w-16 mx-auto bg-muted/30 rounded-full p-2 flex items-center justify-center">
                    <img src={match.logo1} alt={match.team1} className="h-10 w-10" />
                  </div>
                  <p className="font-medium text-sm">{match.team1}</p>
                  <p className="text-2xl font-bold text-primary">{match.score1}</p>
                </div>
                
                <div className="text-center">
                  <span className="text-lg font-bold text-muted-foreground">VS</span>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="h-16 w-16 mx-auto bg-muted/30 rounded-full p-2 flex items-center justify-center">
                    <img src={match.logo2} alt={match.team2} className="h-10 w-10" />
                  </div>
                  <p className="font-medium text-sm">{match.team2}</p>
                  <p className="text-2xl font-bold text-primary">{match.score2}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center my-4">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-1">Odds</p>
                  <Badge variant="outline" className="bg-muted/20 hover:bg-muted/40 font-mono">
                    {match.odds1}
                  </Badge>
                </div>
                
                {match.trending && (
                  <div className="text-center">
                    <Badge variant="outline" className="bg-muted/20 hover:bg-muted/40 text-primary">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      High Activity
                    </Badge>
                  </div>
                )}
                
                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-1">Odds</p>
                  <Badge variant="outline" className="bg-muted/20 hover:bg-muted/40 font-mono">
                    {match.odds2}
                  </Badge>
                </div>
              </div>
              
              <div className="mt-5 flex justify-between gap-3">
                <div className="text-xs text-muted-foreground">
                  AI Prediction: <span className="text-primary font-medium">{match.prediction}</span>
                </div>
                <Button variant="default" size="sm" className="px-4 rounded-full gap-1">
                  <Play className="h-3 w-3" /> 
                  <span>Bet Now</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LiveMatches;
