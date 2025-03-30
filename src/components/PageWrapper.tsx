
import { ReactNode, useEffect } from "react";

interface PageWrapperProps {
  children: ReactNode;
  title?: string;
}

const PageWrapper = ({ children, title }: PageWrapperProps) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = `${title} | Campus Blocks`;
    } else {
      document.title = "Campus Blocks";
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Reveal animations
    const revealElements = document.querySelectorAll(".reveal-animation");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-reveal");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    revealElements.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      revealElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [title]);

  return (
    <div className="page-transition min-h-screen pt-16">
      {children}
    </div>
  );
};

export default PageWrapper;
