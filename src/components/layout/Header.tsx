import BrandLogo from "../ui/BrandLogo";
import Button from "../ui/Button";
// import { Link } from 'react-router-dom';

const navigationLinks = [
  { id: 1, label: "Projects", href: "/Projects" },
  { id: 2, label: "Developers", href: "/Developers" },
  { id: 3, label: "Agents", href: "/Agents" },
  { id: 4, label: "Blog", href: "/Blog" },
  { id: 5, label: "About us", href: "/About us" },
];

function Header() {
  return (
    <div className="flex items-center justify-between py-10">
      <BrandLogo />
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-10">
          {navigationLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="tracking-[0.08em] text-[var(--color-font-primary)] uppercase transition-all hover:text-[var(--color-primary)]"
            >
              {link.label}
            </a>
          ))}
        </div>
        <Button>CONTACT US</Button>
      </div>
    </div>
  );
}

export default Header;
