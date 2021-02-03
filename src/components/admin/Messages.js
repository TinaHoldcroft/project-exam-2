import React from "react";
import { Helmet } from "react-helmet";

function Messages() {
	const showName = localStorage.getItem("name");
	const showEmail = localStorage.getItem("email");
	const showMessage = localStorage.getItem("message");

	function deleteItem (){
		localStorage.removeItem("message");
		localStorage.removeItem("email");
		localStorage.removeItem("name");
		window.location.reload();
	}

	return (
		<div className="messages">
            <Helmet><title>Messages | Holidaze</title></Helmet>
			<h2>Messages</h2>
			<div className="form-inputs">
				<p>{showName}</p>
				<p>{showEmail}</p>
				<p>{showMessage}</p>
				<button onClick={() => deleteItem()}>Delete</button>
			</div>
		</div>
	);
}

export default Messages;