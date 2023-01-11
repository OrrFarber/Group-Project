// import "./App.css";
import HomePage from "./pages/HomePage";
import ResponsiveAppBar from "./pages/NavBar";
import LoginPage from "./pages/LoginPage";
import Progress from "./pages/Progress";
import WorkoutExercises from "./pages/WorkoutExercises";
import WorkoutDetails from "./pages/WorkoutDetails";


import { useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
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
    <div className="App">

      <ResponsiveAppBar />

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
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>
      {/* <WorkoutExercises /> */}
      <WorkoutDetails />
    </div>
  );
}

export default App;
// https://itnext.io/react-push-notifications-with-hooks-d293d36f4836
