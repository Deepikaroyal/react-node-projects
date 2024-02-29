import React, { useEffect, useState } from "react";
import styles from "../../styles/Auth.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import welcomelogo from "../../public/images/create_account.svg";
import cross from "../../public/images/close.png";
import PhoneInput from "react-phone-input-2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { signupAction, signupOtpAction } from "../../action/signupAction";
import store from "../../config/store";
import Router from "next/router";
import { singUpValidation } from "../../helpers/helpers.js";
import Verification from "./verification";
import { check_name } from "../../helpers/helpers.js";
import hide from "../../public/images/hide.svg";
import show from "../../public/images/show.svg";
import { verificationSignupResendAction,signupResetAction } from "../../action/signupAction";
// import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
const Signup = () => {
  //Initial state declaration:
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
    countryDialCode: "",
    phoneNumber: "",
  });
    //state to get data from phoneInput:
    const [phone, setPhone] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [fullPhoneString,setFullPhoneString] = useState("")
  //redux state:
  const signupApiStatus = useSelector((state) => state.signupReducer.userData);
  // console.log("@@@@",signupApiStatus )
  useEffect(() => {
    // console.log("@@@@", loginUser);
    if(signupApiStatus){
    if (signupApiStatus.apiStatus === 1) {
      childToggle();
      setUser({...user,fullname:signupApiStatus.full_name,email:signupApiStatus.email,
         password:signupApiStatus.password})
        // let countrycode = signupApiStatus.country_code
        // let phone = signupApiStatus.phone_no
        // let finalNumber = countrycode.concat(phone)
       // console.log("++++++++++++++++++",finalNumber)
        //setPhone(finalNumber)
      }
    }
  }, [signupApiStatus]);
  // console.log("checking store before hitting signup button:", userSignupData);
  const dispatch = useDispatch();

  //validation state:
  const [isValid, setIsValid] = useState("");
  const [error, setError] = useState({});
  //state for api status:
  const [status, setStatus] = useState("");
  //password eye button:
  const [eyeToggle, setEyeToggle] = useState(true);
  const [eye, setEye] = useState("password");
  const [eyeImage, setEyeImage] = useState(hide);
  //state for Otp:
  const [emailOtp, setEmailOtp] = useState("");
  const [phoneOtp, setPhoneOtp] = useState("");
  //state to render child component conditionally:
  const [childActive, setChildActive] = useState(false);
  //function for child toggling:
  const childToggle = () => {
    setChildActive(!childActive);
    //setIsValid(false);
  };
  //handling form input field:
  function handleChange(event) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  //handling for input change:
  const handleChange2 = async (phone, country) => {
     console.log('7789!!!',phone,'@@',country)
    let finalPhone = phone.replace(country.dialCode, "");
    setFullPhoneString(phone)
    //  console.log("____-+++",finalPhone)
    //  console.log("^^^^^",phoneNumber,'11111!!!',user.phoneNumber)
    // console.log("^^444^^^",user.phone)
     setCountryCode(country.dialCode);
    // setPhoneNumber(phone);
    setPhoneNumber(finalPhone);
    if (countryCode) {
      user.countryDialCode = countryCode;
    }
    if (finalPhone) {
      user.phoneNumber = finalPhone;
    }
    validate();
  };
  // console.log("code!!",user.countryDialCode)
  //validation function:
  const validate = () => {
    const res = singUpValidation(
      user.fullname,
      user.phoneNumber,
      user.email,
      user.password
    );
    setError(res.errors);
    isValid = res.formIsValid;
    setIsValid(isValid);
  };

  //handling cross button:
  const handleToggle = () => {
    //Router.push("/");
    window.location.href = "/";
  };
  //handling password toggling:
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
  //Handling form submission:
  const handleSubmit = (event) => {
    event.preventDefault();
    validate();
    if (isValid == true) {
      const userDetails = {
        full_name: user.fullname,
        email: user.email,
        password: user.password,
        country_code: user.countryDialCode,
        phone_no: user.phoneNumber,
        full_no: fullPhoneString,
      };
        //  console.log("@@@@", userDetails);
      dispatch(signupAction(userDetails));
      window.sessionStorage.setItem("signupData", JSON.stringify(userDetails));
    
    }
  };
  //handling callback:
  const passData = (emailOtp, phoneOtp) => {
    // console.log("child$$$$",emailOtp)
    //  const { emailOtp, phoneOtp } = childData;
    // console.log("@@@@@", emailOtp, "%%%%%%%", phoneOtp);
    setEmailOtp(emailOtp);
    setPhoneOtp(phoneOtp);

    const SignupOtpDetails = {
      email: user.email,
      email_otp: emailOtp,
      country_code: user.countryDialCode,
      phone_no: user.phoneNumber,
      phone_no_otp: phoneOtp,
      password: user.password,
      mode: "SIGNUP",
    };
    //  console.log("checking ^^^^^^^^^^^^^^^^^^^",SignupOtpDetails )
    dispatch(signupOtpAction(SignupOtpDetails));
 
  };
  //toggling parent component callback:
  const parentToggle = () => {
    dispatch(signupResetAction())
      setChildActive(!childActive);
      const  getData=JSON.parse(window.sessionStorage.getItem("signupData"));
      if(getData){
        setPhone(getData.country_code + getData.phone_no)
      }
      //setUser("");
    //}
  };
  //hitting resend api:
  const resendApi = () => {
    const userDetails = {
      email: user.email,
      send_to: "EMAIL",
    };
    dispatch(verificationSignupResendAction(userDetails));
  };
  const resendPhoneApi = () => {
    const userDetails = {
      phone_no: user.phoneNumber,
      send_to: "PHONE_NO",
    };
    dispatch(verificationSignupResendAction(userDetails));
  };
  //GETTING DATA FROM SESSION STORAGE:
useEffect(() => {
  const  getData=JSON.parse(window.sessionStorage.getItem("signupData"));
  // console.log("####",getData)
  if(getData){
   setUser({...user,email:getData.email,password:getData.password,fullname:getData.full_name,
    countryDialCode:getData.country_code,phoneNumber:getData.phone_no})
    if(getData.country_code && getData.phone_no){
      // console.log("phone@inside",phone)
    setPhone(getData.country_code + getData.phone_no)
    }
    console.log("phone",phone)
   setIsValid(true)
  }
  }, []);
  return (
    <div>
      {childActive === true ? (
        <Verification
          passData={passData}
          mode="signup"
          parentToggle={parentToggle}
          resendApi={resendApi}
          resendPhoneApi={resendPhoneApi}
        />
      ) : (
        <div className={`${styles.maincontent} ${styles.mainContentHead}`}>
          <Head>
            <title>Signup</title>
            <meta name="description" content="" />
          </Head>
          <div className={styles.loginFormWrapper}>
            {/* <div className={styles.container}> */}
            <div className={styles.loginForm}>
              <div
                className={`d-flex align-items-center justify-content-between`}
              >
                <div className={`d-flex align-items-center`}>
                  <Image
                    src={welcomelogo}
                    className={styles.Image1}
                    alt=""
                  ></Image>
                  <h4 className={styles.txtVerify}>Welcome to SYN!</h4>
                </div>

                {/* <Image src={cross}></Image> */}
                <Image src={cross} onClick={handleToggle}></Image>
              </div>

              <div className={styles.loginHead}>
                <p className={styles.headTXT}>
                  By creating an account you agree to our{" "}
                  <Link href="">
                    <a href="" className={styles.txtbold}>
                      Terms of Service&nbsp;
                    </a>
                  </Link>
                  <span className={styles.headTXT}>and</span>
                  <Link href="">
                    <a href="" className={styles.txtbold}>
                      &nbsp;Privacy Policy
                    </a>
                  </Link>
                  {/* <span > Privacy Policy</span> */}
                </p>
              </div>

              <span className={styles.line}></span>

              <form
                action=""
                className={styles.formMargin}
                onSubmit={handleSubmit}
              >
                <div>
                  <h3 className={styles.txtEnter}>Enter Full Name</h3>
                  <div className={styles.input}>
                    <input
                      id="fullname"
                      name="fullname"
                      type="text"
                      value={user.fullname?user.fullname:""}
                      placeholder="Enter your full name"
                      className={styles.inputEmail}
                      onChange={handleChange}
                      onKeyUp={validate}
                      inputstyle={{
                        width: "60rem",
                      }}
                    />
                    {error["nameError"] ? (
                      <>
                        <span id="span_name" className={styles.errMsg}>
                          {error["nameError"]}
                        </span>
                        &nbsp;
                      </>
                    ) : (
                      ""
                    )}
                  </div>

                  <h3 className={styles.txtPwd}>Enter Phone Number</h3>
                  <div className={styles.input}>
                    <PhoneInput
                      country={"in"}
                      value={phone?phone:""}
                      inputStyle={{
                        width: "100%",
                        height: "6.5rem",
                        borderRadius: "1rem",
                      }}
                      onChange={(phone, country) =>
                        handleChange2(phone, country)
                      }
                      onKeyUp={validate}
                    />
                    {error["numberError"] ? (
                      <>
                        <span id="span_phone" className={styles.errMsg}>
                          {error["numberError"]}
                        </span>
                        &nbsp;
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                  <h3 className={styles.txtPwd}>Enter Email</h3>
                  <div className={styles.input}>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      value={user.email?user.email:""}
                      placeholder="Enter your email"
                      className={styles.inputEmail}
                      onChange={handleChange}
                      onKeyUp={validate}
                    />
                    {error["emailError"] ? (
                      <>
                        <span id="span_email" className={styles.errMsg}>
                          {error["emailError"]}
                        </span>
                        &nbsp;
                      </>
                    ) : (
                      ""
                    )}
                    {/* <span id="span_email" className={styles.errMsg}>
                      {error["emailError"]}
                    </span>{" "}
                    &nbsp; */}
                    {/* <span className={styles.errMsg}>Field can't be empty</span> */}
                  </div>
                  <h3 className={styles.txtPwd}>Enter Password</h3>
                  <div className={styles.input}>
                    <div className={styles.eyeBUTTON}>
                      <input
                        id="password"
                        name="password"
                        type={eye}
                        value={user.password?user.password:""}
                        placeholder="Enter your password"
                        maxLength={25}
                        className={styles.inputEmail}
                        onChange={handleChange}
                        onKeyUp={validate}
                      />
                      <span className={styles.iconWrapper}>
                        <Image
                          src={eyeImage}
                          alt="eye-svg"
                          className={styles.eyeButton}
                          onClick={handlePasswordToggle}
                        ></Image>
                      </span>
                    </div>
                    {error["passError"] ? (
                      <>
                        <span id="span_password" className={styles.errMsg}>
                          {error["passError"]}
                        </span>
                        &nbsp;
                      </>
                    ) : (
                      ""
                    )}
                    {/* <span id="span_password" className={styles.errMsg}>
                      {error["passError"]}
                    </span>{" "}
                    &nbsp; */}
                    {/* <span className={styles.errMsg}>Field can't be empty</span> */}
                  </div>
                </div>
                <button
                  type="Login"
                  className={`${styles.loginButton2} btn btn-primary`}
                >
                  Create Account
                </button>
              </form>

              {/* <button
                type="Login"
                className={`${styles.loginButton} btn btn-primary`}
              >
                Create Account
              </button> */}

              <div className={styles.bottomLink}>
                Already have an account?
                <Link href="/auth/login">
                  <a className={styles.signUp}>&nbsp;Login</a>
                </Link>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};
export default Signup;
