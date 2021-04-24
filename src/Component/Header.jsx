import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
    return(
    <> 
    <div className="headerStyle">
    {/* <link to="/"> Home </link> */}

    <NavLink className="navLink" cexact activeClassName="activeClass" to="/about"> About Us </NavLink>
    <NavLink className="navLink" exact activeClassName="activeClass" to="/contact"> Contact Us</NavLink>

    {/* <link to="/login"> Login </link>
    <link to="/registration"> Registration </link> */}
    </div>
    </>
    );
};
export default Header;