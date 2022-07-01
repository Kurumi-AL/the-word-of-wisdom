import React from "react";
import Quote from "../elements/quote";
import Timeline from "../elements/verticalTimeline";
import HistoryCitation from "./history_elements/historyCitation";
import HistorySummary from "./history_elements/historySummary";
import BackToTopButton from "../elements/backToTopButton";
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
        <h2>Timeline</h2>
        <Timeline />
      </div>

      <div className="history-summary">
        <HistorySummary />
      </div>

      <div className="citation">
        <HistoryCitation />
      </div>

      <BackToTopButton />
    </React.Fragment>
  );
};

export default History;
