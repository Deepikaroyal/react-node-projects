import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Dashboard.module.css";
import AnimeSailorClub from "../../../public/images/AnimeSailorClub.png";
import heartLineSvg from "../../../public/images/heart_line.svg";
import hotDropTickSvg from "../../../public/images/hot_drop_tick.svg";
import ethereumSvg from "../../../public/images/ethereum.svg";
import crateSvg from "../../../public/images/crate.svg";
import { useSelector, useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import { createdCardAction } from "../../../action/dashboardActions";
export default function Card(props) {
  const [mode,setMode] = useState('')
  //  console.log("%%22~~~~~~~~2%",props)
    //state for created data:
const [list,setList] = useState([])
//dropdown state:
const[category,setCategory] = useState("")
    //state 
    const [name,setName] = useState("")
    // profile image state:
    const [profileImage, setProfileImage] = useState('')
  //base url :
  const baseURL = process.env.S3_ALLOW_URL
  //getting user id :
  const [userId, setUserId] =useState('')
  //getting user data from redux store :
  let  getUserId =  useSelector((state) => state.loggedInReducer.userData);
  useEffect(()=>{
    if(getUserId.id){
   setUserId(getUserId.id)
  //  console.log("******1111",getUserId.id)
    }
  },[getUserId])
  // console.log("%%%",userId)
  //redux hook :
  const dispatch = useDispatch();
  useEffect(()=>{
    setMode(props.mode)
    if(props.category){
    setCategory(props.category)
    }
    if(props.category!='All Categories' && userId!==""){
   const  userDetail = {
      dashboard:props.mode,
      user_id:userId,
      ...(props.category&&{categories_filter:props.category})
    }
  
    const userToken = localStorage.getItem("token");
    if(userToken){
    const  foundToken = JSON.parse(userToken);
   // console.log("!!!!!!",foundToken)
    dispatch(createdCardAction(foundToken,userDetail))
    }
  }
  else{
    if(userId!=="" && props.category==='All Categories'){
    const  userDetail = {
      dashboard:props.mode,
      user_id: userId,
    }
   
    const userToken = localStorage.getItem("token");
    if(userToken){
    const  foundToken = JSON.parse(userToken);
    dispatch(createdCardAction(foundToken,userDetail))
    }
  }
}
    
  },[props.category,userId,props.category])
  //getting data from redux
  const createdData = useSelector((state) => state.getCategoryReducer.createdData);
  //  console.log("@@@@@@@@@@",createdData.results)
  useEffect(()=>{
    if(createdData){
      setList(createdData.results)
      // console.log("@@@@@@@@@@",list)
    }
  },[createdData])
  return (
    <div>
      <div className={styles.instaCards}>
        <div className="container">
          <div className="row">
                    {/* wofkrg */}
               {list?.map((item,i)=>(
            <div className="col-12 col-sm-6 col-md-3"key={i}>
              <div className={styles.subCard}>
                <figure className={styles.dashboardSubcardImage}>
                  <img
                    src={item.post_image ?item.post_image :AnimeSailorClub}
                    className={`${styles.subCard} ${styles.subCardImage} img-fluid`}
                    alt=""
                  ></img>
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
                          <span className={styles.spantxt}>{item.total_like}</span>
                        </div>
                      </div>
                      <h2 className={`${styles.upLeftTxt2}`}>
                       {item.post_discription?item.post_discription:""}
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
                            {item.price?item.price:""} {item.crypto_type?'ETH':""}
                          </h5>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <p className={styles.gray}>Type</p>
                        <h5 className={styles.fixedColor}>{item.post_type?item.post_type:'Fixed Price'}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             ))} 
            {/* edefff */}

            {/* <div className="col-12 col-sm-6 col-md-3">
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
            </div> */}
            {/* <div className="col-12 col-sm-6 col-md-3">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
