import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Startups from "@/components/Startups";
import Programs from "@/components/Programs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-['Inter',sans-serif]">
      <Navbar />
      <Hero />
      <About />
      <Startups />
      <Programs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
