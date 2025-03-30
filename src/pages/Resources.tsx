
import PageWrapper from "@/components/PageWrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  const resourceCategories = [
    { id: "all", label: "All Resources" },
    { id: "tutorials", label: "Tutorials" },
    { id: "guides", label: "Guides" },
    { id: "tools", label: "Tools" },
    { id: "courses", label: "Courses" }
  ];
  
  const resources = [
    {
      id: 1,
      title: "Web Development Roadmap 2023",
      description: "A comprehensive guide to becoming a full-stack web developer in 2023.",
      category: "guides",
      type: "PDF",
      downloadUrl: "#",
      tags: ["web development", "frontend", "backend", "career"],
      featured: true
    },
    {
      id: 2,
      title: "Introduction to Machine Learning",
      description: "A beginner-friendly introduction to key machine learning concepts and algorithms.",
      category: "tutorials",
      type: "Video Series",
      downloadUrl: "#",
      tags: ["machine learning", "AI", "data science", "beginner"],
      featured: true
    },
    {
      id: 3,
      title: "Git & GitHub Cheat Sheet",
      description: "Essential commands and workflows for version control with Git and GitHub.",
      category: "tools",
      type: "PDF",
      downloadUrl: "#",
      tags: ["git", "github", "version control", "collaboration"],
      featured: false
    },
    {
      id: 4,
      title: "Data Structures & Algorithms Course",
      description: "A complete course covering fundamental data structures and algorithms with practical examples.",
      category: "courses",
      type: "Course Material",
      downloadUrl: "#",
      tags: ["DSA", "algorithms", "data structures", "interview prep"],
      featured: true
    },
    {
      id: 5,
      title: "Building RESTful APIs with Node.js",
      description: "Step-by-step tutorial for creating robust and scalable APIs using Node.js and Express.",
      category: "tutorials",
      type: "Tutorial",
      downloadUrl: "#",
      tags: ["API", "Node.js", "Express", "backend"],
      featured: false
    },
    {
      id: 6,
      title: "UI/UX Design Principles",
      description: "Essential design principles for creating intuitive and beautiful user interfaces.",
      category: "guides",
      type: "Slideshow",
      downloadUrl: "#",
      tags: ["UI", "UX", "design", "user experience"],
      featured: false
    },
    {
      id: 7,
      title: "React.js Masterclass",
      description: "Advanced techniques and best practices for building complex applications with React.",
      category: "courses",
      type: "Course Material",
      downloadUrl: "#",
      tags: ["React", "frontend", "JavaScript", "advanced"],
      featured: false
    },
    {
      id: 8,
      title: "Cybersecurity Essentials",
      description: "An overview of fundamental security concepts and practices for developers.",
      category: "guides",
      type: "E-Book",
      downloadUrl: "#",
      tags: ["security", "cybersecurity", "web security", "best practices"],
      featured: false
    },
    {
      id: 9,
      title: "Mobile App Development Toolkit",
      description: "A collection of tools, libraries, and resources for iOS and Android development.",
      category: "tools",
      type: "Resource List",
      downloadUrl: "#",
      tags: ["mobile", "iOS", "Android", "app development"],
      featured: false
    },
    {
      id: 10,
      title: "Database Design Fundamentals",
      description: "Learn the principles of effective database design and implementation.",
      category: "tutorials",
      type: "Tutorial Series",
      downloadUrl: "#",
      tags: ["database", "SQL", "NoSQL", "data modeling"],
      featured: false
    },
    {
      id: 11,
      title: "Cloud Computing Essentials",
      description: "Introduction to cloud services, deployment models, and best practices.",
      category: "guides",
      type: "Guide",
      downloadUrl: "#",
      tags: ["cloud", "AWS", "Azure", "DevOps"],
      featured: false
    },
    {
      id: 12,
      title: "Competitive Programming Resources",
      description: "Curated collection of resources for algorithmic problem solving and competitions.",
      category: "tools",
      type: "Resource List",
      downloadUrl: "#",
      tags: ["competitive programming", "algorithms", "problem solving"],
      featured: false
    }
  ];
  
  // Filter resources based on category and search query
  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === "all" || resource.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });
  
  // Get featured resources
  const featuredResources = resources.filter(resource => resource.featured);

  return (
    <PageWrapper title="Resources">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section bg-campus-black text-white">
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h5 className="text-campus-red font-medium tracking-wider mb-3 reveal-animation" style={{ "--reveal-delay": 1 } as React.CSSProperties}>
              LEARNING MATERIALS
            </h5>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 reveal-animation" style={{ "--reveal-delay": 2 } as React.CSSProperties}>
              Technical <span className="text-campus-red">Resources</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 reveal-animation" style={{ "--reveal-delay": 3 } as React.CSSProperties}>
              Enhance your skills with our curated collection of tutorials, guides, tools, and courses.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto reveal-animation" style={{ "--reveal-delay": 4 } as React.CSSProperties}>
              <input
                type="text"
                placeholder="Search for resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3 pr-12 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-campus-red"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Abstract decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="w-96 h-96 rounded-full bg-campus-red absolute -top-20 -right-20 blur-3xl"></div>
          <div className="w-96 h-96 rounded-full bg-campus-red absolute bottom-20 right-20 blur-3xl"></div>
        </div>
      </section>
      
      {/* Featured Resources Section */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h5 className="text-campus-red font-medium tracking-wider mb-2 reveal-animation">
              RECOMMENDED
            </h5>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal-animation" style={{ "--reveal-delay": 1 } as React.CSSProperties}>
              Featured <span className="text-campus-red">Resources</span>
            </h2>
            <p className="text-campus-dark-gray reveal-animation" style={{ "--reveal-delay": 2 } as React.CSSProperties}>
              Our most valuable and comprehensive learning materials.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <div 
                key={resource.id} 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 reveal-animation"
                style={{ "--reveal-delay": (index % 3) + 3 } as React.CSSProperties}
              >
                <div className="p-1">
                  <div className={`h-2 w-full ${
                    resource.category === "tutorials" ? "bg-blue-500" : 
                    resource.category === "guides" ? "bg-green-500" : 
                    resource.category === "tools" ? "bg-purple-500" : 
                    "bg-yellow-500"
                  } rounded-t-lg`}></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      resource.category === "tutorials" ? "bg-blue-100 text-blue-600" : 
                      resource.category === "guides" ? "bg-green-100 text-green-600" : 
                      resource.category === "tools" ? "bg-purple-100 text-purple-600" : 
                      "bg-yellow-100 text-yellow-600"
                    }`}>
                      {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                    </span>
                    <span className="text-sm text-gray-500">{resource.type}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-6">{resource.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {resource.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={resource.downloadUrl}
                    className="flex items-center justify-center gap-2 w-full py-2 bg-campus-black text-white font-medium rounded-md hover:bg-campus-red transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Resource
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Resources Filter Section */}
      <section className="py-8 bg-campus-light-gray border-t border-b border-gray-200 sticky top-16 z-30 backdrop-blur-sm bg-white/90">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {resourceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full transition-all ${
                  activeCategory === category.id
                    ? "bg-campus-red text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* All Resources Section */}
      <section className="section bg-campus-light-gray">
        <div className="container mx-auto">
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource, index) => (
                <div 
                  key={resource.id} 
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 reveal-animation"
                  style={{ "--reveal-delay": (index % 9) + 1 } as React.CSSProperties}
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      resource.category === "tutorials" ? "bg-blue-100 text-blue-600" : 
                      resource.category === "guides" ? "bg-green-100 text-green-600" : 
                      resource.category === "tools" ? "bg-purple-100 text-purple-600" : 
                      "bg-yellow-100 text-yellow-600"
                    }`}>
                      {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                    </span>
                    <span className="text-sm text-gray-500">{resource.type}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {resource.tags.slice(0, 3).map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                    {resource.tags.length > 3 && (
                      <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
                        +{resource.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <a 
                    href={resource.downloadUrl}
                    className="flex items-center gap-1 text-campus-red font-medium hover:underline"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-500 mb-2">No resources found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 bg-campus-red text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Submit Resource Section */}
      <section className="section bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-campus-black to-campus-red p-8 md:p-12 rounded-2xl text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 reveal-animation">
                  Have a Resource to Share?
                </h2>
                <p className="text-gray-200 mb-6 reveal-animation" style={{ "--reveal-delay": 1 } as React.CSSProperties}>
                  If you've created tutorials, guides, or tools that could benefit the Campus Blocks community, we'd love to feature them in our resource library.
                </p>
                <button className="btn-secondary bg-white text-campus-black hover:bg-opacity-90 reveal-animation" style={{ "--reveal-delay": 2 } as React.CSSProperties}>
                  Submit a Resource
                </button>
              </div>
              <div className="md:w-1/3 flex justify-center reveal-animation" style={{ "--reveal-delay": 3 } as React.CSSProperties}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Request Resource Section */}
      <section className="section bg-campus-light-gray">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal-animation">
            Can't Find What You Need?
          </h2>
          <p className="text-xl mb-8 reveal-animation" style={{ "--reveal-delay": 1 } as React.CSSProperties}>
            If you're looking for specific learning materials or resources, let us know and we'll do our best to provide them.
          </p>
          <button className="btn-primary reveal-animation" style={{ "--reveal-delay": 2 } as React.CSSProperties}>
            Request a Resource
          </button>
        </div>
      </section>
      
      <Footer />
    </PageWrapper>
  );
};

export default Resources;
