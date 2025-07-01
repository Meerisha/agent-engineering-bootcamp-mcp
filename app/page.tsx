import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LaunchPilot - AI Launch Consultant',
  description: 'Transform your raw idea into a revenue-generating product or course with AI-powered launch consulting.',
}

export default function LaunchPilotHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-5">
      <div className="max-w-4xl w-full bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-pink-400 to-rose-400 text-white p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-5xl font-black mb-4">🚀 LaunchPilot</div>
            <p className="text-xl font-medium mb-3 opacity-95">AI Launch Consultant</p>
            <p className="text-base opacity-80 max-w-2xl mx-auto">
              Transform your raw idea into a revenue-generating product or course with intelligent, data-driven guidance
            </p>
          </div>
          <div className="absolute inset-0 bg-white/5 opacity-20"></div>
        </div>

        {/* Features Section */}
        <div className="p-12">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <span className="text-5xl mb-5 block">🎯</span>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Project Analysis</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comprehensive intake analysis with market viability assessment, resource evaluation, and risk factor identification
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <span className="text-5xl mb-5 block">📊</span>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Revenue Forecasting</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Detailed financial projections, break-even analysis, and scenario planning to maximize your launch success
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <span className="text-5xl mb-5 block">🗺️</span>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Launch Strategy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Customized go-to-market strategy with timeline, budget allocation, and channel prioritization
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Idea?</h2>
          <p className="text-lg mb-8 opacity-90">
            Get your personalized launch strategy in minutes
          </p>

          <div className="max-w-lg mx-auto bg-white/95 rounded-2xl p-8 text-gray-800 text-left">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-5">
                <label htmlFor="projectName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Name
                </label>
                <input
                  type="text"
                  id="projectName"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                  placeholder="e.g., Zero-to-Launch Bootcamp"
                  required
                />
              </div>

              <div className="mb-5">
                <label htmlFor="elevatorPitch" className="block text-sm font-semibold text-gray-700 mb-2">
                  Elevator Pitch (≤ 300 characters)
                </label>
                <textarea
                  id="elevatorPitch"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors resize-none h-24"
                  placeholder="Describe your project in 50 words or less..."
                  maxLength={300}
                  required
                ></textarea>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div>
                  <label htmlFor="targetAudience" className="block text-sm font-semibold text-gray-700 mb-2">
                    Target Audience
                  </label>
                  <input
                    type="text"
                    id="targetAudience"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                    placeholder="e.g., Solo entrepreneurs, 25-45"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="launchGoal" className="block text-sm font-semibold text-gray-700 mb-2">
                    Launch Goal (SMART)
                  </label>
                  <input
                    type="text"
                    id="launchGoal"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                    placeholder="e.g., $25k revenue in 60 days"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div>
                  <label htmlFor="riskTolerance" className="block text-sm font-semibold text-gray-700 mb-2">
                    Risk Tolerance
                  </label>
                  <select
                    id="riskTolerance"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                    required
                  >
                    <option value="">Select...</option>
                    <option value="low">Low - Conservative approach</option>
                    <option value="medium">Medium - Balanced approach</option>
                    <option value="high">High - Aggressive approach</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="launchWindow" className="block text-sm font-semibold text-gray-700 mb-2">
                    Launch Window
                  </label>
                  <input
                    type="text"
                    id="launchWindow"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                    placeholder="e.g., Q1 2024 or ASAP"
                    required
                  />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="creatorSkills" className="block text-sm font-semibold text-gray-700 mb-2">
                  Skills & Resources
                </label>
                <textarea
                  id="creatorSkills"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors resize-none h-20"
                  placeholder="Team size, tech stack, budget, follower count, email list..."
                  required
                ></textarea>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="existingAssets" className="block text-sm font-semibold text-gray-700 mb-2">
                    Existing Assets
                  </label>
                  <input
                    type="text"
                    id="existingAssets"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                    placeholder="Docs, videos, designs, etc."
                  />
                </div>
                <div>
                  <label htmlFor="constraints" className="block text-sm font-semibold text-gray-700 mb-2">
                    Key Constraints
                  </label>
                  <input
                    type="text"
                    id="constraints"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                    placeholder="No paid ads, GDPR compliance, etc."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0"
              >
                Generate Launch Strategy
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
              <p>
                MCP Protocol endpoint: <code className="bg-gray-100 px-2 py-1 rounded text-xs">/mcp</code>
                <br />
                Integrate with Cursor, Claude Desktop, or any MCP-compatible tool
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
