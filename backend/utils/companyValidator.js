import axios from "axios";

const normalize = (text = "") => {
    return text
        .toLowerCase()
        .replace(/[.,]/g, "")
        .replace(
            /\b(inc|incorporated|corp|corporation|ltd|limited|plc|llc|group|holdings?)\b/g,
            ""
        )
        .replace(/\s+/g, " ")
        .trim();
};

export const verifyCompany = async (companyName) => {
    try {
        const response = await axios.get(
            `https://query1.finance.yahoo.com/v1/finance/search?q=${encodeURIComponent(companyName)}`
        );

        const quotes = response.data.quotes || [];

        const search = normalize(companyName);

        const company = quotes.find((item) => {

            if (item.quoteType !== "EQUITY") return false;

            const symbol = normalize(item.symbol);
            const shortname = normalize(item.shortname);
            const longname = normalize(item.longname);

            // Exact ticker
            if (symbol === search) return true;

            // Exact company name
            if (shortname === search || longname === search) return true;

            // Only allow prefix matching for longer inputs
            if (search.length >= 5) {

                if (
                    longname.startsWith(search + " ") ||
                    shortname.startsWith(search + " ")
                ) {
                    return true;
                }

            }

            return false;
        });

        return company || null;

    } catch (error) {
        console.error("Company validation error:", error.message);
        return null;
    }
};