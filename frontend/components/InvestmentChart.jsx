"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

export default function InvestmentChart({ decision, risk }) {

    if (!decision || !risk) return null;

    const riskMapping = {
        Low: 3,
        Medium: 6,
        High: 9
    };

    const chartData = [

        {
            name: "Investment Score",
            value: decision.investment_score
        },

        {
            name: "Competition Risk",
            value:
                riskMapping[risk.competition_risk] || 5
        },

        {
            name: "Market Risk",
            value:
                riskMapping[risk.market_risk] || 5
        },

        {
            name: "Regulatory Risk",
            value:
                riskMapping[risk.regulatory_risk] || 5
        }

    ];

    return (

        <div
            className="
            bg-gray-900
            border
            border-gray-700
            rounded-2xl
            p-8
            shadow-lg
            "
        >

            <h2
                className="
                text-3xl
                font-bold
                mb-8
                text-blue-400
                "
            >
                Investment Analytics
            </h2>

            <ResponsiveContainer
                width="100%"
                height={350}
            >

                <BarChart
                    data={chartData}
                >

                    <CartesianGrid strokeDasharray="3 3"/>

                    <XAxis
                        dataKey="name"
                    />

                    <YAxis
                        domain={[0,10]}
                    />

                    <Tooltip />

                    <Bar
                        dataKey="value"
                        radius={[10,10,0,0]}
                    />

                </BarChart>

            </ResponsiveContainer>

        </div>

    );

}