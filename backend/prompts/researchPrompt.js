export const getResearchPrompt = (companyName, ticker) => `
Analyze the following publicly traded company.

Company Name: ${companyName}
Ticker Symbol: ${ticker}

Return ONLY valid JSON.

{
  "overview": "",
  "industry": "",
  "ceo": "",
  "headquarters": "",
  "competitors": []
}

Rules:
- Return ONLY JSON.
- Do not use markdown.
- Do not add explanations before or after the JSON.
- Competitors must be an array of company names.
`;