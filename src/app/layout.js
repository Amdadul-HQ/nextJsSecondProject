import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:"Next Hero | Home",
    template:"%s | Next Hero"
  },
  description: "Next Hero Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <main className="min-h-[calc(100vh-128px)]">
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  );
}
