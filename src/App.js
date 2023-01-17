import "./App.css";
import Chart from "./pages/Chart";
import ContextData from "./components/ContextData";
import FirstSignIn from "./pages/FirstSignIn";
import Footer from "./pages/footer";
import EditPage from "./pages/EditPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import WorkoutExercises from "./pages/WorkoutExercises";
import WorkoutDetails from "./pages/WorkoutDetails";
import Nowhere from "./pages/404";
import { useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { createContext } from "react";
import { Toolbar, Button, Box } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

export const UserContext = createContext();

function App() {
  const {
    userValues,
    setUserValues,
    conectedUser,
    setConectedUser,
    userCollectionRef,
    progressCollectionRef,
    ThisUserRef,
    isOnline,
    setIsOnline,
    ApiWorkouts,
    UserWorkouts,
    userProgress,
    setUserProgress,
    offline,
    setTakeParms,
  } = ContextData();
  const contextValue = {
    userValues,
    setUserValues,
    conectedUser,
    setConectedUser,
    userCollectionRef,
    progressCollectionRef,
    ThisUserRef,
    isOnline,
    setIsOnline,
    ApiWorkouts,
    UserWorkouts,
    userProgress,
    setUserProgress,
    offline,
    setTakeParms,
  };

  console.log(userValues[conectedUser]?.isOnline);
  return (
    <UserContext.Provider value={contextValue}>
      <div className="App" style={{ minHeight: "100vh" }}>
        <Box>
          <Toolbar
            color="inherit"
            position="sticky"
            sx={{
              backgroundColor: "black",
              top: 0,
              width: "100vw",
            }}
          >
            <FitnessCenterIcon color="primary" />
          

            {!isOnline && (
              <Button
                LinkComponent={NavLink}
                sx={{ m: 2 }}
                size="small"
                fullWidth="true"
                color="primary"
                to="/LoginPage"
              >
                Login
              </Button>
            )}

            <Button
              LinkComponent={NavLink}
              to="/"
              sx={{ m: 2 }}
              size="small"
              fullWidth="true"
              color="primary"
            >
              Home
            </Button>

            {!isOnline && (
              <Button
                LinkComponent={NavLink}
                sx={{ m: 2 }}
                size="small"
                fullWidth="true"
                color="primary"
                to="/FirstSignIn"
              >
                Sign up
              </Button>
            )}
            {isOnline && (
              <Button
                LinkComponent={NavLink}
                sx={{ m: 2 }}
                size="small"
                fullWidth="true"
                color="primary"
                to={`/WorkoutExercises/${userValues[conectedUser]?.firstName}`}
              >
                Workout Exercises
              </Button>
            )}

            {isOnline && (
              <Button
                className="navlink"
                LinkComponent={NavLink}
                sx={{ m: 2 }}
                size="small"
                fullWidth="true"
                color="primary"
                to="/WorkoutDetails"
              >
                Workout Details
              </Button>
            )}
            {isOnline && (
              <Button
                LinkComponent={NavLink}
                sx={{ m: 2 }}
                size="small"
                fullWidth="true"
                color="primary"
                to="/Chart"
              >
                Progress Chart
              </Button>
            )}
            {isOnline && (
              <Button
                LinkComponent={NavLink}
                sx={{ m: 2 }}
                size="small"
                fullWidth="true"
                color="primary"
                to="/EditPage"
              >
                Edit Page
              </Button>
            )}
          </Toolbar>

          <div>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/LoginPage" element={<LoginPage />} />
              <Route
                path="/WorkoutExercises/:userName"
                element={<WorkoutExercises />}
              />
              <Route
                path="/WorkoutDetails/:WorkoutName"
                element={<WorkoutDetails />}
              />
              <Route path="/FirstSignIn" element={<FirstSignIn />} />
              <Route path="/Chart" element={<Chart />} />
              <Route path="/EditPage" element={<EditPage />} />
              <Route path="*" element={<Nowhere />} />
            </Routes>
          </div>

          <Footer className="footer" />
        </Box>
      </div>
    </UserContext.Provider>
  );
}

export default App;
// https://itnext.io/react-push-notifications-with-hooks-d293d36f4836
