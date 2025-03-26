
import PageWrapper from "@/components/PageWrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";

const Events = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const eventCategories = [
    { id: "all", label: "All Events" },
    { id: "workshops", label: "Workshops" },
    { id: "hackathons", label: "Hackathons" },
    { id: "talks", label: "Tech Talks" },
    { id: "competitions", label: "Competitions" }
  ];

  const pastEvents = [
    {
      id: 1,
      title: "Campus Carnival",
      category: "workshops",
      description: "Ditch the boredom and participate in an array of fun events",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop",
      date: "October 25, 2023",
      location: "Tech Hub, Building 2",
      attendees: 75,
      link: "/events/hackblocks"
    },
    {
      id: 2,
      title: "Tech-A-Thlon 2.0",
      category: "hackathons",
      description: "A bvest event filled with fun and challenges as highly calibered coders compete against each other",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
      date: "March 29, 2023",
      location: "Innovation Center",
      attendees: 120
    },
    {
      id: 3,
      title: "Geek Out",
      category: "talks",
      description: "A bvest event to arrange the jumbled pieces of code as the time running is out",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop",
      date: "March 29, 2023",
      location: "Lecture Hall A",
      attendees: 90,
    },
    {
      id: 4,
      title: "Coding and College",
      category: "competitions",
      description: "The guest for the session are Mr.Varun Kohli(CEO and Co-founder of Coding Blocks) and Mr. Kartik Mathur.(Co-founder of Coding Blocks)",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
      date: "December 27, 2022",
      location: "Computer Lab 3",
      attendees: 60
    },
    {
      id: 5,
      title: "UI/UX Design Workshop",
      category: "workshops",
      description: "Hands-on workshop on creating intuitive and beautiful user interfaces.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop",
      date: "November 18, 2022",
      location: "Design Studio",
      attendees: 45
    },
    {
      id: 6,
      title: "IoT Development Challenge",
      category: "hackathons",
      description: "A 2-day hackathon focusing on Internet of Things applications and solutions.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
      date: "October 22, 2022",
      location: "Engineering Building",
      attendees: 80
    },
    {
      id: 7,
      title: "Tech Talk: Artificial Intelligence Ethics",
      category: "talks",
      description: "A discussion on ethical considerations in artificial intelligence development.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop",
      date: "September 15, 2022",
      location: "Conference Hall B",
      attendees: 110
    },
    {
      id: 8,
      title: "Data Science Bootcamp",
      category: "workshops",
      description: "A comprehensive workshop on data analysis, visualization, and machine learning.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop",
      date: "August 10, 2022",
      location: "Data Science Lab",
      attendees: 55
    },
    {
      id: 9,
      title: "Mobile App Development Contest",
      category: "competitions",
      description: "A competition to build the most innovative and user-friendly mobile application.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
      date: "July 25, 2022",
      location: "Mobile Computing Center",
      attendees: 70
    }
  ];

  const filteredEvents = activeFilter === "all"
    ? pastEvents
    : pastEvents.filter(event => event.category === activeFilter);

  return (
    <PageWrapper title="Events">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section bg-campus-black text-white">
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h5 className="text-campus-red font-medium tracking-wider mb-3 reveal-animation" style={{ "--reveal-delay": 1 } as React.CSSProperties}>
              OUR ACTIVITIES
            </h5>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 reveal-animation" style={{ "--reveal-delay": 2 } as React.CSSProperties}>
              Past <span className="text-campus-red">Events</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 reveal-animation" style={{ "--reveal-delay": 3 } as React.CSSProperties}>
              Explore our previous workshops, hackathons, and tech talks. Get a glimpse of what Campus Blocks has to offer.
            </p>
          </div>
        </div>
        
        {/* Abstract decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="w-96 h-96 rounded-full bg-campus-red absolute -top-20 -right-20 blur-3xl"></div>
          <div className="w-96 h-96 rounded-full bg-campus-red absolute bottom-20 right-20 blur-3xl"></div>
        </div>
      </section>
      
      {/* Events Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-30 backdrop-blur-sm bg-white/90">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {eventCategories.map((category) => (
              
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-5 py-2 rounded-full transition-all ${
                  activeFilter === category.id
                    ? "bg-campus-red text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Events List Section */}
      <section className="section bg-campus-light-gray">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <div 
                key={event.id} 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 reveal-animation"
                style={{ "--reveal-delay": (index % 9) + 1 } as React.CSSProperties}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-campus-black/80 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                      {eventCategories.find(cat => cat.id === event.category)?.label}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.date}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-campus-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-campus-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      {event.attendees} Attendees
                    </div>
                  </div>
                  <Link to={event.link}>
                  <button
                    className="text-campus-red font-medium inline-flex items-center hover:underline"
                    >
                    More About Event
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-500 mb-2">No events found</h3>
              <p className="text-gray-600">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Upcoming Events Section */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h5 className="text-campus-red font-medium tracking-wider mb-2 reveal-animation">
              MARK YOUR CALENDAR
            </h5>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal-animation" style={{ "--reveal-delay": 1 } as React.CSSProperties}>
              Upcoming <span className="text-campus-red">Events</span>
            </h2>
            <p className="text-campus-dark-gray reveal-animation" style={{ "--reveal-delay": 2 } as React.CSSProperties}>
              Don't miss out on our exciting upcoming events. Register now to secure your spot!
            </p>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                title: "HACKBLOCKS 2.0",
                date: "June 15-17, 2025",
                location: "Innovation Center",
                description: "Our flagship 48-hour hackathon event featuring industry mentors, exciting challenges, and amazing prizes.",
                delay: 3
              },
              // {
              //   title: "Cloud Computing Workshop",
              //   date: "July 8, 2023",
              //   location: "Tech Hub, Building 3",
              //   description: "Learn about cloud infrastructure, deployment strategies, and best practices from industry experts.",
              //   delay: 4
              // },
              // {
              //   title: "Tech Career Fair",
              //   date: "August 12, 2023",
              //   location: "University Auditorium",
              //   description: "Connect with top tech companies, explore internship and job opportunities, and attend resume workshops.",
              //   delay: 5
              // }
            ].map((event, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all reveal-animation"
                style={{ "--reveal-delay": event.delay } as React.CSSProperties}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-campus-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-campus-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {event.location}
                      </div>
                    </div>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <button className="btn-primary w-full sm:w-auto">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-campus-black text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal-animation">
            Want to Host an Event with Us?
          </h2>
          <p className="text-xl mb-8 reveal-animation" style={{ "--reveal-delay": 1 } as React.CSSProperties}>
            If you have an idea for a tech event or would like to collaborate, we'd love to hear from you!
          </p>
          <button className="btn-primary reveal-animation" style={{ "--reveal-delay": 2 } as React.CSSProperties}>
            Submit a Proposal
          </button>
        </div>
      </section>
      
      <Footer />
    </PageWrapper>
  );
};

export default Events;
