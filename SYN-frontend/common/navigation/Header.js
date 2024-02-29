import React from "react";
import Image from "next/image";
import Link from "next/link";
// import styles from "../../styles/Auth.module.css"
import logo from "../../public/images/logo.svg";
import landingPage from "../../public/images/Images.png";
import styles from "../../styles/Dashboard.module.css";
import Login from "../../pages/auth/login";
export default function Header() {
  return (
    <div>
      <section>
        <div className="container">
          <div className={styles.head_main}>
            <nav className="navbar navbar-expand-lg navbar-light head-sub">
              <Link href="/">
                <a className={styles.headListtxt}>
                  <Image
                    src={logo}
                    alt={logo}
                    className="img-fluid head-img"
                  ></Image>
                </a>
              </Link>

              <button
                className="navbar-toggler navbar navbar-expand-lg navbar-light head-sub"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarTogglerDemo01"
              >
                <ul
                  className={`navbar-nav d-flex align-items-center ${styles.head_list_name}`}
                >
                  <li className={styles.navlink}>
                    <Link href="/auth/login">
                      <a className={`nav-link active ${styles.head_name}`}>
                        Explore
                      </a>
                    </Link>
                  </li>
                  <Link href="/auth/login">
                    <li className={styles.navlink}>
                      <a className={`nav-link ${styles.nav_menu}`}>Feeds</a>
                    </li>
                  </Link>
                  <Link href="/auth/login">
                    <li className={styles.navlink}>
                      <a className={`nav-link ${styles.nav_menu}`}>Create</a>
                    </li>
                  </Link>

                  <Link href="/auth/login">
                    <li className={styles.navlink}>
                      <button
                        id="loginbtn"
                        className={`${styles.button1} border-0`}
                      >
                        Login
                      </button>

                
                    </li>
                  </Link>
                </ul>
              </div>
            </nav>
          </div>
 
        {/* <!-- Navbar End --> */}

        {/* <!-- Main HEader Start --> */}

        <section className={styles.header}>
          {/* <div className="container"> */}
            <div className="row align-items-center">
              <div className="col-left col-lg-6 col-md-12 col-sm-12">
                <div className={styles.headerContent1}>
                  <h1 className={styles.heading_nav}>
                    Discover, Collect & Sell
                    <span className={styles.heading2_nav}> Extraordinary </span>
                    NFTs
                  </h1>

                  <p className={styles.contentPara}>
                    A non-interchangeable unit of data stored on a blockchain, a
                    form of digital ledger, that can be sold and traded. Types
                    of NFT data units.
                  </p>
                  <Link href="/auth/login">
                    <button className={`${styles.headerBtn} border-0`}>
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-right col-lg-6 col-md-12 col-sm-12">
                <Image src={landingPage} alt=""></Image>
              </div>
            </div>
          {/* </div> */}
                              {/* <!-- The Modal --> */}
                      {/* <div id="myModal" className={styles.modal}>
                       
                        <div className={styles.modal_content}>
                         
                        </div>
                      </div> */}
        </section>
        {/* <!--  Main Header End--> */}
        </div>
      </section>
    </div>
  );
}
