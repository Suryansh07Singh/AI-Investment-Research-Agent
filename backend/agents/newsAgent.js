import { llm } from "../services/llm.js";
import { getNewsPrompt } from "../prompts/newsPrompt.js";
import { safeParse } from "../services/safeParse.js";
export async function newsAgent(state) {

    const response = await llm.invoke(
        getNewsPrompt(state.companyName)
    );

    return {
        news: safeParse(response.content)
    };
}