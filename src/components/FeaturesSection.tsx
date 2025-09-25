import { Brain, Shield, Calendar, Trophy, Users, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "AI Compatibility Engine",
    description: "Advanced algorithms analyze career trajectories, values, and lifestyle preferences to find your perfect professional match.",
    color: "text-purple-400"
  },
  {
    icon: Shield,
    title: "Verified Professionals",
    description: "LinkedIn integration ensures authentic profiles. Connect only with verified professionals in your industry and beyond.",
    color: "text-blue-400"
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Intelligent calendar integration finds optimal meeting times that work for both busy professional schedules.",
    color: "text-green-400"
  },
  {
    icon: Trophy,
    title: "Achievement Matching",
    description: "Connect with professionals who share similar career milestones, ambitions, and success metrics.",
    color: "text-yellow-400"
  },
  {
    icon: Users,
    title: "Industry Networks",
    description: "Join exclusive groups based on your field, company tier, or professional interests for targeted networking.",
    color: "text-pink-400"
  },
  {
    icon: Zap,
    title: "InstantConnect",
    description: "Skip the small talk with conversation starters based on shared professional experiences and interests.",
    color: "text-cyan-400"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Innovation Meets
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Intimacy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionary features designed specifically for the modern professional's dating journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card/50 backdrop-blur-sm border-card/20 hover:shadow-card-custom transition-spring hover:scale-105 group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-primary/10 flex items-center justify-center mb-6 group-hover:shadow-glow transition-smooth`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}