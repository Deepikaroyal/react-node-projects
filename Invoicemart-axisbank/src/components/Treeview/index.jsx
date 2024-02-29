import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import "./index.css";

const useTreeItemStyles = makeStyles((theme) => ({
  content: {
    flexDirection: "row-reverse",
    borderBottom: "solid 1px #CBCBCB",
    padding: 0,
    backgroundColor: "#F9F9F9 !important",
  },
  contentDark: {
    flexDirection: "row-reverse",
    borderBottom: "solid 1px #CBCBCB",
    padding: 0,
    backgroundColor: "#181818 !important",
  },
  labelRoot: {
    display: "flex",
    alignItems: "center",
    padding: 10,
  },
  labelIcon: {
    marginRight: 1,
  },
  labelText: {
    fontWeight: 700,
    flexGrow: 1,
    fontFamily: "Lato",
    fontSize: 18,
    color: "#404040",
    paddingLeft: "0px !important",
  },
}));

function StyledTreeItem(props) {
  const { labelText, _dark, ...other } = props;
  const classes = useTreeItemStyles();

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <Typography
            variant="body2"
            className={classes.labelText}
            style={{ color: _dark ? "#ffffff" : "#404040" }}
          >
            {labelText}
          </Typography>
        </div>
      }
      classes={{
        content: _dark ? classes.contentDark : classes.content,
      }}
      {...other}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "auto",
    flexGrow: 1,
    maxWidth: "100%",
    paddingBottom: 15,
  },
}));

export default function ControlledTreeView(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState([]);
  const _dark = props._dark ? props._dark : false;

  const handleChange = (event, nodes) => {
    setExpanded(nodes);
  };

  useEffect(() => {
    setExpanded(["1"]);
  }, []);

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      expanded={expanded}
      onNodeToggle={handleChange}
      defaultExpanded={["root"]}
    >
      <StyledTreeItem nodeId="1" labelText={props.label} _dark={_dark}>
        {props.component}
      </StyledTreeItem>
    </TreeView>
  );
}
