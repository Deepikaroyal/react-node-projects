import React, { useState,useEffect } from 'react'
import styles from "../../styles/Dashboard.module.css";
import Card from '../component/cards/card';
import rightArrow from "../../public/images/right_arrow_footer.png";
import search from "../../public/images/search.svg"
import Image from 'next/image';
import drop_down from "../../public/images/drop_down.svg"
import { useDispatch,useSelector } from 'react-redux';
import { getCategoryAction } from '../../action/dashboardActions';
export default function DropDown(props) {
//initial satates for all dropdowns:
const getInitialStates = () => {
  const value = "All Categories";
  return value;
};
const [categoryValue, setCategoryValue] = useState(getInitialStates);
const handleChangeCategory =(e) =>{
  setCategoryValue(e.target.value);
  // if(categoryValue!='All Categories')
  //  console.log("dropdown^^^^",categoryValue,"5555555",e.target.value)
  // props.handleCategory(e.target.value)
}
useEffect(()=>{
  props.handleCategory(categoryValue)
},[categoryValue])
// console.log("dropdown outside^^^^",categoryValue)
//list to store dynamic dropdown:
const [list ,setList] = useState([])
//selectiong dropdown id:
const dispatch = useDispatch();
//getting dropdown data from api:
useEffect(()=>{
  const userToken = localStorage.getItem("token");
 // console.log("$$$$",userToken)
  if(userToken){
  const  foundToken = JSON.parse(userToken);
 // console.log("!!!!!!",foundToken)
  dispatch(getCategoryAction(foundToken))
  }
  },[])

//getting data from redux:
const dropdownList = useSelector((state) => state.getCategoryReducer.categoryData);
useEffect(()=>{
  if(dropdownList){
setList({dropdownList})
  }
},[dropdownList])
  return (
    <div>
         <div className={styles.dropsSectionBTn}>
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
                  value={categoryValue}
                  name="categories"
                  id="dropCategories"
                  className={`${styles.dropCategories} ${styles.select_custom_icon}`}
                  // placeholder="All Categories"
                  onChange={handleChangeCategory}
                >
                     <option value="All Categories">All Categories</option>
                   {list.dropdownList?.map((item,i)=>(
                
                  <option  value={item.catergory} key={i} >{item.catergory}</option>
                  ))}
                </select>
                <select name="Buy Now" className={`${styles.dropCategories} ${styles.select_custom_icon}`}>
                  <option value="Buy Now">Buy Now</option>
                  <option value="Fixed price">Fixed Price</option>
                  <option value="Time Auction">Time Auction</option>
                  <option value="Make a offer">Make a offer</option>
                </select>
                <select name="All Items" className={`${styles.dropCategories} ${styles.select_custom_icon}`}>
                  <option value="All Items">All Items</option>
                  <option value="Single Items">Single Items</option>
                  <option value="Multiple Items">Multiple Items</option>
                </select>
                <select name="All Items" className={`${styles.dropCategories} ${styles.select_custom_icon}`}>
                  <option value="Price Range">Price Range</option>

                  <option value="Min Price">Min Price</option>
                  <option value="Max Price">Max Price</option>
                </select>
                <select
                  name="Sort Order"
                  id=""
                  className={`${styles.dropCategories} ${styles.select_custom_icon}`}>         
                  <option value="Sort Order">Sort Order</option>
                  <option value="Recently Soon">Recently Listed</option>
                  <option value="Ending Soon">Ending Soon</option>
                  <option value="Price Low">Price Low-High</option>
                  <option value="Price Hight">Price High-Low</option>
                  <option value="Most favorited">Most Favorited</option>
                </select>
                <div />

              </div>
    </div>
  )
}
