import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import "./workoutExercises.css";
import { UserContext } from "../App";
import { useContext } from "react";
import { set } from "react-hook-form";
import { useNavigate } from 'react-router-dom'
import BodyParts from './BodyParts'
import { useParams } from "react-router-dom";
function WorkoutExercises() {
    const { userValues, conectedUser, ApiWorkouts,
        UserWorkouts,setTakeParms, } = useContext(UserContext);
   
    const params=useParams()
    useEffect(()=>{
    setTakeParms(params.userName)
    
},[])
    return (
        <div className="all-workouts">
            <h1>All workouts</h1>
            <button onClick={() => UserWorkouts()}>show excrercise</button>
            {ApiWorkouts?.map((workout) => (
                <div className="single-workout">
                    <div className="workout-params">
                        <h3>{workout.name}</h3>
                        <p>{workout.difficulty}</p>
                        <p>{workout.equipment}</p>
                        <p>{workout.muscle}</p>
                        <p>{workout.type}</p>
                    </div>
                    <div className="workout-instructions">
                        <p>{workout.instructions}</p>
                    </div>
                    <div className="workout-nav-link">
                        <NavLink to={`/WorkoutDetails/${workout.name}`} state={{ singleWorkout: workout }}>
                            <button>Start Workout</button>
                        </NavLink>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default WorkoutExercises;
