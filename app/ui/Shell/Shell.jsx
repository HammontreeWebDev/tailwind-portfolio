'use client';

import Header from "@/app/ui/header/Header.jsx";
import Footer from "@/app/ui/Footer/Footer.jsx";
import AmbientBackground from "@/app/ui/common/AmbientBackground/AmbientBackground.jsx";

export default function Shell({ children }) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <AmbientBackground />
      <Header />
      <main id="main-content" className="relative z-10" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  );
}
