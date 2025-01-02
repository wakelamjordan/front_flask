import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

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
    { href: "/cv", label: "Cv" },
    { href: "/doc", label: "Doc" },
  ];

  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar links_list={links_list} />
        <div className="grid grid-rows-[20px_1fr_20px] min-h-screen sm:px-20 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <div className="w-full max-w-6xl mx-auto py-12 px-6 bg-base-100 shadow-lg rounded-lg space-y-12">
              {children}
            </div>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
