import React from "react";
import logo from "./images/logo1.jpg";

const Header=()=>{
    return <>
    <div className='header'>
        <img src={logo} alt='logo' width='100' height='50' />
        <h1>My Impings</h1>

    </div>
    </>
};


export default Header;