import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constants/api";
import { Helmet } from "react-helmet";

function Enquiries() {
    const [enquiries, setEnquiries] = useState([]);
    const [error, setError] = useState(null);
    const url = BASE_URL + "enquiries";
    const options = { headers };


    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                if (json.error) {
                    setEnquiries([]);
                    setError(json.message);
                } 
                else { setEnquiries(json); }
            })
            .catch((error) => console.log(error));
    },);

    return (
        <div className="enquiries">
            <Helmet><title>Enquiries | Holidaze</title></Helmet>
			<h1>Placeholder</h1>
            {error && <div className="error">{error}</div>}
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