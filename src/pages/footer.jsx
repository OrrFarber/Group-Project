import "./Home.css";
import { Typography, Toolbar } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <Toolbar
      color="inherit"
      position="sticky"
      sx={{
        backgroundColor: "black",
        justifyContent: "space-around",
        marginTop: "16",
        position: "fixed",
        width: "100vw",
        bottom: 0,
      }}
    >
      <Typography color="primary" variant="h6">
        Contact us via:
      </Typography>
      <FacebookIcon color="primary" />
      <InstagramIcon color="primary" />
      <TwitterIcon color="primary" />
    </Toolbar>
  );
}

