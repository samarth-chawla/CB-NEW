
import { Calendar, Clock, MapPin } from "lucide-react"
import Footer from '../components/Footer'
import React from 'react';
import Gallery from "./gallery";
import { useEffect } from 'react';
import a from "../images/hackblocks/a.jpg"
import b from "../images/hackblocks/b.jpg"
import c from "../images/hackblocks/c.jpg"
import d from "../images/hackblocks/d.jpg"
import e from "../images/hackblocks/e.jpg"
import f from "../images/hackblocks/f.jpg"
import g from "../images/hackblocks/g.jpg"
import h from "../images/hackblocks/h.jpg"
import i from "../images/hackblocks/i.jpg"
import j from "../images/hackblocks/j.jpg"
import k from "../images/hackblocks/k.jpg"
import o from "../images/hackblocks/o.jpg"
const eventImages = [
  {
    src: o,
    alt: "Event image 12",

  },
  {
    src: a,
    alt: "Event image 1",

  },
  {
    src: b,
    alt: "Event image 2",
   
  },
  {
    src: c,
    alt: "Event image 3",
  
  },
  {
    src: d,
    alt: "Event image 4",
  
  },
  {
    src: e,
    alt: "Event image 5",

  },
  //"/placeholder.svg?height=600&width=800&text=Event%20Image%206"
  {
    src: f,
    alt: "Event image 6",

  },
  {
    src: g,
    alt: "Event image 7",
 
  },
  {
    src: h,
    alt: "Event image 8",
 
  },
  {
    src: i,
    alt: "Event image 9",

  },
  {
    src: j,
    alt: "Event image 10",

  },
  {
    src: k,
    alt: "Event image 11",
 
  }
  
]
export default function Hackblocks() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const speakerImages = [
    { src: "/src/images/hackblocks/p1.JPG", alt: "Event 1" },
    { src: "/src/images/hackblocks/p2.JPG", alt: "Event 2" },
    { src: "/src/images/hackblocks/p3.JPG", alt: "Event 3" },
    { src: "/src/images/hackblocks/p4.JPG", alt: "Event 4" },
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
              Hackblocks 1.0
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
            {speakerImages.map((i,index) => (
              <div
                key={index}
                className="bg-background rounded-lg overflow-hidden shadow-md animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square relative">
                  <img
                    src={`${i.src}`}
                    alt={`Speaker ${index}`}
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
