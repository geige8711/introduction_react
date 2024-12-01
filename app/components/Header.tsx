"use client";

import MenuItem from "./MenuItem";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openMenu = () => {
    setIsOpen((o) => !o);
  };
  return (
    <>
      <div className="hidden lg:flex w-full h-10  flex-row justify-end">
        <div className="w-2/3 h-full bg-orange-600 rounded-lg grid grid-cols-4 place-items-center">
          <MenuItem title="About" linkTo="/" isActive={pathname === "/"} />
          <MenuItem
            title="Resume"
            linkTo="/resume"
            isActive={pathname === "/resume"}
          />
          <MenuItem
            title="Portfolio"
            linkTo="/portfolio"
            isActive={pathname === "/portfolio"}
          />
          <MenuItem
            title="Contact"
            linkTo="/contact"
            isActive={pathname === "/contact"}
          />
        </div>
      </div>
      <div className="h-20 -z-10 lg:hidden"></div>
      <div className="w-full flex flex-col lg:hidden bg-orange-600 fixed top-0 z-50">
        <div className="h-20 border flex flex-row justify-end items-center">
          <div
            className="w-20 h-20 flex flex-row items-center justify-center rounded-lg"
            onClick={openMenu}
          >
            <HiBars3 size={40} />
          </div>
        </div>
        {isOpen && (
          <div className="w-full flex flex-col justify-center items-center">
            <MenuItem
              className="h-14 flex flex-row items-center justify-center"
              title="About"
              linkTo="/"
              isActive={pathname === "/"}
            />
            <MenuItem
              className="h-14 flex flex-row items-center justify-center"
              title="Resume"
              linkTo="/resume"
              isActive={pathname === "/resume"}
            />
            <MenuItem
              className="h-14 flex flex-row items-center justify-center"
              title="Portfolio"
              linkTo="/portfolio"
              isActive={pathname === "/portfolio"}
            />
            <MenuItem
              className="h-14 flex flex-row items-center justify-center"
              title="Contact"
              linkTo="/contact"
              isActive={pathname === "/contact"}
            />
          </div>
        )}
      </div>
    </>
  );
}
