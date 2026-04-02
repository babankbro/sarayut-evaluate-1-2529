import { EvidenceLinks } from "@/components/EvidenceLinks";

interface EvalItem {
  id: string;
  name: string;
  levels: { level: number; description: string; score: number }[];
  result: { level: number; score: number } | null;
  evidence?: string;
}

interface Mission {
  id: number;
  name: string;
  maxScore: number;
  totalScore: number;
  condition?: string;
  items: EvalItem[];
}

const missions: Mission[] = [
  {
    id: 1,
    name: "พันธกิจด้านการจัดการเรียนการสอน",
    maxScore: 1000,
    totalScore: 850,
    condition: "เลือกประเมิน 4 ข้อ",
    items: [
      {
        id: "1.1",
        name: "ผลสำเร็จของงานที่เกิดจากผลการประเมินการจัดการเรียนการสอน (สกอ.2.6, 3.2)",
        levels: [
          { level: 1, description: "น้อยกว่า 1.51", score: 150 },
          { level: 2, description: "1.51-2.50", score: 175 },
          { level: 3, description: "2.51-3.50", score: 200 },
          { level: 4, description: "3.51-4.50", score: 225 },
          { level: 5, description: "มากกว่า 4.50", score: 250 },
        ],
        result: { level: 4, score: 225 },
        evidence: "เอกสารหมายเลข 1.5",
      },
      {
        id: "1.2",
        name: "ผลสำเร็จของงานที่เกิดจากการวางแผนและจัดการเรียนการสอน (TQF, สกอ.2.6, 4.1, สมศ.8)",
        levels: [
          { level: 1, description: "มีการส่ง มคอ.3/มคอ.4 ก่อนเปิดภาคเรียน", score: 150 },
          { level: 2, description: "เป็นไปตามระดับที่ 1 และมีการส่ง มคอ.5/มคอ.6 ภายหลังสิ้นสุดภาคเรียน", score: 175 },
          { level: 3, description: "เป็นไปตามระดับที่ 2 และมีเอกสารประกอบการสอน/เอกสารคำสอนที่มีการจัดการเรียนการสอนที่เน้นผู้เรียนเป็นสำคัญ อาทิเช่น การสอนแบบแก้ปัญหา รูปแบบการเรียนที่ใช้ปัญหาเป็นหลัก วิธีสอนแบบระดมสมอง วิธีสอนแบบบูรณาการ", score: 200 },
          { level: 4, description: "เป็นไปตามระดับที่ 3 และมีการปรับปรุงเอกสารประกอบการสอน/เอกสารคำสอน", score: 225 },
          { level: 5, description: "เป็นไปตามระดับที่ 4 และมีการทำวิจัยในชั้นเรียน", score: 250 },
        ],
        result: { level: 3, score: 200 },
        evidence: "เอกสารหมายเลข 1.4.1-1.4.3",
      },
      {
        id: "1.3",
        name: "ผลสำเร็จของการผลิตสื่อการสอน (สกอ.11.2.1)",
        levels: [
          { level: 1, description: "มีการใช้สื่อการสอน เช่น Power point, แบบจำลอง", score: 150 },
          { level: 2, description: "มีการปรับปรุงและใช้สื่อการสอนอย่างน้อย 1/4 ของเนื้อหา", score: 175 },
          { level: 3, description: "ประยุกต์การใช้สื่อการสอนที่มีอยู่ให้เป็นนวัตกรรมการเรียนการสอน เช่น e-learning, CAI, วีดีทัศน์, สิ่งประดิษฐ์ ฯลฯ", score: 200 },
          { level: 4, description: "ปรับปรุงสื่อนวัตกรรมอย่างน้อย 1/4 ของเนื้อหา", score: 225 },
          { level: 5, description: "เผยแพร่สื่อนวัตกรรมโดยผู้อื่นนำไปใช้หรือยื่นจดลิขสิทธิ์", score: 250 },
        ],
        result: { level: 3, score: 200 },
        evidence: "เอกสารหมายเลข 1.4.4",
      },
      {
        id: "1.5.2",
        name: "ปริญญานิพนธ์/วิทยานิพนธ์ของนักศึกษาระดับปริญญาตรี",
        levels: [
          { level: 1, description: "ยื่นเสนอหัวข้อต่อคณะกรรมการ", score: 150 },
          { level: 2, description: "สอบผ่านหัวข้อ", score: 175 },
          { level: 3, description: "ดำเนินการจนแล้วเสร็จ", score: 200 },
          { level: 4, description: "ยื่นสอบต่อคณะกรรมการ", score: 225 },
          { level: 5, description: "สอบผ่านและส่งเล่มฉบับสมบูรณ์", score: 250 },
        ],
        result: { level: 4, score: 225 },
        evidence: "เอกสารหมายเลข 1.2.1, 1.2.2",
      },
    ],
  },
  {
    id: 2,
    name: "พันธกิจด้านงานวิจัย/ผลงานสร้างสรรค์",
    maxScore: 300,
    totalScore: 300,
    condition: "เลือกประเมินเพียง 2 ข้อ",
    items: [
      {
        id: "2.2",
        name: "ผลสำเร็จของการเสนอขอโครงงานวิจัย/งานสร้างสรรค์/สิ่งประดิษฐ์ที่ได้รับทุนสนับสนุน (สกอ.4.2, สมศ.5)",
        levels: [
          { level: 1, description: "ต่ำกว่า 50,000 บาท", score: 50 },
          { level: 2, description: "50,000 – 100,000 บาท", score: 75 },
          { level: 3, description: "100,001 – 500,000 บาท", score: 100 },
          { level: 4, description: "500,001 – 1,000,000 บาท", score: 125 },
          { level: 5, description: "มากกว่า 1,000,000 บาท", score: 150 },
        ],
        result: { level: 5, score: 150 },
        evidence: "เอกสารหมายเลข 2.1.2",
      },
      {
        id: "2.4",
        name: "ผลสำเร็จของงานวิจัยที่ได้รับการตีพิมพ์ (สมศ.5)",
        levels: [
          { level: 1, description: "ส่งตีพิมพ์ระดับชาติ", score: 50 },
          { level: 2, description: "ได้รับการตีพิมพ์ระดับชาติ (ไม่มี Impact factor)", score: 75 },
          { level: 3, description: "ส่งตีพิมพ์ระดับนานาชาติ", score: 100 },
          { level: 4, description: "ได้รับการตีพิมพ์ระดับชาติ (มี Impact factor)", score: 125 },
          { level: 5, description: "ได้รับการตีพิมพ์ระดับนานาชาติ", score: 150 },
        ],
        result: { level: 5, score: 150 },
        evidence: "เอกสารหมายเลข 2.2.1-2.2.4",
      },
    ],
  },
  {
    id: 3,
    name: "พันธกิจด้านการบริการทางวิชาการแก่สังคม",
    maxScore: 200,
    totalScore: 130,
    condition: "เลือกประเมินเพียง 2 ข้อ",
    items: [
      {
        id: "3.1",
        name: "ผลสำเร็จของการเสนอขอโครงการบริการวิชาการทางวิชาการแก่สังคม (สกอ.5.1, สมศ.8)",
        levels: [
          { level: 1, description: "เสนอโครงการต่อหน่วยงาน", score: 60 },
          { level: 2, description: "โครงการได้รับการอนุมัติให้ดำเนินการจากงบประมาณภายในมหาวิทยาลัย", score: 70 },
          { level: 3, description: "โครงการได้รับการอนุมัติให้ดำเนินการจากงบประมาณภายนอกมหาวิทยาลัย", score: 80 },
          { level: 4, description: "ดำเนินโครงการแล้วเสร็จ", score: 90 },
          { level: 5, description: "ส่งสรุปรายงานโครงการและแนวทางปรับปรุงแก้ไข", score: 100 },
        ],
        result: { level: 2, score: 70 },
        evidence: "เอกสารหมายเลข 3.3.1-3.3.2",
      },
      {
        id: "3.2",
        name: "ผลสำเร็จของการบูรณาการโครงการบริการวิชาการทางวิชาการแก่สังคม (สกอ.5.1, สมศ.8)",
        levels: [
          { level: 1, description: "มีการบูรณาการโครงการฯ กับการเรียนการสอน", score: 60 },
          { level: 2, description: "มีการบูรณาการโครงการฯ กับการวิจัย", score: 70 },
          { level: 3, description: "มีการนำโครงการฯ ขยายผลสู่การปรับปรุงรายวิชา", score: 80 },
          { level: 4, description: "มีการนำโครงการฯ ขยายผลสู่การเปิดรายวิชาใหม่", score: 90 },
          { level: 5, description: "มีการนำโครงการฯ ไปต่อยอดสู่หนังสือหรือตำรา", score: 100 },
        ],
        result: { level: 1, score: 60 },
        evidence: "เป็นวิทยากรเกี่ยวกับการใช้ IoT ได้นำมาใช้กับการเรียนรายวิชาการโปรแกรมคอมพิวเตอร์ ในใบงานที่ 8 สัปดาห์ที่ 14 แผนการสอน มคอ.3 เอกสารหมายเลข 3.1.1",
      },
    ],
  },
  {
    id: 4,
    name: "พันธกิจด้านการทำนุบำรุงศิลปวัฒนธรรม",
    maxScore: 200,
    totalScore: 160,
    condition: "เลือกประเมินเพียง 2 ข้อ",
    items: [
      {
        id: "4.1",
        name: "ผลสำเร็จของการเสนอโครงการทำนุบำรุงศิลปวัฒนธรรม (สกอ.6.1, สมศ.10)",
        levels: [
          { level: 1, description: "เสนอโครงการต่อหน่วยงาน", score: 60 },
          { level: 2, description: "โครงการได้รับการอนุมัติจากงบภายใน", score: 70 },
          { level: 3, description: "โครงการได้รับการอนุมัติจากงบภายนอก", score: 80 },
          { level: 4, description: "ดำเนินโครงการแล้วเสร็จ", score: 90 },
          { level: 5, description: "ส่งสรุปรายงานโครงการและแนวทางปรับปรุง", score: 100 },
        ],
        result: { level: 4, score: 90 },
        evidence: "เอกสารหมายเลข 4.1",
      },
      {
        id: "4.3",
        name: "ผลสำเร็จของการทำนุบำรุงศิลปวัฒนธรรม (สกอ.6.1, สมศ.10)",
        levels: [
          { level: 1, description: "บูรณาการกับการเรียนการสอนและกิจกรรมนักศึกษา", score: 60 },
          { level: 2, description: "มีการเผยแพร่กิจกรรมหรือการบริการด้านทำนุบำรุงศิลปะและวัฒนธรรมต่อสาธารณชน", score: 70 },
          { level: 3, description: "ประเมินผลความสำเร็จของการบูรณาการ", score: 80 },
          { level: 4, description: "นำผลประเมินไปปรับปรุง", score: 90 },
          { level: 5, description: "กำหนดมาตรฐานคุณภาพและมีผลงานระดับชาติ", score: 100 },
        ],
        result: { level: 2, score: 70 },
        evidence: "เอกสารหมายเลข 4.1",
      },
    ],
  },
  {
    id: 5,
    name: "พันธกิจด้านบริหารจัดการ",
    maxScore: 300,
    totalScore: 240,
    condition: "เลือกประเมินเพียง 2 ข้อ",
    items: [
      {
        id: "5.1",
        name: "การปฏิบัติงานตามคำสั่งของคณะ นอกเหนือพันธกิจหลักของตนเอง",
        levels: [
          { level: 1, description: "รับทราบ", score: 60 },
          { level: 2, description: "ดำเนินการได้ร้อยละ 50", score: 70 },
          { level: 3, description: "ดำเนินการได้ร้อยละ 80", score: 80 },
          { level: 4, description: "ดำเนินการแล้วเสร็จ", score: 90 },
          { level: 5, description: "ดำเนินการแล้วเสร็จพร้อมจัดทำรายงาน", score: 100 },
        ],
        result: { level: 4, score: 120 },
        evidence: "เอกสารหมายเลข 5.1",
      },
      {
        id: "5.2",
        name: "การปฏิบัติงานตามคำสั่งของมหาวิทยาลัย นอกเหนือพันธกิจหลักของตนเอง",
        levels: [
          { level: 1, description: "รับทราบ", score: 60 },
          { level: 2, description: "ดำเนินการได้ร้อยละ 50", score: 70 },
          { level: 3, description: "ดำเนินการได้ร้อยละ 80", score: 80 },
          { level: 4, description: "ดำเนินการแล้วเสร็จ", score: 90 },
          { level: 5, description: "ดำเนินการแล้วเสร็จพร้อมจัดทำรายงาน", score: 100 },
        ],
        result: { level: 4, score: 120 },
        evidence: "เอกสารหมายเลข 5.2.1-5.2.3",
      },
    ],
  },
];

const P = { dark: "#3D52A0", mid: "#7091E6", light: "#eef1fb", border: "#dde4f5", accent: "#F4A261", accentLight: "#fef3e8", text: "#1e2a4a" };

const missionStyle = (id: number) => {
  const styles: Record<number, { grad: string; barColor: string }> = {
    1: { grad: `linear-gradient(135deg, #3D52A0, #7091E6)`, barColor: "#7091E6" },
    2: { grad: `linear-gradient(135deg, #3D52A0, #7091E6)`, barColor: "#7091E6" },
    3: { grad: `linear-gradient(135deg, #F4A261, #f7c08a)`, barColor: "#F4A261" },
    4: { grad: `linear-gradient(135deg, #F4A261, #f7c08a)`, barColor: "#F4A261" },
    5: { grad: `linear-gradient(135deg, #3D52A0, #7091E6)`, barColor: "#7091E6" },
  };
  return styles[id] ?? styles[1];
};

export default function QualitativeEvaluation() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden" style={{ border: `1px solid ${P.border}` }}>
        <div className="px-6 py-4" style={{ background: `linear-gradient(135deg, ${P.dark} 0%, ${P.mid} 100%)` }}>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            เอกสารหมายเลข 0.3 - แบบสรุปคะแนนประเมินเชิงคุณภาพ
          </h2>
          <p className="text-sm mt-1" style={{ color: "#c8d5f8" }}>แบบประเมินผลสัมฤทธิ์ของการปฏิบัติราชการตามภาระงาน 5 พันธกิจ (20 คะแนน)</p>
        </div>

        {/* Overview Cards */}
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
            {missions.map((m) => {
              const ms = missionStyle(m.id);
              const pct = Math.min((m.totalScore / m.maxScore) * 100, 100);
              return (
                <div key={m.id} className="rounded-xl p-4 bg-white" style={{ border: `1px solid ${P.border}` }}>
                  <div className="text-xs text-slate-400 mb-1">พันธกิจที่ {m.id}</div>
                  <div className="text-2xl font-bold" style={{ color: P.dark }}>{m.totalScore}</div>
                  <div className="text-xs text-slate-400">/ {m.maxScore} คะแนน</div>
                  <div className="mt-2 w-full rounded-full h-1.5" style={{ background: P.light }}>
                    <div className="h-1.5 rounded-full" style={{ width: `${pct}%`, background: ms.barColor }}></div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="rounded-xl p-5 text-center mb-6" style={{ background: P.light, border: `1px solid ${P.border}` }}>
            <p className="text-sm text-slate-500">รวมคะแนนทุกพันธกิจ (คะแนนดิบเต็ม 2,000)</p>
            <div className="text-4xl font-bold mt-1" style={{ color: P.dark }}>1,680</div>
            <p className="text-sm text-slate-500 mt-1">เทียบคะแนนเต็ม 20 คะแนน</p>
            <div className="text-3xl font-bold" style={{ color: P.mid }}>16.80</div>
          </div>
        </div>
      </div>

      {/* Detailed per-mission */}
      {missions.map((mission) => {
        const ms = missionStyle(mission.id);
        return (
          <div key={mission.id} className="bg-white rounded-2xl shadow-md overflow-hidden" style={{ border: `1px solid ${P.border}` }}>
            <div className="px-6 py-3" style={{ background: ms.grad }}>
              <h3 className="text-lg font-bold text-white">
                {mission.id}. {mission.name}
              </h3>
              <div className="flex items-center gap-3 mt-1 flex-wrap">
                <span className="text-white/80 text-sm">คะแนนเต็ม {mission.maxScore}</span>
                <span className="text-white font-semibold text-sm">ได้ {mission.totalScore} คะแนน</span>
                {mission.condition && (
                  <span className="text-white text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.2)" }}>{mission.condition}</span>
                )}
              </div>
            </div>

            <div className="p-6 space-y-6">
              {mission.items.map((item) => (
                <div key={item.id} className="rounded-xl overflow-hidden" style={{ border: `1px solid ${P.border}` }}>
                  <div className="px-4 py-3 border-b" style={{ background: P.light, borderColor: P.border }}>
                    <div className="flex items-start gap-2">
                      <span className="text-xs font-semibold px-2 py-1 rounded-full flex-shrink-0" style={{ background: "rgba(255,255,255,0.9)", color: P.dark, border: `1px solid ${P.border}` }}>
                        ข้อ {item.id}
                      </span>
                      <span className="text-sm font-semibold" style={{ color: P.text }}>{item.name}</span>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="space-y-2 mb-3">
                      {item.levels.map((lvl) => {
                        const isSelected = item.result?.level === lvl.level && lvl.level > 0;
                        return (
                          <div
                            key={lvl.level}
                            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors"
                            style={isSelected ? { background: ms.grad, color: "#fff" } : { background: "#f8f9fc", color: "#475569" }}
                          >
                            <span
                              className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                              style={isSelected ? { background: "rgba(255,255,255,0.25)", color: "#fff" } : { background: P.light, color: P.dark }}
                            >
                              {lvl.level}
                            </span>
                            <span className="flex-1">{lvl.description}</span>
                            <span className="font-semibold text-xs" style={isSelected ? { color: "#fff" } : { color: "#94a3b8" }}>
                              {lvl.score} คะแนน
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex items-center justify-between rounded-lg px-4 py-2 text-sm flex-wrap gap-2" style={{ background: P.light }}>
                      <div>
                        <span className="text-slate-500">ผลการประเมิน: </span>
                        {item.result && item.result.level > 0 ? (
                          <span className="font-bold" style={{ color: P.dark }}>
                            ได้ระดับที่ {item.result.level} = {item.result.score} คะแนน
                          </span>
                        ) : (
                          <span className="text-slate-400">ไม่ได้เลือกประเมิน</span>
                        )}
                      </div>
                      {item.evidence && (
                        <EvidenceLinks raw={item.evidence} />
                      )}
                    </div>
                  </div>
                </div>
              ))}

              <div className="rounded-xl px-5 py-3 text-white flex items-center justify-between" style={{ background: ms.grad }}>
                <span className="font-semibold">รวมคะแนน{mission.name}</span>
                <span className="text-xl font-bold">{mission.totalScore} คะแนน</span>
              </div>
            </div>
          </div>
        );
      })}

      {/* Final Summary */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden" style={{ border: `1px solid ${P.border}` }}>
        <div className="px-6 py-4" style={{ background: `linear-gradient(135deg, ${P.dark} 0%, ${P.mid} 100%)` }}>
          <h3 className="text-lg font-bold text-white">สรุปการประเมินผลการปฏิบัติงานด้านคุณภาพ (เชิงคุณภาพ)</h3>
        </div>
        <div className="p-6">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: P.light }}>
                <th className="text-left px-4 py-3 font-semibold" style={{ color: P.dark }}>ด้าน</th>
                <th className="text-center px-4 py-3 font-semibold text-slate-600">คะแนนดิบ</th>
                <th className="text-center px-4 py-3 font-semibold text-slate-600">คะแนนเต็ม</th>
                <th className="text-center px-4 py-3 font-semibold text-slate-600">เทียบเต็ม 20</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { name: "1. ด้านการจัดการเรียนการสอน", raw: 850, full: 1000, scaled: 8.50 },
                { name: "2. ด้านงานวิจัย/ผลงานสร้างสรรค์", raw: 300, full: 300, scaled: 3.00 },
                { name: "3. ด้านการบริการทางวิชาการแก่สังคม", raw: 130, full: 200, scaled: 1.30 },
                { name: "4. ด้านการทำนุบำรุงศิลปวัฒนธรรม", raw: 160, full: 200, scaled: 1.60 },
                { name: "5. ด้านบริหารจัดการ", raw: 240, full: 300, scaled: 2.40 },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 text-slate-700 font-medium">{row.name}</td>
                  <td className="px-4 py-3 text-center text-slate-600">{row.raw.toLocaleString()}</td>
                  <td className="px-4 py-3 text-center text-slate-400">{row.full.toLocaleString()}</td>
                  <td className="px-4 py-3 text-center font-bold" style={{ color: P.dark }}>{row.scaled.toFixed(2)}</td>
                </tr>
              ))}
              <tr className="font-bold" style={{ background: `${P.dark}18` }}>
                <td className="px-4 py-3" style={{ color: P.dark }}>รวมคะแนนทุกพันธกิจ</td>
                <td className="px-4 py-3 text-center" style={{ color: P.dark }}>1,680</td>
                <td className="px-4 py-3 text-center" style={{ color: P.dark }}>2,000</td>
                <td className="px-4 py-3 text-center" style={{ color: P.dark }}>16.80</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
