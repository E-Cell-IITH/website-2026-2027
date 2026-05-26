"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

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
    { label: "Events", target: "events", isPage: false },
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
}: {
  children: React.ReactNode;
  setPosition: any;
  onClick: () => void;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      onClick={onClick}
      className="relative z-10 block cursor-pointer px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white mix-blend-difference md:px-4 md:py-1.5 md:text-xs select-none"
    >
      {children}
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
