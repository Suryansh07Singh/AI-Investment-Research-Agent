import axios from "axios";

const API_URL =
  "http://localhost:5000/api/analyze";

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