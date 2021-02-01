import React from "react";
import Newsletter from "./Newsletter"

const Footer = () => (
    <div className="footer">
        <div className="footer-col-1">
			<a href="/">
				<div className="footer-img"></div>
				<h1>Holidaze</h1>
			</a>
			<p>The purpose of this website is to promote Bergen as a travel destination.</p>
			<p>© 2021 Holidaze, All rights reserved</p>
			<div className="SoMe">
				<a title="Messenger" target={"_blank"} rel="noreferrer"  href="https://www.messenger.com/"><i className="fab fa-facebook-messenger"></i></a>
				<a title="YouTube" target={"_blank"} rel="noreferrer"  href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
				<a title="Twitter" target={"_blank"} rel="noreferrer"  href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
			</div>
		</div>
        <div className="footer-col-2">
			<div>
				<h4>Contat</h4>
				<a href="/Contact">Contat Us</a>
				<a href="https://www.messenger.com/">Messenger</a>
				<a href="mailto:contact@holidaze.com">E-mail</a>
				<a href="/Login">Admin Login</a>
			</div>
			<div>
				<h4>Accommodations</h4>
				<a href="/Accommodations">Search Accommodations</a>
				<a href="/Accommodations">Hotels</a>
				<a href="/Accommodations">Bed and Breakfasts</a>
				<a href="/Accommodations">Guesthouses</a>
			</div>
			<div>
				<h4>Follow Us</h4>
				<a target={"_blank"} rel="noreferrer" href="https://www.messenger.com/">Facebook</a>
				<a target={"_blank"} rel="noreferrer" href="https://www.youtube.com/">LinkedIn</a>
				<a target={"_blank"} rel="noreferrer" href="https://twitter.com/">Twitter</a>
			</div>
		</div>

        <div className="footer-col-3">
			<h4>Newsletter</h4>
			<p>Stay up to date on all events and special deals in Bergen by subscribing to our newsletter</p>
			<Newsletter/>
		</div>
    </div>
);

export default Footer;