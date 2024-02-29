import React, { useState, useRef, useCallback, useEffect } from "react";
import styles from "../../styles/verification.module.css";
import verify from "../../public/images/verification.png";
import Image from "next/image";
import Link from "next/link";
import OtpInput from "react-otp-input";
import { verificationCodeValidation } from "../../helpers/helpers";
import store from "../../config/store";
import { verificationCodeAction,verificationCodeResendAction } from "../../action";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Head from "next/head";



export default function VerificationCode() {
  //state for getting data from redux store:
  const [userData,setUserData] = useState("")
  const[userPhone,setUserPhone] = useState("")

  //redux hook :
  let dispatch = useDispatch();
  //getting data from redux store:
  let userDetail = store.getState();
  const Data = useSelector((state) => state.signupReducer.userData);
  useEffect(() => {
  //  console.log("@@@@", Data);
    if (Data.email) {
      const userDetails = {
        email: Data.email,
      };
      setUserData(Data.email)
      // dispatch(forgotAction(userDetails));
    }
    else if(Data.phone_no) {
    setUserPhone(Data.phone_no)
    //console.log("!!!!!!!!!!!!!!!!",userPhone)
    }
  }, [Data]);

  // console.log('^^^',userDetail)
  let filterDetail = userDetail.signupReducer.userData;
  //  console.log('8888',userDetail.signupReducer.userData)
  let userEmail = filterDetail.phone_no;
  // resend timer state and function:
  const [Running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(16);
  const timerRef = useRef(null);
  useEffect(() => {
    start()
    return () => {
      stop()

    }
  }, [])

  const start = useCallback(() => {

    timerRef.current = setInterval(() => {

      setSeconds((state) => state - 1);
    }, 1000);
    setRunning(true);
  }, [setSeconds, setRunning]);

  const stop = useCallback(() => {
    clearInterval(timerRef.current);
    setRunning(false);
    setSeconds(30);
  }, [setRunning, setSeconds]);

  useEffect(() => {
    if (seconds < 1) {
      stop()
    }
  }, [seconds, stop])

  const resendOtp = () => {
    
    if(userData){
    const userDetails={
      email:userData
    }
    if(Running===false){
  dispatch(verificationCodeResendAction (userDetails));
  start()
    }
    }
    if(userPhone){
      const userDetails={
        phone_no:userPhone
      }
    //console.log("%%%",userDetails)
     if(Running===false) {
    dispatch(verificationCodeResendAction(userDetails));
    start()
     }
    }
};


  const [emailOtp, setEmailOtp] = useState("");
  const [error, setError] = useState("");
  //validation state
  let isValid;
  //handle change
  const otpHandleChange = (emailOtp) => setEmailOtp(emailOtp);
  //validation function:
  function validation() {
    const res = verificationCodeValidation(emailOtp);
    setError(res.errors);
    isValid = res.formIsValid;

  }


  //handle submit:
  const handleSubmit = (e) => {
    e.preventDefault();
    validation();
    if (isValid == true) {
      // console.log("&&&&",isValid)
      if (filterDetail.phone_no) {
        const userDetails = {
          phone_no_otp: emailOtp,
          phone_no: filterDetail.phone_no,
        };
        dispatch(verificationCodeAction(userDetails));
      }
      else {
        if (filterDetail.email) {
          const userDetails = {
            email_otp: emailOtp,
            email: filterDetail.email,
          };
          dispatch(verificationCodeAction(userDetails));
        }
      }
    }
  };

  return (
    <div className={styles.maincontent}>
      <Head>
        <title>Verification Code</title>
      </Head>
      <form action="" className={styles.formMargin} onSubmit={handleSubmit}>
        <div className={styles.container}>
          <div className={styles.verificationBox}>
            <div className={`d-flex align-items-center`}>
              <Image src={verify} className={styles.verifylogo} alt=""></Image>
              <h4 className={styles.txtVerify} >Verification Code</h4>
            </div>

            <div className={styles.otpEnter}>
              {/* <div className={styles.paraHead}> */}
              <p className={styles.txtContent}>
                Enter the 6-digit verification code we just sent to your email.
                <span className={styles.starRed}>*</span>
              </p>
              <div>
                <div className={styles.horizontalHeight}></div>
              </div>
              {/* </div> */}
              <div>
               
                  <div className={styles.userInput}>
                    <OtpInput
                      value={emailOtp}
                      onChange={otpHandleChange}
                      numInputs={6}
                      separator={<span> </span>}
                      // onKeyPress={()=>validate}
                      inputStyle={{
                        width: "6.5rem",
                        height:"6.5rem",
                        marginRight: "4rem",
                        fontSize: "1.5rem",
                        borderRadius: "1rem",
                        border: "1px solid rgba(0,0,0,0.3)",
                      }}
                    />
                  </div>
                  <span className={styles.starRed}>{error["emailError"]}</span>
                  &nbsp;
         
                <div className={styles.span1}>
                  <p className={styles.spanContent}>
                    If you didn&apos;t receive a code!
                  </p>




                  <span className={styles.linkResend} onClick={resendOtp}>Resend {Running ? +seconds : ""}</span>

                </div>
                <button
                  type="Login"
                  className={`${styles.loginButton} btn btn-primary`}
                >
                  Verify
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

