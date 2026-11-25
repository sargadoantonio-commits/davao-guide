"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <h1 className="logo">Davao Guide</h1>
      <div className="nav-links">
        <Link href="/" className={pathname === "/" ? "active" : ""}>
          Attractions
        </Link>
        <Link href="/tips" className={pathname === "/tips" ? "active" : ""}>
          Visitor Tips
        </Link>
      </div>
    </nav>
  );
}