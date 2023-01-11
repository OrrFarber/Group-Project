import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './workoutExercises.css'




function WorkoutExercises() {

    const [ApiWorkouts, setApiWorkouts] = useState()

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2e85761d3emsh297c57225455631p16cedcjsnf9b8f634604f',
                'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
            }
        };

        fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=abdominals', options)
            .then(response => response.json())
            // .then(response => console.log(response))
            .then(data => {
                setApiWorkouts(data)
                console.log(data)
            })
            .catch(err => console.error(err));
    }, [])
    return (
        <div className='all-workouts'>
            <h1>All workouts</h1>

            {ApiWorkouts.map(workout =>
                <div className='single-workout'>
                    <div className='workout-params'>
                        <h3>{workout.name}</h3>
                        <p>{workout.difficulty}</p>
                        <p>{workout.equipment}</p>
                        <p>{workout.muscle}</p>
                        <p>{workout.type}</p>
                    </div>
                    <div className='workout-instructions'>
                        <p>{workout.instructions}</p>
                    </div>
                    <div className='workout-nav-link'>
                        <NavLink to={`workout/${workout.name}`}><button>Start Workout</button></NavLink>
                    </div>
                </div>
            )}
        </div>
    )
}




export default WorkoutExercises;