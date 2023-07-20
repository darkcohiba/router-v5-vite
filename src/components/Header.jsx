import { NavLink } from "react-router-dom";


function Header() {
    return (
        <div>
            <div>Header page</div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    );
}

export default Header;