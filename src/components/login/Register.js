import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Authorization } from "../../constants/Authorization";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Register() {
    const { register, handleSubmit } = useForm();
    const { registerUser, registerPassword } = useContext(Authorization);
    const history = useHistory();

    function onSubmit(data) {
        console.log("data", data);
        registerUser(data.username);
        registerPassword(data.password);
        history.push("/admin/establishments");
    }

    return (
        <div className="register">
            <Helmet><title>Register | Holidaze</title></Helmet>
            <div className="register__dark">
                <h3>Already have an Account?</h3>
                <p>Click the button below to go to the log in page.</p>
                <Link to={"/login"}><button  className="btn-blue">Log In</button></Link>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3>Register</h3>
                    <p title="Enter your information to create an account">Enter your information to create an account</p>
                    <input name="username" placeholder="name" ref={register} required/>
                    <input name="password" placeholder="password" ref={register} />
                    <button className="btn-blue" type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
