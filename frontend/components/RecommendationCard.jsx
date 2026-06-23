import { motion } from "framer-motion";
import ScoreMeter from "./ScoreMeter";
import { downloadReport } from "../services/downloadReport";
export default function RecommendationCard({ decision,data }) {

    if (!decision) return null;

    return (

        <motion.div

            initial={{ opacity: 0, y: 30 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.5 }}

            className="
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
            "

        >

            <h2 className="text-3xl font-bold mb-8 text-blue-400">
                Final Recommendation
            </h2>

            <div className="space-y-8">

                {/* Score Meter */}
                <ScoreMeter
                    score={decision.investment_score}
                />

                {/* Recommendation */}
                <div>

                    <span className="font-bold text-xl">
                        Recommendation:
                    </span>

                    <span
                        className={`
                        ml-4
                        px-5
                        py-2
                        rounded-full
                        font-bold
                        ${
                            decision.recommendation?.toUpperCase() === "INVEST"
                                ? "bg-green-500/20 text-green-400"
                                : "bg-red-500/20 text-red-400"
                        }
                        `}
                    >
                        {decision.recommendation}
                    </span>

                </div>

                {/* Reasoning */}
                <div>

                    <h3 className="text-xl font-bold mb-4">
                        Reasoning
                    </h3>

                    <ul className="space-y-4">

                        {decision.reasoning?.map((item, index) => (

                            <li

                                key={index}

                                className="
                                bg-gray-800
                                border
                                border-gray-700
                                rounded-xl
                                p-4
                                text-gray-300
                                "

                            >

                                • {item}

                            </li>

                        ))}

                    </ul>

                </div>

                {/* Download Button */}

                <div className="mt-8">

                    <button

                        className="
                        bg-gradient-to-r
                        from-blue-500
                        to-cyan-500
                        px-6
                        py-3
                        rounded-xl
                        font-bold
                        hover:scale-105
                        transition-all
                        duration-300
                        "

                    >

                        Download PDF Report

                    </button>

                </div>

            </div>

        </motion.div>

    );

}