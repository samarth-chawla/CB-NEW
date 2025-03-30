
import PageWrapper from "@/components/PageWrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <PageWrapper title="Home">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-campus-black to-campus-dark-gray text-white">
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h5 className="text-campus-red font-medium tracking-wider mb-3 reveal-animation" style={{ "--reveal-delay": 1 } as React.CSSProperties}>
              TECHNICAL SOCIETY
            </h5>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 reveal-animation" style={{ "--reveal-delay": 2 } as React.CSSProperties}>
              Building the Future with <span className="text-campus-red">Campus Blocks</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 reveal-animation" style={{ "--reveal-delay": 3 } as React.CSSProperties}>
              A community of tech enthusiasts, innovators, and problem solvers dedicated to technical excellence and skill development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-animation" style={{ "--reveal-delay": 4 } as React.CSSProperties}>
              <Link to="/community" className="btn-primary">
                Join Our Community
              </Link>
              <Link to="/events" className="btn-outline bg-white/10">
                Explore Events
              </Link>
            </div>
          </div>
        </div>
        
        {/* Abstract decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="w-96 h-96 rounded-full bg-campus-red absolute -top-20 -right-20 blur-3xl"></div>
          <div className="w-96 h-96 rounded-full bg-campus-red absolute bottom-20 right-20 blur-3xl"></div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="section bg-campus-light-gray">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal-animation">
              What We <span className="text-campus-red">Offer</span>
            </h2>
            <p className="text-campus-dark-gray reveal-animation" style={{ "--reveal-delay": 1 } as React.CSSProperties}>
              Campus Blocks provides a platform for students to learn, create, and grow their technical skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Technical Workshops",
                description: "Hands-on learning experiences in cutting-edge technologies and programming languages.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-campus-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                delay: 2
              },
              {
                title: "Hackathons",
                description: "Competitive coding events that challenge students to build innovative solutions.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-campus-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                delay: 3
              },
              {
                title: "Tech Talks",
                description: "Insightful presentations from industry experts and academic professionals.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-campus-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
                delay: 4
              },
              {
                title: "Project Collaborations",
                description: "Opportunities to work on team projects and build your portfolio.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-campus-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                delay: 5
              },
              {
                title: "Tech Resources",
                description: "Access to curated learning materials, tools, and platforms to enhance your skills.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-campus-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                delay: 6
              },
              {
                title: "Networking",
                description: "Connect with peers, mentors, and industry professionals to grow your network.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-campus-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                delay: 7
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 reveal-animation"
                style={{ "--reveal-delay": feature.delay } as React.CSSProperties}
              >
                <div className="mb-5 p-3 inline-block rounded-full bg-campus-red/10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Recent Events Section */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h5 className="text-campus-red font-medium tracking-wider mb-2 reveal-animation">
                FEATURED EVENTS
              </h5>
              <h2 className="text-3xl md:text-4xl font-bold reveal-animation" style={{ "--reveal-delay": 1 } as React.CSSProperties}>
                Our Recent <span className="text-campus-red">Activities</span>
              </h2>
            </div>
            <Link 
              to="/events" 
              className="inline-flex items-center mt-4 md:mt-0 text-campus-black font-medium hover:text-campus-red transition-colors reveal-animation"
              style={{ "--reveal-delay": 2 } as React.CSSProperties}
            >
              View All Events
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development Bootcamp",
                description: "A 3-day intensive workshop on modern web development frameworks and best practices.",
                image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop",
                date: "March 15, 2023",
                delay: 3
              },
              {
                title: "AI Innovation Hackathon",
                description: "A 24-hour coding competition focused on building innovative AI solutions.",
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
                date: "February 8, 2023",
                delay: 4
              },
              {
                title: "Tech Talk: Blockchain Future",
                description: "An insightful session on blockchain technology and its applications in various industries.",
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop",
                date: "January 20, 2023",
                delay: 5
              }
            ].map((event, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 reveal-animation"
                style={{ "--reveal-delay": event.delay } as React.CSSProperties}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                  />
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
                  <Link 
                    to={`/events/${index + 1}`} 
                    className="text-campus-red font-medium inline-flex items-center hover:underline"
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="section bg-campus-black text-white">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal-animation">
              Our <span className="text-campus-red">Impact</span>
            </h2>
            <p className="text-gray-300 reveal-animation" style={{ "--reveal-delay": 1 } as React.CSSProperties}>
              The numbers speak for themselves. We're proud of our growing community and the impact we're making.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Active Members", delay: 2 },
              { number: "50+", label: "Events Hosted", delay: 3 },
              { number: "20+", label: "Industry Partners", delay: 4 },
              { number: "100+", label: "Projects Completed", delay: 5 }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center reveal-animation"
                style={{ "--reveal-delay": stat.delay } as React.CSSProperties}
              >
                <div className="text-4xl md:text-5xl font-bold text-campus-red mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-campus-red to-campus-black text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal-animation">
            Ready to Join Campus Blocks?
          </h2>
          <p className="text-xl mb-8 reveal-animation" style={{ "--reveal-delay": 1 } as React.CSSProperties}>
            Be a part of our vibrant community and take your technical skills to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-animation" style={{ "--reveal-delay": 2 } as React.CSSProperties}>
            <Link to="/community" className="btn-secondary bg-white text-campus-black hover:bg-opacity-90">
              Join Now
            </Link>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-campus-black">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </PageWrapper>
  );
};

export default Index;
