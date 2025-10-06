import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";

// Calendly Inline Widget Component
const CalendlyEmbed = () => {
  // IMPORTANT: Replace this URL with your actual Calendly link
  // associated with your charlicoder@gmail.com account.
  const calendlyUrl = "https://calendly.com/charlicoder"; // <-- UPDATE THIS

  return (
    <div className="min-h-[700px] overflow-hidden">
      <iframe
        src={calendlyUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0, minHeight: '700px' }}
        allowFullScreen
      ></iframe>
    </div>
  );
};


export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* 
        This is where your other page sections would go (e.g., Hero, About Me, etc.).
        The existing design of those sections remains the same.
      */}

      {/* --- Start of New Contact & Scheduling Section --- */}
      <section className="mb-20">
        <div className="max-w-4xl mx-auto">
          {/* Centered Contact Information Card */}
          <Card className="mb-12 border-2">
            <CardHeader>
              <CardTitle className="text-3xl text-center font-bold tracking-tight">
                Get In Touch
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row justify-center items-center gap-8 text-center">
              <a
                href="mailto:charlicoder@gmail.com"
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-8 h-8" />
                <span className="font-medium">charlicoder@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/charlicoder" // Replace with your LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-8 h-8" />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href="https://github.com/charlicoder" // Replace with your GitHub URL
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-8 h-8" />
                <span className="font-medium">GitHub</span>
              </a>
            </CardContent>
          </Card>

          {/* Book a Schedule Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Book a 30-Minute Call
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CalendlyEmbed />
            </CardContent>
          </Card>
        </div>
      </section>
      {/* --- End of New Contact & Scheduling Section --- */}

      {/* 
        This is where other remaining sections of your page would continue.
      */}
    </div>
  );
}