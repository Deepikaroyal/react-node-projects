import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo.svg";
import Card from "../../../common/component/cards/card";
import styles from "../../../styles/Dashboard.module.css";
import AnimeSailorClub from "../../../public/images/AnimeSailorClub.png";
import heartLineSvg from "../../../public/images/heart_line.svg";
import hotDropTickSvg from "../../../public/images/hot_drop_tick.svg";
import ethereumSvg from "../../../public/images/ethereum.svg";
import crateSvg from "../../../public/images/crate.svg";
import search from "../../../public/images/search.svg";
import rightArrow from "../../../public/images/right_arrow_footer.png";
import Header from "../../../common/navigation/Header";
import AuthHeader from "../../../common/navigation/authHeader";
import searchSvg from "../../../public/images/search.svg";
import Footer from "../../../common/navigation/footer";
export default function explore() {
  return (
    <div>
      <div className="container">
        <AuthHeader />

        {/* Main heading */}
        <div className={styles.heading}>
          <h2 className={styles.HeadFont}>Explore&nbsp;
          <span className={styles.HeadFontspan}>Collections</span>
          </h2>
        </div>
        {/* main heading completed */}

        <section className="hotdrops">
          <div className={styles.instaCards}>
            <div className="container">
              <div className="row">
                <div className={styles.dropsSectionBTn}>
                  <div className={`${styles.search_wrap} ${styles.search_wrap_1}`}>
                    <div className={styles.search_box}>
                      <input
                        type="text"
                        className={styles.input}
                        placeholder="search..."
                      
                      />
                      <div className={`${styles.btn} ${styles.btn_common}`}>
                        <Image src={search} alt="search_img" className={styles.searchIMG} ></Image>
                      </div>
                    </div>
                  </div>

                  <select
                    name="categories"
                    id="dropCategories"
                    className={styles.dropCategories}
                  >
                    <option value="All Categories">All Categories</option>
                    <option value="Solana NFTs">Solana NFTs</option>
                    <option value="Domain Name">Domain Name</option>
                    <option value="Art">Art</option>
                    <option value="Music">Music</option>
                    <option value="Sport">Sport</option>
                    <option value="Photography">Photography</option>
                    <option value="Trading card">Trading cards</option>
                    <option value="Utility">Audi</option>
                    <option value="Virtual word">Virtual word</option>
                  </select>
                  <select name="Buy Now" className={styles.dropCategories}>
                    <option value="Buy Now">Buy Now</option>
                    <option value="Fixed price">Fixed Price</option>
                    <option value="Time Auction">Time Auction</option>
                    <option value="Make a offer">Make a offer</option>
                  </select>
                  <select name="All Items" className={styles.dropCategories}>
                    <option value="All Items">All Items</option>
                    <option value="Single Items">Single Items</option>
                    <option value="Multiple Items">Multiple Items</option>
                  </select>
                  <select name="All Items" className={styles.dropCategories}>
                    <option value="Price Range">Price Range</option>

                    {/* <ul>
                      <li>
                      <input type="number" id="quantity" name="quantity" min="1" max="5"></input>
                      <br />asdxfghjnmk,l./
                      <input type="number" id="quantity" name="quantity" min="1" max="5"></input>
                      </li>
                    </ul>
                   
                    
                    <h6>Min Price</h6> */}

                    <option value="Min Price">Min Price</option>
                    <option value="Max Price">Max Price</option>
                  </select>
                  <select
                    name="Sort Order"
                    id=""
                    className={styles.dropCategories}
                  >
                    <option value="Sort Order">Sort Order</option>
                    <option value="Recently Soon">Recently Listed</option>
                    <option value="Ending Soon">Ending Soon</option>
                    <option value="Price Low">Price Low - Hight</option>
                    <option value="Price Hight">Price Hight - Low</option>
                    <option value="Most favorited">Most favorited</option>
                  </select>
                  <div />

                  {/* <Card /> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* card section ends */}
      <div className={styles.LoadButton}>
        <button className={`${styles.headerBtn} ${styles.headerBtn1} border-0`}>
          Load More
        </button>
      </div>

      {/* footer starts */}
      <Footer />
      {/* footer end */}
    </div>
  );
}
