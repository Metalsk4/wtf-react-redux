import React from "react";
import "./ImageHolder.css";
import "font-awesome/css/font-awesome.min.css";

import AddButton from "../../ui/AddButton/AddButton";

const ImageHolder = ({
  children,
  title,
  rating,
  id,
  onAdded,
  price,
  users
}) => (
  <div className="imageWrapper">
    {children}
    <p style={styleP}>{title}</p>
    <span className="fa fa-star checked">
      <span className="rating">{rating} </span>
      <span className="ratingSpan">{users} Ratings</span>
    </span>
    <div className="priceWrapper">
      <p>&#x20b9; {price}</p>
      <AddButton id={id} title={title} price={price} onClickHandler={onAdded} />
    </div>
  </div>
);

const styleP = {
  alignSelf: "center",
  fontSize: "0.9em",
  fontWeight: 600,
  marginTop: "auto"
};

export default ImageHolder;
