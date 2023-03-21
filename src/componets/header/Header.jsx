import { NavLink } from "react-router-dom";

import './Header.css'

const Header = () => {
    
    return(
        <nav className="header">
            <NavLink className="btns" to="/">Home</NavLink>
            <NavLink className="btns" to="productlist">Products</NavLink>
            <NavLink className="btns" to="cart">Cart</NavLink>
        </nav>
    )
}

export default Header