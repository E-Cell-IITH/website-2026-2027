"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
interface SubMenuItem {
  label: string;
  target: string;
  isPage: boolean;
}

interface NavItem {
  label: string;
  target: string;
  isPage: boolean;
  menuItems?: SubMenuItem[];
}

function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { label: "Home", target: "home", isPage: false },
    { label: "About", target: "about", isPage: false },
    { label: "Events", target: "events", isPage: false,
      menuItems: [
        { label: "Founders' Hive", target: "foundersHive", isPage: true },
        // { label: "E-Summit", target: "esummit", isPage: true },
      ]
     },
    { label: "Team", target: "team", isPage: true },
    { label: "Contact", target: "contact", isPage: false },
  ];

  const handleNavClick = (target: string, isPage: boolean) => {
    if (isPage) {
      if (pathname === `/${target}`) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push(`/${target}`);
      }
    } else {
      if (pathname === "/") {
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push(`/#${target}`);
      }
    }
  };

  return (
    <ul
      className="relative mx-auto flex w-fit rounded-full border border-white/10 bg-black/60 backdrop-blur-md p-1 shadow-2xl"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      {navItems.map((item) => (
        <Tab
          key={item.label}
          setPosition={setPosition}
          onClick={() => handleNavClick(item.target, item.isPage)}
          menuItems={item.menuItems}
          handleNavClick={handleNavClick}
        >
          {item.label}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({
  children,
  setPosition,
  onClick,
  menuItems,
  handleNavClick,
}: {
  children: React.ReactNode;
  setPosition: any;
  onClick: () => void;
  menuItems?: { label: string; target: string; isPage: boolean }[];
  handleNavClick: (target: string, isPage: boolean) => void;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        setIsDropdownOpen(true);
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      onMouseLeave={() => setIsDropdownOpen(false)}
      onClick={onClick}
      className="relative z-10 block cursor-pointer px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white mix-blend-difference md:px-4 md:py-1.5 md:text-xs select-none"
    >
      {children}
      {menuItems && isDropdownOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-44 bg-black/90 border border-white/10 rounded-xl p-1.5 shadow-xl backdrop-blur-md flex flex-col text-left isolation mix-blend-normal before:absolute before:content-[''] before:w-full before:h-4 before:-top-4 before:left-0">
          {menuItems.map((subItem) => (
            <button
              key={subItem.label}
              onClick={(e) => {
                e.stopPropagation(); // Prevents clicking a menu item from triggering the parent main item click
                handleNavClick(subItem.target, subItem.isPage);
                setIsDropdownOpen(false);
              }}
              className="w-full px-3 py-2 text-[11px] normal-case tracking-normal font-normal text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-150 text-left"
            >
              {subItem.label}
            </button>
          ))}
        </div>
      )}
    </li>
  );
};

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-6 rounded-full bg-white md:h-7 top-1"
    />
  );
};

export default NavHeader;
