import { llm } from "../services/llm.js";
import { getRiskPrompt } from "../prompts/riskPrompt.js";
import { safeParse } from "../services/safeParse.js";
export async function riskAgent(state) {

    const response = await llm.invoke(
        getRiskPrompt(state.companyName)
    );

    return {
        risk: safeParse(response.content)
    };
}