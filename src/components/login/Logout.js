import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Authorization } from "../../constants/Authorization";

function Login() {
    const { logout } = useContext(Authorization);
    const history = useHistory();

    function doLogout() {
        logout();
        history.push("/");
    }

    return <button className="btn_logout" onClick={doLogout}><i className="fas fa-user-times" title="Log out"></i></button>;
}

export default Login;