import { React, useContext } from "react";
import { useForm } from "react-hook-form";
import "./SignUp.css";
import {UserContext} from "../App"
import { useNavigate } from "react-router";
function FirstSignIn() {
  const navigate=useNavigate()
  const { userValues, setUserValues} = useContext(UserContext);
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const onSubmit = (data) => {
    if(IfExist(document.getElementById("user"))){
    setUserValues([...userValues,data]);
    navigate("/LoginPage")
  }
  console.log(IfExist(document.getElementById("user")))

}
  
function IfExist(user){
for(let i=0;i<userValues.length-1;i++){
    if(userValues[i]?.userName===user?.value){
        console.log(userValues[i]?.userName);
        console.log(user?.value);
        return false;    
    }
}
return true;
}
return (
    <form className=" form-wrapper" onSubmit={handleSubmit(onSubmit)}>
      <div className="signUp-form">
        <div>
          <div className="column">
            <h1 className="title">Sign-Up</h1>
            <input id="user"
              placeholder="User name"
              {...register("userName", { required: true})}
                />
            {errors.userName && <span>User name is required</span>}
            {(!IfExist(document.getElementById("user")))&&<span>User name is not aveliable</span>}
            <input
              placeholder="First name"
              type="text"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && <span>First name is required</span>}

            <input
              placeholder="Last name"
              type="text"
              {...register("lastName", { required: true })}
            />
            {errors.lastName && <span>Last name is required</span>}
            <input
              placeholder="Password"
              type="password"
              {...register("password", { required: true,minLength:4 })}
            />
            {errors.password && <span>Password must be at least 4 chars</span>}

            <input
              placeholder="Verify password"
              type="password"
              {...register("verifyPassword", { required: true,minLength:4 })}
            />
            {errors.verifyPassword && <span>Password does not match</span>}
            <input
              type="date"
              {...register("date", { required: true })}
            />
            {errors.date && <span>Date of birth is required</span>}

            <input
              placeholder="E-mail"
              type="text"
              {...register("E_Mail", { required: true })}
            />
            {errors.E_Mail && <span>E-mail is required</span>}
            <label >
        Chose the difficulty level of the exercise:{" "}
      </label>
      <select {...register("difficulty", { required: true })}>
        <option value="beginner">beginner</option>
        <option value="intermediate">intermediate</option>
        <option value="expert">expert</option>
      </select>
     
         <input type="submit" className="button-sign" value="SignUp" ></input>
          </div>
        </div>
      </div>
    </form>
  );
}
export default FirstSignIn;
