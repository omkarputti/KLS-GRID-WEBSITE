import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const StartupsPage = () => {
  const startups = [
    { name: "TechVenture", domain: "AI & ML", status: "Funded" },
    { name: "EduLearn", domain: "EdTech", status: "Growing" },
    { name: "GreenSolutions", domain: "Sustainability", status: "Incubating" },
    { name: "HealthFirst", domain: "HealthTech", status: "Funded" },
    { name: "FinFlow", domain: "FinTech", status: "Growing" },
    { name: "AgriTech Pro", domain: "AgriTech", status: "Incubating" },
    { name: "DevTools", domain: "SaaS", status: "Funded" },
    { name: "SocialHub", domain: "Social", status: "Growing" },
    { name: "CloudStore", domain: "Cloud", status: "Funded" },
    { name: "AutoDrive", domain: "Automotive", status: "Incubating" },
    { name: "FoodTech", domain: "Food & Beverage", status: "Growing" },
    { name: "RetailNext", domain: "E-commerce", status: "Funded" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Funded":
        return "bg-green-100 text-green-800";
      case "Growing":
        return "bg-blue-100 text-blue-800";
      case "Incubating":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">GRID Startups</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Meet the innovative companies being built by student founders at KLS GRID. These teams are tackling important problems across diverse industries.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {startups.map((startup, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-lg p-6 hover:shadow-md transition-all hover:scale-105 cursor-pointer"
            >
              <div className="h-32 flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground mb-2">{startup.name}</div>
                  <div className="text-sm text-muted-foreground">{startup.domain}</div>
                </div>
              </div>
              <div className="flex justify-center">
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(startup.status)}`}>
                  {startup.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            We help founders <span className="text-primary">make something people want</span> and the results speak for themselves.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">₹50L+</div>
              <div className="text-muted-foreground">Total Funding Raised</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Students Impacted</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Active Projects</div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default StartupsPage;
