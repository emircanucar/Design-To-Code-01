import BrandLogo from "../ui/BrandLogo";

interface SidebarProps {
  NavigationLinks: { id: number; label: string; href: string }[];
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

function Sidebar({ NavigationLinks, children, isOpen, onClose }: SidebarProps) {
  return (
    <div
      className={
        "fixed inset-0 z-10 h-screen w-full bg-black/40 transition-all" +
        (isOpen ? " flex" : " hidden")
      }
      onClick={onClose}
    >
      <div className="h-full w-72 overflow-auto bg-white">
        <div className="sticky top-0 flex items-center justify-between bg-white px-6 py-4 shadow">
          <BrandLogo />
          <button className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[var(--color-primary)] text-2xl text-white hover:bg-[var(--color-primary)]/80">
            ×
          </button>
        </div>
        <div className="my-4 flex flex-col gap-4 px-6">
          {NavigationLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="block rounded-xl bg-gray-100 p-3 tracking-[0.08em] text-[var(--color-font-primary)] uppercase transition-all hover:bg-gray-50 hover:text-[var(--color-primary)]"
            >
              {link.label}
            </a>
          ))}
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
