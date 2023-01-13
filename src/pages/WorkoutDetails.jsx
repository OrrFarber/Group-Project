import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './workoutDetails.css'
import { UserContext } from '../App'
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { set } from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import { collection, getDocs, doc, addDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";


function WorkoutDetails() {
    const location = useLocation()



    const { userProgress, userValues, conectedUser, ApiWorkouts } = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(false)
    const date = new Date()
    const fullDate = `${date.getFullYear()}/${(date.getMonth() + 1)}/${date.getDate()}`
    const [workoutProgress, setWorkoutProgress] = useState([])
    //START OF THE USE EFFECT
    const [realTimeUser, setRealTimeUser] = useState([])
    const [workoutDetails, setWorkoutDetails] = useState({})
    console.log(userProgress);
    console.log(userValues);
    console.log(conectedUser);
    console.log(userProgress.find(item => userValues[conectedUser].userName == item.userName));
    useEffect(() => {

        const tempUser = userProgress.find(item => userValues[conectedUser].userName == item.userName)
        setRealTimeUser(tempUser)
        setWorkoutProgress(tempUser)
        setWorkoutDetails(location.state?.singleWorkout)
        // console.log(tempUser)
        // console.log(realTimeUser);
    }, [])

    // console.log(realTimeUser?.userName);
    // console.log(realTimeUser?.userName);
    // console.log(process.env.REACT_APP_API_KEY);




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

        let workoutIndex = workoutProgress?.progress.findIndex(workout => workout.date === fullDate)
        if (workoutIndex != -1) {
            const tempArray = workoutProgress;
            if (!tempArray?.progress[workoutIndex].workouts.includes(workoutDetails)) {
                tempArray?.progress[workoutIndex].workouts.push(workoutDetails)
                setWorkoutProgress({ ...tempArray })
            }
        } else {
            const tempArray = workoutProgress;
            tempArray.progress.push({
                date: fullDate,
                workouts: [workoutDetails]
            })
            setWorkoutProgress({ ...tempArray })
        }
    }
    const UpdateUserProgress = async (id) => {
        AddWorkoutProgress()
        const userDoc = doc(db, "Progress", id)
        const newFields = { progress: workoutProgress.progress }
        await updateDoc(userDoc, newFields)
        console.log(newFields);
    }






    return (
        <div>
            <h1>Single Workout</h1>
            {/* {console.log(ApiWorkouts[0])} */}
            <div >
                <h3>{workoutDetails?.name}</h3>
                <p>{workoutDetails?.difficulty}</p>
                <p>{workoutDetails?.equipment}</p>
                <p>{workoutDetails?.muscle}</p>
                <p>{workoutDetails?.type}</p>
            </div>
            <div >
                <p>{workoutDetails?.instructions}</p>
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
                        <button onClick={() => UpdateUserProgress(workoutProgress.id)}>Done</button>
                        {console.log(workoutProgress)}
                        {console.log(workoutProgress?.progress?.findIndex(workout => workout.date === fullDate))}
                    </>
                )}
            </div>


        </div>
    )
}

export default WorkoutDetails