// import "./Home.css";
import { useContext } from "react";
import { UserContext } from "../App";
import { useNavigate, useParams } from "react-router";
import { updateDoc, doc } from "@firebase/firestore";
import { db } from "../firebase/config";
import BodyParts from "./BodyParts";
import { Typography, Button, Box } from "@mui/material";

export default function HomePage() {
  const { userValues, userIndex, conectedUser, isOnline, setIsOnline } =
    useContext(UserContext);
  const navigate = useNavigate();

  const params = useParams();
  const LogOut = () => {
    navigate("/LoginPage");
    setIsOnline(false);
  };
  console.log(isOnline);
  console.log(conectedUser);
  return (
    <div>
      <Box>
        {isOnline && (
          <Button
            sx={{ m: 8 }}
            color="primary"
            size="large"
            variant="contained"
            onClick={() => LogOut()}
          >
            Log out
          </Button>
        )}
        {isOnline && (
          <Typography color="primary" variant="h4">
            Hello {userValues[conectedUser]?.firstName}
          </Typography>
        )}
        {isOnline && <BodyParts></BodyParts>}
      </Box>
    </div>
  );
}
