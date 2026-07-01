"use client";

import { motion } from "framer-motion";
import {
  Newspaper,
  CalendarDays,
} from "lucide-react";

export default function NewsTimeline({ news }) {
  if (!news || news.length === 0) return null;

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6">

      {/* Header */}

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-xl font-bold">

            Latest News

          </h2>

          <p className="text-xs text-slate-500 mt-1">

            Top news impacting investment decisions

          </p>

        </div>

        <Newspaper
          size={22}
          className="text-cyan-400"
        />

      </div>

      {/* Timeline */}

      <div className="relative">

        <div className="absolute left-[9px] top-2 bottom-2 w-px bg-slate-700" />

        <div className="space-y-6">

          {news.slice(0, 3).map((article, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              className="relative pl-8"
            >

              {/* Timeline Dot */}

              <div className="absolute left-0 top-2 w-5 h-5 rounded-full bg-cyan-400 border-4 border-slate-900" />

              {/* Date */}

              <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">

                <CalendarDays size={13} />

                {article.date}

              </div>

              {/* Title */}

              <h3 className="font-semibold text-white leading-6">

                {article.title}

              </h3>

              {/* Summary */}

              <p className="mt-2 text-sm text-slate-400 leading-6">

                {article.summary}

              </p>

              {index !== 2 && (

                <div className="mt-5 border-b border-slate-800" />

              )}

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}