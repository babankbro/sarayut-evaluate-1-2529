"use client";

import { useState } from "react";
import { EvidenceLinks } from "@/components/EvidenceLinks";

const P = { dark: "#3D52A0", mid: "#7091E6", light: "#eef1fb", border: "#dde4f5", accent: "#F4A261", accentLight: "#fef3e8", text: "#1e2a4a" };

function CollapseIcon({ open }: { open: boolean }) {
  return (
    <svg className="w-5 h-5 transition-transform duration-200 flex-shrink-0"
      style={{ transform: open ? "rotate(0deg)" : "rotate(-90deg)", color: "#7091E6" }}
      fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function QuantitativeEvaluation() {
  const [open, setOpen] = useState<Record<string, boolean>>({ s021: true, s013: true, s022: true });
  const toggle = (k: string) => setOpen(prev => ({ ...prev, [k]: !prev[k] }));

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden" style={{ border: `1px solid ${P.border}` }}>
        <div className="px-6 py-4" style={{ background: `linear-gradient(135deg, ${P.dark} 0%, ${P.mid} 100%)` }}>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
            เอกสารหมายเลข 0.2 - การประเมินเชิงปริมาณ
          </h2>
          <p className="text-sm mt-1" style={{ color: "#c8d5f8" }}>คลิกที่หัวข้อเพื่อย่อ/ขยาย</p>
        </div>
      </div>

      <div className="space-y-4">
        {/* 0.2.1 Teaching Workload */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden" style={{ border: `1px solid ${P.border}` }}>
          <button onClick={() => toggle("s021")} className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors" style={{ background: open.s021 ? P.accentLight : "#fff" }}>
            <div className="flex items-center gap-3">
              <span className="text-sm px-3 py-1 rounded-full font-semibold" style={{ background: P.accent + "22", color: P.accent }}>0.2.1</span>
              <span className="font-semibold" style={{ color: P.text }}>ภาระงานด้านงานสอน</span>
            </div>
            <div className="flex items-center gap-3">
              <EvidenceLinks raw="เอกสารหมายเลข 1.1, 1.2.1, 1.2.2, 1.3, 1.4.1, 1.4.2, 1.4.3, 1.4.4, 1.5" />
              <CollapseIcon open={open.s021} />
            </div>
          </button>
          {open.s021 && <div className="px-5 pb-5 border-t" style={{ borderColor: P.border }}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: P.light }}>
                  <th className="text-center px-3 py-3 text-slate-600 font-semibold w-10">ลำดับ</th>
                  <th className="text-left px-3 py-3 text-slate-600 font-semibold">ชื่อวิชา</th>
                  <th className="text-center px-3 py-3 text-slate-600 font-semibold">ระดับ</th>
                  <th className="text-center px-3 py-3 text-slate-600 font-semibold">จำนวน นศ.</th>
                  <th className="text-center px-3 py-3 text-slate-600 font-semibold">ค่าปัจจัย</th>
                  <th className="text-center px-3 py-3 text-slate-600 font-semibold">หน่วยกิต</th>
                  <th className="text-center px-3 py-3 text-slate-600 font-semibold">ภาระงาน/หน่วยกิต</th>
                  <th className="text-center px-3 py-3 text-slate-600 font-semibold">จำนวนผู้สอน</th>
                  <th className="text-center px-3 py-3 text-slate-600 font-semibold">ชั่วโมงทำการ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { no: 1, code: "EN-001-002", name: "การโปรแกรมคอมพิวเตอร์", level: "ป.ตรี", students: 65, factor: 1.5, credits: 3, workload: 3, instructors: 1, hours: 13.5 },
                  { no: 2, code: "EN-012-212", name: "โครงงานวิศวกรรมคอมพิวเตอร์ 2", level: "ป.ตรี", students: 19, factor: 1, credits: 1, workload: 3, instructors: 1, hours: 3.0 },
                  { no: 3, code: "EN-013-328", name: "การประยุกต์ใช้ปัญญาประดิษฐ์", level: "ป.ตรี", students: 20, factor: 1, credits: 3, workload: 3, instructors: 1, hours: 9.0 },
                ].map((row) => (
                  <tr key={row.no} className="hover:bg-slate-50 transition-colors">
                    <td className="px-3 py-3 text-center text-slate-500">{row.no}</td>
                    <td className="px-3 py-3">
                      <span className="font-mono text-xs text-slate-500">{row.code}</span>
                      <br />
                      <span className="text-slate-700 font-medium">{row.name}</span>
                    </td>
                    <td className="px-3 py-3 text-center text-slate-600">{row.level}</td>
                    <td className="px-3 py-3 text-center text-slate-600">{row.students}</td>
                    <td className="px-3 py-3 text-center text-slate-600">{row.factor}</td>
                    <td className="px-3 py-3 text-center text-slate-600">{row.credits}</td>
                    <td className="px-3 py-3 text-center text-slate-600">{row.workload}</td>
                    <td className="px-3 py-3 text-center text-slate-600">{row.instructors}</td>
                    <td className="px-3 py-3 text-center font-bold" style={{ color: P.dark }}>{row.hours.toFixed(1)}</td>
                  </tr>
                ))}
                <tr className="font-semibold" style={{ background: P.light }}>
                  <td colSpan={8} className="px-3 py-3 text-right" style={{ color: P.dark }}>รวมจำนวนชั่วโมงทำการ</td>
                  <td className="px-3 py-3 text-center" style={{ color: P.dark }}>25.50</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 bg-slate-50 rounded-lg p-3 text-xs text-slate-500 space-y-1">
            <p>1. ค่าปัจจัยระดับการสอน: ปวส. และ ป.ตรี = 1, ป.โท = 1.5</p>
            <p>2. วิธีคำนวณ: ชั่วโมงทำการ = ค่าปัจจัย × หน่วยกิต × ภาระงาน/หน่วยกิต ÷ จำนวนผู้สอน</p>
          </div>
          </div>}
        </div>

        {/* Additional teaching tasks */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden" style={{ border: `1px solid ${P.border}` }}>
          <button onClick={() => toggle("s013")} className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors" style={{ background: open.s013 ? P.accentLight : "#fff" }}>
            <div className="flex items-center gap-3">
              <span className="text-sm px-3 py-1 rounded-full font-semibold" style={{ background: P.accent + "22", color: P.accent }}>1.2-1.3</span>
              <span className="font-semibold" style={{ color: P.text }}>ภาระงานอื่นๆ ด้านการสอน</span>
            </div>
            <div className="flex items-center gap-3">
              <EvidenceLinks raw="เอกสารหมายเลข 1.2.1, 1.2.2, 1.3" />
              <CollapseIcon open={open.s013} />
            </div>
          </button>
          {open.s013 && <div className="px-5 pb-5 border-t" style={{ borderColor: P.border }}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="text-left px-4 py-3 text-slate-600 font-semibold">รายการ</th>
                  <th className="text-center px-4 py-3 text-slate-600 font-semibold">รายละเอียด</th>
                  <th className="text-center px-4 py-3 text-slate-600 font-semibold">ชั่วโมงทำการ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 text-slate-700">1.2) ที่ปรึกษาปัญหาพิเศษ/วิทยานิพนธ์ โครงงาน 2 กลุ่ม 6 ชั่วโมง</td>
                  <td className="px-4 py-3 text-center text-slate-600">ที่ปรึกษาหลัก</td>
                  <td className="px-4 py-3 text-center font-semibold" style={{ color: P.dark }}>1.35</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 text-slate-700">1.3) อาจารย์ที่ปรึกษานักศึกษาห้อง CE6541 1.35 ชั่วโมง</td>
                  <td className="px-4 py-3 text-center text-slate-600">-</td>
                  <td className="px-4 py-3 text-center font-semibold" style={{ color: P.dark }}>0.00</td>
                </tr>
                <tr className="font-semibold" style={{ background: P.light }}>
                  <td colSpan={2} className="px-4 py-3 text-right" style={{ color: P.dark }}>รวมภาระงานสอนทั้งหมด</td>
                  <td className="px-4 py-3 text-center" style={{ color: P.dark }}>26.85</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>}
        </div>

        {/* 0.2.2 All Areas Summary */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden" style={{ border: `1px solid ${P.border}` }}>
          <button onClick={() => toggle("s022")} className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors" style={{ background: open.s022 ? P.light : "#fff" }}>
            <div className="flex items-center gap-3">
              <span className="text-sm px-3 py-1 rounded-full font-semibold" style={{ background: P.light, color: P.mid }}>0.2.2</span>
              <span className="font-semibold" style={{ color: P.text }}>สรุปปริมาณการปฏิบัติราชการแต่ละด้าน</span>
            </div>
            <div className="flex items-center gap-3">
              <EvidenceLinks raw="เอกสารหมายเลข 0.2.2" />
              <CollapseIcon open={open.s022} />
            </div>
          </button>
          {open.s022 && <div className="px-5 pb-5 border-t" style={{ borderColor: P.border }}>

          {/* Research */}
          <div className="mb-6">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
              <h4 className="font-semibold text-slate-700 border-l-4 pl-3" style={{ borderColor: P.dark }}>ส่วนที่ 2: งานวิจัยและผลงานวิชาการ</h4>
              <EvidenceLinks raw="เอกสารหมายเลข 2.1.1, 2.1.2, 2.2.1, 2.2.2, 2.2.3, 2.2.4" />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: P.light }}>
                    <th className="text-left px-4 py-2 text-slate-600 font-semibold">รายการ</th>
                    <th className="text-center px-4 py-2 text-slate-600 font-semibold">ชั่วโมงทำการ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-4 py-2 text-slate-700">2.1) ผู้ร่วมโครงการวิจัย 2 โครงการ</td>
                    <td className="px-4 py-2 text-center font-semibold" style={{ color: P.dark }}>2.00</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-slate-700">2.4.6) บทความวิจัยตีพิมพ์ระดับนานาชาติ (4 บทความ)</td>
                    <td className="px-4 py-2 text-center font-semibold" style={{ color: P.dark }}>5.00</td>
                  </tr>
                  <tr className="font-semibold" style={{ background: P.light }}>
                    <td className="px-4 py-2 text-right" style={{ color: P.dark }}>รวมภาระงานวิจัย</td>
                    <td className="px-4 py-2 text-center" style={{ color: P.dark }}>7.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Academic Service */}
          <div className="mb-6">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
              <h4 className="font-semibold text-slate-700 border-l-4 pl-3" style={{ borderColor: P.mid }}>ส่วนที่ 3: งานบริการทางวิชาการ</h4>
              <EvidenceLinks raw="เอกสารหมายเลข 3.1.1, 3.1.2, 3.1.3, 3.2, 3.3.1, 3.3.2" />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "#f4f6fe" }}>
                    <th className="text-left px-4 py-2 text-slate-600 font-semibold">รายการ</th>
                    <th className="text-center px-4 py-2 text-slate-600 font-semibold">ชั่วโมงทำการ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-4 py-2 text-slate-700">3.2) วิทยากรฝึกอบรม 3 โครงการ 15 ชั่วโมง</td>
                    <td className="px-4 py-2 text-center font-semibold" style={{ color: P.mid }}>1.00</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-slate-700">3.3) กรรมการคุมสอบวิทยานิพนธ์ 4 ท่าน</td>
                    <td className="px-4 py-2 text-center font-semibold" style={{ color: P.mid }}>4.00</td>
                  </tr>
                  <tr className="font-semibold" style={{ background: "#f4f6fe" }}>
                    <td className="px-4 py-2 text-right" style={{ color: P.mid }}>รวมภาระงานบริการวิชาการ</td>
                    <td className="px-4 py-2 text-center" style={{ color: P.mid }}>5.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Arts & Culture */}
          <div className="mb-6">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
              <h4 className="font-semibold text-slate-700 border-l-4 pl-3" style={{ borderColor: P.accent }}>ส่วนที่ 4: งานทำนุบำรุงศิลปวัฒนธรรม</h4>
              <EvidenceLinks raw="เอกสารหมายเลข 4.1" />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: P.accentLight }}>
                    <th className="text-left px-4 py-2 text-slate-600 font-semibold">รายการ</th>
                    <th className="text-center px-4 py-2 text-slate-600 font-semibold">ชั่วโมงทำการ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-4 py-2 text-slate-700">4.2) เข้าร่วมกิจกรรมทำนุบำรุงศิลปวัฒนธรรม</td>
                    <td className="px-4 py-2 text-center font-semibold" style={{ color: P.accent }}>1.00</td>
                  </tr>
                  <tr className="font-semibold" style={{ background: P.accentLight }}>
                    <td className="px-4 py-2 text-right" style={{ color: P.accent }}>รวมภาระงานทำนุบำรุงฯ</td>
                    <td className="px-4 py-2 text-center" style={{ color: P.accent }}>1.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Management/Other */}
          <div className="mb-6">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
              <h4 className="font-semibold text-slate-700 border-l-4 pl-3" style={{ borderColor: P.dark }}>ส่วนที่ 5: งานอื่นๆ (งานบริหาร/งานมอบหมาย/คำสั่ง)</h4>
              <EvidenceLinks raw="เอกสารหมายเลข 5.1, 5.2.1, 5.2.2, 5.2.3" />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: P.light }}>
                    <th className="text-left px-4 py-2 text-slate-600 font-semibold">รายการ</th>
                    <th className="text-center px-4 py-2 text-slate-600 font-semibold">ชั่วโมงทำการ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-4 py-2 text-slate-700">5.1) ประธานหลักสูตร วศ.บ. คอมพิวเตอร์</td>
                    <td className="px-4 py-2 text-center font-semibold" style={{ color: P.dark }}>5.00</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-slate-700">5.2) คำสั่งมหาวิทยาลัย (1 คำสั่ง)</td>
                    <td className="px-4 py-2 text-center font-semibold" style={{ color: P.dark }}>2.00</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-slate-700">5.3) คำสั่งคณะ (3 คำสั่ง)</td>
                    <td className="px-4 py-2 text-center font-semibold" style={{ color: P.dark }}>6.00</td>
                  </tr>
                  <tr className="font-semibold" style={{ background: P.light }}>
                    <td className="px-4 py-2 text-right" style={{ color: P.dark }}>รวมงานด้านอื่นๆ</td>
                    <td className="px-4 py-2 text-center" style={{ color: P.dark }}>13.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Grand Summary */}
          <div className="rounded-xl p-5" style={{ background: P.light, border: `1px solid ${P.border}` }}>
            <h4 className="font-bold mb-3 text-center" style={{ color: P.dark }}>สรุปการประเมินปริมาณการปฏิบัติราชการทั้ง 5 ด้าน</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ borderBottom: `2px solid ${P.border}` }}>
                    <th className="text-left px-4 py-2 text-slate-700 font-semibold">ด้าน</th>
                    <th className="text-center px-4 py-2 text-slate-700 font-semibold">ชั่วโมงทำการ</th>
                    <th className="text-center px-4 py-2 text-slate-700 font-semibold">สัดส่วน</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { name: "1. งานสอน", hours: 26.85 },
                    { name: "2. งานวิจัยและผลงานวิชาการ", hours: 7.00 },
                    { name: "3. งานบริการทางวิชาการ", hours: 5.00 },
                    { name: "4. งานทำนุบำรุงศิลปวัฒนธรรม", hours: 1.00 },
                    { name: "5. งานด้านอื่นๆ", hours: 13.00 },
                  ].map((item, i) => (
                    <tr key={i} className="hover:bg-white transition-colors">
                      <td className="px-4 py-2 text-slate-700 font-medium">{item.name}</td>
                      <td className="px-4 py-2 text-center font-bold" style={{ color: P.dark }}>{item.hours.toFixed(2)}</td>
                      <td className="px-4 py-2 text-center text-slate-400">{((item.hours / 52.85) * 100).toFixed(1)}%</td>
                    </tr>
                  ))}
                  <tr className="font-bold" style={{ background: `${P.dark}18` }}>
                    <td className="px-4 py-2" style={{ color: P.dark }}>รวมทุกด้าน</td>
                    <td className="px-4 py-2 text-center" style={{ color: P.dark }}>52.85</td>
                    <td className="px-4 py-2 text-center" style={{ color: P.dark }}>100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-sm mt-3 font-semibold" style={{ color: P.dark }}>
              คะแนนเต็ม 60 คะแนน → ได้ 60.00 คะแนน (เกินเกณฑ์ขั้นต่ำ 35 ชั่วโมงทำการ)
            </p>
          </div>
          </div>}
        </div>
      </div>
    </div>
  );
}
