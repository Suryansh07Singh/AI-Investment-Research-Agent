"use client";

import DashboardHeader from "./DashboardHeader";
import AIScoreSection from "./AIScoreSection";
import ExecutiveSummary from "./ExecutiveSummary";
import SWOTGrid from "./SWOTGrid";
import RiskAnalysis from "./RiskAnalysis";
import NewsTimeline from "./NewsTimeline";
import InvestmentChart from "./InvestmentChart";

export default function Dashboard({ data }) {
  if (!data) return null;

  return (
    <main className="mt-16 space-y-12">

      {/* Hero */}
      <DashboardHeader data={data} />

        <section className="grid xl:grid-cols-3 gap-8 mt-10">

            <AIScoreSection
                decision={data.decision}
            />

            <div className="xl:col-span-2">

                <ExecutiveSummary
                    research={data.research}
                />

            </div>

        </section>

        <section className="grid xl:grid-cols-2 gap-8 mt-10">

            <SWOTGrid
                swot={data.swot}
            />

            <RiskAnalysis
                risk={data.risk}
            />

        </section>

        <section className="grid xl:grid-cols-2 gap-8 mt-10">

            <NewsTimeline
                news={data.news}
            />

            <InvestmentChart
                decision={data.decision}
                risk={data.risk}
            />

        </section>

    </main>
  );
}