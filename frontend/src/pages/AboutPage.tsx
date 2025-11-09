import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">About KLS GRID</h1>
        
        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              KLS GRID (GIT Research, Innovation & Development Centre) is the official startup and innovation hub of KLS Gogte Institute of Technology. We exist to empower student founders to transform their bold ideas into successful companies that make a real impact.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">What We Do</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We provide comprehensive support to student entrepreneurs throughout their startup journey:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary">●</span>
                <span><strong>Mentorship:</strong> Access to experienced founders, industry experts, and alumni who guide you through challenges</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">●</span>
                <span><strong>Resources:</strong> Workspace, technical infrastructure, and tools to build your product</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">●</span>
                <span><strong>Funding Support:</strong> Assistance with seed funding, grants, and investor connections</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">●</span>
                <span><strong>Community:</strong> A vibrant ecosystem of like-minded founders, creating lasting partnerships</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Why GRID Exists</h2>
            <p className="text-muted-foreground leading-relaxed">
              Traditional education often focuses on preparing students for jobs, but we believe in empowering students to create jobs. GRID was founded to bridge the gap between academic learning and real-world entrepreneurship, giving students the tools, network, and confidence to build the next generation of breakthrough companies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="font-bold mb-2">Founder-First</h3>
                <p className="text-sm text-muted-foreground">We prioritize what's best for founders, not what's convenient for us.</p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="font-bold mb-2">Move Fast</h3>
                <p className="text-sm text-muted-foreground">Speed matters. We help you iterate quickly and learn faster.</p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="font-bold mb-2">Think Big</h3>
                <p className="text-sm text-muted-foreground">We encourage moonshot ideas that can change the world.</p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="font-bold mb-2">Community Driven</h3>
                <p className="text-sm text-muted-foreground">Success is shared. We build a supportive, collaborative ecosystem.</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
