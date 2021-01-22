import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    firstName: yup
        .string()
        .min(2, 'Name must contain at least 2 characters')
        .matches(/[a-zA-z-\s]/g, 'Only characters A-Z are valid')
        .required(),
    lastName: yup
        .string()
        .min(2, 'Name must contain at least 2 characters')
        .matches(/[a-zA-z-\s]/g, 'Only characters A-Z are valid')
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
        <div className="contact">
            <div className="contact__bg"></div>
            <div className="SoMe-container">
                <i className="fas fa-paper-plane"></i>            
                <a title="E-mail" target={"_blank"} rel="noreferrer" href="mailto:contact@holidaze.com"><i className="fas fa-envelope"></i></a>
                <a title="Twitter" target={"_blank"} rel="noreferrer" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                <a title="YouTube" target={"_blank"} rel="noreferrer" href="https://youtube.com/"><i className="fab fa-youtube"></i></a>
                <a title="Facebook Messenger" target={"_blank"} rel="noreferrer" href="https://www.messenger.com/"><i className="fab fa-facebook-messenger"></i></a>
            </div>
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                    <h2>Contact Us</h2>
                    <input type="text" name="firstName" placeholder="First name" ref={register}/>
                    <p className="error">{errors.firstName?.message}</p>
                    <input type="text" name="lastName" placeholder="Last name" ref={register}/>
                    <p className="error">{errors.lastName?.message}</p>
                    <input name="email" placeholder="E-mail" ref={register}/>
                    <p className="error">{errors.email?.message}</p>
                    <input type="message" name="message" placeholder="Message" ref={register}/>
                    <p className="error">{errors.message?.message}</p>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact;