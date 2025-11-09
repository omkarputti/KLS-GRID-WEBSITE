import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import gridLogo from "@/assets/grid-logo.webp";

const Footer = () => {
  const footerLinks = {
    Company: [
      { label: "About GRID", href: "/about" },
      { label: "Programs", href: "/programs" },
      { label: "Startups", href: "/startups" },
      { label: "Mentors", href: "/mentors" },
    ],
    Resources: [
      { label: "Knowledge Library", href: "/resources" },
      { label: "Apply", href: "/apply" },
      { label: "Contact", href: "/contact" },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:grid@git.edu", label: "Email" },
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src={gridLogo} alt="KLS GRID" className="h-12 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              KLS GRID is the premier student startup incubator at KLS GIT, empowering the next generation of founders to build breakthrough companies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-background rounded-lg"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-6 text-foreground text-sm uppercase tracking-wide">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} KLS GRID. All rights reserved.</p>
          <p className="font-medium">Built with ❤️ at GIT</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
