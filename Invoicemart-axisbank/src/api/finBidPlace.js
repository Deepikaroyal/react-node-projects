import axios from "axios";
import { All_URLS } from "../constants";

export const finBidPlace = async (body) => {
  var config = {
    method: "post",
    url: All_URLS.BID_PLACE,
    headers: {
      "Content-Type": "application/json",
      logintype: "JWT",
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
    data: body,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};
