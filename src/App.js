// import "./App.css";
import HomePage from "./pages/HomePage";
import ResponsiveAppBar from "./pages/NavBar";
import LoginPage from "./pages/LoginPage";
import Progress from "./pages/Progress";
import WorkoutExercises from "./pages/WorkoutExercises";
import WorkoutDetails from "./pages/WorkoutDetails";


import { useEffect } from "react";
import { Routes, Route, NavLink } from 'react-router-dom';
import { createContext } from 'react';
import ContextData from "./components/ContextData";
import "./App.css";
import ContextData from "./components/ContextData";
import FirstSignIn from "./pages/FirstSignIn";
export const UserContext=createContext()

function App() {
  const{userValues, setUserValues}=ContextData()
  const contextValue={userValues, setUserValues}
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "9796feb253msh65f876a3c1039f8p1facffjsnb9a3c57b73f1",
        "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
      },
    };

    fetch(
      "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps",
      options
    )
      .then((response) => response.json())
      // .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <UserContext.Provider value={contextValue} >

    <div className="App">


      <div className="topnav nav-bar">
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
        <NavLink className="navlink" to="/LoginPage">
          Login/Sign up
        </NavLink>
        <NavLink className="navlink" to="/Progress">
          Progress
        </NavLink>
   <NavLink  to="/FirstSignIn">Sign Up </NavLink>
      </div>

    
      <WorkoutExercises />
      <WorkoutDetails />
    <div>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
        <Route path="/LoginPage" element={<LoginPage/>}/>
      <h1>hi</h1>
     

        <Route path='/FirstSignIn' element={<FirstSignIn/>}></Route>
    </Routes>
    </div>
    </div>
    </UserContext.Provider>

  );
}

export default App;
// https://itnext.io/react-push-notifications-with-hooks-d293d36f4836
