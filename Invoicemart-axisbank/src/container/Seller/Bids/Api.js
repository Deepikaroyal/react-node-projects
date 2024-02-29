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

export const ApiBUResponses = async (
  sellerEntityIds,
  fromDate,
  toDate,
  fuArray
) => {
  let sellerArray = [];
  let fromdate = "";
  let todate = "";
  let fuBody = null;
  // console.log("^^^^!!!",buyerEntityIds)
  // console.log("^^^^33",fuArray,"@@",buyerArray)
  if (sellerEntityIds.length > 0) {
    for (var i = 0; i < sellerEntityIds.length; i++) {
      sellerArray.push(sellerEntityIds[i].sellerEntityId.toString());
    }
  }
  if (fromDate && toDate) {
    fromdate = moment(fromDate).format("yyyy-MM-DD") + " 00:00:00.000";
    todate = moment(toDate).format("yyyy-MM-DD") + " 00:00:00.000";
  }
  if (sellerArray.length > 0) {
    fuBody = {
      dateFrom: fromdate ? fromdate : getFromToDate() + " 00:00:00.000",
      dateTo: todate ? todate : getCurrentDate() + " 00:00:00.000",
      fetchStrategy: 3,
      toFetchEntityIDs: sellerArray,
    };
  } else {
    fuBody = {
      dateFrom: fromdate ? fromdate : getFromToDate() + " 00:00:00.000",
      dateTo: todate ? todate : getCurrentDate() + " 00:00:00.000",
      fetchStrategy: 3,
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
