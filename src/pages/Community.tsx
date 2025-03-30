
import PageWrapper from "@/components/PageWrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const Community = () => {
  const [activeTab, setActiveTab] = useState("members");
  
  // Team Members Data
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "President",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop",
      bio: "Computer Science major with a passion for AI and machine learning. Leading Campus Blocks to foster technical excellence.",
      skills: ["Leadership", "AI", "Project Management"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      id: 2,
      name: "Sophia Chen",
      role: "Vice President",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop",
      bio: "Software Engineering student specializing in web development and UX design. Committed to creating inclusive tech communities.",
      skills: ["Web Development", "UX Design", "Community Building"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      id: 3,
      name: "Marcus Williams",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop",
      bio: "Full-stack developer with industry experience. Passionate about open-source contributions and mentoring new developers.",
      skills: ["Full-Stack Development", "Cloud Computing", "Open Source"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      id: 4,
      name: "Priya Patel",
      role: "Events Coordinator",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop",
      bio: "Creative problem-solver with a background in event management. Focused on creating impactful tech events and workshops.",
      skills: ["Event Planning", "Marketing", "Public Speaking"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      id: 5,
      name: "David Kim",
      role: "Resources Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
      bio: "Data science enthusiast with a keen interest in educational technology. Curates learning resources for the community.",
      skills: ["Data Science", "Content Creation", "Technical Writing"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      id: 6,
      name: "Emma Rodriguez",
      role: "Outreach Coordinator",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop",
      bio: "Communication major with a minor in Computer Science. Builds bridges between Campus Blocks and industry partners.",
      skills: ["Networking", "Communication", "Partnership Management"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    }
  ];
  
  // Featured Members Data
  const featuredMembers = [
    {
      id: 1,
      name: "James Wilson",
      achievement: "Won 1st place at National Hackathon 2022",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&auto=format&fit=crop",
      quote: "Campus Blocks provided me with the skills and confidence to compete nationally.",
      year: "Senior Year"
    },
    {
      id: 2,
      name: "Aisha Rahman",
      achievement: "Secured internship at Google",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop",
      quote: "The networking opportunities through Campus Blocks connected me with my dream company.",
      year: "Junior Year"
    },
    {
      id: 3,
      name: "Carlos Mendez",
      achievement: "Published research paper on AI Ethics",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&auto=format&fit=crop",
      quote: "The mentorship I received helped me navigate the complex world of AI research.",
      year: "Graduate Student"
    },
    {
      id: 4,
      name: "Leila Chen",
      achievement: "Launched successful tech startup",
      image: "https://images.unsplash.com/photo-1615813967515-e1838c1c5116?w=400&auto=format&fit=crop",
      quote: "My startup idea was born during a Campus Blocks hackathon and grew with community support.",
      year: "Alumni"
    }
  ];
  
  // Community Groups Data
  const communityGroups = [
    {
      id: 1,
      name: "Web Development Guild",
      description: "Focused on front-end and back-end technologies, frameworks, and best practices in web development.",
      members: 78,
      projects: 12,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-campus-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: 2,
      name: "AI Innovators",
      description: "Exploring machine learning, neural networks, and practical applications of artificial intelligence.",
      members: 65,
      projects: 8,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-campus-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 3,
      name: "Mobile Dev Squad",
      description: "Building apps for iOS and Android using native and cross-platform frameworks.",
      members: 42,
      projects: 15,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-campus-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 4,
      name: "Cybersecurity Specialists",
      description: "Learning about network security, ethical hacking, and data protection strategies.",
      members: 35,
      projects: 6,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-campus-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      id: 5,
      name: "Game Development Crew",
      description: "Creating games using various engines and exploring game design principles.",
      members: 50,
      projects: 10,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-campus-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 6,
      name: "Data Science Collective",
      description: "Working with big data, analytics, and visualization techniques.",
      members: 45,
      projects: 7,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-campus-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <PageWrapper title="Community">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section bg-campus-black text-white">
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h5 className="text-campus-red font-medium tracking-wider mb-3 reveal-animation" style={{ "--reveal-delay": 1 } as React.CSSProperties}>
              OUR PEOPLE
            </h5>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 reveal-animation" style={{ "--reveal-delay": 2 } as React.CSSProperties}>
              Campus Blocks <span className="text-campus-red">Community</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 reveal-animation" style={{ "--reveal-delay": 3 } as React.CSSProperties}>
              Meet the passionate individuals who make up our vibrant technical society. Together, we learn, create, and innovate.
            </p>
          </div>
        </div>
        
        {/* Abstract decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="w-96 h-96 rounded-full bg-campus-red absolute -top-20 -right-20 blur-3xl"></div>
          <div className="w-96 h-96 rounded-full bg-campus-red absolute bottom-20 right-20 blur-3xl"></div>
        </div>
      </section>
      
      {/* Community Tabs Section */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-30 backdrop-blur-sm bg-white/90">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { id: "members", label: "Leadership Team" },
              { id: "featured", label: "Featured Members" },
              // { id: "groups", label: "Interest Groups" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full transition-all ${
                  activeTab === tab.id
                    ? "bg-campus-red text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Leadership Team Section */}
      {activeTab === "members" && (
        <section className="section bg-campus-light-gray">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal-animation">
                Meet Our <span className="text-campus-red">Team</span>
              </h2>
              <p className="text-campus-dark-gray reveal-animation" style={{ "--reveal-delay": 1 } as React.CSSProperties}>
                The dedicated individuals who lead Campus Blocks with passion and expertise.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.id} 
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 reveal-animation"
                  style={{ "--reveal-delay": (index % 6) + 2 } as React.CSSProperties}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-campus-red font-medium">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-500 mb-2">EXPERTISE</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <a href={member.social.linkedin} className="text-gray-500 hover:text-campus-red transition-colors" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                      </a>
                      <a href={member.social.github} className="text-gray-500 hover:text-campus-red transition-colors" aria-label="GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                      </a>
                      <a href={member.social.twitter} className="text-gray-500 hover:text-campus-red transition-colors" aria-label="Twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Featured Members Section */}
      {activeTab === "featured" && (
        <section className="section bg-campus-light-gray">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal-animation">
                Featured <span className="text-campus-red">Members</span>
              </h2>
              <p className="text-campus-dark-gray reveal-animation" style={{ "--reveal-delay": 1 } as React.CSSProperties}>
                Celebrating the accomplishments of our outstanding community members.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredMembers.map((member, index) => (
                <div 
                  key={member.id} 
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 reveal-animation"
                  style={{ "--reveal-delay": (index % 4) + 2 } as React.CSSProperties}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-full">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <span className="text-sm text-gray-500">{member.year}</span>
                      </div>
                      <div className="mb-4 inline-block px-3 py-1 bg-campus-red/10 text-campus-red text-sm font-medium rounded-full">
                        {member.achievement}
                      </div>
                      <blockquote className="italic text-gray-600 border-l-4 border-campus-red pl-4 mt-4">
                        "{member.quote}"
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center reveal-animation" style={{ "--reveal-delay": 6 } as React.CSSProperties}>
              <h3 className="text-2xl font-bold mb-6">Could you be our next featured member?</h3>
              <button className="btn-primary">
                Join The Community
              </button>
            </div>
          </div>
        </section>
      )}
      
      {/* Interest Groups Section */}
      {/* {activeTab === "groups" && (
        <section className="section bg-campus-light-gray">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal-animation">
                Special Interest <span className="text-campus-red">Groups</span>
              </h2>
              <p className="text-campus-dark-gray reveal-animation" style={{ "--reveal-delay": 1 } as React.CSSProperties}>
                Join a group that aligns with your technical interests and collaborate with like-minded peers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {communityGroups.map((group, index) => (
                <div 
                  key={group.id} 
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 reveal-animation"
                  style={{ "--reveal-delay": (index % 6) + 2 } as React.CSSProperties}
                >
                  <div className="mb-5 p-3 inline-block rounded-full bg-campus-red/10">
                    {group.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{group.name}</h3>
                  <p className="text-gray-600 mb-4">{group.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-campus-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      {group.members} Members
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-campus-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      {group.projects} Projects
                    </div>
                  </div>
                  
                  <button className="w-full mt-6 py-2 border border-campus-red text-campus-red font-medium rounded-md hover:bg-campus-red hover:text-white transition-all">
                    Join Group
                  </button>
                </div>
              ))}
            </div>
            
            <div className="mt-16 p-8 bg-white rounded-xl shadow-lg max-w-3xl mx-auto text-center reveal-animation" style={{ "--reveal-delay": 8 } as React.CSSProperties}>
              <h3 className="text-xl font-bold mb-4">Want to start a new interest group?</h3>
              <p className="text-gray-600 mb-6">
                Have a technical interest not represented in our current groups? Propose a new interest group and lead the community!
              </p>
              <button className="btn-primary">
                Submit a Proposal
              </button>
            </div>
          </div>
        </section>
      )} */}
      
      {/* Join Community Section */}
      <section className="section bg-gradient-to-r from-campus-black to-campus-red text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal-animation">
            Join Our Community Today
          </h2>
          <p className="text-xl mb-8 reveal-animation" style={{ "--reveal-delay": 1 } as React.CSSProperties}>
            Connect with peers, learn from experts, and grow your technical skills in a supportive environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-animation" style={{ "--reveal-delay": 2 } as React.CSSProperties}>
            <button className="btn-secondary bg-white text-campus-black hover:bg-opacity-90">
              Become a Member
            </button>
            <button className="btn-outline border-white text-white hover:bg-white hover:text-campus-black">
              Learn More
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </PageWrapper>
  );
};

export default Community;
