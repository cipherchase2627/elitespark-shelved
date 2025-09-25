import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Skull } from "lucide-react";
import heroImage from "@/assets/hero-creepy.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Dark romantic connections" 
          className="w-full h-full object-cover opacity-40 animate-flicker"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-40 left-20 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-glow" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/10 backdrop-blur-sm rounded-full border border-destructive/30 mb-8">
            <Skull className="w-4 h-4 text-destructive animate-pulse" />
            <span className="text-sm text-muted-foreground animate-glitch">Dating Experiment α-7.2</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent animate-glitch">
            Find Your
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent animate-flicker">
              Perfect Match?
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            An experimental dating algorithm that learns your deepest desires. 
            <span className="text-destructive animate-pulse">Warning: Results may vary. Side effects unknown.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="min-w-48 text-lg">
              Join Experiment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="creepy" size="lg" className="min-w-48 text-lg">
              [REDACTED]
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-12 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-destructive animate-pulse" />
              <span className="text-sm">??? Matches</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-destructive animate-flicker" />
              <span className="text-sm">ERROR</span>
            </div>
            <div className="flex items-center gap-2">
              <Skull className="w-5 h-5 text-destructive animate-glitch" />
              <span className="text-sm">AI-Powered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}