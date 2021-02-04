import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Name is required')
        .matches(/[a-zA-z-\s]/g , 'Only characters A-Z are valid')
        .required(),
    email: yup
        .string()
        .email('E-mail is not valid', { regex: /^[\d-_.a-zA-z]+@[\d-_.a-zA-z]+\.[a-zA-z]+$/g })
        .required('E-mail is required'),
});

function Enquiry() {
    const defaultState = {
        name: "",
        email: "",
    };

    const history = useHistory();
    const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(schema) });
    const [hotel, setHotel] = useState(defaultState);
    let { id } = useParams();
    const options = { headers };
    const fetchUrl = BASE_URL + "establishments/" + id;

    useEffect(() => {
        fetch(fetchUrl, options)
            .then((response) => response.json())
            .then((json) => setHotel(json))
            .catch((error) => console.log(error));
    },);

    async function onSubmit(data) {
        console.log("data", data)
        const url = BASE_URL + "enquiries";
        const options = { headers, method: "POST", body: JSON.stringify(data) };
        await fetch(url, options);
        var con = window.confirm("Thanks for choosing " + hotel.name + "\nYou will typically get a response within 48 hours");
   
        if (con === true) {
            localStorage.setItem("name", data.name);
            localStorage.setItem("email", data.email);
            localStorage.setItem("checkIn", data.checkIn);
        }
        if (con === false) {
            localStorage.setItem("cancel", "enquiry was canceled");
        }
        //window.localStorage.clear();

        history.push("/");
    }

    return (
        <div className="enquiry">
            <div>
                <h3>Book Your Stay at {hotel.name}</h3>
                <p>Fill out the form to book your accommodations</p>
                <Link to={"../accommodations/"}>&#8592; Keep browsing</Link>
            </div>
            <form className="admin-form" onSubmit={handleSubmit(onSubmit)}>
                <div><h1>Booking Enquiry</h1></div>
                <p>Please fill out the form</p>
 
                <label>Name: </label>
                <input type="text" name="name" ref={register}/>
                <p className="error">{errors.name?.message}</p>

                <label>E-mail</label>
                <input name="email" ref={register}/>
                <p className="error">{errors.email?.message}</p>

                <label>Check in</label>
                <input type="date" name="checkIn" ref={register}></input>

                <label>Check out</label>
                <input type="date" name="checkOut" ref={register}></input>

                <div className="btn-group">
                    <button className="btn-blue">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Enquiry;