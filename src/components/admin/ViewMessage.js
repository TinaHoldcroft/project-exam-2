import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";
import DeleteMessage from "./DeleteMessage";
import Spinner from "../accommodations/Spinner";

function Edit() {
    const defaultState = {
        name: "",
        email: "",
    };

    const history = useHistory();
    const { handleSubmit } = useForm();
    const [contact, setContact] = useState(defaultState);
    let { id } = useParams();
    const options = { headers };
    const fetchUrl = BASE_URL + "contacts/" + id;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(fetchUrl, options)
            .then((response) => response.json())
            .then((json) => setContact(json))
            .catch((error) => console.debug(error))
            .finally(() => setLoading(false));
    },);

    if (loading) { return <Spinner/>; }

    async function onSubmit(data) {
        console.log("data", data);
        await fetch(fetchUrl);
        history.push("/admin/messages");
    }

    return (
        <div className="view-message">
            <form className="admin-form" onSubmit={handleSubmit(onSubmit)}>
                <button className="btn-link">&#8592; Back to messages</button>
                <div>
                    <p>{contact.name} <span>{contact.email}</span></p>
                    <button title="reply"><i className="fas fa-reply"></i></button>
                    <DeleteMessage id={id}/>
                </div>
                <div><p>{contact.message}</p></div>
            </form>
        </div>
    );
}

export default Edit;