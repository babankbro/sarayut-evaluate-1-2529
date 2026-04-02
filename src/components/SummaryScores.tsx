const P = {
  dark: "#3D52A0",
  mid: "#7091E6",
  light: "#eef1fb",
  border: "#dde4f5",
  accent: "#F4A261",
  accentLight: "#fef3e8",
  text: "#1e2a4a",
};

export default function SummaryScores() {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden" style={{ border: `1px solid ${P.border}` }}>
      <div className="px-6 py-4" style={{ background: `linear-gradient(135deg, ${P.dark} 0%, ${P.mid} 100%)` }}>
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          เอกสารหมายเลข 0.1 - แบบสรุปคะแนนประเมิน
        </h2>
        <p className="text-sm mt-1" style={{ color: "#c8d5f8" }}>องค์ประกอบที่ 1: การประเมินปริมาณภาระงานและผลสัมฤทธิ์ของการปฏิบัติราชการ</p>
      </div>

      <div className="p-6 space-y-8">
        {/* Overall Score Card */}
        <div className="rounded-xl p-6 text-center" style={{ background: P.light, border: `1px solid ${P.border}` }}>
          <p className="text-sm text-slate-500 mb-1">คะแนนรวมทั้งหมด</p>
          <div className="text-5xl font-bold" style={{ color: P.dark }}>76.80</div>
          <p className="text-slate-500 mt-1">จากคะแนนเต็ม 80 คะแนน</p>
          <div className="mt-3 w-full rounded-full h-3" style={{ background: "#c5d0ef" }}>
            <div className="h-3 rounded-full" style={{ width: "96%", background: `linear-gradient(90deg, ${P.dark}, ${P.mid})` }}></div>
          </div>
          <p className="text-sm font-semibold mt-2" style={{ color: P.dark }}>96.00%</p>
        </div>

        {/* Section 1.1 - Workload */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 flex-wrap" style={{ color: P.text }}>
            <span className="text-sm px-3 py-1 rounded-full" style={{ background: P.accentLight, color: P.accent }}>1.1</span>
            การประเมินผลการปฏิบัติราชการตามกรอบภาระงาน
            <span className="ml-auto font-bold" style={{ color: P.dark }}>60.00 / 60 คะแนน</span>
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: P.light }}>
                  <th className="text-left px-4 py-3 font-semibold" style={{ color: P.dark }}>ภาระงาน</th>
                  <th className="text-center px-4 py-3 font-semibold text-slate-600">ชั่วโมงทำการ (จริง)</th>
                  <th className="text-center px-4 py-3 font-semibold text-slate-600">ชั่วโมงทำการ (คิดคะแนน)</th>
                  <th className="text-center px-4 py-3 font-semibold text-slate-600">ชั่วโมงทำการ (เกณฑ์ขั้นต่ำ)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { name: "ก) งานสอน", actual: 26.85, scored: 16, min: 16 },
                  { name: "ข) งานวิจัยและผลงานวิชาการ", actual: 7.00, scored: 4, min: 4 },
                  { name: "ค) งานบริการทางวิชาการ", actual: 5.00, scored: 3, min: 3 },
                  { name: "ง) งานทำนุบำรุงศิลปวัฒนธรรม", actual: 1.00, scored: 1, min: 1 },
                  { name: "จ) งานด้านอื่นๆ", actual: 13.00, scored: 11, min: 11 },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 text-slate-700 font-medium">{row.name}</td>
                    <td className="px-4 py-3 text-center text-slate-600">{row.actual.toFixed(2)}</td>
                    <td className="px-4 py-3 text-center font-semibold" style={{ color: P.dark }}>{row.scored}</td>
                    <td className="px-4 py-3 text-center text-slate-400">{row.min}</td>
                  </tr>
                ))}
                <tr className="font-semibold" style={{ background: P.light }}>
                  <td className="px-4 py-3" style={{ color: P.dark }}>ผลรวม</td>
                  <td className="px-4 py-3 text-center" style={{ color: P.dark }}>52.85</td>
                  <td className="px-4 py-3 text-center" style={{ color: P.dark }}>35</td>
                  <td className="px-4 py-3 text-center" style={{ color: P.dark }}>35</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">วิธีคิด: คะแนนเต็ม 60 คะแนน = ผลรวมชั่วโมงทำการจาก (ก) ถึง (จ) × 60</p>
        </div>

        {/* Section 1.2 - Performance */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 flex-wrap" style={{ color: P.text }}>
            <span className="text-sm px-3 py-1 rounded-full" style={{ background: P.light, color: P.mid }}>1.2</span>
            การประเมินผลสัมฤทธิ์การปฏิบัติราชการ
            <span className="ml-auto font-bold" style={{ color: P.dark }}>16.80 / 20 คะแนน</span>
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: P.light }}>
                  <th className="text-left px-4 py-3 font-semibold" style={{ color: P.dark }}>ด้าน</th>
                  <th className="text-center px-4 py-3 font-semibold text-slate-600">คะแนนดิบ</th>
                  <th className="text-center px-4 py-3 font-semibold text-slate-600">คะแนนเต็ม</th>
                  <th className="text-center px-4 py-3 font-semibold text-slate-600">เทียบคะแนนเต็ม 20</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { name: "ข้อที่ 1: ด้านการจัดการเรียนการสอน", raw: 850, full: 1000, scaled: 8.50 },
                  { name: "ข้อที่ 2: ด้านงานวิจัย/ผลงานสร้างสรรค์", raw: 300, full: 300, scaled: 3.00 },
                  { name: "ข้อที่ 3: ด้านการบริการทางวิชาการแก่สังคม", raw: 240, full: 200, scaled: 2.40 },
                  { name: "ข้อที่ 4: ด้านการทำนุบำรุงศิลปวัฒนธรรม", raw: 130, full: 200, scaled: 1.30 },
                  { name: "ข้อที่ 5: ด้านบริหารจัดการ", raw: 160, full: 300, scaled: 1.60 },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 text-slate-700 font-medium">{row.name}</td>
                    <td className="px-4 py-3 text-center text-slate-600">{row.raw.toLocaleString()}</td>
                    <td className="px-4 py-3 text-center text-slate-400">{row.full.toLocaleString()}</td>
                    <td className="px-4 py-3 text-center font-bold" style={{ color: P.dark }}>{row.scaled.toFixed(2)}</td>
                  </tr>
                ))}
                <tr className="font-semibold" style={{ background: P.light }}>
                  <td className="px-4 py-3" style={{ color: P.dark }}>รวมคะแนน</td>
                  <td className="px-4 py-3 text-center" style={{ color: P.dark }}>1,680</td>
                  <td className="px-4 py-3 text-center" style={{ color: P.dark }}>2,000</td>
                  <td className="px-4 py-3 text-center" style={{ color: P.dark }}>16.80</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">วิธีคิด: คะแนนเต็ม 20 คะแนน = (ผลรวมจากข้อ 1 ถึง ข้อ 5) × 20 / 2,000</p>
        </div>

        {/* Score Breakdown Visual */}
        <div>
          <h3 className="text-lg font-semibold mb-4" style={{ color: P.text }}>สัดส่วนคะแนนแต่ละด้าน (เทียบ 20 คะแนน)</h3>
          <div className="space-y-3">
            {[
              { name: "การเรียนการสอน", score: 8.50 },
              { name: "งานวิจัย", score: 3.00 },
              { name: "บริการวิชาการ", score: 2.40 },
              { name: "ทำนุบำรุงฯ", score: 1.30 },
              { name: "บริหารจัดการ", score: 1.60 },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-sm text-slate-500 w-36 text-right shrink-0">{item.name}</span>
                <div className="flex-1 rounded-full h-6 overflow-hidden" style={{ background: P.light }}>
                  <div
                    className="h-6 rounded-full flex items-center justify-end pr-2 transition-all duration-500"
                    style={{
                      width: `${(item.score / 10) * 100}%`,
                      background: i % 2 === 0
                        ? `linear-gradient(90deg, ${P.dark}, ${P.mid})`
                        : `linear-gradient(90deg, ${P.accent}, #f7c08a)`,
                    }}
                  >
                    <span className="text-xs text-white font-semibold">{item.score.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
