export const getValidationPrompt = (userInput, company) => `
You are validating whether a user's input refers to a publicly traded company.

User Input:
"${userInput}"

Yahoo Finance Match:
Company Name: ${company.longname}
Ticker: ${company.symbol}

Rules:

1. Answer YES only if the user clearly intended this company.
2. Accept common company names like:
- Tesla
- Apple
- Microsoft
- Nvidia
- Reliance
- TCS
- Infosys

3. Reject:
- Person names
- Cities
- Objects
- Random words
- Partial words that accidentally match another company

Examples:

Input: Tesla
Matched: Tesla, Inc.
Answer: YES

Input: TSLA
Matched: Tesla, Inc.
Answer: YES

Input: mobile
Matched: T-Mobile US
Answer: NO


Input: Rahul
Matched: Rahul Holdings
Answer: NO

Return ONLY one word.

YES

or

NO
`;