export default function SWOTCard({ swot }) {

    if (!swot) return null;

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

            <h2 className="text-3xl font-bold mb-8 text-blue-400">
                SWOT Analysis
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

                <div>

                    <h3 className="text-green-400 font-bold text-xl mb-4">
                        Strengths
                    </h3>

                    <ul className="space-y-2">

                        {swot.strengths?.map((item, index) => (

                            <li key={index}>
                                • {item}
                            </li>

                        ))}

                    </ul>

                </div>

                <div>

                    <h3 className="text-red-400 font-bold text-xl mb-4">
                        Weaknesses
                    </h3>

                    <ul className="space-y-2">

                        {swot.weaknesses?.map((item, index) => (

                            <li key={index}>
                                • {item}
                            </li>

                        ))}

                    </ul>

                </div>

                <div>

                    <h3 className="text-blue-400 font-bold text-xl mb-4">
                        Opportunities
                    </h3>

                    <ul className="space-y-2">

                        {swot.opportunities?.map((item, index) => (

                            <li key={index}>
                                • {item}
                            </li>

                        ))}

                    </ul>

                </div>

                <div>

                    <h3 className="text-yellow-400 font-bold text-xl mb-4">
                        Threats
                    </h3>

                    <ul className="space-y-2">

                        {swot.threats?.map((item, index) => (

                            <li key={index}>
                                • {item}
                            </li>

                        ))}

                    </ul>

                </div>

            </div>

        </div>
    );
}