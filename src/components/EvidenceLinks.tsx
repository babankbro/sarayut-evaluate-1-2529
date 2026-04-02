"use client";

const FILE_MAP: Record<string, string> = {
  "0.1": "0.1.pdf",
  "0.2.1": "0.2.1.pdf",
  "0.2.2": "0.2.2.pdf",
  "0.3": "0.3.pdf",
  "1.1": "1.1.pdf",
  "1.2.1": "1.2.1.pdf",
  "1.2.2": "1.2.2.pdf",
  "1.3": "1.3.pdf",
  "1.4.1": "1.4.1.pdf",
  "1.4.2": "1.4.2.pdf",
  "1.4.3": "1.4.3.pdf",
  "1.4.4": "https://en-001-002-computer-programming.vercel.app",
  "1.5": "1.5.pdf",
  "2.1.1": "2.1.2.pdf",
  "2.1.2": "2.1.2.pdf",
  "2.2.1": "2.2.1a.pdf",
  "2.2.2": "2.2.2.pdf",
  "2.2.3": "2.2.3.pdf",
  "2.2.4": "2.2.4.pdf",
  "3.1.1": "3.1.1.pdf",
  "3.1.2": "3.1.2.pdf",
  "3.1.3": "3.1.3.pdf",
  "3.2": "3.2.pdf",
  "3.3.1": "3.3.1.pdf",
  "3.3.2": "3.3.2.pdf",
  "4.1": "4.1.pdf",
  "5.1": "5.1.pdf",
  "5.2.1": "5.2.1.pdf",
  "5.2.2": "5.2.2.pdf",
  "5.2.3": "5.2.3.pdf",
};

function resolveHref(id: string): string | null {
  const val = FILE_MAP[id.trim()];
  if (!val) return null;
  if (val.startsWith("http")) return val;
  return `/reference/${encodeURIComponent(val)}`;
}

function parseIds(raw: string): string[] {
  const parts: string[] = [];
  const segments = raw.split(",").map((s) => s.trim());
  for (const seg of segments) {
    const rangeMatch = seg.match(/^(\d+\.\d+(?:\.\d+)?)\s*[-–]\s*(\d+\.\d+(?:\.\d+)?)$/);
    if (rangeMatch) {
      const [, start, end] = rangeMatch;
      const prefix = start.split(".").slice(0, -1).join(".");
      const startLast = parseInt(start.split(".").at(-1)!);
      const endLast = parseInt(end.split(".").at(-1)!);
      for (let i = startLast; i <= endLast; i++) {
        parts.push(prefix ? `${prefix}.${i}` : `${i}`);
      }
    } else if (seg) {
      parts.push(seg);
    }
  }
  return parts;
}

const P = { dark: "#3D52A0", mid: "#7091E6", light: "#eef1fb", border: "#dde4f5", accent: "#F4A261" };

export function EvidenceLinks({ raw }: { raw: string }) {
  if (!raw) return null;
  const textBefore = raw.replace(/เอกสารหมายเลข\s*[\d\.\s,\-–]+/g, "").trim();
  const idMatches = raw.match(/เอกสารหมายเลข\s*([\d\.\s,\-–]+)/g) || [];
  const allIds: string[] = [];
  for (const m of idMatches) {
    const idPart = m.replace("เอกสารหมายเลข", "").trim();
    allIds.push(...parseIds(idPart));
  }

  if (allIds.length === 0) return <span className="text-xs text-slate-400 italic">{raw}</span>;

  return (
    <div className="flex flex-wrap items-center gap-1.5 mt-1">
      {textBefore && <span className="text-xs text-slate-400 italic mr-1">{textBefore}</span>}
      <span className="text-xs text-slate-400">เอกสาร:</span>
      {allIds.map((id) => {
        const href = resolveHref(id);
        const isExternal = href?.startsWith("http");
        if (!href) {
          return (
            <span key={id} className="text-xs px-2 py-0.5 rounded" style={{ background: P.light, color: P.dark }}>
              {id}
            </span>
          );
        }
        return (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded transition-colors"
            style={{ background: isExternal ? P.accent + "22" : P.light, color: isExternal ? P.accent : P.dark, border: `1px solid ${isExternal ? P.accent + "55" : P.border}` }}
            title={`เปิดเอกสารหมายเลข ${id}`}
          >
            {id}
            <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        );
      })}
    </div>
  );
}
