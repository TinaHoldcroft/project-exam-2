import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Logout from "../login/Logout";
import { Authorization } from "../../constants/Authorization";

function Nav() {
    const { admin } = useContext(Authorization);
    const handleToggle = () => { setActive(!isActive); };
    const [isActive, setActive] = useState("false");

    return (
        <>{admin ? ( // Admin side
            <div className="menu menu__admin">
                <div className="brand">
                    <NavLink activeClassName="none" to="/" exact>
                        <div className="logo"></div>
                        <h1 title="Home">Holidaze</h1>
                    </NavLink>
                </div>
                <div className="nav-links">
                    <NavLink activeClassName="active" to="/admin/establishments"><i className="fas fa-hotel"></i> Overview</NavLink>
                    <NavLink activeClassName="active" to="/admin/add"><i className="fas fa-plus-square"></i> Add</NavLink>
                    <NavLink activeClassName="active" to="/admin/messages"><i className="fas fa-envelope-open"></i> Messages</NavLink>
                    <NavLink activeClassName="active" to="/admin/enquiries"><i className="fas fa-calendar-plus"></i> Enquiries</NavLink>
                    <Logout/>
                </div>
            </div>
        ):( // User side
            <div className="menu menu__user">
                <div className="brand">
                    <NavLink activeClassName="none" to="/" exact>
                        <div className="logo"><h1 title="Home">Holidaze</h1></div>
                    </NavLink>
                </div>
                <div className="nav-links dropdown">
                    <button className={isActive ? "btn-closed" : "btn-open"} onClick={handleToggle}>
                        <i className="fas fa-bars"></i>
                        <i className="fas fa-times"></i>
                    </button>         
                    <div className={isActive ? "closed" : "open"}>
                        <NavLink activeClassName="active" to="/" exact id="home" title="Home">Home</NavLink>
                        <NavLink activeClassName="active" to="/accommodations" exact title="Accommodations">Accommodations</NavLink>
                        <NavLink activeClassName="active" to="/contact" title="Contact">Contact</NavLink> 
                        <NavLink activeClassName="active" to="/login"><i title="Admin login" className="fas fa-user"></i></NavLink>
                    </div>
                </div>
            </div>
        )}</>
    );
}

export default Nav;
