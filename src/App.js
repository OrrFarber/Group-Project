import "./App.css";
import { useEffect } from "react";
import { createContext } from 'react';
import ContextData from "./components/ContextData";
import { Route,Routes } from "react-router";
import { NavLink } from "react-router-dom";
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
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <UserContext.Provider value={contextValue} >

    <div className="App">
      <h1>hi</h1>
      <NavLink  to="/FirstSignIn">Sign Up </NavLink>

    </div>
    <Routes>
        {/* <Route path='/' element={<HomePage/>}></Route> */}
        <Route path='/FirstSignIn' element={<FirstSignIn/>}></Route>
    </Routes>
    </UserContext.Provider>

  );
}

export default App;
// https://itnext.io/react-push-notifications-with-hooks-d293d36f4836
