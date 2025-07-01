# LaunchPilot - AI Launch Consultant 🚀

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FMeerisha%2Flaunch-pilot-ai&env=REDIS_URL)

<a href="https://cursor.com/install-mcp?name=launch-pilot&config=eyJ1cmwiOiJodHRwczovL2xhdW5jaC1waWxvdC1haS52ZXJjZWwuYXBwL3NzZSJ9"><img src="https://cursor.com/deeplink/mcp-install-dark.svg" alt="Add LaunchPilot MCP server to Cursor" height="32" /></a>

An AI-powered Model Context Protocol server that transforms raw ideas into revenue-generating products and courses. LaunchPilot provides intelligent launch consulting through comprehensive project analysis, revenue forecasting, and strategic planning.

## 🎯 What is LaunchPilot?

LaunchPilot is your autonomous AI consultant that helps entrepreneurs and creators:

- **Analyze project viability** with market assessment and resource evaluation
- **Generate revenue forecasts** with detailed financial projections and break-even analysis  
- **Create launch strategies** with customized go-to-market plans and timeline
- **Provide actionable insights** based on your specific constraints and goals

**Perfect for**: Entrepreneurs, course creators, SaaS builders, and anyone ready to turn their idea into a profitable venture.

## 🚀 Features

### 🎯 Project Intake & Analysis
- Comprehensive project assessment
- Market viability scoring
- Resource evaluation and risk analysis
- Personalized recommendations

### 📊 Revenue Forecasting
- Financial projections with scenario analysis
- Break-even calculations
- Customer acquisition modeling
- Pricing optimization suggestions

### 🗺️ Launch Strategy Generation
- Customized go-to-market strategies
- Channel prioritization and budget allocation
- Content marketing calendars
- Partnership recommendations

## 📋 Table of Contents

- [🚀 Quick Start](#-quick-start) - One-click installation
- [🛠️ For Developers](#️-for-developers-local-development-setup) - Local development setup
- [⚙️ Setup](#setup) - Manual configuration
- [🧪 Testing](#-testing) - Tool discovery and testing
- [📱 Integration](#-integration-with-ai-tools) - Claude Desktop & Cursor
- [🔧 Troubleshooting](#-troubleshooting) - Common issues and solutions

## 🚀 Quick Start

Get instant access to LaunchPilot's intelligent launch consulting:

### One-Click Installation

<a href="https://cursor.com/install-mcp?name=launch-pilot&config=eyJ1cmwiOiJodHRwczovL2xhdW5jaC1waWxvdC1haS52ZXJjZWwuYXBwL3NzZSJ9"><img src="https://cursor.com/deeplink/mcp-install-dark.svg" alt="Add LaunchPilot MCP server to Cursor" height="32" /></a>

_Click the button above to automatically add LaunchPilot to Cursor._

## 🛠️ For Developers: Local Development Setup

If you want to clone this repository and develop/test LaunchPilot locally:

### Setting Up Local MCP Server

1. **Clone and setup:**

   ```sh
   git clone https://github.com/Meerisha/launch-pilot-ai.git
   cd launch-pilot-ai
   pnpm run setup
   ```

2. **Generate your local Cursor deeplink:**

   ```sh
   pnpm generate:cursor-link
   ```

3. **Or manually add to Cursor configuration:**
   ```json
   {
     "mcpServers": {
       "launch-pilot-local": {
         "command": "node",
         "args": [
           "/ABSOLUTE/PATH/TO/YOUR/PROJECT/scripts/test-streamable-http-client.mjs",
           "http://localhost:3000"
         ]
       }
     }
   }
   ```

Replace `/ABSOLUTE/PATH/TO/YOUR/PROJECT` with your actual project path.

## ⚙️ Setup

### Quick Setup (Recommended)

Run the automated setup script to install dependencies and configure Redis:

```sh
pnpm run setup
```

This script will:

- Check for Docker installation
- Start a Redis container for SSE transport
- Create/update `.env.local` with Redis configuration
- Provide next steps for testing

### Manual Setup

If you prefer manual setup, install the required dependencies:

```sh
npm install @modelcontextprotocol/sdk @upstash/redis
# or
pnpm install @modelcontextprotocol/sdk @upstash/redis
```

## 🧪 Testing

### Sample Clients

This project includes two sample clients:

#### SSE Client (requires Redis)

`scripts/test-client.mjs` - Uses Server-Sent Events transport

#### HTTP Client (no Redis required)

`scripts/test-streamable-http-client.mjs` - Uses streamable HTTP transport

### Testing LaunchPilot Tools

```sh
# Test project intake analysis
node scripts/test-launchpilot-tool.mjs http://localhost:3000

# Test against deployed server
node scripts/test-client.mjs https://launch-pilot-ai.vercel.app
```

### Local Development Testing

Start your Next.js development server:

```sh
npm run dev
# or
pnpm dev
```

Then test with the HTTP client:

```sh
node scripts/test-streamable-http-client.mjs http://localhost:3000
```

## 📱 Integration with AI Tools

### Claude Desktop

Add this to your Claude Desktop MCP configuration:

```json
{
  "mcpServers": {
    "launch-pilot": {
      "command": "node",
      "args": [
        "/path/to/launch-pilot/scripts/test-streamable-http-client.mjs",
        "https://launch-pilot-ai.vercel.app"
      ]
    }
  }
}
```

### Cursor

Use the one-click install button above or manually configure:

```json
{
  "mcpServers": {
    "launch-pilot": {
      "command": "node",
      "args": [
        "/path/to/launch-pilot/scripts/test-streamable-http-client.mjs", 
        "https://launch-pilot-ai.vercel.app"
      ]
    }
  }
}
```

## 🎯 Using LaunchPilot

### Project Intake Analysis

```javascript
// Example usage through MCP
const analysis = await launchPilot.projectIntakeAnalysis({
  projectName: "Zero-to-Launch Bootcamp",
  elevatorPitch: "Comprehensive course teaching entrepreneurs how to launch profitable products in 90 days",
  targetAudience: "Solo entrepreneurs, 25-45, struggling with product launches",
  launchGoal: "$25k revenue in 60 days, 200 paid students",
  riskTolerance: "medium",
  // ... other parameters
});
```

### Revenue Forecasting

```javascript
const forecast = await launchPilot.calculateRevenueProjections({
  productType: "course",
  pricePoint: 297,
  targetCustomers: 100,
  timeframe: 3,
  // ... other parameters
});
```

### Launch Strategy Generation

```javascript
const strategy = await launchPilot.generateLaunchStrategy({
  projectType: "course",
  budget: 5000,
  timeframe: 12,
  audienceSize: 1000,
  revenueGoal: 25000,
  channels: ["email", "linkedin", "content-marketing"]
});
```

## 🔧 Tools Available

LaunchPilot provides three main MCP tools:

1. **`project_intake_analysis`** - Comprehensive project assessment
2. **`calculate_revenue_projections`** - Financial forecasting and planning
3. **`generate_launch_strategy`** - Strategic planning and execution roadmap

## 🌟 Example Outputs

### Project Analysis
- Market viability assessment
- Resource and capability evaluation  
- Risk factor identification
- Recommended approach and timeline

### Revenue Projections
- Monthly revenue breakdown
- Break-even analysis
- Scenario planning (conservative/realistic/optimistic)
- Pricing and conversion recommendations

### Launch Strategy
- Phase-by-phase launch timeline
- Budget allocation recommendations
- Content marketing calendar
- Partnership and channel strategies

## 🔒 Environment Variables

The MCP server automatically detects and uses the appropriate Redis configuration:

### Priority Order:
1. **Upstash Redis** (Production) - If `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` are set
2. **Local Redis** (Development) - If `REDIS_URL` is set
3. **No Redis** - HTTP transport only

## 📊 Protocol Endpoints

- **HTTP MCP**: `/mcp` - Direct HTTP transport
- **SSE MCP**: `/sse` - Server-Sent Events transport (requires Redis)
- **Web Interface**: `/` - Interactive LaunchPilot form

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Built with the Model Context Protocol (MCP) SDK and Next.js. Inspired by the need for intelligent, data-driven launch consulting for entrepreneurs and creators.

---

**Ready to turn your idea into revenue?** Get started with LaunchPilot today! 🚀
