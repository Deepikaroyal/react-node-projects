import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Blendermadehand from "../../../public/images/Blender made hand.png";
import styles from "../../../styles/Dashboard.module.css";
import face from "../../../public/images/3D Face.png";
import WZRDS from "../../../public/images/WZRDS.png";
import Blendermadehand2 from "../../../public/images/Blender made hand-1.png";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      centerPadding: "70px",
      slidesToShow: 4,
      speed: 500,
      dots: true,
      arrows: true,
      // gap: "1.2rem"
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        {/* <h2>Center Mode</h2> */}
        <Slider {...settings}>
          <div className={styles.sliderContainer}>
            <Image
              src={Blendermadehand}
              alt=""
              className={styles.sliderImages}
            ></Image>
            <div className={styles.slide_head}>
              <h3 className={styles.bottomTxt}>Blender made hand</h3>
              <p className={styles.bottomPara}>New Community Marketplace</p>
            </div>
          </div>
          <div className={styles.sliderContainer}>
            <Image src={face} alt="" className={styles.sliderImages}></Image>
            <div className={styles.slide_head}>
              <h3 className={styles.bottomTxt}>Blender made hand</h3>
              <p className={styles.bottomPara}>New Community Marketplace</p>
            </div>
          </div>
          <div className={styles.sliderContainer}>
            <Image src={WZRDS} alt="" className={styles.sliderImages}></Image>
            <div className={styles.slide_head}>
              <h3 className={styles.bottomTxt}>Blender made hand</h3>
              <p className={styles.bottomPara}>New Community Marketplace</p>
            </div>
          </div>
          <div className={styles.sliderContainer}>
            <Image
              src={Blendermadehand2}
              alt=""
              className={styles.sliderImages}
            ></Image>
            <div className={styles.slide_head}>
              <h3 className={styles.bottomTxt}>Blender made hand</h3>
              <p className={styles.bottomPara}>New Community Marketplace</p>
            </div>
          </div>
          <div className={styles.sliderContainer}>
            <Image
              src={Blendermadehand}
              alt=""
              className={styles.sliderImages}
            ></Image>
            <div className={styles.slide_head}>
              <h3 className={styles.bottomTxt}>Blender made hand</h3>
              <p className={styles.bottomPara}>New Community Marketplace</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
