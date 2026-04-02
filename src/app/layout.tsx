import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ผลการประเมิน ผศ.ดร. สรายุทธ กรวิรัตน์",
  description: "แบบสรุปคะแนนประเมินการปฏิบัติราชการ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${prompt.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[var(--font-prompt)]">
        {children}
      </body>
    </html>
  );
}
