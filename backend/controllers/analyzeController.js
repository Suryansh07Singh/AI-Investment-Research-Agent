import { investmentGraph } from "../graph/investmentGraph.js";

export const analyzeCompany = async (req, res) => {


try {

    const { companyName } = req.body;

    if (!companyName) {
        return res.status(400).json({
            success: false,
            message: "Company name is required"
        });
    }

    const analysis = await investmentGraph.invoke({
        companyName
    });

    return res.status(200).json({
        success: true,
        company: companyName,
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
