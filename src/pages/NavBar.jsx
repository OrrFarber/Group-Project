import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="NavBar">
      <ul className="left-side-nav">
        <img
          src="https://img.freepik.com/premium-vector/fitness-body-building-logo_7085-141.jpg?w=2000"
          alt="fitness logo"
        ></img>
        <li><NavLink>Home</NavLink></li>
        <li><NavLink>Progress</NavLink></li>
        <li><NavLink>Details</NavLink></li>

  
      </ul>
    </div>
  );
}
