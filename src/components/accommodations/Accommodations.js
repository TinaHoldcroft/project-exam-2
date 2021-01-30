import React from "react";
import SearchList from "./SearchList"
import Footer from "../layout/Footer"

export function Accommodations() {
	return (
		<>
			<div className="accommodations-header">
				<div className="accommodations__img"></div>
			</div>

			<div className="accommodations-page">
				<SearchList/>
			</div>
			<div className="accommodations-footer">
				<Footer/>
			</div>
		</>
	);
}

export default Accommodations;