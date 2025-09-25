import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Verified professional profiles only",
  "AI-powered compatibility matching",
  "Exclusive industry networking events",
  "Premium privacy & security features"
];

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-8">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm text-primary font-medium">Limited Beta Access</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Ready to Redefine
          <br />
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Professional Dating?
          </span>
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Join the exclusive beta and be among the first professionals to experience 
          the future of meaningful connections.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3 text-left">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground">{benefit}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="min-w-64 text-lg font-semibold">
            Request Beta Access
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="glass" size="lg" className="min-w-48">
            Learn More
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground mt-8">
          By requesting access, you join 2,500+ professionals on our waitlist
        </p>
      </div>
    </section>
  );
}