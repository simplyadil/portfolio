'use client';

export default function EducationSection() {
  const education = [
    {
      institution: "[Stanford University], [Stanford, CA]",
      dates: "[2012] - [2018]",
      degree: "[Ph.D. in Computer Science]",
      details: [
        "[Dissertation: Advanced Machine Learning Algorithms for Complex Systems]",
        "[Advisor: Prof. [Name]]",
        "[GPA: 3.9/4.0]"
      ]
    },
    {
      institution: "[MIT], [Cambridge, MA]",
      dates: "[2008] - [2012]",
      degree: "[B.S. in Computer Science and Mathematics]",
      details: [
        "[Summa Cum Laude]",
        "[Phi Beta Kappa Honor Society]",
        "[Undergraduate Research in Artificial Intelligence]"
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
              <h3 className="text-base font-bold text-white">
                {edu.institution}
              </h3>
              <p className="text-gray-400 text-xs">
                {edu.dates}
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