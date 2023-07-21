import {Link} from "react-router-dom";
const Navbar = () => {
    return ( <nav >
        <div className="navblock" >
        
        <Link to="/" > Signup</Link>
        <Link to="/login" >Login</Link>
        <Link to="/home" >Home</Link>
        <Link to="/profile">Profile</Link>

        </div>
       


    </nav> );
}
 
export default Navbar;