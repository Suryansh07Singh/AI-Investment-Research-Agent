import axios from "axios";

const API_URL = "http://localhost:5000/api/analyze";

export const analyzeCompany = async (companyName) => {
    const response = await axios.post(API_URL, {
        companyName
    });

    return response.data;
};