'use client';

export default function PapersSection() {
  const papers = [
    {
      title: "[Advancing Machine Learning Through Novel Algorithmic Approaches]",
      authors: "[Author 1], [Author 2], [Author 3]",
      venue: "[International Conference on Machine Learning] - [2024]"
    },
    {
      title: "[Deep Learning Applications in Computer Vision]",
      authors: "[Author 1], [Author 4], [Author 5]",
      venue: "[Nature Machine Intelligence] - [2023]"
    },
    {
      title: "[Optimization Techniques for Large-Scale Systems]",
      authors: "[Author 1], [Author 6]",
      venue: "[ACM Computing Surveys] - [2023]"
    },
    {
      title: "[Theoretical Foundations of Neural Networks]",
      authors: "[Author 1], [Author 2], [Author 7], [Author 8]",
      venue: "[Journal of Machine Learning Research] - [2022]"
    }
  ];

  return (
    <section id="papers" className="py-2 text-xs">
      <h2 className="text-xl font-semibold text-white mb-2">
        Published Papers
        </h2>
      <div className="space-y-4">
        {papers.map((paper, index) => (
          <div key={index}>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-white">
                {paper.title}
              </h3>
              <p className="text-gray-300 text-xs">
                {paper.authors}
              </p>
              <p className="text-gray-400 text-xs">
                {paper.venue}
              </p>
              <div className="flex space-x-2 mt-1">
                <button className="bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600/50 hover:border-blue-400/50 text-blue-400 hover:text-blue-300 transition-all duration-200 px-2 py-1 rounded-lg text-xs cursor-pointer whitespace-nowrap">
                  [PDF]
                </button>
                <button className="bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600/50 hover:border-blue-400/50 text-blue-400 hover:text-blue-300 transition-all duration-200 px-2 py-1 rounded-lg text-xs cursor-pointer whitespace-nowrap">
                  [BibTeX]
                </button>
              </div>
            </div>
            {index < papers.length - 1 && (
              <hr className="mt-4 border-gray-700" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}