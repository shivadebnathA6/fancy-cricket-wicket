
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Clock } from "lucide-react";

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
  },
];

const LiveMatches = () => {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Clock className="text-primary" />
        Live Matches
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {matches.map((match) => (
          <Card key={match.id} className="bg-secondary hover:bg-secondary/90 transition-colors cursor-pointer">
            <CardHeader>
              <CardTitle className="text-lg flex justify-between items-center">
                <span>Live</span>
                <span className="text-primary">{match.overs} overs</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="font-medium">{match.team1}</p>
                  <p className="text-xl font-bold text-primary">{match.score1}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{match.team2}</p>
                  <p className="text-xl font-bold text-primary">{match.score2}</p>
                </div>
              </div>
              <div className="flex justify-between mt-4 text-sm">
                <span className="bg-accent px-3 py-1 rounded-full">
                  {match.odds1}
                </span>
                <span className="bg-accent px-3 py-1 rounded-full">
                  {match.odds2}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LiveMatches;
