import TimerContainer from "@/components/timer-container";
import Timer from "@/components/timer";

export default function Countdown() {
  return (
    <TimerContainer>
      <h1 className="text-xtreme-small md:text-xtreme-medium font-semibold">Registrations <span className="text-xtreme-orange">opening</span> in</h1>
      <Timer startDate={new Date(2024, 8, 1)} />
    </TimerContainer>
  );
}