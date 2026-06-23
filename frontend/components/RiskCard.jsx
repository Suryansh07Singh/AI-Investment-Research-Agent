export default function RiskCard({ risk }) {

    if (!risk) return null;

    return (

        <div className="
            bg-gray-900
            border
            border-gray-700
            rounded-2xl
            p-8
            shadow-lg
            transition-all
            duration-300
            hover:scale-[1.01]
            hover:border-blue-500
            ">

            <h2 className="text-3xl font-bold mb-6 text-blue-400">
                Risk Analysis
            </h2>

            <div className="space-y-4">

                <div>
                    <span className="font-bold">
                        Risk Level:
                    </span>

                    <span
                        className={`ml-3 font-bold ${
                            risk.risk_level === "Low"
                                ? "text-green-400"
                                : risk.risk_level === "Medium"
                                ? "text-yellow-400"
                                : "text-red-400"
                        }`}
                    >
                        {risk.risk_level}
                    </span>

                </div>

                <div>
                    <span className="font-bold">
                        Competition Risk:
                    </span>

                    <span className="ml-2 text-gray-400">
                        {risk.competition_risk}
                    </span>
                </div>

                <div>
                    <span className="font-bold">
                        Market Risk:
                    </span>

                    <span className="ml-2 text-gray-400">
                        {risk.market_risk}
                    </span>
                </div>

                <div>
                    <span className="font-bold">
                        Regulatory Risk:
                    </span>

                    <span className="ml-2 text-gray-400">
                        {risk.regulatory_risk}
                    </span>
                </div>

            </div>

        </div>
    );
}