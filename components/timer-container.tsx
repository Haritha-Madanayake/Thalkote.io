"use client";

import type { ReactNode } from "react";

// Framer motion
import {motion} from "framer-motion";


export default function TimerContainer({children}: {children: ReactNode}) {
  return (
	<motion.section
        id="countdown"
        className="h-screen flex flex-col gap-10 justify-center items-center bg-orange-fireball mt-[700px]"
        animate={{
          backgroundImage: [
            'radial-gradient(ellipse, #291c12 0%, rgba(0, 0, 0, 1) 72%)',
            'radial-gradient(ellipse, #592905 0%, rgba(0,0,0,1) 72%)'
          ],
        }}
        transition={{
          duration:2,
          type: "tween",
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse"
        }}
  >
		{children}
	  </motion.section>
  )
}
