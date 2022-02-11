import React, { useEffect, useState } from "react";
import axios from "axios";
import "./cardholder.css";

const CardHolder = () => {
  //pendiente crear estado para la info de la repsuesta
  const [apiData, setApiData] = useState([]);

  const getData = () => {
    axios
      .get("https://rickandmortyapi.com/api/character/1,183,5")
      .then((response) => {
        console.log("response data", response.data);
        setApiData(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  /*(function () {
  statements
})();

*/

  useEffect(() => {
    (function () {
      console.log("Hola");
    })();
    getData();
  }, []);
  // >{element.name}
  return (
    <section className="cards">
      {apiData.map((element, index) => {
        return (
          <>
            <div className="card-wrapper" key={index}>
              <div className="card-body">
                <div>
                  <img
                    className="card-image"
                    src={element.image}
                    alt="Rick and Morty"
                  />
                </div>
                <div className="card-text">
                  <br />
                  {element.name}
                </div>
              </div>
            </div>
            ;
          </>
        );
      })}
    </section>
  );
};

export default CardHolder;
