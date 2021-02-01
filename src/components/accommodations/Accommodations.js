import React from "react";
import SearchList from "./SearchList"
import Footer from "../layout/Footer"
import { Helmet } from "react-helmet";

export function Accommodations() {
	return (
		<>
			<Helmet><title>Accommodations | Holidaze</title></Helmet>
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