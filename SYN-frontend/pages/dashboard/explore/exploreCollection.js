import React from "react";
import AuthHeader from "../../../common/navigation/authHeader";
import styles from "../../../styles/exploreCollection.module.css";
import leftIMAGE from "../../../public/images/AnimeSailorClub@2x.png";
import Image from "next/image";
import photo from "../../../public/images/photo.png";
import Yolanda from "../../../public/images/Yolanda.png";
import tickMark from "../../../public/images/tick.svg";
import ETH from "../../../public/images/ethereum.svg";
import grayheart from "../../../public/images/heart_grey.png";
import eye from "../../../public/images/eye.png";
export default function ExploreCollection() {
  return (
    <div className="container">
      <AuthHeader />
      <div className={styles.main_explore}>
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div
              className={`${styles.leftSide} d-flex justify-content-center align-item-center`}
            >
              {/* <img src={leftIMAGE} alt="" /> */}
              <Image src={leftIMAGE} className="img-fluid"></Image>
            </div>
          </div>

          <div className="col-lg-6 col-sm-12">
            <div className={`${styles.rightSide}`}>
              <h2 className={styles.Head_text}>AnimeSailorClub</h2>
              <div className={styles.buttons_main}>
              <span className={styles.artspan}>
              <Image src={photo} alt="art-image" ></Image>
            
              <a href="" className={styles.art_txt}>Art</a>
              </span>
              <span className={styles.artspan}>
              <Image src={eye} alt="art-image"></Image>
            
              <a href="" className={styles.art_txt}>30K</a>
              </span>
              <span className={styles.artspan}>
              <Image src={grayheart} alt="art-image" ></Image>
            
              <a href="" className={styles.art_txt}>6.7K</a>
              </span>

              <span className={styles.artspan_timer}>

            
              <a href="" className={styles.art_txt_timer}>2D : 17H : 40M : 42S</a>
              </span>
              </div>

              <div className={styles.explorePara}>
                <p className={styles.explore_paratext}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren
                </p>
              </div>
              <div className={styles.SubCollection}>
                <div className={styles.Creator}>
                  <h2 className={styles.Creator_text}>Creator</h2>
                  <div className={styles.subCreator}>
                    <div className={styles.sub_images}>
                      <Image src={Yolanda} alt="creator-img"></Image>
                      <Image src={tickMark}></Image>
                    </div>

                    <h2 className={styles.creatorName}>Yolanda</h2>
                  </div>
                </div>
                <div className={styles.Creator}>
                  <h2 className={styles.Creator_text}>Owner</h2>
                  <div className={styles.subCreator}>
                    <Image src={Yolanda} alt="creator-img"></Image>
                    {/* <Image src={tickMark}></Image> */}
                    <h2 className={styles.creatorName}>Yolanda</h2>
                  </div>
                </div>
              </div>
              <div className={styles.sub_lower}>
                <h2 className={styles.Properties}>Properties</h2>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className={styles.Divpropertie}>
                      <h2 className={styles.propertieContent}>Background</h2>
                      <h2 className={styles.propertieDetail}>Yellowish Sky</h2>
                      <h2 className={styles.sub_details}>
                        85% have this trait
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className={styles.Divpropertie}>
                      <h2 className={styles.propertieContent}>Eyes</h2>
                      <h2 className={styles.propertieDetail}>Purple Eyes</h2>
                      <h2 className={styles.sub_details}>
                      14% have this trait
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className={styles.Divpropertie}>
                      <h2 className={styles.propertieContent}>Nose</h2>
                      <h2 className={styles.propertieDetail}>Small Nose</h2>
                      <h2 className={styles.sub_details}>
                      45% have this trait
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className={styles.Divpropertie}>
                      <h2 className={styles.propertieContent}>Mouth</h2>
                      <h2 className={styles.propertieDetail}>Smile Red Lip</h2>
                      <h2 className={styles.sub_details}>
                      61% have this trait
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className={styles.Divpropertie}>
                      <h2 className={styles.propertieContent}>Neck</h2>
                      <h2 className={styles.propertieDetail}>Pink Ribbon</h2>
                      <h2 className={styles.sub_details}>
                      35% have this trait
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className={styles.Divpropertie}>
                      <h2 className={styles.propertieContent}>Hair</h2>
                      <h2 className={styles.propertieDetail}>Pink Short</h2>
                      <h2 className={styles.sub_details}>
                      27% have this trait
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className={styles.Divpropertie}>
                      <h2 className={styles.propertieContent}>Accessories</h2>
                      <h2 className={styles.propertieDetail}>Heart Necklace</h2>
                      <h2 className={styles.sub_details}>
                      33% have this trait
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className={styles.Divpropertie}>
                      <h2 className={styles.propertieContent}>Clothes</h2>
                      <h2 className={styles.propertieDetail}>Casual Purple</h2>
                      <h2 className={styles.sub_details}>
                      78% have this trait
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className={styles.Divpropertie}>
                      <h2 className={styles.propertieContent}>Hat</h2>
                      <h2 className={styles.propertieDetail}>Cute Panda</h2>
                      <h2 className={styles.sub_details}>
                      62% have this trait
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.pricetext}>
                <h2 className={styles.price}>Price</h2>
                <div className={styles.price_content}>
                  <sapn className={styles.Eth_sapn}>
                    <Image src={ETH} className={styles.ETHIMG}></Image>
                  </sapn>

                  <h2 className={styles.price_amount}>0.059 ETH</h2>
                </div>
              </div>
              <div className={styles.pricebuttons}>
                <button className={styles.Buynow_btn}>Buy Now</button>
                <button className={styles.Bid_btn}>Place a Bid</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
