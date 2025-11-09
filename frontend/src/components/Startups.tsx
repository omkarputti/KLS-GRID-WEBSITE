import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const Startups = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const startups = [
    {
      name: "TechFlow AI",
      domain: "Artificial Intelligence",
      description: "Building intelligent automation tools for enterprise workflows",
      stage: "Series A",
      color: "from-primary to-accent",
    },
    {
      name: "EcoCharge",
      domain: "Clean Energy",
      description: "Next-gen sustainable battery solutions for electric vehicles",
      stage: "Seed",
      color: "from-accent to-secondary",
    },
    {
      name: "HealthSync",
      domain: "HealthTech",
      description: "AI-powered health monitoring and telemedicine platform",
      stage: "Pre-Seed",
      color: "from-secondary to-primary",
    },
    {
      name: "EduVerse",
      domain: "EdTech",
      description: "Immersive learning experiences using AR/VR technology",
      stage: "Seed",
      color: "from-primary to-secondary",
    },
    {
      name: "FinanceOS",
      domain: "FinTech",
      description: "Smart financial management for SMEs and startups",
      stage: "Series A",
      color: "from-accent to-primary",
    },
    {
      name: "AgroTech Labs",
      domain: "AgriTech",
      description: "IoT-driven precision farming and crop analytics",
      stage: "Pre-Seed",
      color: "from-secondary to-accent",
    },
  ];

  return (
    <section id="startups" className="py-24 lg:py-32 relative overflow-hidden bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="text-sm font-semibold text-accent">Our Portfolio</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Startups{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Shaping Tomorrow
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From AI to AgriTech, our founders are building solutions that matter across diverse industries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {startups.map((startup, index) => (
            <motion.div
              key={startup.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full p-6 bg-gradient-card backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-2 cursor-pointer">
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${startup.color} flex items-center justify-center text-2xl font-bold text-primary-foreground`}>
                    {startup.name.charAt(0)}
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {startup.name}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 mb-3">
                      <TrendingUp className="w-3 h-3 text-primary" />
                      <span className="text-xs font-medium text-primary">{startup.stage}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-accent">{startup.domain}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {startup.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-glow">
            View All Startups
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Startups;
