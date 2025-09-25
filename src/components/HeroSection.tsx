import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-dating.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional networking and dating" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-40 left-20 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-glow" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/10 backdrop-blur-sm rounded-full border border-card/20 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Professional Dating Reimagined</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Where Careers
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Meet Hearts
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            The first dating platform designed for ambitious professionals. 
            Connect with like-minded individuals who share your drive for success and meaningful relationships.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="min-w-48 text-lg">
              Join Elite Network
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="glass" size="lg" className="min-w-48 text-lg">
              Watch Demo
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-12 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              <span className="text-sm">10K+ Matches</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm">500+ Companies</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm">AI-Powered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}