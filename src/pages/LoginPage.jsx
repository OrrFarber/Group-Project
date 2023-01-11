import { React, useContext, useState } from "react";
import {useNavigate } from "react-router-dom";
import {UserContext} from "../App"
function LoginPage(){
    const [valid,setValid]=useState(false)
    const [click,setClick]=useState(false)
    const {userValues} = useContext(UserContext);
    const navigate = useNavigate();

    function Validation(userName,password){
       setClick(true)
for (let i = 0; i < userValues.length; i++) {  
    if(userName.value===userValues[i].userName&&password.value===userValues[i].password){  
        navigate("/") 
        setValid(true)
     }
}
    }
    return(
        <div>
<h1>Log in</h1>
<input placeholder="User name" id="userName"></input>
<input placeholder="Password" id="password"></input>
<button onClick={()=>{(Validation(document.getElementById("userName"),document.getElementById("password")))}}>Log in</button>
{(click&&!valid)&&<h1>Your user name or password are incorrect</h1>}
        </div>
    )
 }
 export default LoginPage;