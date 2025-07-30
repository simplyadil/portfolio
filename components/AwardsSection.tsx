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
    <div className="max-w-md mx-auto text-xs">
      <section id="awards" className="py-2">
        <h2 className="text-lg font-bold text-white mb-3">Awards & Honors</h2>
        <div className="space-y-2">
          {awards.map((award, index) => (
            <div key={index} className="space-y-1 bg-gray-900/80 border border-gray-700/50 rounded-lg p-2 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xs font-bold text-white">
                  {award.title}
                </h3>
                <span className="text-gray-400 text-[10px]">
                  {award.year}
                </span>
              </div>
              <p className="text-gray-300 font-medium text-[10px]">
                {award.organization}
              </p>
              <p className="text-gray-400 text-[10px]">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}