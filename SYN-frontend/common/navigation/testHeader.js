import React from "react";
import styles from "../../styles/testHeader.module.css";
// import logo from "../../public/images/Images.pmg";
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import Link from "next/link";
export default function Testheader() {
  return (
    <div>
      <div className="container">
        <div className={styles.main_headnav}>
          <div className={styles.nav_content}>
            <Image src={logo} alt={logo}></Image>
          </div>
          <div className={styles.nav_menu_content}>
            <ul className={styles.menu_bar}>
              <li className={styles.menuLink}>
                <Link href="/">
                  <a className={styles.menu_linking}>Explore</a>
                </Link>
              </li>
              <li className={styles.menuLink}>
                <Link href="/">
                  <a className={styles.menu_linking}>Feeds</a>
                </Link>
              </li>
              <li className={styles.menuLink}>
                <Link href="/">
                  <a className={styles.menu_linking}>Create</a>
                </Link>
              </li>
              <li className={styles.menuLink}>
                <Link href="/">
                  <button className={styles.nav_loginBTN}>login</button>
                </Link>
              </li>
           
            </ul>
               
          </div>
        </div>
      </div>
    </div>
  );
}
