const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          <div className="inline-block">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Muskan Jain</span>
            </h1>
            <div className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </div>
          
          <p className="text-2xl md:text-3xl text-gray-700 font-medium">
            Software Engineer | DevOps Enthusiast
          </p>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Building scalable cloud solutions with modern technologies. 
            Passionate about React, TypeScript, AWS, and Kubernetes.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <a
              href="https://github.com/13muskanjain"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                View GitHub
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            
            <a
              href="https://www.linkedin.com/in/muskan-jain-850a15190/"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-xl font-semibold shadow-lg hover:bg-blue-600 hover:text-white transform hover:-translate-y-1 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                LinkedIn
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tech Stack</h2>
          <p className="text-gray-600 text-lg">Technologies I work with daily</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'React', color: 'from-blue-400 to-cyan-400' },
            { name: 'TypeScript', color: 'from-blue-600 to-blue-700' },
            { name: 'Node.js', color: 'from-green-500 to-green-600' },
            { name: 'Python', color: 'from-yellow-500 to-blue-500' },
            { name: 'AWS', color: 'from-orange-500 to-orange-600' },
            { name: 'Kubernetes', color: 'from-blue-500 to-purple-500' },
            { name: 'Docker', color: 'from-blue-400 to-blue-600' },
            { name: 'Terraform', color: 'from-purple-500 to-purple-600' }
          ].map((skill) => (
            <div
              key={skill.name}
              className="group relative overflow-hidden bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <p className="relative text-xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="text-5xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-gray-600 text-lg">Years Experience</div>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="text-5xl font-bold text-purple-600 mb-2">10+</div>
            <div className="text-gray-600 text-lg">Projects Completed</div>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="text-5xl font-bold text-green-600 mb-2">4</div>
            <div className="text-gray-600 text-lg">Companies Worked</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
