const SuggestedQuestions = ({ onQuestionClick }: { onQuestionClick: (question: string) => void }) => {
  const questions = [
    "Tell me about Muskan's experience with cloud technologies",
    "What are her key technical strengths?",
    "Is she currently available for opportunities?",
    "Walk me through her most recent project",
    "What certifications and credentials does she hold?",
    "Can you analyze a job description for fit?",
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full p-8">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-12 space-y-6 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Hi there!
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Looking to learn about Muskan?
          </p>
          <p className="text-base text-gray-400 leading-relaxed max-w-xl mx-auto">
            I'm her AI assistant, here to help. Ask me about her AWS migrations, React applications, startup experience, or availability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
          {questions.map((question, index) => (
            <button
              key={index}
              onClick={() => onQuestionClick(question)}
              className="bg-[#1a1a1a] hover:bg-[#252525] border border-white/10 hover:border-purple-500/30 text-gray-300 hover:text-white rounded-xl px-5 py-4 text-left transition-all duration-200 text-sm group"
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <span className="group-hover:text-purple-400 transition-colors duration-200">→</span> {question}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuggestedQuestions;
