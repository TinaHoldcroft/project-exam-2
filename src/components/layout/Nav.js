import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logout from "../login/Logout";
import { Authorization } from "../../constants/Authorization";

function Nav() {
    const { user } = useContext(Authorization);
    return (

        <div className="menu">
            <div className="brand">
                <NavLink to="/" exact>
                    <div className="logo"><h1 title="Home">Holidaze</h1></div>
                </NavLink>
            </div>
            <div className="links">
                <NavLink to="/accommodations" exact title="Accommodations">Accommodations</NavLink>
                <NavLink to="/contact" title="Contact">Contact</NavLink>
                {user ? (
                    <>
                        <NavLink to="/admin" title="Admin">Admin</NavLink>
                        <Logout/>
                    </>
                ):(<NavLink to="/login"><i title="Admin login" className="fas fa-user"></i></NavLink>)
                }
            </div>
        </div>
    );
}

export default Nav;
