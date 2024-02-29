import React from "react";
import AuthHeader from "../../../common/navigation/authHeader";
import styles from "../../../styles/dashboardprofile.module.css";
import Footer from "../../../common/navigation/footer";
import {
  changePasswordValidation,
  changePasswordEmailValidation,
} from "../../../helpers/helpers";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { authHeaderAction, changePasswordAction } from "../../../action";
import withAuth from "../../../helpers/hoc";
import show from "../../../public/images/show.svg";
import hide from "../../../public/images/hide.svg";
import Router from "next/router";
 function ChangePassword() {
  //testing for protected routing:
//   let token
//   if(typeof window !== 'undefined'){
//    token =JSON.parse(localStorage.getItem('token'));
//   }
//   // if(!localStorage){
//   //   Router.push('/')
//   // }
//   useEffect(()=>{
//   if(token){
//  Router.push("/profile/editprofile/changePassword")
//   }else{
//    Router.push("/");
//   }
// }, []);

  //old password eye state
  const [eyeToggle, setEyeToggle] = useState(true);
  const [eye, setEye] = useState("password");
  const [eyeImage, setEyeImage] = useState(hide);
  //new pass word eye toggle state:
  const [eyeToggles, setEyeToggles] = useState(true);
  const [eyes, setEyes] = useState("password");
  const [eyeImages, setEyeImages] = useState(hide);
  //eye toggle function::
  function handleNewPasswordToggle() {
    setEyeToggles(!eyeToggles);
    if (eyeToggles == true) {
      setEyes("text");
      setEyeImages(show);
    } else if (eyeToggles == false) {
      setEyes("password");
      setEyeImages(hide);
    }
  }
  //state for confirm password eyey toggle:
  const [eyeToggless, setEyeToggless] = useState(true);
  const [eyess, setEyess] = useState("password");
  const [eyeImagess, setEyeImagess] = useState(hide);
  // confirm password eye toggle function::
  function handleConfirmPasswordToggle() {
    setEyeToggless(!eyeToggless);
    if (eyeToggless == true) {
      setEyess("text");
      setEyeImagess(show);
    } else if (eyeToggless == false) {
      setEyess("password");
      setEyeImagess(hide);
    }
  }
  const dispatch = useDispatch();
  //Initial state declaration:
  const [user, setUser] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  //validation state:
  const [isValid, setIsValid] = useState("");
  const [error, setError] = useState({});
  //form handlechange:
  function handleChange(event) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  //handling form validation:
  const validate = () => {
    const res = changePasswordValidation(
      user.oldPassword,
      user.newPassword,
      user.confirmPassword
    );
    setError(res.errors);
    isValid = res.formIsValid;
    setIsValid(isValid);
  };
  //seperate validation for email
  // const validateEmail = () => {
  //   const res = changePasswordEmailValidation(user.email);
  //   setError(res.errors);
  //   isValid = res.formIsValid;
  // };
  //handle form submission:
  const handleSubmit = (event) => {
    event.preventDefault();
    validate();
    if (isValid == true) {
      const userDetails = {
        old_password: user.oldPassword,
        new_password: user.newPassword,
        confirm_password: user.confirmPassword,
      };
      dispatch(changePasswordAction(userDetails));
    }
  };

  //getting state from redux:
  const userEmail = useSelector((state) => state.loggedInReducer.userData);
  useEffect(() => {
    if (userEmail) {
      setUser({ ...user, email: userEmail.email });
    }
  }, [userEmail]);

  //eye toggle:
  function handlePasswordToggle() {
    setEyeToggle(!eyeToggle);
    // console.log("$$$$$$$", eyeToggle);
    if (eyeToggle == true) {
      // console.log("!!!!!!!!", eyeToggle);
      setEye("text");
      setEyeImage(show);
    } else if (eyeToggle == false) {
      // console.log("****************88", eyeToggle);
      setEye("password");
      setEyeImage(hide);
    }
  }
  return (
    <div className={styles.background_main}>
      <div className={`container`}>
        <AuthHeader />
        <div className={`${styles.main}`}>
          <div className={styles.left}>
            <div className={styles.left_content}>
              <Link href="/profile/editprofile/editprofile">
                <button className={styles.Edit_button}>
                  Edit Profile Image
                </button>
              </Link>
              <Link href="/profile/editprofile/personalInfo">
                <button className={styles.Edit_button}>
                  Personal Information
                </button>
              </Link>
              <Link href="/profile/editprofile/changePassword">
                <button className={styles.Edit_button_1}>
                  Change Password
                </button>
              </Link>
              <Link href="/profile/editprofile/setting">
                <button className={styles.Edit_button}>
                  Notification Settings
                </button>
              </Link>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.right}>
              <div className={styles.sub_right}>
                <div>
                  <h2 className={styles.changeHead}>Create Your Password</h2>
                  <p className={styles.changePara}>
                    Passwords are a critical part of information and network
                    security. Passwords serve to protect user accounts but a
                    poorly chosen password, if compromised, could put the entire
                    network at risk.
                  </p>
                </div>
                <span className={styles.lineHR}></span>
                <div className={styles.sub_right}>
                  <div
                    className={`${styles.first_input} ${styles.field_wrap} `}
                  >
                    <div className={styles.main_email}>
                    <label htmlFor="" className={styles.headName}>
                      Email
                    </label>
                    <h2 className={styles.firstName}>{user.email ? user.email : "Enter Email"}</h2>
                    </div>
                    
     
                    <div className={styles.top}>
                      <div className={styles.field_wrap}>
                        <label htmlFor="" className={styles.headName}>
                          Enter Old Password
                        </label>
                        <div className={styles.eyeBUTTON}>
                          <input
                            type={eye}
                            id="passwordID"
                            maxLength={25}
                            name="oldPassword"
                            placeholder="Old Password"
                            className={styles.firstName}
                            onChange={handleChange}
                            onKeyUp={validate}
                          ></input>
                          <span className={styles.iconWrapper}>
                            <Image
                              src={eyeImage}
                              alt="eye-svg"
                              className={styles.eyeButton}
                              onClick={handlePasswordToggle}
                            ></Image>
                          </span>
                        </div>
                          <span id="span_email" className={styles.errMsg}>
                        {error["passError"]}
                      </span>
                      &nbsp;
                      </div>
                    
                      <div className={styles.field_wrap}>
                        <label htmlFor="" className={styles.headName}>
                          Create New Password
                        </label>
                        <div className={styles.eyeBUTTON}>
                          <input
                            type={eyes}
                            id="passwordID"
                            maxLength={25}
                            name="newPassword"
                            placeholder="New Password"
                            className={styles.firstName}
                            onChange={handleChange}
                            onKeyUp={validate}
                          ></input>
                          <span className={styles.iconWrapper}>
                            <Image
                              src={eyeImages}
                              alt="eye-svg"
                              className={styles.eyeButton}
                              onClick={handleNewPasswordToggle}
                            ></Image>
                          </span>
                        </div>
                        <span id="span_email" className={styles.errMsg}>
                          {error["newPassError"]}
                        </span>
                        &nbsp;
                      </div>
                    </div>
                    <div
                    className={`${styles.first_input} ${styles.field_wrap} `}
                  >
                    <label htmlFor="" className={styles.headName}>
                      Confirm Password
                    </label>
                    <div className={styles.eyeBUTTON}>
                      <input
                        type={eyess}
                        id="passwordID"
                        name="confirmPassword"
                        placeholder="New Password"
                        className={styles.firstName}
                        onChange={handleChange}
                        onKeyUp={validate}
                      ></input>
                      <span className={styles.iconWrapper}>
                        <Image
                          src={eyeImagess}
                          alt="eye-svg"
                          className={styles.eyeButton}
                          onClick={handleConfirmPasswordToggle}
                        ></Image>
                      </span>
                    </div>
                    <span id="span_email" className={styles.errMsg}>
                      {error["confirmPassError"]}
                    </span>
                    &nbsp;
                  </div>
                  </div>
      

                  <div>
                    <div className={styles.editForm}>
                      <div className={styles.save}>
                        <button className={styles.saveBTN}>Save</button>
                      </div>
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
export default withAuth(ChangePassword)