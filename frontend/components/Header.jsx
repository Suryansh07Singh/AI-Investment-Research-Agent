"use client";

import { FaRobot } from "react-icons/fa";

export default function Header() {
    return (
        <div className="text-center mb-12">

            <div className="flex justify-center mb-4">

                <div className="bg-blue-500 p-4 rounded-full">
                    <FaRobot size={40}/>
                </div>

            </div>

            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">

                InvestAI 

            </h1>

            <p className="text-gray-400 mt-4">

                Multi-Agent Investment Research using LangGraph & Llama 3.3 70B

            </p>

        </div>
    );
}