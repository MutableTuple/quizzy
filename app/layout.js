import { Inter, Poppins } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

export const metadata = {
  title: "Quizzy | Sharpen your brain",
  description:
    "Quizzy is your go to solution for sharpening your brain in this digital era.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3X82FJRR76"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3X82FJRR76');
            `,
          }}
        />
      </Head>
      <body className={poppins.className}>
        <main className="max-w-7xl mx-auto w-full mt-8">{children}</main>
      </body>
    </html>
  );
}
