import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logout from "../login/Logout";
import { Authorization } from "../../constants/Authorization";

function Nav() {
    const { user } = useContext(Authorization);
    
    return (
        <>{user ? ( // Admin side
            <div className="menu menu__admin">
                <div className="brand">
                    <NavLink activeClassName="none" to="/" exact>
                        <div className="logo"></div>
                        <h1 title="Home">Holidaze</h1>
                    </NavLink>
                </div>
                <div className="nav-links">
                    <NavLink activeClassName="active" to="/admin/hotels"><i className="fas fa-hotel"></i> Hotels</NavLink>
                    <NavLink activeClassName="active" to="/admin/add"><i className="fas fa-plus-square"></i> Add Hotel</NavLink>
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
                <div className="nav-links">                   
                    <NavLink activeClassName="active" to="/accommodations" exact title="Accommodations">Accommodations</NavLink>
                    <NavLink activeClassName="active" to="/contact" title="Contact">Contact</NavLink> 
                    <NavLink activeClassName="active" to="/login"><i title="Admin login" className="fas fa-user"></i></NavLink>
                </div>
            </div>
        )}</>
    );
}

export default Nav;
