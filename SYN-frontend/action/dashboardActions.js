import { toast } from "react-toastify";
import { Constants } from "../constants/constants";
import { createFixedPriceService,getCategoryService,
getSuggestionService,createdCardService,followService,feedDataService,
getFollowingListService,getFollowerListService,unFollowService,
likeService,commentService,getCommentService } from "../services";

//create fixed price action:
export const createFixedPriceAction= (formData) => {
  let token =JSON.parse(localStorage.getItem('token'));
    return (dispatch) => {
     createFixedPriceService(formData,token)
        .then((res) => {
            let status = res.data.status
          if (status===1) {
            toast.success(res.data.responseData.message, {
              autoClose: 1200,
              closeOnClick: true,
              hideProgressBar: true,
              pauseOnHover: false,
            });  
         // dispatch({ type: Constants.LOGINUSER, payload: Data});
          } else if (status===0) {
            toast.error(res.data.error.message, {
              autoClose: 1500,
              closeOnClick: true,
              hideProgressBar: true,
              pauseOnHover: false,
            });
          }
          console.log("res^&^&", res);
        })
        .catch((error) => {
          const errorMessage = error.errorMessage;
          console.log("error", error);
          toast.error("Network Error", {
            autoClose: 1500,
            closeOnClick: true,
            hideProgressBar: true,
            pauseOnHover: false,
          });
        });
    };
  };
  
  //action for getting category list dynamically:
  export const getCategoryAction =(foundToken)=>{
    return (dispatch) => {
      getCategoryService(foundToken)
         .then((res) => {
             let status = res.data.status
           if (status===1) {
              
         dispatch({ type: Constants.GETDATA, payload: res.data.responseData.data});
           };
           
           console.log("res^&^&", res);
         })
         .catch((error) => {
           const errorMessage = error.errorMessage;
           console.log("error", error);
          //  toast.error("Network Error", {
          //    autoClose: 1500,
          //    closeOnClick: true,
          //    hideProgressBar: true,
          //    pauseOnHover: false,
          //  });
         });
     };
  }
  //action for getting user suggestion:
  export const getsuggestionAction = (foundToken)=>{
    return (dispatch) => {
      getSuggestionService(foundToken)
         .then((res) => {
             let status = res.data.status
           if (status===1) {
              
         dispatch({ type: Constants.GETSUGGESTION, payload: res.data.responseData.data});
           };
           
           console.log("res^&^&", res);
         })
         .catch((error) => {
           const errorMessage = error.errorMessage;
           console.log("error", error);
         });
     };
  }
  //user profile created/favourite/owner action:
  export const createdCardAction =(foundToken,userDetail)=>{
    return (dispatch) => {
      createdCardService(foundToken,userDetail)
         .then((res) => {
             let status = res.data.status
           if (status===1) {
              
         dispatch({ type: Constants.GETCARD, payload: res.data.responseData.data});
           };
           
           console.log("res^created&^&", res);
         })
         .catch((error) => {
           const errorMessage = error.errorMessage;
           console.log("error", error);
         });
     };
  }
//action for reset created/favourite/owner action reducer:
export const createdCardResetAction = ()=>{
  return (dispatch) => {
    dispatch({ type: Constants. CREATERESET});
  }
}

  //action for follow api:
  export const followAction =(userId)=>{
    let token =JSON.parse(localStorage.getItem('token'));
    return (dispatch) => {
      followService(userId,token)
         .then((res) => {
             let status = res.data.status
           if (status===1) {            
         dispatch({ type: Constants.FOLLOW, payload: status});
           };
           
           console.log("res^&^&", res);
         })
         .catch((error) => {
           const errorMessage = error.errorMessage;
           console.log("error", error);
         });
     };
  }
  //action for feeds post :
export const feedDataAction =(foundToken)=>{
  return (dispatch) => {
    feedDataService(foundToken)
       .then((res) => {
           let status = res.data.status
         if (status===1) {            
       dispatch({ type: Constants.FEED, payload: res.data.responseData.data});
         };
         
         console.log("res^feed&^&", res);
       })
       .catch((error) => {
         const errorMessage = error.errorMessage;
         console.log("error", error);
       });
   };
}
//action for getting list of all following user:
export const getFollowingListAction =(foundToken)=>{
  return (dispatch) => {
    getFollowingListService(foundToken)
       .then((res) => {
           let status = res.data.status
         if (status===1) {            
       dispatch({ type: Constants.FOLLOWING, payload: res.data.responseData.data});
         };
         
         console.log("res^&^&", res);
       })
       .catch((error) => {
         const errorMessage = error.errorMessage;
         console.log("error", error);
       });
   };
}
//action for getting list of followers :
export const getFollowerListAction =(foundToken)=>{
  return (dispatch) => {
    getFollowerListService(foundToken)
       .then((res) => {
           let status = res.data.status
         if (status===1) {            
       dispatch({ type: Constants.FOLLOWER, payload: res.data.responseData.data});
         };
         
         console.log("res^&^&", res);
       })
       .catch((error) => {
         const errorMessage = error.errorMessage;
         console.log("error", error);
       });
   };
}
//action for unfollow user:
export const unFollowAction =(userId)=>{
  let token =JSON.parse(localStorage.getItem('token'));
    return (dispatch) => {
      unFollowService(userId,token)
         .then((res) => {
             let status = res.data.status
           if (status===1) {            
         dispatch({ type: Constants.UNFOLLOW, payload: status});
           };
           
           console.log("res^&^&", res);
         })
         .catch((error) => {
           const errorMessage = error.errorMessage;
           console.log("error", error);
         });
     };
}
//comment action :
export const commentAction =(commentDetails)=>{
  let token =JSON.parse(localStorage.getItem('token'));
  return (dispatch) => {
    commentService(commentDetails,token)
       .then((res) => {
           let status = res.data.status
         if (status===1) {            
       dispatch({ type: Constants.POSTCOMMENT, payload: status});
         };
         
         console.log("res1^&^&", res);
       })
       .catch((error) => {
         const errorMessage = error.errorMessage;
         console.log("error", error);
       });
   };
}
//getting all comment action:
export const getAllCommentAction =(commentDetails)=>{
  let token =JSON.parse(localStorage.getItem('token'));
  return (dispatch) => {
    getCommentService(commentDetails,token)
       .then((res) => {
           let status = res.data.status
         if (status===1) {            
       dispatch({ type: Constants.GETCOMMENT, payload: res.data.responseData.data});
         };     
         console.log("res1^&^&", res);
       })
       .catch((error) => {
         const errorMessage = error.errorMessage;
         console.log("error", error);
       });
   };
}
// like action:

// export const likeAction =(likeDetails)=>{
//   let token =JSON.parse(localStorage.getItem('token'));
//   return (dispatch) => {
//     likeService(likeDetails,token)
//        .then((res) => {
//            let status = res.data.status
//          if (status===1) {            
//        dispatch({ type: Constants.LIKES, payload: status});
//          };
         
//          console.log("res1^&^&", res);
//        })
//        .catch((error) => {
//          const errorMessage = error.errorMessage;
//          console.log("error", error);
//        });
//    };
// }