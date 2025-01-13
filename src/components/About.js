
import { Outlet } from "react-router-dom";
import ProfileFunctionalComponet from "./Profile.js";
import Profile from "./ProfileClass";
import React from "react";
import { Component } from "react";
import userContext from "../utils/userContext.js";



class About extends Component {

    constructor(props){
        super(props)
        
        // console.log("parant-constructor");
    }

     componentDidMount(){
        // best place make API call


        // console.log("parant componentDidMount");
    }



   render(){
    console.log("Render")
    return(
        <div>
            <h1>About Us Page</h1>
            <userContext.Consumer>
                {({user}) =>(
                    <h4 className="font-bold text-xl p-10">
                        {user.name}- {user.email}</h4>
                )}
            </userContext.Consumer>
            <p>
                This is my About page.
            </p>
            {/* <ProfileFunctionalComponet name = {"Shanedra Singh"} /> */}
            <Profile />
        </div>
    )
   }
};

export default About;