import React from "react";
import Quote from "../elements/quote";
import Timeline from "../elements/verticalTimeline";
import "./history.css";

const History = () => {
  return (
    <React.Fragment>
      <div className="history-header">
        <img src="../images/img04.png" alt="The Word of Wisdom history" />
      </div>

      <div className="container">
        <Quote
          quote={
            "Be thou humble; and the Lord thy God shall lead thee by the hand, and give thee answer to thy prayers"
          }
          author={"D&C 112:10"}
        />
      </div>

      <div className="container history">
        <Timeline />
      </div>
    </React.Fragment>
  );
};

export default History;
