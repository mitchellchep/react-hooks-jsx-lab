import React from "react";
import { image } from "../data/data";


function About() {
  return (
  <div id="about">
    <h2>About me</h2>
    <p>One thing about me is that i do not measure myself by others' expectations or lt others define my worth!</p>
    <img src={image} alt="I made this"/>
  </div>
  );
}

export default About;
