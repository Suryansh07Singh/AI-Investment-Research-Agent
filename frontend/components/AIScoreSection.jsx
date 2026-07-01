"use client";

import { motion } from "framer-motion";

function ProgressBar({ label, value, color }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs">
        <span className="text-slate-400">{label}</span>
        <span className="text-white font-medium">{value}%</span>
      </div>

      <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1 }}
          className={`h-full ${color}`}
        />
      </div>
    </div>
  );
}

export default function AIScoreSection({ decision }) {
  if (!decision) return null;

  const score =
    decision.investmentScore ??
    decision.investment_score ??
    0;

  const recommendation =
    decision.recommendation?.toUpperCase() || "HOLD";

  const confidence = Math.min(score * 10 + 25, 95);
  const growth = Math.min(score * 10 + 15, 90);
  const risk = Math.max(100 - score * 10, 20);

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 10) * circumference;

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6 h-full">

      <p className="uppercase tracking-[0.18em] text-xs text-cyan-400 font-semibold">

        AI Score

      </p>

      {/* Ring */}

      <div className="flex justify-center my-6">

        <div className="relative w-40 h-40">

          <svg
            width="160"
            height="160"
            className="-rotate-90"
          >

            <circle
              cx="80"
              cy="80"
              r={radius}
              stroke="#1e293b"
              strokeWidth="10"
              fill="none"
            />

            <motion.circle
              cx="80"
              cy="80"
              r={radius}
              stroke="#38bdf8"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{
                strokeDashoffset: circumference,
              }}
              animate={{
                strokeDashoffset:
                  circumference - progress,
              }}
              transition={{
                duration: 1,
              }}
            />

          </svg>

          <div className="absolute inset-0 flex flex-col justify-center items-center">

            <h2 className="text-4xl font-black">

              {score}

            </h2>

            <span className="text-slate-500 text-sm">

              /10

            </span>

          </div>

        </div>

      </div>

      {/* Recommendation */}

      <div className="flex justify-center mb-8">

        <span className="px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-sm font-semibold">

          {recommendation}

        </span>

      </div>

      {/* Metrics */}

      <div className="space-y-5">

        <ProgressBar
          label="Confidence"
          value={confidence}
          color="bg-cyan-400"
        />

        <ProgressBar
          label="Growth"
          value={growth}
          color="bg-emerald-400"
        />

        <ProgressBar
          label="Risk"
          value={risk}
          color="bg-rose-400"
        />

      </div>

    </section>
  );
}