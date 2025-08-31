import { useState } from "react";
import BrandLogo from "../ui/BrandLogo";
import Button from "../ui/Button";
import Sidebar from "./Sidebar";
// import { Link } from 'react-router-dom';

const navigationLinks = [
  { id: 1, label: "Projects", href: "/Projects" },
  { id: 2, label: "Developers", href: "/Developers" },
  { id: 3, label: "Agents", href: "/Agents" },
  { id: 4, label: "Blog", href: "/Blog" },
  { id: 5, label: "About us", href: "/About us" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="flex items-center justify-between py-5 lg:py-10">
        <BrandLogo />
        <nav className="hidden items-center gap-10 lg:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="tracking-[0.08em] text-[var(--color-font-primary)] uppercase transition-all hover:text-[var(--color-primary)]"
            >
              {link.label}
            </a>
          ))}
          <Button>CONTACT US</Button>
        </nav>
        <button onClick={toggleSidebar} className="flex text-3xl lg:hidden">
          ☰
        </button>
      </header>
      <Sidebar
        isOpen={isOpen}
        onClose={toggleSidebar}
        NavigationLinks={navigationLinks}
      >
        <Button className="w-full">CONTACT US</Button>
      </Sidebar>
    </>
  );
}

export default Header;
