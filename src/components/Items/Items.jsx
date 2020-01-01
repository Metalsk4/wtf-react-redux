import React from "react";
import ImageHolder from "./ImageHolder/ImageHolder";
import "./Items.css";

const Items = ({
  sectionHeading,
  imageData,
  itemAdded,
  isPreview,
  course,
  showCourse,
  history
}) => {
  const sliderData = (
    <div className="slider">
      {imageData &&
        imageData.map(image => (
          <ImageHolder
            key={image._id}
            onAdded={itemAdded}
            title={image.title}
            rating={image.rating}
            id={image._id}
            price={image.price}
            users={image.users}
          >
            <img src={image.picture} alt={image.title} key={image._id} />
          </ImageHolder>
        ))}
    </div>
  );
  const courses = (
    <div className="coursesWrapper">
      <h4 onClick={() => showCourse("Starters")}>Starters</h4>
      {course === "Starters" && <React.Fragment>{sliderData}</React.Fragment>}
      <h4 onClick={() => showCourse("Main Course")}>MainCourse</h4>
      {course === "Main Course" && (
        <React.Fragment>{sliderData}</React.Fragment>
      )}
      <h4 onClick={() => showCourse("Desert")}>Desert</h4>
      {course === "Desert" && <React.Fragment>{sliderData}</React.Fragment>}
      <h4 onClick={() => showCourse("Beverages")}>Beverages</h4>
      {course === "Beverages" && <React.Fragment>{sliderData}</React.Fragment>}
      <h4 onClick={() => showCourse("Tandoori")}>Tandoori</h4>
      {course === "Tandoori" && <React.Fragment>{sliderData}</React.Fragment>}
      <h4 onClick={() => showCourse("Breads")}>Breads</h4>
      {course === "Breads" && <React.Fragment>{sliderData}</React.Fragment>}
    </div>
  );
  return (
    <div className="itemsWrapper">
      <div className="headingWrapper">
        {isPreview && <h3>{sectionHeading}</h3>}
        {isPreview && <h5 onClick={() => {history.push(`./courses?course=Starters`)}}>See All</h5>}
      </div>
      {!isPreview && courses}
      {isPreview && sliderData}
    </div>
  );
};

export default Items;
