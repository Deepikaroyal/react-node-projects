const initialState = {
    Data :{
        a:'',
        b:''
    }
}

export default function sumReducer(state=initialState,action){
    switch(action.type){
     case 'Sum':
     return{
        ...state,
        Data:action.payload
     };
     default:
     return state
    }
}