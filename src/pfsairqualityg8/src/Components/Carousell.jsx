/* eslint-disable react/prop-types */
import React from "react";
import Carousel from "react-material-ui-carousel";

import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

// eslint-disable-next-line no-unused-vars
function Example(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}
//props.item.name
function Item(props) {
  const { name, description } = props.item;

  return (
    <Paper>
      <h2>{name}</h2>
      <p>{description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default Example;
