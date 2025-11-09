import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BookOpen, Users2, Briefcase, DollarSign, Award } from "lucide-react";

const Programs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const programs = [
    {
      icon: BookOpen,
      title: "Student Ambassador Program",
      description: "Lead innovation initiatives on campus, organize events, and represent GRID across the student community.",
      features: ["Leadership training", "Networking events", "Exclusive perks"],
    },
    {
      icon: Users2,
      title: "Idea Open House",
      description: "Pitch your ideas in a supportive environment and get instant feedback from mentors and fellow founders.",
      features: ["Weekly pitch sessions", "Expert feedback", "Peer collaboration"],
    },
    {
      icon: Briefcase,
      title: "Mentorship Clinics",
      description: "One-on-one sessions with industry experts, successful founders, and domain specialists.",
      features: ["Personalized guidance", "Industry insights", "Strategy sessions"],
    },
    {
      icon: DollarSign,
      title: "Funding Support",
      description: "Connect with angel investors, VCs, and government grants to fuel your startup journey.",
      features: ["Investor introductions", "Grant assistance", "Pitch deck reviews"],
    },
    {
      icon: Award,
      title: "Alumni Network",
      description: "Join a thriving community of successful founders and industry leaders for lifelong support.",
      features: ["Alumni mentorship", "Job opportunities", "Collaboration deals"],
    },
  ];

  return (
    <section id="programs" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <span className="text-sm font-semibold text-secondary">Programs & Opportunities</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Your Path to{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Startup Success
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From ideation to funding, we offer comprehensive programs designed to support every stage of your entrepreneurial journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl bg-gradient-card backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-accent">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <program.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {program.description}
                </p>

                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <button className="px-8 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-glow">
            Explore All Programs
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
