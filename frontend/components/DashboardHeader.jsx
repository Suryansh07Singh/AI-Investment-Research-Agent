"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";

export default function DashboardHeader({ data }) {
  if (!data) return null;

  const company = data.company || "Unknown Company";
  const ticker = data.ticker || "--";

  const industry =
    data.research?.industry || "Not Available";

  const score =
    data.decision?.investmentScore ??
    data.decision?.investment_score ??
    0;

  const recommendation =
    data.decision?.recommendation?.toUpperCase() || "HOLD";

  const badgeColor =
    recommendation === "BUY" ||
    recommendation === "STRONG BUY" ||
    recommendation === "INVEST"
      ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
      : recommendation === "HOLD"
      ? "text-yellow-400 bg-yellow-500/10 border-yellow-500/20"
      : "text-red-400 bg-red-500/10 border-red-500/20";

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .5 }}
      className="border border-slate-800 rounded-3xl bg-[#0B1220] p-6"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-6">

        {/* Left */}

        <div className="space-y-5">

          <div>

            <p className="uppercase tracking-[0.25em] text-xs text-cyan-400 font-semibold">

              AI Investment Dashboard

            </p>

            <h1 className="text-4xl font-black mt-3">

              {company}

            </h1>

            <div className="flex flex-wrap items-center gap-3 mt-5">

              <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">

                {ticker}

              </span>

              <span className="text-slate-500">

                •

              </span>

              <span className="text-slate-400">

                {industry}

              </span>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex gap-10">

          <div>

            <p className="text-slate-500 uppercase text-xs tracking-wider">

              Investment Score

            </p>

            <h2 className="text-6xl font-black mt-2">

              {score}

              <span className="text-3xl text-slate-500">

                /10

              </span>

            </h2>

          </div>

          <div className="flex flex-col justify-between">

            <div className="flex items-center gap-2 text-cyan-400">

              <Sparkles size={18} />

              <span className="text-sm">

                AI Verdict

              </span>

            </div>

            <div
              className={`px-4 py-2 rounded-full border text-sm font-semibold w-fit ${badgeColor}`}
            >
              {recommendation}
            </div>

            <div className="flex items-center gap-2 text-slate-500 text-sm">

              <ArrowUpRight size={15} />

              Updated just now

            </div>

          </div>

        </div>

      </div>
    </motion.section>
  );
}