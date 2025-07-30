'use client';

export default function AwardsSection() {
  const awards = [
    {
      title: "[Outstanding Research Award]",
      organization: "[International AI Society]",
      year: "[2023]",
      description: "[Placeholder: Recognition for groundbreaking contributions to machine learning]"
    },
    {
      title: "[Best Paper Award]",
      organization: "[Conference on Neural Information Processing Systems]",
      year: "[2022]",
      description: "[Placeholder: Awarded for innovative approach to deep learning optimization]"
    },
    {
      title: "[Young Researcher Fellowship]",
      organization: "[National Science Foundation]",
      year: "[2021]",
      description: "[Placeholder: $500K fellowship for promising early-career scientists]"
    },
    {
      title: "[Academic Excellence Award]",
      organization: "[Stanford University]",
      year: "[2018]",
      description: "[Placeholder: Top 1% of graduating PhD students in Computer Science]"
    }
  ];

  return (
    <section id="awards" className="py-4">
      <h2 className="text-2xl font-bold text-white mb-4">
        Awards & Honors
      </h2>
      
      <div className="space-y-3">
        {awards.map((award, index) => (
          <div key={index} className="space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-base font-bold text-white">
                {award.title}
              </h3>
              <span className="text-gray-400 text-xs">
                {award.year}
              </span>
            </div>
            <p className="text-gray-300 font-medium text-xs">
              {award.organization}
            </p>
            <p className="text-gray-400 text-xs">
              {award.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}