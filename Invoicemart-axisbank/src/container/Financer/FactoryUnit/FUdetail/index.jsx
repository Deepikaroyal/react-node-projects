import React from "react";
import { Stack } from "@mui/material";
import Tree from "../../../../components/Treeview";
import TextInput from "../../../../components/Common/CustomTextInput";
import InvoiceGrid from "./InvoiceItems";
import FUWorkFlow from "./FUWorkflow";
import InputAdornment from "@mui/material/InputAdornment";
import CalenderIcon from "../../../../assets/SvgIcons/Calendar.svg";
import CalenderWhite from "../../../../assets/SvgIcons/CalendarWhite.svg";

const Fudetails = (props) => {
  const _dark = props._dark ? props._dark : false;
  return (
    <>
      <Tree
        label="Buyer"
        _dark={_dark}
        component={
          <>
            <Stack spacing={3} direction="row">
              <TextInput
                value={"Associated Company"}
                size="small"
                width="31%"
                disabled
              />
              <TextInput
                value={"Authorised By"}
                size="small"
                width="31%"
                disabled
              />
              <TextInput
                value={"Authorised Date"}
                size="small"
                width="31%"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img
                        src={_dark ? CalenderWhite : CalenderIcon}
                        width="20"
                        height="20"
                        alt="calender"
                      />
                    </InputAdornment>
                  ),
                }}
                disabled
              />
            </Stack>
            <Stack spacing={3} direction="row">
              <TextInput
                value={"Auto Authorisation"}
                size="small"
                width="31%"
                disabled
              />
              <TextInput
                value={"Business Type"}
                size="small"
                width="31%"
                disabled
              />
              <TextInput
                value={"Buyer Authorised Date"}
                size="small"
                width="31%"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img
                        src={_dark ? CalenderWhite : CalenderIcon}
                        width="20"
                        height="20"
                        alt="calender"
                      />
                    </InputAdornment>
                  ),
                }}
                disabled
              />
            </Stack>
            <Stack spacing={3} direction="row">
              <TextInput
                value={"Buyer Authoriser"}
                size="small"
                width="31%"
                disabled
              />
              <TextInput
                value={"Buyer BU ID"}
                size="small"
                width="31%"
                disabled
              />
              <TextInput
                value={"Buyer Entity ID"}
                size="small"
                width="31%"
                disabled
              />
            </Stack>
            <Stack spacing={3} direction="row">
              <TextInput
                value={"Buyer GST No."}
                size="small"
                width="31%"
                disabled
              />
              <TextInput
                value={"Create By"}
                size="small"
                width="31%"
                disabled
              />
              <TextInput
                value={"Create Date"}
                size="small"
                width="31%"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img
                        src={_dark ? CalenderWhite : CalenderIcon}
                        width="20"
                        height="20"
                        alt="calender"
                      />
                    </InputAdornment>
                  ),
                }}
                disabled
              />
            </Stack>
          </>
        }
      />
      <Tree
        label="Seller"
        _dark={_dark}
        component={
          <>
            <Stack spacing={3} direction="row">
              <TextInput
                value={"Seller BU ID"}
                size="small"
                width="31%"
                disabled
              />
              <TextInput
                value={"Seller Entity ID"}
                size="small"
                width="31%"
                disabled
              />
              <TextInput
                value={"Seller GST No."}
                size="small"
                width="31%"
                disabled
              />
            </Stack>
            <Stack spacing={3} direction="row">
              <TextInput
                value={"Status Code"}
                size="small"
                width="31%"
                disabled
              />
              <TextInput
                value={"Supplier Authorised Date"}
                size="small"
                width="31%"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img
                        src={_dark ? CalenderWhite : CalenderIcon}
                        width="20"
                        height="20"
                        alt="calender"
                      />
                    </InputAdornment>
                  ),
                }}
                disabled
              />
              <TextInput
                value={"Supplier Authorisor"}
                size="small"
                width="31%"
                disabled
              />
            </Stack>
          </>
        }
      />
      <Tree
        label="Commercial"
        _dark={_dark}
        component={
          <>
            <Stack spacing={3} direction="row">
              <TextInput
                value={"Disbursed Amount"}
                size="small"
                width="31%"
                disabled
              />
              <TextInput
                value={"Disbursed Date"}
                size="small"
                width="31%"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img
                        src={_dark ? CalenderWhite : CalenderIcon}
                        width="20"
                        height="20"
                        alt="calender"
                      />
                    </InputAdornment>
                  ),
                }}
                disabled
              />
              <TextInput
                value={"FU Date"}
                size="small"
                width="31%"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img
                        src={_dark ? CalenderWhite : CalenderIcon}
                        width="20"
                        height="20"
                        alt="calender"
                      />
                    </InputAdornment>
                  ),
                }}
                disabled
              />
            </Stack>
            <Stack spacing={3} direction="row">
              <TextInput
                value={"FU Due Date"}
                size="small"
                width="31%"
                disabled
              />
              <TextInput value={"FU No."} size="small" width="31%" disabled />
              <TextInput
                value={"FU Outstanding Amount"}
                size="small"
                width="31%"
                disabled
              />
            </Stack>
            <Stack spacing={3} direction="row">
              <TextInput
                value={"Goods Type"}
                size="small"
                width="31%"
                disabled
              />
              <TextInput value={"Tenor"} size="small" width="31%" disabled />
              <TextInput
                value={"Total N0. of Invoices"}
                size="small"
                width="31%"
                disabled
              />
            </Stack>
          </>
        }
      />
      <Tree
        label="Invoice Line Items"
        _dark={_dark}
        component={
          <>
            <InvoiceGrid _dark={_dark} />
          </>
        }
      />
      <Tree
        label="FU Workflow History"
        _dark={_dark}
        component={
          <>
            <FUWorkFlow backFlow={props.backFlow} _dark={_dark} />
          </>
        }
      />
    </>
  );
};
export default Fudetails;
