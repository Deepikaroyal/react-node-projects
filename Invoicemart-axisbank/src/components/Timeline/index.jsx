import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { makeStyles } from "@mui/styles";
import moment from "moment";

export default function OppositeContentTimeline(props) {
  const data = props.data.sort(
    (a, b) => new Date(a.workflowStatusDate) - new Date(b.workflowStatusDate)
  );
  const useStyles = makeStyles({
    timeline: {
      //transform: "rotate(-90deg)"
      padding: "6px 0px !important",
      marginBottom: "0px !important",
    },
    timelineContentContainer: {
      textAlign: "left",
    },
    timelineContent: {
      display: "inline-block",
      //transform: "rotate(-90deg)",
      textAlign: "left",
      //minWidth: 50,
      color: props._dark ? "#fff" : "#404040",
      fontSize: 10,
      fontFamily: "Lato",
      fontWeight: 400,
      width: "100%",
      paddingTop: 0,
      position: "relative",
      top: "-2px",
    },
    timelineIcon: {
      // transform: "rotate(-90deg)"
    },
  });
  const classes = useStyles();

  return (
    <>
      <Timeline className={classes.timeline} position="right">
        <TimelineItem sx={{ position: "relative", left: -50, minHeight: 50 }}>
          <TimelineSeparator>
            <TimelineDot
              style={{
                backgroundColor: "#AC4371",
                marginBottom: 0,
                marginTop: 0,
              }}
            />
            <TimelineConnector
              style={{ backgroundColor: "#E0B9CA", width: "8px" }}
            />
          </TimelineSeparator>
          <TimelineContent
            className={classes.timelineContent}
            style={{ fontWeight: "bold", fontSize: "11px" }}
          >
            Seller
          </TimelineContent>
        </TimelineItem>
        {data
          .filter((t) => t.workflowEntityType === "SELLER")
          .map((t, index) => (
            <TimelineItem
              sx={{ position: "relative", left: -50, minHeight: 50 }}
              key={index}
            >
              <TimelineSeparator>
                <TimelineDot
                  style={{
                    backgroundColor: "#AC4371",
                    marginBottom: 0,
                    marginTop: 0,
                  }}
                />
                <TimelineConnector
                  style={{ backgroundColor: "#E0B9CA", width: "8px" }}
                />
              </TimelineSeparator>
              <TimelineContent
                className={classes.timelineContent}
                style={{ fontWeight: "normal", fontSize: "10px" }}
              >
                {t.workflowStatus}
                {t.workflowStatusDate ? (
                  <div style={{ fontSize: 8 }}>
                    {moment(new Date(t.workflowStatusDate)).format("DD")}
                    {"/"}
                    {moment(new Date(t.workflowStatusDate)).format("MMM")}
                    {"/"}
                    {moment(new Date(t.workflowStatusDate)).format("YYYY")}{" "}
                    {moment(new Date(t.workflowStatusDate)).format("HH:mm")}
                  </div>
                ) : (
                  ""
                )}
              </TimelineContent>
            </TimelineItem>
          ))}
        <TimelineItem sx={{ position: "relative", left: -50, minHeight: 50 }}>
          <TimelineSeparator>
            <TimelineDot
              style={{
                backgroundColor: "#AC4371",
                marginBottom: 0,
                marginTop: 0,
              }}
            />
            <TimelineConnector
              style={{ backgroundColor: "#E0B9CA", width: "8px" }}
            />
          </TimelineSeparator>
          <TimelineContent
            className={classes.timelineContent}
            style={{ fontWeight: "bold", fontSize: "11px" }}
          >
            Buyer
          </TimelineContent>
        </TimelineItem>
        {data
          .filter((t) => t.workflowEntityType === "BUYER")
          .map((t, index) => (
            <TimelineItem
              sx={{ position: "relative", left: -50, minHeight: 50 }}
              key={index}
            >
              <TimelineSeparator>
                <TimelineDot
                  style={{
                    backgroundColor: "#AC4371",
                    marginBottom: 0,
                    marginTop: 0,
                  }}
                />
                <TimelineConnector
                  style={{ backgroundColor: "#E0B9CA", width: "8px" }}
                />
              </TimelineSeparator>
              <TimelineContent
                className={classes.timelineContent}
                style={{ fontWeight: "normal", fontSize: "10px" }}
              >
                {t.workflowStatus}
                {t.workflowStatusDate ? (
                  <div style={{ fontSize: 8 }}>
                    {moment(new Date(t.workflowStatusDate)).format("DD")}
                    {"/"}
                    {moment(new Date(t.workflowStatusDate)).format("MMM")}
                    {"/"}
                    {moment(new Date(t.workflowStatusDate)).format("YYYY")}{" "}
                    {moment(new Date(t.workflowStatusDate)).format("HH:mm")}
                  </div>
                ) : (
                  ""
                )}
              </TimelineContent>
            </TimelineItem>
          ))}
        <TimelineItem sx={{ position: "relative", left: -50, minHeight: 50 }}>
          <TimelineSeparator>
            <TimelineDot
              style={{
                backgroundColor: "#AC4371",
                marginBottom: 0,
                marginTop: 0,
              }}
            />
            <TimelineConnector
              style={{ backgroundColor: "#E0B9CA", width: "8px" }}
            />
          </TimelineSeparator>
          <TimelineContent
            className={classes.timelineContent}
            style={{ fontWeight: "bold", fontSize: "11px" }}
          >
            Bidding
          </TimelineContent>
        </TimelineItem>
        {data
          .filter((t) => t.workflowEntityType === "BIDDING")
          .map((t, index) => (
            <TimelineItem
              sx={{ position: "relative", left: -50, minHeight: 50 }}
              key={index}
            >
              <TimelineSeparator>
                <TimelineDot
                  style={{
                    backgroundColor: "#AC4371",
                    marginBottom: 0,
                    marginTop: 0,
                  }}
                />
                <TimelineConnector
                  style={{ backgroundColor: "#E0B9CA", width: "8px" }}
                />
              </TimelineSeparator>
              <TimelineContent
                className={classes.timelineContent}
                style={{ fontWeight: "normal", fontSize: "10px" }}
              >
                {t.workflowStatus}
                {t.workflowStatusDate ? (
                  <div style={{ fontSize: 8 }}>
                    {moment(new Date(t.workflowStatusDate)).format("DD")}
                    {"/"}
                    {moment(new Date(t.workflowStatusDate)).format("MMM")}
                    {"/"}
                    {moment(new Date(t.workflowStatusDate)).format("YYYY")}{" "}
                    {moment(new Date(t.workflowStatusDate)).format("HH:mm")}
                  </div>
                ) : (
                  ""
                )}
              </TimelineContent>
            </TimelineItem>
          ))}
        <TimelineItem sx={{ position: "relative", left: -50, minHeight: 50 }}>
          <TimelineSeparator>
            <TimelineDot
              style={{
                backgroundColor: "#AC4371",
                marginBottom: 0,
                marginTop: 0,
              }}
            />
            <TimelineConnector
              style={{ backgroundColor: "#E0B9CA", width: "8px" }}
            />
          </TimelineSeparator>
          <TimelineContent
            className={classes.timelineContent}
            style={{ fontWeight: "bold", fontSize: "11px" }}
          >
            Obligation
          </TimelineContent>
        </TimelineItem>
        {data
          .filter((t) => t.workflowEntityType === "OBLIGATION")
          .map((t, index) => (
            <TimelineItem
              sx={{ position: "relative", left: -50, minHeight: 50 }}
              key={index}
            >
              <TimelineSeparator>
                <TimelineDot
                  style={{
                    backgroundColor: "#AC4371",
                    marginBottom: 0,
                    marginTop: 0,
                  }}
                />
                <TimelineConnector
                  style={{ backgroundColor: "#E0B9CA", width: "8px" }}
                />
              </TimelineSeparator>
              <TimelineContent
                className={classes.timelineContent}
                style={{ fontWeight: "normal", fontSize: "10px" }}
              >
                {t.workflowStatus}
                {t.workflowStatusDate ? (
                  <div style={{ fontSize: 8 }}>
                    {moment(new Date(t.workflowStatusDate)).format("DD")}
                    {"/"}
                    {moment(new Date(t.workflowStatusDate)).format("MMM")}
                    {"/"}
                    {moment(new Date(t.workflowStatusDate)).format("YYYY")}{" "}
                    {moment(new Date(t.workflowStatusDate)).format("HH:mm")}
                  </div>
                ) : (
                  ""
                )}
              </TimelineContent>
            </TimelineItem>
          ))}
      </Timeline>
    </>
  );
}
