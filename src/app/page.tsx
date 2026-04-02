"use client";

import { useState } from "react";
import TableOfContents from "@/components/TableOfContents";
import SummaryScores from "@/components/SummaryScores";
import QuantitativeEvaluation from "@/components/QuantitativeEvaluation";
import QualitativeEvaluation from "@/components/QualitativeEvaluation";

const tabs = [
  {
    id: "toc",
    label: "สารบัญเอกสาร",
    shortLabel: "สารบัญ",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: "summary",
    label: "สรุปคะแนน",
    shortLabel: "สรุป",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: "quantitative",
    label: "ประเมินเชิงปริมาณ",
    shortLabel: "ปริมาณ",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
  {
    id: "qualitative",
    label: "ประเมินเชิงคุณภาพ",
    shortLabel: "คุณภาพ",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("toc");

  return (
    <div className="min-h-screen" style={{ background: "#f0f2f9" }}>
      {/* Header */}
      <header className="text-white shadow-xl" style={{ background: "linear-gradient(135deg, #2a3a7c 0%, #3D52A0 50%, #7091E6 100%)" }}>
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center gap-5">
            <div className="relative flex-shrink-0">
              <img
                src="/profile.jpg"
                alt="ผศ.ดร. สรายุทธ กรวิรัตน์"
                className="w-20 h-20 rounded-full object-cover border-4"
                style={{ borderColor: "rgba(255,255,255,0.5)", boxShadow: "0 0 0 4px rgba(112,145,230,0.4), 0 8px 24px rgba(0,0,0,0.25)" }}
              />
              <span className="absolute bottom-0 right-0 w-5 h-5 rounded-full border-2 border-white" style={{ background: "#4ade80" }} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "rgba(255,255,255,0.2)", color: "#e0e9ff" }}>
                  ผู้ช่วยศาสตราจารย์ ดร.
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">สรายุทธ กรวิรัตน์</h1>
              <p className="mt-1 text-sm" style={{ color: "#c8d5f8" }}>
                สาขาวิชาวิศวกรรมคอมพิวเตอร์ · คณะวิศวกรรมศาสตร์และเทคโนโลยีอุตสาหกรรม
              </p>
              <p className="text-xs mt-1.5 flex items-center gap-1.5" style={{ color: "#a8bef5" }}>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                มหาวิทยาลัยกาฬสินธุ์ · รอบการประเมิน: 1 ตุลาคม 2567 – 31 มีนาคม 2568
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="sticky top-0 z-50 shadow-md" style={{ background: "linear-gradient(180deg, #1e2a4a 0%, #2a3a7c 100%)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-1 py-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0"
                  style={isActive ? {
                    background: "linear-gradient(135deg, #7091E6, #3D52A0)",
                    color: "#fff",
                    boxShadow: "0 4px 12px rgba(61,82,160,0.5)",
                  } : {
                    background: "rgba(255,255,255,0.07)",
                    color: "#94a3c8",
                    cursor: "pointer",
                  }}
                  onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = "rgba(255,255,255,0.14)"; e.currentTarget.style.color = "#c8d5f8"; } }}
                  onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "#94a3c8"; } }}
                >
                  {tab.icon}
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.shortLabel}</span>
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
