import { React, useContext } from "react";
import { useForm } from "react-hook-form";
import "./SignUp.css";
import {UserContext} from "../App"

function FirstSignIn() {

  const { userValues, setUserValues} = useContext(UserContext);
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const onSubmit = (data) => {
    setUserValues(data);
};
console.log(userValues)
return (
    <form className=" form-wrapper" onSubmit={handleSubmit(onSubmit)}>
      <div className="signUp-form">
        <div>
          <div className="column">
            <h1 className="title">Sign-Up</h1>
            <input
              placeholder="User name"
              {...register("userName", { required: true })}
            />
            {errors.userName && <span>User name is required</span>}

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

         

           <input type="submit" className="button-sign" value="SignUp" />
          </div>
        </div>
      </div>
    </form>
  );
}
export default FirstSignIn;
