import React, { useEffect, useState } from "react";
import axios from "axios";
import "./cardholder.css";

const CardHolder = () => {
  const [apiData, setApiData] = useState([]);

  const getData = () => {
    axios
      .get("https://api-220201.herokuapp.com/plants")
      .then((response) => {
        console.log("response data", response.data);
        const { data } = response;
        setApiData(data.plants);
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
    getData([]);
  }, []);

  return (
    <section className="cards">
      {apiData.map((plants, index) => {
        return (
          <>
            <div className="card-wrapper" key={index}>
              <div className="card-body">
                <div>
                  <img
                    key={index}
                    className="card-image"
                    src={plants.image}
                    alt="Plants"
                  />
                </div>
                <div className="card-text" key={index}>
                  <br />
                  {plants.name}
                </div>
              </div>
            </div>
          </>
        );
      })}
    </section>
  );
};

export default CardHolder;
