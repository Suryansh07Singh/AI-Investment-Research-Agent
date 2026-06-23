import { llm } from "../services/llm.js";
import { getSwotPrompt } from "../prompts/swotPrompt.js";
import { safeParse } from "../services/safeParse.js";
export async function swotAgent(state) {

    const response = await llm.invoke(
        getSwotPrompt(state.companyName)
    );

    return {
        swot: safeParse(response.content)
    };
}