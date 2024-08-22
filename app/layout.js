import { Inter, Poppins } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

export const metadata = {
  manifest: "/manifest.json",
  title: "Quizzy | Sharpen your brain",
  description:
    "Quizzy is your go to solution for sharpening your brain in this digital era.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="max-w-7xl mx-auto w-full mt-8">{children}</main>
        <GoogleAnalytics gaId="G-QKDYP0VZC5" />
      </body>
    </html>
  );
}
