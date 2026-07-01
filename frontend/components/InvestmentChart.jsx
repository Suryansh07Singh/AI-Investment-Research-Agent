"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  ShieldAlert,
  Target,
  Sparkles,
} from "lucide-react";

export default function InvestmentChart({ decision, risk }) {
  if (!decision) return null;

  const score =
    decision.investmentScore ??
    decision.investment_score ??
    0;

  const recommendation =
    decision.recommendation?.toUpperCase() || "HOLD";

  const confidence = Math.min(score * 10 + 25, 95);
  const growth = Math.min(score * 10 + 15, 90);
  const riskScore = Math.max(100 - score * 10, 20);

  const metrics = [
    {
      title: "Investment Score",
      value: `${score}/10`,
      percentage: score * 10,
      icon: Sparkles,
      color: "bg-cyan-400",
    },
    {
      title: "Growth Potential",
      value: `${growth}%`,
      percentage: growth,
      icon: TrendingUp,
      color: "bg-emerald-400",
    },
    {
      title: "Risk Exposure",
      value: `${riskScore}%`,
      percentage: riskScore,
      icon: ShieldAlert,
      color: "bg-rose-400",
    },
    {
      title: "Recommendation",
      value: recommendation,
      percentage:
        recommendation === "BUY" ||
        recommendation === "STRONG BUY"
          ? 90
          : recommendation === "HOLD"
          ? 60
          : 30,
      icon: Target,
      color: "bg-amber-400",
    },
  ];

  return (
    <section className="rounded-3xl border border-slate-800 bg-[#0B1220] p-8">

      <div className="mb-10">

        <h2 className="text-2xl font-bold">

          Investment Analytics

        </h2>

        <p className="text-slate-500 mt-1">

          AI generated investment indicators

        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-8">

        {metrics.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div

              key={item.title}

              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: index * 0.08,
              }}

            >

              <div className="flex justify-between items-center mb-3">

                <div className="flex items-center gap-3">

                  <Icon
                    size={18}
                    className="text-cyan-400"
                  />

                  <span className="text-slate-300">

                    {item.title}

                  </span>

                </div>

                <span className="font-bold">

                  {item.value}

                </span>

              </div>

              <div className="h-3 rounded-full bg-slate-800 overflow-hidden">

                <motion.div

                  initial={{
                    width: 0,
                  }}

                  animate={{
                    width: `${item.percentage}%`,
                  }}

                  transition={{
                    duration: 1,
                  }}

                  className={`h-full rounded-full ${item.color}`}

                />

              </div>

            </motion.div>

          );

        })}

      </div>

      <div className="mt-12 border-t border-slate-800 pt-8">

        <h3 className="font-semibold mb-4">

          AI Insight

        </h3>

        <p className="text-slate-300 leading-8">

          Based on company fundamentals, SWOT analysis,
          recent market news and identified risks, the AI
          currently recommends
          <span className="font-semibold text-cyan-400">
            {" "}
            {recommendation}
          </span>
          . The investment score indicates an overall
          outlook of
          <span className="font-semibold">
            {" "}
            {score}/10
          </span>
          , suggesting investors should consider both the
          growth opportunities and the associated market
          risks before making any investment decision.

        </p>

      </div>

    </section>
  );
}