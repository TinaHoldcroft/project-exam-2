import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function AccommodationItem({ id, name, image, price, maxGuests, description }) {
	return (
		<div className="cards" key={id}>
		<div className="cards__img">
			<img src={image} alt={name}/>
		</div>
		<div className="cards__txt">
			<h3>{name}</h3>
			<p>{description}</p>
			<div className="highlights">
				<p>€ {price} per night</p>
				<p>Up to {maxGuests} guests</p>
			</div>
			<Link to={"hotel/" + id}>
				<button className="btn__book">Book Now</button>
				<button className="btn__learn">Learn More</button>
			</Link>
		</div>                     
	</div>            
	);
}

AccommodationItem.propTypes = {
	id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
	maxGuests: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default AccommodationItem;