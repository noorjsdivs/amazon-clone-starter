"use client";

import React, { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { motion, AnimatePresence } from "motion/react";
import { LogOut, X } from "lucide-react";
import { sidebarItems } from "@/constants/data";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

interface SideNavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideNavbar: React.FC<SideNavbarProps> = ({ isOpen, onClose }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [openDropdowns, setOpenDropdowns] = useState<{
    [key: string]: boolean;
  }>({});
  const { data: session } = useSession();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const toggleDropdown = (sectionTitle: string, itemTitle: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [`${sectionTitle}-${itemTitle}`]: !prev[`${sectionTitle}-${itemTitle}`],
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "tween", duration: 0.3 }}
          className="bg-amazonLight/20 w-full fixed top-0 left-0 h-full text-black z-50 overflow-y-auto"
        >
          <motion.div
            ref={sidebarRef}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-80 bg-white text-black z-50 overflow-y-auto"
          >
            <div className="flex justify-between items-center p-4 bg-amazonLight text-white">
              {session?.user ? (
                <div className="flex items-center gap-2">
                  <Image
                    src={session?.user?.image as string}
                    alt="userImage"
                    width={100}
                    height={100}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-base font-medium tracking-wide line-clamp-1">
                      {session?.user?.name}
                    </p>
                    <button
                      onClick={() => signOut()}
                      className="text-sm flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      <p>Logout</p>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-end gap-1">
                  <h2 className="text-2xl font-bold">Hello, </h2>
                  <button
                    onClick={() => signIn()}
                    className="text-2xl font-bold hover:text-amazonOrangeDark hover:underline hoverEffect"
                  >
                    Sign in
                  </button>
                </div>
              )}
              <button
                onClick={onClose}
                className="text-2xl"
                aria-label="Close menu"
              >
                <X />
              </button>
            </div>
            <div>
              {sidebarItems.map((section, sectionIndex) => (
                <div key={sectionIndex} className="border-b border-gray-200">
                  <h3 className="font-bold p-4">{section.title}</h3>
                  <ul>
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="py-1">
                        <button
                          onClick={() => toggleDropdown(section.title, item)}
                          className="flex justify-between items-center w-full px-4 py-2 text-sm hover:bg-amazonLight/10"
                          aria-expanded={
                            openDropdowns[`${section.title}-${item}`]
                          }
                        >
                          <span>{item}</span>
                          {openDropdowns[`${section.title}-${item}`] ? (
                            <MdKeyboardArrowDown className="text-gray-500" />
                          ) : (
                            <MdKeyboardArrowRight className="text-gray-500" />
                          )}
                        </button>
                        <AnimatePresence>
                          {openDropdowns[`${section.title}-${item}`] && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="bg-gray-50 overflow-hidden"
                            >
                              {section.subItems[itemIndex].map(
                                (subItem, subItemIndex) => (
                                  <li
                                    key={subItemIndex}
                                    className="px-8 py-1 hover:bg-amazonLight/10"
                                  >
                                    <a href="#" className="text-sm">
                                      {subItem}
                                    </a>
                                  </li>
                                )
                              )}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* <button onClick={onClose} className="absolute top-0 left-40">
              <X />
            </button> */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideNavbar;
