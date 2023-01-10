import "./App.css";
import HomePage from "./pages/HomePage";
import NavBar from "./pages/NavBar";
import LoginPage from "./pages/LoginPage";

import { useEffect } from "react";
import { Routes, Route, NavLink } from 'react-router-dom';

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
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, []);

  return (
        <div className="App">
          <NavBar/>

      <NavLink to='/'>Home</NavLink>
      <NavLink to='/LoginPage'>Login/Sign up</NavLink>

    
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/LoginPage" element={<LoginPage/>}/>
      </Routes>
    </div>

  );
}

export default App;
// https://itnext.io/react-push-notifications-with-hooks-d293d36f4836
