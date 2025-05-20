"use client";
import type { ReactNode } from "react";
import Image from "next/image";
import upperWave from "@/public/upper.svg";
import lowerWave from "@/public/lower.svg";
import { useState, useEffect } from "react";

export default function WavyBlock({ children }: { children: ReactNode }) {
  const [screenWidth, setScreenWidth] = useState<number | null>();

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  return (
    <div id="wavy-block" className="w-full">
      <Image
        src={upperWave}
        width={screenWidth ? screenWidth : 4000}
        height={10}
        alt="Upper part of the wave"
        className="overflow-hidden"
      />
      <div className="relative bg-xtreme-silver">{children}</div>
      <Image
        src={lowerWave}
        width={screenWidth ? screenWidth : 4000}
        height={10}
        alt="Upper part of the wave"
        className="overflow-hidden"
      />
    </div>
  );
}
