import React, { useEffect,  useState, useRef } from "react";
// import logo from "../../public/Images/logo.svg";
import logo from "../../public/images/logo.svg";
import landingPage from "../../public/images/Images.png";
import styles from "../../styles/Dashboard.module.css";
import Link from "next/link";
import Image from "next/image";
import bell from "../../public/images/bell.png";
import lori from "../../public/images/Lori Hart.png";
import drop_down from "../../public/images/drop_down.svg";
import my_profile from "../../public/images/my_profile.svg";
import edit_profile from "../../public/images/edit_profile.svg";
import messages from "../../public/images/messages.svg"
import close from "../../public/images/close.png";
import SignOut from "../../public/images/sign_out.svg"
import { useDispatch,useSelector } from "react-redux";
import { authHeaderAction } from "../../action";
import userImage from "../../public/images/userImage.png"
import Notification from "../notification/notification";
export default function AuthHeader() {
    //base url :
    const baseURL = process.env.S3_ALLOW_URL
  //state 
  const [name,setName] = useState("")
  // profile image state:
  const [profileImage, setProfileImage] = useState('')
//check mode :
const [mode,setMode]= useState("")
  //redux hook :
  const dispatch = useDispatch();
  //notification toggle state:
  const[notify,setNotify] = useState(false)
  //state for dropdown:
  const [displayProfileDropdown,setDisplayProfileDropdown] = useState(false)
  const handleProfileDorpDown = () =>{
    if(!displayProfileDropdown){
      setDisplayProfileDropdown(true)
    }
   // console.log('test', displayProfileDropdown)
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          // if(displayProfileDropdown){
            // handleProfileDorpDown()
            setDisplayProfileDropdown(false)
          // }
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref])
  }
//handling close dropdown from cross svg:
const handleCloseDropdown=()=>{
  setDisplayProfileDropdown(false)
}
useEffect(()=>{
  const userToken = localStorage.getItem("token");
 // console.log("$$$$",userToken)
  if(userToken){
  const  foundToken = JSON.parse(userToken);
 // console.log("!!!!!!",foundToken)
  dispatch(authHeaderAction(foundToken))
  }
},[])
//getting data from redux
const logUser = useSelector((state) => state.loggedInReducer.userData);

useEffect(() => {
 
  if (logUser) {
    setName(logUser.full_name)
    
  }if(logUser.profile_photo){

  if(logUser.profile_photo){
    if (logUser.profile_photo.indexOf("http://") == 0 || logUser.profile_photo.indexOf("https://") == 0){
      setProfileImage(logUser.profile_photo)
    }else{
   setProfileImage(baseURL+logUser.profile_photo)
     }
    //  else{
    //   setProfileImage(logUser.profile_photo)
    // }
  }
 
}
}, [logUser]);
//getting api status from redux login reducer:
const loginUser = useSelector((state) => state.loginReducer.loginData);
useEffect(()=>{
  if(logUser){
setMode(logUser.mode)
//console.log("^^^mode^^^",mode)
  }
},[loginUser])

//function for notification toggling:
const handelNotificationToggle =()=>{
  if(!notify){
    setNotify(true)
  }
}
const wrapperRefs = useRef(null);
useOutsideAlerte(wrapperRefs);

function useOutsideAlerte(ref) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        // if(displayProfileDropdown){
          // handleProfileDorpDown()
          setNotify(false)
        // }
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref])
}
  return (
    <div>
      {/************************** profile header ********************/}

      <section className="header-bg">
        {/* className="bg-property" */}
        {/* <!-- Navbar Start --> */}
        <div>
          <nav className="navbar navbar-expand-lg navbar-light head-sub">
            {/* className={${navbar}} */}
            <Link href="/dashboard/home">
              <a className={styles.headListtxt}>
                <Image
                  src={logo}
                  alt={logo}
                  className="img-fluid head-img"
                ></Image>
              </a>
            </Link>

            <button
              className="navbar-toggler navbar navbar-expand-lg navbar-light head-sub"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarTogglerDemo01"
            >
              <ul className="navbar-nav d-flex align-items-center headList">
                <li className={styles.navlink}>
                  <Link href="/dashboard/explore/explore">
                    <a className={styles.AuthHead}>Explore</a>
                  </Link>
                </li>
                <Link href="/dashboard/feeds/feed">
                  <li className={styles.navlink}>
                    <a className={styles.AuthHead}>Feeds</a>
                  </li>
                </Link>
                <Link href="/dashboard/create">
                  <li className={styles.navlink}>
                    <a className={styles.AuthNav}>Create</a>
                  </li>
                </Link>

                <div className={styles.bellIcon}  >
                 
                <Image src={bell} alt="bell" onClick={handelNotificationToggle}></Image>
                {/* <div className={`${styles.subMenuwrap}${notify ? 'd-block': 'd-none'}`}>Notificationfff</div> */}
                </div>
                {/* <Link href="/">
                  <li className={styles.navlink}>
                    <button className={`${styles.button1} border-0`}>
                      Login
                    </button>
                  </li>
                </Link> */}

                <div className={styles.AuthLogo} ref={wrapperRef} >
                  <div onClick={handleProfileDorpDown} className={styles.sideDiv}>
                    {/* {console.log('imaage******',profileImage)} */}
                    <Image
                      src={profileImage?profileImage:userImage}
                      width={100}
                      height={100}
                      alt="profileImage"
                      className={styles.profileIcon}
                    ></Image>
                    <h5 className={styles.profile_name} >{name?name:""}</h5>
                    <Image src={drop_down} className={styles.drop_down}></Image>
                  </div>
                  <div  className={`${styles.subMenuwrap} ${displayProfileDropdown ? 'd-block': 'd-none'}`} >
                    <div className={styles.subMenu}>
                      <div className={styles.userInfo}>

                        <div >
                          <div className={styles.image_box}>
                            <Image
                              src={profileImage?profileImage: userImage}
                              width={80}
                              height={100}
                              alt="profileImage"
                              className={`${styles.profileIcon} ${styles.profileHead}`}
                            ></Image>
                            <div className={styles.sub_Content}>
                              <h2 className={styles.subHeading}>{name?name:""}</h2>
                              <p className={styles.subPara}>Set display name</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <Image src={close} className={styles.close} onClick={handleCloseDropdown}></Image>
                        </div>
                      </div>
                      <div className={styles.sub_division}>
                        <h2 className={styles.sub_txt}>Balance</h2>
                        <h2 className={styles.sub_paraTXT}>12.858 ETH</h2>
                      </div>
                      <span className={styles.lineHR}></span>
                      <Link href="/profile/myprofile/myProfile">
                        <a href="#" className={styles.subMenuLink}>
                            <Image src={my_profile} className={styles.userIcon} alt="my_profile"></Image>
                            <p className={styles.txt_para}>My Profile</p>
                        </a>
                    
                      </Link>
                      <Link href="/profile/editprofile/editprofile">
                        <a href="#" className={styles.subMenuLink}>
                            <Image src={edit_profile} className={styles.userIcon} alt=""></Image>
                            <p className={styles.txt_para}>Edit Profile</p>
                        </a>
                    
                      </Link>
                      <Link href="/profile/messages/message">
                        <a href="#" className={styles.subMenuLink}>
                            <Image src={messages} className={styles.userIcon} alt=""></Image>
                            <p className={styles.txt_para}>Messages</p>
                        </a>
                    
                      </Link>
                      <span className={styles.lineHR}></span>
                      <Link href="/profile/logout/logout">
                        <a href="#" className={styles.subMenuLink}>
                            <Image src={SignOut} className={styles.userIcon} alt=""></Image>
                            <p className={styles.txt_para}>Sign Out</p>
                        </a>
                    
                      </Link>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </nav>
        </div>
        {/* <!-- Navbar End --> */}
      </section>
    </div>
  );
}
