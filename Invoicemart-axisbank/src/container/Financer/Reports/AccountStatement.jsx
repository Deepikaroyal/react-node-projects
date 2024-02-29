import React from "react";
import { Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import CustomDatePicker from "../../../components/Common/customDatepicker";
import Select from "../../../components/Common/Select";

const AccountStatement = (props) => {
  const _dark = props._dark ? props._dark : false;
  const useStyles = makeStyles({
    TypAccHdrCls: {
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
          <Typography className={classes.TypAccHdrCls}>
            Account Statement Report
          </Typography>
          <Stack style={{ marginTop: "20px" }} direction="row" spacing={4}>
            <CustomDatePicker label="From Date*" />
            <CustomDatePicker label="To Date*" />
          </Stack>
          <Stack direction="row" spacing={34} marginTop="5px">
            <Typography marginLeft="10px" fontFamily="lato" fontSize="12px">
              Transaction Date{" "}
            </Typography>
            <Typography fontFamily="lato" fontSize="12px">
              Transaction Date{" "}
            </Typography>
          </Stack>
          <div style={{ marginTop: "18px", marginLeft: "-5px" }}>
            <Select
              value={reportformat}
              label="Report Format"
              onChange={handleChange}
              size="small"
              style={{ width: "330px" }}
              data={ReportFormat}
            />
          </div>
          <Button className={classes.GenBtnCls}>Generate</Button>
        </CardContent>
      </Card>
    </div>
  );
};
export default AccountStatement;
