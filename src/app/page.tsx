"use client";

import { useState } from "react";
import TableOfContents from "@/components/TableOfContents";
import SummaryScores from "@/components/SummaryScores";
import QuantitativeEvaluation from "@/components/QuantitativeEvaluation";
import QualitativeEvaluation from "@/components/QualitativeEvaluation";

const tabs = [
  { id: "toc", label: "สารบัญเอกสาร" },
  { id: "summary", label: "สรุปคะแนน" },
  { id: "quantitative", label: "เชิงปริมาณ" },
  { id: "qualitative", label: "เชิงคุณภาพ" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("toc");

  return (
    <div className="min-h-screen" style={{ background: "#f8f9fc" }}>
      {/* Header */}
      <header className="text-white shadow-lg" style={{ background: "linear-gradient(135deg, #3D52A0 0%, #7091E6 100%)" }}>
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4">
            <img
              src="/profile.jpg"
              alt="ผศ.ดร. สรายุทธ กรวิรัตน์"
              className="w-20 h-20 rounded-full object-cover flex-shrink-0 border-4"
              style={{ borderColor: "rgba(255,255,255,0.4)", boxShadow: "0 4px 16px rgba(0,0,0,0.18)" }}
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                ผศ.ดร. สรายุทธ กรวิรัตน์
              </h1>
              <p className="mt-1" style={{ color: "#c8d5f8" }}>
                สาขาวิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์และเทคโนโลยีอุตสาหกรรม
              </p>
              <p className="text-sm mt-1" style={{ color: "#a8bef5" }}>
                มหาวิทยาลัยกาฬสินธุ์ | รอบการประเมิน: 1 ตุลาคม 2567 - 31 มีนาคม 2568
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b" style={{ borderColor: "#dde4f5" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="px-5 py-4 text-sm font-medium whitespace-nowrap transition-all relative"
                  style={{
                    color: isActive ? "#3D52A0" : "#64748b",
                    borderBottom: isActive ? "2px solid #3D52A0" : "2px solid transparent",
                    background: "none",
                    cursor: "pointer",
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Tab Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {activeTab === "toc" && <TableOfContents />}
        {activeTab === "summary" && <SummaryScores />}
        {activeTab === "quantitative" && <QuantitativeEvaluation />}
        {activeTab === "qualitative" && <QualitativeEvaluation />}
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-sm" style={{ background: "#1e2a4a", color: "#7091E6" }}>
        <p>แบบสรุปการประเมินการปฏิบัติราชการ มหาวิทยาลัยกาฬสินธุ์</p>
      </footer>
    </div>
  );
}
