"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useState } from "react";

// Konversi FontAwesomeIcon ke SVG
const BarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" fill="currentColor" className="text-primary-400">
    <path d={faBars.icon[4] as string} />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" fill="currentColor" className="text-danger-500">
    <path d={faX.icon[4] as string} />
  </svg>
);

const NavbarC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // console.log(isOpen);
  const { pathname } = useRouter(); // Ambil path rute saat ini

  const menuItems = [
    { name: "Home", href: "/home" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  const activeLinkStyle = "text-accent-500 bg-primary-600 md:bg-transparent md:text-primary-400  font-bold border-none";
  const inactiveLinkStyle = "text-white hover:text-yellow-400";

  return (
    <Navbar  fluid={false} className="bg-neutral-600  text-white rounded-b-lg ">
      <Navbar.Brand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-primary-400 ">타마요가</span>
      </Navbar.Brand>
      {/* Hapus style default dari NavbarToggle */}
      <Navbar.Toggle onClick={() => setIsOpen(!isOpen)} barIcon={isOpen ? CloseIcon : BarIcon} className="!bg-transparent !shadow-none !ring-0"></Navbar.Toggle>{" "}
      <Navbar.Collapse className={`text-white ${isOpen ? "block" : "hidden"}`}>
        {menuItems.map((item, index) => (
          <Navbar.Link
            key={index}
            href={item.href}
            className={` ${pathname === item.href ? activeLinkStyle : inactiveLinkStyle} `} // Active class based on current route
          >
            {item.name}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarC;
