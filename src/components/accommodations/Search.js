import React from "react";
import PropTypes from "prop-types";
//import InputGroup from "react-bootstrap/InputGroup";
//import FormControl from "react-bootstrap/FormControl";

function Search({ handleSearch }) {
	return (
		<div className="search">
			<input placeholder="Search...                        &#xF002;" onChange={event => handleSearch(event)}/>
		</div>
	);
}

Search.propTypes = { handleSearch: PropTypes.func.isRequired };

export default Search;		