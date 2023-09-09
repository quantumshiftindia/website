import { companyName } from "@/data";

export default function Header() {
  return (
    <header className="header-main">
      <span className="logo">
        <strong>{companyName}</strong>.
      </span>
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
