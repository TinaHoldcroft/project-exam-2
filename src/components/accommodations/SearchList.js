import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constants/api";
import Item from "./Item";
import Search from "./Search";
import { Link } from "react-router-dom";

function RecentlyViewed() {
    const [error, setError] = useState(null);
    const url = BASE_URL + "establishments";
    const options = { headers };
    const [accommodations, setEstablishments] = useState([]);
    const [filteredEstablishments, setFilteredEstablishments] = useState([]);
    
    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                if (json.error) {
                    setEstablishments([]);
                    setFilteredEstablishments(json.results);
                    setError(json.message);
                } 
                else { setEstablishments(json); }
            })
            .catch((error) => console.log(error));
    },);

	const filterCards = function(f) {
		const searchValue = f.target.value.toLowerCase(); // lowercase
		const filteredArray = accommodations.filter(function(h) {
			const lowerCaseName = h.name.toLowerCase(); // lowercase
			if (lowerCaseName.includes(searchValue)) { return true; } // check if the name matches the search value
			return false;
		});
		setFilteredEstablishments(filteredArray);
	};
    
    return (
        <>
            <Search handleSearch={filterCards}/>
            <div className="search-results">
                {error && <div className="error">{error}</div>}
                {filteredEstablishments.map(establishments => {
                    const { id, name, image, price, maxGuests, description, address } = establishments;
                    return (
                        <>
                            <div><Link to={"/home"}><button  className="btn__close"><i className="fas fa-times"></i></button></Link></div>
                            <div><Item id={id} name={name} image={image} price={price} maxGuests={maxGuests}  description={description} address={address}/></div>
                        </>
                    );
                })}
            </div>
        </>
    );
}

export default RecentlyViewed;