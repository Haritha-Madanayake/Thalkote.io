"use client";
import useOpen from "@/hooks/use-open";
import SidebarButton from "./sidebar-button";
import Sidebar from "./sidebar";
import Links from "./links";

export default function Navbar() {
  const { open, toggle } = useOpen(false);
  return (
    <nav id="navbar" className="fixed w-full top-0 left-0 ml-6 flex flex-row items-center px-2 py-7 z-20 backdrop-blur-sm">
      <Links />
    </nav> 
  );
}
