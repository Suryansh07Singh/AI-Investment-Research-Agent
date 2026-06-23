export const getSwotPrompt = (companyName) => `
Perform SWOT analysis of ${companyName}.

Return ONLY JSON:

{
  "strengths":[],
  "weaknesses":[],
  "opportunities":[],
  "threats":[]
}
`;