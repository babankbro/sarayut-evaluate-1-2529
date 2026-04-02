"use client";

const documents = [
  {
    category: "เอกสารสรุป",
    items: [
      { id: "0.1", name: "แบบสรุปคะแนนประเมินการปฏิบัติราชการ", file: "0.1.pdf" },
      { id: "0.2.1", name: "แบบสรุปคะแนนประเมินเชิงปริมาณการสอน", file: "0.2.1.pdf" },
      { id: "0.2.2", name: "แบบสรุปคะแนนประเมินเชิงปริมาณแต่ละด้าน", file: "0.2.2.pdf" },
      { id: "0.3", name: "แบบสรุปคะแนนประเมินเชิงคุณภาพ", file: "0.3.pdf" },
    ],
  },
  {
    category: "1. ด้านการจัดการเรียนการสอน",
    items: [
      { id: "1.1", name: "ตารางสอน ภาคเรียนที่ 2/2568", file: "1.1.pdf" },
      { id: "1.2.1", name: "ผลการสอบโครงงานวิศวกรรมคอมพิวเตอร์ 2", file: "1.2.1.pdf" },
      { id: "1.2.2", name: "ตัวอย่างเล่มโครงงานนักศึกษา", file: "1.2.2.pdf" },
      { id: "1.3", name: "คำสั่งแต่งตั้งอาจารย์ที่ปรึกษาโครงงาน", file: "1.3.pdf" },
      { id: "1.4.1", name: "มคอ.3 รายวิชาการโปรแกรมคอมพิวเตอร์ (EN-001-002) ภาค 2/2568", file: "1.4.1.pdf" },
      { id: "1.4.2", name: "มคอ.5 รายวิชาการโปรแกรมคอมพิวเตอร์ (EN-001-002) ภาค 2/2568", file: "1.4.2.pdf" },
      { id: "1.4.3", name: "เอกสารประกอบการสอน EN-001-002 รายวิชาการโปรแกรมคอมพิวเตอร์ (Computer Programming)", file: "1.4.3.pdf" },
      { id: "1.4.4", name: "สื่อการสอนออนไลน์และแบบทดสอบ EN-001-002 รายวิชาการโปรแกรมคอมพิวเตอร์ (Computer Programming)", file: "1.4.4.pdf" },
      { id: "1.5", name: "ผลการประเมินการสอน 2/2568", file: "1.5.pdf" },
    ],
  },
  {
    category: "2. ด้านงานวิจัย/ผลงานสร้างสรรค์",
    items: [
      { id: "2.1.1", name: "ระบบวิเคราะห์ข้อมูลเพื่อการตัดสินใจฯ งบประมาณปี 2569 (ส่วนร่วมร้อยละ 5)", file: "2.1.2.pdf" },
      { id: "2.1.2", name: "ระบบวิเคราะห์ข้อมูลเพื่อการตัดสินใจฯ งบประมาณปี 2569 (ส่วนร่วมร้อยละ 3.5) งบประมาณ 9,500,000 บาท", file: "2.1.2.pdf" },
      { id: "2.2.1", name: "Gonwirat et al. (2026) A fuzzy-integrated hybrid gradient-boosted AI system for resilient, safe, and sustainable heritage tourism planning. Computers & Industrial Engineering, 214, 111798.", file: "2.2.1a.pdf" },
      { id: "2.2.2", name: "Khonjun et al. (2026) Advancing biomedical waste classification through a hybrid ensemble of deep Learning, reinforcement Learning, and differential evolution algorithms. Waste Management, 209, 115210.", file: "2.2.2.pdf" },
      { id: "2.2.3", name: "Luesak et al. (2026) Machine learning-based prediction of friction stir welding parameters for optimized tensile strength in aluminum alloys. International Journal on Interactive Design and Manufacturing (IJIDeM), 20, 1963-1995.", file: "2.2.3.pdf" },
      { id: "2.2.4", name: "Sriputhorn et al. (2025) Advancing smart aquaculture: Cost-efficient strategies for climbing perch cultivation using AI-based models. Smart Agricultural Technology, 12, 101108.", file: "2.2.4.pdf" },
    ],
  },
  {
    category: "3. ด้านการบริการทางวิชาการแก่สังคม",
    items: [
      { id: "3.1.1", name: "โครงการอบรมด้านการประยุกต์ใช้ AI และ Big Data ในการจัดการเรียนรู้ 24 มกราคม 2569 มหาวิทยาลัยอุบลราชธานี (6 ชม.)", file: "3.1.2.pdf" },
      { id: "3.1.2", name: "โครงการค่ายเสริมสร้างสมรรถนะผู้เรียนด้านวิทยาศาสตร์ เทคโนโลยี วิศวกรรม คณิตศาสตร์ ปัญญาประดิษฐ์และหุ่นยนต์ AI & Robotics STEM Camp 27-28 มกราคม 2569 (3 ชม.)", file: "3.1.1.pdf" },
      { id: "3.1.3", name: "โครงการฝึกอบรมพัฒนาครูและบุคลากรทางการศึกษา เรื่องปลุกพลังสร้างสรรค์สื่อการสอนผ่าน AI และ Canva 30-31 มีนาคม 2569 (6 ชม.)", file: "3.1.3.pdf" },
      { id: "3.2", name: "กรรมการสอบเค้าโครงวิทยานิพนธ์ของนิสิตระดับปริญญาเอก (ปร.ด.) สาขาวิชาเทคโนโลยีสารสนเทศ จำนวน 4 ราย", file: "3.2.pdf" },
      { id: "3.3.1", name: "อนุมัติโครงการบริการวิชาการ", file: "3.3.1.pdf" },
      { id: "3.3.2", name: "แต่งตั้งคณะกรรมการโครงการฟาร์มเรียนรู้คู่ชุมชน", file: "3.3.2.pdf" },
    ],
  },
  {
    category: "4. ด้านการทำนุบำรุงศิลปวัฒนธรรม",
    items: [
      { id: "4.1", name: "ภาพประกอบการเข้าร่วมกิจกรรม 2 กิจกรรม งานกีฬาและกีฬาปีใหม่ / งานวิ่ง KSU RUN 2026", file: "4.1.pdf" },
    ],
  },
  {
    category: "5. ด้านบริหารจัดการ",
    items: [
      { id: "5.1", name: "คำสั่งที่ 191-2569 แต่งตั้งคณะกรรมการประเมินมาตรฐานวิชาชีพ ระดับประกาศนียบัตรวิชาชีพชั้นสูง ประจำปีการศึกษา 2568 หมวดวิชาศึกษาทั่วไป", file: "5.1.pdf" },
      { id: "5.2.1", name: "คำสั่งที่ 64-2568 แต่งตั้งคณะกรรมการโอนผลการเรียน การเทียบโอนผลการเรียน และการเทียบโอนความรู้ ทักษะและประสบการณ์ หมวดวิชาศึกษาทั่วไป", file: "5.2.1.pdf" },
      { id: "5.2.2", name: "คำสั่งที่ 65-2568 แต่งตั้งคณะกรรมการโอนผลการเรียน การเทียบโอนผลการเรียน และการเทียบโอนความรู้ ทักษะและประสบการณ์", file: "5.2.2.pdf" },
      { id: "5.2.3", name: "คำสั่งที่ 1-2569 แต่งตั้งคณะกรรมการดำเนินการจัดการสอบกลางภาค ประจำภาคเรียนที่ 2-2568", file: "5.2.3.pdf" },
    ],
  },
];

export default function TableOfContents() {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden">
      <div className="px-6 py-4" style={{ background: "linear-gradient(135deg, #3D52A0 0%, #7091E6 100%)" }}>
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          สารบัญเอกสารประกอบการประเมิน
        </h2>
      </div>
      <div className="p-6 space-y-6">
        {documents.map((group, gi) => (
          <div key={gi}>
            <h3 className="font-semibold text-lg mb-3 border-b pb-2" style={{ color: '#3D52A0', borderColor: '#dde4f5' }}>
              {group.category}
            </h3>
            <div className="space-y-2">
              {group.items.map((item) => (
                <a
                  key={item.id}
                  href={`/reference/${encodeURIComponent(item.file)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors group border border-transparent" style={{ }} onMouseEnter={e => { e.currentTarget.style.background='#eef1fb'; e.currentTarget.style.borderColor='#b8c5ef'; }} onMouseLeave={e => { e.currentTarget.style.background=''; e.currentTarget.style.borderColor='transparent'; }}
                >
                  <span className="flex-shrink-0 w-14 text-center text-xs font-mono px-2 py-1 rounded" style={{ background: '#eef1fb', color: '#3D52A0' }}>
                    {item.id}
                  </span>
                  <span className="text-slate-700 text-sm flex-1">
                    {item.name}
                  </span>
                  <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#7091E6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
