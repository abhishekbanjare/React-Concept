import './Header.css';
import { Link, NavLink } from "react-router-dom"
const Header = ()  => {
    const navLinkStyles = ({ isActive }) => {
        return {
          textDecoration: isActive ? "none" : "underline",
          color: isActive ? "red" : "white",
          fontSize: "30px"
        };
    };
    return(
        <div className="header">
           <NavLink style={navLinkStyles} to={'/'}>Home</NavLink>

           <NavLink style={navLinkStyles} to={'/about'}>About</NavLink>

           <NavLink style={navLinkStyles} to={'/contact'}>Contact</NavLink>

        </div>
    )
}
export default Header;



// https://dev.to/adidoshi/react-router-dom-v6-51j2