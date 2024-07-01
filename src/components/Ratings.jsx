import React from "react";
import "../Scss/ratings.scss";
export default function Ratings() {
  return (
    <div className="ratings">
     <div className="ratings_child-1">

      <div>
        <i className="fa-solid fa-users"></i>
        <p>Total students: 1200</p>
      </div>

      <div>
        <i className="fa-solid fa-code"></i>
        <p>Courses: 6</p>
      </div>

      <div>
        <i className="fa-solid fa-user-tie"></i>
        <p>Total teachers: 10</p>
      </div>

     </div>

    </div>
  );
}
