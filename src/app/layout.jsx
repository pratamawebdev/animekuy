import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Fragments/Global/Navbar";
import HeroLayouts from "@/components/Layouts/Home/HeroLayouts";
import Footer from "@/components/Fragments/Global/Footer";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "AnimeKuy",
  description:
    "Sail into the World of Anime Wonders: Where Dreams Unfold, Adventures Begin!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <main className="max-w-7xl mx-auto bg-[#0F1117]">
          <Navbar />
          <HeroLayouts />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
