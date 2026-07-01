export const getDecisionPrompt = (
    companyName,
    research,
    news,
    swot,
    risk
) => `

Based on the following analysis:

Research:
${JSON.stringify(research)}

News:
${JSON.stringify(news)}

SWOT:
${JSON.stringify(swot)}

Risk:
${JSON.stringify(risk)}

Give final investment recommendation for ${companyName}.

Return ONLY JSON:

{
  "investmentScore":6,
  "recommendation":"Hold",
  "reasoning":[]
}
`;