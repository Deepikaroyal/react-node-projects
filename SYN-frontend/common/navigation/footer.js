import React from 'react'
import Image from 'next/image';
import rightArrow from "../../public/images/right_arrow_footer.png";
import styles from "../../styles/Dashboard.module.css";
import social from "../../public/images/social.svg";
import youtube from "../../public/images/youtube.svg";
import insta from "../../public/images/insta.svg";
import linkedin from "../../public/images/linkedin.svg";
import telegram from "../../public/images/telegram.svg";
import Link from 'next/link';
export default function Footer() {
  return (
    <div className={styles.backgroundFOOTER}>

 {/************************** footer section starts **********************/}
 <section className={styles.footer}>
        <footer className=" text-center text-lg-start">
         <div className={`${styles.mainFooterContent}`}>


          <div className={`container `}>
            {/* <!--Grid row--> */}
            <div className="row">
              {/* <!--Grid column--> */}
              <div className={`col-lg-5 col-md-6 mb-4 mb-md-0  `}>
                <h5 className={styles.footerContent}>Marketplace</h5>

                <div className={styles.mainfooter}>
                  <ul className={`list-unstyled mb-0`}>
                    <li className={styles.text_decore1}>
                      <a href="#!" className={styles.textDecor}>
                        All NFTs{" "}
                      </a>
                    </li>
                    <li className={styles.text_decore1}>
                      <a href="#!" className={styles.textDecor}>
                        {" "}
                        Solana NFTs
                      </a>
                    </li>
                    <li className={styles.text_decore1}>
                      <a href="#!" className={styles.textDecor}>
                        Art
                      </a>
                    </li>
                    <li className={styles.text_decore1}>
                      <a href="#!" className={styles.textDecor}>
                        Collectibles
                      </a>
                    </li>
                    <li className={styles.text_decore1}>
                      <a href="#!" className={styles.textDecor}>
                        Domain Names 
                      </a>
                    </li>
                    <li className={styles.text_decore1}>
                      <a href="#!" className={styles.textDecor}>
                        Music
                      </a>
                    </li>
                  </ul>
                  <ul className={`list-unstyled mb-0`}>
                    <li className={styles.text_decore1}>
                      <a href="#!" className={styles.textDecor}>
                        Photography{" "}
                      </a>
                    </li>
                    <li className={styles.text_decore1}>
                      <a href="#!" className={styles.textDecor}>
                        {" "}
                        Sports
                      </a>
                    </li>
                    <li className={styles.text_decore1}>
                      <a href="#!" className={styles.textDecor}>
                        Trading Cards
                      </a>
                    </li>
                    <li className={styles.text_decore1}>
                      <a href="#!" className={styles.textDecor}>
                        Utility
                      </a>
                    </li>
                    <li className={styles.text_decore1}>
                      <a href="#!" className={styles.textDecor}>
                        Virtual Worlds
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

             
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className={styles.footerContent}>Company</h5>

                <ul className="list-unstyled mb-0">
                  <li className={styles.text_decore1}>
                    <a href="#!" className={styles.textDecor}>
                      About
                    </a>
                  </li>
                  <li className={styles.text_decore1}>
                    <a href="#!" className={styles.textDecor}>
                      Support
                    </a>
                  </li>
                  <Link href="/termsandcondition">
                  <li className={styles.text_decore1}>
                    <a href="#!" className={styles.textDecor}>
                      Terms & Condition
                    </a>
                  </li>
                  </Link>
                  <li className={styles.text_decore1}>
                    <a href="#!" className={styles.textDecor}>
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              <div className=" col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className={styles.footerContent}>Never miss a drop!</h5>

                <p className={styles.textDecor}>
                  Subscribe to our super-exclusive drop list and be the first to
                  know about upcoming SYN drops.
                </p>
                <div className={`input-group ${styles.footerINPUT}`}>
                  <input
                    type="text"
                    className={`form-control ${styles.Emailfield}`}
                    placeholder="Enter your email"
                  />
                  <div className="input-group-append">
                    <button className={`btn btn-primary ${styles.input_group}`} type="button">
                      <Image
                        src={rightArrow}
                        className={styles.footerBtn}
                        alt=""
                      ></Image>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          {/*********************************** <!-- Copyright Starts--> ******************************/}

          <div className={`${styles.copyRightFooter} ${styles.footerBox}`}>
            <div className={`container ${styles.footerContainer}`}>
              <div className="footerLeft">
                <Link href="/">
                  <a className={styles.textDecor}>
                    © SYN, Inc. All rights reserved.
                  </a>
                </Link>
              </div>
              <div className={styles.rightIcons}>
                <div className={styles.footerIcons}>
                  <Image src={social} alt=""></Image>
                </div>
                <div className={styles.footerIcons}>
                  <Image src={youtube} alt=""></Image>
                </div>
                <div className={styles.footerIcons}>
                  <Image src={insta} alt=""></Image>
                </div>
                <div className={styles.footerIcons}>
                  <Image src={telegram} alt=""></Image>
                </div>
             
                <div className={styles.footerIcons}>
                  <Image src={linkedin} alt=""></Image>
                </div>
              </div>
            </div>
          </div>
          {/*********************************** <!-- Copyright ENds--> ******************************/}
        </footer>
      </section>
      {/*********************************** <!-- Footer End--> ******************************/}
    </div>
  )
}
