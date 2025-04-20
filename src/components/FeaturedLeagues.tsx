
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const leagues = [
  { id: 1, name: "IPL 2025", matches: 60, image: "/placeholder.svg" },
  { id: 2, name: "Big Bash League", matches: 45, image: "/placeholder.svg" },
  { id: 3, name: "T20 World Cup", matches: 45, image: "/placeholder.svg" },
];

const FeaturedLeagues = () => {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6">Featured Leagues</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {leagues.map((league) => (
          <Card key={league.id} className="bg-secondary hover:bg-secondary/90 transition-colors cursor-pointer">
            <CardHeader>
              <img src={league.image} alt={league.name} className="w-full h-40 object-cover rounded-t-lg" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg mb-2">{league.name}</CardTitle>
              <p className="text-muted-foreground">{league.matches} matches</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedLeagues;
