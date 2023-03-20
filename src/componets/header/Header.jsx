import { NavLink } from "react-router-dom";

const Header = () => {
    
    return(
        <nav>
            <h1>E-Shop</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="cart">Cart</NavLink>
            <NavLink to="oneproduct">OneProduct</NavLink>
            <NavLink to="productlist">ProductList</NavLink>
        </nav>
    )
}

export default Header