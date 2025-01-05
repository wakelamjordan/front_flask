import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import DataContext from "./cv_en/_DataContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Front exo flask",
  description: "Front de l'exercice flask",
};

export default function RootLayout({ children }) {
  let links_list = [
    { href: "/", label: "Home" },
    { href: "/exercices", label: "Exercices" },
    { href: "/contact", label: "Contact" },
    { href: "/cv", label: "Cv" },
    { href: "/cv_en", label: "Cv_en" },
    { href: "/doc", label: "Doc" },
  ];

  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar links_list={links_list} />
        <div className="grid grid-rows-[0px_1fr_0px] min-h-screen font-[family-name:var(--font-geist-sans)]">
          <main className="row-start-2 container mx-auto p-4 flex flex-col gap-5">
            {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"> */}
            {/* <div className="w-full max-w-6xl mx-auto py-12 px-6 bg-base-100 shadow-lg rounded-lg space-y-12"> */}
            {children}
            {/* </div> */}
          </main>
        </div>
        <Footer links_list={links_list} />
      </body>
    </html>
  );
}
