import React from 'react';
import Popup from 'reactjs-popup'; 
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup
        .string()
        .email('E-mail is not valid', { regex: /^[\d-_.a-zA-z]+@[\d-_.a-zA-z]+\.[a-zA-z]+$/g })
        .required('E-mail is required'),
});

function NewsLetter() {
    const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(schema) });
    function onSubmit(data) {
        console.log("data", data)
        alert('Thank you for signing up for our newsletter');
    }
    return (
        <Popup trigger={<button className="btn-blue"> Sign Up</button>}>
            <div className="pop-up">
                <form  onSubmit={handleSubmit(onSubmit)}>
                    <h2>Sign Up</h2>
                    <h3>Submit your e-mail adress to register for our newsletter</h3>
                    <input name="email" placeholder="example@domain.com" ref={register}/>
                    <p className="error">{errors.email?.message}</p>
                    <button className="btn-blue" type="submit">Send</button>
                </form>
            </div>
        </Popup>
    );
}

export default NewsLetter;