import { llm } from "../services/llm.js";
import { getDecisionPrompt } from "../prompts/decisionPrompt.js";
import { safeParse } from "../services/safeParse.js";

export async function decisionAgent(state) {

    const response = await llm.invoke(
        getDecisionPrompt(
            state.companyName,
            state.research,
            state.news,
            state.swot,
            state.risk
        )
    );

    return {
        decision: safeParse(response.content)
    };
}