import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "User #47291",
    role: "Test Subject",
    content: "I tried the app and now I can't stop thinking about someone I've never met. Is this normal? Please help.",
    rating: 3,
    initials: "??",
    company: "[DATA CORRUPTED]",
    status: "ACTIVE"
  },
  {
    name: "[REDACTED]",
    role: "Former User",
    content: "The algorithm knows things about me that I don't even know about myself. It's terrifying... but effective?",
    rating: 4,
    initials: "XX",
    company: "N/A",
    status: "MISSING"
  },
  {
    name: "Anonymous",
    role: "Beta Tester",
    content: "Found love on day 1. We're getting married next week. We've never spoken but the app says we're compatible. Trust the algorithm.",
    rating: 5,
    initials: "A1",
    company: "ERROR 404",
    status: "UNKNOWN"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            User Reports
            <span className="bg-gradient-secondary bg-clip-text text-transparent animate-flicker"> [UNVERIFIED]</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Anonymous testimonials from our test subjects. Names have been changed to protect... something.
            <span className="text-destructive animate-pulse"> Individual results may vary wildly.</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`p-8 bg-card/80 backdrop-blur-sm border-card/30 hover:shadow-creepy transition-spring hover:-translate-y-2 relative overflow-hidden ${
                testimonial.status === 'MISSING' ? 'animate-flicker' : 
                testimonial.status === 'UNKNOWN' ? 'animate-glitch' : ''
              }`}
            >
              {/* Status Badge */}
              <div className={`absolute top-4 left-4 px-2 py-1 text-xs rounded border ${
                testimonial.status === 'MISSING' ? 'bg-destructive/20 text-destructive border-destructive/50 animate-pulse' :
                testimonial.status === 'UNKNOWN' ? 'bg-primary/20 text-primary border-primary/50 animate-glitch' :
                'bg-muted/20 text-muted-foreground border-muted/50'
              }`}>
                {testimonial.status}
              </div>
              
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Content */}
              <blockquote className={`text-foreground leading-relaxed mb-6 text-lg ${
                testimonial.status === 'MISSING' ? 'line-through opacity-70' : ''
              }`}>
                "{testimonial.content}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <Avatar className={`w-12 h-12 bg-gradient-primary ${
                  testimonial.status === 'UNKNOWN' ? 'animate-glitch' : ''
                }`}>
                  <AvatarFallback className="text-primary-foreground font-medium">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                
                <div>
                  <div className={`font-semibold text-foreground ${
                    testimonial.status === 'MISSING' ? 'blur-sm' : ''
                  }`}>{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className={`text-xs text-destructive ${
                    testimonial.status === 'UNKNOWN' ? 'animate-pulse' : ''
                  }`}>{testimonial.company}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}