import React from "react";
import {  useParams } from "react-router-dom";


function User(){
    
var {userid} = useParams()
  userid = "chetN";
    return(
        <>
       <center> <h1 className=" bg-gray-400 h-6 text-center">get data from url: {userid}</h1></center>
        </>
    )
}

export default User;  