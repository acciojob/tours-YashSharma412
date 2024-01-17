import React, { useEffect, useState } from "react";
import tourData from "../data/TourData";
import SingleTour from "./SingleTour";


function TourlList() {
  
  const [tours, setTours] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(()=>setLoading(false), 1000) 
    setTours(tourData);
  }, []);

  return (
    <div>
      <h1 className="title">Your Tours</h1>
        {
            loading ? <p>Loading</p> :
            <div className="tours__container">
                {
                    tours.length !== 0 
                    ? tours.map((tour) => (
                        <SingleTour key={tour.id} tour={tour} tours={tours} setTours={setTours}/>
                    ))
                    : <div>
                        <p>
                            No more tours
                        </p>
                        <button className="btn" onClick={()=>window.location.reload()}>Refresh page</button>
                    </div>
                }
            </div>
        }
    </div>
  );
}

export default TourlList;
