"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-center mb-14"
    >
      <div className="flex justify-center mb-4">

        <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 rounded-full px-5 py-2">

          <Sparkles className="text-cyan-400" size={18} />

          <span className="text-sm text-cyan-300">
            Powered by LangGraph • Groq • Llama 3.3 70B
          </span>

        </div>

      </div>

      <h1 className="text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">

        InvestAI

      </h1>

      <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto leading-8">

        AI-powered investment intelligence platform that performs
        multi-agent research, news analysis, SWOT evaluation,
        risk assessment and investment recommendations.

      </p>

    </motion.div>
  );
}