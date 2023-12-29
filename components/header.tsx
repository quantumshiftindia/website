import Link from "next/link";
import { companyName } from "@/data";
import Image from "next/image";
import { navLinks } from "@/data";

const mapper = (name: string, path: string,key: number) => {
  return (
    <li className="nav-item">
      <Link href={path} key={key} className="nav-link">
        {name}
      </Link>
    </li>
  );
};

export default function Header() {
  return (
    <header className="header-main">
      <Link href="/" className="logo">
        <div className="img-container">
          <Image src="/assets/images/qs_logo_head.jpg" alt="company logo" sizes="100%" fill></Image>
        </div>
        <strong className="company-name">{companyName}.<sup className="trade-mark">TM</sup></strong>
      </Link>
      <nav className="navigation">
        <ul className="nav-list">
          {navLinks.map((link, key) => mapper(link.name, link.path, key))}
        </ul>
      </nav>
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
