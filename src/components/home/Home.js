import React from "react";
import Hero from "./Hero";
import Footer from "../layout/Footer";
import RecentlyViewed from "../accommodations/RecentlyViewed";
import SearchList from "../accommodations/SearchList";
import { Helmet } from "react-helmet";

export function Home() {
	return (
		<>
			<Helmet><title>Home | Holidaze</title></Helmet>
			<Hero/>
			<SearchList/>
			<RecentlyViewed/>
			<Footer/>
		</>
	);
}

export default Home;