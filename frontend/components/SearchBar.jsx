"use client";

import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function SearchBar({ onSearch }) {
  const [company, setCompany] = useState("");

  const handleSearch = () => {
    if (!company.trim()) return;
    onSearch(company.trim());
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="max-w-5xl mx-auto mt-12"
    >
      <div className="relative">

        {/* Search Icon */}
        <Search
          size={22}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400"
        />

        {/* Input */}
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search any publicly listed company..."
          className="
            w-full
            rounded-2xl
            border
            border-slate-700
            bg-slate-900/70
            backdrop-blur-xl
            py-6
            pl-16
            pr-40
            text-lg
            outline-none
            transition-all
            duration-300
            placeholder:text-slate-500
            focus:border-cyan-400
            focus:ring-4
            focus:ring-cyan-500/20
          "
        />

        {/* Analyze Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleSearch}
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            flex
            items-center
            gap-2
            rounded-xl
            bg-gradient-to-r
            from-blue-500
            to-cyan-500
            px-6
            py-3
            font-semibold
            shadow-lg
            transition-all
            hover:shadow-cyan-500/30
          "
        >
          Analyze

          <ArrowRight size={18} />
        </motion.button>

      </div>

      <p className="mt-3 text-center text-sm text-slate-500">
        Supports publicly traded companies worldwide.
      </p>
    </motion.div>
  );
}