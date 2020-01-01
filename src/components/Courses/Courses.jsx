import React from "react";
import "./Courses.css";

const Courses = ({history}) => {
  const courses = [
    "Starters",
    "Main Course",
    "Desert",
    "Beverages",
    "Tandoori",
    "Breads"
  ];
  return (
    <div >
      <h3>COURSES</h3>
      <div className="courses">
      {courses.map(course => (
        <div className="course" key={course} onClick={() => {history.push(`./courses?course=${course}`)}}>
          {course}
        </div>
      ))}
      </div>
      
    </div>
  );
};

export default Courses;
