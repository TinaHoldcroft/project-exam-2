import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Authorization } from "../../constants/Authorization";

function Login() {
    const { register, handleSubmit } = useForm();
    const { registerUser } = useContext(Authorization);
    const adminPassword = "admin123";
    const history = useHistory();

    function onSubmit(data) { 
        console.log("data", data); 
        localStorage.setItem("name", data.name);
        //window.localStorage.clear();

        let loginInput = data.loginPassword;

        function strCompare(loginInput, adminPassword){
            return loginInput === adminPassword ;
        }
        
        if(strCompare(loginInput, adminPassword) === true) {
            alert('Welcome ' + data.name);
            registerUser(data.name);
            history.push("/admin/establishments");
        }

        if(strCompare(loginInput, adminPassword) === false) {
            alert("You typed an invalid password \nPlease try again or register an account");
        }
        
        console.log(strCompare(loginInput, adminPassword));
    }

    return (
        <div className="login">
            <Helmet><title>Log In | Holidaze</title></Helmet>
            <div className="login__dark">
                <h3>Don't have an Account?</h3>
                <p>Click the button below to register a admin account.</p>
                <Link to={"/register"}><button className="btn-blue">Register</button></Link> 
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3>Login</h3>
                    <p title="Please enter your login information">Please enter your login information</p>
                    <input name="name" placeholder="name" ref={register} required/>
                    <input name="loginPassword" placeholder="Password" ref={register} required/>
                    <button className="btn-blue" type="submit">Log in</button>
                    <Link to={"/register"}><button className="register-btn btn-blue">Register</button></Link> 
                </form>
            </div>
        </div>
    );
}

export default Login;
