import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import React, { useEffect, useMemo, useState } from "react";

export default function AutoCompleteInputBox(props) {
  const width = props.width ? props.width : "450px";
  const entityNames = useMemo(() => {
    const eNames = props.data ? props.data : [];
    return eNames;
  }, [props.data]);
  //const entityNames = props.dataTest ? props.dataTest : [];
  const _Name = props.relation ? props.relation : "Buyer Entity Name";
  const [Data, setData] = useState(entityNames);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    if (props.resetFlag) {
      setData(entityNames);
      setResetKey(resetKey + 1);
      props.resetFlagValue();
    }
    if (props.value) {
      setData(props.value);
    }
    if (props.buyerId) {
      let foundIndex = entityNames.filter(
        (x) => x.buyerEntityId === props.buyerId
      );
      if (foundIndex) {
        setData(foundIndex);
      }
    }
    if (props.sellerId) {
      let foundIndex = entityNames.filter(
        (x) => x.sellerEntityId === props.sellerId
      );
      if (foundIndex) {
        setData(foundIndex);
      }
    }
  }, [
    entityNames,
    props,
    props.buyerId,
    props.sellerId,
    props.value,
    resetKey,
  ]);

  const autoFilterChange = (e, newMember, reason, details) => {
    if (reason === "selectOption") {
      let data1 = [];
      data1 = Data ? Data : [];
      if (props.sellerId) {
        for (let i = 0; i < newMember.length; i++) {
          let foundIndex = data1.findIndex(
            (x) => x.sellerEntityId === newMember[i].sellerEntityId
          );
          if (foundIndex === -1) {
            data1.push(newMember[i]);
          }
        }
      } else {
        for (let i = 0; i < newMember.length; i++) {
          let foundIndex = data1.findIndex(
            (x) => x.buyerEntityId === newMember[i].buyerEntityId
          );
          if (foundIndex === -1) {
            data1.push(newMember[i]);
          }
        }
      }
      setData(data1);
      props.onAutoChange(data1);
    } else if (reason === "removeOption") {
      const newOption = entityNames.filter(
        (item) => item.buyerEntityId === Data.buyerEntityId
      );
      setData(newOption);
      props.onAutoChange(newMember);
      e.target.blur();
    } else if (reason === "clear") {
      setData([]);
      props.onAutoChange([]);
    }
  };
  return (
    <>
      <div style={{ marginTop: "10px" }} key={resetKey}>
        <Autocomplete
          multiple
          defaultValue={Data}
          //key= {resetKey}
          limitTags={2}
          options={entityNames}
          getOptionLabel={(option) =>
            props.sellerId ? option.sellerEntityName : option.buyerEntityName
          }
          onChange={(e, newMember, reason, details) =>
            autoFilterChange(e, newMember, reason, details)
          }
          getOptionSelected={(option, value) =>
            props.sellerId
              ? option.sellerEntityName === value.sellerEntityName
              : option.buyerEntityName === value.buyerEntityName
          }
          style={{ width: width, fontSize: 13 }}
          size="small"
          renderInput={(params) => (
            <TextField
              {...params}
              name={_Name}
              variant="outlined"
              label={_Name}
              placeholder={_Name}
              // defaultValue={Data}
              // value={Data}
            />
          )}
        />
      </div>
    </>
  );
}
