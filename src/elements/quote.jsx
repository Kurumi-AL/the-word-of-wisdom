import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import "./quote.css";

const Quote = ({ quote, author }) => {
  return (
    <div className="quote">
      <h3>
        <FontAwesomeIcon icon={faQuoteLeft} /> {quote}{" "}
        <FontAwesomeIcon icon={faQuoteRight} />
      </h3>
      <h6>({author})</h6>
    </div>
  );
};

export default Quote;
