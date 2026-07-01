import axios from "axios";

const API_URL =
  "https://ai-investment-research-agent-c2f9.onrender.com/api/analyze";

export const analyzeCompany = async (companyName) => {
    try {
        const response = await axios.post(API_URL, {
            companyName
        });

        return response.data;

    } catch (error) {

        if (error.response) {
            return error.response.data;
        }

        throw error;
    }
};