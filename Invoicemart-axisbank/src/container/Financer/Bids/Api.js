/* eslint-disable */
import {
  getFuFetch,
  getBuyerFu,
  getBidCountFetch,
  getBidFetch,
  getBiddedFuNumber,
  getFuAdditionalDetail,
  getFUFinBidModifyDetail,
} from "../../../api/bids";
import moment from "moment";
import { getCurrentDate, getFromToDate } from "../../../utils/general";

export const ApiFUResponses = async (
  buyerEntityIds,
  fromDate,
  toDate,
  fuArray
) => {
  let buyerArray = [];
  let fromdate = "";
  let todate = "";
  let fuBody = null;
  // console.log("^^^^!!!",buyerEntityIds)
  // console.log("^^^^33",fuArray,"@@",buyerArray)
  if (buyerEntityIds.length > 0) {
    for (var i = 0; i < buyerEntityIds.length; i++) {
      buyerArray.push(buyerEntityIds[i].buyerEntityId.toString());
    }
  }
  if (fromDate && toDate) {
    fromdate = moment(fromDate).format("yyyy-MM-DD") + " 00:00:00.000";
    todate = moment(toDate).format("yyyy-MM-DD") + " 00:00:00.000";
  }
  if (buyerArray.length > 0) {
    fuBody = {
      dateFrom: fromdate ? fromdate : getFromToDate() + " 00:00:00.000",
      dateTo: todate ? todate : getCurrentDate() + " 00:00:00.000",
      fetchStrategy: 2,
      toFetchEntityIDs: buyerArray,
    };
  } else {
    fuBody = {
      dateFrom: fromdate ? fromdate : getFromToDate() + " 00:00:00.000",
      dateTo: todate ? todate : getCurrentDate() + " 00:00:00.000",
      fetchStrategy: 2,
      toFetchEntityIDs: fuArray,
    };
  }

  let Response = await getFuFetch(fuBody);
  let fuNumArray = [];
  if (Response && Response.data && Response.data.length > 0) {
    const furow = Response.data.map((item) => {
      const container = {};
      fuNumArray.push(item.fuNumber);
      container.id = item.fuNumber;
      container.InvoiceCount = item.totalNoOfInvoices;
      container.Buyer = item.buyerName;
      container.Seller = ""; /*coming from fuadditional details */
      container.Udyam = ""; /*coming from fuadditional details */
      container.FU_Created_Date = "-";
      container.FU_Amount = item.batchAmount;
      container.Buyer_Limit_Available = "Yes"; /*not coming */
      container.STP = ""; /*coming from fuadditional details */
      container.Related_Party = ""; /*coming from fuadditional details */
      container.MSME_Classfication = ""; /*coming from fuadditional details */
      container.FU_Due_Date = item.fuDueDate;
      container.Fu_Tenor = item.tenor;
      container.ResidualTenor = item.residualTenor;
      container.Lowest_Bid = ""; /*not coming */
      container.BidCount = ""; /* bid count api */
      container.My_Bid = ""; /*not coming */
      container.Valid_For = 4; /*bid count api */
      container.Earnings = (
        item.batchAmount *
        (item.interestRate / item.tenor)
      ).toFixed(2);
      container.CheckerLevel = 4; /*not coming */
      container.Bid_Made_By = "";
      container.checkedBy = ""; /*bid fetch api*/
      container.Won_Bid = 5; /*not coming */
      container.FU_Status = "APPROVED"; /*not coming */
      container.My_Bid_Status = "Won"; /*not coming */
      container.buyerEntityId = item.buyerEntityId;
      container.data = item;
      return container;
    });
    let Fuobj = { furow, fuNumArray };
    return Fuobj;
  }
};

//for Bid management :
export const fetchBiddedFuNumber = async (fromDate, toDate) => {
  let biddedFuArray = [];
  let fromdate = "";
  let todate = "";
  let fuBody = null;
  if (fromDate && toDate) {
    fromdate = moment(fromDate).format("yyyy-MM-DD");
    todate = moment(toDate).format("yyyy-MM-DD");
  }
  fuBody = {
    bidDateFrom: fromdate ? fromdate : "2022-01-01",
    bidDateTO: todate ? todate : "2031-11-28",
  };
  let biddedRes = await getBiddedFuNumber(fuBody);
  if (biddedRes && biddedRes.data && biddedRes.data.length > 0) {
    biddedRes.data.map((item) => {
      biddedFuArray.push(item.fuNumber);
    });
  }
  return biddedFuArray;
};
export const ApiBidManageFUResponses = async (biddedFu, fromDate, toDate) => {
  let fromdate = "";
  let todate = "";
  let fuBody = null;
  if (fromDate && toDate) {
    fromdate = moment(fromDate).format("yyyy-MM-DD") + " 00:00:00.000";
    todate = moment(toDate).format("yyyy-MM-DD") + " 00:00:00.000";
  }
  if (biddedFu.length > 0) {
    fuBody = {
      dateFrom: fromdate ? fromdate : getFromToDate() + " 00:00:00.000",
      dateTo: todate ? todate : getCurrentDate() + " 00:00:00.000",
      fetchStrategy: 2,
      fus: biddedFu,
    };
  }

  let Response = await getFuFetch(fuBody);
  let fuNumArray = [];
  if (Response && Response.data && Response.data.length > 0) {
    const furow = Response.data.map((item) => {
      const container = {};
      fuNumArray.push(item.fuNumber);
      container.id = item.fuNumber;
      container.InvoiceCount = item.totalNoOfInvoices;
      container.Buyer = item.buyerName;
      container.Seller = ""; /*coming from fuadditional details */
      container.Udyam = ""; /*coming from fuadditional details */
      container.FU_Created_Date = "-";
      container.FU_Amount = item.batchAmount;
      container.Buyer_Limit_Available = "Yes"; /*not coming */
      container.STP = ""; /*coming from fuadditional details */
      container.Related_Party = ""; /*coming from fuadditional details */
      container.MSME_Classfication = ""; /*coming from fuadditional details */
      container.FU_Due_Date = item.fuDueDate;
      container.bidId = "";
      container.Fu_Tenor = item.tenor;
      container.Auth_Action = ""; /*not coming */
      container.ResidualTenor = item.residualTenor;
      container.Lowest_Bid = ""; /*not coming */
      container.BidCount = ""; /* bid count api */
      container.My_Bid = ""; /*not coming */
      container.Valid_For = 4; /*bid count api */
      container.Earnings = (
        item.batchAmount *
        (item.interestRate / item.tenor)
      ).toFixed(2);
      container.CheckerLevel = 4; /*not coming */
      container.Bid_Made_By = "";
      container.checkedBy = ""; /*bid fetch api*/
      container.Won_Bid = 5; /*not coming */
      container.FU_Status = "APPROVED"; /*not coming */
      container.My_Bid_Status = "Won"; /*not coming */
      container.buyerEntityId = item.buyerEntityId;
      container.data = item;
      return container;
    });
    let Fuobj = { furow, fuNumArray };
    return Fuobj;
  }
};

//for Bid modify/cancel screen:
export const fetchModifyFuNumber = async (
  buyerEntityIds,
  fromDate,
  toDate,
  fuArray
) => {
  let buyerArray = [];
  let modifyFus = [];
  let fromdate = "";
  let todate = "";
  let fuBody = null;
  //console.log("@@@@111",fuArray)
  if (buyerEntityIds.length > 0) {
    for (var i = 0; i < buyerEntityIds.length; i++) {
      buyerArray.push(buyerEntityIds[i].buyerEntityId.toString());
    }
  }
  if (fromDate && toDate) {
    fromdate = moment(fromDate).format("yyyy-MM-DD");
    todate = moment(toDate).format("yyyy-MM-DD");
  }
  fuBody = {
    dateFrom: fromdate ? fromdate : getFromToDate() + " 00:00:00.000",
    dateTo: todate ? todate : getCurrentDate() + " 00:00:00.000",
  };
  if (buyerArray.length > 0) {
    fuBody = {
      dateFrom: fromdate ? fromdate : getFromToDate() + " 00:00:00.000",
      dateTo: todate ? todate : getCurrentDate() + " 00:00:00.000",
      buyerEntityId: buyerArray,
    };
  } else {
    fuBody = {
      dateFrom: fromdate ? fromdate : getFromToDate() + " 00:00:00.000",
      dateTo: todate ? todate : getCurrentDate() + " 00:00:00.000",
      buyerEntityId: fuArray,
    };
  }
  let ModifyRes = await getFUFinBidModifyDetail(fuBody);
  if (ModifyRes && ModifyRes.data && ModifyRes.data.length > 0) {
    ModifyRes.data.map((item) => {
      modifyFus.push(item.fuNumber);
    });
  }
  return modifyFus;
};
export const ApiBidModifyFuResponse = async (modifyFu, fromDate, toDate) => {
  let fromdate = "";
  let todate = "";
  let fuBody = null;
  // console.log("####@@",biddedFu.length)
  if (fromDate && toDate) {
    fromdate = moment(fromDate).format("yyyy-MM-DD") + " 00:00:00.000";
    todate = moment(toDate).format("yyyy-MM-DD") + " 00:00:00.000";
  }
  if (modifyFu.length > 0) {
    fuBody = {
      dateFrom: fromdate ? fromdate : getFromToDate() + " 00:00:00.000",
      dateTo: todate ? todate : getCurrentDate() + " 00:00:00.000",
      fetchStrategy: 2,
      fus: modifyFu,
    };
  }
  if (modifyFu && modifyFu.length > 0) {
    // console.log("####@@3",biddedFu.length)
    let Response = await getFuFetch(fuBody);
    let fuNumArray = [];
    if (Response && Response.data && Response.data.length > 0) {
      const furow = Response.data.map((item) => {
        const container = {};
        fuNumArray.push(item.fuNumber);
        container.id = item.fuNumber;
        container.InvoiceCount = item.totalNoOfInvoices;
        container.Buyer = item.buyerName;
        container.Seller = ""; /*coming from fuadditional details */
        container.Udyam = ""; /*coming from fuadditional details */
        container.FU_Created_Date = "-";
        container.FU_Amount = item.batchAmount;
        container.Buyer_Limit_Available = "Yes"; /*not coming */
        container.STP = ""; /*coming from fuadditional details */
        container.Related_Party = ""; /*coming from fuadditional details */
        container.MSME_Classfication = ""; /*coming from fuadditional details */
        container.FU_Due_Date = item.fuDueDate;
        container.Fu_Tenor = item.tenor;
        container.Auth_Action = ""; /*not coming */
        container.ResidualTenor = item.residualTenor;
        container.Lowest_Bid = ""; /*not coming */
        container.BidCount = ""; /* bid count api */
        container.My_Bid = ""; /*not coming */
        container.Valid_For = 4; /*bid count api */
        container.Earnings = (
          item.batchAmount *
          (item.interestRate / item.tenor)
        ).toFixed(2);
        container.CheckerLevel = 4; /*not coming */
        container.Bid_Made_By = "";
        container.checkedBy = ""; /*bid fetch api*/
        container.Won_Bid = 5; /*not coming */
        container.FU_Status = "APPROVED"; /*not coming */
        container.My_Bid_Status = "Won"; /*not coming */
        container.buyerEntityId = item.buyerEntityId;
        container.data = item;
        return container;
      });
      let Fuobj = { furow, fuNumArray };
      return Fuobj;
    }
  }
};

export const fetchBidCount = async (furow, fuNumArray) => {
  let BidCountApiRes = await getBidCountFetch(
    JSON.stringify({ fus: fuNumArray })
  );
  let updateRow = furow;
  if (BidCountApiRes && BidCountApiRes.data && BidCountApiRes.data.length > 0) {
    updateRow.map((element) => {
      var foundIndex = BidCountApiRes.data.findIndex(
        (x) => x.fuNumber === element.id
      );
      if (foundIndex !== -1) {
        element.BidCount = BidCountApiRes.data[foundIndex].bidCount;
        element.Lowest_Bid = BidCountApiRes.data[foundIndex].minBidRate;
      }
    });
  }
  return updateRow;
};
export const fetchBidApi = async (furow, fuNumArray) => {
  let BidApiRes = await getBidFetch(JSON.stringify({ fus: fuNumArray }));
  let updateRow = furow;
  if (BidApiRes && BidApiRes.data && BidApiRes.data.length > 0) {
    updateRow.map((element) => {
      var foundIndex = BidApiRes.data.findIndex(
        (x) => x.fuNumber === element.id
      );
      if (foundIndex !== -1) {
        element.checkedBy = BidApiRes.data[foundIndex].checkedBy;
        element.My_Bid = BidApiRes.data[foundIndex].interestRate;
        element.Bid_Made_By = BidApiRes.data[foundIndex].madeBy;
        element.FU_Created_Date = BidApiRes.data[foundIndex].madeDateTime;
        element.Auth_Action = BidApiRes.data[foundIndex].bidStatus;
      }
    });
  }
  return updateRow;
};
export const fuFetchAdditionalDetails = async (furow, fuNumArray) => {
  let fuDetailRes = await getFuAdditionalDetail(
    JSON.stringify({ fus: fuNumArray })
  );
  let updateRow = furow;
  if (fuDetailRes && fuDetailRes.data && fuDetailRes.data.length > 0) {
    // console.log("$$$", fuDetailRes)
    updateRow.map((element) => {
      var foundIndex = fuDetailRes.data.findIndex(
        (x) => x.fuNumber === element.id
      );
      if (foundIndex !== -1) {
        element.Related_Party =
          fuDetailRes.data[foundIndex].sellerRelatedPartyToBuyer;
        element.MSME_Classfication =
          fuDetailRes.data[foundIndex].sellerMSMEStatus;
        element.STP = fuDetailRes.data[foundIndex].sellerRelatedPartyToBuyer;
        element.Seller = fuDetailRes.data[foundIndex].sellerName;
        element.Udyam = fuDetailRes.data[foundIndex].buyerUdyamRegNo;
      }
    });
  }
  return updateRow;
};
