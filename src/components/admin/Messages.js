import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";
import { Helmet } from "react-helmet";

function Messages() {
    const [contacts, setContacts] = useState([]);
    const [error, setError] = useState(null);
    const url = BASE_URL + "contacts/";
    const options = { headers };

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                if (json.error) {
                    setContacts([]);
                    setError(json.message);
                } 
                else { setContacts(json); }
            })
            .catch((error) => console.log(error));
    },);

    return (
        <div className="messages">
            <Helmet><title>Messages | Holidaze</title></Helmet>
            {error && <div className="error">{error}</div>}
                {contacts.map((contact) => {
                    return (
						<NavLink to={`viewmessage/${contact.id}`}>
							<div className="message-tiles" key={contact.id}>
								<h5>{contact.name}</h5>
								<p>{contact.message}</p>
							</div>
						</NavLink>
                    );
                })}
        </div>
    );
}

export default Messages;