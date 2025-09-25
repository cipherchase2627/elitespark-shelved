import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Engineering, TechCorp",
    content: "Finally, a dating platform that understands the demands of a professional lifestyle. Met my partner through shared industry connections.",
    rating: 5,
    initials: "SC",
    company: "Fortune 500"
  },
  {
    name: "Marcus Rodriguez",
    role: "Investment Director",
    content: "The AI matching is incredibly sophisticated. It connected me with someone who not only shares my values but also complements my career ambitions.",
    rating: 5,
    initials: "MR",
    company: "Goldman Sachs"
  },
  {
    name: "Dr. Emily Watson",
    role: "Chief Medical Officer",
    content: "As a busy healthcare executive, I needed something more targeted than traditional apps. This platform delivered exactly what I was looking for.",
    rating: 5,
    initials: "EW",
    company: "Johns Hopkins"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Success Stories from
            <span className="bg-gradient-secondary bg-clip-text text-transparent"> Elite Professionals</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real connections from real professionals who found meaningful relationships through our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/80 backdrop-blur-sm border-card/30 hover:shadow-elegant transition-spring hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Content */}
              <blockquote className="text-foreground leading-relaxed mb-6 text-lg">
                "{testimonial.content}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12 bg-gradient-primary">
                  <AvatarFallback className="text-primary-foreground font-medium">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-primary">{testimonial.company}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}