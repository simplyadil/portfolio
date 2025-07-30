'use client';

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Oracle",
      location: "Casablanca, Morocco",
      dates: "Aug 2024 – Feb 2025",
      role: "Software Engineer",
      team: "Predictive Cash Forecasting",
      description:
        "Led the research and implementation of severity scoring, a data analysis pipeline, to quantify, analyze and translate customer payment behaviours into actionable insights and potential risk on model performance. Utilized advanced statistical measures such as Earth Mover's Distance, Kolmogorov-Smirnov (KS) Distance, coupled with targeted data manipulation to assess the significance of these behaviors on model predictions.",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png"
    },
    {
      company: "Oracle Labs",
      location: "Casablanca, Morocco",
      dates: "Feb 2024 – Aug 2024",
      role: "Research Assistant",
      team: "SQLFixit",
      description:
        "Led the automation of schema injection and retrieval from OracleDB, enabling seamless LLM evaluation on a dynamically populated database. Fine-tuned large models on data created by the synthetic data generator, achieving a 40% performance boost on complex NL2SQL tasks. Automated SQL schema generation for the system enhancing data robustness and diversification.",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png"
    },
    {
      company: "OCP Group",
      location: "Safi, Morocco",
      dates: "Jul 2023 – Sep 2023",
      role: "Data Science Intern",
      team: "Energy Production Forecasting",
      description:
        "Engineered data using Pandas and NumPy and built and compared multiple models (linear regression, random forest, shallow neural network) using Scikit-learn and TensorFlow. Deployed the optimal model on GCP using Docker for real-time predictions and created dashboards with PowerBI for data visualization.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/OCP_Group_logo.svg/2560px-OCP_Group_logo.svg.png"
    }
  ];

  return (
    <section id="experience" className="py-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        Work Experience
      </h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/40 rounded-xl p-6 shadow-md transition hover:shadow-xl">
            <div className="flex items-start gap-4">
              {/* Company Logo */}
              <div className="w-16 h-16 bg-white rounded-lg p-2 flex-shrink-0 flex items-center justify-center">
                <img 
                  src={exp.logo} 
                  alt={`${exp.company} logo`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="w-full h-full bg-gray-200 rounded flex items-center justify-center text-gray-600 text-xs font-bold">${exp.company.charAt(0)}</div>`;
                    }
                  }}
                />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-white font-semibold text-base">{exp.company}</h3>
                    <p className="text-gray-400 text-xs">{exp.location}</p>
                  </div>
                  <span className="text-blue-400 text-xs font-medium bg-blue-400/10 px-2 py-1 rounded">
                    {exp.dates}
                  </span>
                </div>
                
                <p className="text-gray-300 font-medium text-sm mb-1">{exp.role}</p>
                <p className="text-blue-400 text-xs mb-3 underline underline-offset-2">
                  {exp.team}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}