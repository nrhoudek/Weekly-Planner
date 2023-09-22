import "./global/globals.css";
import type { Metadata } from "next";
import { Rubik, Open_Sans } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700", "900"],
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Weekly Planner",
  description: "Help organize yourself for the week",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
