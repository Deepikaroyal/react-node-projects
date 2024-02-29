import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Defaultmeter from "../../../components/Dashboard/DefaultMeter";
import CustomSelect from "../../../components/Dashboard/DropDownCmp";

const useStyles = makeStyles({
  FstSmallRectCls: {
    width: "20px",
    height: "20px",
    backgroundColor: "#97144D",
    marginTop: "20px",
    borderRadius: 5,
    marginLeft: "-225px",
  },
  SecSmallRectCls: {
    width: "20px",
    height: "20px",
    backgroundColor: "#AC4371",
    marginTop: "20px",
    borderRadius: 5,
    marginLeft: "-225px",
  },
  ThrSmallRectCls: {
    width: "20px",
    height: "20px",
    backgroundColor: "#C17294",
    marginTop: "-59px",
    borderRadius: 5,
    marginLeft: "-105px",
  },
  FouSmallRectCls: {
    width: "20px",
    height: "20px",
    backgroundColor: "#E0B9CA",
    marginTop: "20px",
    borderRadius: 5,
    marginLeft: "-105px",
  },
  TypCls: {
    fontSize: "12px",
    fontFamily: "lato",
    marginLeft: "30px",
    width: "50px",
  },
  SecRectTypCls: {
    fontSize: "12px",
    fontFamily: "lato",
    marginLeft: "30px",
    width: "70px",
  },
  ThirdRectTypCls: {
    fontSize: "12px",
    fontFamily: "lato",
    marginLeft: "30px",
    width: "70px",
  },
  DspFlxEvnCls: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
});
const Lostbid = () => {
  const classes = useStyles();

  const LostBidddl = [
    { name: "Bids-Past 14 days", value: "14" },
    { name: "Bids-Past 30 days", value: "30" },
    { name: "Bids-Current Quarter", value: "90" },
    { name: "Bids-Current Year", value: "120" },
  ];
  const LostBidData = [
    { name: "Duroflex", rate: "₹ 10.00" },
    { name: "Tata Motor", rate: "₹8.00" },
    { name: "Hero Honda", rate: "₹ 6.00" },
    { name: "Skoda India", rate: "₹ 2.00" },
  ];
  return (
    <div style={{ height: "140px" }}>
      <div className={classes.DspFlxEvnCls}>
        <Typography
          fontSize="16px"
          fontWeight="bold"
          fontFamily="lato"
          marginTop="5px"
        >
          Lost Bids
        </Typography>
        <div>
          <CustomSelect
            style={{
              position: "relative",
              fontWeight: "700",
              fontSize: "12px",
            }}
            data={LostBidddl}
            width="155px"
          />{" "}
        </div>
      </div>
      <div className={classes.DspFlxEvnCls}>
        <div style={{ marginTop: "-10px", marginLeft: "-140px" }}>
          <Defaultmeter />
        </div>
        <div>
          {LostBidData.map((c, i) => (
            <div
              className={
                i === 0
                  ? classes.FstSmallRectCls
                  : i === 1
                  ? classes.SecSmallRectCls
                  : i === 2
                  ? classes.ThrSmallRectCls
                  : classes.FouSmallRectCls
              }
              key={"lostbid" + i}
            >
              <Typography
                className={
                  i === 0
                    ? classes.TypCls
                    : i === 1
                    ? classes.SecRectTypCls
                    : classes.ThirdRectTypCls
                }
              >
                {c.name} ({c.rate})
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Lostbid;
