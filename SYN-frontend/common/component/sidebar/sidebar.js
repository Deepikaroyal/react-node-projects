import React from 'react'
import Link from 'next/link'
import styles from "../../../styles/dashboardprofile.module.css"
export default function Sidebar() {
  return (
    <div>
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
    </div>
  )
}
