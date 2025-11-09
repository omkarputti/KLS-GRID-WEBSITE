import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Have questions? Want to learn more? Get in touch with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Email</div>
                  <a href="mailto:grid@git.edu" className="text-primary hover:underline">
                    grid@git.edu
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Phone</div>
                  <a href="tel:+918362406000" className="text-muted-foreground">
                    +91 836 240 6000
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Address</div>
                  <p className="text-muted-foreground">
                    KLS Gogte Institute of Technology<br />
                    Belagavi, Karnataka 590008<br />
                    India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-secondary rounded-lg">
              <h3 className="font-bold text-foreground mb-2">Office Hours</h3>
              <p className="text-sm text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 2:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Visit Us</h2>
            <div className="bg-secondary rounded-lg overflow-hidden" style={{ height: "400px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.8867847364385!2d74.50726431484044!3d15.854681388976735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf66e4fbf48a01%3A0x98d758f702e00d0c!2sKLS%20Gogte%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KLS GIT Location"
              ></iframe>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Visit our campus to see the innovation hub in action. Schedule a tour by emailing us in advance.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
