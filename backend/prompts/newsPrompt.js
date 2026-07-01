export const getNewsPrompt = (companyName) => `
Give the 5 most important recent news articles about ${companyName}.

Return ONLY valid JSON.

{
  "news":[
    {
      "title":"",
      "date":"",
      "summary":""
    }
  ]
}
`;