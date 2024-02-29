import React from "react";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Select from "../../../components/Common/Select";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";

const LimitUtilization = (props) => {
  const _dark = props._dark ? props._dark : false;
  const useStyles = makeStyles({
    TypLimHdrCls: {
      fontSize: "18px",
      fontWeight: "700",
      fontFamily: "lato",
    },
    GenBtnCls: {
      color: _dark ? "#fff" : "#97144d",
      fontSize: "14px",
      fontWeight: "700",
      fontFamily: "lato",
      textTransform: "capitalize",
      border: `1px solid ${_dark ? "#fff" : "#97144d"}`,
      width: "102px",
      height: "40px",
      marginTop: "20px",
      marginLeft: "5px",
    },
    TypLimitCls: {
      fontSize: "14px",
      fontWeight: "700",
      fontFamily: "lato",
      marginTop: "15px",
    },
  });

  const classes = useStyles();
  const ReportFormat = [
    { name: "Excel", value: "1" },
    { name: "Pdf", value: "2" },
  ];
  const [reportformat, setreportformat] = React.useState(null);

  const handleChange = (event) => {
    // console.log(event);
    setreportformat(event.target.value);
  };

  return (
    <div>
      <Card style={{ marginTop: "15px", boxShadow: "0 3px 5px #bebebe" }}>
        <CardContent>
          <Typography className={classes.TypLimHdrCls}>
            Limit Utilization Report
          </Typography>
          <Typography className={classes.TypLimitCls}>
            Report shall be generated on date
          </Typography>
          <div style={{ marginTop: "20px", marginLeft: "-5px" }}>
            <Select
              value={reportformat}
              label="Report Format"
              onChange={handleChange}
              size="small"
              width="335px"
              data={ReportFormat}
            />
          </div>
          <Button className={classes.GenBtnCls}>Generate</Button>
        </CardContent>
      </Card>
    </div>
  );
};
export default LimitUtilization;
