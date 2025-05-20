"use client";
import { useState, useCallback, useEffect } from "react";
export default function useTypewriter({
  text,
  speed,
}: {
  text: string;
  speed: number;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  const setNewText = useCallback((text: string) => {
    setDisplayedText(text);
    setIndex(0);
  }, []);

  useEffect(() => {
      if (index < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText + text[index]);
          setIndex(index + 1);
        }, speed); // Adjust typing speed here
        return () => clearTimeout(timeout);
      }
  },[displayedText, index, text]);

  return {
	displayedText,
	setNewText
  }
}
