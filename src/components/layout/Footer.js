import React from "react";

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
				<a title="Messenger" href="https://www.messenger.com/"><i className="fab fa-facebook-messenger"></i></a>
				<a title="YouTube" href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
				<a title="Twitter" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
			</div>
		</div>

        <div className="footer-col-2">
			<div>
				<h4>About Us</h4>
				<a href="/">About Holidaze</a>
				<a href="/">Contact Us</a>
				<a href="/">E-mail</a>
				<a href="/">Admin Login</a>
			</div>
			<div>
				<h4>Accommodations</h4>
				<a href="/">Search Accommodations</a>
				<a href="/">Hotels</a>
				<a href="/">Bed and Breakfasts</a>
				<a href="/">Guesthouses</a>
			</div>
			<div>
				<h4>Follow Us</h4>
				<a href="https://www.messenger.com/">Facebook</a>
				<a href="https://www.youtube.com/">LinkedIn</a>
				<a href="https://twitter.com/">Twitter</a>
			</div>
		</div>

        <div className="footer-col-3">
			<h4>Newsletter</h4>
			<p>Stay up to date on all events and special deals in Bergen by subscribing to our newsletter.</p>
			<button>Sign Up</button>
		</div>
    </div>
);

export default Footer;