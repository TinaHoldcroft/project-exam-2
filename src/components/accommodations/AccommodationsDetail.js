import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constants/api";
import Spinner from "./Spinner";
import { useParams } from "react-router-dom";
import Footer from "../layout/Footer"

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
				<div>
					<img src={hotel.image} alt={hotel.name}/>
				</div>
				<div>
					<h2>{hotel.name}</h2>
					<div className="highlights">
						<p>€ {hotel.price} per night</p>
						<p>Up to {hotel.maxGuests} guests</p>
					</div>
				</div>
			</div>
			<div className="detail-col-2">
				<div>
					<h2>{hotel.name}</h2>
					<p>{hotel.address} | <a target={"_blank"} rel="noreferrer" href={`https://maps.google.com/maps?q=${hotel.lat},${hotel.lng}&hl=en&z=14&amp;output=embed`}>View Map</a></p>
					<p>{hotel.description}</p>
					<button className="btn-white">Book now</button>
				</div>
			</div>
			<div className="detail-footer">
				<Footer/>
			</div>
		</div>
	);
}


export default AccommodationsDetail;
