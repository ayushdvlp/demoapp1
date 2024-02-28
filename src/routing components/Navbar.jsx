import { Link } from "react-router-dom"

const Navbar = () => {
    return ( <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/fashion">Fashion</Link>
                <Link to="/electronics">Electronics</Link>
            </nav> );
}
 
export default Navbar;