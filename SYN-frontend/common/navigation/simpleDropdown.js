import React from 'react'
import styles from "../../styles/Dashboard.module.css";
import Card from '../component/cards/card';
import rightArrow from "../../public/images/right_arrow_footer.png";
import search from "../../public/images/search.svg"
import Image from 'next/image';
export default function SimpleDropdown() {
  return (
    <div> <div className={styles.dropsSectionBTn}>
    <div className={`${styles.search_wrap} ${styles.search_wrap_1}`}>
               <div className={styles.search_box}>
                 <input
                   type="text"
                   className={styles.input}
                   placeholder="search..."
                 
                 />
                 <div className={`${styles.btn} ${styles.btn_common}`}>
                   <Image src={search} alt="search_img" className={styles.searchIMG} ></Image>
                 </div>
               </div>
             </div>

           <select
             name="categories"
             id="dropCategories"
             className={styles.dropCategories}
           >
             <option value="All Categories">All Categories</option>
             <option value="Solana NFTs">Solana NFTs</option>
             <option value="Domain Name">Domain Name</option>
             <option value="Art">Art</option>
             <option value="Music">Music</option>
             <option value="Sport">Sport</option>
             <option value="Photography">Photography</option>
             <option value="Trading card">Trading cards</option>
             <option value="Utility">Audi</option>
             <option value="Virtual word">Virtual word</option>
           </select>
           <select name="Buy Now" className={styles.dropCategories}>
             <option value="Buy Now">Buy Now</option>
             <option value="Fixed price">Fixed Price</option>
             <option value="Time Auction">Time Auction</option>
             <option value="Make a offer">Make a offer</option>
           </select>
           <select name="All Items" className={styles.dropCategories}>
             <option value="All Items">All Items</option>
             <option value="Single Items">Single Items</option>
             <option value="Multiple Items">Multiple Items</option>
           </select>
           <select name="All Items" className={styles.dropCategories}>
             <option value="Price Range">Price Range</option>

             {/* <ul>
                 <li>
                 <input type="number" id="quantity" name="quantity" min="1" max="5"></input>
                 <br />asdxfghjnmk,l./
                 <input type="number" id="quantity" name="quantity" min="1" max="5"></input>
                 </li>
               </ul>
              
               
               <h6>Min Price</h6> */}

             <option value="Min Price">Min Price</option>
             <option value="Max Price">Max Price</option>
           </select>
           <select
             name="Sort Order"
             id=""
             className={styles.dropCategories}
           >
             <option value="Sort Order">Sort Order</option>
             <option value="Recently Soon">Recently Listed</option>
             <option value="Ending Soon">Ending Soon</option>
             <option value="Price Low">Price Low - Hight</option>
             <option value="Price Hight">Price Hight - Low</option>
             <option value="Most favorited">Most favorited</option>
           </select>
           <div />
          
         </div></div>
  )
}
