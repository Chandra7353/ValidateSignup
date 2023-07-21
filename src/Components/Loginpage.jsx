import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Loginpage = () => {

let userEmail = useRef();
let userPass = useRef();
let navigate =useNavigate();


let handlelogin =(e)=>{
    e.preventDefault();

    fetch("http://localhost:4000/user")
    .then((res)=>{return res.json()} )
    .then((data)=>{
        let users= data.find((user)=>{return user.userEmail===userEmail.current.value})
        console.log(users);
        if(users==undefined){
            alert("user not found")
        }
        else if(users.userPass!== userPass.current.value){
            alert("password not match")
        }
        else{
            alert("Login Sucessfully")
            localStorage.setItem("user", JSON.stringify(users))
            navigate("/home")
        }
    })
} 

    return ( 
    <div>
         <Navbar/>
    
    <div className="loginbox">
       
        <div className="loginblock">
            <form onSubmit={handlelogin} >
                <h1>LoginPage</h1>
                <hr />
            <input type="email" name="email" placeholder="Enter email" id="email" ref={userEmail} required/>
            <input type="password" name="pass" placeholder="Enter Password" id="pass" ref={userPass} required/>
            <input type="submit" value="Submit" id="submit" />
            </form>
        </div>

    </div> 
    </div>);
}
 
export default Loginpage;