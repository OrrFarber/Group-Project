import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, Navigate, NavLink, useParams } from "react-router-dom";
import "./workoutExercises.css";
import { UserContext } from "../App";
import { useContext } from "react";
import { set } from "react-hook-form";
import BodyParts from './BodyParts'

import { useNavigate } from "react-router-dom";
import BodyParts from "./BodyParts";
import { Button, Typography } from "@mui/material";

function WorkoutExercises() {
    const { userValues, conectedUser, ApiWorkouts,
      UserWorkouts,setTakeParms, } = useContext(UserContext);

  const [difficulty, setDifficulty] = useState("");
  const [exerciseType, setExerciseType] = useState("");
  const [muscleGroup, setMuscleGroup] = useState("");

  console.log(ApiWorkouts);

  const params=useParams()
    useEffect(()=>{
    setTakeParms(params.userName)   
},[])
  return (
    <div className="all-workouts">
      <Typography variant="h3" color="primary" display="block">
        All workouts
      </Typography>
      <br />
      <Button
        color="primary"
        size="large"
        variant="contained"
        onClick={() => UserWorkouts()}
      >
        show excrercise
      </Button>
      <br />
      <Typography varient="overline" color="primary">
        {" "}
        {userValues[conectedUser]?.muscleGroup}{" "}
      </Typography>

      {ApiWorkouts?.map((workout) => (
        <div className="single-workout">
          <div className="workout-params">
            <Typography varient="h3">{workout.name}</Typography>
            <p>{workout.difficulty}</p>
            <p>{workout.equipment}</p>
            <p>{workout.muscle}</p>
            <p>{workout.type}</p>
          </div>
          <div className="workout-instructions">
            <p>{workout.instructions}</p>
          </div>
          <div className="workout-nav-link">
            <Button
              LinkComponent={NavLink}
              sx={{ m: 2 }}
              size="small"
              fullWidth="true"
              color="error"
              to={`/WorkoutDetails/${workout.name}`}
              state={{ singleWorkout: workout }}
            >
              <button color="error">Start Workout</button>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkoutExercises;
