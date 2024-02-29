import { Constants } from "../constants/constants";
const initialState = {
    categoryData: ''
  };
  export default function getCategoryReducer(state = initialState, action) {
     // console.log('state111',state)
    switch (action.type) {
      case Constants.CREATERESET:
        return{
          initialState      
        }
      case Constants.GETDATA:
        return {
          ...state,
          categoryData: action.payload,
        };
        case Constants.GETSUGGESTION:
        return {
          ...state,
          suggestionList: action.payload,
        };
        case Constants.GETCARD:
        return {
          ...state,
          createdData: action.payload,
        };
      
      default:
        return state;   
    }   
    }

  //follow reducer:
  const followinitialState = {
    followApi: ''
  };
  export function followReducer(state = followinitialState, action) {
     // console.log('state111',state)
    switch (action.type) {
      case Constants.FOLLOW:
        return {
          ...state,
          followApi: action.payload,
        };
        case Constants.FEED:
          return {
            ...state,
            feedsData: action.payload,
          };
          case Constants.FOLLOWING:
            return {
              ...state,
              followingData: action.payload,
            };
            case Constants.FOLLOWER:
              return {
                ...state,
                followerData: action.payload,
              };
              case Constants.UNFOLLOW:
                return {
                  ...state,
                  unFollowApi: action.payload,
                };
      default:
        return state;   
    }   
    }  
    //reducer for comment section:

    const commentinitialState = {
      commentApi: ''
    };
    export function commentReducer(state = commentinitialState, action) {
      switch (action.type) {
        case Constants.POSTCOMMENT:
          return {
            ...state,
            commentApi: action.payload,
          };
          case Constants.GETCOMMENT:
            return {
              ...state,
              getCommentApi: action.payload,
            };
            case Constants.LIKES:
              return {
                ...state,
                getLikeApi: action.payload,
              };
      default:
        return state;   
    } 
    }
