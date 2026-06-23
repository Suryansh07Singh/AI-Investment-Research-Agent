# AI Investment Research Agent

## Overview

AI Investment Research Agent is a multi-agent application that helps users evaluate a company as a potential investment opportunity.

Instead of relying on a single prompt, the system breaks the analysis into multiple specialized AI agents. Each agent focuses on a specific task such as company research, recent news analysis, SWOT analysis, risk assessment, and final investment recommendation.

The goal is to provide a structured and easy-to-understand investment report that helps users quickly understand a company's strengths, weaknesses, risks, and overall investment potential.

### Features

* Company overview and business research
* Recent news and sentiment analysis
* SWOT analysis
* Risk assessment
* Final investment recommendation
* Investment score visualization
* Modern and responsive UI

---

# Tech Stack

### Frontend

* Next.js
* Tailwind CSS
* Axios
* React Spinners

### Backend

* Node.js
* Express.js

### AI & Agent Framework

* LangChain.js
* LangGraph.js
* Groq API
* Llama 3.3 70B

---

# How to Run It

## 1. Clone the Repository

git clone <repository-url>
cd invest-ai

---

## 2. Install Backend Dependencies

cd backend

npm install

---

## 3. Install Frontend Dependencies

cd ../frontend

npm install

---

## 4. Create Environment Variables

Create a `.env` file inside the backend folder.

GROQ_API_KEY=your_groq_api_key

You can generate a Groq API key from:

https://console.groq.com

---

## 5. Start Backend

cd backend

npm run dev

Backend runs on:

http://localhost:5000

---

## 6. Start Frontend

cd frontend

npm run dev

Frontend runs on:

http://localhost:3000

---

## 7. Use the Application

1. Open the frontend in your browser.
2. Enter a company name.
3. Click Analyze.
4. View the generated investment report.

---

# How It Works

The application follows a multi-agent architecture powered by LangGraph.

Instead of asking one large prompt to perform every task, the workflow is divided into multiple specialized agents.

### Workflow

User
  ↓
Frontend (Next.js)
  ↓
Express API
  ↓
LangGraph Workflow
  ↓
Research Agent
  ↓
News Agent
  ↓
SWOT Agent
  ↓
Risk Agent
  ↓
Decision Agent
  ↓
Frontend Dashboard

---

## Agent Responsibilities

### 1. Research Agent

Collects and summarizes:

* Company overview
* Industry information
* CEO details
* Headquarters
* Competitors

Output:

{
  "overview": "",
  "industry": "",
  "ceo": "",
  "headquarters": "",
  "competitors": []
}

---

### 2. News Agent

Analyzes recent developments related to the company.

Output:

{
  "news": [
    {
      "title": "",
      "date": "",
      "description": ""
    }
  ]
}

---

### 3. SWOT Agent

Generates:

* Strengths
* Weaknesses
* Opportunities
* Threats

Output:

{
  "strengths": [],
  "weaknesses": [],
  "opportunities": [],
  "threats": []
}

---

### 4. Risk Agent

Evaluates investment risks.

Output:

{
  "risk_level": "",
  "competition_risk": "",
  "market_risk": "",
  "regulatory_risk": ""
}

---

### 5. Decision Agent

Combines all previous analysis and generates a final recommendation.

Output:

{
  "investment_score": 8,
  "recommendation": "INVEST",
  "reasoning": []
}

---

# Key Decisions & Trade-Offs

## Why LangGraph?

The assignment specifically required LangChain.js and LangGraph.js.

Instead of using a single prompt, I implemented a workflow-based architecture where multiple agents collaborate to generate the final report.

This approach makes the system:

* Easier to extend
* Easier to debug
* More modular
* Closer to real-world AI agent systems

---

## Why Groq + Llama 3.3 70B?

I selected Groq because it provides extremely fast inference and supports powerful open-source models.

Llama 3.3 70B offers a good balance between reasoning quality and response speed.

---

## Why Separate Agents?

Using individual agents helps isolate responsibilities.

For example:

* News analysis is independent from SWOT analysis.
* Risk assessment is independent from company research.
* Final recommendations can use outputs from all previous agents.

This makes the workflow more organized and maintainable.

---

## Trade-Offs

### What I Included

* Multi-agent architecture
* Structured JSON outputs
* LangGraph workflow orchestration
* Modern UI dashboard

### What I Left Out

* Real-time stock prices
* Financial statement analysis
* Vector databases
* RAG pipelines
* Historical stock chart analysis

These features were outside the scope of the assignment and would require additional APIs and infrastructure.

---

# Example Runs

## Example 1: Microsoft

### Recommendation

BUY

### Investment Score

7/10

### Key Reasons

* Strong ecosystem and brand loyalty
* Consistent profitability
* Significant investment in AI and innovation

---
## Application Preview

![Microsoft](./screenshots/microsoft-analysis.png)

## Example 2: Tesla

### Recommendation

BUY

### Investment Score


7/10


### Key Reasons

* High market volatility
* Increasing competition in EV market
* Regulatory and production risks

---
## Application Preview

![Tesla](./screenshots/tesla-analysis.png)

## Example 3: Nvidia

### Recommendation

BUY

### Investment Score

8/10

### Key Reasons

* Leader in the graphics processing unit (GPU) market
* Strong brand recognition and loyalty
* Significant investments in research and development

---
## Application Preview

![Nvidia](./screenshots/nvidia-analysis.png)

# Challenges Faced

During development I encountered several challenges:

* Integrating LangGraph with the existing project structure
* Handling JSON parsing from LLM responses
* Maintaining a consistent output format across all agents
* Updating the frontend to support richer structured news objects

These challenges were resolved by introducing dedicated prompts, a safe JSON parser, and a structured state workflow.

---

# What I Would Improve With More Time

If given more time, I would focus on the following enhancements:

### 1. Real-Time Financial Data

Integrate financial APIs to fetch:

* Revenue
* Profitability
* Market capitalization
* P/E ratio
* Earnings reports

---

### 2. RAG-Based Research

Use:

* Vector databases
* Embeddings
* Retrieval-Augmented Generation

to improve factual accuracy and provide source-backed analysis.

---

### 3. Parallel Agent Execution

Some agents such as News and SWOT could run simultaneously, reducing overall response time.

---

### 4. Historical Stock Analysis

Include:

* Stock price trends
* Technical indicators
* Historical performance charts

---

### 5. Explainable Recommendations

Provide detailed reasoning and confidence scores for each recommendation.

---

# Conclusion

This project demonstrates how multiple AI agents can collaborate through a LangGraph workflow to perform structured investment research.

By combining LangChain, LangGraph, Groq, and Llama 3.3 70B, the application generates a comprehensive investment report that is easy to understand and scalable for future enhancements.
