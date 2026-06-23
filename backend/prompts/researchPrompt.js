export const getResearchPrompt = (companyName) => `
Analyze ${companyName}.

Return ONLY JSON:

{
  "overview":"",
  "industry":"",
  "ceo":"",
  "headquarters":"",
  "competitors":[]
}
`;