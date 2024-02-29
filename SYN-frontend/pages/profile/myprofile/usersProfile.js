import React from "react";
import AuthHeader from "../../../common/navigation/authHeader";
import styles from "../../../styles/Profile.module.css";
import cover_img from "../../../public/images/Cover_picture.png";
import Image from "next/image";
import Display_picture from "../../../public/images/User_displayPicture.png";
import social from "../../../public/images/social.svg";
import youtube from "../../../public/images/youtube.svg";
import insta from "../../../public/images/insta.svg";
import linkedin from "../../../public/images/linkedin.svg";
import telegram from "../../../public/images/telegram.svg";
import add from "../../../public/images/add.png";
import ethereumSvg from "../../../public/images/ethereum.svg";
import SimpleDropdown from "../../../common/navigation/simpleDropdown";
import Card from "../../../common/component/cards/card";
import Footer from "../../../common/navigation/footer";

export default function UsersProfile() {
  return (
    <div>
      <div className="container">
        <AuthHeader />
        <div className={styles.wrap_main_div}>
          <div className={styles.upper_User_cover}>
            <Image src={cover_img} alt="cover_img"></Image>
          </div>
          <div className={styles.sub_upper_user}>
            <div className={styles.usersDisplay_picture}>
              <Image src={Display_picture} alt="Display_picture"></Image>
              <div className={styles.wrapper}>
                <h6 className={styles.Users_full_name}>Yolanda</h6>
                <p className={styles.users_handle}>@yolanda_official</p>
                <div className={styles.social_icons}>
                  <Image src={social} alt="" height={24} width={24}></Image>
                  <Image src={youtube} alt="" height={24} width={24}></Image>
                  <Image src={insta} alt="" height={24} width={24}></Image>
                  <Image src={telegram} alt="" height={24} width={24}></Image>

                  <Image src={linkedin} alt="" height={24} width={24}></Image>
                </div>
              </div>
            </div>

            <div>
              <ul className={styles.followListUL}>
                <li className={styles.followlist}>
                  <h2 className={styles.followhead}>Followers</h2>
                  <h2 className={styles.followhead}>2.5K</h2>
                </li>
                <li className={styles.followlist}>
                  <h2 className={styles.followhead}>Following</h2>
                  <h2 className={styles.followhead}>2.5K</h2>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.btn_follow}>
            <span className={styles.followspan}>
              <Image src={add} alt="art-image"></Image>

              <a href="" className={styles.Follow_txt}>
                Follow
              </a>
            </span>
            <span className={`${styles.followspan} ${styles.message_span}`}>
              <a
                href=""
                className={`${styles.Follow_txt} ${styles.message_span_text}`}
              >
                Message
              </a>
            </span>
          </div>
          <div className={styles.middleContent}>
            <div className={styles.middlepara}>
              <p className={styles.middleDetail}>24</p>
              <p className={styles.middleDetail1}>items</p>
            </div>
            <div className={styles.middlepara}>
              <p className={styles.middleDetail}>25</p>
              <p className={styles.middleDetail1}>Owners</p>
            </div>
            <div className={styles.middlepara}>
              <p className={styles.middleDetail}>
                {" "}
                <Image
                  src={ethereumSvg}
                  className={styles.ethereumSvg}
                  alt=""
                ></Image>
                1.1
              </p>
              <p className={styles.middleDetail1}>base price</p>
            </div>
            <div className={styles.middlepara}>
              <p className={styles.middleDetail}>
                <Image
                  src={ethereumSvg}
                  className={styles.ethereumSvg}
                  alt=""
                ></Image>
                9.9
              </p>
              <p className={styles.middleDetail1}> total volume</p>
            </div>
          </div>
          <div className="navTabs_custom">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Owner
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Create
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Favourites
                </button>
              </li>
            </ul>
            <SimpleDropdown />
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <Card />
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <Card />
              </div>
              <div
                className="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <Card />
              </div>
            </div>
          </div>
          <div>
            <div className={styles.LoadButton}>
              <button
                className={`${styles.headerBtn} ${styles.headerBtn1} border-0`}
              >
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
