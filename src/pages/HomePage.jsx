import "./Home.css";
import { useContext } from "react";
import { UserContext } from "../App";
import { useNavigate, useParams } from "react-router";
import { updateDoc,doc } from "@firebase/firestore";
import { db } from "../firebase/config";
export default function HomePage() {
  const { userValues, userIndex,conectedUser,isOnline,setIsOnline } =useContext(UserContext);
  const navigate = useNavigate();
  
  const params = useParams();
  const LogOut =()=>{
      navigate("/LoginPage");
      setIsOnline(false)
  };
  console.log(isOnline)
  console.log(conectedUser);
  return (
    <div className="HomePage">
      <div className="top">
        {isOnline && (
          <button onClick={() => LogOut()}>Log out</button>
        )}
        {isOnline && (
          <h1>Hello {userValues[conectedUser]?.firstName}</h1>
        )}
      </div>
      <div></div>
      <div className="bottom">
        <h4>Get help</h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>Join us</h4>
      </div>
    </div>
  );
}
