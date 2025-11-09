import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const MentorsPage = () => {
  const mentors = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Serial Entrepreneur",
      expertise: "Product Development, Fundraising",
    },
    {
      name: "Priya Sharma",
      role: "VP Engineering, Tech Corp",
      expertise: "Technology, Scaling Teams",
    },
    {
      name: "Amit Patel",
      role: "Founder, StartupXYZ",
      expertise: "Go-to-Market, Sales",
    },
    {
      name: "Neha Singh",
      role: "Angel Investor",
      expertise: "Business Strategy, Networking",
    },
    {
      name: "Vikram Reddy",
      role: "Product Manager, Fortune 500",
      expertise: "Product Management, UX",
    },
    {
      name: "Anita Desai",
      role: "Marketing Director",
      expertise: "Growth Marketing, Branding",
    },
  ];

  const alumni = [
    {
      name: "Rohan Verma",
      company: "TechVenture",
      achievement: "Raised ₹20L seed funding",
    },
    {
      name: "Sneha Kulkarni",
      company: "EduLearn",
      achievement: "10K+ active users",
    },
    {
      name: "Arjun Nair",
      company: "GreenSolutions",
      achievement: "Won National Innovation Award",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-20">
          <h1 className="text-4xl font-bold text-foreground mb-4">Mentors</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-12">
            Learn from experienced founders, investors, and industry leaders who are committed to helping you succeed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((mentor, index) => (
              <Card key={index} className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-2xl font-bold text-primary mb-4">
                  {mentor.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{mentor.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{mentor.role}</p>
                <p className="text-xs text-primary">{mentor.expertise}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-4">Alumni Network</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mb-12">
            GRID alumni are building successful companies and giving back to the community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {alumni.map((alum, index) => (
              <Card key={index} className="p-6 bg-secondary">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-xl font-bold text-primary mb-4">
                  {alum.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="font-bold text-foreground mb-1">{alum.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{alum.company}</p>
                <p className="text-xs text-primary">✓ {alum.achievement}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-secondary rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Want to Mentor?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            If you're an experienced founder, investor, or industry expert who wants to give back to the next generation, we'd love to have you join our mentor network.
          </p>
          <a 
            href="mailto:grid@git.edu" 
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default MentorsPage;
