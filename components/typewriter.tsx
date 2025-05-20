"use client";
import { motion } from "framer-motion";
import useTypewriter from "@/hooks/use-typewriter";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

const TypewriterEffect = ({ text }: { text: string }) => {
  const { displayedText } = useTypewriter({
    text,
    speed: 100,
  });

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-xtreme-orange text-xtreme-extra-small text-end md:text-xtreme-small"
        style={jetbrainsMono.style}
      >
        {displayedText}
      </motion.div>
    </div>
  );
};

export default TypewriterEffect;
