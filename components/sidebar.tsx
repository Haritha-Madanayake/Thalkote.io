import { motion } from "framer-motion";
import Link from "next/link";

export default function Sidebar({ open }: { open: boolean }) {
  return (
    <motion.aside
      initial={{ width: 0 }}
      animate={{ width: open ? "100%" : 0 }}
      transition={{ duration: 0.5 }}
      className="lg:invisible visible absolute flex flex-col h-screen top-0 left-0 z-20 bg-xtreme-black pt-10"
    >
      <motion.ul
        id="links"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: open ? 1 : 0, y: open ? 0 : -20 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center font-bold sm:text-xtreme-large text-xtreme-medium gap-4"
        style={{ visibility: open ? "visible" : "hidden" }}
      >
        <li>
          <Link href="/" className="hover:text-xtreme-orange">
            Home
          </Link>
        </li>
        <li>
          <a href="#about-section" className="hover:text-xtreme-orange">
            About
          </a>
        </li>
        <li>
          <a href="#contact-section" className="hover:text-xtreme-orange">
            Contact
          </a>
        </li>
        <li>
          <a href="#event-plan" className="hover:text-xtreme-orange">
            Event plan
          </a>
        </li>
      </motion.ul>
    </motion.aside>
  );
}
