import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shiven Paudyal (Neo) — ML Engineer & Data Scientist",
  description:
    "Portfolio of Shiven Paudyal (Neo), an ML Engineer and Data Scientist specializing in computer vision, MLOps, and AI-powered applications. AWS Certified. MS CS @ CSULB.",
  keywords: [
    "Machine Learning Engineer",
    "Data Scientist",
    "AI Builder",
    "MLOps",
    "Computer Vision",
    "AWS",
    "Next.js",
    "Python",
    "Shiven Paudyal",
    "Neo",
  ],
  authors: [{ name: "Shiven Paudyal" }],
  openGraph: {
    title: "Shiven Paudyal (Neo) — ML Engineer & Data Scientist",
    description:
      "Portfolio of Shiven Paudyal (Neo) — ML Engineer specializing in computer vision, MLOps, and AI applications.",
    type: "website",
    url: "https://shivenpaudyal.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiven Paudyal (Neo) — ML Engineer",
    description: "ML Engineer & Data Scientist | AWS Certified | CSULB MS CS",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "#1a1a2e",
                color: "#f0f0ff",
                border: "1px solid rgba(98,70,255,0.4)",
                borderRadius: "12px",
                fontSize: "14px",
              },
              success: {
                iconTheme: { primary: "#22d3ee", secondary: "#0a0a0f" },
              },
              error: {
                iconTheme: { primary: "#f87171", secondary: "#0a0a0f" },
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
