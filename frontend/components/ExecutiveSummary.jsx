"use client";

import { motion } from "framer-motion";
import {
  Building2,
  User,
  MapPin,
  FileText,
  CheckCircle2,
} from "lucide-react";

export default function ExecutiveSummary({ research }) {
  if (!research) return null;

  const metrics = [
    {
      icon: Building2,
      label: "Industry",
      value: research.industry || "N/A",
    },
    {
      icon: User,
      label: "CEO",
      value: research.ceo || "N/A",
    },
    {
      icon: MapPin,
      label: "Headquarters",
      value: research.headquarters || "N/A",
    },
  ];

  // Generate a few highlights from available data
  const highlights = [
    `${research.industry} sector leader`,
    `Led by ${research.ceo}`,
    `Headquartered in ${research.headquarters}`,
    `Competes with ${
      Array.isArray(research.competitors)
        ? research.competitors.slice(0, 2).join(" & ")
        : "major industry players"
    }`,
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="h-full rounded-2xl border border-slate-800 bg-slate-900/30 p-6"
    >
      {/* Header */}

      <div className="flex items-center gap-3 mb-6">

        <div className="p-2 rounded-lg bg-cyan-500/10">
          <FileText
            size={18}
            className="text-cyan-400"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold">
            Executive Summary
          </h2>

          <p className="text-xs text-slate-500">
            AI generated company overview
          </p>
        </div>

      </div>

      {/* Overview */}

      <p className="text-slate-300 leading-7">
        {research.overview}
      </p>

      {/* Metrics */}

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        {metrics.map((item) => {

          const Icon = item.icon;

          return (

            <div key={item.label}>

              <div className="flex items-center gap-2 mb-2">

                <Icon
                  size={16}
                  className="text-cyan-400"
                />

                <span className="text-xs uppercase tracking-wider text-slate-500">
                  {item.label}
                </span>

              </div>

              <p className="text-white font-medium leading-6">
                {item.value}
              </p>

            </div>

          );

        })}

      </div>

      {/* Highlights */}

      <div className="mt-8 border-t border-slate-800 pt-6">

        <h3 className="text-sm uppercase tracking-wider text-slate-500 mb-4">
          Key Highlights
        </h3>

        <div className="grid md:grid-cols-2 gap-3">

          {highlights.map((item, index) => (

            <div
              key={index}
              className="flex items-start gap-2"
            >

              <CheckCircle2
                size={16}
                className="text-emerald-400 mt-1 flex-shrink-0"
              />

              <p className="text-sm text-slate-300 leading-6">
                {item}
              </p>

            </div>

          ))}

        </div>

      </div>

    </motion.section>
  );
}