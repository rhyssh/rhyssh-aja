import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import anime from "animejs"; // Import animejs
import "animate.css";
import { useRouter } from "next/router";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true); // State to track initial load
  const iconRef = useRef(null); // Ref for the icon
  const { pathname } = useRouter();
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const barRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const menuItems = [
    { name: "Home", href: "/home" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    if (barRefs.current.length > 0) {
      barRefs.current.forEach((bar, index) => {
        anime({
          targets: bar,
          width: hoverIndex === index ? "100%" : "0%",
          easing: "easeInOutExpo",
          duration: 300,
        });
      });
    }
    if (isInitialLoad) {
      // Run animation only on initial load
      anime({
        targets: ".navbar",
        translateY: [-50, 0], // Navbar muncul dari atas
        opacity: [0, 1], // Navbar muncul secara perlahan
        easing: "easeOutExpo",
        delay: 500,
        duration: 800, // Durasi animasi
      });
      setIsInitialLoad(false); // Set state to false after initial load animation
    }

    if (isOpen) {
      // Animasi munculnya menu mobile
      anime({
        targets: ".mobile-menu li", // Target setiap item di menu mobile
        opacity: [0, 1],
        translateY: [-20, 0],
        easing: "easeOutExpo",
        delay: anime.stagger(100), // Staggering untuk membuat tiap item muncul dengan jeda
      });
      // Mencegah scroll ketika menu terbuka
      document.body.classList.add("no-scroll");
    } else {
      // Mengizinkan scroll ketika menu ditutup
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen, isInitialLoad, hoverIndex]); // Add isInitialLoad to dependencies

  useEffect(() => {
    
    if (iconRef.current) {
      anime({
        targets: iconRef.current,
        rotate: isOpen ? [180, 180] : [-180, -180], // Rotate the icon
        duration: 500,
        easing: "easeInOutQuad",
      });
    }
  }, [isOpen]);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const linkActive = "text-primary-400 border-b-2 border-primary-400 font-semibold";

  return (
    <>
      {/* Main Navbar */}
      <nav className="navbar flex justify-between bg-neutral-600 text-white rounded-b-lg px-5 py-4 items-center shadow-md">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold animate__animated animate__fadeInDown text-primary-400">
          타마요가
        </Link>

        {/* Mobile Menu Button */}
        <button className="text-2xl md:hidden focus:outline-none transition-transform duration-300" onClick={handleToggleMenu}>
          <FontAwesomeIcon ref={iconRef} icon={isOpen ? faTimes : faBars} className={`transition-transform duration-200 ${isOpen ? "text-danger-500" : "text-primary-400"}`} />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-5">
          {menuItems.map((item, index) => (
            <Link href={item.href} key={index} className="relative animate__animated animate__fadeInDown animate__slow">
              <li
                className={`relative hover:text-primary-400 cursor-pointer transition-colors duration-300 ${pathname === item.href ? "text-primary-500 font-semibold border-b-2 border-primary-400" : ""}`}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {item.name}
                <span
                  ref={(el) => {
                    barRefs.current[index] = el;
                  }} // Callback ref
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary-400 transition-all duration-300 ${pathname === item.href ? "hidden" : ""}`}
                />
              </li>
            </Link>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <ul className="mobile-menu md:hidden absolute z-10 top-16 right-0 left-0 backdrop-blur-sm bg-neutral-600/30 h-full  text-white flex flex-col items-center py-6 space-y-4 shadow-md transition-all duration-300">
          {menuItems.map((item, index) => (
            <Link href={item.href} key={index}>
              <li className={`text-xl hover:text-primary-400 cursor-pointer transition-colors duration-500 ${pathname === item.href ? linkActive : ""}`}>{item.name}</li>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
};

export default Navbar2;
