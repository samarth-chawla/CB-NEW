
import { Calendar, Clock, MapPin } from "lucide-react"

import React, { useEffect } from 'react';
import Gallery from "./gallery";
export default function Uxelerate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const eventImages = [
    { src: "/src/images/uxlerate/ux1.JPG", alt: "Event 1" },
    { src: "/src/images/uxlerate/ux2.JPG", alt: "Event 2" },
    { src: "/src/images/uxlerate/ux3.JPG", alt: "Event 3" },
    { src: "/src/images/uxlerate/ux4.JPG", alt: "Event 4" },
    { src: "/src/images/uxlerate/ux5.JPG", alt: "Event 5" },
    { src: "/src/images/uxlerate/ux6.JPG", alt: "Event 6" },
    { src: "/src/images/uxlerate/ux7.JPG", alt: "Event 7" },
    { src: "/src/images/uxlerate/ux8.JPG", alt: "Event 8" },
    { src: "/src/images/uxlerate/ux9.JPG", alt: "Event 9" },
    { src: "/src/images/uxlerate/ux10.JPG", alt: "Event 10" },
    { src: "/src/images/uxlerate/ux11.JPG", alt: "Event 11" },
    { src: "/src/images/uxlerate/ux12.JPG", alt: "Event 12" },
  ]
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="Event cover image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
              Uxelerate
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto animate-slide-up">
              Coding, Connections and lots of learnings
            </p>
          </div>
        </div>
      </div>

      {/* Event Summary */}
      <section className="py-12 md:py-16 container px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight">Event Summary</h2>
            <p className="text-lg text-muted-foreground">
              The Annual Tech Conference brings together industry leaders, innovators, and tech enthusiasts from around
              the world. This year's event will feature keynote speeches, interactive workshops, networking
              opportunities, and product showcases from leading tech companies.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether you're a developer, designer, entrepreneur, or tech enthusiast, this conference offers valuable
              insights into the latest trends and technologies shaping the future of the industry.
            </p>

          </div>
          <div className="bg-muted rounded-lg p-6 animate-slide-in-right">
            <h3 className="text-xl font-semibold mb-4">Event Details</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Date</p>
                  <p className="text-muted-foreground">June 15-17, 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Time</p>
                  <p className="text-muted-foreground">9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Tech Convention Center</p>
                  <p className="text-muted-foreground">123 Innovation Blvd, San Francisco</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-10 animate-fade-in">Featured Speakers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-background rounded-lg overflow-hidden shadow-md animate-slide-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="aspect-square relative">
                  <img
                    src={`/placeholder.svg?height=300&width=300&text=Speaker ${i}`}
                    alt={`Speaker ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Speaker Name</h3>
                  <p className="text-muted-foreground">Position, Company</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12 md:py-16 container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-10 animate-fade-in">Event Gallery</h2>
        <Gallery images={eventImages}/>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">© 2025 Tech Conference. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
