
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Close mobile menu when route changes
    setIsMenuOpen(false);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Events", path: "/events" },
    { title: "Community", path: "/community" },
    { title: "Resources", path: "/resources" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-sm py-3" 
          : "bg-transparent py-2"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between my-auto">
        <Link 
          to="/" 
          className="flex items-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <div className="h-10 w-10 flex items-center justify-center">
            <span className="text-campus-white font-bold text-lg"> <img src="logo.png"></img> </span>
          </div>
          <span className="text-campus-black font-bold text-xl hidden sm:block">
            Campus Blocks
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${isActive(link.path) ? "active" : ""}`}
            >
              {link.title}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="btn-primary"
          >
            Join Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span 
            className={`block w-6 h-0.5 bg-campus-black transition-transform ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`} 
          />
          <span 
            className={`block w-6 h-0.5 bg-campus-black transition-opacity ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`} 
          />
          <span 
            className={`block w-6 h-0.5 bg-campus-black transition-transform ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`} 
          />
        </button>

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-white z-40 pt-24 px-6 transition-transform duration-300 md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xl font-medium ${
                  isActive(link.path) 
                    ? "text-campus-red" 
                    : "text-campus-black"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="btn-primary w-full text-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
