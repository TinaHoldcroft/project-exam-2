import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Authorization } from "../../constants/Authorization";

function LogOut() {
    const { logout } = useContext(Authorization);
    const history = useHistory();
    const username = localStorage.getItem("name");

    function doLogout() {
        logout();
        history.push("/");
    }

    return ( 
        <button title="Log Out"className="btn-logout" onClick={doLogout}>
            <i className="fas fa-sign-out-alt"></i>
            <p>Log out: {username}</p>
        </button>
    )
}

export default LogOut;