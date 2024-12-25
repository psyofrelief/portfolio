import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Menu from "@/components/menu/menu-overlay";
import Navbar from "@/components/navbar";
import { AppProvider } from "@/context/app-context";
import { FadeUp } from "@/components/animation/fade-up";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FARIEDIDRIS",
  description:
    "Look through my creative personal portfolio, which includes effective solutions, cutting-edge technologies, and imaginative designs that are designed to provide outstanding outcomes.",

  creator: "Faried Idris",
  authors: {
    name: "Faried Idris",
    url: "https://github.com/psyofrelief",
  },
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} relative uppercase  antialiased min-h-screen flex flex-col px-sm sm:px-xl w-full max-w-[1440px] mx-auto`}
      >
        <AppProvider>
          <Navbar />
          <Menu />
          {children}
          <FadeUp>
            <CallToAction />
          </FadeUp>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
