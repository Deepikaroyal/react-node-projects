import React, { useState,useEffect } from 'react'
import AuthHeader from '../../../../common/navigation/authHeader';
import styles from "../../../../styles/create.module.css"
import Image from 'next/image';
import Head from 'next/head';
import upload_image from "../../../../public/images/upload.png";
import fixed_price_unselect from "../../../../public/images/fixed_price_unselect.png";
// import time_auction_unselect from "../../../../public/images/time_auction_unselect.png";
import time_auction_select from "../../../../public/images/time_auction_select.png";
import open_for_offer_unselect from "../../../../public/images/open_for_offer_unselect.png";
import Footer from "../../../../common/navigation/footer";
import Link from "next/link";
import dropdown from "../../../../public/images/drop_down.svg";
import AnimeSailore from "../../../../public/images/AnimeSailorClub.png";
import likes_SVG from "../../../../public/images/heart_line.svg";
import ethereumSvg from "../../../../public/images/ethereum.svg";
import hotDropTickSvg from "../../../../public/images/hot_drop_tick.svg";
import calender from "../../../../public/images/calendar.png";
import { useSelector,useDispatch } from 'react-redux';
import { getCategoryAction } from '../../../../action/dashboardActions';
import { FileUploader } from "react-drag-drop-files";
import { createAuctionValidation } from '../../../../helpers/helpers';
import { createFixedPriceAction } from '../../../../action/dashboardActions';
import withAuth from '../../../../helpers/hoc';
import cross from "../../../../public/images/close.svg";
const fileTypes = ["JPG", "PNG", "GIF", "JPEG"];
 function SingleAuction() {
  //state for category dropdown:
const [list,setList] = useState([])
//form intial state:
const [userData, setUserData] = useState({
  minimumBid: "",
  title: "",
  discription: "",
});

  //image preview toggle:
  const [previewToggle, setPreviewToggle] = useState(false);
   //handle image preview toggle:
   const imagePreview = () => {
    setPreviewToggle(!previewToggle);
  };
//handling validation:
const [isValid, setIsValid] = useState("");
const [error, setError] = useState({});
const [file, setFile] = useState([]);
const [result, setResult] = useState("");
//handling image change:
const handleChange = (file) => {
  setFile(file); 
};
console.log("@@@@@@", file);
//handling form change:
function handleFormChange(event) {
  const { name, value } = event.target;
  setUserData({ ...userData, [name]: value });
}
//handle validation:
function validate() {
  const res = createAuctionValidation(
    //userData.category,
    userData.minimumBid,
    userData.title,
    userData.discription,
    file,
    startDate,
    expireDate
  );
  setError(res.errors);
  let Valid = res.formIsValid;
  setIsValid(Valid);
}
//handling preview button:
  const handlePreview = (event) => {
    let reader = new window.FileReader();
    event.preventDefault();
    console.log("*************", file.length);
    if (file.length !== 0) {
      reader.readAsDataURL(file);
      reader.onloadend = function () {
        var base64data = reader.result;
        setResult(base64data);
        setPreviewToggle(!previewToggle);
        //console.log(base64data);
      };
    }
  };
//selectiong dropdown id:
const dispatch = useDispatch();
  //state for Date:
  const [startDate,setStartDate] = useState("")
  //console.log("&&&&&",startDate.startDate)
  const [expireDate, setExpireDate]= useState("")
 // console.log("&&&&&",expireDate.expireDate)
  //choose currency state and function :
const getInitialState = () => {
  const value = "Ethereum";
  return value;
};
const [value, setValue] = useState(getInitialState);
const handleChangedropdown = (e) => {
  setValue(e.target.value);
};
const handleUpload = (event) => {
  event.preventDefault();
  validate();
    if (file) {
      let formData = new FormData();
      //for (let key in file) {
        formData.append("post_image", file);
     // }
      formData.append("post_type",'Time_auction')
      formData.append("title",userData.title)
      formData.append("post_discription",userData.discription)
      formData.append("category",categoryValue)
      formData.append("minimum_bid",userData.minimumBid)
      formData.append("start_date",startDate.startDate)
      formData.append("expiry_date",expireDate.expireDate)
     // formData.append("crypto_type",user.crypto_type)
      formData.append("crypto_type",value)
      for (let i of formData) {
        console.log("(((((((((((((((((((", i);
      }
      if (isValid === true){
     dispatch(createFixedPriceAction(formData))
    }
  }
};
//choose category state and function:
const getInitialStates = () => {
  const value = "Solana NFTs";
  return value;
};
const [categoryValue, setCategoryValue] = useState(getInitialStates);
const handleChangeCategory =(e) =>{
  setCategoryValue(e.target.value);
}
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
      <Head>
        <title>Create New Item</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="container">
        <AuthHeader />
        {previewToggle === true ? (
          <div className={styles.preview_div}>
            <Image src={cross} alt="close" onClick={imagePreview}></Image>
            <div className={styles.preview}>
              <figure className={styles.preview_fig}>
                <img src={result} className={styles.anime_Images} />
              </figure>
              <figcaption>
                <div className={styles.captions}>
                  <div className={styles.caption_left}>
                    <div className={styles.wrapper}>
                      <h2 className={styles.caption_head}>Rarible</h2>
                      <Image
                        src={hotDropTickSvg}
                        className={`${styles.hotDropTickSvg1} img-fluid`}
                        alt=""
                      ></Image>
                    </div>
                  </div>
                  <div className={styles.left_bottom}>
                    <h2 className={styles.bottom_txt}>
                      {userData.title ? userData.title : "_"}
                    </h2>
                  </div>
                  <div className={styles.caption_right}>
                    <div className={styles.right_upper}>
                      <h2 className={styles.sub_txt}>Price</h2>
                      <h2 className={styles.sub_txt}>Type</h2>
                    </div>
                    <div className={styles.right_upper}>
                      <div className={styles.lower_div}>
                        <Image
                          src={ethereumSvg}
                          className={styles.ethereumSvg}
                          alt=""
                        ></Image>
                        <h2 className={styles.sub_txt1}>
                          {userData.price ? userData.price : "_"}{" "}
                          {value ? value : "_"}
                        </h2>
                      </div>

                      <h2 className={styles.sub_txt1}>Fixed Price</h2>
                    </div>
                  </div>
                </div>
              </figcaption>
            </div>
          </div>
        ) :(
        <form action="" className={styles.form_input}>
          <div className={styles.create_new_item}>
            <h2 className={styles.create_new}>
              Create<span className={styles.create_span}>&nbsp;New Item</span>
            </h2>
            <h6 className={styles.create_paraHead}>
              Image, Video, Audio, Or 3D Model
            </h6>
            <h6 className={styles.sub_para}>
              File Types Supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV,
              OGG, GLB, GLTF. Max Size: 100 MB
            </h6>
            <div className={styles.upload_file}>
              <div className={styles.uploadsvg}>
                <FileUploader
                handleChange={handleChange}
                // value={file}
                name="file"
                className={styles.upload}
                types={fileTypes}
                // inputStyle={{
                //   width: "6.5rem",
                //   height:"6.5rem",
                // background: "red"
                // }}  
              />
                {/* <Image
                src={upload_image}
                className={styles.upload}
                alt="upload image"
              ></Image> */}
              </div>
              {/* <h6 className={styles.upload_content}>
                Upload a file{" "}
                <span className={styles.upload_span}>or drag and drop</span>
              </h6>
              <h6 className={styles.sub_upload_content}>
                PNG, JPG, GIF up to 10MB
              </h6> */}
            </div>
            <span className={styles.error}>{error["fileError"]}</span>
            <h6 className={styles.select}>Select Method</h6>
            <ul className={styles.method}>
            <Link href="/dashboard/create/single/singleFixed">
              <li className={styles.methodTWo}>
                <Image
                  src={fixed_price_unselect}
                  alt="fixed_price_select"
                  className={styles.fixed_price}
                ></Image>
                <h6 className={styles.fixed_price_text_1}>Fixed Price</h6>
              </li>
              </Link>
                <li className={styles.methodOne}>
                  <Image
                    src={time_auction_select}
                    alt="fixed_price_select"
                    className={styles.fixed_price}
                  ></Image>
                  <h6 className={styles.fixed_price_text}>Time Auction</h6>
                </li>
             
              <Link href="/dashboard/create/single/singleOffer">
                <li className={styles.methodTWo}>
                  <Image
                    src={open_for_offer_unselect}
                    alt="fixed_price_select"
                    className={styles.fixed_price}
                  ></Image>
                  <h6 className={styles.fixed_price_text_1}>Open for Offer</h6>
                </li>
              </Link>
            </ul>
            <h6 className={styles.select}>Minimum Bid</h6>
            <input
              type="text"
              name="minimumBid"
              value={userData.minimumBid}
              placeholder="Enter minimum bid"
              className={styles.inputprice}
              onChange={handleFormChange}
              onKeyUp={validate}></input>
            <span className={styles.error}>{error["minimumBidError"]}</span>
            <div className={styles.select_date}>
              <div className={styles.startdate}>
                <h6 className={styles.select}>Starting Date</h6>
                <div className={styles.Main_calender}>
                  <input
                    type="date"
                    placeholder="DD/MM/YY"
                    value={startDate.startDate}
                    className={` ${styles.inputprice} ${styles.inputDate} `}
                    name="price"
                    onChange={(event) => setStartDate({startDate: event.target.value})}
                  />
                    <span className={styles.calenderWrapper}>
                      
                  
                </span>
                </div>
              
                <span className={styles.error}>{error["startDateError"]}</span>
              </div>
              <div className={styles.startdate}>
                <h6 className={styles.select}>Expiration Date</h6>
                <div className={styles.Main_calender}>
                  <input
                   type="date"
                   placeholder="DD/MM/YY"
                   value={expireDate.expireDate}
                   className={` ${styles.inputprice} ${styles.inputDate} `}
                   onChange={(event) => setExpireDate({expireDate: event.target.value})}
                  />
                    <span className={styles.calenderWrapper}>
                
                </span>
                </div>
                <span className={styles.error}>{error["expireDateError"]}</span>
              </div>
            </div>
            <h6 className={styles.select}>Choose Category</h6>
            <div className={styles.choose_dropDOWN}>
            <select value={categoryValue} onChange={handleChangeCategory}className={styles.selects}>
            {list.dropdownList?.map((item,i)=>(
            <option value={item.catergory} key={i} >{item.catergory}</option>  
           
            ))}
            </select>  
            </div>
            <span className={styles.error}></span>
            <h6 className={styles.select}>Title</h6>
            <input
              type="text"
              placeholder="Enter title"
              value={userData.title}
              className={styles.inputprice}
              name="title"
              onChange={handleFormChange}
              onKeyUp={validate}
            />
            <span className={styles.error}>{error["titleError"]}</span>
            <h6 className={styles.select}>Description</h6>
            <input
              type="text"
              placeholder="Enter Description"
              value={userData.discription}
              className={styles.inputprice}
              name="discription"
              onChange={handleFormChange}
              onKeyUp={validate}
            />
            <span className={styles.error}>{error["discriptionError"]}</span>
            <h6 className={styles.select}>Currency Types</h6>
            <div className={styles.choose_dropDOWN}>
            <select value={value} onChange={handleChangedropdown}className={`${styles.inputprice} ${styles.selects} ${styles.select_custom_icon}`}>
            <option value="Ethereum">Ethereum</option>
             <option value="Bitcoin"> Bitcoin</option>
             <option value="Tether">Tether</option>
             <option value="USD Coin">USD Coin</option>
            </select>
              {/* <input
                type="text"
                placeholder="Currency Types"
                className={styles.inputprice}
                name="category"
              /> */}
              <span className={styles.imageWrapper}>
                <Image
                  src={dropdown}
                  alt="dropdown"
                  className={styles.drop_down}
                ></Image>
              </span>
            </div>

          
            <span className={styles.error}></span>
            <div className={styles.buttons}>
              <button className={styles.upload_item} onClick={handleUpload}>Upload Item</button>
              <button className={styles.preview_item} onClick={handlePreview}>Preview Item</button>
            </div>
          </div>
        </form>
        )}
      </div>
      <Footer />
    </div>
  );
}
export default withAuth(SingleAuction)