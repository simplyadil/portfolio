'use client';

export default function EducationSection() {
  const education = [
    {
      institution: "Mohammed VI International Academy of Civil Aviation",
      location: "Casablanca, Morocco",
      dates: "2019 - 2024",
      degree: "Master of Engineering (MEng) in Computer Science",
      details: [
        "Thesis: SQL finetuning data generation using Large Language Models. In collaboration with Oracle Labs",
        "Education: 2 years in Preparatory Classes (Technology & Industrial Science option)",
        "Specialized in machine learning, database systems, and AI research"
      ]
    }
  ];

  return (
    <section id="education" className="py-4">
      <h2 className="text-2xl font-bold text-white mb-4">
        Education
      </h2>
      
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index}>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                <h3 className="text-base font-bold text-white">
                  {edu.institution}
                </h3>
                <span className="text-gray-400 text-xs">
                  {edu.dates}
                </span>
              </div>
              <p className="text-gray-400 text-xs">
                {edu.location}
              </p>
              <p className="text-gray-300 font-medium text-xs">
                {edu.degree}
              </p>
              <ul className="space-y-0.5 mt-2">
                {edu.details.map((detail, i) => (
                  <li key={i} className="text-gray-300 flex items-start text-xs">
                    <span className="mr-2 mt-1 w-1 h-1 bg-gray-500 rounded-full flex-shrink-0"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            {index < education.length - 1 && (
              <hr className="mt-4 border-gray-700" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}