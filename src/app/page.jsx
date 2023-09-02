"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function Home() {
  useEffect(() => {
    redirect("/mobile");
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-3">
      <div className="spinner-dot-pulse">
        <div className="spinner-pulse-dot"></div>
      </div>
      <span className="font-bold text-xl">Loading App...</span>
    </div>
  );
}
