"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Send, MapPin } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-b from-background to-primary-50 px-4 py-12 md:py-20">
      <main className="container mx-auto max-w-5xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-primary-100 rounded-full mb-4">
            <Mail className="h-6 w-6 text-primary-600" aria-hidden="true" />
          </div>
          <h1 className="text-primary text-4xl md:text-5xl font-bold mb-6">Let's Connect</h1>
          <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
            I'm always open to collaborating, learning, or chatting about UX and web design. 
            Let's build something meaningful together.
          </p>
        </div>

        {/* Main Content - 1 column on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Methods Column */}
          <div className="order-2 lg:order-1">
            <Card className="border-l-4 border-l-primary shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader>
                <CardTitle className="text-primary-700 text-2xl">Contact Methods</CardTitle>
                <CardDescription>
                  Connect with me through these platforms or send a direct message.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* GitHub Button */}
                <a 
                  href="https://github.com/NurjahanJ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg bg-primary-50 hover:bg-primary-100 transition-colors duration-300 group"
                  aria-label="Visit my GitHub profile"
                >
                  <div className="p-3 bg-white rounded-full mr-4 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <Github className="h-6 w-6 text-primary-700" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary-800">GitHub</h3>
                    <p className="text-sm text-primary-600">View my code repositories</p>
                  </div>
                </a>

                {/* LinkedIn Button */}
                <a 
                  href="https://www.linkedin.com/in/nurjahanjhorna/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg bg-secondary-50 hover:bg-secondary-100 transition-colors duration-300 group"
                  aria-label="Connect with me on LinkedIn"
                >
                  <div className="p-3 bg-white rounded-full mr-4 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <Linkedin className="h-6 w-6 text-secondary-700" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-800">LinkedIn</h3>
                    <p className="text-sm text-secondary-600">Connect professionally</p>
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
            <Card className="border-l-4 border-l-secondary shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-secondary-700 text-2xl">Send a Message</CardTitle>
                <CardDescription>
                  Have a question or want to work together? Drop me a message!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-primary-700">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-primary-200 focus:border-primary-300"
                      aria-label="Your name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-primary-700">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-primary-200 focus:border-primary-300"
                      aria-label="Your email address"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-primary-700">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-[150px] border-primary-200 focus:border-primary-300"
                      aria-label="Your message"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary-600 text-white transition-all duration-300 hover:scale-[1.02]"
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
                    <div className="p-3 bg-green-100 border border-green-200 text-green-800 rounded-md">
                      Your message has been sent successfully! I'll get back to you soon.
                    </div>
                  )}
                  
                  {/* Error Message */}
                  {submitError && (
                    <div className="p-3 bg-red-100 border border-red-200 text-red-800 rounded-md">
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
          <nav className="flex justify-center space-x-6" aria-label="Footer navigation">
            <Link 
              href="/" 
              className="text-primary hover:text-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 p-1 rounded"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-primary hover:text-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 p-1 rounded"
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className="text-primary hover:text-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 p-1 rounded"
            >
              Projects
            </Link>
          </nav>
        </div>
      </main>
    </div>
  );
}
