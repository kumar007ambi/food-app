import React from "react";
//import User from "./User";
import UserClass from "./UserClass";


const About = () => {
  return (
    <div>
      <h1>About</h1>
      {/* <div><User name={"Ambika Kumar Kewat(function)"}/></div> */}
      <div><UserClass name={"Ambika Kumar Kewat(class)"}/></div>
    </div>
  );
};

export default About;
