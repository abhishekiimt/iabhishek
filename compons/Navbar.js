import style from '../styles/Home.module.css';
import Link from "next/link";
import { useState } from "react";


const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <header>
    <nav className={style.nav}>
      <div className={style.logo}><Link href="/">iAbhishek</Link></div>
      <div className={style.hamburger} onClick={showSidebar}>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
      </div>
      <div className={sidebar ? 'nav-menu active' : 'nav-menu'} onClick={showSidebar}>
        <div className={style.navlink}><Link href='/'>home</Link></div>
        <div className={style.navlink}><Link href='/'>Next Link</Link></div>
      </div>
    </nav>
    </header>
  );
};

export default Navbar;
