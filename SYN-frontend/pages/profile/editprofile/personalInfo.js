import React, { useEffect } from "react";
import AuthHeader from "../../../common/navigation/authHeader";

import styles from "../../../styles/dashboardprofile.module.css";
import Image from "next/image";
import profile from "../../../public/images/Profile_picture.png";
import cover from "../../../public/images/Cover_pic.png";
import footer from "../../../common/navigation/footer";
import Footer from "../../../common/navigation/footer";
import { useDispatch } from "react-redux";
import { useState,useRef } from "react";
import { check_email, check_name, check_phone } from "../../../helpers/helpers";
import { authHeaderAction, personalInfoAction } from "../../../action";
import Link from "next/link";
import { useSelector } from "react-redux";
import Router from "next/router";
import withAuth from "../../../helpers/hoc";
 function PersonalInfo() {
  const [token ,setToken] = useState("")
  const dispatch = useDispatch();
  //Initial state declaration:
  const [user, setUser] = useState({
    name: "",
    // phone: "",
    // email: "",
    personalWeb: "",
    twitterName: "",
    fbLink: "",
    telegramLink: "",
    instaLink: "",
    discodelink: "",
  });
  //placeholder state:
  const [userTemp, setUserTemp] = useState({
    name: "",
    // phone: "",
    // email: "",
    personalWeb: "",
    twitterName: "",
    fbLink: "",
    telegramLink: "",
    instaLink: "",
    discodelink: "",
    private:false,
  });
  //state for private account:
  const [privateAccount, setPrivateAccount] = useState(false);

  //getting token from local stprage:
  useEffect(()=>{
    const userToken = localStorage.getItem("token");
   // console.log("$$$$",userToken)
    if(userToken){
    const  foundToken = JSON.parse(userToken);
    setToken(foundToken)
    }
    
  },[])
  //state for local storage:
  const [userDetail, setUserDetail] = useState();
  //validation state:
  const [isValid, setIsValid] = useState("");
  const [error, setError] = useState({});
  //form handlechange:
  function handleChange(event) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }
  //getting user data from redux store :
  let  getUserData =  useSelector((state) => state.loggedInReducer.userData);
 // let getUserData = JSON.parse(localStorage.getItem("userFilterData"));
   useEffect(()=>{
   if(getUserData){
  
    setUser({
      ...user,
      name: getUserData.full_name,
      email: getUserData.email,
      phone: getUserData.phone_no,
      discodelink: getUserData.user_social_handlers__discord,
      fbLink: getUserData.user_social_handlers__facebook,
      personalWeb: getUserData.user_social_handlers__personal_webs,
      telegramLink: getUserData.user_social_handlers__telegram,
      twitterName: getUserData.user_social_handlers__twitter,
      instaLink: getUserData.user_social_handlers__instagram,
    });
    setUserTemp({
      ...userTemp,
      name: getUserData.full_name,
      email: getUserData.email,
      phone: getUserData.phone_no,
      discodelink: getUserData.user_social_handlers__discord,
      fbLink: getUserData.user_social_handlers__facebook,
      personalWeb: getUserData.user_social_handlers__personal_webs,
      telegramLink: getUserData.user_social_handlers__telegram,
      twitterName: getUserData.user_social_handlers__twitter,
      instaLink: getUserData.user_social_handlers__instagram,
      private: getUserData.is_private,
    });
    setPrivateAccount(getUserData.is_private)
  }
},[getUserData])
// console.log("***111222**",userTemp)
// console.log("**66677***",user)
  //handling form validation :
  const validate = () => {
    const { name} = user;
    let isValid = check_name(name) 
    return isValid;
  };


  //form handle submit:
  const handleSubmit = (event) => {
    console.log("***`````````**",userTemp)
    console.log("**000000***",user)
    console.log(user.twitterName===userTemp.twitterName)
    //form data:
    event.preventDefault();
    validate();
    // const userDetails = {
    //   full_name: user.name,
    //   personal_webs: user.personalWeb,
    //   twitter: user.twitterName,
    //   facebook: user.fbLink,
    //   telegram: user.telegramLink,
    //   instagram: user.instaLink,
    //   discord: user.discodelink,
    //   is_private:privateAccount,
    // };
    //console.log("########",userDetails)

     let formdata = new FormData();
    if(userTemp.name!==user.name && userTemp.name!==""){
      formdata.append("full_name", user.name);
      }
     if(userTemp.personalWeb!==user.personalWeb && user.personalWeb!==""){
    formdata.append("personal_webs", user.personalWeb);
    }
  
    if(userTemp.twitterName!==user.twitterName && user.twitterName!==""){
    formdata.append("twitter", user.twitterName);
    }

    if(userTemp.fbLink!==user.fbLink && user.fbLink!==""){
    formdata.append("facebook", user.fbLink);
    }
    if(userTemp.telegramLink!==user.telegramLink && user.telegramLink!==""){
    formdata.append("telegram", user.telegramLink);
    }
    if(userTemp.instaLink!==user.instaLink && user.instaLink!==""){
      formdata.append("instaLink", user.instaLink);
      }
    if(userTemp.discodelink!==user.discodelink && user.discodelink!==""){
    formdata.append("discord", user.discodelink);
    }
    if(userTemp.private!==privateAccount){
      console.log("%22%%",userTemp.private)
    formdata.append("is_private",privateAccount);
    }
    for (let i of formdata) {
      console.log("(((((((((((((((((((",i);
    }
  //console.log("@@@@@",user.personalWeb)
  // console.log("33333",Array.from(formdata.keys()).length)
  if((Array.from(formdata.keys()).length)>0){
   dispatch(personalInfoAction(formdata));
  }
  //  console.log("$$$",token) 
  };
  //const res = useSelector((state) => state. editProfileReducer.apiStatus);
  
  // useEffect((res)=>{
  //   dispatch(authHeaderAction(token))
  // },[res])
  //function for cheked toggle:
   const checkedToggle=()=>{
   setPrivateAccount(!privateAccount)
   }

   const handleCancelButton=(e)=>{
    // e.preventDefault();
   Router.push("/profile/editprofile/editprofile")
   }
  return (
    <div>
      <div className="container">
        <AuthHeader />
        <div className={`${styles.main}`}>
          <div className={styles.left}>
            <div className={styles.left_content}>
            <Link href="/profile/editprofile/editprofile">
              <button className={styles.Edit_button}>Edit Profile Image</button>
              </Link>
              <button className={styles.Edit_button_1}>
                Personal Information
              </button>
              <Link href="/profile/editprofile/changePassword">
              <button className={styles.Edit_button}>Change Password</button>
              </Link>
              <Link href="/profile/editprofile/setting">
              <button className={styles.Edit_button}>
                Notification Settings
              </button>
              </Link>
            </div>
          </div>
          <form >
            <div className={styles.right}>
              <div className={styles.sub_right}>
                <div className={`${styles.first_input} ${styles.field_wrap} `}>
                  <label htmlFor="" className={styles.headName}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="name"
                    value={user.name ? user.name : ""}
                    placeholder="Enter your name"
                    className={styles.firstName}
                    onChange={handleChange}
                    onKeyUp={validate}
                  ></input>
                  <span id="span_name" className={styles.errMsg}>
                    {error["nameError"]}
                  </span>
                  &nbsp;
                </div>
                <div className={styles.top}>
                  <div className={styles.field_wrap}>
                    <label htmlFor="" className={styles.headName}>
                      Phone Number
                    </label>
                    <h2 className={styles.firstName}>{user.phone ? user.phone : "Phone Number"}</h2>
                
                  </div>
                  <div className={styles.field_wrap}>
                    <label htmlFor="" className={styles.headName}>
                      Email
                    </label>
                    <h2 className={styles.firstName}>{user.email ? user.email : "Enter Email"}</h2>
          
                  </div>
                </div>
                <div className={styles.top}>
                  <div className={styles.field_wrap}>
                    <label htmlFor="" className={styles.headName}>
                      Personal Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="personalWeb"
                      value={user.personalWeb ? user.personalWeb : ""}
                      placeholder=  "PersonalWeb Url"
                      className={styles.firstName}
                      onChange={handleChange}
                      onKeyUp={validate}
                    ></input>
                  </div>
                  <div className={styles.field_wrap}>
                    <label htmlFor="" className={styles.headName}>
                      Twitter Username
                    </label>
                    <input
                      type="txt"
                      id="username"
                      name="twitterName"
                      value={user.twitterName ? user.twitterName : ""}
                      placeholder="Enter your twitter username"
                      className={styles.firstName}
                      onChange={handleChange}
                      onKeyUp={validate}
                    ></input>
                  </div>
                </div>
                <div className={styles.top}>
                  <div className={styles.field_wrap}>
                    <label htmlFor="" className={styles.headName}>
                      Facebook
                    </label>
                    <input
                      type="url"
                      id="facebook"
                      name="fbLink"
                      value={user.fbLink ? user.fbLink : ""}
                      placeholder= "Facebook Url"
                      className={styles.firstName}
                      onChange={handleChange}
                      onKeyUp={validate}
                    ></input>
                  </div>
                  <div className={styles.field_wrap}>
                    <label htmlFor="" className={styles.headName}>
                      Telegram
                    </label>
                    <input
                      type="url"
                      id="telegram"
                      name="telegramLink"
                      value={user.telegramLink ? user.telegramLink : ""}
                      placeholder="Telegram Url"
                      className={styles.firstName}
                      onChange={handleChange}
                      onKeyUp={validate}
                    ></input>
                  </div>
                </div>
                <div className={styles.top}>
                  <div className={styles.field_wrap}>
                    <label htmlFor="" className={styles.headName}>
                      Instagram
                    </label>
                    <input
                      type="url"
                      id="instagram"
                      name="instaLink"
                      value={user.instaLink ? user.instaLink : ""}
                      placeholder="Instagram Url"
                      className={styles.firstName}
                      onChange={handleChange}
                      onKeyUp={validate}
                    ></input>
                  </div>
                  <div className={styles.field_wrap}>
                    <label htmlFor="" className={styles.headName}>
                      Discord
                    </label>
                    <input
                      type="url"
                      id="discord"
                      name="discodelink"
                      value={user.discodelink ? user.discodelink : ""}
                      placeholder="Discord Url"
                      className={styles.firstName}
                      onChange={handleChange}
                      onKeyUp={validate}
                    ></input>
                  </div>
                </div>

                <div>
                  <div className={styles.mode_content}>
                    <div className={styles.mode}>Private Account</div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="formSwitchCheckChecked"
                        checked={privateAccount}
                        onClick={checkedToggle}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="formSwitchCheckChecked"
                      ></label>
                    </div>
                  </div>
                  <div className={styles.editForm}>
                    <div className={styles.cancle}>
                      <button className={styles.cancleBTN} onClick={handleCancelButton}>Cancel</button>
                    </div>
                    <div className={styles.save}>
                      <button className={styles.saveBTN} onClick={handleSubmit}>Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.editFooter}>
        <Footer />
      </div>
    </div>
  );
}
export default withAuth( PersonalInfo)