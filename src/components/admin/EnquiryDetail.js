import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";

function EnquiryDetail() {
    const defaultState = {
        name: "",
        email: "",
    };

    const [hotel, setHotel] = useState(defaultState);
    let { id } = useParams();
    const options = { headers };
    const fetchUrl = BASE_URL + "establishments/" + id;

    useEffect(() => {
        fetch(fetchUrl, options)
            .then((response) => response.json())
            .then((json) => setHotel(json))
            .catch((error) => console.debug(error));
    },);

    return (
        <div>
            <p>Name: {hotel.name} </p>
            <p>E-mail: {hotel.email}</p>
            <p>Image URL: {hotel.image} </p>
            <img src={hotel.image} alt={hotel.id}/>
        </div>
    );
}

export default EnquiryDetail;