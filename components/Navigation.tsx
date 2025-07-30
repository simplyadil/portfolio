'use client';

import { useEffect, useState } from 'react';

const sections = [
  { id: 'home', icon: 'ri-home-line', label: 'Home' },
  { id: 'experience', icon: 'ri-briefcase-line', label: 'Experience' },
  { id: 'awards', icon: 'ri-award-line', label: 'Awards' },
  { id: 'education', icon: 'ri-graduation-cap-line', label: 'Education' },
  { id: 'projects', icon: 'ri-folder-line', label: 'Projects' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState<string>('home');

  // Auto-update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = 'home';

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
            current = section.id;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 text-[11px]">
      <div className="bg-gray-800/30 backdrop-blur-lg border border-gray-600/30 rounded-full px-4 py-2 shadow-xl">
        <div className="flex items-center space-x-4">
          {sections.map(({ id, icon, label }) => {
            const isActive = id === activeSection;

            return (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="flex flex-col items-center space-y-0.5 text-gray-400 transition-colors cursor-pointer group"
              >
                <div
                  className={`w-7 h-7 flex items-center justify-center rounded-full transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 p-[2px]'
                      : ''
                  }`}
                >
                  <div
                    className={`w-full h-full flex items-center justify-center rounded-full ${
                      isActive
                        ? 'bg-gray-900 text-white'
                        : 'group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:via-yellow-400 group-hover:to-cyan-400 text-gray-400'
                    }`}
                  >
                    <i className={`text-[15px] ${icon}`}></i>
                  </div>
                </div>
                <span className="whitespace-nowrap text-gray-400 text-[8px]">
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
