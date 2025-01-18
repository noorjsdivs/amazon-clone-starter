"use client";
import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import SideNavbar from "./SideNavbar";

const HeaderBottom = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="bg-amazonLight text-white/80">
      <div className="flex items-center space-x-3 py-1 pl-6 text-sm">
        <button className="link flex items-center" onClick={toggleSidebar}>
          <Menu className="text-xl mr-1" />
          All
        </button>

        <p className="link">Today&apos;s Deals</p>
        <p className="link">Customer Service</p>
        <p className="link hidden lg:inline-flex">Registry</p>
        <p className="link hidden lg:inline-flex">Gift Cards</p>
        <p className="link hidden lg:inline-flex">Sell</p>
        <Link href="/products" className="link">
          All Products
        </Link>
      </div>
      <SideNavbar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </div>
  );
};

export default HeaderBottom;
