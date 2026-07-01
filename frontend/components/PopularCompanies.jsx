"use client";

import { motion } from "framer-motion";

const companies = [
  "Tesla",
  "Apple",
  "Microsoft",
  "NVIDIA",
  "Amazon",
  "Reliance",
  "TCS",
  "Infosys"
];

export default function PopularCompanies({ onSelect }) {
  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="mt-8"
    >

      <p className="text-center text-slate-400 mb-4">

        Popular Companies

      </p>

      <div className="flex flex-wrap justify-center gap-3">

        {companies.map((company) => (

          <button
            key={company}
            onClick={() => onSelect(company)}
            className="px-5 py-2 rounded-full bg-slate-800 border border-slate-700 hover:border-cyan-400 hover:bg-slate-700 transition-all duration-300"
          >

            {company}

          </button>

        ))}

      </div>

    </motion.div>

  );
}