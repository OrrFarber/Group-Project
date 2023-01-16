import { React, useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./SignUp.css";
import { UserContext } from "../App";
import { useNavigate } from "react-router";
import { db } from "../firebase/config";
import { collection, getDocs, doc, addDoc,updateDoc, deleteDoc } from "firebase/firestore";
import { async } from "q";

function EditPage() {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [newUserName, setNewUserName] = useState("");
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newVerifyPassword, setNewVeifyPassword] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newGender, setNewGender] = useState("");
  const [newHeight, setNewHeight] = useState();
  const [newWeight, setNewWeight] = useState();
  const [newDifficulty, setNewDifficulty] = useState("");
  const [newExerciseType, setNewExerciseType] = useState("");
  const [newMuscleGroup, setNewMuscleGroup] = useState("");
  const [newGoal, setNewGoal] = useState("");
  const [newIsOnline, setNewIsOnline] = useState();
  const [newUserIndex, setNewUserIndex] = useState();

  const {
    userValues,
    setUserValues,
    userCollectionRef,
    workoutCollectionRef,
    progressCollectionRef,
    userIndex,
    conectedUser
  } = useContext(UserContext);

  const checkUserName = () => {
    for (let i = 0; i < userValues.length; i++) {
      if (userValues[i].userName === newUserName.trim()) {
        return false;
      }
    }
    if (newUserName.trim().length > 3) {
      return true;
    }
    return false;
  };
  const checkFirstName = () => {
    if (newFirstName.trim().length > 3) {
      return true;
    }
    return false;
  };
  const checkLastName = () => {
    if (newLastName.trim().length > 3) {
      return true;
    }
    return false;
  };
  const checkPassword = () => {
    if (newPassword.trim().length > 3) {
      return true;
    }
    return false;
  };
  const checkVerifyPassword = () => {
    if (newVerifyPassword !== newPassword) {
      return false;
    }
    return true;
  };
  const checkDate = () => {
    if (newDate) {
      return true;
    }
    return false;
  };
  const checkEmail = () => {
    if (newEmail) {
      return true;
    }
    return false;
  };
  const checkDiffuculty = () => {
    if (newDifficulty) {
      return true;
    }
    return false;
  };
  const checkWeight = () => {
    if (newWeight) {
      return true;
    }
    return false;
  };
  const checkAll = () => {
    return (
      checkUserName() &&
      checkFirstName() &&
      checkLastName() &&
      checkPassword() &&
      checkVerifyPassword() &&
      checkDate() &&
      checkEmail() &&
      checkDiffuculty()
    );
  };
  const updateUser=async()=>{
    console.log(userValues[conectedUser].id);
    setClick(true);
if(checkAll()){
const userDoc=doc(db,"User",userValues[conectedUser].id)
const newFields={userName: newUserName,
  firstName: newFirstName,
  lastName: newLastName,
  password: newPassword,
  verifyPassword: newVerifyPassword,
  date: newDate,
  email: newEmail,
  gender: newGender,
  weight: newWeight,
  difficulty: newDifficulty,
  exerciseType: newExerciseType,
  muscleGroup: newMuscleGroup,
  height: newHeight,
  goal: newGoal,
}
await updateDoc(userDoc,newFields)
 navigate('/')

}
}
const [confirm,setConfirm]=useState(false);
const [deleteclick,setDeleteClick]=useState(false);


const deleteUser=async()=>{
    setDeleteClick(true)
    if(confirm){
    const userDoc=doc(db,"User",userValues[conectedUser]?.id)
    await deleteDoc(userDoc)
    navigate("/")
    }
}

  return (
    <div className="form-wrapper">
      <div className="signUp-form">

        <div>

          <div className="column">
            <h1 className="title">Edit detailes</h1>

            <input
              placeholder="User name"
              onChange={(event) => {
                setNewUserName(event.target.value);
              }}
            />
            {click && !checkUserName() && <span>User name is required</span>}

            <input
              placeholder="First name"
              onChange={(event) => {
                setNewFirstName(event.target.value);
              }}
            />
            {click && !checkFirstName() && <span>First name is required</span>}

            <input
              placeholder="Last name"
              onChange={(event) => {
                setNewLastName(event.target.value);
              }}
            />
            {click && !checkLastName() && <span>Last name is required</span>}

            <input
              placeholder="Password"
              onChange={(event) => {
                setNewPassword(event.target.value);
              }}
            />
            {click && !checkPassword() && (
              <span>Password name is required</span>
            )}
            <input
              placeholder="Verify password"
              onChange={(event) => {
                setNewVeifyPassword(event.target.value);
              }}
            />
            {click && !checkVerifyPassword() && (
              <span>Password does not match</span>
            )}

            <input
              type="date"
              placeholder="Date"
              onChange={(event) => {
                setNewDate(event.target.value);
              }}
            />
            {click && !checkDate() && <span>Date is required</span>}

            <input
              placeholder="E-mail"
              onChange={(event) => {
                setNewEmail(event.target.value);
              }}
            />
            {click && !checkEmail() && <span>E-mail is required</span>}

            <div className="left">
              <input
                type="radio"
                id="Male"
                name="gender"
                value="Male"
                onChange={(event) => {
                  setNewGender(event.target.value);
                }}
              />
              <label htmlFor="Male">Male</label>
            </div>

            <div className="left">
              <input
                type="radio"
                id="Female"
                name="gender"
                value="Female"
                onChange={(event) => {
                  setNewGender(event.target.value);
                }}
              />
              <label htmlFor="Female">Female</label>
            </div>

            <input
              placeholder="Height cm"
              onChange={(event) => {
                setNewHeight(event.target.value);
              }}
            />
            <input
              placeholder="Weight KG"
              onChange={(event) => {
                setNewWeight(event.target.value);
              }}
            />
            {click && !checkWeight() && <span>Weight is required</span>}
            <label>Chose the difficulty level of the exercise: </label>
            <select
              placeholder="Difficulty"
              onChange={(event) => {
                setNewDifficulty(event.target.value);
              }}
            >
              <option value="none">None</option>
              <option value="beginner">beginner</option>
              <option value="intermediate">intermediate</option>
              <option value="expert">expert</option>
            </select>
            {click && !checkDiffuculty() && <span>Difficulty is required</span>}

            <label name="exercise-type" className="exercise type">
              Chose the exercise type:
            </label>
            <select
              name="exercise-type"
              onChange={(event) => {
                setNewExerciseType(event.target.value);
              }}
            >
              <option value="cardio">cardio</option>
              <option value="olympic_weightlifting">
                olympic_weightlifting
              </option>
              <option value="plyometrics">plyometrics</option>
              <option value="powerlifting">powerlifting</option>
              <option value="strength">strength</option>
              <option value="stretching">stretching</option>
              <option value="strongman">strongman</option>
            </select>

            <label name="muscle-group" className="exercise type">
              Chose muscle group targeted by the exercise:
            </label>
            <select
              name="muscle-group"
              onChange={(event) => {
                setNewMuscleGroup(event.target.value);
              }}
            >
              <option value="abdominals">abdominals</option>
              <option value="abductors">abductors</option>
              <option value="adductors">adductors</option>
              <option value="biceps">biceps</option>
              <option value="calves">calves</option>
              <option value="chest">chest</option>
              <option value="forearms">forearms</option>
              <option value="glutes">glutes</option>
              <option value="hamstrings">hamstrings</option>
              <option value="lats">lats</option>
              <option value="lowerback ">lowerback </option>
              <option value="middleback ">middleback </option>
              <option value="neck ">neck </option>
              <option value="quadriceps ">quadriceps </option>
              <option value="traps ">traps </option>
              <option value="triceps ">triceps </option>
            </select>
            <input
              placeholder="Goal"
              onChange={(event) => {
                setNewGoal(event.target.value);
              }}
            />
            <button onClick={()=>updateUser()} className="button-sign">
              Approve
            </button>

            {userValues?.map((user, index) => {
              return (
                <div key={index}>
                  <h1>{user.userName}</h1>
                  <h1>{user.password}</h1>
                </div>
              );
            })}
            {userIndex?.map((user, index) => {
              return (
                <div key={index}>
                  <h1>{user.userIndex}</h1>
                </div>
              );
            })}
        <button className="left button-delete" onClick={()=>deleteUser()}>Delelte user</button>
        {deleteclick&&<p >Are you sure you want to delete your user?</p>}
        {deleteclick&&<button onClick={()=>setConfirm(true)}>Yes</button>}
        {deleteclick&&<button onClick={()=>setConfirm(false)}>No</button>}
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditPage;

