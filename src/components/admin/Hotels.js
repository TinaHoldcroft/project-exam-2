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
            {error && <div className="error">{error}</div>}
                {hotels.map((hotel) => {
                    return (
                        <div key={hotel.id}>
                            <div className="accommodations-tiles">
                                <div className="accommodations-links">
                                    <NavLink to={`edit/${hotel.id}`}><i class="fas fa-edit"></i></NavLink>
                                    <NavLink to={"../accommodations/" + hotel.id}><i class="fas fa-eye"></i></NavLink>
                                    <a target={"_blank"} rel="noreferrer" href={hotel.image}><i className="fas fa-camera"></i></a>
                                </div>
                                <div className="accommodations-info">
                                    <h4>{hotel.name}</h4>
                                    <p><b>ID: </b>{hotel.id}</p>
                                    <p><b>E-mail: </b>{hotel.email}</p>
                                    <p><b>Price: </b>{hotel.price}</p>
                                    <p><b>Max-guests: </b>{hotel.maxGuests}</p>
                                    <p><b>Description: </b>{hotel.description}</p>
                                    <p><b>Address: </b>{hotel.address}</p>
                                    <p><b>Location: </b>{hotel.lat}, {hotel.lng}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

export default Hotels;
