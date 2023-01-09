import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

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
      <h1>hi</h1>
    </div>
  );
}

export default App;
// https://itnext.io/react-push-notifications-with-hooks-d293d36f4836
