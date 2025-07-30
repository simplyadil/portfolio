'use client';


export default function ExperienceSection() {
  const experiences = [
    {
      company: "Oracle Labs",
      location: "Casablanca, Morocco",
      dates: "February 2024 – July 2024",
      role: "Research Assistant",
      team: "Data Integration Team",
      description:
        "Automated schema generation for Oracle's Financial Crimes & Compliance systems, enhancing data processing. Fine-tuned 7B models to optimize schema and handle abbreviated column names. Created a framework to evaluate schema generation and data integration accuracy. Improved metadata consistency from 0.4 to 0.6, boosting data interpretability. Optimized output parsing for better data flow and results with 7B models."
    },
    {
      company: "Oracle Labs",
      location: "Casablanca, Morocco",
      dates: "June 2023 – August 2023",
      role: "Research Assistant",
      team: "AutoMLx Team",
      description:
        "Enhanced machine learning explainability for the AutoMLx project by optimizing LFI/GFI explainers, reducing their processing time by 80% and improving inference speed. Streamlined memory usage from 20GB to 4GB. Achieved 83% code coverage. Collaborated with cross-functional teams to deliver high-performance explainability solutions."
    },
    {
      company: "National University of Rabat",
      location: "Rabat, Morocco",
      dates: "July 2022 – August 2022",
      role: "Research Assistant",
      team: "Valuation and Transfer Management",
      description:
        "Engineered a deep learning model to predict RFID pricing by scraping specifications and market data. Deployed the solution on GCP using Docker and built a Django app to streamline data collection and real-time testing."
    }
  ];

  return (
    <section id="experience" className="py-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        Work Experience
      </h2>

      <div className="relative pl-6 ml-1 space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="relative group">
            {/* Dot */}
            <span className="absolute -left-[11px] top-5 w-4 h-4 bg-blue-500 border-2 border-white rounded-full shadow-md z-10"></span>

            {/* Card */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/40 rounded-xl p-5 shadow-md transition hover:shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-white font-semibold text-base">{exp.company}</h3>
              </div>
              <p className="text-gray-400 text-xs mb-1">{exp.location}</p>
              <p className="text-gray-300 font-medium text-sm">{exp.role}</p>
              <p className="text-blue-400 text-xs mb-3 underline underline-offset-2">
                {exp.team}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {exp.description}
              </p>
              <div className="mt-4 text-xs text-right text-gray-400">
                {exp.dates}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
