import React, { useRef, useState } from "react";

const Deepseek = () => {
  const searchText = useRef(null);
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchText.current?.value.trim()) return;

    setIsLoading(true);
    setError("");
    setResponse("");

    try {
      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer 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",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "openai/gpt-3.5-turbo",
            messages: [{ role: "user", content: searchText.current.value }],
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      if (!data.choices?.[0]?.message?.content) {
        throw new Error("Invalid response structure");
      }

      setResponse(data.choices[0].message.content);
    } catch (err) {
      setError(err.message || "Failed to fetch response");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-red-900 pt-14">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-white mb-12 animate-fade-in">
            AI Search Assistant
          </h1>

          <form
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-2 shadow-xl transition-all duration-300 hover:shadow-2xl"
            onSubmit={handleSearch}
          >
            <div className="flex gap-2">
              <input
                ref={searchText}
                type="text"
                placeholder="Ask me anything..."
                className="flex-1 bg-transparent text-white placeholder-gray-300 px-6 py-4 rounded-xl border border-white/20 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 active:scale-95 transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "Search"
                )}
              </button>
            </div>
          </form>

          {error && (
            <div className="mt-6 p-4 bg-red-500/20 text-red-300 rounded-xl border border-red-500/30 animate-fade-in">
              ⚠️ Error: {error}
            </div>
          )}

          {response && (
            <div className="mt-8 p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 animate-fade-in">
              <h2 className="text-lg font-semibold text-white mb-4">
                Response:
              </h2>
              <div className="prose prose-invert text-gray-200 whitespace-pre-wrap">
                {response}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Deepseek;
