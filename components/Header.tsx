
'use client';

export default function Header() {
  return (
    <header id="home" className="flex justify-center py-16">
      <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl p-4 max-w-sm w-full text-center shadow-md text-sm">
        {/* Profile Image */}
        <div className="mb-6">
          <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-blue-500/50">
            <img 
              src="https://readdy.ai/api/search-image?query=professional%20headshot%20portrait%20of%20a%20young%20researcher%20in%20computer%20science%2C%20clean%20background%2C%20high%20quality%2C%20modern%20lighting&width=200&height=200&seq=profile-pic&orientation=squarish"
              alt="Profile"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-2xl font-bold text-white mb-2">
          Adil Lagrou
        </h1>
        <h2 className="text-lg text-gray-300 mb-4">
          Machine Learning Engineer
        </h2>
        
        {/* Bio */}
        <p className="text-sm text-gray-400 mb-6 leading-relaxed">
          A PhD student at Polytechnique Montreal specializing in the intersection of AI and data systems. My research focuses on multimodal data integration, tabular understanding, and enhancing database systems with large language models.
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <span className="px-3 py-1 bg-blue-600/30 text-blue-300 text-xs rounded-full">
            Data & AI Systems
          </span>
          <span className="px-3 py-1 bg-teal-600/30 text-teal-300 text-xs rounded-full">
            Multimodal Data Integration
          </span>
          <span className="px-3 py-1 bg-green-600/30 text-green-300 text-xs rounded-full">
            Tabular Understanding
          </span>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          <button className="w-10 h-10 flex items-center justify-center bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 rounded-lg transition-colors cursor-pointer">
            <i className="ri-linkedin-line text-lg"></i>
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-gray-600/20 hover:bg-gray-600/40 text-gray-400 rounded-lg transition-colors cursor-pointer">
            <i className="ri-github-line text-lg"></i>
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-blue-500/20 hover:bg-blue-500/40 text-blue-400 rounded-lg transition-colors cursor-pointer">
            <i className="ri-twitter-line text-lg"></i>
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-red-600/20 hover:bg-red-600/40 text-red-400 rounded-lg transition-colors cursor-pointer">
            <i className="ri-mail-line text-lg"></i>
          </button>
        </div>
      </div>
    </header>
  );
}