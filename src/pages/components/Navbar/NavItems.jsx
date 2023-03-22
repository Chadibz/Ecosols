import Link from "next/link";
import styles from "../../../styles/Navbar.module.css";
const NavItem = ({ text, href, active ,ref}) => {
  return (
    <Link 
    className={active ? `${styles.active} ${styles.nav__item }`: styles.nav__item} href={href} >

    {/* // className={`nav__item ${active ? "active" : "" }`} href={href}> */}
      
   
        {text}
      
    </Link>
  );
};

export default NavItem;