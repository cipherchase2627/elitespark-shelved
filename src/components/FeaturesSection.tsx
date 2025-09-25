import { Brain, Shield, Calendar, AlertTriangle, Users, Zap, Eye, Bug } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "Mind Reading Algorithm",
    description: "Advanced neural networks that analyze your browsing patterns, sleep schedule, and... other data. Privacy? What's that?",
    color: "text-red-400",
    status: "PROTOTYPE"
  },
  {
    icon: Eye,
    title: "Always Watching",
    description: "24/7 monitoring of user activity. We know when you're online, when you're not, and when you're thinking about someone...",
    color: "text-purple-400",
    status: "BETA"
  },
  {
    icon: Calendar,
    title: "Destiny Scheduler",
    description: "Our AI predicts when you'll fall in love. Sometimes it's wrong. Sometimes it makes it happen anyway.",
    color: "text-yellow-400",
    status: "ERROR"
  },
  {
    icon: AlertTriangle,
    title: "Red Flag Detector",
    description: "Identifies potential red flags in matches. Warning: May create false positives. Or false negatives. We're not sure which is worse.",
    color: "text-orange-400",
    status: "UNSTABLE"
  },
  {
    icon: Bug,
    title: "Glitch Matching",
    description: "Sometimes the algorithm breaks and matches you with... interesting people. This feature may or may not be intentional.",
    color: "text-green-400",
    status: "???"
  },
  {
    icon: Zap,
    title: "[CLASSIFIED]",
    description: "This feature is currently under development. Do not ask about it. Do not mention it. It doesn't exist.",
    color: "text-gray-400",
    status: "REDACTED"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experimental Features
            <span className="bg-gradient-primary bg-clip-text text-transparent animate-glitch"> [UNSTABLE]</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Warning: These features are in active development. Use at your own risk. 
            <span className="text-destructive animate-pulse">Side effects may include: obsession, heartbreak, or worse.</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card/50 backdrop-blur-sm border-card/20 hover:shadow-creepy transition-spring hover:scale-105 group relative overflow-hidden"
            >
              {/* Status Badge */}
              <div className={`absolute top-4 right-4 px-2 py-1 text-xs rounded border ${
                feature.status === 'ERROR' ? 'bg-destructive/20 text-destructive border-destructive/50 animate-pulse' :
                feature.status === 'REDACTED' ? 'bg-muted/20 text-muted-foreground border-muted/50 animate-flicker' :
                feature.status === '???' ? 'bg-primary/20 text-primary border-primary/50 animate-glitch' :
                'bg-muted/20 text-muted-foreground border-muted/50'
              }`}>
                {feature.status}
              </div>
              
              <div className={`w-12 h-12 rounded-lg bg-gradient-primary/10 flex items-center justify-center mb-6 group-hover:shadow-glow transition-smooth ${
                feature.status === 'ERROR' ? 'animate-glitch' : 
                feature.status === 'REDACTED' ? 'animate-flicker' : ''
              }`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              
              <h3 className={`text-xl font-semibold mb-4 text-foreground ${
                feature.status === 'REDACTED' ? 'blur-sm' : ''
              }`}>
                {feature.title}
              </h3>
              
              <p className={`text-muted-foreground leading-relaxed ${
                feature.status === 'REDACTED' ? 'blur-sm' : ''
              }`}>
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}