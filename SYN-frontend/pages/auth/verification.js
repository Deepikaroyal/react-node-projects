import styles from "../../styles/verification.module.css";
import React, { useEffect, useState, useCallback, startTransition } from "react";
import Image from "next/image";
import verify from "../../public/images/verification.png";
import Link from "next/link";
import { useSelector } from "react-redux";
import store from "../../config/store";
import OtpInput from "react-otp-input";
import {
  check_PhoneOtp,
  check_emailOtp,
  singUpValidation,
} from "../../helpers/helpers";
import { useDispatch } from "react-redux";
import { signupOtpAction } from "../../action";
import { ToastContainer } from "react-toastify";
import { verificationValidation } from "../../helpers/helpers";
import Head from "next/head";
import { useRef } from "react";

const Verification = (props) => {
  //code for email resend timer:
  const [Running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(16);
  const timerRef = useRef(null);

  useEffect(() => {
    start();
    return () => {
      stop();
    };
  }, []);

  const start = useCallback(() => {
    setSeconds(30);
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
      stop();
    }
  }, [seconds, stop]);

 //code for phone resend:
 const [isRunning, setIsRunning] = useState(false);
  const [second, setSecond] = useState(16);
  const timerRefs = useRef(null);

  useEffect(() => {
    starts();
    return () => {
      stops();
    };
  }, []);

  const starts = useCallback(() => {
    setSecond(30);
    timerRefs.current = setInterval(() => {
      setSecond((state) => state - 1);
    }, 1000);
    setIsRunning(true);
  }, [setSeconds, setIsRunning]);

  const stops = useCallback(() => {
    clearInterval(timerRefs.current);
    setIsRunning(false);
    setSecond(30);
  }, [setIsRunning, setSecond]);

  useEffect(() => {
    if (second < 1) {
      stops();
    }
  }, [second, stops]);
  //state:
  const [emailOtp, setEmailOtp] = useState("");
  const [phoneOtp, setPhoneOtp] = useState("");

 //state for handling mode:
 const [mode,setMode] = useState("")
 //parent toggle state :
 const [toggle,setToggle] = useState(true)
 //validation state
 //let isValid;
 const [error, setError] = useState("");
 const [isValid,setIsValid] = useState("")
 //let isValid
 //function for parent component toggling:
//  const signupToggle=(toggle)=>{
//    setToggle(!toggle)
//   //  window.location.reload()
//    parent();
   
   
//  }
  //otp handlechange:
  const emailHandleChange = (emailOtp) => {
    setEmailOtp(emailOtp);
  };
  const phoneHandleChange = (phoneOtp) => setPhoneOtp(phoneOtp);

  //validation function :
  const validate = () => {
    const res = verificationValidation(emailOtp, phoneOtp);
    setError(res.errors);
    isValid = res.formIsValid;
  };
  //function to check mode:
  useEffect(() => {
    if (props.mode) {
      const mode_check = props.mode;
      setMode(mode_check);
      //   console.log("moooooooddddeeeeee",mode)
    }
  }, []);
  //handlesubmit function:
  const handleSubmit = async (event) => {
    event.preventDefault();
    validate();
    //  console.log("%%%%",isValid)
    if (isValid == true) {
      handleProp();
    }
  };
  //sendiong props to signup page:
  const handleProp = () => {
    props.passData(emailOtp, phoneOtp);
  };
  //toggling parent function:
  const signupToggle = () => {
    props.parentToggle();
  };
  //handling resend button:

  const handleResend=()=>{
    if(Running===false){
    props.resendApi()
    start();
    }
  
  }
  const handlePhoneResend =()=>{
    if(isRunning===false){
      props.resendPhoneApi()
      starts(); 
    }
  } 

  return (
    <div className={styles.maincontent}>
      <Head>
        <title>Verification</title>
      </Head>
      <form action="" className={styles.formMargin} onSubmit={handleSubmit}>
        <div className={styles.container}>
        <div className={styles.verificationBox}>
          <div className={`d-flex align-items-center`}>
            <Image src={verify} className={styles.verifylogo} alt=""></Image>
            <h4 className={styles.txtVerify}>Verification</h4>
          </div>

          <span className={styles.horizontalline}></span>

          <div className={styles.otpEnter}>
           
            <p className={styles.txtContent}>
              Enter 6-digit verification code sent to your email
              <span className={styles.starRed}>*</span>
            </p>
         
              <div>
                <OtpInput
                  value={emailOtp}
                  onChange={emailHandleChange}
                  numInputs={6}
                  separator={<span> </span>}
                  // onKeyPress={()=>validate}

                  inputStyle={{
                    width: "6.5rem",
                    height:"6.5rem",
                    borderRadius: "1rem",
                    marginRight: "4rem",
                    fontSize: "1.5rem",
                  
                    border: "1px solid rgba(0,0,0,0.3)",
                    
                  }}
                />
              </div>
              <span className={styles.errorMSg}>{error["emailError"]}</span>
          
            <div className={styles.span1}>
              <p className={styles.spanContent}>
                If you didn&apos;t receive a code!
              </p>

              <span className={styles.linkResend} onClick={handleResend}>
                Resend&nbsp;{Running ? +seconds : ""}
              </span>
            </div>
          </div>
          <div className={styles.otpEnter}>
            
            <p className={styles.txtSpan}>
              Enter 6-digit verification code sent to your phone number
              <span className={styles.starRed}>*</span>
            </p>
         
              <div>
                <OtpInput
                  value={phoneOtp}
                  onChange={phoneHandleChange}
                  numInputs={6}
                  separator={<span> </span>}
                  //  onKeyPress={() => validate()}
                  //  onKeyUp={validate}
                  inputStyle={{
                    width: "6.5rem",
                    height:"6.5rem",
                    
                    borderRadius: "1rem",
                    marginRight: "4rem",
                    fontSize: "1.5rem",
                    
                    border: "1px solid rgba(0,0,0,0.3)",
                  }}
                />

                {/* <span className={styles.errorMSg}></span> */}
              </div>
              <span id="span_phoneOtp" className={styles.errorMSg}>
                {error["phoneError"]}
              </span>{" "}
           
            {/* <span className={styles.starRed}>{error["phoneError"]}</span> */}

            <div className={styles.span1}>
              <p className={styles.spanContent}>
                If you didn&apos;t receive a code!
              </p>

              {/* <a className={styles.txtResend}> Resend</a> */}
              <span className={styles.txtResend} onClick={handlePhoneResend}>
                Resend {isRunning ? +second : ""}
              </span>
            </div>
          </div>

          {/*          
          <div className={styles.span1}>
            <p className={styles.spanContent}>If you didn’t receive a code!</p>

            <Link href="">
              <a className={styles.txtResend}> Resend</a>
            </Link>
          </div> */}
          <button
            type="Login"
            className={`${styles.loginButton} btn btn-primary`}
            // onClick={handleProp}
          >
            Verify
          </button>
          {mode === "signup" ? (
            <a className={styles.signUp} onClick={signupToggle}>
              Back to Signup
            </a>
          ) : (
            <a className={styles.signUp} onClick={signupToggle}>
              Back to Login
            </a>
          )}
        </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};
export default Verification;
