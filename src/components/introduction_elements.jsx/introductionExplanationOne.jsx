import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "./introductionExplanationOne.css";

const IntroductionExplanationOne = () => {
  return (
    <div className="explanation-one">
      <h3>
        <FontAwesomeIcon icon={faCircle} />
        Three Main Things That Are Restricted In The Word Of Wisdom
      </h3>

      <div className="first-contents">
        <div className="first-wow">
          <h4>1. Alcoholic Drinks</h4>
          <p className="first-wow-scripture">
            "That inasmuch as any man drinketh wine or strong drink among you,
            behold it is not good, neither meet in the sight of your Father,
            only in assembling yourselves together to offer up your sacraments
            beforehim. And, behold, this should be wine, yea, pure wine of the
            grape of the vine, of your own make. And, again, strong drinks are
            not fore the belly, but for the washing of your bodies." (D&C
            89:5-7)
          </p>
        </div>

        <div className="second-wow">
          <h4>2. Tobacco</h4>
          <p className="second-wow-scripture">
            "tobacco is not for the body, neither for the belly, and is not good
            for man, but is an herb for bruises and all sick cattle, to be used
            with judgment and skill." (D&C 89:8)
          </p>
        </div>
        <div className="third-wow">
          <h4>3. Tea and Coffee</h4>
          <p className="third-wow-scripture">
            "hot drinks are not for the body or belly." (D&C 89:9)
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroductionExplanationOne;
