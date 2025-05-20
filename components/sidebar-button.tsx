import React from 'react'
import {motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function SidebarButton({open, toggle} : {open: boolean, toggle: () => void}) {
  return (
	<motion.button
	id="sidebar-toggle-button"
	className="lg:invisible visible fixed top-5 left-5 z-30"
	onClick={toggle}
	initial={{ scale: 1 }}
	whileTap={{ scale: 0.9 }}
	whileHover={{ scale: 1.1 }}
	transition={{ type: "spring", stiffness: 300 }}
  >
	{open ? (
	  <motion.div
		initial={{ rotate: 0 }}
		animate={{ rotate: 180 }}
		transition={{ duration: 0.5 }}
	  >
		<FontAwesomeIcon
		  icon={faX}
		  className="text-xtreme-orange bg-xtreme-white p-4 sm:p-7 w-6 h-6 sm:w-10 sm:h-10 drop-shadow-md rounded-full"
		/>
	  </motion.div>
	) : (
	  <motion.div
		initial={{ rotate: 0 }}
		animate={{ rotate: 0 }}
		transition={{ duration: 0.5 }}
	  >
		<FontAwesomeIcon
		  icon={faBars}
		  className="text-xtreme-orange bg-xtreme-white p-4 sm:p-7 w-6 h-6 sm:w-10 sm:h-10 drop-shadow-md rounded-full"
		/>
	  </motion.div>
	)}
  </motion.button>
  )
}
