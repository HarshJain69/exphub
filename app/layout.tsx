import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Full Stack Experiment Hub - Harsh Partap Jain",
    default: "Full Stack Experiment Hub - Harsh Partap Jain",
  },
  description: "A production-ready academic platform containing 10 isolated experiments. Created by Harsh Partap Jain (UID: 23BAI70194)",
  authors: [{ name: "Harsh Partap Jain", url: "" }],
  creator: "Harsh Partap Jain",
  keywords: ["nextjs", "typescript", "experiments", "academic", "full stack"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          <Header />
          <main className="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
