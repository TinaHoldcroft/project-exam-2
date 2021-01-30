import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

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
    function onSubmit(data) {
        console.log("data", data)
        alert('Your form has been submitted');
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <h2>Contact Us</h2>
            <label>Name</label>
            <input type="text" name="name" ref={register}/>
            <p className="error">{errors.name?.message}</p>
            <label>E-mail</label>
            <input name="email" ref={register}/>
            <p className="error">{errors.email?.message}</p>
            <div>
                <label>Message</label>
                <textarea type="text" name="message" ref={register}></textarea>
            </div>
            <p className="error">{errors.message?.message}</p>
            <button className="btn-blue" type="submit">Send</button>
        </form>
    );
}

export default Contact;