import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { BASE_URL, headers, PATCH } from "../../constants/api";
import Delete from "./DeleteEstablishment";

function Edit() {
    const defaultState = {
        name: "",
        email: "",
    };

    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const [hotel, setHotel] = useState(defaultState);
    let { id } = useParams();
    const options = { headers };
    const fetchUrl = BASE_URL + "establishments/" + id;

    useEffect(() => {
        fetch(fetchUrl, options)
            .then((response) => response.json())
            .then((json) => setHotel(json))
            .catch((error) => console.debug(error));
    },);

    async function onSubmit(data) {
        console.log("data", data);
        const updateOptions = { headers, method: PATCH, body: JSON.stringify(data) };
        await fetch(fetchUrl, updateOptions);
        history.push("/admin/establishments");
    }

    return (
        <div className="edit">
            <form className="admin-form" onSubmit={handleSubmit(onSubmit)}>
                <div><h2>Edit establishment</h2></div>
                
                <div>
                    <label>Name: </label>
                    <input name="name" defaultValue={hotel.name} placeholder="Enter name for the hotel" ref={register}/>
                </div>

                <div>
                    <label>E-mail: </label>
                    <input name="email" defaultValue={hotel.email} placeholder="Enter an email address" ref={register}/>
                </div>


                <div className="topic-group">
                    <label>Price: </label>
                    <input name="price" defaultValue={hotel.price} placeholder="00" ref={register}/>
                    <label>Maximum guests: </label>
                    <input name="maxGuests" defaultValue={hotel.maxGuests} placeholder="00" ref={register}/>
                </div>

                <div>
                    <label>Image URL: </label>
                    <input name="image" defaultValue={hotel.image} placeholder="URL" ref={register}/>
                </div>

                <div>
                    <label>Description: </label>
                    <input name="description" defaultValue={hotel.description} placeholder="description" ref={register}/>
                </div>

                <div className="topic-group">
                    <label>Latitude: </label>
                    <input name="lat" defaultValue={hotel.lat} placeholder="00.000000" ref={register}/>
                    <label>Longitude: </label>
                    <input name="lng" defaultValue={hotel.lng} placeholder="00.000000" ref={register}/>
                </div>
            
                <div>
                    <label>address</label>
                    <input name="address" defaultValue={hotel.address} placeholder="address" ref={register}/>
                </div>

                <div className="btn-group">
                    <button className="btn-blue">Update</button>
                    <Delete id={id}/>
                </div>
            </form>
        </div>
    );
}

export default Edit;