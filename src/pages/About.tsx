const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Me</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate software engineer with a focus on cloud-native solutions and modern web technologies
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              I'm a <span className="font-semibold text-blue-600">Software Engineer</span> with nearly <span className="font-semibold">5 years of experience</span> building and improving 
              web, cloud, and enterprise applications. Currently working at <span className="font-semibold">Compunnel Inc.</span> in Dallas, TX.
            </p>
            
            <p>
              My expertise spans across <span className="font-semibold text-purple-600">full-stack development</span>, <span className="font-semibold text-blue-600">cloud infrastructure</span>, and <span className="font-semibold text-green-600">DevOps practices</span>.
              I specialize in creating scalable, secure, and maintainable solutions that enhance system 
              performance and support business needs.
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded"></span>
            Experience
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900">DevOps Engineer / Software Engineer</h3>
              <p className="text-blue-600 font-medium mb-3">Compunnel Inc. | Jan 2025 - Present</p>
              <p className="text-gray-700 leading-relaxed">
                Reduced deployment time by 40% using AWS EKS, Kubernetes, and Argo CD.
                Automated multi-cloud provisioning with Terraform and GitHub Actions.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-600 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900">Software Engineer</h3>
              <p className="text-purple-600 font-medium mb-3">Oracle Corporation | May 2023 - Dec 2024</p>
              <p className="text-gray-700 leading-relaxed">
                Engineered RESTful and GraphQL APIs handling over 5 million daily transactions.
                Implemented Redis caching improving throughput by 30%.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-600 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900">Software Engineer</h3>
              <p className="text-green-600 font-medium mb-3">SWIFTE | Sep 2022 - Apr 2023</p>
              <p className="text-gray-700 leading-relaxed">
                Enhanced React.js/Redux applications decreasing page load times by 45%.
                Deployed containerized services to Azure AKS clusters.
              </p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded"></span>
            Education
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
            <h3 className="text-xl font-bold text-gray-900">Master of Science in Computer Science</h3>
            <p className="text-orange-600 font-medium mb-2">The University of Texas at Arlington</p>
            <p className="text-gray-600">Graduated: May 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
