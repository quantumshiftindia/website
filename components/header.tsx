import Link from "next/link";
import { companyName } from "@/data";
import Image from "next/image";

export default function Header() {
  return (
    <header className="header-main">
      <Link href="/" className="logo">
        <div className="img-container">
          <Image src="/assets/images/qs_logo.jpg" alt="company logo" sizes="100%" fill></Image>
        </div>
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
