import { React, useContext, useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import "./SignUp.css";
import {UserContext} from "../App"
import { useNavigate } from "react-router";
import { db } from "../firebase/config";
import { collection, getDocs, doc,addDoc} from "firebase/firestore";
import { async } from "q";

function FirstSignIn() {
  const navigate=useNavigate()
  const[click,setClick]=useState(false)
  const [newUserName,setNewUserName]=useState("")
  const [newFirstName,setNewFirstName]=useState("")
  const [newLastName,setNewLastName]=useState("")
  const [newPassword,setNewPassword]=useState("")
  const [newVerifyPassword,setNewVeifyPassword]=useState("")
  const [newDate,setNewDate]=useState("")
  const [newEmail,setNewEmail]=useState("")
  const [newDifficulty,setNewDifficulty]=useState("")
  const { userValues, setUserValues} = useContext(UserContext);
  const userCollectionRef = collection(db, "User",)

 const checkUserName=()=>{
  for (let i = 0; i < userValues.length; i++) {
    if(userValues[i].userName===newUserName.trim()){
      return false
    }
  }
  if(newUserName.trim().length>4){
    return true
  }
  return false
 }
 const checkFirstName=()=>{
  if(newFirstName.trim().length>4){
    return true
  }
  return false
 }
 const checkLastName=()=>{
  if(newLastName.trim().length>4){
    return true
  }
  return false
 }
 const checkPassword=()=>{
  if(newPassword.trim().length>4){
    return true
  }
  return false
 }
 const checkVerifyPassword=()=>{
  if(newVerifyPassword!==newPassword){
    return false;
  }
  return true
 }
 const checkDate=()=>{
  if(newDate){
    return true;
  }
  return false
 }
 const checkEmail=()=>{
  if(newEmail){
    return true;
  }
  return false
 }
 const checkDiffuculty=()=>{
  if(newDifficulty){
    return true;
  }
  return false
 }
 const checkAll=()=>{
  return checkUserName()&&checkFirstName()&&checkLastName()&&checkPassword()&&checkVerifyPassword()
  &&checkDate()&&checkEmail()&&checkDiffuculty()
 }
const createUser=async()=>{
 setClick(true)
checkAll()&&await addDoc(userCollectionRef,{userName:newUserName,firstName:newFirstName,
  lastName:newLastName,password:newPassword,verifyPassword:newVerifyPassword,date:newDate,
email:newEmail,difficulty:newDifficulty})
}
  useEffect(() => {
    const getUsers = async () => {
        const data = await getDocs(userCollectionRef);
        setUserValues(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };
    getUsers()},[])
   

    return(
      <div className="form-wrapper">
        <div className="signUp-form">
          <div>
          <div className="column">
         <h1 className="title">Sign-Up</h1>

<input placeholder="User name" onChange={(event)=>{
  setNewUserName(event.target.value);
}}/>
{click&&!checkUserName()&& <span>User name is required</span>}

<input placeholder="First name"onChange={(event)=>{
  setNewFirstName(event.target.value);
}}/>
{click&&!checkFirstName()&& <span>First name is required</span>}

<input placeholder="Last name"onChange={(event)=>{
  setNewLastName(event.target.value);
}}/>
{click&&!checkLastName()&& <span>Last name is required</span>}

<input placeholder="Password"onChange={(event)=>{
  setNewPassword(event.target.value);
}}/>
{click&&!checkPassword()&& <span>Password name is required</span>}
<input placeholder="Verify password" onChange={(event)=>{
  setNewVeifyPassword(event.target.value);
}}/>
{click&&!checkVerifyPassword()&& <span>Password does not match</span>}

<input type="date" placeholder="Date"onChange={(event)=>{
  setNewDate(event.target.value);
}}/>
{click&&!checkDate()&& <span>Date is required</span>}

<input placeholder="E-mail" onChange={(event)=>{
  setNewEmail(event.target.value); 
}}/>
{click&&!checkEmail()&& <span>E-mail is required</span>}

<input placeholder="Difficulty"onChange={(event)=>{
  setNewDifficulty(event.target.value);
}}/>
{click&&!checkDiffuculty()&& <span>Difficulty is required</span>}

<button onClick={createUser} className="button-sign">Sign Up</button>

{userValues.map((user,index)=>{
  return(
    <div key={index}>
   <h1>{user.userName}</h1>
   <h1>{user.password}</h1>
            </div>
  )
})}
</div>
      </div>
      </div>
      </div>
    )
    }
    export default FirstSignIn;
    
  //  
     // function IfExist(user){
    // for(let i=0;i<userValues?.length-1;i++){
    //     if(userValues[i]?.userName===user?.value){
    //         console.log(userValues[i]?.userName);
    //         console.log(user?.value);
    //         return false;    
    //     }
    // }
    // return true;
    // }
  // return (
  //     <form className=" form-wrapper" onSubmit={handleSubmit(onSubmit)}>
  //       <div className="signUp-form">
  //         <div>
  //           <div className="column">
  //             <h1 className="title">Sign-Up</h1>
  //             <input id="user"
  //               placeholder="User name"
  //               {...register("userName", { required: true})}
  //                 />
  //             {errors.userName && <span>User name is required</span>}
  //             {(!IfExist(document.getElementById("user")))&&<span>User name is not aveliable</span>}
  //             <input
  //               placeholder="First name"
  //               type="text"
  //               {...register("firstName", { required: true })}
  //             />
  //             {errors.firstName && <span>First name is required</span>}
  
  //             <input
  //               placeholder="Last name"
  //               type="text"
  //               {...register("lastName", { required: true })}
  //             />
  //             {errors.lastName && <span>Last name is required</span>}
  //             <input
  //               placeholder="Password"
  //               type="password"
  //               {...register("password", { required: true,minLength:4 })}
  //             />
  //             {errors.password && <span>Password must be at least 4 chars</span>}
  
  //             <input
  //               placeholder="Verify password"
  //               type="password"
  //               {...register("verifyPassword", { required: true,minLength:4 })}
  //             />
  //             {errors.verifyPassword && <span>Password does not match</span>}
  //             <input
  //               type="date"
  //               {...register("date", { required: true })}
  //             />
  //             {errors.date && <span>Date of birth is required</span>}
  
  //             <input
  //               placeholder="E-mail"
  //               type="text"
  //               {...register("E_Mail", { required: true })}
  //             />
  //             {errors.E_Mail && <span>E-mail is required</span>}
  //             <label >
  //         Chose the difficulty level of the exercise:{" "}
  //       </label>
  //       <select {...register("difficulty", { required: true })}>
  //         <option value="beginner">beginner</option>
  //         <option value="intermediate">intermediate</option>
  //         <option value="expert">expert</option>
  //       </select>
       
  //          <input type="submit" className="button-sign" value="SignUp" ></input>
  //           </div>
  //         </div>
  //       </div>
  //     </form>
  //   );
  // }