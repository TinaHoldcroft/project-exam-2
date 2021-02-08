import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constants/api";
import { Helmet } from "react-helmet";

function Enquiries() {
    const [enquiries, setEnquiries] = useState([]);
    const [error, setError] = useState(null);
    const url = BASE_URL + "enquiries";

    useEffect(() => {
        const options = { headers };
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                console.dir(json);
                if (json.error) {
                    setEnquiries([]);
                    setError(json.message);
                } 
                else { setEnquiries(json); }
            })
            .catch((error) => console.debug(error));
    },[url]);

    return (
        <div className="add enquiries">
            <Helmet><title>Enquiries | Holidaze</title></Helmet>
            {error && <div className="error">{error}</div>}
            {enquiries.length === 0 &&<p className="empty">no enquiries</p>}
            {enquiries.map((enquiry) => {
                    return (
						<div className="message-tiles" key={enquiry.id}>
							<h5>{enquiry.name}</h5>
							<p>{enquiry.email}</p>
							<p>{enquiry.establishmentId}</p>
							<p>{enquiry.checkIn}</p>
							<p>{enquiry.checkIn}</p>
						</div>
                    );
                })}
        </div>
    );
}

export default Enquiries;