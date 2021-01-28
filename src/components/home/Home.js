import React from "react";
import Hero from "./Hero";
import Footer from "../layout/Footer";
import RecentlyViewed from "../accommodations/RecentlyViewed";
import SearchList from "../accommodations/SearchList";

export function Home() {
	return (
		<>
			<Hero/>
			<SearchList/>
			<RecentlyViewed/>
			<Footer/>
		</>
	);
}

export default Home;