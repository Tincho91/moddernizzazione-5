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
            src={resolvedTheme === "dark" ? "/logoMAA_dark.png" : "/logoMAA_light.png"}
            alt="Logo MMA"
            width={120}
            height={36}
          />
        )}
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/1234567890" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-green-500 text-white p-3 rounded-full shadow-md hover:bg-green-600 transition duration-200"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </footer>
  );
}