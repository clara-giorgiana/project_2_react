import React from "react";
import { Link } from "react-router-dom";
import "./HomeCategory.css";

function HomeCategory(props) {
  const { route, name, description, image } = props;

  return (
    <div className="col-12 col-md-4 my-3">
      <Link to={`/category/${route}`} className="categoryLink">
        <div className="w-100">
          <img src={image} alt={name} className="w-100" />
        </div>
        <h2 className="categoryTitle">
          <strong>{name}:</strong>
        </h2>
        <p className="categoryDescription">{description}</p>
      </Link>
    </div>
  );
}

export default HomeCategory;
