import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto space-y-16 pt-20 px-4">
        {/* Hero Section - Everyman Brand */}
        <div className="text-center space-y-6 max-w-[800px] mx-auto">
          <h1 className="text-primary font-bold">
            Explore the Possibilities
          </h1>
          <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
            Discover innovative solutions that transform your digital landscape. We guide you through uncharted territories with expertise and vision.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg" className="text-base bg-primary hover:bg-primary-600 text-white">
              Begin Your Journey
            </Button>
            <Button variant="outline" size="lg" className="text-base border-primary text-primary hover:bg-primary-50 dark:hover:bg-primary-900">
              Explore Our Services
            </Button>
          </div>
        </div>

        {/* Core Principles Section - Explorer Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="text-primary">Adventure Guides</CardTitle>
              <CardDescription>Navigate with confidence</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                We chart the course through complex digital terrain, providing expert guidance to help you discover new possibilities and reach your destination.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary">
            <CardHeader>
              <CardTitle className="text-secondary">Innovative Pathfinders</CardTitle>
              <CardDescription>Cutting-edge solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                Our team explores the frontiers of technology to create custom solutions that open new horizons and transform how you interact with the digital world.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent">
            <CardHeader>
              <CardTitle className="text-accent">Reliable Partners</CardTitle>
              <CardDescription>Steadfast support on every journey</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                We stand by your side throughout your expedition, providing dependable support and expertise to overcome challenges and celebrate victories.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Invitation Section - Friendly Call to Action */}
        <div className="text-center space-y-8 py-16">
          <h2 className="text-primary font-semibold max-w-3xl mx-auto">
            Ready to embark on your next digital adventure?
          </h2>
          <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
            Join us as we explore new frontiers and discover innovative solutions tailored to your unique journey.
          </p>
          <Button size="lg" className="text-base bg-secondary text-text-dark hover:bg-secondary-600">
            Start Your Expedition
          </Button>
        </div>
      </main>
    </div>
  );
}
