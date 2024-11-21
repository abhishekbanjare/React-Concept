// we use nexted rout in this page
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <>
         <Link to={'insta'}><h3>Contact via Instagram</h3></Link> 
         <Link to={'Mail'}><h3>Contact via Mail</h3></Link> 
         <Outlet />
        </>
    )
}
export default Contact;