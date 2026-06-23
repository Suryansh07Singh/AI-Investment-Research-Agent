export const getNewsPrompt = (companyName) => `
Give recent important news about ${companyName}.

Return ONLY JSON:

{
  "news":[]
}
`;