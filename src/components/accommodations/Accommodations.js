import React from "react";
import SearchList from "./SearchList"
import Footer from "../layout/Footer"

export function Accommodations() {
	return (
		<>
			<div className="accommodations-page">
				<h3>Search Accommodations</h3>
				<SearchList/>
			</div>
			<div className="accommodations-footer">
				<Footer/>
			</div>
		</>
	);
}

export default Accommodations;