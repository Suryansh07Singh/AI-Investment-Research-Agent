"use client";

import { useState } from "react";
import { ClipLoader } from "react-spinners";

import SearchBar from "../components/SearchBar";
import CompanyOverviewCard from "../components/CompanyOverviewCard";
import NewsCard from "../components/NewsCard";
import SWOTCard from "../components/SWOTCard";
import RiskCard from "../components/RiskCard";
import RecommendationCard from "../components/RecommendationCard";
import InvestmentChart from "../components/InvestmentChart";
import { analyzeCompany } from "../services/api";

export default function Home() {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (companyName) => {

    try {

      setLoading(true);

      // Clear previous data and errors
      setData(null);
      setError("");

      const response = await analyzeCompany(companyName);
      console.log(response);

      if (!response.success) {
        setError(response.message);
        return;
      }

      setData(response);

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

    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">

      <div className="max-w-6xl mx-auto px-6 py-10">

        <h1 className="text-6xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">

          InvestAI

        </h1>

        <p className="text-center text-gray-400 mb-10">

          Multi-Agent Investment Research using LangGraph & Llama 3.3 70B

        </p>

        <SearchBar onSearch={handleSearch} />

        {error && (
          <div className="mt-6 p-4 rounded-lg border border-red-500 bg-red-900/20 text-red-300 text-center font-medium">
            ❌ {error}
          </div>
        )}

        {loading && (

          <div className="flex justify-center mt-16">

            <ClipLoader
              color="#3B82F6"
              size={60}
            />

          </div>

        )}

        {data && (

          <div className="grid gap-8 mt-12">

            <CompanyOverviewCard research={data.research} />

            <NewsCard news={data.news} />

            <SWOTCard swot={data.swot} />

            <div className="grid md:grid-cols-2 gap-8">

              <RiskCard risk={data.risk} />

              <RecommendationCard
                decision={data.decision}
                data={data}
              />

            </div>

            <InvestmentChart
              decision={data.decision}
              risk={data.risk}
            />

          </div>

        )}

      </div>

    </div>

  );
}