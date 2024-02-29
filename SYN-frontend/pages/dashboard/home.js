import Head from 'next/head';
import styles from "../../styles/Dashboard.module.css";
import Image from 'next/image';
// import Link from 'next/link';
import Link from 'next/link';

import logo from "../../public/images/logo.svg";
import landingPage from "../../public/images/Images.png";
import MamieBarnett from "../../public/images/Mamie Barnett.png";
import AnimeSailorClub from "../../public/images/AnimeSailorClub.png";
import heartLineSvg from "../../public/images/heart_line.svg";
import hotDropTickSvg from "../../public/images/hot_drop_tick.svg";
import ethereumSvg from "../../public/images/ethereum.svg";
import crateSvg from "../../public/images/crate.svg";
import rightArrow from "../../public/images/right_arrow_footer.png";
// import CenterMode from "../../../common/component/slider/slider";
import CenterMode from '../../common/component/slider/slider';
import social from "../../public/images/social.svg";
import youtube from "../../public/images/youtube.svg";
import insta from "../../public/images/insta.svg";
import linkedin from "../../public/images/linkedin.svg";
import telegram from "../../public/images/telegram.svg";
import add_nft from "../../public/images/add_nfts.svg";
import sale from "../../public/images/sale.svg";
import dropdown from "../../public/images/drop_down.svg";
// import styles from '../styles/Home.module.css';
// import styles from "../styles/Auth.module.css"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AuthHeader from '../../common/navigation/authHeader';
import { useEffect } from 'react';
import Router from 'next/router';
import withAuth from '../../helpers/hoc';
 function Home() {
  
  return (
    <div className={styles.bodyBackground }>
      <div className="container ">
    <AuthHeader />
    <section className={styles.header}>
        
            <div className="row align-items-center">
              <div className="col-left col-12 col-md-6 col-sm-12">
                <div className={styles.headerContent1}>
                  <h1 className={styles.heading_nav}>
                    Discover, Collect & Sell
                    <span className={styles.heading2_nav}>
                      &nbsp;Extraordinary
                    </span>
                    &nbsp;NFTs
                  </h1>

                  <p className={styles.contentPara}>
                    A non-interchangeable unit of data stored on a blockchain, a
                    form of digital ledger, that can be sold and traded. Types
                    of NFT data units.
                  </p>
                  <Link href="/dashboard/explore/explore">
                    <button className={`${styles.headerBtn} border-0`}>
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-right col-md-6 col-12 col-sm-12">
                <Image src={landingPage} alt=""></Image>
              </div>
            </div>
        
        </section>
        </div>
    <section>
      {/* <!-- Section 2 Heading --> */}
      <div className={styles.heading}>
        <h2 className={styles.Txtheading}>
          <span className={styles.txtbold}>Spotlight.</span>
          Projects you&apos;ll love
        </h2>
      </div>
      {/* <!-- Section 2 Heading  End --> */}

      <div className="container">
        <div className={styles.autoplay}>
          <CenterMode />
        </div>
      </div>
    </section>

    {/* <!-- Section Top creator Start --> */}
    <section className="top-creator">
      <div className={styles.heading}>
        <h2 className={`${styles.txtFont}`}>
          Top Creator
          <span className={styles.txtbold}>
            {" "}
            Last 7 Days <Image src={dropdown}></Image>
          </span>
        </h2>
      </div>
      {/* <!-- Section  Top creator  End -->*/}

      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4">
            <div className={styles.cardCollection}>
              <div className={styles.cardROW}>
                <figure className={styles.cards_images}>
                  {/* <img src="/01_Landing Page/Mamie Barnett.png" alt="" className="img-fluid" /> */}
                  <Image
                    src={MamieBarnett}
                    className="img-fluid"
                    alt=""
                  ></Image>
                  {/* <Image src={tick} className={styles.verifyTICK}></Image> */}
                </figure>
              </div>
              <div
                className={`col-9 d-flex justify-content-between ${styles.miniCards}`}
              >
                <div className={styles.sub_Cards}>
                  <h6 className={styles.left}>Mamie Barnett</h6>
                  <span className={styles.leftLower}>Floor: 77.99 ETH</span>
                </div>
                <div className={styles.right}>
                  <h6 className={styles.rightUpper}>1.1k ETH</h6>
                  <p className={styles.rightLower}>
                    $1.6M
                    <span
                      className={`${styles.rightLower} ${styles.spanRed}`}
                    >
                      -8.4%
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className={styles.cardCollection}>
              <div className={styles.cardROW}>
                <figure className={styles.cards_images}>
                  {/* <img src="/01_Landing Page/Mamie Barnett.png" alt="" className="img-fluid" /> */}
                  <Image
                    src={MamieBarnett}
                    className="img-fluid"
                    alt=""
                  ></Image>
                  {/* <Image src={tick} className={styles.verifyTICK}></Image> */}
                </figure>
              </div>
              <div
                className={`col-9 d-flex justify-content-between ${styles.miniCards}`}
              >
                <div className={styles.sub_Cards}>
                  <h6 className={styles.left}>Mamie Barnett</h6>
                  <span className={styles.leftLower}>Floor: 77.99 ETH</span>
                </div>
                <div className={styles.right}>
                  <h6 className={styles.rightUpper}>1.1k ETH</h6>
                  <p className={styles.rightLower}>
                    $1.6M
                    <span
                      className={`${styles.rightLower} ${styles.spanRed}`}
                    >
                      -8.4%
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className={styles.cardCollection}>
              <div className={styles.cardROW}>
                <figure className={styles.cards_images}>
                  {/* <img src="/01_Landing Page/Mamie Barnett.png" alt="" className="img-fluid" /> */}
                  <Image
                    src={MamieBarnett}
                    className="img-fluid"
                    alt=""
                  ></Image>
                  {/* <Image src={tick} className={styles.verifyTICK}></Image> */}
                </figure>
              </div>
              <div
                className={`col-9 d-flex justify-content-between ${styles.miniCards}`}
              >
                <div className={styles.sub_Cards}>
                  <h6 className={styles.left}>Mamie Barnett</h6>
                  <span className={styles.leftLower}>Floor: 77.99 ETH</span>
                </div>
                <div className={styles.right}>
                  <h6 className={styles.rightUpper}>1.1k ETH</h6>
                  <p className={styles.rightLower}>
                    $1.6M
                    <span
                      className={`${styles.rightLower} ${styles.spanRed}`}
                    >
                      -8.4%
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className={styles.cardCollection}>
              <div className={styles.cardROW}>
                <figure className={styles.cards_images}>
                  {/* <img src="/01_Landing Page/Mamie Barnett.png" alt="" className="img-fluid" /> */}
                  <Image
                    src={MamieBarnett}
                    className="img-fluid"
                    alt=""
                  ></Image>
                  {/* <Image src={tick} className={styles.verifyTICK}></Image> */}
                </figure>
              </div>
              <div
                className={`col-9 d-flex justify-content-between ${styles.miniCards}`}
              >
                <div className={styles.sub_Cards}>
                  <h6 className={styles.left}>Mamie Barnett</h6>
                  <span className={styles.leftLower}>Floor: 77.99 ETH</span>
                </div>
                <div className={styles.right}>
                  <h6 className={styles.rightUpper}>1.1k ETH</h6>
                  <p className={styles.rightLower}>
                    $1.6M
                    <span
                      className={`${styles.rightLower} ${styles.spanRed}`}
                    >
                      -8.4%
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className={styles.cardCollection}>
              <div className={styles.cardROW}>
                <figure className={styles.cards_images}>
                  {/* <img src="/01_Landing Page/Mamie Barnett.png" alt="" className="img-fluid" /> */}
                  <Image
                    src={MamieBarnett}
                    className="img-fluid"
                    alt=""
                  ></Image>
                  {/* <Image src={tick} className={styles.verifyTICK}></Image> */}
                </figure>
              </div>
              <div
                className={`col-9 d-flex justify-content-between ${styles.miniCards}`}
              >
                <div className={styles.sub_Cards}>
                  <h6 className={styles.left}>Mamie Barnett</h6>
                  <span className={styles.leftLower}>Floor: 77.99 ETH</span>
                </div>
                <div className={styles.right}>
                  <h6 className={styles.rightUpper}>1.1k ETH</h6>
                  <p className={styles.rightLower}>
                    $1.6M
                    <span
                      className={`${styles.rightLower} ${styles.spanRed}`}
                    >
                      -8.4%
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className={styles.cardCollection}>
              <div className={styles.cardROW}>
                <figure className={styles.cards_images}>
                  {/* <img src="/01_Landing Page/Mamie Barnett.png" alt="" className="img-fluid" /> */}
                  <Image
                    src={MamieBarnett}
                    className="img-fluid"
                    alt=""
                  ></Image>
                  {/* <Image src={tick} className={styles.verifyTICK}></Image> */}
                </figure>
              </div>
              <div
                className={`col-9 d-flex justify-content-between ${styles.miniCards}`}
              >
                <div className={styles.sub_Cards}>
                  <h6 className={styles.left}>Mamie Barnett</h6>
                  <span className={styles.leftLower}>Floor: 77.99 ETH</span>
                </div>
                <div className={styles.right}>
                  <h6 className={styles.rightUpper}>1.1k ETH</h6>
                  <p className={styles.rightLower}>
                    $1.6M
                    <span
                      className={`${styles.rightLower} ${styles.spanRed}`}
                    >
                      -8.4%
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className={styles.cardCollection}>
              <div className={styles.cardROW}>
                <figure className={styles.cards_images}>
                  {/* <img src="/01_Landing Page/Mamie Barnett.png" alt="" className="img-fluid" /> */}
                  <Image
                    src={MamieBarnett}
                    className="img-fluid"
                    alt=""
                  ></Image>
                  {/* <Image src={tick} className={styles.verifyTICK}></Image> */}
                </figure>
              </div>
              <div
                className={`col-9 d-flex justify-content-between ${styles.miniCards}`}
              >
                <div className={styles.sub_Cards}>
                  <h6 className={styles.left}>Mamie Barnett</h6>
                  <span className={styles.leftLower}>Floor: 77.99 ETH</span>
                </div>
                <div className={styles.right}>
                  <h6 className={styles.rightUpper}>1.1k ETH</h6>
                  <p className={styles.rightLower}>
                    $1.6M
                    <span
                      className={`${styles.rightLower} ${styles.spanRed}`}
                    >
                      -8.4%
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className={styles.cardCollection}>
              <div className={styles.cardROW}>
                <figure className={styles.cards_images}>
                  {/* <img src="/01_Landing Page/Mamie Barnett.png" alt="" className="img-fluid" /> */}
                  <Image
                    src={MamieBarnett}
                    className="img-fluid"
                    alt=""
                  ></Image>
                  {/* <Image src={tick} className={styles.verifyTICK}></Image> */}
                </figure>
              </div>
              <div
                className={`col-9 d-flex justify-content-between ${styles.miniCards}`}
              >
                <div className={styles.sub_Cards}>
                  <h6 className={styles.left}>Mamie Barnett</h6>
                  <span className={styles.leftLower}>Floor: 77.99 ETH</span>
                </div>
                <div className={styles.right}>
                  <h6 className={styles.rightUpper}>1.1k ETH</h6>
                  <p className={styles.rightLower}>
                    $1.6M
                    <span
                      className={`${styles.rightLower} ${styles.spanRed}`}
                    >
                      -8.4%
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className={styles.cardCollection}>
              <div className={styles.cardROW}>
                <figure className={styles.cards_images}>
                  {/* <img src="/01_Landing Page/Mamie Barnett.png" alt="" className="img-fluid" /> */}
                  <Image
                    src={MamieBarnett}
                    className="img-fluid"
                    alt=""
                  ></Image>
                  {/* <Image src={tick} className={styles.verifyTICK}></Image> */}
                </figure>
              </div>
              <div
                className={`col-9 d-flex justify-content-between ${styles.miniCards}`}
              >
                <div className={styles.sub_Cards}>
                  <h6 className={styles.left}>Mamie Barnett</h6>
                  <span className={styles.leftLower}>Floor: 77.99 ETH</span>
                </div>
                <div className={styles.right}>
                  <h6 className={styles.rightUpper}>1.1k ETH</h6>
                  <p className={styles.rightLower}>
                    $1.6M
                    <span
                      className={`${styles.rightLower} ${styles.spanRed}`}
                    >
                      -8.4%
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className={styles.cardCollection}>
              <div className={styles.cardROW}>
                <figure className={styles.cards_images}>
                  {/* <img src="/01_Landing Page/Mamie Barnett.png" alt="" className="img-fluid" /> */}
                  <Image
                    src={MamieBarnett}
                    className="img-fluid"
                    alt=""
                  ></Image>
                  {/* <Image src={tick} className={styles.verifyTICK}></Image> */}
                </figure>
              </div>
              <div
                className={`col-9 d-flex justify-content-between ${styles.miniCards}`}
              >
                <div className={styles.sub_Cards}>
                  <h6 className={styles.left}>Mamie Barnett</h6>
                  <span className={styles.leftLower}>Floor: 77.99 ETH</span>
                </div>
                <div className={styles.right}>
                  <h6 className={styles.rightUpper}>1.1k ETH</h6>
                  <p className={styles.rightLower}>
                    $1.6M
                    <span
                      className={`${styles.rightLower} ${styles.spanRed}`}
                    >
                      -8.4%
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className={styles.cardCollection}>
              <div className={styles.cardROW}>
                <figure className={styles.cards_images}>
                  {/* <img src="/01_Landing Page/Mamie Barnett.png" alt="" className="img-fluid" /> */}
                  <Image
                    src={MamieBarnett}
                    className="img-fluid"
                    alt=""
                  ></Image>
                  {/* <Image src={tick} className={styles.verifyTICK}></Image> */}
                </figure>
              </div>
              <div
                className={`col-9 d-flex justify-content-between ${styles.miniCards}`}
              >
                <div className={styles.sub_Cards}>
                  <h6 className={styles.left}>Mamie Barnett</h6>
                  <span className={styles.leftLower}>Floor: 77.99 ETH</span>
                </div>
                <div className={styles.right}>
                  <h6 className={styles.rightUpper}>1.1k ETH</h6>
                  <p className={styles.rightLower}>
                    $1.6M
                    <span
                      className={`${styles.rightLower} ${styles.spanRed}`}
                    >
                      -8.4%
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className={styles.cardCollection}>
              <div className={styles.cardROW}>
                <figure className={styles.cards_images}>
                  {/* <img src="/01_Landing Page/Mamie Barnett.png" alt="" className="img-fluid" /> */}
                  <Image
                    src={MamieBarnett}
                    className="img-fluid"
                    alt=""
                  ></Image>
                  {/* <Image src={tick} className={styles.verifyTICK}></Image> */}
                </figure>
              </div>
              <div
                className={`col-9 d-flex justify-content-between ${styles.miniCards}`}
              >
                <div className={styles.sub_Cards}>
                  <h6 className={styles.left}>Mamie Barnett</h6>
                  <span className={styles.leftLower}>Floor: 77.99 ETH</span>
                </div>
                <div className={styles.right}>
                  <h6 className={styles.rightUpper}>1.1k ETH</h6>
                  <p className={styles.rightLower}>
                    $1.6M
                    <span
                      className={`${styles.rightLower} ${styles.spanRed}`}
                    >
                      -8.4%
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className={styles.cardCollection}>
              <div className={styles.cardROW}>
                <figure className={styles.cards_images}>
                  {/* <img src="/01_Landing Page/Mamie Barnett.png" alt="" className="img-fluid" /> */}
                  <Image
                    src={MamieBarnett}
                    className="img-fluid"
                    alt=""
                  ></Image>
                  {/* <Image src={tick} className={styles.verifyTICK}></Image> */}
                </figure>
              </div>
              <div
                className={`col-9 d-flex justify-content-between ${styles.miniCards}`}
              >
                <div className={styles.sub_Cards}>
                  <h6 className={styles.left}>Mamie Barnett</h6>
                  <span className={styles.leftLower}>Floor: 77.99 ETH</span>
                </div>
                <div className={styles.right}>
                  <h6 className={styles.rightUpper}>1.1k ETH</h6>
                  <p className={styles.rightLower}>
                    $1.6M
                    <span
                      className={`${styles.rightLower} ${styles.spanRed}`}
                    >
                      -8.4%
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className={styles.cardCollection}>
              <div className={styles.cardROW}>
                <figure className={styles.cards_images}>
                  {/* <img src="/01_Landing Page/Mamie Barnett.png" alt="" className="img-fluid" /> */}
                  <Image
                    src={MamieBarnett}
                    className="img-fluid"
                    alt=""
                  ></Image>
                  {/* <Image src={tick} className={styles.verifyTICK}></Image> */}
                </figure>
              </div>
              <div
                className={`col-9 d-flex justify-content-between ${styles.miniCards}`}
              >
                <div className={styles.sub_Cards}>
                  <h6 className={styles.left}>Mamie Barnett</h6>
                  <span className={styles.leftLower}>Floor: 77.99 ETH</span>
                </div>
                <div className={styles.right}>
                  <h6 className={styles.rightUpper}>1.1k ETH</h6>
                  <p className={styles.rightLower}>
                    $1.6M
                    <span
                      className={`${styles.rightLower} ${styles.spanRed}`}
                    >
                      -8.4%
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className={styles.cardCollection}>
              <div className={styles.cardROW}>
                <figure className={styles.cards_images}>
                  {/* <img src="/01_Landing Page/Mamie Barnett.png" alt="" className="img-fluid" /> */}
                  <Image
                    src={MamieBarnett}
                    className="img-fluid"
                    alt=""
                  ></Image>
                  {/* <Image src={tick} className={styles.verifyTICK}></Image> */}
                </figure>
              </div>
              <div
                className={`col-9 d-flex justify-content-between ${styles.miniCards}`}
              >
                <div className={styles.sub_Cards}>
                  <h6 className={styles.left}>Mamie Barnett</h6>
                  <span className={styles.leftLower}>Floor: 77.99 ETH</span>
                </div>
                <div className={styles.right}>
                  <h6 className={styles.rightUpper}>1.1k ETH</h6>
                  <p className={styles.rightLower}>
                    $1.6M
                    <span
                      className={`${styles.rightLower} ${styles.spanRed}`}
                    >
                      -8.4%
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- --------------------------------------------End Top Creator ------------------------------------------------------------------- --> */}

    {/* <!-- Section Hot Drops Start --> */}
    <section className={styles.hotdrops}>
      <div className={styles.heading}>
        <h2 className={styles.Txtheading1}>
          <span className={styles.txtbold}>Hot </span>
          Drops
        </h2>
      </div>
      <div className={styles.instaCards}>
        <div className="container">
          <div className="row">
            <div className={styles.dropsSectionBTn}>
              <button type="button" className={styles.mainButton}>
                Music
              </button>
              <button type="button" className={styles.mainButton}>
                Sport
              </button>
              <button type="button" className={styles.mainButton}>
                Art
              </button>
              <button type="button" className={styles.mainButton}>
                Photography
              </button>
              <button type="button" className={styles.mainButton}>
                Trading Card
              </button>
              <button type="button" className={styles.mainButton}>
                Virtual World
              </button>
              <button type="button" className={styles.mainButton}>
                Videos
              </button>
              <button type="button" className={styles.mainButton}>
                Utility
              </button>
            </div>

            <div className="col-12 col-sm-6 col-md-3">
              <div className={styles.subCard}>
                <figure className={styles.dashboardSubcardImage}>
                  <Image
                    // layout="fill"
                    src={AnimeSailorClub}
                    className={`${styles.subCard} ${styles.subCardImage} img-fluid`}
                    alt=""
                  ></Image>
                  <button className={styles.hideButton}>Buy now</button>
                  <div className={styles.subcardOverlay}></div>
                </figure>

                <div className={styles.innerCard}>
                  <div className={styles.upper}>
                    <div className={styles.upLeft}>
                      <div className={styles.upHeading}>
                        <div className={styles.upHead}>
                          <h3 className={styles.upLeftTxt1}>Rarible </h3>
                          <Image
                            src={hotDropTickSvg}
                            className={`${styles.hotDropTickSvg1} img-fluid`}
                            alt=""
                          ></Image>
                        </div>
                        <div className={styles.sideImage}>
                          <Image
                            src={heartLineSvg}
                            className={`${styles.likeButton} img-fluid`}
                          ></Image>
                          <span className={styles.spantxt}>2.3K</span>
                        </div>
                      </div>
                      <h2 className={`${styles.upLeftTxt2}`}>
                        AnimeSailorClub
                      </h2>
                    </div>
                    <div className={styles.upRight}>
                      <span className={styles.likes}></span>
                    </div>
                  </div>

                  <div className={styles.lower}>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <p className={styles.gray}>Price</p>
                        <div className={styles.bottomDiv}>
                          <h5 className={styles.fixedColor}>
                            <Image
                              src={ethereumSvg}
                              className={styles.ethereumSvg}
                              alt=""
                            ></Image>
                            1.1ETH
                          </h5>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <p className={styles.gray}>Type</p>
                        <h5 className={styles.fixedColor}>Fixed Price</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-3">
              <div className={styles.subCard}>
                <figure className={styles.dashboardSubcardImage}>
                  <Image
                    // layout="fill"
                    src={AnimeSailorClub}
                    className={`${styles.subCard} ${styles.subCardImage} img-fluid`}
                    alt=""
                  ></Image>
                  <button className={styles.hideButton}>Buy now</button>
                  <div className={styles.subcardOverlay}></div>
                </figure>

                <div className={styles.innerCard}>
                  <div className={styles.upper}>
                    <div className={styles.upLeft}>
                      <div className={styles.upHeading}>
                        <div className={styles.upHead}>
                          <h3 className={styles.upLeftTxt1}>Rarible </h3>
                          <Image
                            src={hotDropTickSvg}
                            className={`${styles.hotDropTickSvg1} img-fluid`}
                            alt=""
                          ></Image>
                        </div>
                        <div className={styles.sideImage}>
                          <Image
                            src={heartLineSvg}
                            className={`${styles.likeButton} img-fluid`}
                          ></Image>
                          <span className={styles.spantxt}>2.3K</span>
                        </div>
                      </div>
                      <h2 className={`${styles.upLeftTxt2}`}>
                        AnimeSailorClub
                      </h2>
                    </div>
                    <div className={styles.upRight}>
                      <span className={styles.likes}></span>
                    </div>
                  </div>

                  <div className={styles.lower}>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <p className={styles.gray}>Price</p>
                        <div className={styles.bottomDiv}>
                          <h5 className={styles.fixedColor}>
                            <Image
                              src={ethereumSvg}
                              className={styles.ethereumSvg}
                              alt=""
                            ></Image>
                            1.1ETH
                          </h5>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <p className={styles.gray}>Type</p>
                        <h5 className={styles.fixedColor}>Fixed Price</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className={styles.subCard}>
                <figure className={styles.dashboardSubcardImage}>
                  <Image
                    // layout="fill"
                    src={AnimeSailorClub}
                    className={`${styles.subCard} ${styles.subCardImage} img-fluid`}
                    alt=""
                  ></Image>
                  <button className={styles.hideButton}>Buy now</button>
                  <div className={styles.subcardOverlay}></div>
                </figure>

                <div className={styles.innerCard}>
                  <div className={styles.upper}>
                    <div className={styles.upLeft}>
                      <div className={styles.upHeading}>
                        <div className={styles.upHead}>
                          <h3 className={styles.upLeftTxt1}>Rarible </h3>
                          <Image
                            src={hotDropTickSvg}
                            className={`${styles.hotDropTickSvg1} img-fluid`}
                            alt=""
                          ></Image>
                        </div>
                        <div className={styles.sideImage}>
                          <Image
                            src={heartLineSvg}
                            className={`${styles.likeButton} img-fluid`}
                          ></Image>
                          <span className={styles.spantxt}>2.3K</span>
                        </div>
                      </div>
                      <h2 className={`${styles.upLeftTxt2}`}>
                        AnimeSailorClub
                      </h2>
                    </div>
                    <div className={styles.upRight}>
                      <span className={styles.likes}></span>
                    </div>
                  </div>

                  <div className={styles.lower}>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <p className={styles.gray}>Price</p>
                        <div className={styles.bottomDiv}>
                          <h5 className={styles.fixedColor}>
                            <Image
                              src={ethereumSvg}
                              className={styles.ethereumSvg}
                              alt=""
                            ></Image>
                            1.1ETH
                          </h5>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <p className={styles.gray}>Type</p>
                        <h5 className={styles.fixedColor}>Fixed Price</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className={styles.subCard}>
                <figure className={styles.dashboardSubcardImage}>
                  <Image
                    // layout="fill"
                    src={AnimeSailorClub}
                    className={`${styles.subCard} ${styles.subCardImage} img-fluid`}
                    alt=""
                  ></Image>
                  <button className={styles.hideButton}>Buy now</button>
                  <div className={styles.subcardOverlay}></div>
                </figure>

                <div className={styles.innerCard}>
                  <div className={styles.upper}>
                    <div className={styles.upLeft}>
                      <div className={styles.upHeading}>
                        <div className={styles.upHead}>
                          <h3 className={styles.upLeftTxt1}>Rarible </h3>
                          <Image
                            src={hotDropTickSvg}
                            className={`${styles.hotDropTickSvg1} img-fluid`}
                            alt=""
                          ></Image>
                        </div>
                        <div className={styles.sideImage}>
                          <Image
                            src={heartLineSvg}
                            className={`${styles.likeButton} img-fluid`}
                          ></Image>
                          <span className={styles.spantxt}>2.3K</span>
                        </div>
                      </div>
                      <h2 className={`${styles.upLeftTxt2}`}>
                        AnimeSailorClub
                      </h2>
                    </div>
                    <div className={styles.upRight}>
                      <span className={styles.likes}></span>
                    </div>
                  </div>

                  <div className={styles.lower}>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <p className={styles.gray}>Price</p>
                        <div className={styles.bottomDiv}>
                          <h5 className={styles.fixedColor}>
                            <Image
                              src={ethereumSvg}
                              className={styles.ethereumSvg}
                              alt=""
                            ></Image>
                            1.1ETH
                          </h5>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <p className={styles.gray}>Type</p>
                        <h5 className={styles.fixedColor}>Fixed Price</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className={styles.subCard}>
                <figure className={styles.dashboardSubcardImage}>
                  <Image
                    // layout="fill"
                    src={AnimeSailorClub}
                    className={`${styles.subCard} ${styles.subCardImage} img-fluid`}
                    alt=""
                  ></Image>
                  <button className={styles.hideButton}>Buy now</button>
                  <div className={styles.subcardOverlay}></div>
                </figure>

                <div className={styles.innerCard}>
                  <div className={styles.upper}>
                    <div className={styles.upLeft}>
                      <div className={styles.upHeading}>
                        <div className={styles.upHead}>
                          <h3 className={styles.upLeftTxt1}>Rarible </h3>
                          <Image
                            src={hotDropTickSvg}
                            className={`${styles.hotDropTickSvg1} img-fluid`}
                            alt=""
                          ></Image>
                        </div>
                        <div className={styles.sideImage}>
                          <Image
                            src={heartLineSvg}
                            className={`${styles.likeButton} img-fluid`}
                          ></Image>
                          <span className={styles.spantxt}>2.3K</span>
                        </div>
                      </div>
                      <h2 className={`${styles.upLeftTxt2}`}>
                        AnimeSailorClub
                      </h2>
                    </div>
                    <div className={styles.upRight}>
                      <span className={styles.likes}></span>
                    </div>
                  </div>

                  <div className={styles.lower}>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <p className={styles.gray}>Price</p>
                        <div className={styles.bottomDiv}>
                          <h5 className={styles.fixedColor}>
                            <Image
                              src={ethereumSvg}
                              className={styles.ethereumSvg}
                              alt=""
                            ></Image>
                            1.1ETH
                          </h5>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <p className={styles.gray}>Type</p>
                        <h5 className={styles.fixedColor}>Fixed Price</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className={styles.subCard}>
                <figure className={styles.dashboardSubcardImage}>
                  <Image
                    // layout="fill"
                    src={AnimeSailorClub}
                    className={`${styles.subCard} ${styles.subCardImage} img-fluid`}
                    alt=""
                  ></Image>
                  <button className={styles.hideButton}>Buy now</button>
                  <div className={styles.subcardOverlay}></div>
                </figure>

                <div className={styles.innerCard}>
                  <div className={styles.upper}>
                    <div className={styles.upLeft}>
                      <div className={styles.upHeading}>
                        <div className={styles.upHead}>
                          <h3 className={styles.upLeftTxt1}>Rarible </h3>
                          <Image
                            src={hotDropTickSvg}
                            className={`${styles.hotDropTickSvg1} img-fluid`}
                            alt=""
                          ></Image>
                        </div>
                        <div className={styles.sideImage}>
                          <Image
                            src={heartLineSvg}
                            className={`${styles.likeButton} img-fluid`}
                          ></Image>
                          <span className={styles.spantxt}>2.3K</span>
                        </div>
                      </div>
                      <h2 className={`${styles.upLeftTxt2}`}>
                        AnimeSailorClub
                      </h2>
                    </div>
                    <div className={styles.upRight}>
                      <span className={styles.likes}></span>
                    </div>
                  </div>

                  <div className={styles.lower}>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <p className={styles.gray}>Price</p>
                        <div className={styles.bottomDiv}>
                          <h5 className={styles.fixedColor}>
                            <Image
                              src={ethereumSvg}
                              className={styles.ethereumSvg}
                              alt=""
                            ></Image>
                            1.1ETH
                          </h5>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <p className={styles.gray}>Type</p>
                        <h5 className={styles.fixedColor}>Fixed Price</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className={styles.subCard}>
                <figure className={styles.dashboardSubcardImage}>
                  <Image
                    // layout="fill"
                    src={AnimeSailorClub}
                    className={`${styles.subCard} ${styles.subCardImage} img-fluid`}
                    alt=""
                  ></Image>
                  <button className={styles.hideButton}>Buy now</button>
                  <div className={styles.subcardOverlay}></div>
                </figure>

                <div className={styles.innerCard}>
                  <div className={styles.upper}>
                    <div className={styles.upLeft}>
                      <div className={styles.upHeading}>
                        <div className={styles.upHead}>
                          <h3 className={styles.upLeftTxt1}>Rarible </h3>
                          <Image
                            src={hotDropTickSvg}
                            className={`${styles.hotDropTickSvg1} img-fluid`}
                            alt=""
                          ></Image>
                        </div>
                        <div className={styles.sideImage}>
                          <Image
                            src={heartLineSvg}
                            className={`${styles.likeButton} img-fluid`}
                          ></Image>
                          <span className={styles.spantxt}>2.3K</span>
                        </div>
                      </div>
                      <h2 className={`${styles.upLeftTxt2}`}>
                        AnimeSailorClub
                      </h2>
                    </div>
                    <div className={styles.upRight}>
                      <span className={styles.likes}></span>
                    </div>
                  </div>

                  <div className={styles.lower}>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <p className={styles.gray}>Price</p>
                        <div className={styles.bottomDiv}>
                          <h5 className={styles.fixedColor}>
                            <Image
                              src={ethereumSvg}
                              className={styles.ethereumSvg}
                              alt="etheremsvg"
                            ></Image>
                            1.1ETH
                          </h5>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <p className={styles.gray}>Type</p>
                        <h5 className={styles.fixedColor}>Fixed Price</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className={styles.subCard}>
                <figure className={styles.dashboardSubcardImage}>
                  <Image
                    // layout="fill"
                    src={AnimeSailorClub}
                    className={`${styles.subCard} ${styles.subCardImage} img-fluid`}
                    alt=""
                  ></Image>
                  <button className={styles.hideButton}>Buy now</button>
                  <div className={styles.subcardOverlay}></div>
                </figure>

                <div className={styles.innerCard}>
                  <div className={styles.upper}>
                    <div className={styles.upLeft}>
                      <div className={styles.upHeading}>
                        <div className={styles.upHead}>
                          <h3 className={styles.upLeftTxt1}>Rarible </h3>
                          <Image
                            src={hotDropTickSvg}
                            className={`${styles.hotDropTickSvg1} img-fluid`}
                            alt=""
                          ></Image>
                        </div>
                        <div className={styles.sideImage}>
                          <Image
                            src={heartLineSvg}
                            className={`${styles.likeButton} img-fluid`}
                          ></Image>
                          <span className={styles.spantxt}>2.3K</span>
                        </div>
                      </div>
                      <h2 className={`${styles.upLeftTxt2}`}>
                        AnimeSailorClub
                      </h2>
                    </div>
                    <div className={styles.upRight}>
                      <span className={styles.likes}></span>
                    </div>
                  </div>

                  <div className={styles.lower}>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <p className={styles.gray}>Price</p>
                        <div className={styles.bottomDiv}>
                          <h5 className={styles.fixedColor}>
                            <Image
                              src={ethereumSvg}
                              className={styles.ethereumSvg}
                              alt=""
                            ></Image>
                            1.1ETH
                          </h5>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <p className={styles.gray}>Type</p>
                        <h5 className={styles.fixedColor}>Fixed Price</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- --------------------------------------------Section hotDropS Ends ------------------------------------------------------------------- --> */}

    {/* *******************Post Collection Starts************************************ */}
    <section className={styles.createAndSell}>
      <div className={styles.heading}>
        <h2 className={styles.Txtheading2}>
          Create and sell your
          <span className={styles.txtbold}> NFTs</span>
        </h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4">
            <div className={styles.contentCard}>
              <figure className={styles.contentImage}>
                <Image src={crateSvg} alt=""></Image>
              </figure>
              <div>
                <h3 className={styles.contentHeading}>
                  Create your collection
                </h3>
                <p className={styles.contentCardPara}>
                  Click My Collections and set up your collection. Add social
                  links, a description, profile & banner images, and set a
                  secondary sales fee.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className={styles.contentCard}>
              <figure className={styles.contentImage}>
                <Image
                  src={add_nft}
                  // className={styles.contentImage}
                  alt=""
                ></Image>
              </figure>
              <div>
                <h3 className={styles.contentHeading}>Add your NFTs</h3>
                <p className={styles.contentCardPara}>
                  Upload your work (image, video, audio, or 3D art), add a
                  title and description, and customize your NFTs with
                  properties, stats, and unlockable content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className={styles.contentCard}>
              <figure className={styles.contentImage}>
                <Image src={sale} alt=""></Image>
              </figure>
              <div>
                <h3 className={styles.contentHeading}>List them for sale</h3>
                <p className={styles.contentCardPara}>
                  Choose between auctions, fixed-price listings, and
                  declining-price listings. You choose how you want to sell
                  your NFTs, and we help you sell them!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* *******************Post collection Ends************************************ */}

    {/************************** footer section starts **********************/}
    <section className={styles.footer}>
      <footer className=" text-center text-lg-start">
        {/* <!-- Grid container --> */}
        <div className="container p-4">
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
                <li className={styles.text_decore1}>
                  <a href="#!" className={styles.textDecor}>
                    Terms & Condition
                  </a>
                </li>
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
                <Image src={insta} alt=""></Image>
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
    <ToastContainer/>
  </div>
  );
}
export default withAuth(Home)