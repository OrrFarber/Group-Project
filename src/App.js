// import "./App.css";
import HomePage from "./pages/HomePage";
import ResponsiveAppBar from "./pages/NavBar";
import LoginPage from "./pages/LoginPage";
import WorkoutExercises from "./pages/WorkoutExercises";
import WorkoutDetails from "./pages/WorkoutDetails";

import { useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { createContext } from "react";
import "./App.css";
import Chart from "./pages/Chart"

import ContextData from "./components/ContextData";
import FirstSignIn from "./pages/FirstSignIn";
import Footer from "./pages/footer";

export const UserContext = createContext();

function App() {
  const {
    userValues,
    setUserValues,
    conectedUser, setConectedUser,
    userCollectionRef,
    progressCollectionRef,
    ThisUserRef,
    isOnline, setIsOnline,
    ApiWorkouts,
    UserWorkouts,
    userProgress, setUserProgress
  } = ContextData();
  const contextValue = {
    userValues,
    setUserValues,
    conectedUser, setConectedUser,
    userCollectionRef,
    progressCollectionRef,
    ThisUserRef,
    isOnline, setIsOnline,
    ApiWorkouts,
    UserWorkouts,
    userProgress, setUserProgress
  };

  console.log(userValues[conectedUser]?.isOnline);
  return (
    <UserContext.Provider value={contextValue}>
      <div className="App">
        <div className="topnav nav-bar">
          <NavLink className="navlink" to="/">
            Home
          </NavLink>
          {!isOnline && (
            <NavLink className="navlink" to="/LoginPage">
              Login
            </NavLink>
          )}
          <NavLink className="navlink" to="/FirstSignIn">
            Sign up
          </NavLink>
          {isOnline && (
            <NavLink className="navlink" to={`/WorkoutExercises/${userValues[conectedUser]?.firstName}`}>
              WorkoutExercises
            </NavLink>
          )}
          <NavLink className="navlink" to="/WorkoutDetails">
            WorkoutDetails
          </NavLink>
          <NavLink to="/Chart">Progress Chart</NavLink>


        </div>

        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/WorkoutExercises/:firstName" element={<WorkoutExercises />} />
            <Route path="/WorkoutDetails/:WorkoutName" element={<WorkoutDetails />} />
            <Route path="/FirstSignIn" element={<FirstSignIn />}></Route>
            <Route path="/Chart" element={<Chart />} />

          </Routes>
        </div>
        {/* <Footer/> */}
      </div>
    </UserContext.Provider>
  );
}

export default App;
// https://itnext.io/react-push-notifications-with-hooks-d293d36f4836
