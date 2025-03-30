
import { Calendar, Clock, MapPin } from "lucide-react"
import Footer from '../components/Footer'
import React, { useEffect } from 'react';
import Gallery from "./gallery";
import a from "../images/campusCarnival/a.jpg"
import b from "../images/campusCarnival/b.jpg"
import c from "../images/campusCarnival/c.jpg"
import d from "../images/campusCarnival/d.jpg"
import e from "../images/campusCarnival/e.jpg"
import f from "../images/campusCarnival/f.jpg"
import g from "../images/campusCarnival/g.jpg"
import h from "../images/campusCarnival/h.jpg"
import i from "../images/campusCarnival/i.jpg"
import j from "../images/campusCarnival/j.jpg"
import k from "../images/campusCarnival/k.jpg"
import l from "../images/campusCarnival/l.jpg"
const galleryImages = [
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
 
  },
  {
    src: l,
    alt: "Event image 12",

  },
]
export default function Carnival() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
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
              Campus Carnival
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
            Campus Carnival brought together aspiring technologists in a vibrant showcase of talent across machine learning,
             web development, and artificial intelligence. The event combined competitive challenges with learning opportunities,
              creating an energetic atmosphere where participants could demonstrate their skills while expanding their knowledge.
            </p>
            <p className="text-lg text-muted-foreground">
            The event culminated in a showcase where winners demonstrated their solutions. Many participants left with:
            <ul className="list-disc">
                <li>Portfolio-worthy projects demonstrating practical applications.</li>
                <li>New connections with peers and industry contacts.</li>
                <li>Deeper understanding of emerging technologies and methodologies.</li>

            </ul>


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
                  <p className="text-muted-foreground">Bvcoe campus</p>
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
        <Gallery images={galleryImages}/>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">© CAMPUS BLOCKS BVCOE. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Code.
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Connect.
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Conquer.
              </a>
            </div>
          </div>
        </div>
      </footer>
      <Footer/>
    </div>
  )
}
