import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constants/api";
//import { Link } from "react-router-dom";

function RecentlyViewed() {
    const [hotels, setHotels] = useState([]);
    const [error, setError] = useState(null);
    const url = BASE_URL + "establishments";
    const options = { headers };

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                if (json.error) {
                    setHotels([]);
                    setError(json.message);
                } 
                else {
                    setHotels(json);
                }
            })
            .catch((error) => console.log(error));
    },);

    return (
        <div className="recently-veiwed">
            <h2>Recently Viewed Accommodations</h2>
            {error && <div className="error">{error}</div>}
                {hotels.map((hotel) => {
                    return (
                        <div className="cards" key={hotel.id}>
                            <div className="cards__img">
                                <img src={hotel.image} alt={hotel.name}/>
                            </div>
                            <div className="cards__txt">
                                <h3>{hotel.name}</h3>
                                <p>{hotel.description}</p>
                                <div className="highlights">
                                    <p>€ {hotel.price} per night</p>
                                    <p>Up to {hotel.maxGuests} guests</p>
                                </div>
                              
                                    <button>Book Now</button>
                        
                            </div>                     
                        </div>
                    );
                })}
        </div>
    );
}

export default RecentlyViewed;
/*                                <Link to={"accommodation/" + id}>
                                    <button>Book Now</button>
                                </Link> */