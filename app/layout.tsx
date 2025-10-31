import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Twix ? Minimal Twitter Clone",
  description: "A minimal Twitter-like experience built with Next.js and shadcn UI",
  metadataBase: new URL("https://agentic-fe1f1bdd.vercel.app")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <div className="container max-w-2xl mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
