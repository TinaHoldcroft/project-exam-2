import React from "react";
import Hero from "./Hero";
import Footer from "../layout/Footer";
import RecentlyViewed from "../accommodations/RecentlyViewed";
import SearchList from "../accommodations/SearchList";
import { Link } from "react-router-dom";

export function Home() {
	return (
		<>
			<Hero/>
			<SearchList/>
			<RecentlyViewed/>
			<Link to={"/accommodations"}><button className="btn__more">View more <i className="fas fa-arrow-right"></i></button></Link> 
			<Footer/>
		</>
	);
}

export default Home;