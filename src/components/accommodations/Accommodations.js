import React from "react";
import SearchList from "../search/SearchList"
import Footer from "../layout/Footer"
import { Helmet } from "react-helmet";

export function Accommodations() {
	return (
		<>
			<Helmet><title>Accommodations | Holidaze</title></Helmet>
			<div className="accommodations-header">
				<div className="accommodations__img"></div>
				<div className="accommodations__txt">
					<h1>Holidaze</h1>
					<p>Find the perfect accommodations anywhere in Bergen</p>
				</div>
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