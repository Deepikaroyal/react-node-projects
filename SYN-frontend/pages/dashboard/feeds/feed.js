import React from "react";
import AuthHeader from "../../../common/navigation/authHeader";
import authHeader from "../../../common/navigation/authHeader";
import styles from "../../../styles/feeds.module.css";
import profile from "../../../public/images/Yolanda.png";
import more from "../../../public/images/more.png";
import cover from "../../../public/images/image_1.png";
import lori from "../../../public/images/Lori Hart.png";
import redLike from "../../../public/images/heart_like.png";
import unLike from "../../../public/images/heart_line_unlike_comment.png"
import comment from "../../../public/images/comment.png";
import share from "../../../public/images/share.png";
import tick from "../../../public/images/tick.svg";
import Image from "next/image";
import cover2 from "../../../public/images/image_2.png";
import EmilyImage from "../../../public/images/Emily Reyes.png";
import Head from "next/head";
import Link from "next/link";
import withAuth from "../../../helpers/hoc";
import { useState, useEffect } from "react";
import {
  getsuggestionAction,
  followAction,
  feedDataAction,
  commentAction,
  likeAction
} from "../../../action/dashboardActions";
import { useSelector, useDispatch } from "react-redux";
import search from "../../../public/images/search.svg";
import userImage from "../../../public/images/userImage.png";
import Morepopup from "./morepopup";
import UsersProfile from "../../profile/myprofile/usersProfile";
import Comment from "./comment";
import { likeService, dislikePostService,commentService} from "../../../services";

function Feed() {
  const [str, setStr] = useState("");
  //state for access token:
  const [token, setToken] = useState("");
  // profile image state:
  const [profileImage, setProfileImage] = useState('')
  //base url :
  const baseURL = process.env.S3_ALLOW_URL;
  //state for suggesstion list:
  const [list, setList] = useState([]);
  const [temp, setTemp] = useState();
  const [feedRes, setFeedRes] = useState([]);
  //popup toggle state:
  const [popUp, setPopUp] = useState(false);
  //handle particular user profile state:
  const [userToggle, setUserToggle] = useState(false)
  //state for follow api response:
  const [followResponse, setFollowResponse] = useState(false);
  // const[uniqueId,setUniqueId] = useState({
  //   id:""
  // })
  const [uniqueId, setUniqueId] = useState();
  //state for comment component:
  const[ commentToggle, setCommentToggle] = useState(false)
  const [postId, setPostId] = useState();
  const [userProfile, setUserProfile] = useState('')
  const [userName, setUserName] = useState('')
  const [postDescription, setPostDescription] = useState('')
  const [commentStr,setCommentStr] = useState('')
  const [twitter, setTwitter] = useState('')
  const [postImage,setPostImage] = useState('')
//state for logged user id:
const[logUserId,setLogUserId]  = useState('')
  //user feed unique id:
  const [id, setId] = useState();
  const dispatch = useDispatch();
  //satte for searching:
  const [searchBarValue, setSearchBarValue] = useState("");
  //comment list
  const[commentList, setCommentList] = useState([])
  //handling post  already like or not :
  const [likes, setLikes] = useState([]);
  const [likeCountsArray, setLikeCountsArray] = useState([]);
  const [commentsCountArray, setCommentsCountArray] = useState([]);
  //action for user  suggestion :
  useEffect(() => {
    const userToken = localStorage.getItem("token");

    // console.log("$$$$",userToken)
    if (userToken) {
      const foundToken = JSON.parse(userToken);
      setToken(foundToken);
      // console.log("!!!!!!",foundToken)
      dispatch(getsuggestionAction(foundToken));
      dispatch(feedDataAction(foundToken));
    }
  }, []);
  //getting data from redux:
  const suggesstionList = useSelector(
    (state) => state.getCategoryReducer.suggestionList
  );
  //  console.log("****",suggesstionList)
  useEffect(() => {
    if (suggesstionList) {
      // list.push([suggesstionList])
      setList({ suggesstionList });
      setTemp(suggesstionList);
      // console.log("^^^^^",list)
      // console.log("^^^ggg^^",temp)
    }
    //console.log("&&&&&",list)
  }, [suggesstionList]);
  //handle popup toggle:
  function handlePop(id) {
    //  console.log("%%id", id);
    setId(id);
    setPopUp(!popUp);
  }
  //hitting follow api:
  function handleFollowApi(j, i) {
    // console.log("$$", i);
    setUniqueId(j);
    const userId = {
      followId: j,
    };
    dispatch(followAction(userId));
    setFollowResponse(!followResponse);
    // console.log("@@@@@",followResponse)
  }
  // console.log("88initial***",followResponse)
  //getting data from redux
  const follow = useSelector((state) => state.followReducer.followApi);
  useEffect(() => {
    setStr("Following");
  }, [follow]);
  useEffect(() => {
    dispatch(getsuggestionAction(token));
  }, [followResponse]);
  const feed = useSelector((state) => state.followReducer.feedsData);
  // console.log("$$....$$$", feed);
  // console.log("$$!!!!.$$$", feed?.results);
  useEffect(() => {
    if (feed) {
      setFeedRes(feed.results);
      getLikes();
      getLikeCounts();
    }
  }, [feed]);
  // console.log("@@@@@@@@@@", feedRes);
// console.log("1111111111111",likes)
// console.log("333333333",commentsCountArray)
// console.log("2222222222",likeCountsArray)
  useEffect(() => {
    if (searchBarValue) {
      let suggesstionList = list.suggesstionList?.filter(function (
        item,
        index
      ) {
        let searchstring = item.full_name;
        return (
          searchstring.toUpperCase().indexOf(searchBarValue.toUpperCase()) != -1
        );
      });
      // console.log(suggesstionList)
      setList({ suggesstionList });
    } else {
      const suggesstionList = temp;
      setList({ suggesstionList });
      //   setSearch(text)
    }
  }, [searchBarValue]);
  function handleUniqueProfile(){
    setUserToggle(!userToggle)
  }
  //getting user profile from redux:
const userPic = useSelector((state) => state.loggedInReducer.userData);
useEffect(()=>{
    if(userPic.profile_photo){
      if (userPic.profile_photo.indexOf("http://") == 0 || userPic.profile_photo.indexOf("https://") == 0){
        setProfileImage(userPic.profile_photo)
      }else{
     setProfileImage(baseURL+userPic.profile_photo)
       }
      }
},[userPic])
//handling toggling of comment component :
function handleCommentToggle(id,name,profile,description,twitter,picture) {
// console.log("%%id", id);
 setPostId(id);
 setUserName(name);
 setUserProfile(profile)
 setCommentToggle(!commentToggle);
 setPostDescription(description)
 setTwitter(twitter)
 setPostImage(picture)
}
//getting data from redux to get user id
const logUser = useSelector((state) => state.loggedInReducer.userData);

useEffect(() => { 
  if (logUser) {
    setLogUserId(logUser.id)
}
}, [logUser]);
//handling postcomment api:
const handlePostComment =async(id,index)=>{
  if(commentStr){
    // console.log("22222222")
    const commentDetails = {
      post_Id: id,
      comment: commentStr,
      user_comment_id:logUserId
    }; 
    const response = await commentService(commentDetails ,token)
    if(response.status === 200){
      if(response.data.status === 1){
          const arr = [...commentsCountArray];
          arr[index] = arr[index] + 1;
          setCommentsCountArray(arr)
      }
  }
    // dispatch(commentAction(commentDetails))
  }
}
//handling like api:
const handleLike=async(id,likes,likeCountsArray,index)=>{
  // ggfffgg
  if(likes.indexOf(id) == -1){
    const obj = {
        "like_type": "post",
        "post_id": id
    }
    const response = await likeService(obj,token);
    // console.log(response)
    if(response.status === 200){
        const data = response.data;
        if(data.status === 1){
            const arr = [...likes];
            arr.push(id);
            setLikes(arr);
            const arr1 = [...likeCountsArray];
            arr1[index] = arr1[index] + 1;
            setLikeCountsArray(arr1)
        }
    }
}
else {
  const obj = {
      "like_type": "post",
      "post_id": id
  }
  let token =JSON.parse(localStorage.getItem('token'));
  const response = await dislikePostService(obj, token);
  // console.log("rrrrrrrr",response)

  if(response.status === 200){
      const status = response.data.status;
      if(status === 1){
          const arr = [...likes];
          arr.splice(arr.indexOf(id),1)
          setLikes(arr);
          const arr1 = [...likeCountsArray];
          arr1[index] = arr1[index] - 1;
          setLikeCountsArray(arr1)
      }
  }
}
  // kvfdvfdbd
  // const likeDetails={
  //   like_type: "post",
  //   post_id: id
  // }
  // dispatch(likeAction(likeDetails))
}
//getting user id to know if post liked or not:
const getLikes = () => {
  const user_id = userPic?.id;
  let arr = [];
  feedRes.map((element, index) => {
      if(element.likes.length != 0){
          element.likes.map((e)=> {
              if(e.user === user_id){
                  arr.push(e.post)
                  setLikes(arr)
              }
          })
      }
  });
}
//getting total counts of likes:
const getLikeCounts = () => {
  let arr = [];
  let commentArray = []
  feedRes.map((e)=>{
      arr.push(e.likes_count)
      setLikeCountsArray(arr)
      commentArray.push(e.comments_count);
      setCommentsCountArray(commentArray);
  })
}
  return (
    <div>
      <Head>
        <title>Feeds</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      {popUp ? (
        <Morepopup feedPopup={handlePop} id={id} />
      ) : (

          <>
          {userToggle?
          <UsersProfile/>
          :
   
          <>
            {commentToggle?
            <Comment commentToggle={handleCommentToggle} id={postId} name={userName} photo={userProfile} desc={postDescription}
            twitterName={twitter} postPicture={postImage}/>
          :
          <div className="container">
          <AuthHeader />
          <div className={styles.main}>
            <div className={styles.wrapper}>
              <div className={styles.left_col}>
                {feedRes.map((item, i) => (
                  <div className={styles.post} key={item.id}>
                    <div className={styles.info} >
                      <div className={styles.user}>
                        <div className={styles.profile_pic} onClick={handleUniqueProfile}>
                          <Image
                            src={
                              item.user_detail.profile_photo
                                ? item.user_detail.profile_photo
                                : userImage
                            }
                            alt="user_profile"
                            height={50}
                            width={50}
                            className={styles.profile_cover}
                          ></Image>
                        </div>
                        <div>
                          <div className={styles.postItem}>
                            <p className={styles.username}>
                              {item.user_detail.full_name}
                            </p>
                            <Image src={tick} className={styles.tick}></Image>
                          </div>

                          <p className={styles.userPara}>{item.user_detail.social_details[0].twitter?item.user_detail.social_details[0].twitter:""}</p>
                        </div>
                      </div>
                      <div className={styles.more_image}>
                        <Image
                          src={more}
                          alt=""
                          className={styles.options}
                          onClick={() => handlePop(item.user_detail.id)}
                        ></Image>
                      </div>
                    </div>
                    <Image
                      src={item.post_image ? item.post_image : cover}
                      alt="feed_post"
                      height={600}
                      width={900}
                      className={styles.cover}
                    ></Image>
                    <div className={styles.post_content}>
                      <div className={styles.reaction_wrapper}>
                        <div className={styles.red} onClick={()=>handleLike(item.id,likes,likeCountsArray,i)}>
                        {likes.indexOf(item.id) != -1 ?
                          <Image
                          src={redLike}
                          alt=""
                          className={styles.icon}
                        ></Image>
                        :
                          <Image
                            src={unLike}
                            alt=""
                            className={styles.icon}
                          ></Image>
                        }
                          <span>{likeCountsArray[i]} Like</span>
                        </div>
                        <div className={styles.red}>
                          <Image
                            src={comment}
                            alt=""
                            className={styles.icon2}
                          ></Image>
                          <span>{commentsCountArray[i]} Comment</span>
                        </div>
                        <div className={styles.red}>
                          <Image
                            src={share}
                            alt=""
                            className={styles.icon3}
                          ></Image>
                          <span>89 Share</span>
                        </div>
                      </div>
                      <span className={styles.lineHR}></span>

                      <p className={styles.description}>
                        {item.post_discription}
                      </p>
                      <div className={styles.comment_wrapper}>
                        <Image
                          src={
                            profileImage
                              ? profileImage
                              : userImage
                          }
                          alt="comment_user_profile"
                          height={53}
                          width={53}
                          className={styles.profile_cover}
                        ></Image>

                        <div className={styles.post_text}>
                          <input
                            type="text"
                            className={styles.comment_box}
                            placeholder="Write your comment"
                            onChange={(e)=>setCommentStr(e.target.value)}
                          />
                          <button className={styles.comment_btn} onClick={()=>handlePostComment(item.id,i)}>post</button>
                        </div>
                      </div>
                      {item.comments_count>0?
                      <div className={styles.commentView}>
                          <p className={styles.post_time} 
                          onClick={()=>handleCommentToggle(item.id,item.user_detail.full_name,item.user_detail.profile_photo,
                          item.post_discription,item.user_detail.social_details[0].twitter,item.post_image)}>
                            View all {item.comments_count} comments
                          </p>

                        <p className={styles.post_time}>2 minutes ago</p>
                      </div>
                :""}
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.right_col}>
                <div className={styles.side_post}>
                  <p className={styles.suggestion_text}>Suggestion for you</p>
                  <div
                    className={`${styles.search_wrap} ${styles.search_wrap_1}`}
                  >
                    <div className={styles.search_box}>
                      <input
                        type="text"
                        value={searchBarValue}
                        className={styles.input}
                        placeholder="search..."
                        onChange={(e) => setSearchBarValue(e.target.value)}
                      />
                      <div className={`${styles.btn} ${styles.btn_common}`}>
                        <Image
                          src={search}
                          alt="search_img"
                          className={styles.searchIMG}
                        ></Image>
                      </div>
                    </div>
                  </div>
                  <div className={styles.wrap_div}>
                    {list.suggesstionList?.map((item, i) => (
                      <div className={styles.profile_card} key={i}>
                        <div className={styles.profile_pic}>
                          {item.profile_photo.indexOf("http://") == 0 ||
                          item.profile_photo.indexOf("https://") == 0 ? (
                            <Image
                              src={
                                item.profile_photo
                                  ? item.profile_photo
                                  : userImage
                              }
                              className={styles.sideImage}
                              alt="userprofile"
                              height={50}
                              width={50}
                            ></Image>
                          ) : (
                            <Image
                              src={
                                item.profile_photo === ""
                                  ? userImage
                                  : baseURL + item.profile_photo
                              }
                              className={styles.sideImage}
                              alt="userprofile"
                              height={50}
                              width={50}
                            ></Image>
                          )}
                        </div>
                        <div className={styles.post_detail}>
                          <p className={styles.username}>{item.full_name}</p>
                          <Image src={tick} className={styles.tick}></Image>
                        </div>
                        <button
                          className={styles.action_btn}
                          onClick={() => handleFollowApi(item.id, i)}
                          key={item.id}
                        >
                          {uniqueId === item.id ? "Following" : "Follow"}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
 }   
 </>     
}
</>


      )}
    </div>
  );
}
export default withAuth(Feed);
