import { Link } from "react-router-dom";
import "./introductionIntro.css";

const IntroductionIntro = () => {
  return (
    <div className="intro">
      <h3>What Is The Word Of Wisdom?</h3>
      <div className="intro-contents">
        <h5>
          The Word of Wisdom is "a law of health revealed by the Lord for our
          physical and spiritual benefit.(1)" The story of the Word of Wisdom
          had begun during the period when alcohol and tobacco spread throughout
          the world widely. If you're interested in more about the history of
          the Word of Wisdom, please check the{" "}
          <Link to="/history" className="link">
            history page
          </Link>
          .
        </h5>
      </div>
    </div>
  );
};

export default IntroductionIntro;
