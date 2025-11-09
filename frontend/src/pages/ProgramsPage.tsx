import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const ProgramsPage = () => {
  const programs = [
    {
      title: "Student Ambassador Program",
      description: "Become a campus champion for entrepreneurship. Lead workshops, organize events, and help fellow students discover their startup potential.",
      duration: "Year-round",
    },
    {
      title: "Idea Open House",
      description: "Weekly sessions where students pitch ideas, get feedback, and find co-founders. No idea is too early or too crazy.",
      duration: "Weekly",
    },
    {
      title: "Mentorship Clinics",
      description: "One-on-one sessions with experienced founders and industry experts to tackle your specific challenges.",
      duration: "Bi-weekly",
    },
    {
      title: "Incubation Program",
      description: "12-week intensive program for selected teams. Get workspace, mentorship, technical support, and funding opportunities.",
      duration: "12 weeks",
    },
    {
      title: "Funding Support",
      description: "Connect with angel investors, VCs, and apply for government grants. We help you navigate the fundraising landscape.",
      duration: "Ongoing",
    },
    {
      title: "Alumni Network",
      description: "Tap into a powerful network of successful GRID alumni who can advise, invest, and open doors for your startup.",
      duration: "Lifetime",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Programs & Opportunities</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            From your first idea to your first funding round, we offer structured programs and resources to support you at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Card key={index} className="p-6 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <div className="text-xs font-semibold text-primary mb-2">{program.duration}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{program.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {program.description}
              </p>
            </Card>
          ))}
        </div>

        <section className="mt-20">
          <h2 className="text-3xl font-bold text-foreground mb-8">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold mb-2">Apply</h3>
              <p className="text-sm text-muted-foreground">Fill out our simple application form with your idea.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold mb-2">Interview</h3>
              <p className="text-sm text-muted-foreground">Have a conversation with our team about your vision.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold mb-2">Onboard</h3>
              <p className="text-sm text-muted-foreground">Get oriented with resources, mentors, and the community.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-bold mb-2">Build</h3>
              <p className="text-sm text-muted-foreground">Start building with full GRID support behind you.</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ProgramsPage;
