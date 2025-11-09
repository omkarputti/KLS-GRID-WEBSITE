import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ApplyPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    idea: "",
    stage: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you within 2 weeks.",
    });
    setFormData({ name: "", email: "", phone: "", idea: "", stage: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Apply to GRID</h1>
          <p className="text-xl text-muted-foreground">
            Tell us about your idea and why you want to join KLS GRID. We read every application carefully.
          </p>
        </div>

        <div className="bg-secondary rounded-lg p-8 mb-8">
          <h2 className="text-xl font-bold text-foreground mb-4">What We Look For</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary">✓</span>
              <span><strong>Passionate founders</strong> who are determined to solve real problems</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">✓</span>
              <span><strong>Clear vision</strong> of what you want to build and why it matters</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">✓</span>
              <span><strong>Willingness to learn</strong> and take feedback from mentors and peers</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">✓</span>
              <span><strong>Commitment</strong> to building something that makes a real impact</span>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Full Name *
            </label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Email *
            </label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Phone Number *
            </label>
            <Input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 12345 67890"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              What stage is your startup? *
            </label>
            <select
              name="stage"
              value={formData.stage}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              required
            >
              <option value="">Select stage</option>
              <option value="idea">Just an idea</option>
              <option value="prototype">Working on prototype</option>
              <option value="mvp">Have an MVP</option>
              <option value="users">Have users</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Tell us about your idea *
            </label>
            <Textarea
              name="idea"
              value={formData.idea}
              onChange={handleChange}
              placeholder="What problem are you solving? What's your solution? Why are you passionate about this?"
              rows={8}
              required
            />
            <p className="text-xs text-muted-foreground mt-2">
              Don't worry about making it perfect. We just want to understand your thinking.
            </p>
          </div>

          <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Submit Application
          </Button>
        </form>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>Questions? Email us at <a href="mailto:grid@git.edu" className="text-primary hover:underline">grid@git.edu</a></p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ApplyPage;
