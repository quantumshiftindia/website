import Link from "next/link";
import { companyName } from "@/data";

export default function Header() {
  return (
    <header className="header-main">
      <Link href="/" className="logo">
        <strong>{companyName}</strong>.
      </Link>
      <div className="burger">
        <span className="burger-title">MENU</span>
        <div className="burger-menu">
          <div className="line _1"></div>
          <div className="line _2"></div>
          <div className="line _3"></div>
        </div>
      </div>
    </header>
  );
}
