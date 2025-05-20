"use client";

import { Space_Grotesk } from "next/font/google";
import TimerDigit from "@/components/timer-digit";
import Ratio from "@/components/ratio";
import useTimeDiff from "@/hooks/use-time-diff";

const spaceGrotsek = Space_Grotesk({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Timer({ startDate }: { startDate: Date }) {
  const timeLeft = useTimeDiff(startDate);
  return (
    <time
      id="countdown-timer"
      className="flex flex-col md:flex-row items-center gap-8 xl:gap-16 mb-[100px]"
      style={spaceGrotsek.style}
    >
      <TimerDigit label="Days" value={timeLeft.days.toString().padStart(2, "0")} />
      <Ratio />
      <TimerDigit label="Hours" value={timeLeft.hours.toString().padStart(2, "0")} />
      <Ratio />
      <TimerDigit label="Minutes" value={timeLeft.minutes.toString().padStart(2, "0")} />
      <Ratio />
      <TimerDigit label="Seconds" value={timeLeft.seconds.toString().padStart(2, "0")} />
    </time>
  );
}
