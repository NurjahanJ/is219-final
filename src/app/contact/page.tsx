"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Send, BookOpen, MessageSquare, Compass, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    
    try {
      // Log form data to console (for now)
      console.log("Form submitted:", formData);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Show success message
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12 md:py-20 pt-16 md:pt-24 relative overflow-hidden">
      {/* Starry background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `twinkle ${Math.random() * 5 + 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Larger glowing stars */}
      <div className="absolute top-1/4 right-1/4 bg-cyan-400 w-2 h-2 rounded-full opacity-70 blur-sm" aria-hidden="true"></div>
      <div className="absolute bottom-1/3 left-1/3 bg-cyan-300 w-3 h-3 rounded-full opacity-50 blur-sm" aria-hidden="true"></div>
      
      <main className="container mx-auto max-w-5xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-cyan-900/30 backdrop-blur-sm rounded-full mb-4 border border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
            <Compass className="h-6 w-6 text-cyan-400" aria-hidden="true" />
          </div>
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-12 bg-cyan-500/50 mr-4"></div>
            <h1 
              className="text-cyan-300 text-4xl md:text-5xl font-bold mb-2 tracking-wide"
              style={{
                textShadow: '0 0 10px rgba(34, 211, 238, 0.5), 0 0 20px rgba(34, 211, 238, 0.3)'
              }}
            >
              Contact Me
            </h1>
            <div className="h-px w-12 bg-cyan-500/50 ml-4"></div>
          </div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            I'm available for collaboration on innovative web development and design projects. 
            Let's discuss how my expertise in frontend development and UX design can help transform your digital vision into an exceptional user experience.
          </p>
        </div>

        {/* Main Content - 1 column on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Methods Column */}
          <div className="order-2 lg:order-1">
            <Card className="border-l-4 border-l-cyan-500 hover:shadow-lg transition-shadow duration-300 h-full bg-slate-900/80 backdrop-blur-sm border border-cyan-700/20 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
              {/* Subtle stars in card */}
              <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div 
                    key={`star-contact-${i}`}
                    className="absolute rounded-full bg-white"
                    style={{
                      width: `${Math.random() * 2 + 1}px`,
                      height: `${Math.random() * 2 + 1}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.7 + 0.3
                    }}
                  />
                ))}
              </div>
              <CardHeader>
                <CardTitle className="text-cyan-300 text-2xl font-bold">Connect With Me</CardTitle>
                <CardDescription className="text-slate-400 font-light">
                  Reach out through any of these channels to discuss your project requirements.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Email Button */}
                <a 
                  href="mailto:nurjahan.jhorna@example.com" 
                  className="flex items-center p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors duration-300 group"
                  aria-label="Send me an email"
                >
                  <div className="p-3 bg-slate-800 rounded-full mr-4 shadow-sm group-hover:shadow-md transition-shadow duration-300 border border-cyan-700/20 group-hover:border-cyan-700/40">
                    <Mail className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-medium text-cyan-300">Email</h3>
                    <p className="text-sm text-slate-400">Send me a message</p>
                  </div>
                </a>

                {/* LinkedIn Button */}
                <a 
                  href="https://www.linkedin.com/in/nurjahan-jhorna" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg bg-zinc-800/40 hover:bg-zinc-700/60 transition-colors duration-300 group border border-cyan-500/10 hover:border-cyan-500/30"
                  aria-label="Visit my LinkedIn profile"
                >
                  <div className="p-3 bg-slate-800 rounded-full mr-4 shadow-sm group-hover:shadow-md transition-shadow duration-300 border border-cyan-700/20 group-hover:border-cyan-700/40">
                    <Linkedin className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-medium text-cyan-300">LinkedIn</h3>
                    <p className="text-sm text-slate-400">Connect professionally</p>
                  </div>
                </a>

                {/* GitHub Button */}
                <a 
                  href="https://github.com/NurjahanJ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors duration-300 group"
                  aria-label="Visit my GitHub profile"
                >
                  <div className="p-3 bg-slate-800 rounded-full mr-4 shadow-sm group-hover:shadow-md transition-shadow duration-300 border border-cyan-700/20 group-hover:border-cyan-700/40">
                    <Github className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-medium text-cyan-300">GitHub</h3>
                    <p className="text-sm text-slate-400">View my code repositories</p>
                  </div>
                </a>

                {/* Nature-inspired decorative elements */}
                <div className="relative h-40 mt-8 overflow-hidden rounded-lg bg-zinc-800/40 flex items-center justify-center border border-cyan-500/20 backdrop-blur-sm">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500 rounded-full opacity-10 blur-xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-400 rounded-full opacity-10 blur-xl"></div>
                  <Map className="absolute opacity-10 w-20 h-20 text-cyan-400" />
                  <p className="text-cyan-300 font-medium text-center relative z-10 px-6">
                    Looking forward to charting new digital territories and navigating exciting opportunities together.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form Column */}
          <div className="order-1 lg:order-2">
            <Card className="border-l-4 border-l-cyan-500 hover:shadow-lg transition-shadow duration-300 h-full bg-slate-900/80 backdrop-blur-sm border border-cyan-700/20 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
              {/* Subtle stars in card */}
              <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div 
                    key={`star-contact-${i}`}
                    className="absolute rounded-full bg-white"
                    style={{
                      width: `${Math.random() * 2 + 1}px`,
                      height: `${Math.random() * 2 + 1}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.7 + 0.3
                    }}
                  />
                ))}
              </div>
              <CardHeader>
                <CardTitle className="text-cyan-300 text-2xl font-bold">Send a Message</CardTitle>
                <CardDescription className="text-slate-400 font-light">
                  Have a question or idea you'd like to discuss? I'd love to hear from you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-cyan-300 font-light">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-zinc-700/60 border-cyan-500/30 focus:border-cyan-400/50 focus:ring-cyan-400/20 text-slate-300"
                      aria-label="Your name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-cyan-300 font-light">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-zinc-700/60 border-cyan-500/30 focus:border-cyan-400/50 focus:ring-cyan-400/20 text-slate-300"
                      aria-label="Your email address"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-cyan-300 font-light">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Share your thoughts or questions..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-[150px] bg-zinc-700/60 border-cyan-500/30 focus:border-cyan-400/50 focus:ring-cyan-400/20 text-slate-300"
                      aria-label="Your message"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-cyan-700 hover:bg-cyan-600 text-white py-3 rounded-md transition-colors duration-300 flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                    aria-label="Send message"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                  
                  {/* Success Message */}
                  {submitSuccess && (
                    <div className="p-3 bg-cyan-900/30 border border-cyan-500/30 text-cyan-300 rounded-md font-light backdrop-blur-sm">
                      Thank you for your message. I appreciate you taking the time to share your thoughts and will respond thoughtfully soon.
                    </div>
                  )}
                  
                  {/* Error Message */}
                  {submitError && (
                    <div className="p-3 bg-red-900/30 border border-red-500/30 text-red-300 rounded-md font-light backdrop-blur-sm">
                      {submitError}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
