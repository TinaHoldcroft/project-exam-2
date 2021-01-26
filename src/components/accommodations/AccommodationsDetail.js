import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constants/api";
import Spinner from "./Spinner";
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
	},);

	if (loading) {
		return <Spinner/>;
	}

	return (
		<div className="detail-page">
			<div className="detail-col-1">
				<div className="detail-row-1">
					<img className="img__detail" src={hotel.image} alt={hotel.name}/>
				</div>
				<div className="detail-row-2">
					<h2>{hotel.name}</h2>
					<div className="highlights">
						<p>€ {hotel.price} per night</p>
						<p>Up to {hotel.maxGuests} guests</p>
					</div>
				</div>
			</div>
			<div className="detail-col-2">
				<div className="detail-sub-1">
					<h2>{hotel.name}</h2>
					<p>{hotel.address} | <a target={"_blank"} rel="noreferrer" href={`https://maps.google.com/maps?q=${hotel.lat},${hotel.lng}&hl=es&z=14&amp;output=embed`}>View Map</a></p>
					<p>{hotel.description}</p>
					<button>Book now</button>
				</div>
			</div>
		</div>
	);
}


export default AccommodationsDetail;