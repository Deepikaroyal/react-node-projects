import moment from "moment";
import { MasterStatusCodes } from "./bidStatusCode";

export const MakeRandomCharNum = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const StringMerge = (a, b) => {
  var i,
    l = Math.min(a.length, b.length),
    temp = "";
  for (i = 0; i < l; i++) {
    temp += a[i] + b[i];
  }
  return temp + a.slice(i) + b.slice(i);
};

export const CalculateDays = (_date) => {
  const today = moment();
  var startDate = moment(today.format("YYYY-MM-DD"));
  var endDate = moment(_date, "YYYY-MM-DD");
  var duration = moment.duration(endDate.diff(startDate));
  var days = duration.asDays().toFixed(0);
  return parseFloat(days);
};

export const ConvertDaysToDate = (_day) => {
  const today = moment();
  var new_date = moment(today, "DD-MM-YYYY").add("days", _day);
  return (
    new_date.format("DD") +
    "/" +
    new_date.format("MM") +
    "/" +
    new_date.format("YYYY")
  );
};

export const fetchStatusCode = (key) => {
  let data = MasterStatusCodes.filter((k) => k.STATUS_CODE === key);
  if (data) return data[0].STATUS_DESC;
  else return "Default FU";
};

export function getCurrentDate(separator = "-") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}`;
}

export function getFromToDate(separator = "-") {
  let newDate = new Date();
  var x = 14; // go back 14 days!
  newDate.setDate(newDate.getDate() - x);
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}`;
}
