'use client';

import "./globals.css";
// test comment
// import fonts from next/font/google to avoid making requests from google
import { Architects_Daughter } from 'next/font/google';
import { Josefin_Sans } from "next/font/google";
import Header from "@/app/ui/header/Header.jsx";
import Footer from "@/app/ui/Footer/Footer.jsx";

// store fonts in a variable and specify parameters
const architectsDaughter = Architects_Daughter({
  subsets: ['latin'],
  preload: true,
  weight: ['400'],
});

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  preload: true,
  weight: ['400'],
})
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <style jsx global>
        {
          `
                :root {
                    --title-text: ${architectsDaughter.style.fontFamily};
                    --body-text: ${josefinSans.style.fontFamily};
                }
                `
        }
      </style>
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
