import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "今晚喝哪｜台灣酒吧探索指南",
  description: "依照地區、心情、預算與氛圍，找到今晚最適合你的台灣酒吧。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
