import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";

function AddHotel() {
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    async function onSubmit(data) {
        console.log("data", data);
        const url = BASE_URL + "establishments";
        const options = { headers, method: "POST", body: JSON.stringify(data) };
        await fetch(url, options);
        history.push("/admin/hotels");
    }

    return (
        <div className="add-hotel">
            <form className="admin-form" onSubmit={handleSubmit(onSubmit)}>
                <div><h1>Add Hotel</h1></div>
                
                <div>
                    <label>Name: </label>
                    <input name="name" placeholder="The Example Inn" ref={register} required/>
                </div>

                <div>
                    <label>E-mail: </label>
                    <input name="email" placeholder="example@domain .com" ref={register} required/>
                </div>

                <div className="topic-group">
                    <label>Price: </label>
                    <input name="price" placeholder="00" ref={register} required/>
                    <label>Maximum guests: </label>
                    <input name="maxGuests" placeholder="00" ref={register}/>
                </div>

                <div>
                    <label>Image URL: </label>
                    <input name="image" placeholder="https://...." ref={register} required/>
                </div>

                <div>
                    <label>Description: </label>
                    <input name="description" placeholder="full hotel description" ref={register} required/>
                </div>

                <div className="topic-group">
                    <label>Latitude: </label>
                    <input name="lat" placeholder="00.000000" ref={register}/>
                    <label>Longitude: </label>
                    <input name="lng" placeholder="00.000000" ref={register}/>
                </div>

                <div>
                    <label>Address: </label>
                    <input name="address" placeholder="streetname, postalcode" ref={register}/>
                </div>

                <div className="btn-group"><button className="btn-blue">Add hotel</button></div>
            </form>
        </div>
    );
}

export default AddHotel;
