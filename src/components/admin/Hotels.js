import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";

function Hotels() {
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
                } else {
                    setHotels(json);
                }
            })
            .catch((error) => console.log(error));
    },);

    return (
        <div className="accommodations">
            <h2>Establishment</h2>
            {error && <div className="error">{error}</div>}
                {hotels.map((hotel) => {
                    return (
                        <div key={hotel.id}>
                            <div className="accommodations-info">
                                <div className="accommodations-links">
                                    <NavLink to={`edit/${hotel.id}`}><i class="fas fa-edit"></i></NavLink>
                                    <NavLink to={"../accommodations/" + hotel.id}><i class="fas fa-eye"></i></NavLink>
                                </div>
                                <p id="id">{hotel.id} | {hotel.email}</p>
                                <h4>{hotel.name}</h4>
                                <p>€ {hotel.price} | <i className="fas fa-user-friends"></i> {hotel.maxGuests} | <a target={"_blank"} rel="noreferrer" href={hotel.image}><i className="fas fa-camera"></i></a></p>
                                <p>Description: {hotel.description}</p>
                                <p>Location: {hotel.lat}, {hotel.lng} | {hotel.address}</p>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

export default Hotels;
