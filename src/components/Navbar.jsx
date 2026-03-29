import React from "react";
import "remixicon/fonts/remixicon.css";
const Navbar = () => {
  return (
    // The navbar stays pinned because it fills the viewport and does not scroll.
    <div className="w-full shrink-0 bg-[#111111] text-white border border-[#1e1e1e] flex flex-col md:h-screen md:w-[200px]">
      <div className="px-4 py-4 w-full border border-[#1e1e1e] flex justify-between items-center md:py-6">
        <h1 className="text-xl font-bold">.edsy</h1>
        <i className="ri-menu-2-line md:hidden"></i>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3 px-4 py-4 text-sm font-thin sm:justify-start md:flex-1 md:flex-col md:items-start md:justify-start md:gap-6 md:py-6 md:text-xl">
        <h1>Dashboard</h1>
        <h1>Planning</h1>
        <h1>Course</h1>
        <h1>Analystics</h1>
      </div>
      <div className="hidden h-[65px] p-5 border border-[#1e1e1e] text-xs font-bold text-[#888888] md:flex justify-center items-center">
        <h1>Arun Vats</h1>
      </div>
    </div>
  );
};

export default Navbar;
