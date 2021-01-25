import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constants/api";
import AccommodationItem from "./AccommodationItem";
import Search from "./Search";
import { Link } from "react-router-dom";

function RecentlyViewed() {
    const [error, setError] = useState(null);
    const url = BASE_URL + "establishments";
    const options = { headers };
    const [accommodations, setHotels] = useState([]);
    const [filteredHotels, setFilteredHotels] = useState([]);
    
    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                if (json.error) {
                    setHotels([]);
                    setFilteredHotels(json.results);
                    setError(json.message);
                } 
                else {
                    setHotels(json);
                }
            })
            .catch((error) => console.log(error));
    },);

	const filterCards = function(f) {
		const searchValue = f.target.value.toLowerCase(); // lowercase
		const filteredArray = accommodations.filter(function(h) {
			const lowerCaseName = h.name.toLowerCase(); // lowercase
			if (lowerCaseName.includes(searchValue)) { // check if the game name begins with the search value
				return true;
			}
			return false;
		});
		setFilteredHotels(filteredArray);
	};
    
    return (
        <>
            <Search handleSearch={filterCards}/>
            <div className="search-results">
                {error && <div className="error">{error}</div>}
                {filteredHotels.map(hotel => {
                    const { id, name, image, price, maxGuests, description, address } = hotel;
                    return (
                        <>
                            <Link to={"/home"}><button  className="btn__close"><i className="fas fa-times"></i></button></Link>
                            <AccommodationItem id={id} name={name} image={image} price={price} maxGuests={maxGuests}  description={description} address={address}/>
                        </>
                    );
                })}
            </div>
        </>
    );
}

export default RecentlyViewed;