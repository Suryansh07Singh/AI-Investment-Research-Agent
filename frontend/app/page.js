"use client";

import { useState, useEffect } from "react";

import HeroSection from "../components/HeroSection";
import PopularCompanies from "../components/PopularCompanies";
import AgentProgress from "../components/AgentProgress";
import SearchBar from "../components/SearchBar";

import Dashboard from "../components/Dashboard";

import { analyzeCompany } from "../services/api";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("recentCompanies")) || [];

    setRecentSearches(saved);
  }, []);

  const handleSearch = async (companyName) => {
    if (!companyName.trim()) return;

    try {
      setLoading(true);
      setError("");
      setData(null);

      const response = await analyzeCompany(companyName);

      if (!response.success) {
        setError(response.message);
        return;
      }

      setData(response);

      const updated = [
        companyName,
        ...recentSearches.filter(
          (item) =>
            item.toLowerCase() !== companyName.toLowerCase()
        ),
      ].slice(0, 5);

      setRecentSearches(updated);

      localStorage.setItem(
        "recentCompanies",
        JSON.stringify(updated)
      );
    } catch (error) {
      console.error(error);

      setError(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-hidden">


      <div className="relative z-10 max-w-[1600px] mx-auto px-8 py-10">

        {/* Landing Section */}

        <HeroSection />

        <div className="mt-10">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="mt-8">
          <PopularCompanies onSelect={handleSearch} />
        </div>

        {/* Recent Searches */}

        {recentSearches.length > 0 && (
          <div className="mt-8">

            <p className="text-center text-slate-400 mb-5 text-sm uppercase tracking-widest">
              Recent Searches
            </p>

            <div className="flex flex-wrap justify-center gap-3">

              {recentSearches.map((company) => (

                <button
                  key={company}
                  onClick={() => handleSearch(company)}
                  className="px-5 py-2 rounded-full border border-slate-700 bg-slate-900/70 hover:border-cyan-400 hover:bg-slate-800 transition-all duration-300"
                >
                  {company}
                </button>

              ))}

            </div>

          </div>
        )}

        {/* Error */}

        {error && (

          <div className="mt-10 max-w-3xl mx-auto rounded-2xl border border-red-500/20 bg-red-500/10 p-5 text-center text-red-300">

            ❌ {error}

          </div>

        )}

        {/* Loading */}

        {loading && <AgentProgress />}

        {/* ====================== */}
        {/* Dashboard */}
        {/* ====================== */}

        {data && <Dashboard data={data} />}

      </div>

    </div>
  );
}