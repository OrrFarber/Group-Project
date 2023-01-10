import { useState } from "react";
export default function ContextData(){
    const [userValues, setUserValues]=useState(JSON.parse(localStorage.getItem('myUser')))
    localStorage.setItem("myUser", JSON.stringify(userValues));
    return{
        userValues, setUserValues
    }
}