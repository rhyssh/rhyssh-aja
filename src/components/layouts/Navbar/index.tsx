import { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "flowbite-react";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import anime from "animejs";

// Icon Bar
const BarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" fill="currentColor" className="text-primary-400">
    <path d={faBars.icon[4] as string} />
  </svg>
);

// Icon Close
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" fill="currentColor" className="text-danger-500">
    <path d={faX.icon[4] as string} />
  </svg>
);

const NavbarC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // Untuk animasi saat halaman dimuat
  const { pathname } = useRouter();

  const menuItems = [
    { name: "Home", href: "/home" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  const activeLinkStyle = "text-accent-500 bg-primary-600 md:bg-transparent md:text-primary-400 font-bold border-none";
  const inactiveLinkStyle = "text-white hover:text-yellow-400";

  useEffect(() => {
    // Memastikan animasi hanya berjalan di sisi client
    if (typeof window !== "undefined") {
      setIsMounted(true);

      anime({
        targets: ".menu-item",
        translateY: [-50, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
      });
    }
  }, []);

  const handleToggleClick = () => {
    setIsAnimating(true);
    setIsOpen(!isOpen);

    setTimeout(() => {
      setIsAnimating(false);
    }, 200);
  };

  if (!isMounted) return null; // Pastikan komponen tidak dirender di server-side

  return (
    <nav className={`bg-neutral-600 text-white rounded-b-lg transform transition-all duration-500 ${isMounted ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>
      <Navbar.Brand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-primary-400">타마요가</span>
      </Navbar.Brand>
      {/* Hapus style default dari NavbarToggle */}
      <Navbar.Toggle onClick={handleToggleClick} barIcon={isOpen ? CloseIcon : BarIcon} className={`!bg-transparent !shadow-none !ring-0 transition-transform duration-300  ${isAnimating ? "-rotate-180" : ""}`} />
      <Navbar.Collapse className={`text-white ${isOpen ? "block" : "hidden"} transition-transform duration-300`}>
        {menuItems.map((item, index) => (
          <Navbar.Link key={index} href={item.href} className={`menu-item transform transition-all duration-300 ease-out delay-[${index * 300}ms] ${pathname === item.href ? activeLinkStyle : inactiveLinkStyle}`}>
            {item.name}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </nav>
  );
};

export default NavbarC;
