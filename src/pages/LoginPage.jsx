import { React, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { collection, getDocs, doc, addDoc,updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
function LoginPage() {
  const [click, setClick] = useState(false);
  const { 
    userValues,
    conectedUser,
    setConectedUser,isOnline,setIsOnline
  } = useContext(UserContext);  
  const navigate = useNavigate();
const UpdateUser=async(id)=>{
    const userDoc=doc(db,"User",id)
    const newFields={isOnline:true}
    await updateDoc(userDoc,newFields)
    console.log(newFields);
}

  function Validation(userName, password) {
    setClick(true);
    console.log(userValues.length);
    console.log(isOnline);

    for (let i = 0; i < userValues.length; i++) {
      if (
        userName.value === userValues[i].userName &&
        password.value === userValues[i].password
      ) {
        navigate("/");       
        UpdateUser(userValues[i].id)
        setConectedUser(i)
        setIsOnline(true)
      }
    }
  }
  console.log(isOnline);
  return (
    <div>
      <h1>Log in</h1>
      <input placeholder="User name" id="userName"></input>
      <input placeholder="Password" id="password"></input>
      <button
        onClick={() => {
          Validation(
            document.getElementById("userName"),
            document.getElementById("password")
          );
        }}
      >
        Log in
      </button>

      {click && !isOnline && (
        <h1>Your user name or password are incorrect</h1>
      )}
    </div>
  );
}
export default LoginPage;
