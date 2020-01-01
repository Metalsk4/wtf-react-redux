import React from "react";
import "./AddButton.css";

const AddButton = ({ onClickHandler, id, title, price }) => (
  <p className="pButton" onClick={() => onClickHandler(id, title, price, 1)}>
    + Add
  </p>
);

export default AddButton;
