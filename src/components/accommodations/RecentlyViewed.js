import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constants/api";
import AccommodationItem from "./AccommodationItem";
import Spinner from "./Spinner";

function RecentlyViewed() {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const url = BASE_URL + "establishments";
    const options = { headers };
    const [isActive, setActive] = useState("false");
    const handleToggle = () => { setActive(!isActive); };

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
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    },);

    if (loading) { return <Spinner/>; }
    
    return (
        <div className="recently-veiwed-container">
            <h2>Recently Viewed Accommodations</h2>
            <div className={isActive ? "recently-veiwed default" : "recently-veiwed more"}>
                {error && <div className="error">{error}</div>}
                {hotels.map(hotel => {
                    const { id, name, image, price, maxGuests, description, address } = hotel;
                    return (
                        <AccommodationItem 
                            id={id} 
                            name={name} 
                            image={image} 
                            price={price} 
                            maxGuests={maxGuests} 
                            description={description} 
                            address={address}
                        />
                    );
                })}
            </div>
            <button className={isActive ? "btn-default" : "btn-more"}onClick={handleToggle}>View more <i className="fas fa-arrow-right"></i></button>
        </div>
    );
}

export default RecentlyViewed;
