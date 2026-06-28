import { investmentGraph } from "../graph/investmentGraph.js";
import { verifyCompany } from "../utils/companyValidator.js";

export const analyzeCompany = async (req, res) => {
    try {
        const { companyName } = req.body;

        if (!companyName) {
            return res.status(400).json({
                success: false,
                message: "Company name is required"
            });
        }

        // to verify the company name and get its details
        const companyInfo = await verifyCompany(companyName);

        if (!companyInfo) {
            return res.status(404).json({
                success: false,
                message: "Company not found. Please enter a valid publicly traded company."
            });
        }

        const analysis = await investmentGraph.invoke({
            companyName: companyInfo.longname,
            ticker: companyInfo.symbol
        });

        return res.status(200).json({
            success: true,
            company: companyInfo.longname,
            ticker: companyInfo.symbol,
            research: analysis.research,
            news: analysis.news,
            swot: analysis.swot,
            risk: analysis.risk,
            decision: analysis.decision
        });

    } catch (error) {
        console.error("Analysis Error:", error);

        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
};