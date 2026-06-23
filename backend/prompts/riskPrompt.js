export const getRiskPrompt = (companyName) => `
Analyze investment risks for ${companyName}.

Return ONLY JSON:

{
  "risk_level":"",
  "competition_risk":"",
  "market_risk":"",
  "regulatory_risk":""
}
`;