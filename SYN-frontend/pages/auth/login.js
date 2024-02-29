import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState,useCallback } from "react";
import { useGoogleLogin } from "react-google-login";
import PhoneInput from "react-phone-input-2";
import styles from "../../styles/Auth.module.css";
import Head from "next/head";
import Image from "next/image";
import logo from "../../public/images/login_icon.svg";
import cross from "../../public/images/close.png";
import Google from "../../public/images/google.png";
import Link from "next/link";
import { loginValidations } from "../../helpers/helpers";
import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "../../action/signupAction";
import { googleOAuthLogin } from "../../action/signupAction";
import hide from "../../public/images/hide.svg";
import show from "../../public/images/show.svg";
import Router from "next/router";
import Verification from "./verification";
import store from "../../config/store";
import { signupOtpAction,verificationResendAction,verificationSignupResendAction,loginResetAction } from "../../action/signupAction";
import { useRef } from "react";

const Login = () => {
  
  //accessing google client id:
  let clientId = process.env.GOOGLE_ID;
  //form initial state:
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //input field toggling:
  const [inputToggle, setInputToggle] = useState(true);
  //password eye button:
  const [eyeToggle, setEyeToggle] = useState(true);
  const [eye, setEye] = useState("password");
  const [eyeImage, setEyeImage] = useState(hide);

  const dispatch = useDispatch();
  //getting api status from redux:

  const loginUser = useSelector((state) => state.loginReducer.loginData);
  //console.log("tesytt$$$$$", loginUser);
  useEffect(() => {
    if(loginUser){
   // console.log("@@@@", loginUser);
    if (loginUser.apiStatus === 1) {
      childToggle();
    }
    setUser({...user,email:loginUser.email,password:loginUser.password})
  }
  }, [loginUser]);
  // states toggle for api :
  const [isEmail, setIsEmail] = useState(false);

  //handling validation:
  //let isValid;
  const [isValid, setIsValid] = useState("");
  const [error, setError] = useState({});
  //state to render child component conditionally:
  const [childActive, setChildActive] = useState(false);
  //handle change :
  function handleChange(event) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    checkNumberOrEmail();
  }
 
  //function for child toggling:
  const childToggle = () => {
    setChildActive(!childActive);
   // console.log("&&&&&testing childToggle", childActive);
    //setIsValid(false)
    
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

  //handlelogin:
  function handleToggle() {
  
   // Router.push("/");
    window.location.href="/";
   
  }

  //validation function:

  function validate() {
    const res = loginValidations(user.email, user.password);
    setError(res.errors);
    let isValid = res.formIsValid;
    setIsValid(isValid);
    //console.log("*(*(", isValid);
  }
  //google login function:
  const onSuccess = (res) => {
    dispatch(googleOAuthLogin(res));
  };
  const onFailure = (res) => {
    dispatch(googleOAuthLogin(res));
  };
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    //isSignedIn: false 
  });
  //function to check state:
  const checkNumberOrEmail = () => {
    // console.log("8888",user.email)
    if (user.email != undefined) {
      let email = user.email;
      //   console.log('******',user.email)
      //setEmail(text);
      // setIsFocused(true);
      if (!email.charAt(0).match(/^[A-Za-z]*$/)) {
        setIsEmail(false);
      }
      if (email.charAt(0).match(/^[A-Za-z]*$/)) {
        setIsEmail(true);
      }
    }
  };
  //handling callback:
  const passData = (emailOtp, phoneOtp) => {
    if(isEmail===true){
    const SignupOtpDetails = {
      email: user.email,
      email_otp: emailOtp,
      //country_code: user.countryDialCode,
      phone_no_otp: phoneOtp,
      password: user.password,
      mode: "LOGIN",
    };
    dispatch(signupOtpAction(SignupOtpDetails));
  }if(isEmail===false){
    const SignupOtpDetails = {
      phone_no: user.email,
      email_otp: emailOtp,
      phone_no_otp: phoneOtp,
      password: user.password,
      mode: "LOGIN",
    };
    dispatch(signupOtpAction(SignupOtpDetails));
  }
  }
  //handling form submission:
  const handleSubmit = (event) => {
    event.preventDefault();
    validate();
    checkNumberOrEmail();
    // console.log("$$$$",isValid)
    // console.log("&&&&&",user)
    if (isValid === true) {
       console.log("i am inside !!!",isEmail)
      if (isEmail == true) {
        const loginDetails = {
          email: user.email,
          password: user.password,
        };       
        dispatch(loginAction(loginDetails));       
        window.sessionStorage.setItem("loginData", JSON.stringify(loginDetails));
      } else {
        const loginDetails = {
          phone_no: user.email,
          password: user.password,
        };
     
        dispatch(loginAction(loginDetails));
        // console.log("5555555",loginDetails)
        window.sessionStorage.setItem("loginData", JSON.stringify(loginDetails));
      }
    }
  };
  //toggling parent component callback:
  const parentToggle = () => {
    dispatch(loginResetAction())
   //  console.log("######",toggleProp)
  //  if (toggleProp == true) {
      setChildActive(!childActive);
      //setUser("");
     
    //}
  };
//hitting resend api :
 const resendApi =()=>{
  if (isEmail === true) {
    const loginDetails = {
      email: user.email,
      send_to: 'EMAIL'
    };
    dispatch(verificationSignupResendAction(loginDetails));
  } else {
    const loginDetails = {
      phone_no: user.email,
      send_to: 'EMAIL',
    };
    dispatch(verificationSignupResendAction(loginDetails));
  }
 }
 const resendPhoneApi =()=>{
  if (isEmail === true) {
    const userDetails = {
      email: user.email,
      send_to: 'PHONE_NO',
    };
    dispatch(verificationSignupResendAction(userDetails));
  } else {
  const userDetails = {
    phone_no: user.email,
    send_to: 'PHONE_NO',
  }
  dispatch(verificationSignupResendAction(userDetails));
}
}
//GETTING DATA FROM SESSION STORAGE:
useEffect(() => {
const  getData=JSON.parse(window.sessionStorage.getItem("loginData"));
// console.log("####",getData)
if(getData){
 if(getData.email){
 setUser({...user,email:getData.email,password:getData.password})
 setIsEmail(true)
 }
 else if(getData.phone_no){
  setUser({...user,email:getData.phone_no,password:getData.password})
  setIsEmail(false)
 }
 setIsValid(true)
}
}, []);
  return (
    <div className={styles.maincontent}>
      {/* {console.log("&&&&&&&&",childActive)} */}
      {childActive ? (
        <Verification
          passData={passData}
          mode="login"
          parentToggle={parentToggle}
          resendApi = {resendApi}
          resendPhoneApi = {resendPhoneApi}
        />
     
      ) : (
        <>
          <Head>
            <title>login</title>
            <meta name="description" content="Generated by create next app" />
          </Head>

          <div className={styles.loginFormWrapper}>
            <div className={styles.loginForm}>
                <div
                  className={`d-flex align-items-center justify-content-between`}
                >
                  <div className={`d-flex align-items-center`}>
                    <Image src={logo} className={styles.Image1} alt=""></Image>
                    <h4 className={styles.txtVerify}>Login to your account</h4>
                  </div>

                  <Image
                    src={cross}
                    alt="cross-img"
                    onClick={handleToggle}
                  ></Image>
                </div>

                <div>
                  <p className={` ${styles.loginHead} ${styles.headTXT}`}>
                    Hey, Enter your details to get login to your account.
                  </p>
                </div>
                
                  <span className={styles.line}></span>
                

                <form
                  action=""
                  className={styles.formMargin}
                  onSubmit={handleSubmit}
                >
                  <div>
                    <h3 className={styles.txtEnter}>
                      Enter Email/ Phone Number
                    </h3>

                    <div className={styles.input}>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        value={user.email?user.email:""}
                        placeholder="Enter your email"
                        className={styles.inputEmail}
                        onChange={handleChange}
                        onKeyUp={validate}
                      />
                      <span id="span_email" className={styles.errMsg}>
                        {error["emailError"]}
                      </span>
                      &nbsp;
                    </div>

                    <h3 className={styles.txtPwd}>Enter Password</h3>
                    <div className={styles.input}>
                      <div className={styles.eyeBUTTON}>
                      <input
                        type={eye}
                        id="password"
                        name="password"

                        maxLength={25}

                        value={user.password?user.password:""}

                        placeholder="Enter your password"
                        // value="Password@123"
                        className={styles.inputEmail}
                        onChange={handleChange}
                        onKeyUp={validate}

                      />
                      <span className={styles.iconWrapper}>
                        <Image
                          src={eyeImage}
                          alt="eye-svg"
                          // className={styles.eyeButton}
                          onClick={handlePasswordToggle}
                        ></Image>
                      </span>
                      </div>
                      <span id="span_password" className={styles.errMsg}>
                        {error["passwordError"]}
                      </span>
                      &nbsp;
                    </div>
                  </div>

                  <Link href="/auth/forgotPassword">
                    <a className={styles.forgotPwd}>Forgot Password?</a>
                  </Link>

                  <button
                    type="Login"
                    className={`${styles.loginButton} btn btn-primary`}
                  >
                    Login
                  </button>
                  <span className={styles.textLogin}>OR</span>

                  <div className={`${styles.googleText}col`}></div>
                </form>
                <button className={styles.GoogleButton1} onClick={signIn}>
                  <Image
                    src={Google}
                    className={styles.googlelogo}
                    alt=""
                  ></Image>
                  {/* <SessionProvider session = {session}>
              <Component {...pageProps}/> 
             </SessionProvider>  */}
                  {}
                  <h5 className={styles.Googletext}>Continue with Google </h5>
                </button>
            
                  {/* <a className={styles.textGray}>
                Don't have an account?<a className={styles.textBlue}>Sign up</a> */}
                  {/* <span className={styles.textBlue}>Sign up</span> */}
                  {/* </a> */}

                  <div className={styles.bottomLink}>
                    Don&apos;t have an account?
                    <Link href="/auth/signup">
                      <a className={styles.signUp}>&nbsp;Sign up</a>
                    </Link>
                  </div>
                
              </div>
           
          </div>

          <ToastContainer />
        </>
      )}
    </div>
  );
};

export default Login;
