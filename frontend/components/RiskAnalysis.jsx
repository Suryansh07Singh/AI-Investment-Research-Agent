"use client";

import { motion } from "framer-motion";
import {
  ShieldAlert,
  TrendingDown,
  Globe,
  Scale,
} from "lucide-react";

export default function RiskAnalysis({ risk }) {
  if (!risk) return null;

  const riskLevel =
    risk.riskLevel?.toUpperCase() || "UNKNOWN";

  const badgeColor =
    riskLevel === "LOW"
      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
      : riskLevel === "MEDIUM"
      ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
      : "bg-red-500/10 text-red-400 border-red-500/20";

  const risks = [
    {
      title: "Competition Risk",
      icon: TrendingDown,
      text: risk.competitionRisk,
    },
    {
      title: "Market Risk",
      icon: Globe,
      text: risk.marketRisk,
    },
    {
      title: "Regulatory Risk",
      icon: Scale,
      text: risk.regulatoryRisk,
    },
  ];

  return (
    <section className="rounded-3xl border border-slate-800 bg-[#0B1220] p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-2xl font-bold">
            Risk Analysis
          </h2>

          <p className="text-slate-500 mt-1">
            AI identified investment risks
          </p>

        </div>

        <div
          className={`px-4 py-2 rounded-full border text-sm font-semibold ${badgeColor}`}
        >
          <div className="flex items-center gap-2">
            <ShieldAlert size={16} />
            {riskLevel} RISK
          </div>
        </div>

      </div>

      {/* Risks */}

      <div className="space-y-5">

        {risks.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div

              key={item.title}

              initial={{
                opacity: 0,
                y: 15,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: index * 0.08,
              }}

              className="
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/40
                p-5
              "

            >

              <div className="flex items-center gap-3 mb-4">

                <Icon
                  size={18}
                  className="text-cyan-400"
                />

                <h3 className="font-semibold">

                  {item.title}

                </h3>

              </div>

              <p className="text-slate-300 leading-7">

                {item.text}

              </p>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}