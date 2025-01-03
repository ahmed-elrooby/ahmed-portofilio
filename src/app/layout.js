import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import ThemProviders from "@/Providers/ThemProviders";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const inter = Montserrat_Alternates({ subsets: ["latin"], weight: ["400", "700"] });


export const metadata = {
  title: "Ahmed EL Rooby",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}  bg-[#F1F5F9] dark:bg-[#171717]`}
      >
        <ThemProviders>
          <Header />
          {children}
          <Footer />
        </ThemProviders>
<Toaster />
      </body>
    </html>
  );
}
