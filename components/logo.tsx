import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Logo() {
  return (
    <div id="logo" className="flex flex-col items-end">
      <h1
        className="text-[40px] sm:text-[60px] md:text-[80px] font-bold relative flex flex-row items-center shadow-xtreme-orange"
        style={montserrat.style}
      >
        <span>J&rsquo;PURA</span>
        <span className="text-[70px] sm:text-[130px] md:text-[150px]">X</span>TREME
      </h1>
      <div className="flex items-center justify-center mt-2">
        <div className="bg-gray-400 w-[380px] lg:w-[500px] h-[2px]"></div>
      </div>
      <h2 className="text-gray-400 text-[15px] md:text-[20px] sm:text-lg tracking-xtreme-super mt-2 text-right" style={montserrat.style}>HACKATHON</h2>
      <h2 className="text-gray-400 mt-1 tracking-xtreme-super">1.0</h2>
    </div>
  );
}
