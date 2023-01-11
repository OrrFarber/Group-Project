import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './workoutDetails.css'
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function WorkoutDetails() {
    const [isLoading, setIsLoading] = useState(true)
    const [ApiWorkouts, setApiWorkouts] = useState([{}])
    const date = new Date()
    const fullDate = `${date.getFullYear()}/${(date.getMonth() + 1)}/${date.getDate()}`
    const [workoutProgress, setWorkoutProgress] = useState([])

    //START OF THE USE EFFECT

    useEffect(() => {
        setIsLoading(true)
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
                // setWorkoutProgress(

                // )
                console.log("hhhh", data)
                setIsLoading(false)

                setWorkoutProgress([...workoutProgress,
                {
                    username: "roi",
                    progress:
                        [{
                            date: fullDate,
                            workouts:
                                [data[0],
                                data[2]]
                        }]
                }
                ])
            }).catch(err => console.error(err));
    }, [])




    //TIMRER PROPERTIES

    const [time, setTime] = useState(10)
    const [key, setKey] = useState(0);
    const [timerIsPlaying, setTimerIsPlaying] = useState(false)
    const renderTime = ({ remainingTime, elapsedTime }) => {
        if (remainingTime === 0 && time === 10) {
            // setTime(20)
            setKey(prevKey => prevKey + 1)
            setTimerIsPlaying(false)
            return <div className="timer">Now Rest</div>;
        }
        return (
            <div className="timer">
                {/* {console.log(elapsedTime)} */}
                <div className="text">Remaining</div>
                <div className="value">{remainingTime}</div>
                <div className="text">seconds</div>
            </div>
        );
    };







    function AddWorkoutProgress() {
        let workoutIndex = workoutProgress[0]?.progress.findIndex(workout => workout.date === fullDate)
        if (workoutIndex != -1) {
            const tempArray = workoutProgress;
            tempArray[0].progress[workoutIndex].workouts.push(ApiWorkouts[5])
            setWorkoutProgress([...tempArray])
        } else {
            const tempArray = workoutProgress;
            tempArray[0].progress.push({
                date: fullDate,
                workouts: [ApiWorkouts[5]]
            })
            setWorkoutProgress([...tempArray])
        }
    }

    return (
        <div>
            <h1>Single Workout</h1>
            {/* {console.log(ApiWorkouts[0])} */}
            <div >
                <h3>{ApiWorkouts[0]?.name}</h3>
                <p>{ApiWorkouts[0]?.difficulty}</p>
                <p>{ApiWorkouts[0]?.equipment}</p>
                <p>{ApiWorkouts[0]?.muscle}</p>
                <p>{ApiWorkouts[0]?.type}</p>
            </div>
            <div >
                <p>{ApiWorkouts[0]?.instructions}</p>
            </div>

            <div>

                <h1>
                    CountdownCircleTimer
                    <br />
                    React Component
                </h1>
                <div className="timer-wrapper">
                    <CountdownCircleTimer
                        isPlaying={timerIsPlaying}
                        key={key}
                        duration={time}
                        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                        colorsTime={[10, 6, 3, 0]}
                        onComplete={() => ({ shouldRepeat: true, delay: 3 })}
                    >
                        {renderTime}
                    </CountdownCircleTimer>
                </div>
                <button onClick={() => setTimerIsPlaying(true)}>start</button>
                <button onClick={() => setTimerIsPlaying(false)}>pause</button>
                <button onClick={() => setKey(prevKey => prevKey + 1)}>
                    Restart Timer
                </button>
                <p className="info">
                    Change component properties in the code filed on the right to try
                    difference functionalities
                </p>
                {/* <button onClick(())>stop</button> */}

            </div>

            <div>
                {isLoading ? <p> loading</p> : (
                    <>
                        <button onClick={AddWorkoutProgress}>Done</button>
                        {console.log(workoutProgress)}
                        {console.log(workoutProgress[0]?.progress.findIndex(workout => workout.date === fullDate))}
                    </>
                )}
            </div>


        </div>
    )
}

export default WorkoutDetails