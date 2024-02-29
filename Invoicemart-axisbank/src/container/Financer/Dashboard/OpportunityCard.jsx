import { Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import CustomSelect from "../../../components/Dashboard/DropDownCmp";

const useStyles = makeStyles({
  RectCls: {
    width: "27%",
    height: "70px",
    // backgroundColor: '#f1f1f1',
    border: "2px solid #f1f1f1",
    marginTop: "10px",
    marginRight: "10px",
    borderRadius: "10px",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "2px 2px 2px 2px #bebebe",
    },
  },
  // BigRectCls: {
  //     width: '165px',
  //     height: '70px',
  //     // backgroundColor: '#f1f1f1',
  //     border: '2px solid #f1f1f1',
  //     marginTop: '7px',
  //     borderRadius: '10px',
  //     cursor: 'pointer',
  //     '&:hover': {
  //         boxShadow: '2px 2px 2px 2px #bebebe'
  //     }
  // },
  TypBolCls: {
    fontSize: "11px",
    textAlign: "center",
    paddingTop: "5px",
    Family: "lato",
    fontWeight: "700",
  },
  TypCls: {
    fontSize: "10px",
    textAlign: "center",
    paddingTop: "5px",
    Family: "lato",
    fontWeight: "400",
  },
  DspFlxEvnCls: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "20px",
    paddingRight: "20px",
  },

  DspFlxSecEvnCls: {
    display: "flex",
    justifyContent: "space-evenly",
    paddingLeft: "20px",
    paddingRight: "10px",
  },
});

const Opportunity = () => {
  const classes = useStyles();
  const Opportunityddl = [
    { name: "Throughput-Past 14 days", value: "14" },
    { name: "Throughput-Past 14 days", value: "30" },
    { name: "Throughput-Current Quarter", value: "90" },
    { name: "Throughput-Current Year", value: "120" },
  ];
  const OppertunityData = [
    { name: "Duroflex", value: "5.6", rate: "₹ 36.00", days: "68 days" },
    { name: "Himmatsingka", value: "8.2", rate: "₹ 28.00", days: "40 days" },
    { name: "Signode India", value: "8.2", rate: "₹ 22.00", days: "40 days" },
    { name: "Tirth Agro", value: "8.2", rate: "₹ 16.00", days: "40 days" },
  ];
  return (
    <div style={{ height: "130px" }}>
      <div className={classes.DspFlxEvnCls}>
        <Typography
          variant="h6"
          fontSize="16px"
          fontWeight="bold"
          fontFamily="lato"
          paddingTop="10px"
        >
          Opportunity
        </Typography>
        <div>
          <CustomSelect
            style={{
              position: "relative",
              fontWeight: "700",
              fontSize: "12px",
            }}
            data={Opportunityddl}
            width="200px"
          />
        </div>
      </div>
      <div className={classes.DspFlxSecEvnCls}>
        {OppertunityData.map((c, i) => (
          <div className={classes.RectCls} key={"opert" + i}>
            <Typography variant="h5" className={classes.TypBolCls}>
              {c.name} <br />
              {c.rate}
            </Typography>
            <Typography className={classes.TypCls}>
              {c.value} | {c.days}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Opportunity;
