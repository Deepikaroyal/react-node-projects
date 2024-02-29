import { Constants } from '../Constants/alertConstants';

// export const alertActions = {
//     success,
//     error,
//     clear
// };

// function success(message) {
//     return { type: alertConstants.SUCCESS, message };
// }

// function error(message) {
//     return { type: alertConstants.ERROR, message };
// }

// function clear() {
//     return { type: alertConstants.CLEAR };
// }

export const alertActions= (data) => {
    console.log('@@@',data);
    return {
        type:Constants.LOGIN,
        payload: data
    }
}


