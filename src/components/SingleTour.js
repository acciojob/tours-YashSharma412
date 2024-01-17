import React, { useState } from "react";

function SingleTour({ tour, tours,  setTours }) {
  const [showFullDesc, setShowFullDesc] = useState(false);
  const dispFlex = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  function handleDelete(tour_item) {
    setTours(tours.filter((tour)=>tour.id !== tour_item.id))
  }


  return (
    <div key={tour.id} className="single-tour">
      <h3>{tour.name}</h3>
      <img src={tour.image} alt={`${tour.name}`} />
      <div>
        <p className="tour-info">
          {showFullDesc ? tour.info : `${tour.info.slice(0, 200)}...`}
          <b
            className="show__more&less"
            onClick={() => setShowFullDesc(!showFullDesc)}
          >
            <u>{showFullDesc ? "Show less" : "Show more"}</u>
          </b>
        </p>
      </div>
      <div style={dispFlex}>
        <h5 className="tour-price">Price: {tour.price}</h5>
        <button className="delete-btn" onClick={() => handleDelete(tour)}>
          Delete Tour
        </button>
      </div>
      <hr />
    </div>
  );
}

export default SingleTour;