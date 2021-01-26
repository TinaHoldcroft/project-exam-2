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

	if (loading) {
		return <Spinner/>;
	}
    return (
        <>
        <h2 className="recently-veiwed__h2">Recently Viewed Accommodations</h2>
        <div className="recently-veiwed">
            
            {error && <div className="error">{error}</div>}
                {hotels.map(hotel => {
                    const { id, name, image, price, maxGuests, description, address } = hotel;
                    return (
                        <AccommodationItem id={id} name={name} image={image} price={price} maxGuests={maxGuests} description={description} address={address}/>
                    );
                })}
        </div>
        </>
    );
}

export default RecentlyViewed;
