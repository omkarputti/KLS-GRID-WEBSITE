import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Case } from "@/components/ui/cases-with-infinite-scroll";
import { useLenisScroll } from "@/hooks/useLenisScroll";
import gridInauguration from "@/assets/grid-inaugration.webp";
import { Lightbulb, Users, Rocket, Award } from "lucide-react";
import founders1 from "@/assets/founders-1.webp";
import founders2 from "@/assets/founders-2.webp";
import founders3 from "@/assets/founders-3.webp";


const Home = () => {
  useLenisScroll();

  const stats = [
    { value: "10+", label: "Projects Incubated" },
    { value: "10+", label: "Mentors" },
    { value: "8+", label: "Funded Startups" },
  ];

  const features = [
    {
      icon: Lightbulb,
      title: "Ideation & Validation",
      description: "Transform your ideas into viable products with expert guidance and market validation.",
    },
    {
      icon: Users,
      title: "Mentorship Network",
      description: "Connect with industry veterans and successful founders who've been where you are.",
    },
    {
      icon: Rocket,
      title: "Launch Support",
      description: "From MVP to market fit, we provide resources and support at every stage.",
    },
    {
      icon: Award,
      title: "Funding Access",
      description: "Get connected with investors and learn how to pitch your startup effectively.",
    },
  ];

  const values = [
    "We don't take a board seat.",
    "We don't demand 20% of your company.",
    "We don't take weeks/months to decide to invest.",
    "We don't charge fees.",
    "We don't require decks, business plans, or MBAs.",
    "We don't tell you what to do. We only offer advice.",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with 3D Embed */}
      <Hero />

      {/* Startup Carousel */}
     

      {/* Stats Section */}
      

      {/* Features Grid */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From idea to launch, we provide the resources and support to help you build a successful startup.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-all group"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
<section className="py-24 bg-[#F8F9F6]">
  <div className="max-w-6xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-10 text-center">
        We put <span className="text-[#F26522]">founders' interests</span> first.
      </h2>

      {/* 2 rows x 3 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {values.map((value, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="text-[#F26522] text-xl mt-1.5">●</span>
            <p className="text-lg text-neutral-800 leading-relaxed">{value}</p>
          </div>
        ))}
      </div>

      {/* 3 aligned images */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <img
          src={founders1}
          alt="Founders discussion"
          className="w-full h-[280px] object-cover rounded-xl"
        />
        <img
          src={founders2}
          alt="Startup community event"
          className="w-full h-[280px] object-cover rounded-xl"
        />
        <img
          src={founders3}
          alt="Mentorship session"
          className="w-full h-[280px] object-cover rounded-xl"
        />
      </div>
    </motion.div>
  </div>
</section>


      {/* Community Section */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-16 text-center">
              Hear more from the community
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card p-10 rounded-2xl shadow-md border border-border"
              >
                <p className="text-xl text-foreground italic mb-6 leading-relaxed">
                  "KLS GRID is the best program for creating top-end student entrepreneurs that has ever existed."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    RS
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Rahul Sharma</p>
                    <p className="text-sm text-muted-foreground">Founder, TechVenture</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl overflow-hidden shadow-xl"
              >
                <img 
                  src={gridInauguration} 
                  alt="KLS GRID Inauguration - Faculty, mentors, and students at the launch event" 
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Ready to build the future?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join GRID and transform your idea into a successful startup with support from mentors, resources, and a community of innovators.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/apply">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 h-14 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                  Join GRID
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-lg px-10 h-14 rounded-lg font-semibold">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
