"use client"; // Ensure it's a Client Component

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function useScrollToTop() {
  const pathname = usePathname(); // Detect route changes

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]); // Runs when the pathname changes
}
