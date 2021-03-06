import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { BASE_URL, headers } from "../../constants/api";

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
    message: yup
        .string()
        .min(10, 'Message is required')
        .required(),
});

function Contact() {
    const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(schema) });

    async function onSubmit(data) {
        console.log("data", data);
        const url = BASE_URL + "contacts";
        const options = { headers, method: "POST", body: JSON.stringify(data) };
        await fetch(url, options);
        var con = window.confirm("Said everything you needed to say? \nClick cancel to keep filling out the form or click OK to send it in");
   
        if (con === true) { localStorage.setItem("enquiry", JSON.stringify(data)); }
        if (con === false) { localStorage.setItem("cancel", "message was canceled"); }
        //window.localStorage.clear();
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <h2>Contact Us</h2>
            <label htmlFor="name">Name</label>
            <input title="Name" type="name" name="name" ref={register}/>
            <p className="error">{errors.name?.message}</p>
            <label htmlFor="email">E-mail</label>
            <input title="E-mail" type="email" name="email" ref={register}/>
            <p className="error">{errors.email?.message}</p>
            <label htmlFor="message">Message</label>
            <textarea type="text" name="message" ref={register}></textarea>
            <p className="error">{errors.message?.message}</p>
            <button title="Send message" className="btn-blue" type="submit">Send</button>
        </form>
    );
}

export default Contact;