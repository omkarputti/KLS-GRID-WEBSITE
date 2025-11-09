import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const ResourcesPage = () => {
  const resources = [
    {
      category: "Getting Started",
      items: [
        "How to Validate Your Idea",
        "Finding a Co-Founder",
        "MVP Development Guide",
        "First 100 Users Playbook",
      ],
    },
    {
      category: "Product & Tech",
      items: [
        "Product Development Frameworks",
        "Tech Stack Selection",
        "Design Resources",
        "Development Tools",
      ],
    },
    {
      category: "Business & Strategy",
      items: [
        "Business Model Templates",
        "Pricing Strategies",
        "Market Research Tools",
        "Competitive Analysis",
      ],
    },
    {
      category: "Growth & Marketing",
      items: [
        "Growth Hacking Techniques",
        "Content Marketing Guide",
        "Social Media Strategies",
        "SEO Fundamentals",
      ],
    },
    {
      category: "Fundraising",
      items: [
        "Pitch Deck Templates",
        "Investor Database",
        "Term Sheet Guide",
        "Grant Applications",
      ],
    },
    {
      category: "Legal & Operations",
      items: [
        "Company Registration",
        "Founder Agreements",
        "IP Protection",
        "Compliance Checklist",
      ],
    },
  ];

  const tools = [
    "Workspace Access",
    "Cloud Credits (AWS, GCP)",
    "Design Tools (Figma, Adobe)",
    "Development Tools",
    "Legal Templates",
    "Accounting Software",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Resources</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Everything you need to build a successful startup, from idea validation to fundraising and beyond.
          </p>
        </div>

        <section className="mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-8">Knowledge Library</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((section, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-bold text-foreground mb-4">{section.category}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                      → {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-8">Tools & Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool, index) => (
              <div key={index} className="bg-secondary p-4 rounded-lg flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">{tool}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-secondary rounded-lg p-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Weekly Workshops</h2>
          <p className="text-muted-foreground mb-6">
            Join our weekly workshops covering various aspects of building a startup. Open to all GRID members.
          </p>
          <div className="space-y-3">
            <div className="bg-background p-4 rounded-lg flex justify-between items-center">
              <div>
                <div className="font-semibold text-foreground">Product Development Workshop</div>
                <div className="text-sm text-muted-foreground">Every Tuesday, 5:00 PM</div>
              </div>
              <span className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full">Weekly</span>
            </div>
            <div className="bg-background p-4 rounded-lg flex justify-between items-center">
              <div>
                <div className="font-semibold text-foreground">Pitch Practice Sessions</div>
                <div className="text-sm text-muted-foreground">Every Thursday, 4:00 PM</div>
              </div>
              <span className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full">Weekly</span>
            </div>
            <div className="bg-background p-4 rounded-lg flex justify-between items-center">
              <div>
                <div className="font-semibold text-foreground">Founder Office Hours</div>
                <div className="text-sm text-muted-foreground">Every Friday, 3:00 PM</div>
              </div>
              <span className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full">Weekly</span>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ResourcesPage;
