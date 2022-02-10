import React, { useEffect } from "react";
import axios from "axios";
import "./cardholder.css";

const CardHolder = () => {
  const getData = () => {
    axios
      .get("https://rickandmortyapi.com/api/character/1,183")
      .then((response) => {
        console.log("response data", response.data);
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
          <div>Descripcion</div>
        </div>
      </div>
    </section>
  );
};

export default CardHolder;
