import React from "react";
import AuthHeader from "../../../common/navigation/authHeader";
import styles from "../../../styles/dashboardprofile.module.css";
import Footer from "../../../common/navigation/footer";
import Link from "next/link";
import withAuth from "../../../helpers/hoc";
import { useState,useEffect } from "react";
 function Setting() {
   const[soldToggle,setSoldToggle] = useState(false)
   const[bidToggle,setBidToggle] = useState(false)
   const[priceToggle,setPriceToggle] = useState(false)
   const[auctionToggle,setAuctionToggle] = useState(false)
   const[outBidToggle,setOutBidToggle] = useState(false)
   const[purchaseToggle,setPurchaseToggle] = useState(false)
   //functions for toggling:
   const handleSoldToggle=()=>{
     setSoldToggle(!soldToggle)
   }
   const handlebidToggle=()=>{
    setBidToggle(!bidToggle)
  }
  const handlePriceToggle=()=>{
    setPriceToggle(!priceToggle)
  }
  const handleAuctionToggle=()=>{
    setAuctionToggle(!auctionToggle)
  }
  const handleOutBidToggle=()=>{
    setOutBidToggle(!outBidToggle)
  }
  const handlePurchaseToggle=()=>{
    setPurchaseToggle(!purchaseToggle)
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
              <button className={styles.Edit_button}>Change Password</button>
              </Link>
              <button className={styles.Edit_button_1}>
                Notification Settings
              </button>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.sub_right}>
              <div>
                <h2 className={styles.changeHead}>
                  Make Sure Your Notification setting
                </h2>
                <p className={styles.changePara}>
                  Notification Center is where you can find app notifications
                  and Quick Settings—which give you quick access to commonly
                  used settings and apps. You can change your notification
                  settings at any time from the Settings app. Select Start ,
                  then select Settings Passwords are a critical part of
                  information and network security. Passwords serve to protect
                  user accounts but a poorly chosen password, if compromised,
                  could put the entire network at risk.
                </p>
              </div>
              <span className={styles.lineHR}></span>
              <div className={styles.sub_right}>
           
              <div className={styles.top}>
                <div className={styles.field_wrap}>
                <div className={styles.upper}>
                  <div className={styles.upper_left}>
                    <h6 className={styles.upper_leftHead}>Item Sold</h6>
                    <p className={styles.upper_leftPara}>
                      When someone purhased your item.
                    </p>
                  </div>
                  <div className={styles.upper_leftRight} onClick={handleSoldToggle}>
                    <div className="form-check form-switch">
                      <input
                        className={`form-check-input ${styles.checkBTn}`}
                        type="checkbox"
                        id="formSwitchCheckChecked"
                        checked={soldToggle}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="formSwitchCheckChecked"
                      ></label>
                    </div>
                  </div>
                </div>
                </div>
                <div className={styles.field_wrap}>
                <div className={styles.upper}>
                  <div className={styles.upper_left}>
                    <h6 className={styles.upper_leftHead}>Auction Expiration</h6>
                    <p className={styles.upper_leftPara}>
                    When an auction you created ends.
                    </p>
                  </div>
                  <div className={styles.upper_leftRight} onClick={handleAuctionToggle}>
                    <div className="form-check form-switch">
                      <input
                        className={`form-check-input ${styles.checkBTn}`}
                        type="checkbox"
                        id="formSwitchCheckChecked"
                        checked={auctionToggle}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="formSwitchCheckChecked"
                      ></label>
                    </div>
                  </div>
                </div>
                </div>
                </div>
                <div className={styles.top}>
                <div className={styles.field_wrap}>
                <div className={styles.upper}>
                  <div className={styles.upper_left}>
                    <h6 className={styles.upper_leftHead}>Bid Activity</h6>
                    <p className={styles.upper_leftPara}>
                    When someone purhased your item.
                    </p>
                  </div>
                  <div className={styles.upper_leftRight}  onClick={handlebidToggle}>
                    <div className="form-check form-switch">
                      <input
                        className={`form-check-input ${styles.checkBTn}`}
                        type="checkbox"
                        id="formSwitchCheckChecked"
                        checked={bidToggle}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="formSwitchCheckChecked"
                      ></label>
                    </div>
                  </div>
                </div>
                </div>
                <div className={styles.field_wrap}>
                <div className={styles.upper}>
                  <div className={styles.upper_left}>
                    <h6 className={styles.upper_leftHead}>Outbid</h6>
                    <p className={styles.upper_leftPara}>
                    When an offer you placed is exceeded by another user.
                    </p>
                  </div>
                  <div className={styles.upper_leftRight} onClick={handleOutBidToggle}>
                    <div className="form-check form-switch">
                      <input
                        className={`form-check-input ${styles.checkBTn}`}
                        type="checkbox"
                        id="formSwitchCheckChecked"
                        checked={outBidToggle}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="formSwitchCheckChecked"
                      ></label>
                    </div>
                  </div>
                </div>
                </div>


                
                </div>
                <div className={styles.top}>
                <div className={styles.field_wrap}>
                <div className={styles.upper}>
                  <div className={styles.upper_left}>
                    <h6 className={styles.upper_leftHead}>Price Change</h6>
                    <p className={styles.upper_leftPara}>
                    When an item you made an offer on changes in price.
                    </p>
                  </div>
                  <div className={styles.upper_leftRight} onClick={handlePriceToggle}>
                    <div className="form-check form-switch">
                      <input
                        className={`form-check-input ${styles.checkBTn}`}
                        type="checkbox"
                        id="formSwitchCheckChecked"
                        checked={priceToggle}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="formSwitchCheckChecked"
                      ></label>
                    </div>
                  </div>
                </div>
                </div>
                <div className={styles.field_wrap}>
                <div className={styles.upper}>
                  <div className={styles.upper_left}>
                    <h6 className={styles.upper_leftHead}>Successful Purchase</h6>
                    <p className={styles.upper_leftPara}>
                    When you successfully buy an item.
                    </p>
                  </div>
                  <div className={styles.upper_leftRight} onClick={handlePurchaseToggle}>
                    <div className="form-check form-switch">
                      <input
                        className={`form-check-input ${styles.checkBTn}`}
                        type="checkbox"
                        id="formSwitchCheckChecked"
                        checked={purchaseToggle}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="formSwitchCheckChecked"
                      ></label>
                    </div>
                  </div>
                </div>
                </div>


                
                </div>
                <div className={styles.editForm}>
                  
                  <div className={styles.save}>
                  <button className={styles.saveBTN}>Save</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
      <div className={styles.editFooter}>
        <Footer />
      </div>
    </div>
  );
}
export default withAuth( Setting)