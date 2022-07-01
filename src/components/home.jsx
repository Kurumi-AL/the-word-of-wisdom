import React, { useEffect } from "react";
import BootstrapCarousel from "./../elements/bootstrapCarousel";
import Quote from "./../elements/quote";
import CardsTable from "../elements/cardsTable";
import Aos from "aos";
import "aos/dist/aos.css";
import "./home.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <React.Fragment>
      <BootstrapCarousel />
      <div className="container" data-aos="fade-up">
        <Quote
          quote={
            "All saints who remember to keep and do these sayings, walking in obedience to the commandments, shall receive health in their navel and marrow to their bones;"
          }
          author={"D&C 89:18"}
        />
      </div>
      <div className="cards" data-aos="fade-up">
        <CardsTable />
      </div>
    </React.Fragment>
  );
};

export default Home;
