import axios from "axios";

const API_URL = "https://invest-ai-backend.onrender.com/api/analyze";

export const analyzeCompany = async (companyName) => {
    const response = await axios.post(API_URL, {
        companyName
    });

    return response.data;
};