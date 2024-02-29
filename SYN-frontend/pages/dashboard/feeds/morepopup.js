import React, { useEffect, useState } from "react";
import styles from "../../../styles/feeds.module.css";
import Head from "next/head";
import withAuth from "../../../helpers/hoc";
import { unFollowAction } from "../../../action/dashboardActions";
import { useSelector,useDispatch } from "react-redux";
import Router from "next/router";
function Morepopup(props) {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState();
  const [str,setStr] = useState('Unfollow')
  const parentFeedPopup = () => {
    props.feedPopup();
  };
  useEffect(() => {
    setUserId(props.id);
  }, []);
  //function for unfollow api:
  const handleUnfollow=()=>{
    const Id = {
      followId: userId,
    };
    dispatch(unFollowAction(Id))
  }
   //getting data from redux
   const unFollow = useSelector((state) => state.followReducer.unFollowApi);
   useEffect(()=>{
     if(unFollow==1){
      setStr('Follow') 
     const timer = setTimeout(() => {
      props.feedPopup();
    }, 500);
    return () => clearTimeout(timer);
    //   const Id = {
    //     followId: '',
    //   };
    //   dispatch(unFollowAction(Id))
      }  
   },[unFollow])
   
  return (
    <div className="container">
      <Head>
        <title>More</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className={styles.moreDiv}>
        <div className={styles.more_content}>
          <div className={styles.more_details}>
            <ul className={styles.unfollowUL}>
              <li className={`${styles.unfollowLi} ${styles.unfollowLi_clr}`} onClick={handleUnfollow}>
                {str}
              </li>
              <li className={styles.unfollowLi}>Share</li>
              <li className={styles.unfollowLi}>Copy Link</li>
              <li className={styles.unfollowLi1} onClick={parentFeedPopup}>
                Cancel
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withAuth(Morepopup);
