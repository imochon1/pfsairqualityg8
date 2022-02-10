import React, { useEffect } from "react";
import axios from "axios";
import "./cardholder.css";

const CardHolder = () => {
  //pendiente crear estado para la info de la repsuesta

  const getData = () => {
    axios
      .get("https://rickandmortyapi.com/api/character/1,183")
      .then((response) => {
        console.log("response data", response.data);
        for (let i = 0; i < response.data.length; i++) {
          // eslint-disable-next-line no-unused-vars
          let { image, description } = response.data[i];
        }
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

  return (
    <section className="cards">
      <div className="card-wrapper">
        <div className="card-body">
          <div>imagen</div>
          <div>Descripcion{}</div>
        </div>
      </div>
    </section>
  );
};

export default CardHolder;
