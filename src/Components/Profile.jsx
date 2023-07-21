import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate, useParams } from "react-router-dom";

const Profile = () => {
    
    let [notes, setnotes]=useState(null);
    let[userdetails , setuserdetails] = useState({});
    let navigate =useNavigate();

    let title =useRef();
    let content= useRef();
   
    useEffect(()=>{
        fetch("http://localhost:4000/user")
           .then((res)=>{ return res.json()})
           .then((notes)=>{
             setnotes(notes);
           })
           let data= JSON.parse(localStorage.getItem("user"));
            setuserdetails(data);
            console.log(data);
            },[])


  


	const handleSaveClick = (e) => {
        e.preventDefault();

    //     let newnotes={
    //         title:notes.title,
    //         content:notes.content
    //     }
    
    //     let updatedata={
    //                 ...userdetails,
    //                 Note:[...userdetails.Note,newnotes]
    //     }

    //   let config={
    //        method:"PUT",
    //        headers:{"Content-Type":"application/json"},
    //        body: JSON.stringify(updatedata)
    //   }


    //   fetch("http://localhost:4000/user"+userdetails.id, config)
    //   .then(()=>{
    //     localStorage.setItem("userdetails", JSON.stringify(updatedata));
    // })

			
		
	};
   

    // let deleteAccount = ()=>{
    
    //     let pwd = prompt("Are you sure to delete , if yes please provide password");
    //     if(pwd != userdetails.password)
    //     {
    //         alert("invalid password !!!");
    //         return;
    //     }
    
    //     let config = {method : "DELETE"};

    //     fetch("http://localhost:4000/users"+userdetails.id , config )
    //     .then(()=>{
    
    //         localStorage.removeItem("user");
    //         alert("Your account has been deleted permanently");
    //         navigate("/");
    //     })
    // }
    
    return ( 
        <div className="page">
            <Navbar/>
            <h1>Add your Notes</h1>


            <div className='notenew'>
            {
    userdetails && <div>
         <h2><p>User Name:- {userdetails.username}</p>
         <p>User Emailid:- {userdetails.userEmail}</p>
         <p>USer DOB:- {userdetails.dob}</p>
         <p>User Phno:- {userdetails.userPhno}</p></h2>
    </div>
} 
            <form action="" onClick={handleSaveClick}>
            <input type="text" ref={title} placeholder="Enter Title"  required/><br />
			<textarea rows='10'cols='60' placeholder='Type note'  ref={content} required></textarea> <br />
            <input type="submit" value="Save" id="savebutton" />	
			
            </form>
		</div>
        <hr />

        <div> {
            notes && <div>
                <p>{notes.title}</p>
                <p>{notes.content}</p>
            </div>
            }
            
            
        </div>


        {/* <button onClick={deleteAccount}> Delete</button> */}
        </div>
     );
}
 
export default Profile;