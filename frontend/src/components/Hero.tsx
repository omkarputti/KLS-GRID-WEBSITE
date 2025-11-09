import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gridInauguration from "@/assets/grid-inauguration.png";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${gridInauguration})` }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Where ideas turn into{" "}
            <span className="text-primary">startups</span>.
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            KLS GRID is the premier student startup incubator at KLS GIT, empowering the next generation of founders.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/apply">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 h-12 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
              >
                Join GRID
              </Button>
            </Link>
            <Link to="/startups">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 h-12 rounded-lg font-semibold border-gray-400 text-black bg-white hover:scale-105 transition-transform"
              >
                View Startups
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
