'use client'

import { useEffect, useState } from "react";
import NavLink from "./NavLink";

const QuarterCircleNavigation = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isLinkVisible, setIsLinkVisible] = useState(false);

    useEffect(() => {
      // Set isVisible to true after a short delay (adjust as needed)
      const timeout = setTimeout(() => {
        setIsVisible(true);
      }, 500);

      const linkTimeout = setTimeout(() => {
        setIsLinkVisible(true);
      }, 1250);
  
      // Clear the timeout on component unmount
      return () => {
        clearTimeout(timeout);
        clearTimeout(linkTimeout);
      };

    }, []);

    return (
      <div className={`fixed bottom-0 right-0 ${isVisible ? '' : 'opacity-0'} w-80 h-80 bg-gradient-to-br from-aqua to-primary rounded-tl-full flex flex-col items-center justify-end p-4 transform ${isVisible ? 'rotate-in' : ''} neon-glow`}>
        <NavLink text="about" href="/about"  index={0} visible={isLinkVisible} />
        <NavLink text="skills" href="/skills" index={1} visible={isLinkVisible} />
        <NavLink text="projects" href="/projects" index={2} visible={isLinkVisible} />
        <NavLink text="articles" href="/articles" index={3} visible={isLinkVisible} />
        {/* Add more links as needed */}
      </div>
    );
  };
  
  export default QuarterCircleNavigation;