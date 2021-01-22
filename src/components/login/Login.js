import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
    const { register, handleSubmit } = useForm();

    function onSubmit(data) {
        console.log("data", data);
    }

    return (
        <div className="login">
            <div className="login__dark">
                <h3>Don't have an Account?</h3>
                <p>Click the button below to register a admin account.</p>
                <Link to={"/register"}><button className="btn__register">Register</button></Link> 
            </div>
            <div className="login__light">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3>Admin Login</h3>
                    <p title="Please enter your login information">Please enter your login information</p>
                    <input name="username" placeholder="Username" ref={register} />
                    <input name="password" placeholder="Password" ref={register} />
                    <button className="btn__register" type="submit">Log in</button>
                </form>
            </div>
              

        </div>
    );
}

export default Login;
