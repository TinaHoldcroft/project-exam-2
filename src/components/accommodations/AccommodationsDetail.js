import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constants/api";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";

function AccommodationsDetail() {
	const [hotel, setHotel] = useState(null);
	const [loading, setLoading] = useState(true);
	let { id } = useParams();
	const url = BASE_URL + "establishments/" + id;
	const options = { headers };

	useEffect(() => {
		fetch(url, options)
			.then(response => response.json())
			.then(json => setHotel(json))
			.catch(error => console.log(error))
			.finally(() => setLoading(false));
	}, );

	if (loading) {
		return <Spinner animation="border" className="spinner"/>;
	}

	return (
		<div className="hotel-page">
			<div md={6}>
				<img className="hotel-image" src={hotel.image} alt="alt"/>
			</div>
			<div>
				<h1>{hotel.name}</h1>
				<p>{hotel.description}</p>
				<a target={"_blank"} rel="noreferrer" href={`https://maps.google.com/maps?q=${hotel.lat},${hotel.lng}&hl=es&z=14&amp;output=embed`}>View Map</a>
			</div>
		</div>
	);
}


export default AccommodationsDetail;