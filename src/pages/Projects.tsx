const Projects = () => {
  const projects = [
    {
      title: 'Weather App',
      description: 'A beautiful weather application that provides real-time weather information for any city worldwide with an intuitive interface.',
      tech: ['JavaScript', 'Weather API', 'HTML/CSS'],
      link: 'https://github.com/13muskanjain/weather-app',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'Encrypted Chat App',
      description: 'Secure real-time chat application implementing Diffie-Hellman encryption protocol for end-to-end encrypted messaging.',
      tech: ['PHP', 'Cryptography', 'WebSockets'],
      link: 'https://github.com/13muskanjain/Encrypted-Chat-App',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'GPTSummify',
      description: 'AI-powered text summarization tool leveraging advanced GPT models to create concise and accurate summaries.',
      tech: ['Python', 'OpenAI API', 'React'],
      link: 'https://github.com/13muskanjain/GPTSummify',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      title: 'GitOps SonarQube Integration',
      description: 'Automated GitOps-based code quality analysis pipeline with SonarQube integration for continuous code inspection.',
      tech: ['JavaScript', 'GitOps', 'SonarQube', 'CI/CD'],
      link: 'https://github.com/13muskanjain/gitops-integrate-sonarqube-for-code-analysis-repo',
      gradient: 'from-orange-400 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing my work in web development, cloud infrastructure, and DevOps automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
                >
                  View on GitHub
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
