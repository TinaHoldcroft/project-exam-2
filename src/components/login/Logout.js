import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Authorization } from "../../constants/Authorization";

function LogOut() {
    const { logout } = useContext(Authorization);
    const history = useHistory();

    function doLogout() {
        logout();
        history.push("/");
    }

    return <button className="btn_logout" onClick={doLogout}><p><i className="fas fa-sign-out-alt"></i>Log Out</p></button>;
}

export default LogOut;