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
    <div className="max-w-md mx-auto text-xs">
      <section id="papers" className="py-2">
        <h2 className="text-lg font-bold text-white mb-3">Published Papers</h2>
        <div className="space-y-2">
          {papers.map((paper, index) => (
            <div key={index} className="bg-gray-900/80 border border-gray-700/50 rounded-lg p-2 text-xs">
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-white">{paper.title}</h3>
                <p className="text-gray-300 text-[10px]">{paper.authors}</p>
                <p className="text-gray-400 text-[10px]">{paper.venue}</p>
                <div className="flex space-x-1 mt-1">
                  <button className="bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600/50 hover:border-blue-400/50 text-blue-400 hover:text-blue-300 transition-all duration-200 px-2 py-0.5 rounded-lg text-[10px] cursor-pointer whitespace-nowrap">[PDF]</button>
                  <button className="bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600/50 hover:border-blue-400/50 text-blue-400 hover:text-blue-300 transition-all duration-200 px-2 py-0.5 rounded-lg text-[10px] cursor-pointer whitespace-nowrap">[BibTeX]</button>
                </div>
              </div>
              {index < papers.length - 1 && (
                <hr className="mt-2 border-gray-700" />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}