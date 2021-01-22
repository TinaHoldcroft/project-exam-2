import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/api";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";

function AccommodationsDetail() {
	const [hotel, setHotel] = useState(null);
	const [loading, setLoading] = useState(true);
	let { id } = useParams();
	const url = BASE_URL + "/" + id;

	useEffect(() => {
		fetch(url)
			.then(response => response.json())
			.then(json => setHotel(json))
			.catch(error => console.log(error))
			.finally(() => setLoading(false));
	}, [url]);

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
				<div dangerouslySetInnerHTML={{ __html: hotel.description }}/>
				<a target={"_blank"} rel="noreferrer" href={hotel.website}> View Website</a>
			</div>
		</div>
	);
}


export default AccommodationsDetail;