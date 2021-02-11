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
        localStorage.setItem("name", data.name);
        registerUser(data.email);
        registerPassword(data.password);
        history.push("/admin/establishments");
        alert('Welcome');
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
                    <input name="name" type="name" placeholder="name" ref={register} required/>
                    <input name="email" type="email" placeholder="E-mail" ref={register} required/>
                    <input name="password" type="password" title="Must contain at at least 8 characters that includes one number, one uppercase and one lowercase letter" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder="password" ref={register} required/>
                    <button className="btn-blue" type="submit">Send</button>
                    <Link to={"/login"}><button type="submit" className="login-btn btn-blue">Log in</button></Link>
                </form>
            </div>
        </div>
    );
}

export default Register;
