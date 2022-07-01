import { useNavigate } from "react-router-dom";
import "./cardsTable.css";

const CardsTable = () => {
  const navigate = useNavigate();

  const routeChange = (path) => {
    const newPath = "/" + path;
    navigate(newPath);
  };

  return (
    <div className="container">
      <div className="card-group">
        <div className="card" onClick={() => routeChange("introduction")}>
          <img
            className="card-img-top"
            src="../images/img05.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Introduction</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
        <div className="card" onClick={() => routeChange("history")}>
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">History</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
          </div>
        </div>
        {/* <div className="card">
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CardsTable;
