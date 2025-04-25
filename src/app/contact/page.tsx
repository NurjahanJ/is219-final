"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Send, BookOpen, MessageSquare } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50 px-4 py-12 md:py-20 pt-16 md:pt-24 relative">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-1/4 bg-indigo-100 w-32 h-32 rounded-full opacity-20" aria-hidden="true"></div>
      <div className="absolute bottom-1/3 left-1/3 bg-purple-100 w-24 h-24 rounded-full opacity-10" aria-hidden="true"></div>
      
      <main className="container mx-auto max-w-5xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full mb-4">
            <MessageSquare className="h-6 w-6 text-indigo-700" aria-hidden="true" />
          </div>
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-12 bg-indigo-300 mr-4"></div>
            <h1 className="text-indigo-900 text-4xl md:text-5xl font-serif mb-2">Let's Connect</h1>
            <div className="h-px w-12 bg-indigo-300 ml-4"></div>
          </div>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto font-light leading-relaxed">
            I'm always open to thoughtful discussions, sharing knowledge, and exploring ideas about UX and web design. 
            Let's collaborate on creating meaningful digital experiences that illuminate and educate.
          </p>
        </div>

        {/* Main Content - 1 column on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Methods Column */}
          <div className="order-2 lg:order-1">
            <Card className="border-l-4 border-l-indigo-600 shadow-md hover:shadow-lg transition-shadow duration-300 h-full bg-white">
              <CardHeader>
                <CardTitle className="text-indigo-800 text-2xl font-serif">Connect & Discuss</CardTitle>
                <CardDescription className="text-slate-600 font-light">
                  Reach out through these platforms to start a meaningful conversation.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Email Button */}
                <a 
                  href="mailto:nurjahan.jhorna@example.com" 
                  className="flex items-center p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors duration-300 group"
                  aria-label="Send me an email"
                >
                  <div className="p-3 bg-white rounded-full mr-4 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <Mail className="h-6 w-6 text-slate-700" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary-800">Email</h3>
                    <p className="text-sm text-primary-600">Send me a message</p>
                  </div>
                </a>

                {/* LinkedIn Button */}
                <a 
                  href="https://www.linkedin.com/in/nurjahan-jhorna" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors duration-300 group"
                  aria-label="Visit my LinkedIn profile"
                >
                  <div className="p-3 bg-white rounded-full mr-4 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <Linkedin className="h-6 w-6 text-purple-700" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-800">LinkedIn</h3>
                    <p className="text-sm text-secondary-600">Connect professionally</p>
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
                  <div className="p-3 bg-white rounded-full mr-4 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <Github className="h-6 w-6 text-slate-700" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary-800">GitHub</h3>
                    <p className="text-sm text-primary-600">View my code repositories</p>
                  </div>
                </a>

                {/* Nature-inspired decorative elements */}
                <div className="relative h-40 mt-8 overflow-hidden rounded-lg bg-primary-100 flex items-center justify-center">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary-200 rounded-full opacity-30"></div>
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent-200 rounded-full opacity-30"></div>
                  <p className="text-primary-700 font-medium text-center relative z-10 px-6">
                    Looking forward to exploring new opportunities and creating meaningful digital experiences together.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form Column */}
          <div className="order-1 lg:order-2">
            <Card className="border-l-4 border-l-purple-600 shadow-md hover:shadow-lg transition-shadow duration-300 h-full bg-white">
              <CardHeader>
                <CardTitle className="text-purple-800 text-2xl font-serif">Share Your Thoughts</CardTitle>
                <CardDescription className="text-slate-600 font-light">
                  Have a question or idea you'd like to discuss? I'd love to hear from you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-purple-700 font-light">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-purple-200 focus:border-purple-300 focus:ring-purple-200"
                      aria-label="Your name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-purple-700 font-light">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-purple-200 focus:border-purple-300 focus:ring-purple-200"
                      aria-label="Your email address"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-purple-700 font-light">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Share your thoughts or questions..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-[150px] border-purple-200 focus:border-purple-300 focus:ring-purple-200"
                      aria-label="Your message"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-purple-700 hover:bg-purple-800 text-white transition-all duration-300"
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
                    <div className="p-3 bg-indigo-50 border border-indigo-200 text-indigo-800 rounded-md font-light">
                      Thank you for your message. I appreciate you taking the time to share your thoughts and will respond thoughtfully soon.
                    </div>
                  )}
                  
                  {/* Error Message */}
                  {submitError && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-800 rounded-md font-light">
                      {submitError}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 text-center">
          <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer navigation">
            <Link 
              href="/" 
              className="text-indigo-700 hover:text-indigo-900 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 p-2 rounded-lg flex items-center gap-2 hover:bg-indigo-50"
            >
              <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-indigo-700 hover:text-indigo-900 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 p-2 rounded-lg flex items-center gap-2 hover:bg-indigo-50"
            >
              <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
              About
            </Link>
            <Link 
              href="/#projects" 
              className="text-indigo-700 hover:text-indigo-900 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 p-2 rounded-lg flex items-center gap-2 hover:bg-indigo-50"
            >
              <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
              My Playground
            </Link>
          </nav>
          <p className="text-sm text-slate-600 mt-6 font-light">© 2025 Nurjahan Jhorna. Illuminating digital wisdom.</p>
        </div>
      </main>
    </div>
  );
}
