"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="w-full bg-neutral-900 dark:bg-neutral-100 p-6 flex justify-between items-center">
      {/* Logo */}
      <div className="flex justify-center flex-grow">
        {!mounted ? (
          <div style={{ width: 120, height: 36 }} />
        ) : (
          <img
            src={resolvedTheme === "dark" ? "/footer_logoMAA_dark.png" : "/footer_logoMAA_light.png"}
            alt="Logo MMA"
            width={120}
            height={36}
          />
        )}
      </div>

      {/* Social Media Buttons */}
      <div className="flex items-center space-x-4">
        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/your-profile" // Replace with your LinkedIn profile link
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition duration-200"
        >
          {/* LinkedIn SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-white"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/1234567890" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-green-500 text-white p-3 rounded-full shadow-md hover:bg-green-600 transition duration-200"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
}