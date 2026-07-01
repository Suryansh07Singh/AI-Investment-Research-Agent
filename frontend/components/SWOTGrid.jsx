"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  CircleX,
  Rocket,
  TriangleAlert,
} from "lucide-react";

export default function SWOTGrid({ swot }) {
  if (!swot) return null;

  const sections = [
    {
      title: "Strengths",
      icon: ShieldCheck,
      color: "text-emerald-400",
      border: "border-emerald-500/20",
      items: swot.strengths || [],
    },
    {
      title: "Weaknesses",
      icon: CircleX,
      color: "text-red-400",
      border: "border-red-500/20",
      items: swot.weaknesses || [],
    },
    {
      title: "Opportunities",
      icon: Rocket,
      color: "text-cyan-400",
      border: "border-cyan-500/20",
      items: swot.opportunities || [],
    },
    {
      title: "Threats",
      icon: TriangleAlert,
      color: "text-yellow-400",
      border: "border-yellow-500/20",
      items: swot.threats || [],
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6">

      {/* Header */}

      <div className="mb-6">

        <h2 className="text-xl font-bold">

          SWOT Analysis

        </h2>

        <p className="text-xs text-slate-500 mt-1">

          AI generated business insights

        </p>

      </div>

      {/* Grid */}

      <div className="grid md:grid-cols-2 gap-4">

        {sections.map((section, index) => {

          const Icon = section.icon;

          return (

            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className={`
                border
                ${section.border}
                rounded-xl
                p-4
              `}
            >

              <div className="flex items-center gap-2 mb-3">

                <Icon
                  size={17}
                  className={section.color}
                />

                <h3 className="font-semibold">

                  {section.title}

                </h3>

              </div>

              <ul className="space-y-2">

                {section.items
                  .slice(0, 4)
                  .map((item, idx) => (

                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-slate-300 leading-6"
                    >

                      <span
                        className={`${section.color} mt-1`}
                      >
                        •
                      </span>

                      <span>{item}</span>

                    </li>

                  ))}

              </ul>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}