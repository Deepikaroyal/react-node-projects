import React from "react";
import { Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import CustomDatePicker from "../../../components/Common/customDatepicker";
import MultipleSelect from "../../../components/Common/MultipleSelect";
import Select from "../../../components/Common/Select";

const FuDiscounted = (props) => {
  const _dark = props._dark ? props._dark : false;
  const useStyles = makeStyles({
    TypFUoutstandHdrCls: {
      fontSize: "18px",
      fontWeight: "700",
      fontFamily: "lato",
    },
    TypFuoutstandCls: {
      fontSize: "14px",
      fontWeight: "700",
      fontFamily: "lato",
      marginTop: "15px",
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
  const BuyerEntity = [
    { name: "Lorem Ipsum", value: "1" },
    { name: "Lorem ipsum", value: "2" },
  ];
  const [buyerentity, setbuyerentity] = React.useState(null);

  const handlebuyerChange = (event) => {
    // console.log(event);
    setbuyerentity(event.target.value);
  };

  const FactoryUnit = [
    { name: "FU1233451", value: "1" },
    { name: "FU1233452", value: "2" },
  ];
  const [factoryunit, setfactoryunit] = React.useState(null);

  const handlefactoryChange = (event) => {
    // console.log(event);
    setfactoryunit(event.target.value);
  };
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
          <Typography className={classes.TypFUoutstandHdrCls}>
            FU Discounted Report
          </Typography>
          <Stack
            style={{ marginTop: "20px", marginLeft: "-5px" }}
            direction="row"
            spacing={4}
          >
            <MultipleSelect
              value={buyerentity}
              label="Buyer Entity Name"
              onChange={handlebuyerChange}
              size="small"
              width="335px"
              data={BuyerEntity}
            />
            <CustomDatePicker label="From Date*" />
            <CustomDatePicker label="To Date*" />
          </Stack>
          <Stack
            direction="row"
            spacing={33}
            marginLeft="380px"
            marginTop="5px"
          >
            <Typography
              marginLeft="-5px"
              fontFamily="lato"
              fontSize="12px"
              color="rgba(0,0,0,0.6)"
            >
              FU Financed Date{" "}
            </Typography>
            <Typography
              fontFamily="lato"
              fontSize="12px"
              color="rgba(0,0,0,0.6)"
            >
              FU Financed Date{" "}
            </Typography>
          </Stack>
          <Stack
            style={{ marginTop: "18px", marginLeft: "-5px" }}
            direction="row"
            spacing={4}
          >
            <MultipleSelect
              value={factoryunit}
              label="Factory Unit No."
              onChange={handlefactoryChange}
              size="small"
              width="335px"
              data={FactoryUnit}
            />
            <div>
              <Select
                value={reportformat}
                label="Report Format"
                onChange={handleChange}
                size="small"
                width="335px"
                data={ReportFormat}
              />
            </div>
          </Stack>
          <Button className={classes.GenBtnCls}>Generate</Button>
        </CardContent>
      </Card>
    </div>
  );
};
export default FuDiscounted;
