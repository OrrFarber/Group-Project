import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, Navigate, NavLink, useParams } from "react-router-dom";
import "./workoutExercises.css";
import { UserContext } from "../App";
import { useContext } from "react";
import { set } from "react-hook-form";
import BodyParts from "./BodyParts";

import { Button, Typography, Box, Paper } from "@mui/material";

function WorkoutExercises() {
  const { userValues, conectedUser, ApiWorkouts, UserWorkouts, setTakeParms } =
    useContext(UserContext);

  const [difficulty, setDifficulty] = useState("");
  const [exerciseType, setExerciseType] = useState("");
  const [muscleGroup, setMuscleGroup] = useState("");

  console.log(ApiWorkouts);

  const params = useParams();
  useEffect(() => {
    setTakeParms(params.userName);
  }, []);
  return (
    <div className="all-workouts">
      <Box sx={{ minHeight: "98vh" }}>
        <Typography variant="h3" color="primary.dark" display="block">
          All workouts
        </Typography>
        <br />
        <Button
          color="primary"
          size="large"
          variant="contained"
          sx={{m:2}}
          onClick={() => UserWorkouts()}
        >
          show excrercise
        </Button>
        <br />
        <Typography varient="overline" color="primary">
          {userValues[conectedUser]?.muscleGroup}
        </Typography>

        {ApiWorkouts?.map((workout) => (
          <div className="single-workout">
            <Paper sx={{ p: 3, m: 4, borderRadius: 10 }} elevation={24}>
              <div className="workout-params">
                <Button
                  color="secondary"
                  variant="contained"
                  sx={{ borderRadius: 5 }}
                >
                  {workout.name}
                </Button>
                <Button
                  color="secondary"
                  variant="contained"
                  sx={{ borderRadius: 5 }}
                >
                  {" "}
                  {workout.difficulty}
                </Button>
                <Button
                  color="secondary"
                  variant="contained"
                  sx={{ borderRadius: 5 }}
                >
                  {" "}
                  {workout.equipment}
                </Button>
                <Button
                  color="secondary"
                  variant="contained"
                  sx={{ borderRadius: 5 }}
                >
                  {" "}
                  {workout.muscle}
                </Button>
                <Button
                  color="secondary"
                  variant="contained"
                  sx={{ borderRadius: 5 }}
                >
                  {" "}
                  {workout.type}
                </Button>
              </div>
              <div className="workout-instructions">
                <Typography sx={{ m: 3 }} variant="body2"> {workout.instructions}</Typography>
              </div>
              <div className="workout-nav-link">
                <Button
                  LinkComponent={NavLink}
                  sx={{ m: 2, width:"12vw"}}
                  size="large"
                 variant="contained"
                  color="error"
                  to={`/WorkoutDetails/${workout.name}`}
                  state={{ singleWorkout: workout }}
                >
                  Start Workout
                </Button>
              </div>
            </Paper>
          </div>
        ))}
      </Box>
    </div>
  );
}

export default WorkoutExercises;
