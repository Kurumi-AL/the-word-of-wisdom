import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "./introductionExplanationTwo.css";

const IntroductionExplanationTwo = () => {
  return (
    <div className="explanation-two">
      <h3>
        <FontAwesomeIcon icon={faCircle} />
        The Lord Declares That The Following Foods Are Good For Our Bodies
      </h3>

      <div className="second-contents">
        <div className="first-bad">
          <h4>
            1. Vegetables and fruits, which should be used "with prudence and
            thanksgiving"
          </h4>{" "}
          <p>(D&C 89:10-11)</p>
          {/* <p className="first-bad-scripture">explanation</p> */}
        </div>

        <div className="second-bad">
          <h4>
            2. The flesh "of beasts and of the fowls of the air," which is "to
            be used sparingly"
          </h4>{" "}
          <p>(D&C 89:12-13)</p>
          {/* <p className="second-bad-scripture">explanation</p> */}
        </div>
        <div className="third-bad">
          <h4>
            3. Grains such as wheat, rice, and oats, which are "the staff of
            life"
          </h4>{" "}
          <p>(D&C 89:14-17)</p>
          {/* <p className="third-bad-scripture">explanation</p> */}
        </div>

        <h5>
          These things are not stricted, but we are encouraged to eat healthy
          based on these statements.
        </h5>
      </div>
    </div>
  );
};

export default IntroductionExplanationTwo;
