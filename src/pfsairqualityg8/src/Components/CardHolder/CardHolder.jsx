import React, { useEffect, useState } from "react";
import axios from "axios";
import "./cardholder.css";

const CardHolder = () => {
  //pendiente crear estado para la info de la repsuesta
  const [apiData, setApiData] = useState([]);

  const getData = () => {
    axios
      .get("https://rickandmortyapi.com/api/character/1,183")
      .then((response) => {
        console.log("response data", response.data);
        for (let i = 0; i < response.data.length; i++) {
          // eslint-disable-next-line no-unused-vars
          let { image, name } = response.data[i];
          setApiData(...apiData, { image, name });
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const { image, name } = apiData;
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

  return (
    <section className="cards">
      <div className="card-wrapper">
        <div className="card-body">
          <div>
            <img className="card-image" src={image} alt="Rick and Morty" />
          </div>
          <div className="card-text">
            Nombre <br />
            {name}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardHolder;
