export const getRiskPrompt = (companyName) => `
Analyze investment risks for ${companyName}.

Return ONLY JSON:

{
  "riskLevel":"",
  "competitionRisk":"",
  "marketRisk":"",
  "regulatoryRisk":""
}
`;