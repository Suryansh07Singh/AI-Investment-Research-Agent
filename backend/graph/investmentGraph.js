import { StateGraph, START, END } from "@langchain/langgraph";

import { researchAgent } from "../agents/researchAgent.js";
import { newsAgent } from "../agents/newsAgent.js";
import { swotAgent } from "../agents/swotAgent.js";
import { riskAgent } from "../agents/riskAgent.js";
import { decisionAgent } from "../agents/decisionAgent.js";

const graph = new StateGraph({
    channels: {
        companyName: {},
        ticker: {},
        research: {},
        news: {},
        swot: {},
        risk: {},
        decision: {}
    }
});

graph.addNode("researchNode", researchAgent);
graph.addNode("newsNode", newsAgent);
graph.addNode("swotNode", swotAgent);
graph.addNode("riskNode", riskAgent);
graph.addNode("decisionNode", decisionAgent);

graph.addEdge(START, "researchNode");
graph.addEdge("researchNode", "newsNode");
graph.addEdge("newsNode", "swotNode");
graph.addEdge("swotNode", "riskNode");
graph.addEdge("riskNode", "decisionNode");
graph.addEdge("decisionNode", END);

export const investmentGraph = graph.compile();