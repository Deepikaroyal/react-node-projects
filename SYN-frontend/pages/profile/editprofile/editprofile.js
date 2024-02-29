import React from "react";
import AuthHeader from "../../../common/navigation/authHeader";
import styles from "../../../styles/dashboardprofile.module.css";
import Image from "next/image";
// import profile_cover from "../../../public/images/Rectangle_1.png";
import profile_cover from "../../../public/images/Rectangle_1.png";
import cover from "../../../public/images/Cover_pic.png";
import footer from "../../../common/navigation/footer";
import withAuth from "../../../helpers/hoc";
import cover_1 from "../../../public/images/Rectangle_cover1.png";
import Footer from "../../../common/navigation/footer";
import Link from "next/link";
import { useState,useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { authHeaderAction, personalInfoAction,editInfoAction } from "../../../action";
import { useDispatch,useSelector } from "react-redux";
import lori from "../../../public/images/Lori Hart.png";
import Router from "next/router";
import userImage from "../../../public/images/userImage.png"
const Editprofile=()=>{
  const[token,setToken] = useState("")
  const[res,setRes] = useState()
    //base url :
    const baseURL = process.env.S3_ALLOW_URL
 
   //redux hook:
  const  dispatch = new useDispatch();
  //state and function for cover picture image cropper:
  const [sourceImg, setSourceImg] = useState(null);
  const [loadImage, setLoadImage] = useState(null);
  const [croping, setCroping] = useState({ aspect: 16 / 7 });
  const [coverResult,setCoverResult] = useState('')
  const [coverDocument,setCoverDocument] = useState([])

  const handleCoverImage = async(event)=>{
    if (event.target.files.length !== 0) {
      setSourceImg(URL.createObjectURL(event.target.files[0]));
      // console.log(event.target.files[0]);
      if(event.target.files[0]){
      coverDocument.push(event.target.files[0])
      }
    }
  };
    //getting token from local stprage:
    useEffect(()=>{
      const userToken = localStorage.getItem("token");
     // console.log("$$$$",userToken)
      if(userToken){
      const  foundToken = JSON.parse(userToken);
      setToken(foundToken)
      }
      
    },[])
  //cropping function:
  const getCroppedImage = async () => {
    try {
      // console.log("#####",'i am inside try')
      const canvas = document.createElement("canvas");
      const scaleX = loadImage.naturalWidth / loadImage.width;
      const scaleY = loadImage.naturalHeight / loadImage.height;
      canvas.width = croping.width;
      canvas.height = croping.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(
        loadImage,
        croping.x * scaleX,
        croping.y * scaleY,
        croping.width * scaleX,
        croping.height * scaleY,
        0,
        0,
        croping.width,
        croping.height
      );

      const base64Img = canvas.toDataURL("image/jpeg", 1);
      setCoverResult(base64Img);
    } catch (e) {
      // console.log("crop the image");
    }
    setSourceImg(null);
    if (coverDocument) {
      let formData = new FormData();
      for (let key in coverDocument) {
        formData.append("cover_photo", coverDocument[key]);
      }
      for (let i of formData) {
        // console.log("(((((((((((((((((((", i);
      }
      //console.log("$$$$formdata@@",formData)
      const testObj={
             cover_photo:coverDocument
           }
      dispatch(editInfoAction(formData,testObj));

    }
  };
 
  const handleCoverImageUpload = async () => {
   // console.log("%^&*(",coverResult)
    // if (coverDocument) {
    //   let formData = new FormData();
    //   for (let key in coverDocument) {
    //     formData.append("cover_photo", coverDocument[key]);
    //   }
    //   for (let i of formData) {
    //     console.log("(((((((((((((((((((", i);
    //   }
    //   const testObj={
    //     cover_photo:coverDocument
    //   }
    //   //console.log("$$$$formdata@@",formData)
    //   dispatch(personalInfoAction(formData,testObj));
    // }
  };
   //state and function  for image cropper:
   const [srcImg, setSrcImg] = useState(null);
   const [image, setImage] = useState(null);
   const [crop, setCrop] = useState({ aspect: 1 / 1 });
   const [result, setResult] = useState('');
   const [result1, setResult1] = useState('');
   const [document,setDocument] = useState([])
 
   const handleImage = async (event) => {
     if (event.target.files.length !== 0) {
       setSrcImg(URL.createObjectURL(event.target.files[0]));
      //  console.log(event.target.files[0]);
       if(event.target.files[0]){
       document.push(event.target.files[0])
       }
     }
   };
   //console.log("&&&&&&result",document)

   const getCroppedImg = async () => {
     try {
       const canvas = document.createElement("canvas");
       const scaleX = image.naturalWidth / image.width;
       const scaleY = image.naturalHeight / image.height;
       canvas.width = crop.width;
       canvas.height = crop.height;
       const ctx = canvas.getContext("2d");
      //  console.log("*******************************8")
       ctx.drawImage(
         image,
         crop.x * scaleX,
         crop.y * scaleY,
         crop.width * scaleX,
         crop.height * scaleY,
         0,
         0,
         crop.width,
         crop.height
       );
 
       const base64Image = canvas.toDataURL("image/jpeg", 1);
       console.log("$$$$$$111",base64Image);
       
      // setResult1(base64Image);
       setResult(base64Image);

     } catch (e) {
    console.log("error");
     }
    //  if (result) {
      //  const blob = await result.blob();
      let formData = new FormData();

      for (let key in document) {
        formData.append("profile_photo", document[key]);
      }
      for (let i of formData) {
        console.log("(((((((((((((((((((", i);
      }
      const testObj={
        profile_photo:document,
        // cover_photo:document
      }
      console.log("!!!!!!!!!",testObj)
      //console.log("$$$$formdata@@",formData)
      dispatch(editInfoAction(formData,testObj));
    // }
     setSrcImg(null);
   };
   //function for result image:
   const handleImageUpload = async () => {
    // console.log("%%%%%",result)
    //  if (result) {
    //    //  const blob = await result.blob();
    //    let formData = new FormData();

    //    for (let key in document) {
    //      formData.append("profile_photo", document[key]);
    //    }
    //    for (let i of formData) {
    //      console.log("(((((((((((((((((((", i);
    //    }
    //    //console.log("$$$$formdata@@",formData)
    //    dispatch(personalInfoAction(formData));
    //  }
   };
   let apiRes = useSelector((state) => state. editProfileReducer.apiStatus);
  
  //  console.log("^^^^^^",apiRes)
   useEffect(() => {
     if (apiRes) {
      dispatch(authHeaderAction(token));
     }
   }, [apiRes]);

 //getting data from redux
 const logUser = useSelector((state) => state.loggedInReducer.userData);
 useEffect(() => {
   if (logUser) { 
   if(logUser.profile_photo){
     if (logUser.profile_photo.indexOf("http://") == 0 || logUser.profile_photo.indexOf("https://") == 0){
       setResult(logUser.profile_photo)
     }else{
    setResult(baseURL+logUser.profile_photo)
     }
   } 
   if(logUser.cover_photo){
    if (logUser.cover_photo.indexOf("http://") == 0 || logUser.cover_photo.indexOf("https://") == 0){
      setCoverResult(logUser.cover_photo)
    }else{
   setCoverResult(baseURL+logUser.cover_photo)
    }
  }
 }
 }, [logUser]);

  return (
    <div>
      <div className="container">
        <AuthHeader />
        <div className={`${styles.main} ${styles.background_main}`}>
          <div className={styles.left}>
            <div className={styles.left_content}>
            <Link href="/profile/editprofile/editprofile">
              <button className={styles.Edit_button_1}>
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
              <Link href="/profile/editprofile/setting">
              <button className={styles.Edit_button}>
                Notification Settings
              </button>
              </Link>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.sub_right}>
              <h4 className={styles.edit_heading}>
                Change Your Profile Picture
              </h4>
              <div className={styles.editImage}>
                {/* cropper code */}
                {srcImg && (
                  <>
                    <div>
                      <ReactCrop
                        style={{ maxWidth: "50%" }}
                        src={srcImg}
                        onImageLoaded={setImage}
                        crop={crop}
                        onChange={setCrop}
                      />
                    </div>
                    <button
                      className={styles.uploadBTN}
                      onClick={getCroppedImg}
                    >
                      crop
                    </button>
                  </>
                )}
                {/* {console.log("**********",result)} */}
                {/* {result && ( */}
                <Image
                  src={result?result:userImage}
                  className={styles.editProfile}
                  width={200}
                  height={200}
                  alt="profileimage"
                ></Image>
                  {/* )}  */}
              </div>
              <div className={styles.choose_btn}>
                <button className={styles.uploadBTN} htmlFor="uploadFile" onClick={handleImageUpload}>
                  Upload Profile
                  
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                    className={styles.fileUpload}
                    id={styles.uploadFile}
                  />
                </button>
              </div>
            </div>
            <div className={styles.sub_right}>
              <h4 className={styles.edit_heading}>Change Your Cover Photo</h4>
              <div className={styles.editImage}>
                {/* image cropper code */}
              {sourceImg && (
                  <>
                    <div>
                      <ReactCrop
                        style={{ maxWidth: "50%" }}
                        src={sourceImg}
                        onImageLoaded={setLoadImage}
                        crop={croping}
                        onChange={setCroping}
                      />
                    </div>
                    <button
                      className={styles.uploadBTN}
                      onClick={getCroppedImage}
                    >
                      crop?
                    </button>
                  </>
                )}
                <Image
                 // src ={cover_1}
                  src={coverResult? coverResult :cover_1}
                  className={styles.editProfile}
                  alt="coverpicture"
                  width={738}
                 height={249}
                ></Image>
              </div>
              <div className={styles.choose_btn}>
              <button className={styles.uploadBTN}  htmlFor="uploadCover"onClick={handleCoverImageUpload}>Upload Cover            
              <input
                    type="file"
                    accept="image/*"
                    onChange={handleCoverImage}
                    className={styles.fileUpload}
                    id={styles.uploadCover}
                  />  
              </button>
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
export default withAuth(Editprofile)