import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { Helmet } from "react-helmet";

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
    checkIn: yup
        .string()
        .required('Date is required'),
    checkOut: yup
        .string()
        .required('Date is required'),
});

function Enquiry() {
    const defaultState = {
        name: "",
        email: "",
        checkIn: "",
        checkOut: "",
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
            .catch((error) => console.debug(error));
    },);

    async function onSubmit(data) {
        console.log("data", data);
        const url = BASE_URL + "enquiries";
        const options = { headers, method: "POST", body: JSON.stringify({...data, establishmentId: id}) };
        await fetch(url, options);
        var con = window.confirm("Thanks for choosing " + hotel.name + "\nYou will typically get a response within 48 hours");
   
        if (con === true) { localStorage.setItem("enquiry", JSON.stringify(data)); }
        if (con === false) { localStorage.setItem("cancel", "enquiry was canceled"); }
        //window.localStorage.clear();

        history.push("/");
    }

    return (
        <div className="enquiry">
            <Helmet><title>Book {hotel.name} | Holidaze</title></Helmet>
            <div className="enquiry__dark">
                <h3>Book Your Stay at {hotel.name}</h3>
                <p>Fill out the form to book your accommodations</p>
                <Link to={"../accommodations/"}><i className="fas fa-arrow-left"></i> Keep browsing</Link>
            </div>
            <div>
                <form className="enquiry-form" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="big-screen">Booking Enquiry</h1>
                    <p className="big-screen">Please fill out the form</p>
                    <h1 className="small-screen">Enquiry</h1>
                    <p className="small-screen">Please fill out the form to book your stay at {hotel.name}</p>

                    <input placeholder="name" type="text" name="name" ref={register}/>
                    <span className="error">{errors.name?.message}</span>

                    <input placeholder="e-mail" name="email" ref={register}/>
                    <span className="error">{errors.email?.message}</span>

                    <label>Check in</label>
                    <input type="date" name="checkIn" ref={register}/>
                    <span className="error">{errors.checkIn?.message}</span>

                    <label>Check out</label>
                    <input type="date" name="checkOut" ref={register}/>
                    <span className="error">{errors.checkOut?.message}</span>

                    <button className="btn-blue">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Enquiry;