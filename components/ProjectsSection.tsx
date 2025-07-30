'use client';

export default function ProjectsSection() {
  const projects = [
    {
      title: "QueryIQ",
      description: "Intelligent SQL Query Optimization Engine managing the entire project from infrastructure design to code implementation. Developed ML pipeline to analyze and optimize query performance in real time, improving query execution times and database efficiency.",
      technologies: "Python, SQL, Machine Learning, Database Optimization",
      date: "Current",
      links: [
        { label: "GitHub", icon: "ri-github-line" },
        { label: "Demo", icon: "ri-external-link-line" }
      ]
    },
    {
      title: "Sentience",
      description: "ML-Native Programming Language created from scratch with custom lexer, parser, and interpreter. Features native machine learning and data analysis capabilities, streamlining data processing and enabling seamless AI model integration.",
      technologies: "Compiler Design, Language Development, Machine Learning",
      date: "2024",
      links: [
        { label: "GitHub", icon: "ri-github-line" },
        { label: "Documentation", icon: "ri-file-text-line" }
      ]
    },
    {
      title: "EDAgent",
      description: "Data Analysis Copilot - Interactive Streamlit application for automated Exploratory Data Analysis (EDA). Integrates Google Gemini GenAI via LangChain+LangGraph to generate dynamic data insights, visualizations, and reports from user-uploaded datasets.",
      technologies: "Python, Streamlit, LangChain, LangGraph, Google Gemini",
      date: "2024",
      links: [
        { label: "GitHub", icon: "ri-github-line" },
        { label: "Live Demo", icon: "ri-external-link-line" }
      ]
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">
        My Latest Projects
      </h2>
      
      <section id="projects" className="py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-900/80 border border-gray-700/50 rounded-xl overflow-hidden hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 group"
            >
              {/* Project Preview Area */}
              <div className="h-32 bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center border-b border-gray-700/30">
                <div className="text-gray-500 text-2xl">
                  <i className="ri-code-box-line"></i>
                </div>
              </div>
              
              {/* Content Area */}
              <div className="p-4 space-y-3">
                {/* Title and Date */}
                <div className="flex items-start justify-between">
                  <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-gray-400 text-xs font-medium bg-gray-800/50 px-2 py-1 rounded">
                    {project.date}
                  </span>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 text-xs leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="text-gray-400 text-xs">
                  <span className="font-medium">Tech Stack:</span> {project.technologies}
                </div>
                
                {/* Links */}
                <div className="flex gap-2 pt-1">
                  {project.links.map((link, i) => (
                    <button 
                      key={i}
                      className="flex items-center gap-1 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/30 hover:border-blue-400/50 text-gray-300 hover:text-blue-300 transition-all duration-200 px-3 py-1 rounded-lg text-xs cursor-pointer"
                    >
                      <i className={`${link.icon} text-xs`}></i>
                      <span>{link.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}