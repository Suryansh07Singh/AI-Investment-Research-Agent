import axios from "axios";
import { llm } from "../services/llm.js";
import { getValidationPrompt } from "../prompts/validationPrompt.js";

export const verifyCompany = async (companyName) => {
    try {

        const response = await axios.get(
            `https://query1.finance.yahoo.com/v1/finance/search?q=${encodeURIComponent(companyName)}`
        );

        const quotes = response.data.quotes || [];

    
        const companies = quotes.filter(
            (item) =>
                item.quoteType === "EQUITY" &&
                item.symbol &&
                item.longname
        );

        if (companies.length === 0) {
            return null;
        }

        
        const company = companies[0];

        
        const validationResponse = await llm.invoke(
            getValidationPrompt(companyName, company)
        );

        const answer = validationResponse.content
            .trim()
            .toUpperCase();

        if (answer !== "YES") {
            return null;
        }

        return company;

    } catch (error) {
        console.error("Company validation error:", error.message);
        return null;
    }
};