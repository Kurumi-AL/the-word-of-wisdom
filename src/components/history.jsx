import React, { useEffect } from "react";
import Quote from "../elements/quote";
import Timeline from "../elements/verticalTimeline";
import HistoryCitation from "./history_elements/historyCitation";
import HistorySummary from "./history_elements/historySummary";
import BackToTopButton from "../elements/backToTopButton";
import Aos from "aos";
import "./history.css";

const History = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <React.Fragment>
      <div className="history-header">
        <img src="/images/img06.jpg" alt="The Word of Wisdom history" />
      </div>

      <div className="container" data-aos="fade-up">
        <Quote
          quote={
            "Be thou humble; and the Lord thy God shall lead thee by the hand, and give thee answer to thy prayers"
          }
          author={"D&C 112:10"}
        />
      </div>

      <div className="container history" data-aos="fade-up">
        <h2>Timeline</h2>
        <Timeline />
      </div>

      <div className="history-summary" data-aos="fade-up">
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
