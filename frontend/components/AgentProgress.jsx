"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";

const agents = [
  "Research Agent",
  "News Agent",
  "SWOT Agent",
  "Risk Agent",
  "Decision Agent",
];

export default function AgentProgress() {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {

      setCompleted((prev) => {

        if (prev >= agents.length)
          return prev;

        return prev + 1;

      });

    }, 700);

    return () => clearInterval(timer);

  }, []);

  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-xl mx-auto mt-16"
    >

      <div className="rounded-3xl border border-slate-700 bg-slate-900/70 backdrop-blur-xl p-8">

        <h2 className="text-2xl font-bold text-center mb-8">

          🤖 AI Agents Working

        </h2>

        <div className="space-y-5">

          {agents.map((agent, index) => (

            <AnimatePresence key={agent}>

              <motion.div
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center justify-between"
              >

                <span>{agent}</span>

                {index < completed ? (

                  <CheckCircle2
                    className="text-green-400"
                    size={22}
                  />

                ) : (

                  <Loader2
                    className="animate-spin text-cyan-400"
                    size={22}
                  />

                )}

              </motion.div>

            </AnimatePresence>

          ))}

        </div>

        <motion.p

          animate={{
            opacity: [0.5, 1, 0.5],
          }}

          transition={{
            repeat: Infinity,
            duration: 2,
          }}

          className="mt-8 text-center text-slate-400"

        >

          Generating Investment Report...

        </motion.p>

      </div>

    </motion.div>

  );
}