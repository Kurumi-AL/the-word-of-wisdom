import React, { useEffect } from "react";
import Quote from "../elements/quote";
import IntroductionIntro from "./introduction_elements/introductionIntro";
import IntroductionExplanationOne from "./introduction_elements/introductionExplanationOne";
import IntroductionSummary from "./introduction_elements/introductionSummary";
import IntroductionExplanationTwo from "./introduction_elements/introductionExplanationTwo";
import IntroductionCitation from "./introduction_elements/introductionCitation";
import Aos from "aos";
import BackToTopButton from "../elements/backToTopButton";
import "./introduction.css";

const Introduction = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <React.Fragment>
      <div className="introduction-header">
        <img src="/images/img04.png" alt="The Word of Wisdom Introduction" />
      </div>

      <div className="container" data-aos="fade-up">
        <Quote
          quote={
            "Beware concerning yourselves, to give diligent heed to the words of eternal life"
          }
          author={"D&C 84:43"}
        />
      </div>

      <div className="introduction">
        <div className="introduction-intro" data-aos="fade-up">
          <IntroductionIntro />
        </div>
        <div className="brank"></div>
        <div className="introduction-explanation-one" data-aos="fade-up">
          <IntroductionExplanationOne />
        </div>
        <div className="brank"></div>

        <div className="introduction-explanation-two" data-aos="fade-up">
          <IntroductionExplanationTwo />
        </div>
        <div className="brank"></div>
      </div>

      <div className="introduction-summary" data-aos="fade-up">
        <IntroductionSummary />
      </div>

      <div className="citation">
        <IntroductionCitation />
      </div>

      <BackToTopButton />
    </React.Fragment>
  );
};

export default Introduction;
