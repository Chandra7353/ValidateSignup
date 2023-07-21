import {  useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Signup = () => {

    let navigate =useNavigate();

   let username = useRef();
   let userPass = useRef();
   let userEmail=useRef();
   let userPhno = useRef();
   let dob = useRef();



   useEffect(()=>{
    // verify user has authenticated already . if yes redirect to home
    if(localStorage.getItem("user") != null)
    {
        navigate("/home");
    }
} , [])


   let handlesignuppage=(e)=>{
    e.preventDefault();

    let newuser ={
        username:username.current.value,
        userPass:userPass.current.value,
        userEmail:userEmail.current.value,
        userPhno:userPhno.current.value,
        dob:dob.current.value,
        Note:{},
       

    }

    fetch("http://localhost:4000/user",{
                  method:"POST",
                  headers: {"content-type": "application/json"},
                  body:JSON.stringify(newuser)
    })
    .then(()=>{
        alert("Account has been created")
        navigate("login")
    })   
    
   }



    return (
        <div>
               <Navbar/>
      
        <div className="signupbox" >
           
            <div className="main">
            <h1>Signup page</h1>
             <hr />
                <form onSubmit={handlesignuppage} >
                <input type="text" name="name" placeholder="Enter Name" id="name" ref={username} required/>
                <input type="password" name="pass" placeholder="Enter Password" id="pass" ref={userPass} required/>
                <input type="email" name="email" placeholder="Enter Email Id" id="pass" ref={userEmail} required/>
                <input type="tel" name="phno" placeholder="Enter Phno"  max="10" min="10"  id="phno"ref={userPhno}required />
                <input type="date" name="DOB" placeholder="Date of Birth" id="" ref={dob} />
                <input type="submit" value="Submit"  id="submit"/>
                </form>

            </div>
            


        </div>
        </div>
      );
}
 
export default Signup;