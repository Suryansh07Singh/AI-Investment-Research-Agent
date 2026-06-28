import { llm } from "../services/llm.js";
import { getResearchPrompt } from "../prompts/researchPrompt.js";
import { safeParse } from "../services/safeParse.js";

export async function researchAgent(state) {

    const response = await llm.invoke(
        getResearchPrompt(
            state.companyName,
            state.ticker
        )
    );

    return {
        research: safeParse(response.content)
    };
}