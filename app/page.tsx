'use client';

import Navigation from '../components/Navigation';
import Header from '../components/Header';
import PapersSection from '../components/PapersSection'; // You no longer use this, can delete
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import AwardsSection from '../components/AwardsSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans pb-24">
      <main className="max-w-4xl mx-auto px-8 py-12 space-y-16">
        <Header />
        <div className="space-y-16">

          {/* --- Experience --- */}
          <div className="gradient-border-card">
            <ExperienceSection />
          </div>

          {/* --- Awards --- */}
          <div className="gradient-border-card">
            <AwardsSection />
          </div>

          {/* --- Education --- */}
          <div className="gradient-border-card">
            <EducationSection />
          </div>

          {/* --- Projects --- */}
          <div className="gradient-border-card">
            <ProjectsSection />
          </div>

        </div>
      </main>
      
      <Footer />
      <Navigation />
      
      <style jsx global>{`
        .gradient-border-card {
          position: relative;
          background: rgba(55, 65, 81, 0.3);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
          border: 2px solid rgba(55, 65, 81, 0.5);
        }
        
        .gradient-border-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          border: 2px solid transparent;
          background: rgba(55, 65, 81, 0.3);
          background-clip: padding-box;
          border-image: linear-gradient(45deg, 
            #ff6b6b, 
            #4ecdc4, 
            #45b7d1, 
            #96ceb4, 
            #ffeaa7, 
            #dda0dd, 
            #ff6b6b) 1;
        }
      `}</style>
    </div>
  );
}
