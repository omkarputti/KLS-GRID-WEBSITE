import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Lightbulb, Users, Rocket, Target } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const features = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Transform groundbreaking ideas into viable products with cutting-edge technology and strategic guidance.",
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Connect with seasoned entrepreneurs, industry leaders, and domain experts who guide your journey.",
    },
    {
      icon: Rocket,
      title: "Rapid Launch",
      description: "From concept to market in record time with our accelerated incubation programs and resources.",
    },
    {
      icon: Target,
      title: "Market Focus",
      description: "Build products that solve real problems with validated market research and customer insights.",
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-semibold text-primary">About KLS GRID</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Building the Future of{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Student Innovation
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            KLS GRID is GIT's premier Research, Innovation & Development Centre - a vibrant ecosystem where students, founders, and mentors collaborate to create breakthrough startups. We provide the mentorship, resources, and network needed to transform ambitious ideas into market-ready ventures.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl bg-gradient-card backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 lg:p-12 rounded-3xl bg-gradient-card backdrop-blur-sm border border-primary/20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
              To create a thriving innovation ecosystem at KLS GIT where students don't just learn about entrepreneurship - they live it. We're committed to nurturing the next generation of founders who will build India's most impactful startups, backed by world-class mentorship, cutting-edge resources, and an unmatched community of innovators.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
