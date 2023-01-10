import { React, useContext } from "react";
import { useForm } from "react-hook-form";
import "./SignUp.css";
import {UserContext} from "../App"

function FirstSignIn() {

  const { userValues, setUserValues} = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setUserValues([...userValues, data]);
  };
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
