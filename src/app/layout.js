import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./style";
import {Footer, Navbar } from "../Components"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blu|BCA Digital",
  description: "Mulai Langkahmu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      
  
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
    
    
        {children}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
        </body>
    </html>
  );
}
