import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  cardcontent: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  CrdCls: {
    marginTop: 20,
    boxShadow: "0px 1px 12px 2px #bebebe",
    borderRadius: 8,
  },
});

export default function BasicCard(props) {
  const classes = useStyles();
  return (
    <div>
      <Card md={10} className={classes.CrdCls}>
        <CardContent className={classes.cardcontent}>
          {props.component}
        </CardContent>
      </Card>
    </div>
  );
}
