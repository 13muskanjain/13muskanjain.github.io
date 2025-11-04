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
        <div className="text-center mb-12 space-y-3">
          <h1 className="text-5xl font-semibold text-white">Muskan Jain</h1>
          <p className="text-gray-500 text-lg">
            Ask me anything about her experience, skills, or background
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
          {questions.map((question, index) => (
            <button
              key={index}
              onClick={() => onQuestionClick(question)}
              className="bg-[#2F2F2F] hover:bg-[#3F3F3F] border border-white/10 text-gray-300 rounded-xl px-5 py-4 text-left transition-all duration-200 text-sm"
            >
              {question}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuggestedQuestions;
