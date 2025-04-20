
import Navbar from "@/components/Navbar";
import FeaturedLeagues from "@/components/FeaturedLeagues";
import LiveMatches from "@/components/LiveMatches";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Star, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="relative overflow-hidden py-12 mb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                <span className="text-primary text-glow">Premium</span> Cricket Betting Experience
              </h1>
              <p className="text-muted-foreground text-lg max-w-lg">
                Join millions of fans in the world's most exciting cricket betting platform with real-time odds and exclusive bonuses.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button size="lg" className="rounded-full">Get Started</Button>
                <Button size="lg" variant="outline" className="rounded-full">View Matches</Button>
              </div>
              
              <div className="flex gap-6 pt-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">150+</span>
                  <span className="text-muted-foreground text-sm">Matches</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">30+</span>
                  <span className="text-muted-foreground text-sm">Leagues</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">2M+</span>
                  <span className="text-muted-foreground text-sm">Users</span>
                </div>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/30 to-accent/20 opacity-70 blur-lg"></div>
              <Card className="card-gradient overflow-hidden rounded-2xl border-0 relative">
                <CardContent className="p-0">
                  <img 
                    src="/placeholder.svg" 
                    alt="Cricket Stadium" 
                    className="w-full h-80 object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-card/80 backdrop-blur-sm p-4 rounded-xl">
                      <h3 className="text-lg font-bold mb-2">IPL 2025 Finals</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Don't miss the biggest cricket event of the year!
                      </p>
                      <div className="flex justify-between">
                        <span className="text-primary text-sm font-medium">Starting April 2025</span>
                        <Button variant="default" size="sm" className="rounded-full">
                          Place Bet
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <main className="container mx-auto px-4">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Card className="card-gradient card-hover border-0 w-full max-w-xs rounded-xl">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold">Best Odds</h3>
                <p className="text-sm text-muted-foreground">Competitive pricing</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-gradient card-hover border-0 w-full max-w-xs rounded-xl">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold">VIP Benefits</h3>
                <p className="text-sm text-muted-foreground">Exclusive rewards</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-gradient card-hover border-0 w-full max-w-xs rounded-xl">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold">24/7 Live Betting</h3>
                <p className="text-sm text-muted-foreground">Never miss a match</p>
              </div>
            </CardContent>
          </Card>
        </div>
      
        <FeaturedLeagues />
        <LiveMatches />
      </main>
    </div>
  );
};

export default Index;
