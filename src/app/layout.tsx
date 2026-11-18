import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Milán Maroevich — Software Developer",
  description:
    "Junior Backend & Full-Stack Developer portfolio. Projects, skills, and contact.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  );
}
