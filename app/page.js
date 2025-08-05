"use client";

import { useEffect, useState } from "react";

export default function UnderConstruction() {
  
  const [isLoading, setIsLoading] = useState(true);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  
  // Preload the background image
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setBackgroundLoaded(true);
    };
    img.src = '/under-construction-bg/pnoi_background.png';
  }, []);
  
  // Simple loading timeout - show content after background is loaded and delay
  useEffect(() => {
    if (backgroundLoaded) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500); // Shorter delay since we've already waited for background

      return () => clearTimeout(timer);
    }
  }, [backgroundLoaded]);

  return (
    <>
      {/* Main content - always rendered but hidden during loading */}
      <div 
        className={`relative flex items-center justify-center overflow-hidden transition-opacity duration-700 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ 
          backgroundColor: "#f5f5f5", // Fallback color
          backgroundImage: backgroundLoaded ? "url('/under-construction-bg/pnoi_background.png')" : "none",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          width: "100vw",
          height: "100vh",
          minHeight: "100vh"
        }}
      >
        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center max-w-2xl px-4 mx-auto text-center">
          {/* Logo */}
          <div className="mb-5">
            <img
              src="/logos/Logo.png"
              alt="Πνοή logo"
              className="w-auto mx-auto h-42 drop-shadow-lg"
            />
          </div>
          
          {/* Main Text Content */}
          <div className="p-6 border border-transparent rounded-lg shadow-lg bg-white/20 backdrop-blur-sm">
            <p className="mb-6 text-lg font-medium leading-relaxed text-[#373531] md:text-xl">
              Η σελίδα μας βρίσκεται υπό κατασκευή. Αναβαθμίζουμε τις υπηρεσίες μας και το νέο μας eshop θα λειτουργεί σύντομα. Μπορείτε να μας βρείτε στα social εδώ στο φυσικό μας κατάστημα. Ευχαριστούμε για την κατανόηση!
            </p>
            
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-4">
              <a 
                href="https://www.facebook.com/pnoikosmima" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-opacity duration-300 hover:opacity-75"
              >
                <img 
                  src="/social icons/icons8-facebook-48.png" 
                  alt="Facebook"
                  className="w-8 h-8"
                />
              </a>
              
              <a 
                href="https://www.instagram.com/pnoi_kosmima" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-opacity duration-300 hover:opacity-75"
              >
                <img 
                  src="/social icons/icons8-instagram-48.png" 
                  alt="Instagram"
                  className="w-8 h-8"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Loading screen overlay */}
      {isLoading && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#18181b] transition-opacity duration-700"
          style={{ 
            width: "100vw",
            height: "100vh"
          }}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="mb-2">
              <img
                src="/logos/logo.webp"
                alt="Πνοή logo"
                className="w-auto h-24 opacity-75"
              />
            </div>
            <svg className="animate-spin h-12 w-12 text-[#bfc1c6]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            <span className="text-[#bfc1c6] text-lg font-medium tracking-wide">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
}
